# 📱 Guía de Integración Remota en Android (Kotlin + Jetpack Compose + API v2.2)

Esta guía documenta cómo conectar tu aplicación Android directamente a la **API REST Estática v2.2 de DB-Gym** alojada en **jsDelivr CDN** y **GitHub Pages**, o cómo pre-cargar la base de datos local con **Room / SQLite** usando `sql/exercises-sqlite.sql`.

---

## 🌐 1. URLs Base y Endpoints Remotos (v2.2)

Usa **jsDelivr CDN** como URL base principal en producción (ofrece compresión Brotli automática, caché distribuido globalmente y 0 límites de peticiones):

```kotlin
const val DB_GYM_CDN_BASE = "https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/"
```

| Endpoint Relativo | Descripción |
| :--- | :--- |
| `docs/api/v1/index.json` | Índice maestro con versión (`2.2.0`), conteos y catálogo de slugs de músculos, material y categorías. |
| `docs/api/v1/exercises.json` | Catálogo completo de **533 ejercicios** con etiquetas en español, imágenes `0.jpg`/`1.jpg` y `substitutes`. |
| `docs/api/v1/routines.json` | **8 Plantillas de Rutinas Oficiales** estructuradas en 3 bloques (`warmup`, `main`, `cooldown`). |
| `docs/api/v1/muscles/{slug}.json` | Ejercicios filtrados por músculo (`chest`, `back`, `lats`, `shoulders`, `biceps`, `triceps`, `quads`, `hamstrings`, `glutes`, `calves`, `abs`, `lowerback`, `traps`, `forearms`, `adductors`, `abductors`, `hipflexors`, `serratus`, `cardio`). |
| `docs/api/v1/equipment/{slug}.json` | Ejercicios filtrados por equipamiento (`dumbbell`, `barbell`, `cable`, `machine`, `bodyweight`, `kettlebell`, `trx`, `band`, `foamroller`, `ezbar`, `smithmachine`, `rings`, etc.). |
| `docs/api/v1/categories/{slug}.json` | Ejercicios filtrados por categoría (`hipertrofia`, `fuerza`, `calistenia`, `movilidad`, `calentamiento`, `foamrolling`, `olimpico`, `pliometrico`, `rehabilitacion`, `cardio`, etc.). |

---

## 📦 2. Modelos de Datos (Kotlin + Kotlinx Serialization / Gson)

```kotlin
package com.tuapp.gym.data.remote.dto

import kotlinx.serialization.Serializable

@Serializable
data class SubstituteDto(
    val id: String,
    val name: String,
    val nameEn: String? = null,
    val equipment: String,
    val equipmentEs: String,
    val primaryMuscle: String,
    val primaryMuscleEs: String,
    val images: List<String> = emptyList()
)

@Serializable
data class ExerciseDto(
    val id: String,
    val name: String,
    val nameEn: String? = null,
    val category: String,
    val primaryMuscle: String,
    val primaryMuscleEs: String,
    val secondaryMuscles: List<String> = emptyList(),
    val secondaryMusclesEs: List<String> = emptyList(),
    val stabilizers: List<String> = emptyList(),
    val stabilizersEs: List<String> = emptyList(),
    val equipment: String,
    val equipmentEs: String,
    val difficulty: String,
    val mechanics: String,
    val movementPattern: String,
    val forceType: String,
    val unilateral: Boolean = false,
    val description: String = "",
    val instructions: List<String> = emptyList(),
    val commonMistakes: List<String> = emptyList(),
    val images: List<String> = emptyList(),
    val substitutes: List<SubstituteDto> = emptyList()
)

@Serializable
data class RoutineExerciseItemDto(
    val exerciseId: String,
    val name: String,
    val primaryMuscleEs: String,
    val equipmentEs: String,
    val sets: Int,
    val reps: String,
    val restSeconds: Int,
    val rpe: Int,
    val images: List<String> = emptyList(),
    val substitutes: List<SubstituteDto> = emptyList()
)

@Serializable
data class RoutineBlocksDto(
    val warmup: List<RoutineExerciseItemDto> = emptyList(),
    val main: List<RoutineExerciseItemDto> = emptyList(),
    val cooldown: List<RoutineExerciseItemDto> = emptyList()
)

@Serializable
data class OfficialRoutineDto(
    val id: String,
    val name: String,
    val nameEn: String,
    val goal: String,
    val level: String,
    val durationMinutes: Int,
    val targetMusclesEs: List<String> = emptyList(),
    val blocks: RoutineBlocksDto
)
```

---

## 🔌 3. Interfaz Retrofit (`GymApiService.kt`)

```kotlin
package com.tuapp.gym.data.remote

import com.tuapp.gym.data.remote.dto.ExerciseDto
import com.tuapp.gym.data.remote.dto.OfficialRoutineDto
import retrofit2.http.GET
import retrofit2.http.Path

interface GymApiService {

    @GET("docs/api/v1/exercises.json")
    suspend fun getAllExercises(): List<ExerciseDto>

    @GET("docs/api/v1/muscles/{slug}.json")
    suspend fun getExercisesByMuscle(@Path("slug") muscleSlug: String): List<ExerciseDto>

    @GET("docs/api/v1/equipment/{slug}.json")
    suspend fun getExercisesByEquipment(@Path("slug") equipmentSlug: String): List<ExerciseDto>

    @GET("docs/api/v1/categories/{slug}.json")
    suspend fun getExercisesByCategory(@Path("slug") categorySlug: String): List<ExerciseDto>

    @GET("docs/api/v1/routines.json")
    suspend fun getOfficialRoutines(): List<OfficialRoutineDto>
}
```

---

## 🎬 4. Componente Jetpack Compose para la Animación en Bucle (`0.jpg` ⇄ `1.jpg`)

Cada ejercicio trae 2 fotogramas verificados en `images`. Este Composable alterna automáticamente cada `1000ms` usando **Coil (`AsyncImage`)**:

```kotlin
package com.tuapp.gym.ui.components

import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import coil.compose.AsyncImage
import kotlinx.coroutines.delay

@Composable
fun ExerciseAnimatedImage(
    images: List<String>,
    contentDescription: String?,
    modifier: Modifier = Modifier,
    intervalMs: Long = 1000L
) {
    var frameIndex by remember(images) { mutableIntStateOf(0) }

    LaunchedEffect(images) {
        if (images.size >= 2) {
            while (true) {
                delay(intervalMs)
                frameIndex = (frameIndex + 1) % images.size
            }
        }
    }

    val currentUrl = images.getOrNull(frameIndex) ?: images.firstOrNull()

    AsyncImage(
        model = currentUrl,
        contentDescription = contentDescription,
        contentScale = ContentScale.Crop,
        modifier = modifier
    )
}
```

---

## 🔄 5. Cómo implementar el botón «Máquina Ocupada / Sustituir» en tu App

Gracias al campo pre-calculado `exercise.substitutes`, cambiar un ejercicio cuando una máquina está ocupada en el gimnasio no requiere cálculos complejos en el cliente:

```kotlin
fun onBusyMachineClicked(currentExercise: ExerciseDto, onSwap: (String) -> Unit) {
    val bestSubstitute = currentExercise.substitutes.firstOrNull()
    if (bestSubstitute != null) {
        // Reemplaza por la alternativa número 1 con distinto equipamiento
        onSwap(bestSubstitute.id)
    }
}
```
