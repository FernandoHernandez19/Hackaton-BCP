# JuegaBarrio

Plataforma web progresiva para activar, organizar y cuidar parques, losas y otros espacios públicos junto con las municipalidades.

## Propósito

JuegaBarrio hace que usar correctamente un espacio público sea fácil, frecuente y visible. Los vecinos encuentran actividades cercanas y participan respetando horarios y reglas; la municipalidad administra la agenda de sus espacios y observa su uso real.

No es solo una app para pichangas. Es una capa digital de gestión de espacios públicos y participación comunitaria.

## Comportamiento que buscamos cambiar

El foco principal es el **cuidado de espacios públicos**. La solución también refuerza el respeto por las reglas, la convivencia y el reporte seguro de incidencias.

El ciclo de comportamiento es:

`espacio y horario claros -> actividad accesible -> check-in puntual -> uso respetuoso -> cierre responsable -> reconocimiento y datos para mejorar`

## Alcance del MVP de hackatón

1. Mapa de parques y losas habilitados por una municipalidad.
2. Ficha de espacio: reglas, capacidad, horario y actividades.
3. Crear o unirse a una actividad dentro de un horario disponible.
4. Check-in por QR y geolocalización aproximada.
5. Cierre de actividad con asistencia y evidencia del estado del espacio.
6. Panel municipal para gestionar espacios, horarios, actividades e incidencias.
7. Métricas de uso responsable: asistencia, puntualidad, actividades completadas y cierres registrados.

## Producto en dos vistas

- **Vecino:** descubre, se suma, llega a tiempo y cuida el espacio.
- **Municipalidad:** digitaliza espacios, publica horarios y toma decisiones con datos de uso e incidencias.

La puntuación reconoce participación, puntualidad y cuidado; no debe ser una sanción pública ni un ranking que exponga a personas.

## Arquitectura elegida

Un único proyecto web PWA permite entregar una demo funcional rápidamente y luego crecer sin reconstruirla:

- **Next.js + TypeScript:** interfaz pública y panel municipal.
- **Supabase:** autenticación, PostgreSQL, almacenamiento de fotos y políticas por rol.
- **OpenStreetMap / Leaflet:** mapa de espacios y actividades.
- **QR por espacio o actividad:** check-in verificable.
- **Geolocalización del navegador:** validación de cercanía en el momento del check-in; no se conserva historial de ubicación.

Ver [la arquitectura y el backlog](docs/arquitectura-mvp.md) antes de crear funcionalidades.

## Flujo demostrable

1. La municipalidad registra el Parque Los Olivos y habilita sus horarios.
2. Un vecino visualiza una actividad de vóley a las 4:00 p. m. y se une.
3. Al llegar, escanea el QR y confirma su presencia cerca del parque.
4. Al finalizar, el organizador registra asistentes y el grupo confirma el cierre responsable.
5. El panel actualiza ocupación, puntualidad y estado del espacio.

## Estructura propuesta

```text
juegabarrio/
├── app/                    # Rutas Next.js: vecino y municipalidad
├── components/             # Componentes reutilizables
├── lib/                    # Clientes, validaciones y lógica de dominio
├── types/                  # Tipos compartidos
├── supabase/               # Migraciones, RLS y datos semilla
├── public/                 # Logo, iconos, QR demo y PWA
├── docs/                   # Arquitectura, backlog y presentación
└── tests/                  # Flujos críticos del MVP
```

## Decisión de producto

El piloto se realiza con una municipalidad aliada desde el primer día. No requiere obra física ni hardware especial para funcionar, pero sí validación municipal de los espacios, horarios y reglas publicados.
