// Pukllay - servidor de la demo. Sin dependencias: solo Node 20+.
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
  const N = ["Valeria", "Diego", "Camila", "Joaquín", "Sofía", "Mateo", "Lucía", "Renzo", "Ximena", "Andrés", "Fiorella", "Bruno", "Daniela", "Álvaro", "Mía", "Gael"];
  const P = (names, arrived) => names.map((name) => ({ name, committed: true, ...(arrived ? { checkedInAt: h(-0.5) } : {}) }));
  return {
    spaces: [
      { id: "losa-demo-1", name: "Losa Piloto B", type: "losa", address: "Los Olivos, Lima (espacio de demostración)", lat: -11.9935, lng: -77.0702, capacity: 14, hours: { from: 17, to: 21 }, sports: "Vóley, básquet y recreación",
        rules: ["Llegar a la hora", "Dejar la losa limpia", "Respetar el turno del siguiente grupo"], schedule: "Hoy · 17:00–21:00", qrToken: "demo-losa-1", careStreak: 12 },
      { id: "parque-demo-2", name: "Parque Piloto A", type: "parque", address: "Los Olivos, Lima (espacio de demostración)", lat: -11.9892, lng: -77.0768, capacity: 20, hours: { from: 16, to: 20 }, sports: "Fútbol, vóley y recreación",
        rules: ["Recoger la basura", "Cuidar las áreas verdes", "Respetar los horarios"], schedule: "Hoy · 16:00–20:00", qrToken: "demo-parque-2", careStreak: 7 },
      { id: "losa-demo-3", name: "Parque Piloto C", type: "parque", address: "Los Olivos, Lima (espacio de demostración)", lat: -11.9968, lng: -77.0655, capacity: 12, hours: { from: 15, to: 19 }, sports: "Juegos tradicionales y bienestar",
        rules: ["Dejar la losa limpia", "No usar después del horario", "Avisar si algo está dañado"], schedule: "Hoy · 15:00–19:00", qrToken: "demo-losa-3", careStreak: 3 },
    ],
    activities: [
      { id: "act-4", spaceId: "losa-demo-3", title: "Pichanga 5 vs 5", category: "Fútbol", startsAt: h(-0.6), capacity: 12, status: "en_curso", participants: P(N.slice(0, 10), true) },
      { id: "act-5", spaceId: "parque-demo-2", title: "Zumba comunitaria", category: "Baile", startsAt: h(-0.4), capacity: 25, status: "en_curso", participants: P(N.slice(2, 15), true) },
      { id: "act-1", spaceId: "losa-demo-1", title: "Vóley mixto de la tarde", category: "Vóley", startsAt: h(1), capacity: 12, status: "programada", participants: P(N.slice(0, 7)) },
      { id: "act-2", spaceId: "parque-demo-2", title: "Fútbol recreativo", category: "Fútbol", startsAt: h(3), capacity: 20, status: "programada", participants: P(N.slice(6, 12)) },
      { id: "act-3", spaceId: "losa-demo-1", title: "Básquet 3x3 (ya terminó)", category: "Básquet", startsAt: h(-26), capacity: 10, status: "completada",
        participants: P(N.slice(1, 7), true), closure: { cleanSpace: true, checklist: { basura: true, equipos: true, areaOrdenada: true }, closedAt: h(-24) } },
    ],
    proposals: [
      { id: "prop-1", spaceId: "losa-demo-1", title: "Vóley sentado para adultos mayores", category: "Vóley", description: "Una hora suave, con red baja, para que todos jueguen.", proposedBy: "Lucía", createdAt: h(-20), status: "abierta", votes: ["Lucía", "Diego", "Camila", "Renzo", "Sofía", "Mateo"] },
      { id: "prop-2", spaceId: "parque-demo-2", title: "Ajedrez gigante y rayuela para niños", category: "Juegos tradicionales", description: "Tablero pintado en el piso y rayuela. Los niños juegan mientras sus papás conversan.", proposedBy: "Andrés", createdAt: h(-9), status: "abierta", votes: ["Andrés", "Ximena", "Fiorella", "Bruno"] },
      { id: "prop-3", spaceId: "losa-demo-3", title: "Torneo relámpago de básquet 3x3", category: "Básquet", description: "Sábado en la tarde, 8 equipos, quien deja la losa limpia gana el punto extra.", proposedBy: "Daniela", createdAt: h(-5), status: "abierta", votes: ["Daniela", "Álvaro"] },
      { id: "prop-4", spaceId: "parque-demo-2", title: "Yoga al amanecer", category: "Bienestar", description: "Clase gratuita a las 6:30 a. m. con instructora voluntaria.", proposedBy: "Mía", createdAt: h(-30), status: "abierta", votes: ["Mía", "Gael", "Valeria", "Joaquín", "Lucía", "Camila", "Sofía", "Mateo"] },
    ],
    incidents: [],
    feed: [
      { id: "f1", type: "close", text: "Un grupo cerró Básquet 3x3 dejando Losa Aurora en buen estado", at: h(-24) },
      { id: "f2", type: "proposal", text: "Daniela propuso Torneo relámpago de básquet 3x3", at: h(-5) },
      { id: "f3", type: "vote", text: "Yoga al amanecer ya tiene el apoyo del barrio", at: h(-3) },
      { id: "f4", type: "join", text: "Gael se unió a Vóley mixto de la tarde", at: h(-0.8) },
      { id: "f5", type: "checkin", text: "10 vecinos hicieron check-in en Losa Nexo", at: h(-0.5) },
      { id: "f6", type: "checkin", text: "13 vecinos hicieron check-in en Parque Mirador", at: h(-0.4) },
    ],
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

function feed(type, text) {
  db.feed = db.feed || []; db.feed.push({ id: "f" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5), type, text, at: new Date().toISOString() });
  db.feed = db.feed.slice(-40);
}
const APPROVAL_VOTES = 5; // votos para que una propuesta pase a actividad
function stats() {
  const live = db.activities.filter((a) => a.status === "en_curso");
  const names = new Set(db.activities.flatMap((a) => a.participants.map((p) => p.name)));
  db.proposals?.forEach((p) => p.votes.forEach((v) => names.add(v)));
  return { playingNow: live.reduce((n, a) => n + a.participants.filter((p) => p.checkedInAt).length, 0), liveActivities: live.length, neighbors: names.size,
    careStreakTotal: db.spaces.reduce((n, sp) => n + sp.careStreak, 0), proposalsOpen: (db.proposals || []).filter((p) => p.status === "abierta").length, approvalVotes: APPROVAL_VOTES };
}

// ---------- API ----------
const clean = (s, n = 200) => String(s ?? "").slice(0, n).trim();
const okPhoto = (p) => (typeof p === "string" && p.startsWith("data:image/") && p.length < 1_500_000 ? p : undefined);

function route(method, url, body) {
  const m = (re) => url.pathname.match(re);
  let r;
  if (method === "GET" && url.pathname === "/api/state") return { spaces: db.spaces, activities: db.activities, incidents: db.incidents, proposals: db.proposals || [], feed: (db.feed || []).slice(-12).reverse(), stats: stats(), indicator: indicator() };

  if (method === "POST" && url.pathname === "/api/reset") { db = seed(); save(); return { ok: true }; }

  if (method === "POST" && url.pathname === "/api/activities") {
    const space = db.spaces.find((s) => s.id === body.spaceId);
    const title = clean(body.title, 80);
    const when = new Date(body.startsAt);
    if (!space || !title || isNaN(when)) throw httpErr(400, "Faltan datos de la actividad");
    const hour = new Date(when.getTime() - 5 * 3600e3).getUTCHours(); // hora de Lima (UTC-5)
    if (space.hours && (hour < space.hours.from || hour >= space.hours.to)) throw httpErr(400, "Ese horario no está habilitado por la municipalidad");
    if (db.activities.some((a) => a.spaceId === space.id && a.status !== "completada" && Math.abs(new Date(a.startsAt) - when) < 3600e3)) throw httpErr(400, "Ese horario ya está ocupado");
    const act = { id: "act-" + Date.now().toString(36), spaceId: space.id, title, category: clean(body.category, 30) || "Actividad", startsAt: when.toISOString(),
      capacity: Math.min(space.capacity, Math.max(2, Number(body.capacity) || 10)), status: "programada", notes: clean(body.notes, 200),
      organizer: clean(body.name, 40) || "Vecino",
      participants: [{ name: clean(body.name, 40) || "Vecino", committed: true }] };
    db.activities.push(act); feed("create", `${act.participants[0].name} creó ${act.title} en ${space.name}`); save(); return act;
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
        feed("join", `${name} se unió a ${act.title}`);
      }
    } else if (r[2] === "checkin") {
      if (!person) throw httpErr(400, "Primero únete a la actividad");
      if (act.status === "completada") throw httpErr(400, "La actividad ya terminó");
      person.checkedInAt = new Date().toISOString();
      act.status = "en_curso";
      feed("checkin", `${name} llegó a ${act.title}`);
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
      feed("close", cleanSpace ? `${act.title} se cerró dejando ${space?.name} en buen estado` : `${act.title} se cerró con observaciones en ${space?.name}`);
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
  if (method === "POST" && url.pathname === "/api/proposals") {
    const space = db.spaces.find((s) => s.id === body.spaceId); const title = clean(body.title, 80);
    if (!space || !title) throw httpErr(400, "Falta el nombre del juego o el espacio");
    const name = clean(body.name, 40) || "Vecino";
    const pr = { id: "prop-" + Date.now().toString(36), spaceId: space.id, title, category: clean(body.category, 30) || "Juego", description: clean(body.description, 200), proposedBy: name, createdAt: new Date().toISOString(), status: "abierta", votes: [name] };
    db.proposals = db.proposals || []; db.proposals.push(pr); feed("proposal", `${name} propuso ${title}`); save(); return pr;
  }
  if (method === "POST" && (r = m(/^\/api\/proposals\/([\w-]+)\/(vote|promote)$/))) {
    const pr = (db.proposals || []).find((x) => x.id === r[1]); if (!pr) throw httpErr(404, "Propuesta no encontrada");
    const name = clean(body.name, 40) || "Vecino";
    if (r[2] === "vote") {
      const i = pr.votes.indexOf(name);
      if (i >= 0) pr.votes.splice(i, 1); else { pr.votes.push(name); if (pr.votes.length === APPROVAL_VOTES) feed("vote", `${pr.title} ya tiene el apoyo del barrio`); }
    } else {
      if (pr.votes.length < APPROVAL_VOTES) throw httpErr(400, `Faltan votos: se necesitan ${APPROVAL_VOTES}`);
      if (pr.status !== "abierta") throw httpErr(400, "Esta propuesta ya es una actividad");
      const when = new Date(body.startsAt); if (isNaN(when)) throw httpErr(400, "Elige fecha y hora");
      const sp = db.spaces.find((s) => s.id === pr.spaceId);
      const act = { id: "act-" + Date.now().toString(36), spaceId: pr.spaceId, title: pr.title, category: pr.category, startsAt: when.toISOString(), capacity: Math.min(sp.capacity, 12), status: "programada", participants: pr.votes.slice(0, 3).map((v) => ({ name: v, committed: true })) };
      db.activities.push(act); pr.status = "programada"; pr.activityId = act.id; feed("create", `${pr.title} pasó de propuesta a actividad en ${sp.name}`);
      save(); return act;
    }
    save(); return pr;
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
  // Fotos de la app: se pueden subir al volumen de datos sin reconstruir la app (DATA_DIR/images-app)
  if (url.pathname.startsWith("/images/app/")) {
    const extra = path.normalize(path.join(path.dirname(DATA_FILE), "images-app", path.basename(url.pathname)));
    if (fs.existsSync(extra)) file = extra;
  }
  if ((!file.startsWith(PUBLIC) && !file.startsWith(path.dirname(DATA_FILE))) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(PUBLIC, "index.html");
  send(200, fs.readFileSync(file), TYPES[path.extname(file)] || "application/octet-stream");
}).listen(PORT, () => console.log(`Pukllay en http://localhost:${PORT}`));
