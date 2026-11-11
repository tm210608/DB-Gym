/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Exercise {
  id: string;
  name: string;
  nameEn?: string;
  primaryMuscle: MuscleGroup;
  secondaryMuscles?: MuscleGroup[];
  stabilizers?: MuscleGroup[];        // Músculos estabilizadores isométricos
  equipment: EquipmentType;
  difficulty: DifficultyLevel;
  category?: ExerciseCategory;        // Tipo/propósito del ejercicio (opcional por compatibilidad)
  mechanics?: Mechanics;              // Compuesto o Aislamiento
  movementPattern?: MovementPattern;  // Patrón funcional de movimiento
  isUnilateral?: boolean;             // true = unilateral, false = bilateral
  trackingType?: TrackingType;        // Cómo se trackea el ejercicio
  forceType?: ForceType;
  planeOfMotion?: PlaneOfMotion;      // Plano de movimiento
  instructions: string[];
  tips?: string[];                    // Consejos pro y errores comunes a evitar
  breathingCue?: string;              // Patrón de respiración resumido
  alternatives: string[];             // IDs de ejercicios alternativos
  progressions?: string[];            // IDs de variantes más difíciles
  regressions?: string[];             // IDs de variantes más fáciles
  videoUrl?: string;
}

// ─── GRUPOS MUSCULARES ───────────────────────────────────────────
export type MuscleGroup =
  | 'Chest'        // Pecho (Pectoralis major/minor)
  | 'Back'         // Espalda (Dorsal / Trapecio / Romboides)
  | 'Lats'         // Dorsal Ancho específicamente
  | 'Traps'        // Trapecio
  | 'LowerBack'    // Espalda Baja / Erector espinal
  | 'Shoulders'    // Hombros (Deltoides)
  | 'Biceps'       // Bíceps
  | 'Triceps'      // Tríceps
  | 'Forearms'     // Antebrazos
  | 'Quads'        // Cuádriceps
  | 'Hamstrings'   // Isquiotibiales
  | 'Glutes'       // Glúteos
  | 'Calves'       // Gemelos
  | 'Abs'          // Abdomen / Core
  | 'Serratus'     // Serrato Anterior
  | 'HipFlexors'   // Flexores de Cadera
  | 'Adductors'    // Aductores
  | 'Abductors'    // Abductores
  | 'Cardio';      // Sistema cardiovascular

// ─── EQUIPAMIENTO ────────────────────────────────────────────────
export type EquipmentType =
  | 'Barbell'        // Barra olímpica
  | 'Dumbbell'       // Mancuerna
  | 'EZBar'          // Barra Z / Curl Bar
  | 'Machine'        // Máquina de gym genérica
  | 'Cable'          // Polea / Cable
  | 'Kettlebell'     // Pesa rusa
  | 'Bodyweight'     // Peso corporal
  | 'Band'           // Banda elástica
  | 'TRX'            // TRX / Suspension
  | 'MedicineBall'   // Balón medicinal
  | 'FoamRoller'     // Rodillo de espuma
  | 'Box'            // Cajón pliométrico
  | 'Rings'          // Anillas
  | 'SmithMachine'   // Máquina Smith
  | 'StabilityBall'  // Balón suizo / fitball
  | 'Rope'           // Cuerda de batalla / soga
  | 'Sled'           // Trineo
  | 'Trap Bar'       // Barra hexagonal
  | 'None';          // Sin equipo

// ─── DIFICULTAD ──────────────────────────────────────────────────
export type DifficultyLevel = 'Principiante' | 'Intermedio' | 'Avanzado';

// ─── CATEGORÍA DE EJERCICIO (PROPÓSITO) ──────────────────────────
export type ExerciseCategory =
  | 'Fuerza'          // Levantamiento de carga máxima o sub-máxima
  | 'Hipertrofia'     // Volumen y tiempo bajo tensión
  | 'Resistencia'     // Resistencia muscular (muchas reps)
  | 'Cardio'          // Cardiovascular / Resistencia aeróbica
  | 'Movilidad'       // Amplitud de movimiento activa
  | 'Estiramiento'    // Flexibilidad pasiva / activa
  | 'Calentamiento'   // Activación y preparación pre-entreno
  | 'Enfriamiento'    // Recuperación post-entreno
  | 'Pliométrico'     // Potencia explosiva
  | 'Funcional'       // Movimientos del mundo real / funcionales
  | 'Calistenia'      // Solo peso corporal (avanzado)
  | 'Rehabilitación'  // Recuperación de lesiones / corrección
  | 'Isométrico'      // Sin movimiento articular (tensión estática)
  | 'Kettlebell'      // Específico de pesa rusa
  | 'Olímpico'        // Levantamiento olímpico
  | 'FoamRolling'     // Tejido blando / auto-masaje
  | 'Equilibrio';     // Balance y propiocepción

// ─── PATRÓN DE MOVIMIENTO ────────────────────────────────────────
export type MovementPattern =
  | 'Empuje Horizontal'    // Bench Press, Push-Up
  | 'Empuje Vertical'      // Overhead Press, Handstand
  | 'Tirón Horizontal'     // Row, Face Pull
  | 'Tirón Vertical'       // Pull-Up, Lat Pulldown
  | 'Bisagra de Cadera'    // Deadlift, RDL, Good Morning
  | 'Sentadilla'           // Squat, Goblet Squat
  | 'Estocada'             // Lunge, Split Squat
  | 'Rotación'             // Russian Twist, Wood Chop
  | 'Carry'                // Farmer's Walk
  | 'Anti-Extensión'       // Plank, Ab Wheel
  | 'Anti-Rotación'        // Pallof Press
  | 'Dominada'             // Variantes de Pull-Up / Chin-Up
  | 'Explosivo'            // Box Jump, Power Clean
  | 'Movilidad'            // Ejercicios de amplitud de movimiento
  | 'Estiramiento'         // Flexibilidad
  | 'Cardiovascular';      // Cardio

// ─── TIPO DE MECÁNICA ────────────────────────────────────────────
export type Mechanics = 'Compuesto' | 'Aislamiento';

// ─── TIPO DE SEGUIMIENTO ─────────────────────────────────────────
export type TrackingType =
  | 'Peso×Reps'       // Barra + repeticiones
  | 'Tiempo'          // Plancha, cardio por tiempo
  | 'Distancia'       // Cardio por distancia
  | 'Reps'            // Solo repeticiones (peso corporal)
  | 'Rondas';         // Circuitos por rondas

// ─── TIPO DE FUERZA ──────────────────────────────────────────────
export type ForceType = 'Empuje' | 'Tirón' | 'Flexión/Extensión' | 'Core' | 'Cardio' | 'Estático';

// ─── PLANO DE MOVIMIENTO ─────────────────────────────────────────
export type PlaneOfMotion = 'Sagital' | 'Frontal' | 'Transverso' | 'Multi-plano';

// ─── SETS DE ENTRENAMIENTO ────────────────────────────────────────
export interface WorkoutSet {
  id: string;
  weight: number;
  reps: number;
  durationSeconds?: number;
  distanceMeters?: number;
  completed: boolean;
  type: 'R' | 'W' | 'F' | 'D';
}

export interface WorkoutExercise {
  exerciseId: string;
  sets: WorkoutSet[];
}

export interface WorkoutLog {
  id: string;
  name: string;
  date: string;
  durationSeconds: number;
  exercises: WorkoutExercise[];
  volume: number;
}

export interface Routine {
  id: string;
  name: string;
  description?: string;
  exercises: WorkoutExercise[];
}

// ─── TRADUCCIONES ────────────────────────────────────────────────
export const MuscleGroupTranslation: Record<MuscleGroup, string> = {
  Chest: 'Pecho',
  Back: 'Espalda',
  Lats: 'Dorsal',
  Traps: 'Trapecio',
  LowerBack: 'Espalda Baja',
  Shoulders: 'Hombros',
  Biceps: 'Bíceps',
  Triceps: 'Tríceps',
  Forearms: 'Antebrazos',
  Quads: 'Cuádriceps',
  Hamstrings: 'Isquiotibiales',
  Glutes: 'Glúteos',
  Calves: 'Gemelos',
  Abs: 'Abdomen',
  Serratus: 'Serrato',
  HipFlexors: 'Flexores de Cadera',
  Adductors: 'Aductores',
  Abductors: 'Abductores',
  Cardio: 'Cardio',
};

export const EquipmentTypeTranslation: Record<EquipmentType, string> = {
  Barbell: 'Barra',
  Dumbbell: 'Mancuerna',
  EZBar: 'Barra Z',
  Machine: 'Máquina',
  Cable: 'Polea',
  Kettlebell: 'Pesa Rusa',
  Bodyweight: 'Peso Corporal',
  Band: 'Banda Elástica',
  TRX: 'TRX / Suspensión',
  MedicineBall: 'Balón Medicinal',
  FoamRoller: 'Foam Roller',
  Box: 'Cajón Pliométrico',
  Rings: 'Anillas',
  SmithMachine: 'Máquina Smith',
  StabilityBall: 'Balón Suizo',
  Rope: 'Cuerda de Batalla',
  Sled: 'Trineo',
  'Trap Bar': 'Barra Hexagonal',
  None: 'Sin Equipo',
};

export const ExerciseCategoryTranslation: Record<ExerciseCategory, string> = {
  Fuerza: '💪 Fuerza',
  Hipertrofia: '🏋️ Hipertrofia',
  Resistencia: '🔄 Resistencia',
  Cardio: '❤️ Cardio',
  Movilidad: '🔓 Movilidad',
  Estiramiento: '🧘 Estiramiento',
  Calentamiento: '🔥 Calentamiento',
  Enfriamiento: '❄️ Enfriamiento',
  Pliométrico: '💥 Pliométrico',
  Funcional: '⚡ Funcional',
  Calistenia: '🤸 Calistenia',
  Rehabilitación: '🏥 Rehabilitación',
  Isométrico: '⏸️ Isométrico',
  Kettlebell: '🔔 Kettlebell',
  Olímpico: '🏆 Olímpico',
  FoamRolling: '🛞 Foam Rolling',
  Equilibrio: '⚖️ Equilibrio',
};
