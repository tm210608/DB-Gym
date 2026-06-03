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
  equipment: EquipmentType;
  difficulty: DifficultyLevel;
  instructions: string[];
  alternatives: string[]; // List of exercise IDs
  forceType?: ForceType;
  videoUrl?: string;
}

export type MuscleGroup =
  | 'Chest' // Pecho
  | 'Back' // Espalda
  | 'Shoulders' // Hombros
  | 'Biceps' // Bíceps
  | 'Triceps' // Tríceps
  | 'Quads' // Cuádriceps
  | 'Hamstrings' // Isquiotibiales (Femoral)
  | 'Glutes' // Glúteos
  | 'Calves' // Gemelos
  | 'Abs' // Abdomen
  | 'Forearms' // Antebrazos
  | 'Cardio'; // Cardio

export type EquipmentType =
  | 'Barbell' // Barra
  | 'Dumbbell' // Mancuerna
  | 'Machine' // Máquina
  | 'Cable' // Polea
  | 'Kettlebell' // Pesa Rusa
  | 'Bodyweight' // Peso Corporal
  | 'Band' // Banda Elástica
  | 'None'; // Sin equipo

export type DifficultyLevel = 'Principiante' | 'Intermedio' | 'Avanzado';

export type ForceType = 'Empuje' | 'Tirón' | 'Flexión/Extensión' | 'Core' | 'Cardio';

export interface WorkoutSet {
  id: string;
  weight: number; // in kg
  reps: number;
  completed: boolean;
  type: 'R' | 'W' | 'F' | 'D'; // Regular, Warmup, Failure, Dropset
}

export interface WorkoutExercise {
  exerciseId: string;
  sets: WorkoutSet[];
}

export interface WorkoutLog {
  id: string;
  name: string;
  date: string; // ISO string
  durationSeconds: number;
  exercises: WorkoutExercise[];
  volume: number; // total kg lifted
}

export interface Routine {
  id: string;
  name: string;
  description?: string;
  exercises: WorkoutExercise[];
}

// Translations dictionary for UI
export const MuscleGroupTranslation: Record<MuscleGroup, string> = {
  Chest: 'Pecho',
  Back: 'Espalda',
  Shoulders: 'Hombros',
  Biceps: 'Bíceps',
  Triceps: 'Tríceps',
  Quads: 'Cuádriceps',
  Hamstrings: 'Isquiotibiales',
  Glutes: 'Glúteos',
  Calves: 'Gemelos',
  Abs: 'Abdomen',
  Forearms: 'Antebrazos',
  Cardio: 'Cardio',
};

export const EquipmentTypeTranslation: Record<EquipmentType, string> = {
  Barbell: 'Barra',
  Dumbbell: 'Mancuerna',
  Machine: 'Máquina',
  Cable: 'Polea',
  Kettlebell: 'Pesa Rusa',
  Bodyweight: 'Peso Corporal',
  Band: 'Banda Elástica',
  None: 'Sin Equipo',
};
