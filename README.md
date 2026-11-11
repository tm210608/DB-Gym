<div align="center">

# 🏋️‍♂️ DB-Gym — Open Exercise, Biomechanics & Routine API

**La base de datos y API estática abierta de ejercicios más completa en Español e Inglés.**  
*533 ejercicios certificados · Animaciones reales de 2 fases · Sustitutos de «Máquina Ocupada» · Rutinas en 3 bloques · Exportación SQL*

[![Exercises](https://img.shields.io/badge/Ejercicios-533%20Certificados-10b981?style=for-the-badge&logo=dumbbell&logoColor=white)](https://github.com/tm210608/DB-Gym/blob/main/exercises.json)
[![API Version](https://img.shields.io/badge/API%20REST-v2.2%20Static%20CDN-3b82f6?style=for-the-badge&logo=cloudflare&logoColor=white)](https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/docs/api/v1/index.json)
[![Routines](https://img.shields.io/badge/Rutinas-8%20Plantillas%20Oficiales-8b5cf6?style=for-the-badge&logo=firefoxbrowser&logoColor=white)](https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/docs/api/v1/routines.json)
[![SQL Dumps](https://img.shields.io/badge/SQL-SQLite%20%7C%20PostgreSQL-f59e0b?style=for-the-badge&logo=postgresql&logoColor=white)](https://github.com/tm210608/DB-Gym/tree/main/sql)
[![Demo](https://img.shields.io/badge/Demo%20Interactiva-GitHub%20Pages-ec4899?style=for-the-badge&logo=github&logoColor=white)](https://tm210608.github.io/DB-Gym/)

[🌐 **Probar Visor Web y Generador de Rutinas**](https://tm210608.github.io/DB-Gym/) · [⚡ **Endpoint CDN Principal**](https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/exercises.json) · [📱 **Guía Android (Kotlin)**](./ANDROID_REMOTE_API_GUIDE.md) · [📐 **Especificación SDD**](./src/types.ts)

</div>

---

## 🎯 ¿Qué es DB-Gym y por qué existe?

La mayoría de las bases de datos de ejercicios abiertas en GitHub tienen tres grandes limitaciones: están exclusivamente en inglés, ofrecen un único JSON monolítico sin sustitutos biomecánicos ni rutinas, o cobran suscripciones mensuales por usar endpoints básicos.

**DB-Gym** resuelve esto mediante una arquitectura **Zero-Backend Static REST API** alojada gratuitamente en GitHub Pages y acelerada globalmente mediante **jsDelivr CDN**:
- **Sin servidores que mantener, sin API Keys y sin límites de peticiones (*Rate Limits*).**
- **Bilingüe de fábrica (Español + Inglés):** Nombres, instrucciones paso a paso, errores comunes (`commonMistakes`), músculos (`primaryMuscleEs`) y equipamiento (`equipmentEs`).
- **100% Verificada con Spec-Driven Development (SDD):** Validación formal de invariantes (`INV-01` a `INV-08`) y verificación de que el **100% de las 1.066 fotografías (`0.jpg` ⇄ `1.jpg`)** existen y corresponden biomecánicamente al músculo y equipamiento del ejercicio.

---

## 📊 Comparativa con otras APIs y Repositorios de Fitness

| Característica | **🏋️‍♂️ DB-Gym (Este Repo)** | `yuhonas/free-exercise-db` | `wrkout/exercises.json` | `ExerciseDB` (RapidAPI) |
| :--- | :---: | :---: | :---: | :---: |
| **Precio y Acceso** | **100% Gratis (Sin API Key)** | Gratis (Dominio Público) | Gratis (Dominio Público) | Freemium / De pago |
| **Idioma Nativo** | **Español + Inglés** | Solo Inglés | Solo Inglés | Solo Inglés |
| **Animaciones Visuales** | **Sí (2 fotogramas verificados `0.jpg` ⇄ `1.jpg`)** | Sí (`0.jpg` / `1.jpg`) | ❌ No incluye imágenes | Sí (GIFs con enlaces temporales) |
| **Endpoints REST por Músculo / Material** | **Sí (`/api/v1/muscles/...`, `/equipment/...`)** | ❌ Solo 1 archivo JSON único | ❌ Solo archivos sueltos | Sí (Requiere pago/Key) |
| **Sustitutos «Máquina Ocupada» (`substitutes`)** | **Sí (3 alternativas pre-calculadas por ejercicio)** | ❌ No | ❌ No | ❌ No |
| **Errores Comunes (`commonMistakes`)** | **Sí (Guía biomecánica de seguridad)** | ❌ No | ❌ No | ❌ No |
| **Pack de Rutinas en 3 Bloques (`/routines.json`)** | **Sí (Calentamiento + Principal + Enfriamiento)** | ❌ No | ❌ No | ❌ No |
| **Dumps SQL listos (`SQLite` y `PostgreSQL`)** | **Sí (`sql/*.sql`)** | ❌ No | Solo PostgreSQL | ❌ No |

---

## ⚡ Endpoints de la API Pública (v2.2)

Puedes consumir la API directamente desde tu aplicación móvil o web usando **jsDelivr CDN** (recomendado para producción por su caché global y compresión Brotli/Gzip) o **GitHub Pages**:

### 1. Endpoints Principales

| Recurso | URL de Producción (jsDelivr CDN) | Descripción |
| :--- | :--- | :--- |
| **Índice de la API v1** | `https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/docs/api/v1/index.json` | Metadatos, versión, conteos y lista completa de endpoints por músculo, equipamiento y categoría. |
| **Catálogo Completo (533)** | `https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/docs/api/v1/exercises.json` | Todos los ejercicios enriquecidos con imágenes, etiquetas en español y sustitutos. |
| **Pack de Rutinas Oficiales** | `https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/docs/api/v1/routines.json` | 8 rutinas completas divididas en 3 bloques (`warmup`, `main`, `cooldown`). |

### 2. Endpoints Segmentados por Grupo Muscular (`/api/v1/muscles/{slug}.json`)
Descarga únicamente los ejercicios del músculo que necesites (ideal para pantallas de filtrado rápido):

- **Pecho:** `.../docs/api/v1/muscles/chest.json`
- **Espalda:** `.../docs/api/v1/muscles/back.json`
- **Dorsal Ancho:** `.../docs/api/v1/muscles/lats.json`
- **Hombros:** `.../docs/api/v1/muscles/shoulders.json`
- **Bíceps:** `.../docs/api/v1/muscles/biceps.json`
- **Tríceps:** `.../docs/api/v1/muscles/triceps.json`
- **Cuádriceps:** `.../docs/api/v1/muscles/quads.json`
- **Isquiotibiales:** `.../docs/api/v1/muscles/hamstrings.json`
- **Glúteos:** `.../docs/api/v1/muscles/glutes.json`
- **Gemelos:** `.../docs/api/v1/muscles/calves.json`
- **Abdomen / Core:** `.../docs/api/v1/muscles/abs.json`
- **Espalda Baja / Lumbar:** `.../docs/api/v1/muscles/lowerback.json`
- **Trapecio:** `.../docs/api/v1/muscles/traps.json`
- **Antebrazos:** `.../docs/api/v1/muscles/forearms.json`
- **Aductores / Abductores / Flexores:** `adductors.json`, `abductors.json`, `hipflexors.json`, `serratus.json`, `cardio.json`

### 3. Endpoints Segmentados por Equipamiento (`/api/v1/equipment/{slug}.json`)
- **Mancuernas:** `.../docs/api/v1/equipment/dumbbell.json`
- **Barra Olímpica:** `.../docs/api/v1/equipment/barbell.json`
- **Polea con Cable:** `.../docs/api/v1/equipment/cable.json`
- **Máquina de Palanca:** `.../docs/api/v1/equipment/machine.json`
- **Peso Corporal:** `.../docs/api/v1/equipment/bodyweight.json`
- **Pesa Rusa (Kettlebell):** `.../docs/api/v1/equipment/kettlebell.json`
- **TRX / Suspensión:** `.../docs/api/v1/equipment/trx.json`
- **Banda Elástica:** `.../docs/api/v1/equipment/band.json`
- **Rodillo de Espuma (Foam Roller):** `.../docs/api/v1/equipment/foamroller.json`
- *(Y más en `/api/v1/index.json`: `ezbar`, `smithmachine`, `rings`, `medicineball`, `stabilityball`, `box`, `rope`, `sled`, `trap-bar`)*

### 4. Endpoints Segmentados por Categoría (`/api/v1/categories/{slug}.json`)
- `hipertrofia.json` · `fuerza.json` · `calistenia.json` · `movilidad.json` · `calentamiento.json` · `foamrolling.json` · `kettlebell.json` · `isometrico.json` · `funcional.json` · `pliometrico.json` · `olimpico.json` · `rehabilitacion.json` · `cardio.json`

---

## 🧬 Estructura del Objeto Ejercicio (JSON Schema)

Cada ejercicio del catálogo incluye metadatos biomecánicos completos, etiquetas traducidas al español, fotogramas verificados y **3 sustitutos pre-calculados (`substitutes`)** para cuando una máquina está ocupada:

```json
{
  "id": "barbell-bench-press",
  "name": "Press de Banca con Barra",
  "nameEn": "Barbell Bench Press",
  "category": "Fuerza",
  "primaryMuscle": "Chest",
  "primaryMuscleEs": "Pecho / Pectoral",
  "secondaryMuscles": ["Triceps", "Shoulders"],
  "secondaryMusclesEs": ["Tríceps", "Hombros / Deltoides"],
  "stabilizers": ["Abs", "Back"],
  "stabilizersEs": ["Abdomen / Core", "Espalda / Dorsal"],
  "equipment": "Barbell",
  "equipmentEs": "Barra Olímpica",
  "difficulty": "Intermedio",
  "mechanics": "Compuesto",
  "movementPattern": "HorizontalPush",
  "forceType": "Push",
  "planeOfMotion": "Sagittal",
  "trackingType": "WeightReps",
  "unilateral": false,
  "riskLevel": "Medio",
  "warmupSuitable": false,
  "cooldownSuitable": false,
  "description": "El ejercicio rey para el desarrollo de la fuerza e hipertrofia del pectoral mayor, deltoides anterior y tríceps.",
  "instructions": [
    "Túmbate en el banco plano con los ojos justo debajo de la barra.",
    "Retrae las escápulas, apoya los pies firmemente en el suelo y agarra la barra algo más ancho que los hombros.",
    "Baja la barra de forma controlada hasta rozar la línea media-baja del esternón.",
    "Empuja con fuerza hacia arriba hasta extender los brazos sin perder la retracción escapular."
  ],
  "commonMistakes": [
    "Abrir los codos a 90 grados (aumenta el riesgo de lesión en el manguito rotador).",
    "Rebotar la barra contra el pecho o despegar el glúteo del banco."
  ],
  "images": [
    "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/0.jpg",
    "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/1.jpg"
  ],
  "substitutes": [
    {
      "id": "dumbbell-bench-press",
      "name": "Press de Banca con Mancuernas",
      "nameEn": "Dumbbell Bench Press",
      "equipment": "Dumbbell",
      "equipmentEs": "Mancuernas",
      "primaryMuscle": "Chest",
      "primaryMuscleEs": "Pecho / Pectoral",
      "images": [
        "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/0.jpg",
        "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/1.jpg"
      ]
    },
    {
      "id": "chest-press-machine",
      "name": "Press de Pecho en Máquina",
      "nameEn": "Machine Chest Press",
      "equipment": "Machine",
      "equipmentEs": "Máquina de Palanca",
      "primaryMuscle": "Chest",
      "primaryMuscleEs": "Pecho / Pectoral",
      "images": [
        "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Chest_Press/0.jpg",
        "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leverage_Chest_Press/1.jpg"
      ]
    }
  ]
}
```

---

## 💻 Cómo Integrar DB-Gym en tu Proyecto

### 1. JavaScript / TypeScript / React
```javascript
const CDN_BASE = 'https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/docs/api/v1';

// Cargar solo ejercicios de Pecho (rápido y ligero)
const res = await fetch(`${CDN_BASE}/muscles/chest.json`);
const chestExercises = await res.json();

// O cargar las plantillas de rutinas en 3 bloques
const routinesRes = await fetch(`${CDN_BASE}/routines.json`);
const routines = await routinesRes.json();
console.log(routines[0].name, routines[0].blocks);
```

### 2. Android (Kotlin + Retrofit + Animación de 2 fases en Jetpack Compose)
*(Consulta la guía completa en [`ANDROID_REMOTE_API_GUIDE.md`](./ANDROID_REMOTE_API_GUIDE.md))*

```kotlin
interface GymApiService {
    @GET("docs/api/v1/exercises.json")
    suspend fun getAllExercises(): List<ExerciseDto>

    @GET("docs/api/v1/muscles/{muscle}.json")
    suspend fun getExercisesByMuscle(@Path("muscle") muscleSlug: String): List<ExerciseDto>

    @GET("docs/api/v1/routines.json")
    suspend fun getOfficialRoutines(): List<RoutineDto>
}

// Reproductor de animación de 2 fases (0.jpg ⇄ 1.jpg) en Jetpack Compose
@Composable
fun ExerciseLoopImage(images: List<String>, modifier: Modifier = Modifier) {
    var frameIndex by remember { mutableIntStateOf(0) }
    LaunchedEffect(images) {
        if (images.size >= 2) {
            while (true) {
                delay(1000L)
                frameIndex = (frameIndex + 1) % images.size
            }
        }
    }
    AsyncImage(
        model = images.getOrNull(frameIndex),
        contentDescription = null,
        modifier = modifier
    )
}
```

### 3. Base de Datos SQL Directa (SQLite / Room / PostgreSQL / Supabase)
Si prefieres importar la base de datos directamente en SQL:
- **SQLite / Android Room:** [`sql/exercises-sqlite.sql`](./sql/exercises-sqlite.sql)
- **PostgreSQL / Supabase:** [`sql/exercises-postgres.sql`](./sql/exercises-postgres.sql)

```bash
# Importar en SQLite
sqlite3 gym.db < sql/exercises-sqlite.sql

# Importar en PostgreSQL
psql -U postgres -d gym_db -f sql/exercises-postgres.sql
```

---

## 🛠️ Desarrollo Local y Comandos de Construcción

El repositorio sigue una arquitectura modular por lotes en `src/data/batches/` gobernada por validación formal **SDD**:

```bash
# 1. Consolidar los lotes de src/data/batches/ en exercises.json
node scripts/consolidate-master-db.js

# 2. Emparejar y verificar las 1.066 URLs de animación biomecánica (0 enlaces rotos)
node build-full-animation-map.js

# 3. Generar la API Pública v1 (/docs/api/v1/*), rutinas, sustitutos y dumps SQL
node scripts/build-public-api.js

# 4. Generar el Visor Web Interactivo (visor_ejercicios.html y docs/index.html)
node generate-html.js

# 5. Ejecutar el validador formal SDD (Invariantes INV-01 a INV-08)
node scripts/validate-db.js
```

---

## 📄 Licencia y Créditos

- **Código, Esquema SDD, Traducciones al Español, Rutinas y Motor de Sustitución:** Distribuido bajo licencia **MIT**.
- **Fotografías de Ejercicios (`0.jpg` / `1.jpg`):** Dominio público (*Unlicense*) cortesía del proyecto [`yuhonas/free-exercise-db`](https://github.com/yuhonas/free-exercise-db).
