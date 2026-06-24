/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Exercise, MuscleGroup, WorkoutLog, Routine, WorkoutExercise } from './types';
import { EXERCISES_DB } from './data/exercises';
import HumanBodyMap from './components/HumanBodyMap';
import ExerciseList from './components/ExerciseList';
import ActiveWorkoutTracker from './components/ActiveWorkoutTracker';
import HistoryStats from './components/HistoryStats';
import AICoachPanel from './components/AICoachPanel';
import ExerciseVisualizer from './components/ExerciseVisualizer';
import { Dumbbell, Calendar, Bot, HelpCircle, Activity, Sparkles, BookOpen, AlertCircle, Play, ChevronRight, MessageSquare, Plus, Check } from 'lucide-react';

export default function App() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [selectedMuscle, setSelectedMuscle] = useState<MuscleGroup | null>(null);

  // App navigation state (ejercicios | entrenar | historial | coach)
  const [activeTab, setActiveTab] = useState<'ejercicios' | 'entrenar' | 'historial' | 'coach'>('ejercicios');

  // Exercise database custom extensions
  const [customExercises, setCustomExercises] = useState<Exercise[]>([]);

  // Active workout session flow
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);
  const [workoutInitialExercises, setWorkoutInitialExercises] = useState<WorkoutExercise[]>([]);
  const [workoutRoutineName, setWorkoutRoutineName] = useState('Entrenamiento de hoy');

  // Workout logs list
  const [logs, setLogs] = useState<WorkoutLog[]>([]);

  // Predefined Routine templates (Hevy style!)
  const [routines, setRoutines] = useState<Routine[]>([
    {
      id: 'routine-push',
      name: 'Rutina Empuje (Pecho/Hombro/Tríceps)',
      description: 'Enfoque de hipertrofia para cadenas de empuje superiores.',
      exercises: [
        {
          exerciseId: 'barbell-bench-press',
          sets: [
            { id: 'p1', weight: 60, reps: 4, completed: false, type: 'R' },
            { id: 'p2', weight: 60, reps: 4, completed: false, type: 'R' },
            { id: 'p3', weight: 55, reps: 4, completed: false, type: 'R' },
          ]
        },
        {
          exerciseId: 'dumbbell-shoulder-press',
          sets: [
            { id: 'sp1', weight: 18, reps: 10, completed: false, type: 'R' },
            { id: 'sp2', weight: 18, reps: 10, completed: false, type: 'R' },
          ]
        },
        {
          exerciseId: 'triceps-pushdown',
          sets: [
            { id: 'tp1', weight: 25, reps: 12, completed: false, type: 'R' },
          ]
        }
      ]
    },
    {
      id: 'routine-pull',
      name: 'Rutina Tirón (Espalda/Bíceps)',
      description: 'Enfoque de tracción dorsal y flexores de codo.',
      exercises: [
        {
          exerciseId: 'deadlift',
          sets: [
            { id: 'd1', weight: 100, reps: 5, completed: false, type: 'R' },
            { id: 'd2', weight: 100, reps: 5, completed: false, type: 'R' },
          ]
        },
        {
          exerciseId: 'lat-pulldown',
          sets: [
            { id: 'l1', weight: 55, reps: 10, completed: false, type: 'R' },
            { id: 'l2', weight: 55, reps: 10, completed: false, type: 'R' },
          ]
        },
        {
          exerciseId: 'barbell-curl',
          sets: [
            { id: 'c1', weight: 25, reps: 12, completed: false, type: 'R' },
          ]
        }
      ]
    }
  ]);

  // Load exercises list including local storage custom ones on boot
  useEffect(() => {
    const savedCustoms = localStorage.getItem('gym_custom_exercises');
    const parsedCustoms: Exercise[] = savedCustoms ? JSON.parse(savedCustoms) : [];
    setCustomExercises(parsedCustoms);

    // Merge static database with custom user additions
    setExercises([...EXERCISES_DB, ...parsedCustoms]);

    // Load logs
    loadLogsFromStorage();
  }, []);

  const loadLogsFromStorage = () => {
    const savedLogs = localStorage.getItem('gym_workout_logs');
    if (savedLogs) {
      setLogs(JSON.parse(savedLogs));
    } else {
      setLogs([]);
    }
  };

  const handleAddCustomExercise = (newEx: Exercise) => {
    const updated = [newEx, ...customExercises];
    setCustomExercises(updated);
    localStorage.setItem('gym_custom_exercises', JSON.stringify(updated));

    // Merge in current run
    setExercises([...EXERCISES_DB, ...updated]);
    setSelectedExercise(newEx);
  };

  const handleDeleteCustomExercise = (id: string) => {
    const updated = customExercises.filter((e) => e.id !== id);
    setCustomExercises(updated);
    localStorage.setItem('gym_custom_exercises', JSON.stringify(updated));

    // Merge in current run
    setExercises([...EXERCISES_DB, ...updated]);
    if (selectedExercise?.id === id) {
      setSelectedExercise(null);
    }
  };

  // Start active workout flow
  const handleStartWorkout = (routine?: Routine) => {
    if (routine) {
      setWorkoutRoutineName(routine.name);
      setWorkoutInitialExercises(routine.exercises);
    } else {
      setWorkoutRoutineName('Entrenamiento Vacío');
      setWorkoutInitialExercises([]);
    }
    setIsWorkoutActive(true);
  };

  // Inject beautiful sample data so first-time users can instantly see chart metrics populated!
  const handleLoadDemoData = () => {
    const sampleLogs: WorkoutLog[] = [
      {
        id: 'demo-log-1',
        name: 'Rutina Empuje Dominical',
        date: new Date(Date.now() - 6 * 24 * 3600 * 1000).toISOString(), // 6 days ago
        durationSeconds: 2750,
        volume: 1240,
        exercises: [
          {
            exerciseId: 'barbell-bench-press',
            sets: [
              { id: 'ds1', weight: 50, reps: 10, completed: true, type: 'R' },
              { id: 'ds2', weight: 60, reps: 8, completed: true, type: 'R' },
              { id: 'ds3', weight: 65, reps: 6, completed: true, type: 'R' },
            ]
          },
          {
            exerciseId: 'dumbbell-shoulder-press',
            sets: [
              { id: 'ds4', weight: 14, reps: 12, completed: true, type: 'R' },
              { id: 'ds5', weight: 16, reps: 10, completed: true, type: 'R' },
            ]
          }
        ]
      },
      {
        id: 'demo-log-2',
        name: 'Rutina Tirón Explosivo',
        date: new Date(Date.now() - 3 * 24 * 3600 * 1000).toISOString(), // 3 days ago
        durationSeconds: 3200,
        volume: 1780,
        exercises: [
          {
            exerciseId: 'deadlift',
            sets: [
              { id: 'ds6', weight: 80, reps: 5, completed: true, type: 'R' },
              { id: 'ds7', weight: 100, reps: 4, completed: true, type: 'R' },
              { id: 'ds8', weight: 110, reps: 3, completed: true, type: 'R' },
            ]
          },
          {
            exerciseId: 'lat-pulldown',
            sets: [
              { id: 'ds9', weight: 50, reps: 12, completed: true, type: 'R' },
              { id: 'ds10', weight: 55, reps: 10, completed: true, type: 'R' },
            ]
          }
        ]
      },
      {
        id: 'demo-log-3',
        name: 'Día de Empuje Avanzado',
        date: new Date().toISOString(), // Today
        durationSeconds: 3450,
        volume: 1950,
        exercises: [
          {
            exerciseId: 'barbell-bench-press',
            sets: [
              { id: 'ds11', weight: 65, reps: 10, completed: true, type: 'R' },
              { id: 'ds12', weight: 70, reps: 8, completed: true, type: 'R' },
              { id: 'ds13', weight: 75, reps: 5, completed: true, type: 'R' },
            ]
          },
          {
            exerciseId: 'dumbbell-shoulder-press',
            sets: [
              { id: 'ds14', weight: 16, reps: 10, completed: true, type: 'R' },
              { id: 'ds15', weight: 18, reps: 8, completed: true, type: 'R' },
            ]
          },
          {
            exerciseId: 'triceps-pushdown',
            sets: [
              { id: 'ds16', weight: 25, reps: 12, completed: true, type: 'R' },
              { id: 'ds17', weight: 30, reps: 10, completed: true, type: 'R' },
            ]
          }
        ]
      }
    ];

    localStorage.setItem('gym_workout_logs', JSON.stringify(sampleLogs));
    setLogs(sampleLogs);
    alert('¡Excelente! Se han cargado 3 entrenamientos históricos de prueba. Puedes verlo en la pestaña "Estadísticas".');
    setActiveTab('historial');
  };

  return (
    <div id="gym-app-root" className="min-h-screen bg-[#0A0A0A] text-zinc-100 flex flex-col font-sans selection:bg-lime-500/30 selection:text-lime-400">
      
      {/* GLOBAL HEADER BAR */}
      <header className="bg-[#0E0E0E] border-b border-zinc-800 sticky top-0 z-50 shrink-0">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-lime-400 flex items-center justify-center text-black font-black shadow-lg shadow-lime-400/20">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base font-bold uppercase tracking-tight italic text-zinc-100 flex items-center gap-1.5 leading-none">
                HEVY<span className="text-lime-400 font-extrabold italic">GYM</span> <span className="text-[9px] font-bold text-lime-400 bg-lime-500/10 border border-lime-500/10 px-1.5 py-0.5 rounded tracking-widest uppercase">Base</span>
              </h1>
              <p className="text-[10px] text-zinc-400 mt-1">Base de Datos de Ejercicios & Track de Rutinas</p>
            </div>
          </div>

          {/* Nav Tabs */}
          {!isWorkoutActive && (
            <nav id="header-tabs" className="flex items-center bg-zinc-900 border border-zinc-800 p-1 rounded-xl">
              <button
                id="tab-ejercicios-trigger"
                onClick={() => setActiveTab('ejercicios')}
                className={`text-xs font-bold px-3 py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'ejercicios' || activeTab === 'coach'
                    ? 'bg-zinc-800 text-lime-400 shadow'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                💪 Ejercicios
              </button>
              <button
                id="tab-entrenar-trigger"
                onClick={() => setActiveTab('entrenar')}
                className={`text-xs font-bold px-3 py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'entrenar' ? 'bg-zinc-800 text-lime-400 shadow' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                📋 Entrenar
              </button>
              <button
                id="tab-historial-trigger"
                onClick={() => setActiveTab('historial')}
                className={`text-xs font-bold px-3 py-2 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'historial' ? 'bg-zinc-800 text-lime-400 shadow' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                📊 Estadísticas
              </button>
            </nav>
          )}

          {/* Quick Active session indicator indicator */}
          {isWorkoutActive && (
            <div className="flex items-center gap-2 bg-lime-400/10 border border-lime-500/20 px-3.5 py-1.5 rounded-full text-lime-400 font-bold text-[10px] uppercase tracking-wider animate-pulse">
              <Activity className="w-3.5 h-3.5" />
              <span>Sesión Activa</span>
            </div>
          )}
        </div>
      </header>

      {/* DETAILED WORKING SCREEN PORT */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6">
        
        {/* ======================================================== */}
        {/* WORKOUT ACTIVE MODE SCREEN (Blurs static workspace)       */}
        {/* ======================================================== */}
        {isWorkoutActive ? (
          <ActiveWorkoutTracker
            exercisesList={exercises}
            activeRoutineName={workoutRoutineName}
            initialExercises={workoutInitialExercises}
            onWorkoutSaved={() => {
              setIsWorkoutActive(false);
              loadLogsFromStorage();
              setActiveTab('historial');
            }}
            onCancel={() => setIsWorkoutActive(false)}
          />
        ) : (
          <>
            {/* TAB EXERCISES DATABASE VIEWER AND WORKOUT TEMPLATES */}
            {(activeTab === 'ejercicios' || activeTab === 'coach') && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* COLUMN 1: Search, Filter tabs and anatomical Body map highlight */}
                <div className="lg:col-span-1 space-y-6">
                  {/* Human Anatomical body map selection filter */}
                  <HumanBodyMap
                    selectedMuscle={selectedMuscle}
                    onSelectMuscle={setSelectedMuscle}
                    highlightPrimary={selectedExercise?.primaryMuscle}
                    highlightSecondaries={selectedExercise?.secondaryMuscles}
                  />

                  {/* Predefined training split routine panel */}
                  <div className="bg-[#0E0E0E] border border-zinc-800 rounded-2xl p-4 shadow-xl">
                    <h3 className="text-sm font-bold text-zinc-100 mb-1 flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-lime-400" /> Plantillas de Rutina
                    </h3>
                    <p className="text-[10px] text-zinc-400 mb-3">Enfoques modulares listos estilo Hevy para iniciar sesión</p>
                    <div className="space-y-2">
                      {routines.map((rt) => (
                        <div
                          id={`routine-box-${rt.id}`}
                          key={rt.id}
                          className="p-3 bg-zinc-950/60 border border-zinc-800/80 rounded-xl hover:border-zinc-700/85 transition flex items-center justify-between"
                        >
                          <div>
                            <span className="text-xs font-bold text-zinc-200 block">{rt.name}</span>
                            <span className="text-[10px] text-zinc-500 mt-1 block max-w-[190px] truncate">{rt.description}</span>
                          </div>
                          <button
                            id={`start-routine-btn-${rt.id}`}
                            onClick={() => {
                              handleStartWorkout(rt);
                            }}
                            className="bg-lime-400/10 hover:bg-lime-400 hover:text-black text-lime-400 p-2 rounded-lg text-xs transition cursor-pointer"
                            title="Empezar entrenamiento con esta rutina"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* COLUMN 2 & 3: Exercise Database List and active instructions overview panel */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                  {/* Tabs layout inside Exercises section */}
                  <div className="flex items-center bg-[#0E0E0E] border border-zinc-800 p-1 rounded-xl w-fit">
                    <button
                      id="subtab-db"
                      onClick={() => setActiveTab('ejercicios')}
                      className={`text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                        activeTab === 'ejercicios' ? 'bg-lime-400 text-black font-extrabold' : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      📚 Librería Completa
                    </button>
                    <button
                      id="subtab-coach"
                      onClick={() => setActiveTab('coach')}
                      className={`text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                        activeTab === 'coach' ? 'bg-lime-400 text-black font-extrabold' : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <Bot className="w-3.5 h-3.5" />
                      <span>Coach de IA</span>
                    </button>
                  </div>

                  {activeTab === 'ejercicios' ? (
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                      
                      {/* Left side: Exerciser filter catalog list */}
                      <div className="md:col-span-3 flex flex-col gap-4">
                        <ExerciseList
                          exercises={exercises}
                          selectedExercise={selectedExercise}
                          onSelectExercise={(ex) => setSelectedExercise(ex)}
                          selectedMuscle={selectedMuscle}
                          onSelectMuscle={setSelectedMuscle}
                          onAddCustomExercise={handleAddCustomExercise}
                          onDeleteCustomExercise={handleDeleteCustomExercise}
                        />
                      </div>

                      {/* Right side: Instructions and step detail description */}
                      <div className="md:col-span-2">
                        {selectedExercise ? (
                          <div
                            id="selected-exercise-detail-card"
                            className="bg-[#0E0E0E] border border-zinc-800 rounded-2xl p-4 shadow-xl space-y-4 lg:sticky lg:top-28 animate-fade-in"
                          >
                            <div className="flex justify-between items-start border-b border-zinc-800 pb-3">
                              <div>
                                <h3 className="font-extrabold text-sm text-zinc-100 tracking-tight flex items-center gap-2">
                                  {selectedExercise.name}
                                </h3>
                                <p className="text-xs text-zinc-500 mt-1">({selectedExercise.nameEn})</p>
                              </div>
                              <button
                                id="consult-coach-detail-btn"
                                onClick={() => setActiveTab('coach')}
                                className="bg-lime-400/10 border border-lime-500/20 hover:bg-lime-400 hover:text-black text-lime-400 p-2 rounded-xl text-xs transition flex items-center gap-1.5 cursor-pointer"
                                title="Preguntar al Coach sobre este ejercicio"
                              >
                                <Bot className="w-4 h-4" />
                                <span className="hidden sm:inline font-bold">IA</span>
                              </button>
                            </div>

                            {/* Biomechanical execution guide animation */}
                            <ExerciseVisualizer exercise={selectedExercise} />

                            {/* Targeted muscle groups */}
                            <div className="space-y-1.5">
                              <span className="text-[10px] uppercase font-bold text-zinc-500 block">Foco muscular:</span>
                              <div className="flex flex-wrap gap-1.5">
                                <span className="text-[10px] font-bold text-lime-450 bg-lime-450/10 border border-lime-500/20 px-2.5 py-1 rounded-md">
                                  Primario: {selectedExercise.primaryMuscle}
                                </span>
                                {selectedExercise.secondaryMuscles && selectedExercise.secondaryMuscles.map((sm, sidx) => (
                                  <span key={sidx} className="text-[10px] font-bold text-zinc-300 bg-zinc-800 border border-zinc-700/50 px-2.5 py-1 rounded-md">
                                    Secundario: {sm}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Steps description list */}
                            <div className="space-y-2">
                              <span className="text-[10px] uppercase font-bold text-zinc-500 flex items-center gap-1">
                                <BookOpen className="w-3.5 h-3.5 text-lime-450" /> Guía de Ejecución:
                              </span>
                              <div className="max-h-[140px] overflow-y-auto space-y-2 pr-1 scrollbar-thin scrollbar-thumb-zinc-800 text-xs">
                                {selectedExercise.instructions.map((inst, iIdx) => (
                                  <div key={iIdx} className="flex gap-2.5 items-start text-zinc-300 leading-relaxed">
                                    <span className="font-mono font-black text-lime-400 bg-zinc-950 border border-zinc-850 px-1.5 py-0.5 rounded text-[10px] mt-0.5">{iIdx + 1}</span>
                                    <p className="flex-1">{inst}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Alternative Options list */}
                            {selectedExercise.alternatives && selectedExercise.alternatives.length > 0 && (
                              <div className="space-y-2 pt-2 border-t border-zinc-800">
                                <span className="text-[10px] uppercase font-bold text-zinc-500 block">Sustitutos alternativos:</span>
                                <div className="flex flex-wrap gap-1.5">
                                  {selectedExercise.alternatives.map((altId) => {
                                    const altEx = exercises.find((ex) => ex.id === altId);
                                    if (!altEx) return null;
                                    return (
                                      <button
                                        id={`alt-badge-swap-${altId}`}
                                        key={altId}
                                        onClick={() => setSelectedExercise(altEx)}
                                        className="text-[10px] font-semibold text-zinc-300 bg-zinc-950 hover:bg-zinc-900 px-2.5 py-1.5 rounded-lg border border-zinc-830 hover:border-zinc-700 transition text-left cursor-pointer"
                                      >
                                        🔄 {altEx.name}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="bg-[#0E0E0E]/55 border border-zinc-800 border-dashed rounded-2xl p-10 text-center flex flex-col items-center justify-center lg:sticky lg:top-28">
                            <HelpCircle className="w-10 h-10 text-zinc-700 mb-2 animate-pulse" />
                            <p className="text-xs text-zinc-400 font-bold">Ningún ejercicio seleccionado</p>
                            <p className="text-[10px] text-zinc-500 mt-1 max-w-[200px]">Clica en un ejercicio del catálogo para ver su guía anatómica e instrucciones detalladas pasadas de Fitcron.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Coach tab panel activated */
                    <AICoachPanel
                      selectedExercise={selectedExercise}
                      exercisesList={exercises}
                    />
                  )}
                </div>
              </div>
            )}

            {/* TAB TRAINING SPLITS LOG CONDUIT */}
            {activeTab === 'entrenar' && (
              <div className="max-w-xl mx-auto space-y-6 animate-fade-in">
                <div className="text-center space-y-1 py-4">
                  <h2 className="text-2xl font-black text-zinc-100 uppercase tracking-tight">Comenzar Registro</h2>
                  <p className="text-xs text-zinc-400">Registra tus marcas y series al instante estilo Hevy app</p>
                </div>

                <div className="bg-[#0E0E0E] border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-5 text-center">
                  <div className="w-12 h-12 bg-lime-400/10 text-lime-400 rounded-full flex items-center justify-center mx-auto">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-zinc-200">Entrenamiento de Peso Libre</h3>
                    <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto leading-relaxed">
                      Elige de nuestra base de datos de ejercicios de fuerza, cardio o peso libre y registra series, kilos y repeticiones.
                    </p>
                  </div>
                  <button
                    id="start-session-trigger"
                    onClick={() => handleStartWorkout()}
                    className="w-full bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs py-3.5 px-4 rounded-xl transition shadow-lg shadow-lime-400/10 cursor-pointer"
                  >
                    + Comenzar un Entrenamiento Vacío
                  </button>
                </div>

                {/* Templates catalog direct click triggers */}
                <div className="bg-[#0E0E0E] border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-4">
                  <h3 className="text-xs font-bold text-zinc-200 uppercase tracking-wider">Tus Rutinas Disponibles ({routines.length})</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {routines.map((rt) => (
                      <div
                        id={`train-routine-row-${rt.id}`}
                        key={rt.id}
                        className="p-3 bg-zinc-950 border border-zinc-800 hover:border-lime-500/30 rounded-xl transition cursor-pointer flex flex-col justify-between h-28"
                        onClick={() => handleStartWorkout(rt)}
                      >
                        <div>
                          <span className="text-xs font-bold text-zinc-200 block">{rt.name}</span>
                          <span className="text-[10px] text-zinc-500 mt-1 block leading-relaxed line-clamp-2">{rt.description}</span>
                        </div>
                        <span className="text-[9px] font-bold text-lime-400 flex items-center gap-1 uppercase tracking-wider mt-2">
                          <Play className="w-2.5 h-2.5 fill-current" /> Iniciar Rutina
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB WORKOUTS HISTORIC STATISTICS COLLAPSE */}
            {activeTab === 'historial' && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-zinc-900 pb-3">
                  <div>
                    <h2 className="text-xl font-bold text-zinc-100">Progreso y Analítica</h2>
                    <p className="text-xs text-zinc-400">Tus estadísticas de volumen y series acumuladas</p>
                  </div>
                  
                  {/* Demo loader toggle */}
                  {logs.length === 0 && (
                    <button
                      id="demo-data-injector"
                      onClick={handleLoadDemoData}
                      className="bg-lime-400/10 hover:bg-lime-400 text-lime-400 hover:text-black text-[10px] font-bold px-3.5 py-2.5 border border-lime-500/20 rounded-xl transition flex items-center gap-1.5 shadow cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-lime-400" />
                      <span>Cargar Datos de Demostración</span>
                    </button>
                  )}
                </div>

                <HistoryStats
                  exercisesList={exercises}
                  logs={logs}
                  onLogsCleared={loadLogsFromStorage}
                />
              </div>
            )}
          </>
        )}
      </main>

      {/* FOOTER METRICS INFO OUTLET */}
      <footer className="bg-[#0E0E0E] border-t border-zinc-900 py-4 mt-12 shrink-0">
        <div className="max-w-7xl mx-auto px-4 text-center text-[10px] text-zinc-500">
          <p>© 2026 HevyGym. Librería de ejercicios inspirada en Hevy y fitcron.com.</p>
        </div>
      </footer>
    </div>
  );
}
