# Arquitectura MVP - JuegaBarrio

## 1. Principio rector

La aplicación debe facilitar conductas cívicas dentro de una actividad que ya interesa a los vecinos. Por eso el producto no empieza con premios ni mensajes: empieza resolviendo una necesidad real, encontrar y usar un espacio público de forma ordenada.

## 2. Roles

| Rol | Qué puede hacer |
|---|---|
| Visitante | Ver mapa, espacios, reglas y actividades públicas. |
| Vecino | Unirse a actividades, crearlas en horarios habilitados, hacer check-in y reportar incidencias. |
| Organizador | Gestionar participantes, validar el inicio/cierre de su actividad y registrar la evidencia del espacio. |
| Gestor municipal | Crear espacios, definir reglas, horarios, capacidad, revisar actividades e incidencias. |
| Administrador | Gestionar usuarios municipales, catálogo de actividades y métricas globales. |

## 3. Módulos

### A. Experiencia vecinal

- Inicio con mapa y filtros por actividad, distancia y horario.
- Ficha de espacio: fotos, reglas, aforo, horario y accesibilidad.
- Detalle de actividad: organizador, cupos, participantes y punto de encuentro.
- Unirse / abandonar una actividad.
- Check-in: QR + distancia aproximada al punto del espacio.
- Cierre responsable: asistentes, foto antes/después cuando aplique, comentario e incidencia.
- Perfil privado: participaciones, puntualidad e insignias de contribución.

### B. Agenda municipal

- Alta de parque, losa u otro espacio público.
- Calendario de horarios habilitados y bloqueados.
- Reglas del espacio y capacidad máxima.
- Revisión de actividades propuestas cuando la municipalidad decida requerirla.
- Panel con uso por lugar, horario y actividad.
- Bandeja de incidencias y trazabilidad de atención.

### C. Medición de cambio

El dashboard debe diferenciar datos de operación y de comportamiento:

| Indicador | Cálculo |
|---|---|
| Actividades completadas | Actividades con inicio y cierre confirmados. |
| Puntualidad | Check-ins dentro de la ventana definida / asistentes confirmados. |
| Uso responsable | Actividades cerradas sin incidencia pendiente / actividades completadas. |
| Participación recurrente | Vecinos con dos o más participaciones en 30 días. |
| Activación del espacio | Horas con actividades realizadas / horas habilitadas. |
| Atención de incidencias | Incidencias resueltas / incidencias registradas. |

No se afirmarán reducciones de gasto, seguridad o limpieza hasta medir una línea base en el piloto.

## 4. Flujos críticos

### Flujo 1: municipalidad digitaliza un espacio

1. Gestor crea el espacio, ubicación, fotos y tipo.
2. Añade horario, aforo y reglas.
3. Publica el espacio.
4. La plataforma genera un QR asociado al espacio.

### Flujo 2: vecino se suma a una actividad

1. Ve una actividad en un espacio y horario disponibles.
2. Revisa reglas y cupos.
3. Confirma participación.
4. Recibe recordatorio antes del inicio.
5. Hace check-in QR/GPS al llegar.

### Flujo 3: cierre responsable

1. Organizador inicia el cierre.
2. Registra asistentes y, si corresponde, evidencia visual del estado final.
3. Vecinos participantes confirman el cierre.
4. La actividad pasa a completada y actualiza métricas.
5. Si hay una incidencia, se deriva a la bandeja municipal.

## 5. Modelo de datos inicial

```text
municipalities
  id, name, district, logo_url

profiles
  id, role, display_name, municipality_id, avatar_url

public_spaces
  id, municipality_id, name, type, address, latitude, longitude,
  capacity, rules, status, qr_token

space_schedules
  id, public_space_id, weekday, starts_at, ends_at, availability

activities
  id, public_space_id, organizer_id, category, title, starts_at,
  ends_at, capacity, status

activity_participants
  id, activity_id, profile_id, status, checked_in_at, punctual

checkins
  id, activity_id, profile_id, method, checked_in_at, distance_meters

activity_closures
  id, activity_id, closed_by, before_photo_url, after_photo_url,
  notes, confirmed_at

incidents
  id, public_space_id, activity_id, reported_by, category,
  description, status, resolved_at
```

## 6. Seguridad y privacidad mínimas

- Ubicación usada solamente durante el check-in; guardar distancia o validación, no recorridos.
- Los perfiles muestran información mínima y no exponen teléfonos.
- Las actividades tienen capacidad y reglas visibles.
- Reportes e incidencias solo visibles al equipo municipal autorizado.
- Las fotos de cierre se usan para seguimiento del espacio, con consentimiento y política de retención.
- Roles y acceso implementados con Row Level Security de Supabase.

## 7. Plan de construcción para el hackatón

### Entregable 1 - Navegación y demo visual

- Mapa con tres espacios demo de Los Olivos.
- Lista de actividades y detalle de actividad.
- Flujo de unirse y check-in simulado.

### Entregable 2 - Panel municipal

- Calendario simple de disponibilidad.
- Alta o edición de un espacio.
- Dashboard con cuatro métricas demostrables.

### Entregable 3 - Evidencia de impacto

- Cierre responsable de actividad.
- Incidencia enviada al panel.
- Pantalla final de métricas antes/después del demo.

## 8. Reparto sugerido del equipo

| Frente | Responsable | Resultado |
|---|---|---|
| Producto y pitch | 1 persona | Flujo, narrativa, piloto y métricas. |
| UX/UI | 1 persona | Pantallas del vecino y panel municipal. |
| Frontend | 1-2 personas | PWA, navegación, mapa y formularios. |
| Datos/backend | 1 persona | Supabase, datos demo, roles y dashboard. |
| Demo y pruebas | Todo el equipo | Recorrido de 90 segundos y respaldo en video. |

## 9. Lo que queda fuera del MVP

- Pagos o cobros de reserva.
- Ranking público de ciudadanos.
- Integraciones con sistemas municipales existentes.
- Moderación automatizada de imágenes.
- Notificaciones push reales.
- Analítica predictiva.

Estas funciones se consideran después de validar el flujo principal con una municipalidad piloto.
