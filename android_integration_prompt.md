# Prompt para Agente de IA (Android Studio / Google AI Studio)

Copia y pega el siguiente prompt en tu asistente de IA para generar automáticamente todo el código necesario para integrar la base de datos de ejercicios en tu proyecto Android Nativo en Kotlin.

---

```text
Actúa como un desarrollador experto en Android Nativo (Kotlin). Necesito integrar una base de datos local de ejercicios de gimnasio en mi aplicación de Android usando Room Database. 

El catálogo de ejercicios se descargará o leerá desde un archivo JSON local (semilla) llamado `exercises.json` ubicado en la carpeta `assets` (o descargado desde una URL remota de GitHub).

La estructura de cada objeto de ejercicio en el archivo JSON es la siguiente:
{
  "id": "barbell-bench-press",
  "name": "Press de Banca con Barra",
  "nameEn": "Barbell Bench Press",
  "primaryMuscle": "Chest",
  "secondaryMuscles": ["Shoulders", "Triceps"],
  "equipment": "Barbell",
  "difficulty": "Intermedio",
  "forceType": "Empuje",
  "instructions": [
    "Acuéstate libremente en el banco plano, con la cabeza, espalda alta y glúteos apoyados.",
    "Sujeta la barra con las manos un poco más anchas que los hombros.",
    "Baja la barra lentamente..."
  ],
  "alternatives": ["dumbbell-bench-press", "chest-press-machine"]
}

Por favor, genérame los siguientes componentes completos escritos en Kotlin:

1. **Clase de Datos de Dominio (`Exercise.kt`)** y sus enums o tipos correspondientes.
2. **Entidad de Room (`ExerciseEntity.kt`)** mapeada para persistir esta información. Dado que Room no soporta listas directamente, proporciona un `TypeConverter` (`ListConverter.kt`) para guardar las listas de instrucciones (`List<String>`) y músculos secundarios (`List<String>`) como textos en formato JSON (usando Gson o Kotlin Serialization).
3. **Interfaz DAO de Room (`ExerciseDao.kt`)** con funciones para:
   - Insertar una lista de ejercicios (`insertAll`).
   - Obtener todos los ejercicios.
   - Filtrar ejercicios por músculo principal.
   - Filtrar ejercicios por equipamiento.
   - Buscar ejercicios por nombre (búsqueda LIKE que soporte el nombre en español e inglés).
4. **Base de Datos de Room (`AppDatabase.kt`)** con un `RoomDatabase.Callback` para pre-poblar la base de datos leyendo el archivo `exercises.json` desde la carpeta `assets` de Android durante la primera creación de la base de datos (`onCreate`).
5. **Clase Repositorio (`ExerciseRepository.kt`)** que exponga los flujos de datos (usando Kotlin Flow y Coroutines) de manera limpia para el ViewModel.

Proporciona explicaciones claras de dónde debe colocarse cada archivo y cómo configurar la inicialización de la base de datos en la clase Application o en el MainActivity.
```
