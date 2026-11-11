# 🤖 Prompt Maestro para Integrar DB-Gym API v2.2 en Android Studio

Copia y pega este bloque en el asistente de IA de tu proyecto Android (o úsalo como especificación técnica) para integrar la base de datos remota **DB-Gym v2.2**:

---

```markdown
Quiero integrar en mi app Android (Kotlin + Jetpack Compose + Retrofit + Coil + Room) la API pública estática **DB-Gym v2.2** alojada en `https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/`.

### 1. Endpoints disponibles en la API (Base URL: `https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/`):
- `GET docs/api/v1/index.json` -> Índice con versión `2.2.0`, conteos y lista de slugs de músculos, equipamiento y categorías.
- `GET docs/api/v1/exercises.json` -> Catálogo completo de 533 ejercicios bilingües.
- `GET docs/api/v1/muscles/{slug}.json` -> Ejercicios por músculo (`chest`, `back`, `lats`, `shoulders`, `biceps`, `triceps`, `quads`, `hamstrings`, `glutes`, `calves`, `abs`, `lowerback`, `traps`, `forearms`, `adductors`, `abductors`, `hipflexors`, `serratus`, `cardio`).
- `GET docs/api/v1/equipment/{slug}.json` -> Ejercicios por material (`dumbbell`, `barbell`, `cable`, `machine`, `bodyweight`, `kettlebell`, `trx`, `band`, `foamroller`, `ezbar`, `smithmachine`, `rings`, etc.).
- `GET docs/api/v1/categories/{slug}.json` -> Ejercicios por categoría (`hipertrofia`, `fuerza`, `calistenia`, `movilidad`, `calentamiento`, `foamrolling`, `olimpico`, `pliometrico`, `rehabilitacion`, `cardio`).
- `GET docs/api/v1/routines.json` -> 8 plantillas de rutinas oficiales divididas en 3 bloques (`warmup`, `main`, `cooldown`).

### 2. Estructura JSON de cada ejercicio (`ExerciseDto`):
- `id`: String (ej. `"barbell-bench-press"`)
- `name`: String en español (ej. `"Press de Banca con Barra"`)
- `nameEn`: String en inglés (ej. `"Barbell Bench Press"`)
- `category`: String (`"Fuerza"`, `"Hipertrofia"`, `"Calistenia"`, `"Movilidad"`, `"Calentamiento"`, `"FoamRolling"`, etc.)
- `primaryMuscle`: String (`"Chest"`, `"Back"`, `"Quads"`, etc.)
- `primaryMuscleEs`: String en español (`"Pecho / Pectoral"`, `"Espalda / Dorsal"`, etc.)
- `secondaryMuscles` / `secondaryMusclesEs`: List<String>
- `equipment`: String / `equipmentEs`: String en español (`"Barra Olímpica"`, `"Mancuernas"`, `"Polea con Cable"`, etc.)
- `difficulty`: String (`"Principiante"`, `"Intermedio"`, `"Avanzado"`)
- `mechanics`: String (`"Compuesto"`, `"Aislamiento"`)
- `movementPattern`: String
- `instructions`: List<String> (pasos en español)
- `commonMistakes`: List<String> (errores comunes a evitar)
- `images`: List<String> (2 URLs verificadas `0.jpg` y `1.jpg` que deben alternarse cada 1000ms en un Composable para mostrar el ejercicio en movimiento)
- `substitutes`: List<SubstituteDto> (3 ejercicios alternativos pre-calculados con distinto equipamiento para el botón "🔄 Máquina Ocupada / Sustituir")

### 3. Tareas a implementar:
1. Crear los DTOs (`ExerciseDto`, `SubstituteDto`, `OfficialRoutineDto`), la interfaz `GymApiService` con Retrofit y un repositorio con caché offline en Room.
2. Crear el Composable `ExerciseAnimatedImage(images: List<String>)` que alterne entre `images[0]` e `images[1]` cada 1000ms usando Coil.
3. Crear la pantalla de Catálogo con filtro por Músculo (`primaryMuscleEs`), Equipamiento (`equipmentEs`) y buscador.
4. Crear la pantalla de Rutinas que permita cargar las plantillas de `docs/api/v1/routines.json` y pulsar el botón "🔄 Máquina Ocupada" en cualquier ejercicio para reemplazarlo instantáneamente por `exercise.substitutes.first()`.
```
