/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { WorkoutExercise, WorkoutSet, Exercise, MuscleGroupTranslation, EquipmentTypeTranslation } from '../types';
import { Play, LogOut, CheckCircle2, Clock, Trash2, Plus, Dumbbell, ChevronDown, Check, X, RotateCcw, Volume2, Trophy, Eye, Zap } from 'lucide-react';

interface ActiveWorkoutTrackerProps {
  exercisesList: Exercise[];
  onWorkoutSaved: () => void;
  onCancel: () => void;
  activeRoutineName?: string;
  initialExercises?: WorkoutExercise[];
}

export default function ActiveWorkoutTracker({
  exercisesList,
  onWorkoutSaved,
  onCancel,
  activeRoutineName = 'Entrenamiento de hoy',
  initialExercises = [],
}: ActiveWorkoutTrackerProps) {
  const [workoutName, setWorkoutName] = useState(activeRoutineName);
  const [exercises, setExercises] = useState<WorkoutExercise[]>(initialExercises);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [restSecondsTotal, setRestSecondsTotal] = useState(90);
  const [restSecondsLeft, setRestSecondsLeft] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isAddExerciseModalOpen, setIsAddExerciseModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMuscleFilter, setSelectedMuscleFilter] = useState('');
  const [celebrationData, setCelebrationData] = useState<{
    duration: string;
    volume: number;
    setsCount: number;
  } | null>(null);

  const stopwatchIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const restTimerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Start Workout Stopwatch on Mount
  useEffect(() => {
    stopwatchIntervalRef.current = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);

    // Load empty starter set if no initial exercises
    if (initialExercises.length === 0 && exercisesList.length > 0) {
      // Auto-add simple bench press as placeholder if empty
      const bench = exercisesList.find((e) => e.id === 'barbell-bench-press') || exercisesList[0];
      if (bench) {
        addExerciseToWorkout(bench.id);
      }
    }

    return () => {
      if (stopwatchIntervalRef.current) clearInterval(stopwatchIntervalRef.current);
      if (restTimerIntervalRef.current) clearInterval(restTimerIntervalRef.current);
    };
  }, []);

  // 2. Play Audio chime using Web Audio API (No static asset hassle!)
  const playChime = () => {
    if (isMuted) return;
    try {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtxClass) return;
      const ctx = new AudioCtxClass();

      // Double note chime (Hevy vibe)
      const playNote = (freq: number, startTime: number, duration: number) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gainNode.gain.setValueAtTime(0.15, startTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + duration);
      };

      const now = ctx.currentTime;
      playNote(659.25, now, 0.4); // E5 note
      playNote(880.00, now + 0.15, 0.6); // A5 note
    } catch (err) {
      console.warn('Web Audio fail:', err);
    }
  };

  // 3. Keep Rest Timer Decreasing
  useEffect(() => {
    if (restSecondsLeft > 0) {
      if (restTimerIntervalRef.current) clearInterval(restTimerIntervalRef.current);
      restTimerIntervalRef.current = setInterval(() => {
        setRestSecondsLeft((prev) => {
          if (prev <= 1) {
            playChime();
            setIsTimerOpen(false);
            if (restTimerIntervalRef.current) clearInterval(restTimerIntervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (restTimerIntervalRef.current) clearInterval(restTimerIntervalRef.current);
    };
  }, [restSecondsLeft]);

  // 4. Formatter for Stopwatch (HH:MM:SS)
  const formatTime = (totalSecs: number) => {
    const hours = Math.floor(totalSecs / 3600);
    const minutes = Math.floor((totalSecs % 3600) / 60);
    const seconds = totalSecs % 60;
    return [
      hours > 0 ? String(hours).padStart(2, '0') : null,
      String(minutes).padStart(2, '0'),
      String(seconds).padStart(2, '0'),
    ]
      .filter(Boolean)
      .join(':');
  };

  const addExerciseToWorkout = (exerciseId: string) => {
    const existing = exercises.find((e) => e.exerciseId === exerciseId);
    if (existing) return; // already in active list

    const newExercise: WorkoutExercise = {
      exerciseId,
      sets: [
        {
          id: crypto.randomUUID(),
          weight: 20, // default starter plate
          reps: 10,
          completed: false,
          type: 'R',
        },
      ],
    };
    setExercises((prev) => [...prev, newExercise]);
  };

  const removeExercise = (index: number) => {
    setExercises((prev) => prev.filter((_, i) => i !== index));
  };

  const addSetToExercise = (exerciseIdx: number) => {
    const targetEx = exercises[exerciseIdx];
    const prevSet = targetEx.sets[targetEx.sets.length - 1];

    const newSet: WorkoutSet = {
      id: crypto.randomUUID(),
      weight: prevSet ? prevSet.weight : 20,
      reps: prevSet ? prevSet.reps : 10,
      completed: false,
      type: 'R',
    };

    setExercises((prev) => {
      const copy = [...prev];
      copy[exerciseIdx] = {
        ...targetEx,
        sets: [...targetEx.sets, newSet],
      };
      return copy;
    });
  };

  const deleteSetFromExercise = (exerciseIdx: number, setIdx: number) => {
    const targetEx = exercises[exerciseIdx];
    if (targetEx.sets.length <= 1) {
      removeExercise(exerciseIdx); // remove entire exercise if empty
      return;
    }

    setExercises((prev) => {
      const copy = [...prev];
      copy[exerciseIdx] = {
        ...targetEx,
        sets: targetEx.sets.filter((_, i) => i !== setIdx),
      };
      return copy;
    });
  };

  const updateSetField = (
    exIdx: number,
    setIdx: number,
    field: 'weight' | 'reps' | 'type',
    value: any
  ) => {
    setExercises((prev) => {
      const copy = [...prev];
      const targetEx = { ...copy[exIdx] };
      const targetSet = { ...targetEx.sets[setIdx] };

      if (field === 'weight') targetSet.weight = Math.max(0, parseFloat(value) || 0);
      else if (field === 'reps') targetSet.reps = Math.max(0, parseInt(value) || 0);
      else if (field === 'type') targetSet.type = value;

      targetEx.sets[setIdx] = targetSet;
      copy[exIdx] = targetEx;
      return copy;
    });
  };

  const toggleSetComplete = (exIdx: number, setIdx: number) => {
    setExercises((prev) => {
      const copy = [...prev];
      const targetEx = { ...copy[exIdx] };
      const targetSet = { ...targetEx.sets[setIdx] };

      targetSet.completed = !targetSet.completed;

      // Start Rest Timer if checking off as completed
      if (targetSet.completed) {
        setRestSecondsLeft(restSecondsTotal);
        setIsTimerOpen(true);
      }

      targetEx.sets[setIdx] = targetSet;
      copy[exIdx] = targetEx;
      return copy;
    });
  };

  // Adjust current rest timer
  const adjustRestTime = (secs: number) => {
    setRestSecondsLeft((prev) => Math.max(3, prev + secs));
  };

  // Total Workout Volume calculation
  const calculateTotalVolume = () => {
    let vol = 0;
    exercises.forEach((ex) => {
      ex.sets.forEach((s) => {
        if (s.completed) {
          vol += s.weight * s.reps;
        }
      });
    });
    return vol;
  };

  // Total sets completed
  const getCompletedSetsCount = () => {
    let cnt = 0;
    exercises.forEach((ex) => {
      ex.sets.forEach((s) => {
        if (s.completed) cnt++;
      });
    });
    return cnt;
  };

  const handleFinishWorkout = () => {
    const vol = calculateTotalVolume();
    const cnt = getCompletedSetsCount();

    if (cnt === 0) {
      alert('Por favor, selecciona como completada al menos una serie antes de finalizar para registrar volumen real.');
      return;
    }

    // Prepare WorkoutLog Object
    const newLog = {
      id: crypto.randomUUID(),
      name: workoutName.trim() || 'Entrenamiento de hoy',
      date: new Date().toISOString(),
      durationSeconds: elapsedSeconds,
      exercises: exercises.filter(
        (ex) => ex.sets.some((s) => s.completed)
      ), // save exercises with at least 1 completed set
      volume: vol,
    };

    // Save to LocalStorage Logs list
    const existingLogsStr = localStorage.getItem('gym_workout_logs');
    const existingLogs = existingLogsStr ? JSON.parse(existingLogsStr) : [];
    localStorage.setItem('gym_workout_logs', JSON.stringify([newLog, ...existingLogs]));

    // Trigger celebration dialog
    setCelebrationData({
      duration: formatTime(elapsedSeconds),
      volume: vol,
      setsCount: cnt,
    });
  };

  const closeCelebrationAndExit = () => {
    setCelebrationData(null);
    onWorkoutSaved();
  };

  // Filter exercises for Add Exercise Modal
  const filteredExercisesForModal = exercisesList.filter((e) => {
    const matchesSearch = e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (e.nameEn && e.nameEn.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesMuscle = !selectedMuscleFilter || e.primaryMuscle === selectedMuscleFilter;
    return matchesSearch && matchesMuscle;
  });

  return (
    <div id="active-workout-tracker" className="flex flex-col gap-6 max-w-3xl mx-auto py-2">
      {/* 1. Header with Name & Live Stopwatch */}
      <div className="bg-[#0E0E0E] border border-zinc-800 rounded-2xl p-5 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-0 z-40 backdrop-blur-md">
        <div className="flex-1">
          <input
            id="active-workout-name-input"
            type="text"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
            className="text-lg font-bold bg-transparent text-zinc-100 border-b border-dashed border-zinc-800 focus:border-lime-500 focus:outline-none w-full max-w-sm py-1"
          />
          <p className="text-xs text-zinc-500 mt-1">Registrando sesión en tiempo real</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 px-4 py-2.5 rounded-xl font-mono text-zinc-100 text-lg shadow-inner">
            <Clock className="w-5 h-5 text-lime-400 animate-pulse" />
            <span>{formatTime(elapsedSeconds)}</span>
          </div>

          <button
            id="finish-workout-btn"
            onClick={handleFinishWorkout}
            className="bg-lime-400 hover:bg-lime-300 text-black text-xs font-black px-4 py-3 rounded-xl transition flex items-center gap-1.5 shadow cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Finalizar</span>
          </button>

          <button
            id="cancel-workout-btn"
            onClick={() => {
              if (confirm('¿Seguro que deseas descartar este entrenamiento en progreso? Se perderá todo el progreso de la sesión actual.')) {
                onCancel();
              }
            }}
            className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs px-3 py-3 rounded-xl transition cursor-pointer"
          >
            Descartar
          </button>
        </div>
      </div>

      {/* 2. Active Exercises List */}
      <div className="space-y-4">
        {exercises.length === 0 ? (
          <div className="bg-zinc-900/30 border border-zinc-800 border-dashed rounded-2xl p-12 text-center flex flex-col items-center justify-center">
            <Dumbbell className="w-12 h-12 text-zinc-700 mb-3" />
            <p className="text-sm font-semibold text-zinc-300">No hay ejercicios agregados aún</p>
            <p className="text-xs text-zinc-500 mt-1 max-w-xs scale-95">Presiona el botón de abajo para explorar la base de datos de ejercicios del gimnasio estilo Hevy y agregarlos.</p>
            <button
              id="empty-add-exercise-btn"
              onClick={() => setIsAddExerciseModalOpen(true)}
              className="mt-4 bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Añadir Ejercicio</span>
            </button>
          </div>
        ) : (
          exercises.map((ex, exIdx) => {
            const exerciseDetails = exercisesList.find((e) => e.id === ex.exerciseId);
            if (!exerciseDetails) return null;

            return (
              <div
                id={`exercise-card-${ex.exerciseId}`}
                key={ex.exerciseId}
                className="bg-[#0E0E0E] border border-zinc-800 rounded-2xl p-4 shadow-lg transition duration-200 hover:border-zinc-700/60"
              >
                {/* Exercise header info */}
                <div className="flex items-start justify-between border-b border-zinc-800 pb-3 mb-3">
                  <div>
                    <h4 className="font-bold text-sm text-zinc-100 flex items-center gap-2">
                       {exerciseDetails.name}
                      <span className="text-[10px] font-normal text-zinc-400">({exerciseDetails.nameEn})</span>
                    </h4>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[10px] font-bold text-zinc-400 bg-zinc-950 border border-zinc-800 px-2 py-0.5 rounded-md">
                        {MuscleGroupTranslation[exerciseDetails.primaryMuscle] || exerciseDetails.primaryMuscle}
                      </span>
                      <span className="text-[10px] text-zinc-600">•</span>
                      <span className="text-[10px] font-medium text-zinc-400 bg-zinc-950 border border-zinc-800 px-2 py-0.5 rounded-md">
                        {EquipmentTypeTranslation[exerciseDetails.equipment] || exerciseDetails.equipment}
                      </span>
                    </div>
                  </div>

                  <button
                    id={`remove-ex-btn-${ex.exerciseId}`}
                    onClick={() => removeExercise(exIdx)}
                    className="text-zinc-500 hover:text-rose-400 p-1.5 rounded-full hover:bg-zinc-950 transition cursor-pointer"
                    title="Eliminar ejercicio de la sesión"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Table Layout for Sets */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-zinc-800 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                        <th className="py-2.5 px-2 text-center w-12">Serie</th>
                        <th className="py-2.5 px-2 text-center w-16">Tipo</th>
                        <th className="py-2.5 px-2 text-center">Kilos (KG)</th>
                        <th className="py-2.5 px-2 text-center">Reps</th>
                        <th className="py-2.5 px-2 text-center w-16">✔</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-900/60">
                      {ex.sets.map((set, setIdx) => (
                        <tr
                          key={set.id}
                          className={`transition ${set.completed ? 'bg-lime-400/5' : 'hover:bg-zinc-950/20'}`}
                        >
                          {/* Set number */}
                          <td className="py-2 px-2 text-center font-mono text-xs text-zinc-400">
                            {setIdx + 1}
                          </td>

                          {/* Set type selector (Regular, Warmup, Dropset) */}
                          <td className="py-2 px-2 text-center">
                            <select
                              id={`set-type-${ex.exerciseId}-${setIdx}`}
                              value={set.type}
                              onChange={(e) => updateSetField(exIdx, setIdx, 'type', e.target.value)}
                              className="bg-zinc-950 border border-zinc-800 text-xs rounded px-1 py-1 text-zinc-300 font-bold focus:outline-none focus:border-lime-500 cursor-pointer"
                            >
                              <option value="R" className="bg-zinc-950 text-zinc-300">R</option>
                              <option value="W" className="bg-zinc-950 text-zinc-300">W</option>
                              <option value="F" className="bg-zinc-950 text-zinc-300">F</option>
                              <option value="D" className="bg-zinc-950 text-zinc-300">D</option>
                            </select>
                          </td>

                          {/* Weight input */}
                          <td className="py-2 px-2">
                            <div className="flex items-center justify-center gap-1.5">
                              <input
                                id={`set-weight-${ex.exerciseId}-${setIdx}`}
                                type="number"
                                step="2.5"
                                value={set.weight}
                                onChange={(e) => updateSetField(exIdx, setIdx, 'weight', e.target.value)}
                                className="bg-zinc-950 text-zinc-200 border border-zinc-800 rounded px-2 py-1.5 text-center font-mono text-xs max-w-[70px] focus:outline-none focus:border-lime-500"
                              />
                            </div>
                          </td>

                          {/* Reps input */}
                          <td className="py-2 px-2">
                            <div className="flex items-center justify-center gap-1.5">
                              <input
                                id={`set-reps-${ex.exerciseId}-${setIdx}`}
                                type="number"
                                value={set.reps}
                                onChange={(e) => updateSetField(exIdx, setIdx, 'reps', e.target.value)}
                                className="bg-zinc-950 text-zinc-200 border border-zinc-800 rounded px-2 py-1.5 text-center font-mono text-xs max-w-[65px] focus:outline-none focus:border-lime-500"
                              />
                            </div>
                          </td>

                          {/* Completed toggle checkbox */}
                          <td className="py-2 px-2 text-center">
                            <button
                              id={`set-check-${ex.exerciseId}-${setIdx}`}
                              onClick={() => toggleSetComplete(exIdx, setIdx)}
                              className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all duration-200 cursor-pointer ${
                                set.completed
                                  ? 'bg-lime-400 border-lime-400 text-black shadow-md scale-105'
                                  : 'bg-zinc-950 border-zinc-800 text-transparent hover:border-zinc-600'
                              }`}
                            >
                              {set.completed ? <Check className="w-4 h-4 stroke-[3]" /> : <Check className="w-4 h-4" />}
                            </button>
                          </td>

                          {/* Delete Set quick cross */}
                          <td className="w-8 py-2 text-center">
                            <button
                              id={`delete-set-btn-${ex.exerciseId}-${setIdx}`}
                              onClick={() => deleteSetFromExercise(exIdx, setIdx)}
                              className="text-zinc-500 hover:text-rose-500 p-1 rounded cursor-pointer"
                              title="Borrar serie"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Add new set button */}
                <button
                  id={`add-set-btn-${ex.exerciseId}`}
                  onClick={() => addSetToExercise(exIdx)}
                  className="mt-3 w-full bg-zinc-950 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 font-bold text-xs py-2 rounded-xl border border-zinc-800 hover:border-zinc-700 transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Añadir Serie</span>
                </button>
              </div>
            );
          })
        )}
      </div>

       {/* 3. Add more exercise to session trigger */}
      {exercises.length > 0 && (
        <button
          id="add-exercise-to-active-btn"
          onClick={() => setIsAddExerciseModalOpen(true)}
          className="bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs py-3.5 px-4 rounded-xl transition flex items-center justify-center gap-2 shadow-lg cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Añadir un Ejercicio a esta Sesión</span>
        </button>
      )}

      {/* ======================================= */}
      {/* 4. FLOATING ACTIVE REST TIMER POPUP     */}
      {/* ======================================= */}
      {isTimerOpen && (
        <div id="rest-timer-bottom-popup" className="fixed bottom-6 right-6 bg-zinc-950 border-2 border-lime-500/20 rounded-2xl p-4 shadow-2xl z-50 w-64 animate-fade-in text-zinc-100">
          <div className="flex items-center justify-between mb-2 pb-2 border-b border-zinc-900">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-lime-400" /> Tiempo de Descanso
            </span>
            <button
              id="close-timer"
              onClick={() => setIsTimerOpen(false)}
              className="text-zinc-500 hover:text-zinc-300 p-0.5 rounded cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col items-center">
            {/* Countdown circular display style */}
            <div className="relative w-28 h-28 flex items-center justify-center mb-3">
              <svg className="absolute w-full h-full transform -rotate-90">
                <circle
                  cx="56"
                  cy="56"
                  r="48"
                  className="stroke-zinc-900 fill-none"
                  strokeWidth="6"
                />
                <circle
                  cx="56"
                  cy="56"
                  r="48"
                  className="stroke-lime-400 fill-none transition-all duration-1000"
                  strokeWidth="6"
                  strokeDasharray="301.6"
                  strokeDashoffset={301.6 - (301.6 * restSecondsLeft) / restSecondsTotal}
                />
              </svg>
              <span className="text-2xl font-mono font-bold text-zinc-100">
                {Math.floor(restSecondsLeft / 60)}:{String(restSecondsLeft % 60).padStart(2, '0')}
              </span>
            </div>

            {/* Adjustments +/- 30 seconds */}
            <div className="flex items-center gap-2 mb-3">
              <button
                id="timer-minus-30"
                onClick={() => adjustRestTime(-30)}
                className="text-[10px] font-bold bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 px-2 py-1 rounded cursor-pointer"
              >
                -30s
              </button>
              <button
                id="timer-plus-30"
                onClick={() => adjustRestTime(30)}
                className="text-[10px] font-bold bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 px-2 py-1 rounded cursor-pointer"
              >
                +30s
              </button>
              <button
                id="timer-reset"
                onClick={() => setRestSecondsLeft(restSecondsTotal)}
                className="text-[10px] bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-lime-400 p-1 rounded cursor-pointer"
                title="Sincronizar de nuevo"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>

            {/* Mute and Chime control indicators */}
            <div className="flex items-center justify-between w-full text-[10px] text-zinc-500 border-t border-zinc-900 pt-2">
              <button
                id="timer-toggle-mute"
                onClick={() => setIsMuted(!isMuted)}
                className="flex items-center gap-1.5 hover:text-zinc-400 transition cursor-pointer"
              >
                <Volume2 className={`w-3.5 h-3.5 ${isMuted ? 'text-rose-500' : 'text-lime-500'}`} />
                <span>{isMuted ? 'Silenciado' : 'Sonido activo'}</span>
              </button>

              <span>Config: {restSecondsTotal}s</span>
            </div>
          </div>
        </div>
      )}

      {/* ======================================= */}
      {/* 5. ADD EXERCISE MODAL                   */}
      {/* ======================================= */}
      {isAddExerciseModalOpen && (
        <div id="add-exercise-modal-overlay" className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-50 backdrop-blur-sm animate-fade-in">
          <div id="add-exercise-modal-content" className="bg-[#0E0E0E] border border-zinc-800 w-full max-w-xl rounded-2xl shadow-2xl p-5 flex flex-col max-h-[85vh]">
            <div className="flex justify-between items-center pb-3 border-b border-zinc-800 mb-3">
              <div>
                <h3 className="font-bold text-base text-zinc-100 flex items-center gap-2">
                  <Dumbbell className="w-5 h-5 text-lime-400" /> Agregar Ejercicio
                </h3>
                <p className="text-xs text-zinc-400 mt-1">Busca e inserta de la base de datos de ejercicios</p>
              </div>
              <button
                id="close-add-modal"
                onClick={() => setIsAddExerciseModalOpen(false)}
                className="text-zinc-400 hover:text-zinc-200 bg-zinc-950 p-1.5 rounded-lg border border-zinc-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search/Filter in Modal */}
            <div className="grid grid-cols-2 gap-2 mb-3 shrink-0">
              <input
                id="modal-exercise-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Busca por nombre (ej: banca, peso muerto)..."
                className="bg-zinc-950 text-xs border border-zinc-800 rounded-xl px-3 py-2 text-zinc-200 focus:outline-none focus:border-lime-500 placeholder-zinc-500"
              />
              <select
                id="modal-muscle-select"
                value={selectedMuscleFilter}
                onChange={(e) => setSelectedMuscleFilter(e.target.value)}
                className="bg-zinc-950 text-xs border border-zinc-800 rounded-xl px-2 py-2 text-zinc-300 focus:outline-none focus:border-lime-500 font-medium cursor-pointer"
              >
                <option value="" className="bg-zinc-950 text-zinc-400">Todos los músculos</option>
                {Object.keys(MuscleGroupTranslation).map((mg) => (
                  <option key={mg} value={mg} className="bg-zinc-950 text-zinc-300">
                    {MuscleGroupTranslation[mg as any]}
                  </option>
                ))}
              </select>
            </div>

            {/* Exercises List scrollable */}
            <div className="flex-1 overflow-y-auto space-y-2 pr-1 max-h-[45vh] scrollbar-thin scrollbar-thumb-zinc-800">
              {filteredExercisesForModal.length === 0 ? (
                <p className="text-xs text-zinc-500 text-center py-6">Ningún ejercicio coincide con el filtro.</p>
              ) : (
                filteredExercisesForModal.map((e) => {
                  const isAdded = exercises.some((active) => active.exerciseId === e.id);
                  return (
                    <div
                      id={`modal-ex-row-${e.id}`}
                      key={e.id}
                      className="flex items-center justify-between p-2.5 bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-800 rounded-xl"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-zinc-200">{e.name}</span>
                          <span className="text-[10px] text-zinc-500">({e.nameEn})</span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="text-[9px] text-zinc-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded uppercase">
                            {MuscleGroupTranslation[e.primaryMuscle] || e.primaryMuscle}
                          </span>
                          <span className="text-[9px] text-zinc-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded uppercase">
                            {EquipmentTypeTranslation[e.equipment] || e.equipment}
                          </span>
                        </div>
                      </div>

                      <button
                        id={`modal-add-action-${e.id}`}
                        onClick={() => {
                          addExerciseToWorkout(e.id);
                          setIsAddExerciseModalOpen(false); // Quick feedback: close and insert
                        }}
                        disabled={isAdded}
                        className={`text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                          isAdded
                            ? 'bg-zinc-900 text-zinc-500 border border-zinc-800 cursor-not-allowed'
                            : 'bg-lime-400 hover:bg-lime-300 text-black flex items-center gap-1 font-extrabold'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Agregado</span>
                          </>
                        ) : (
                          <span>Insertar</span>
                        )}
                      </button>
                    </div>
                  );
                })
              )}
            </div>
            
            <div className="mt-4 border-t border-zinc-800 pt-3 flex justify-end shrink-0">
              <button
                id="modal-done-btn"
                onClick={() => setIsAddExerciseModalOpen(false)}
                className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold text-xs px-4 py-2 rounded-xl cursor-pointer"
              >
                Listo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================= */}
      {/* 6. CONGRATULATIONS CELEBRATION MODAL    */}
      {/* ======================================= */}
      {celebrationData && (
        <div id="celebration-screen-overlay" className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50 backdrop-blur-md animate-fade-in">
          <div id="celebration-card" className="bg-[#0E0E0E] border-2 border-lime-500/20 w-full max-w-md rounded-3xl shadow-2xl p-6 text-center transform relative overflow-hidden">
            {/* Confetti simulation overlays */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
              <div className="w-16 h-16 bg-lime-500/10 rounded-full blur-2xl absolute -top-4 -left-4 animate-pulse" />
              <div className="w-16 h-16 bg-lime-400/10 rounded-full blur-2xl absolute -bottom-4 -right-4 animate-pulse" />
            </div>

            <div className="w-16 h-16 bg-lime-400/10 text-lime-400 rounded-full flex items-center justify-center mx-auto mb-4 scale-105 animate-bounce">
              <Trophy className="w-8 h-8 filter drop-shadow-[0_2px_8px_rgba(163,230,53,0.5)]" />
            </div>

            <h3 className="text-xl font-black text-zinc-100 uppercase tracking-tight">¡Entrenamiento Guardado!</h3>
            <p className="text-xs text-zinc-400 mt-1">Has acumulado volumen de fierros valioso en tus registros</p>

            {/* Metrics cards */}
            <div className="grid grid-cols-3 gap-2 mt-5">
              <div className="bg-zinc-950 p-3 rounded-2xl border border-zinc-800">
                <span className="text-[9px] uppercase font-bold tracking-wider text-zinc-500 block">Duración</span>
                <span className="text-sm font-semibold font-mono text-zinc-200 block mt-1">{celebrationData.duration}</span>
              </div>
              <div className="bg-zinc-950 p-3 rounded-2xl border border-zinc-800">
                <span className="text-[9px] uppercase font-bold tracking-wider text-zinc-500 block">Volumen</span>
                <span className="text-sm font-extrabold font-mono text-lime-400 block mt-1">{celebrationData.volume} kg</span>
              </div>
              <div className="bg-zinc-950 p-3 rounded-2xl border border-zinc-800">
                <span className="text-[9px] uppercase font-bold tracking-wider text-zinc-500 block">Series</span>
                <span className="text-sm font-semibold font-mono text-lime-400 block mt-1">{celebrationData.setsCount}</span>
              </div>
            </div>

            {/* AI Motivation Quote */}
            <div className="bg-zinc-950/60 p-3 rounded-2xl border border-zinc-800 mt-4 text-xs text-lime-300 italic">
              "Cada repetición completada te sitúa más cerca de tus metas de fuerza. ¡La consistencia es el motor del cambio físico!"
            </div>

            <button
              id="celebration-close-btn"
              onClick={closeCelebrationAndExit}
              className="mt-6 w-full bg-lime-400 hover:bg-lime-300 text-black font-extrabold py-3 px-4 rounded-xl transition shadow-lg shadow-lime-400/20 cursor-pointer"
            >
              Cerrar y Ver Historial
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
