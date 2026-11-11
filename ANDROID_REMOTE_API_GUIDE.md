# Guía de Conexión Remota Android (API Pública CDN + Caché Offline)

Tu base de datos **DB-Gym v2.1 (533 ejercicios)** está publicada y accesible de forma remota y gratuita mediante CDN global.

---

## 🌐 1. Endpoints Públicos Activos

| Recurso | URL Remota (CDN jsDelivr - Alta Velocidad) |
|---|---|
| **Base de Datos Completa (533 ejercicios + imágenes + español)** | `https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/exercises.json` |
| **Control de Versión (Ligero, <1 KB)** | `https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/docs/api/version.json` |
| **GitHub Raw (Alternativo directo)** | `https://raw.githubusercontent.com/tm210608/DB-Gym/main/exercises.json` |

---

## 📦 2. Dependencias en `build.gradle.kts (Module: app)`

Añade Retrofit (para descargar el JSON remoto) y Coil (para cargar y cachear las imágenes del bucle animado):

```kotlin
dependencies {
    // Retrofit + Gson para conectar con la base de datos remota
    implementation("com.squareup.retrofit2:retrofit:2.11.0")
    implementation("com.squareup.retrofit2:converter-gson:2.11.0")

    // Coil para cargar y cachear las imágenes animadas en Jetpack Compose
    implementation("io.coil-kt:coil-compose:2.7.0")
}
```

Asegúrate de tener el permiso de Internet en tu `AndroidManifest.xml`:
```xml
<uses-permission android:name="android.permission.INTERNET" />
```

---

## 📱 3. Modelos de Datos y Cliente Remoto (`GymRemoteApi.kt`)

```kotlin
package com.tuapp.gym.data.remote

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.GET

data class ExerciseDto(
    val id: String,
    val name: String,
    val nameEn: String?,
    val primaryMuscle: String,
    val primaryMuscleEs: String,
    val secondaryMuscles: List<String> = emptyList(),
    val secondaryMusclesEs: List<String> = emptyList(),
    val stabilizersEs: List<String> = emptyList(),
    val equipment: String,
    val equipmentEs: String,
    val difficulty: String,
    val category: String,
    val mechanics: String?,
    val movementPattern: String?,
    val isUnilateral: Boolean = false,
    val trackingType: String?,
    val instructions: List<String> = emptyList(),
    val tips: List<String> = emptyList(),
    val breathingCue: String?,
    val alternatives: List<String> = emptyList(),
    val images: List<String> = emptyList() // Contiene las 2 URLs [0.jpg, 1.jpg] para el bucle
)

data class DbVersionDto(
    val version: String,
    val updatedAt: String,
    val totalExercises: Int
)

interface GymRemoteApi {

    @GET("docs/api/version.json")
    suspend fun getVersion(): DbVersionDto

    @GET("exercises.json")
    suspend fun getAllExercises(): List<ExerciseDto>

    companion object {
        private const val BASE_URL = "https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/"

        fun create(): GymRemoteApi {
            return Retrofit.Builder()
                .baseUrl(BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .build()
                .create(GymRemoteApi::class.java)
        }
    }
}
```

---

## 🎬 4. Componente Jetpack Compose para Animación en Bucle (`ExerciseAnimatedImage.kt`)

Este Composable descarga y guarda en caché las 2 fases del ejercicio y las alterna cada segundo exactamente igual que en el visor web:

```kotlin
package com.tuapp.gym.ui.components

import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import coil.compose.AsyncImage
import coil.request.CachePolicy
import coil.request.ImageRequest
import kotlinx.coroutines.delay

@Composable
fun ExerciseAnimatedImage(
    images: List<String>,
    contentDescription: String,
    modifier: Modifier = Modifier
) {
    if (images.isEmpty()) return

    var currentFrame by remember { mutableIntStateOf(0) }
    val context = LocalContext.current

    // Alterna entre 0.jpg y 1.jpg cada 1000 ms
    LaunchedEffect(images) {
        if (images.size > 1) {
            while (true) {
                delay(1000L)
                currentFrame = (currentFrame + 1) % images.size
            }
        }
    }

    AsyncImage(
        model = ImageRequest.Builder(context)
            .data(images[currentFrame])
            .diskCachePolicy(CachePolicy.ENABLED)
            .memoryCachePolicy(CachePolicy.ENABLED)
            .crossfade(false)
            .build(),
        contentDescription = contentDescription,
        contentScale = ContentScale.Crop,
        modifier = modifier
    )
}
```

---

## 🔄 5. Sincronización Inteligente (Remoto + Caché Local)

Para que tu app no descargue el archivo cada vez que se abre, comprueba primero `getVersion()`:

```kotlin
class ExerciseSyncManager(
    private val api: GymRemoteApi,
    private val prefs: SharedPreferences
) {
    suspend fun syncIfNeeded(onNewData: suspend (List<ExerciseDto>) -> Unit) {
        try {
            val remoteVersion = api.getVersion()
            val localVersion = prefs.getString("db_version", "")

            if (remoteVersion.version != localVersion) {
                val exercises = api.getAllExercises()
                onNewData(exercises)
                prefs.edit().putString("db_version", remoteVersion.version).apply()
            }
        } catch (e: Exception) {
            // Si no hay internet, la app sigue funcionando con los datos guardados localmente
            e.printStackTrace()
        }
    }
}
```
