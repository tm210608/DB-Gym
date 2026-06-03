/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WorkoutLog, Exercise, MuscleGroupTranslation } from '../types';
import { Calendar, Clock, BarChart4, Dumbbell, ChevronDown, ChevronUp, Trash2, Library, Award, TrendingUp } from 'lucide-react';

interface HistoryStatsProps {
  exercisesList: Exercise[];
  logs: WorkoutLog[];
  onLogsCleared: () => void;
}

export default function HistoryStats({ exercisesList, logs, onLogsCleared }: HistoryStatsProps) {
  const [expandedLogId, setExpandedLogId] = useState<string | null>(null);

  const toggleExpandLog = (id: string) => {
    setExpandedLogId((prev) => (prev === id ? null : id));
  };

  const getExerciseName = (id: string) => {
    const ex = exercisesList.find((e) => e.id === id);
    return ex ? ex.name : `Ejercicio Desconocido (${id})`;
  };

  const getExerciseMuscle = (id: string) => {
    const ex = exercisesList.find((e) => e.id === id);
    return ex ? ex.primaryMuscle : 'Abdomen';
  };

  // 1. Calculate General Numbers
  const totalWorkouts = logs.length;
  const totalVolume = logs.reduce((acc, log) => acc + log.volume, 0);
  const avgDurationMins = totalWorkouts
    ? Math.round(logs.reduce((acc, log) => acc + log.durationSeconds, 0) / totalWorkouts / 60)
    : 0;

  // 2. Count Muscle Group Frequencies
  const muscleCounts: Record<string, number> = {};
  logs.forEach((log) => {
    log.exercises.forEach((ex) => {
      const muscle = getExerciseMuscle(ex.exerciseId);
      const muscleLabel = MuscleGroupTranslation[muscle] || muscle;
      muscleCounts[muscleLabel] = (muscleCounts[muscleLabel] || 0) + ex.sets.length;
    });
  });

  const muscleData = Object.entries(muscleCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  const maxMuscleCount = muscleData.length ? Math.max(...muscleData.map((d) => d.count)) : 1;

  // 3. Prepare Volume Progression Trend Data
  const trendData = [...logs]
    .reverse() // chronologically earliest first
    .map((log, idx) => ({
      index: idx + 1,
      name: log.name,
      volume: log.volume,
      dateString: new Date(log.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
    }));

  const maxVolumeVal = trendData.length ? Math.max(...trendData.map((t) => t.volume)) : 1000;

  const handleClearHistory = () => {
    if (confirm('¿Estás seguro de que deseas eliminar permanentemente todo tu historial y récords de entrenamientos? Esta acción es irreversible.')) {
      localStorage.removeItem('gym_workout_logs');
      onLogsCleared();
    }
  };

  return (
    <div id="history-stats-view" className="space-y-6">
      {/* Metrics Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#0E0E0E] border border-zinc-800 rounded-2xl p-4 shadow-md flex items-center gap-3">
          <div className="p-3 bg-lime-500/10 text-lime-400 rounded-xl">
            <Award className="w-5 h-5 filter drop-shadow-[0_1px_4px_rgba(163,230,53,0.4)]" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Entrenamientos</span>
            <span id="history-totals-count" className="block text-xl font-bold text-zinc-100 font-mono mt-0.5">{totalWorkouts}</span>
          </div>
        </div>

        <div className="bg-[#0E0E0E] border border-zinc-800 rounded-2xl p-4 shadow-md flex items-center gap-3">
          <div className="p-3 bg-emerald-600/15 text-emerald-400 rounded-xl">
            <Dumbbell className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Volumen Acumulado</span>
            <span id="history-totals-volume" className="block text-xl font-bold text-emerald-400 font-mono mt-0.5">{totalVolume.toLocaleString()} kg</span>
          </div>
        </div>

        <div className="bg-[#0E0E0E] border border-zinc-800 rounded-2xl p-4 shadow-md flex items-center gap-3">
          <div className="p-3 bg-lime-500/10 text-lime-400 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Tiempo Promedio</span>
            <span id="history-totals-duration" className="block text-xl font-bold text-zinc-100 font-mono mt-0.5">{avgDurationMins} min</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT COLUMN: Past Logs Timeline */}
        <div className="bg-[#0E0E0E] border border-zinc-800 rounded-2xl p-5 shadow-xl flex flex-col h-[520px]">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-850 mb-4 shrink-0">
            <h3 className="text-sm font-bold text-zinc-200 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-lime-400" /> Historial de Entrenamientos
            </h3>
            {logs.length > 0 && (
              <button
                id="clear-logs-btn"
                onClick={handleClearHistory}
                className="text-[10px] hover:text-rose-455 text-zinc-500 flex items-center gap-1 bg-zinc-950 px-2 py-1 rounded border border-zinc-850 transition cursor-pointer"
              >
                <Trash2 className="w-3 h-3" /> Borrar todo
              </button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 pr-1 scrollbar-thin scrollbar-thumb-zinc-850">
            {logs.length === 0 ? (
              <div className="text-center py-20 flex flex-col items-center justify-center">
                <Dumbbell className="w-10 h-10 text-zinc-700 mb-2.5" />
                <p className="text-xs text-zinc-400 font-medium">No has registrado entrenamientos todavía</p>
                <p className="text-[10px] text-zinc-550 mt-1 max-w-xs scale-95">Inicia un entrenamiento vacío o una rutina para registrar tus levantamientos de peso y reps.</p>
              </div>
            ) : (
              logs.map((log) => {
                const isExpanded = expandedLogId === log.id;
                const totalSets = log.exercises.reduce((acc, ex) => acc + ex.sets.length, 0);

                return (
                  <div
                    id={`log-record-${log.id}`}
                    key={log.id}
                    className="border border-zinc-850 bg-zinc-950/40 rounded-xl overflow-hidden transition hover:border-zinc-800"
                  >
                    {/* Collapsed top bar */}
                    <div
                      id={`log-bar-toggle-${log.id}`}
                      onClick={() => toggleExpandLog(log.id)}
                      className="p-3 flex items-center justify-between cursor-pointer select-none"
                    >
                      <div>
                        <span className="text-xs font-bold text-zinc-200 block">{log.name}</span>
                        <div className="flex items-center gap-2 text-[10px] text-zinc-400 mt-1">
                          <span className="font-mono bg-zinc-900 border border-zinc-850 px-1 py-0.5 rounded">
                            {new Date(log.date).toLocaleDateString(undefined, {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-0.5"><Clock className="w-3 h-3" /> {Math.ceil(log.durationSeconds / 60)}m</span>
                          <span>•</span>
                          <span className="text-lime-400">{log.volume} kg</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-zinc-500 font-medium">{log.exercises.length} Ejers</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-zinc-400" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
                      </div>
                    </div>

                    {/* Expanded details lists */}
                    {isExpanded && (
                      <div className="bg-zinc-950/80 border-t border-zinc-850 p-3 space-y-3 text-xs leading-relaxed max-h-56 overflow-y-auto">
                        {log.exercises.map((item, idx) => (
                          <div key={idx} className="border-b border-zinc-900 pb-2 last:border-0 last:pb-0">
                            <span className="font-bold text-zinc-300 block mb-1">{getExerciseName(item.exerciseId)}</span>
                            <div className="grid grid-cols-4 gap-2 text-[10px] text-zinc-400">
                              {item.sets.map((set, sIdx) => (
                                <div
                                  key={set.id}
                                  className="bg-zinc-900 border border-zinc-850/50 px-2 py-1 rounded text-center"
                                >
                                  <span className="text-zinc-500 font-bold font-mono mr-1">#{sIdx + 1}</span>
                                  <span className="text-zinc-200 font-mono font-semibold">{set.weight}kg × {set.reps}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Charts */}
        <div className="space-y-6">
          {/* Trend volume evolution (SVG native point & line projection) */}
          <div className="bg-[#0E0E0E] border border-zinc-800 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm font-bold text-zinc-200 mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" /> Evolución de Carga (Volumen)
            </h3>

            {trendData.length < 2 ? (
              <p className="text-xs text-zinc-500 text-center py-10 scale-95 leading-relaxed">
                Completa al menos **2 sesiones** finalizadas para trazar tu línea de progreso y sobrecarga progresiva en kilogramos levantados.
              </p>
            ) : (
              <div className="relative">
                {/* SVG Line Graph */}
                <svg viewBox="0 0 280 120" className="w-full h-auto drop-shadow-lg overflow-visible">
                  {/* Grid Lines */}
                  <line x1="10" y1="10" x2="270" y2="10" className="stroke-zinc-800/60" strokeDasharray="3" />
                  <line x1="10" y1="50" x2="270" y2="50" className="stroke-zinc-800/60" strokeDasharray="3" />
                  <line x1="10" y1="90" x2="270" y2="90" className="stroke-zinc-800/60" strokeDasharray="3" />

                  {/* Draw Lines */}
                  {(() => {
                    const points = trendData.map((d, i) => {
                      const x = 15 + (i / (trendData.length - 1)) * 240;
                      const y = 100 - (d.volume / maxVolumeVal) * 80;
                      return { x, y };
                    });

                    const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

                    return (
                      <>
                        <path d={pathD} className="fill-none stroke-lime-400 stroke-2" />
                        {points.map((p, i) => (
                          <g key={i}>
                            <circle
                              cx={p.x}
                              cy={p.y}
                              r="4"
                              className="fill-lime-500 stroke-zinc-950 stroke-2 cursor-pointer hover:fill-lime-400"
                            />
                            {/* Little text above point */}
                            <text
                              x={p.x}
                              y={p.y - 8}
                              textAnchor="middle"
                              className="fill-zinc-400 text-[7px] font-mono font-bold"
                            >
                              {trendData[i].volume}
                            </text>
                            
                            {/* Date String under timeline */}
                            <text
                              x={p.x}
                              y="112"
                              textAnchor="middle"
                              className="fill-zinc-500 text-[6px] font-medium"
                            >
                              {trendData[i].dateString}
                            </text>
                          </g>
                        ))}
                      </>
                    );
                  })()}
                </svg>
              </div>
            )}
          </div>

          {/* Muscle hypertrophy work split balance (custom bar charts) */}
          <div className="bg-[#0E0E0E] border border-zinc-800 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm font-bold text-zinc-200 mb-4 flex items-center gap-2">
              <BarChart4 className="w-4 h-4 text-lime-400" /> Balance de Series por Músculo
            </h3>

            {muscleData.length === 0 ? (
              <p className="text-xs text-zinc-500 text-center py-10 scale-95 leading-relaxed">
                Ninguna serie de entrenamiento completada de forma efectiva. Registra un entrenamiento para ver el reparto muscular anatómico.
              </p>
            ) : (
              <div className="space-y-3 max-h-[160px] overflow-y-auto pr-1">
                {muscleData.slice(0, 5).map((m, idx) => {
                  const percentage = Math.round((m.count / maxMuscleCount) * 100);
                  return (
                    <div id={`muscle-bar-item-${idx}`} key={idx} className="space-y-1">
                      <div className="flex justify-between text-[11px] font-medium">
                        <span className="text-zinc-300">{m.name}</span>
                        <span className="text-lime-400 font-bold font-mono">{m.count} series</span>
                      </div>
                      <div className="w-full bg-zinc-950 h-2 rounded-full overflow-hidden border border-zinc-900/60">
                        <div
                          className="bg-lime-400 h-full rounded-full transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
