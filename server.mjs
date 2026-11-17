// JuegaBarrio - servidor de la demo. Sin dependencias: solo Node 20+.
// Uso: node server.mjs  ->  http://localhost:3000
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(ROOT, "public");
const DATA_FILE = path.join(process.env.DATA_DIR || path.join(ROOT, "data"), "db.json");
const PORT = Number(process.env.PORT || 3000);

// ---------- Datos simulados (no son datos reales de ninguna municipalidad) ----------
function seed() {
  const h = (hours) => new Date(Date.now() + hours * 3600e3).toISOString();
  return {
    spaces: [
      { id: "losa-demo-1", name: "Losa Demo 1 (simulada)", type: "losa", address: "Los Olivos, Lima (ubicación simulada)", lat: -11.9935, lng: -77.0702, capacity: 14,
        rules: ["Llegar a la hora", "Dejar la losa limpia", "Respetar el turno del siguiente grupo"], schedule: "Lun a Vie 4:00 p. m. - 8:00 p. m.", qrToken: "demo-losa-1", careStreak: 5 },
      { id: "parque-demo-2", name: "Parque Demo 2 (simulado)", type: "parque", address: "Los Olivos, Lima (ubicación simulada)", lat: -11.9892, lng: -77.0768, capacity: 30,
        rules: ["Recoger la basura", "Cuidar las áreas verdes", "Respetar los horarios"], schedule: "Todos los días 6:00 a. m. - 8:00 p. m.", qrToken: "demo-parque-2", careStreak: 2 },
      { id: "losa-demo-3", name: "Losa Demo 3 (simulada)", type: "losa", address: "Los Olivos, Lima (ubicación simulada)", lat: -11.9968, lng: -77.0655, capacity: 12,
        rules: ["Dejar la losa limpia", "No usar después del horario", "Avisar si algo está dañado"], schedule: "Sáb y Dom 8:00 a. m. - 6:00 p. m.", qrToken: "demo-losa-3", careStreak: 0 },
    ],
    activities: [
      { id: "act-1", spaceId: "losa-demo-1", title: "Vóley de la tarde", category: "Vóley", startsAt: h(1), capacity: 12, status: "programada",
        participants: [{ name: "Vecina demo", committed: true }] },
      { id: "act-2", spaceId: "parque-demo-2", title: "Fútbol recreativo", category: "Fútbol", startsAt: h(3), capacity: 20, status: "programada", participants: [] },
      { id: "act-3", spaceId: "losa-demo-1", title: "Básquet (ya terminó)", category: "Básquet", startsAt: h(-26), capacity: 10, status: "completada",
        participants: [{ name: "Vecino demo", committed: true, checkedInAt: h(-26) }],
        closure: { cleanSpace: true, checklist: { basura: true, equipos: true, areaOrdenada: true }, closedAt: h(-24) } },
    ],
    incidents: [],
  };
}

let db;
function load() {
  try { db = JSON.parse(fs.readFileSync(DATA_FILE, "utf8")); } catch { db = seed(); save(); }
}
function save() {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(db, null, 2));
}
load();

// Indicador principal: % de actividades completadas cerradas con el espacio en buen estado.
function indicator() {
  const done = db.activities.filter((a) => a.status === "completada" && a.closure);
  const clean = done.filter((a) => a.closure.cleanSpace).length;
  const arrivals = db.activities.reduce((n, a) => n + a.participants.filter((p) => p.checkedInAt).length, 0);
  const open = db.incidents.filter((i) => i.status === "abierta").length;
  const resolved = db.incidents.length - open;
  return { completed: done.length, clean, pct: done.length ? Math.round((clean / done.length) * 100) : null, arrivals, incidentsOpen: open, incidentsResolved: resolved };
}

// ---------- API ----------
const clean = (s, n = 200) => String(s ?? "").slice(0, n).trim();
const okPhoto = (p) => (typeof p === "string" && p.startsWith("data:image/") && p.length < 1_500_000 ? p : undefined);

function route(method, url, body) {
  const m = (re) => url.pathname.match(re);
  let r;
  if (method === "GET" && url.pathname === "/api/state") return { spaces: db.spaces, activities: db.activities, incidents: db.incidents, indicator: indicator() };

  if (method === "POST" && url.pathname === "/api/reset") { db = seed(); save(); return { ok: true }; }

  if (method === "POST" && url.pathname === "/api/activities") {
    const space = db.spaces.find((s) => s.id === body.spaceId);
    const title = clean(body.title, 80);
    const when = new Date(body.startsAt);
    if (!space || !title || isNaN(when)) throw httpErr(400, "Faltan datos de la actividad");
    const act = { id: "act-" + Date.now().toString(36), spaceId: space.id, title, category: clean(body.category, 30) || "Actividad", startsAt: when.toISOString(),
      capacity: Math.min(space.capacity, Math.max(2, Number(body.capacity) || 10)), status: "programada",
      participants: [{ name: clean(body.name, 40) || "Vecino", committed: true }] };
    db.activities.push(act); save(); return act;
  }

  if (method === "POST" && (r = m(/^\/api\/activities\/([\w-]+)\/(join|checkin|close)$/))) {
    const act = db.activities.find((a) => a.id === r[1]);
    if (!act) throw httpErr(404, "Actividad no encontrada");
    const name = clean(body.name, 40) || "Vecino";
    const person = act.participants.find((p) => p.name === name);
    if (r[2] === "join") {
      if (act.status === "completada") throw httpErr(400, "La actividad ya terminó");
      if (!body.committed) throw httpErr(400, "Para unirte debes aceptar el compromiso de cuidado");
      if (!person) {
        if (act.participants.length >= act.capacity) throw httpErr(400, "No quedan cupos");
        act.participants.push({ name, committed: true });
      }
    } else if (r[2] === "checkin") {
      if (!person) throw httpErr(400, "Primero únete a la actividad");
      if (act.status === "completada") throw httpErr(400, "La actividad ya terminó");
      person.checkedInAt = new Date().toISOString();
      act.status = "en_curso";
      const photo = okPhoto(body.beforePhoto);
      if (photo) act.beforePhoto = photo;
    } else {
      if (!person) throw httpErr(400, "Solo quienes participan pueden cerrar");
      if (act.status === "completada") throw httpErr(400, "La actividad ya está cerrada");
      const c = body.checklist || {};
      const checklist = { basura: !!c.basura, equipos: !!c.equipos, areaOrdenada: !!c.areaOrdenada };
      const cleanSpace = checklist.basura && checklist.equipos && checklist.areaOrdenada;
      act.status = "completada";
      act.closure = { cleanSpace, checklist, notes: clean(body.notes, 300), closedAt: new Date().toISOString() };
      const photo = okPhoto(body.afterPhoto);
      if (photo) act.afterPhoto = photo;
      const space = db.spaces.find((s) => s.id === act.spaceId);
      if (space) space.careStreak = cleanSpace ? space.careStreak + 1 : 0;
      if (body.incident && clean(body.incidentText)) {
        db.incidents.push({ id: "inc-" + Date.now().toString(36), spaceId: act.spaceId, activityId: act.id, category: clean(body.incidentCategory, 30) || "Otro",
          description: clean(body.incidentText, 300), status: "abierta", createdAt: new Date().toISOString() });
      }
    }
    save(); return act;
  }

  if (method === "POST" && url.pathname === "/api/incidents") {
    if (!db.spaces.some((s) => s.id === body.spaceId) || !clean(body.description)) throw httpErr(400, "Faltan datos de la incidencia");
    const inc = { id: "inc-" + Date.now().toString(36), spaceId: body.spaceId, category: clean(body.category, 30) || "Otro", description: clean(body.description, 300), status: "abierta", createdAt: new Date().toISOString() };
    db.incidents.push(inc); save(); return inc;
  }

  if (method === "POST" && (r = m(/^\/api\/incidents\/([\w-]+)\/resolve$/))) {
    const inc = db.incidents.find((i) => i.id === r[1]);
    if (!inc) throw httpErr(404, "Incidencia no encontrada");
    inc.status = "resuelta"; inc.resolvedAt = new Date().toISOString(); save(); return inc;
  }
  throw httpErr(404, "No encontrado");
}
function httpErr(status, message) { return Object.assign(new Error(message), { status }); }

// ---------- Servidor ----------
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".webmanifest": "application/manifest+json" };

http.createServer((req, res) => {
  const url = new URL(req.url, "http://x");
  const send = (status, data, type = "application/json; charset=utf-8") => { res.writeHead(status, { "Content-Type": type, "Cache-Control": "no-store" }); res.end(data); };

  if (url.pathname.startsWith("/api/")) {
    let raw = "";
    req.on("data", (c) => { raw += c; if (raw.length > 4_000_000) req.destroy(); });
    req.on("end", () => {
      try { send(200, JSON.stringify(route(req.method, url, raw ? JSON.parse(raw) : {}))); }
      catch (e) { send(e.status || 500, JSON.stringify({ error: e.status ? e.message : "Error del servidor" })); }
    });
    return;
  }
  if (url.pathname === "/health") return send(200, "ok", "text/plain");

  // Archivos estáticos; cualquier otra ruta devuelve la app (rutas con #)
  let file = path.normalize(path.join(PUBLIC, url.pathname === "/" ? "index.html" : url.pathname));
  if (!file.startsWith(PUBLIC) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(PUBLIC, "index.html");
  send(200, fs.readFileSync(file), TYPES[path.extname(file)] || "application/octet-stream");
}).listen(PORT, () => console.log(`JuegaBarrio en http://localhost:${PORT}`));
