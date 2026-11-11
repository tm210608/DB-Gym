# Prompt de Integración para Android Studio / Google AI Studio (DB-Gym v2.0)

Copia y pega el siguiente prompt en el agente de **Android Studio** (Gemini en Android Studio) o **Google AI Studio** para generar todo el código de integración de la base de datos de ejercicios:

---

```markdown
Eres un Arquitecto Senior de Android especializado en Kotlin, Jetpack Compose y Room Database.
Necesito integrar una base de datos local pre-empaquetada de 533 ejercicios de gimnasio en mi aplicación Android nativa.

El archivo de datos es un JSON estructurado ubicado en `app/src/main/assets/exercises.json` que sigue la especificación SDD v2.0.

Cada ejercicio tiene la siguiente estructura JSON de ejemplo:
{
  "id": "barbell-bench-press",
  "name": "Press de Banca con Barra",
  "nameEn": "Barbell Bench Press",
  "primaryMuscle": "Chest",
  "secondaryMuscles": ["Shoulders", "Triceps"],
  "stabilizers": ["Abs", "Lats"],
  "equipment": "Barbell",
  "difficulty": "Intermedio",
  "category": "Fuerza",
  "mechanics": "Compuesto",
  "movementPattern": "Empuje Horizontal",
  "isUnilateral": false,
  "trackingType": "Peso×Reps",
  "planeOfMotion": "Sagital",
  "forceType": "Empuje",
  "instructions": [
    "Acuéstate sobre el banco plano...",
    "Sujeta la barra con agarre prono...",
    "Desciende la barra controladamente...",
    "Empuja con fuerza de regreso..."
  ],
  "tips": ["Mantén los codos en un ángulo aproximado de 45° a 75°."],
  "breathingCue": "Inhala en el descenso; exhala al empujar.",
  "alternatives": ["dumbbell-bench-press"]
}

Por favor, genera el código completo, modular y listo para compilar con la arquitectura Clean / MVI recomendada por Google:

1. **Entity de Room (`ExerciseEntity.kt`)**:
   - Clave primaria: `id: String`.
   - Campos para todos los atributos del JSON con tipos seguros (Enums de Kotlin para `MuscleGroup`, `EquipmentType`, `DifficultyLevel`, `ExerciseCategory`, `MovementPattern`, `TrackingType`).
   - `TypeConverters` con Gson o kotlinx.serialization para serializar listas de strings (`instructions`, `tips`, `alternatives`, `secondaryMuscles`, `stabilizers`).

2. **DAO (`ExerciseDao.kt`)**:
   - `getAllExercises(): Flow<List<ExerciseEntity>>`
   - `getExerciseById(id: String): Flow<ExerciseEntity?>`
   - `getExercisesByCategory(category: String): Flow<List<ExerciseEntity>>`
   - `getExercisesByPrimaryMuscle(muscle: String): Flow<List<ExerciseEntity>>`
   - `searchExercises(query: String): Flow<List<ExerciseEntity>>`
   - `getAlternativesForExercise(altIds: List<String>): Flow<List<ExerciseEntity>>`
   - Inserción masiva: `@Insert(onConflict = OnConflictStrategy.REPLACE) suspend fun insertAll(exercises: List<ExerciseEntity>)`

3. **Database Pre-populate Callback (`GymDatabase.kt`)**:
   - Configuración de RoomDatabase con un `RoomDatabase.Callback()` que, en el método `onCreate`, lea de forma asíncrona mediante corrutinas el archivo `exercises.json` desde `context.assets` y haga el seed inicial masivo en la tabla.

4. **Repository (`ExerciseRepository.kt` e `ExerciseRepositoryImpl.kt`)**:
   - Expone los flujos (`Flow`) con estados limpios.

5. **Pantalla en Jetpack Compose (`ExerciseCatalogScreen.kt`)**:
   - Barra de búsqueda con filtrado en tiempo real.
   - Chips deslizables horizontales para filtrar por Categoría (Fuerza, Hipertrofia, Calistenia, Movilidad, Kettlebell, etc.).
   - Tarjetas de ejercicio modernas con Material3 que muestren nombre, músculo primario, equipamiento, dificultad y badges para "Compuesto" / "Unilateral".
```
