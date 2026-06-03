/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Exercise, MuscleGroup, EquipmentType, DifficultyLevel, MuscleGroupTranslation, EquipmentTypeTranslation } from '../types';
import { Search, Filter, Plus, BookOpen, AlertCircle, Sparkles, X, ChevronRight, Dumbbell, Heart, Check, Trash } from 'lucide-react';

interface ExerciseListProps {
  exercises: Exercise[];
  selectedExercise: Exercise | null;
  onSelectExercise: (exercise: Exercise | null) => void;
  selectedMuscle: MuscleGroup | null;
  onSelectMuscle: (muscle: MuscleGroup | null) => void;
  onAddCustomExercise: (newEx: Exercise) => void;
  onDeleteCustomExercise?: (id: string) => void;
}

export default function ExerciseList({
  exercises,
  selectedExercise,
  onSelectExercise,
  selectedMuscle,
  onSelectMuscle,
  onAddCustomExercise,
  onDeleteCustomExercise,
}: ExerciseListProps) {
  const [search, setSearch] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState<EquipmentType | ''>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | ''>('');
  const [isCreatorOpen, setIsCreatorOpen] = useState(false);

  // Custom Exercise Builder Form States
  const [newName, setNewName] = useState('');
  const [newPrimaryMuscle, setNewPrimaryMuscle] = useState<MuscleGroup>('Chest');
  const [newEquipment, setNewEquipment] = useState<EquipmentType>('Dumbbell');
  const [newDifficulty, setNewDifficulty] = useState<DifficultyLevel>('Principiante');
  const [newInstructions, setNewInstructions] = useState('');

  // 1. Filter Database
  const filteredExercises = exercises.filter((ex) => {
    const matchesSearch =
      ex.name.toLowerCase().includes(search.toLowerCase()) ||
      (ex.nameEn && ex.nameEn.toLowerCase().includes(search.toLowerCase()));
    const matchesMuscle = !selectedMuscle || ex.primaryMuscle === selectedMuscle;
    const matchesEquipment = !selectedEquipment || ex.equipment === selectedEquipment;
    const matchesDifficulty = !selectedDifficulty || ex.difficulty === selectedDifficulty;

    return matchesSearch && matchesMuscle && matchesEquipment && matchesDifficulty;
  });

  // 2. Submit custom exercise
  const handleCreateCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const instructionsArray = newInstructions
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    const customEx: Exercise = {
      id: `custom-${Date.now()}`,
      name: `⭐ ${newName.trim()}`,
      nameEn: 'Custom Exercise',
      primaryMuscle: newPrimaryMuscle,
      equipment: newEquipment,
      difficulty: newDifficulty,
      instructions: instructionsArray.length > 0 ? instructionsArray : ['Ejecuta este ejercicio manteniendo una técnica controlada.'],
      alternatives: [],
    };

    onAddCustomExercise(customEx);
    // Reset
    setNewName('');
    setNewInstructions('');
    setIsCreatorOpen(false);
  };

  return (
    <div id="exercise-list-wrapper" className="flex flex-col gap-4">
      {/* Search & Action Bar */}
      <div className="bg-[#0E0E0E] border border-zinc-800 rounded-2xl p-4 shadow-lg flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-zinc-500" />
          <input
            id="exercise-search-input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar ejercicio (ej. press de banca, sentadilla)..."
            className="w-full bg-zinc-950 text-xs text-zinc-250 pl-10 pr-4 py-3 rounded-xl border border-zinc-850 focus:outline-none focus:border-lime-500 placeholder-zinc-550 transition-all shadow-inner"
          />
        </div>

        <button
          id="toggle-creator-btn"
          onClick={() => setIsCreatorOpen(!isCreatorOpen)}
          className="bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs px-4 py-3 rounded-xl transition flex items-center justify-center gap-1.5 shadow cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Crear Ejercicio</span>
        </button>
      </div>

      {/* CREATE CUSTOM EXERCISE DROPDOWN FORM */}
      {isCreatorOpen && (
        <form
          id="custom-exercise-form"
          onSubmit={handleCreateCustom}
          className="bg-[#0E0E0E] border border-lime-500/20 rounded-2xl p-4 shadow-lg space-y-3 animate-fade-in"
        >
          <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
            <h4 className="text-xs font-bold text-zinc-250 uppercase tracking-wide">Nuevo Ejercicio Personalizado</h4>
            <button
              id="cancel-creator-btn"
              type="button"
              onClick={() => setIsCreatorOpen(false)}
              className="text-zinc-500 hover:text-zinc-300 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold text-zinc-400">Nombre del Ejercicio *</label>
              <input
                id="custom-ex-name"
                type="text"
                required
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Ej: Elevación de Cadera Unilateral"
                className="w-full bg-zinc-950 text-xs text-zinc-200 border border-zinc-800 rounded-xl px-3 py-2.5 focus:outline-none focus:border-lime-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold text-zinc-400">Grupo Muscular Principal</label>
              <select
                id="custom-ex-muscle"
                value={newPrimaryMuscle}
                onChange={(e) => setNewPrimaryMuscle(e.target.value as MuscleGroup)}
                className="w-full bg-zinc-950 text-xs text-[#a3e635] border border-zinc-800 rounded-xl px-2.5 py-2.5 focus:outline-none focus:border-lime-500 font-medium cursor-pointer"
              >
                {Object.entries(MuscleGroupTranslation).map(([mg, text]) => (
                  <option key={mg} value={mg} className="bg-zinc-950 text-zinc-300">
                    {text}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold text-zinc-400">Equipamiento</label>
              <select
                id="custom-ex-equipment"
                value={newEquipment}
                onChange={(e) => setNewEquipment(e.target.value as EquipmentType)}
                className="w-full bg-zinc-950 text-xs text-[#a3e635] border border-zinc-800 rounded-xl px-2.5 py-2.5 focus:outline-none focus:border-lime-500 font-medium cursor-pointer"
              >
                {Object.entries(EquipmentTypeTranslation).map(([eq, text]) => (
                  <option key={eq} value={eq} className="bg-zinc-950 text-zinc-300">
                    {text}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold text-zinc-400">Dificultad</label>
              <select
                id="custom-ex-difficulty"
                value={newDifficulty}
                onChange={(e) => setNewDifficulty(e.target.value as DifficultyLevel)}
                className="w-full bg-zinc-950 text-xs text-[#a3e635] border border-zinc-800 rounded-xl px-2.5 py-2.5 focus:outline-none focus:border-lime-500 font-medium cursor-pointer"
              >
                <option value="Principiante" className="bg-zinc-950 text-zinc-300">Principiante</option>
                <option value="Intermedio" className="bg-zinc-950 text-zinc-300">Intermedio</option>
                <option value="Avanzado" className="bg-zinc-950 text-zinc-300">Avanzado</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-bold text-zinc-400">Instrucciones (Una por línea)</label>
            <textarea
              id="custom-ex-instructions"
              value={newInstructions}
              onChange={(e) => setNewInstructions(e.target.value)}
              placeholder="1. Coloca las mancuernas sobre los muslos...&#10;2. Ejecuta un tirón explosivo..."
              rows={3}
              className="w-full bg-zinc-950 text-xs text-zinc-200 border border-zinc-800 rounded-xl px-3 py-2 focus:outline-none focus:border-lime-500 placeholder-zinc-600"
            />
          </div>

          <button
            id="save-custom-ex-btn"
            type="submit"
            className="w-full bg-lime-400 hover:bg-lime-300 font-bold text-xs text-black py-3 rounded-xl transition shadow cursor-pointer"
          >
            Guardar Ejercicio en la Base de Datos
          </button>
        </form>
      )}

      {/* FILTER BUTTONS & SELECTION PILLS */}
      <div className="flex flex-col gap-2.5 py-1 bg-zinc-950/40 border border-zinc-900 rounded-2xl p-3">
        {/* Equipment filter */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Equipamiento:</span>
          <div className="flex flex-wrap gap-1.5">
            <button
              id="eq-filter-empty"
              onClick={() => setSelectedEquipment('')}
              className={`text-[10px] font-semibold px-2.5 py-1.5 rounded-lg transition border cursor-pointer ${
                selectedEquipment === ''
                  ? 'bg-zinc-800 border-zinc-700 text-zinc-200'
                  : 'bg-zinc-950 border-zinc-850 text-zinc-500 hover:text-zinc-400'
              }`}
            >
              Todos
            </button>
            {Object.entries(EquipmentTypeTranslation).map(([eq, text]) => (
              <button
                id={`eq-filter-${eq}`}
                key={eq}
                onClick={() => setSelectedEquipment(eq as EquipmentType)}
                className={`text-[10px] font-semibold px-2.5 py-1.5 rounded-lg transition border cursor-pointer ${
                  selectedEquipment === eq
                    ? 'bg-lime-400 border-lime-400 text-black font-extrabold'
                    : 'bg-zinc-950 border-zinc-850 text-zinc-400 hover:text-zinc-350'
                }`}
              >
                {text}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty filter */}
        <div className="flex flex-col gap-1.5 border-t border-zinc-900/60 pt-2.5">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Dificultad:</span>
          <div className="flex flex-wrap gap-1.5">
            <button
              id="diff-filter-empty"
              onClick={() => setSelectedDifficulty('')}
              className={`text-[10px] font-semibold px-2.5 py-1.5 rounded-lg transition border cursor-pointer ${
                selectedDifficulty === ''
                  ? 'bg-zinc-800 border-zinc-700 text-zinc-200'
                  : 'bg-zinc-950 border-zinc-850 text-zinc-500 hover:text-zinc-400'
              }`}
            >
              Todas
            </button>
            {['Principiante', 'Intermedio', 'Avanzado'].map((diff) => (
              <button
                id={`diff-filter-${diff}`}
                key={diff}
                onClick={() => setSelectedDifficulty(diff as DifficultyLevel)}
                className={`text-[10px] font-semibold px-2.5 py-1.5 rounded-lg transition border cursor-pointer ${
                  selectedDifficulty === diff
                    ? 'bg-lime-400 border-lime-400 text-black font-extrabold'
                    : 'bg-zinc-950 border-zinc-850 text-zinc-400 hover:text-zinc-350'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RESULTS LIST SCREEN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-zinc-805">
        {filteredExercises.length === 0 ? (
          <div className="col-span-2 text-center py-12 bg-[#0E0E0E] border border-zinc-800 rounded-2xl flex flex-col items-center justify-center">
            <AlertCircle className="w-8 h-8 text-zinc-600 mb-2" />
            <p className="text-xs text-zinc-450 font-medium">Ningún ejercicio coincide con tu búsqueda.</p>
            <p className="text-[9px] text-zinc-500 mt-1">Intenta ajustando los filtros de músculo o equipamiento.</p>
          </div>
        ) : (
          filteredExercises.map((e) => {
            const isSelected = selectedExercise?.id === e.id;
            const isCustom = e.id.startsWith('custom-');

            return (
              <div
                id={`exercise-row-${e.id}`}
                key={e.id}
                onClick={() => onSelectExercise(isSelected ? null : e)}
                className={`p-3.5 rounded-2xl border transition duration-200 cursor-pointer flex items-center justify-between shadow-sm relative overflow-hidden group ${
                  isSelected
                    ? 'bg-[#0E0E0E] border-lime-500 ring-2 ring-lime-550/20'
                    : 'bg-[#0E0E0E]/60 hover:bg-[#0E0E0E] border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold transition ${isSelected ? 'text-lime-450' : 'text-zinc-100 group-hover:text-lime-400'}`}>
                      {e.name}
                    </span>
                    {e.difficulty === 'Avanzado' && (
                      <span className="text-[8px] font-bold text-lime-400 bg-lime-500/10 px-1 py-0.5 rounded-md uppercase">PRO</span>
                    )}
                  </div>
                  <p className="text-[10px] text-zinc-450 mt-1 tracking-wide font-medium">({e.nameEn})</p>

                  <div className="flex items-center gap-1.5 mt-2.5">
                    <span className="text-[9px] font-bold text-zinc-350 bg-zinc-950/80 border border-zinc-800 px-2 py-0.5 rounded-md">
                      {MuscleGroupTranslation[e.primaryMuscle] || e.primaryMuscle}
                    </span>
                    <span className="text-[9px] font-medium text-zinc-400 bg-zinc-950/80 border border-zinc-800 px-2 py-0.5 rounded-md">
                      {EquipmentTypeTranslation[e.equipment] || e.equipment}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <ChevronRight className={`w-4 h-4 text-zinc-500 transition-transform ${isSelected ? 'rotate-90 text-lime-400' : ''}`} />
                  {isCustom && onDeleteCustomExercise && (
                    <button
                      id={`delete-custom-ex-${e.id}`}
                      onClick={(evt) => {
                        evt.stopPropagation(); // prevent select trigger
                        if (confirm('¿Eliminar este ejercicio personalizado?')) {
                          onDeleteCustomExercise(e.id);
                        }
                      }}
                      className="text-zinc-500 hover:text-rose-450 p-1.5 hover:bg-zinc-950 rounded-lg transition"
                      title="Eliminar ejercicio personalizado"
                    >
                      <Trash className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* COUNT BAR */}
      <div className="text-right text-[10px] font-mono text-zinc-500 border-t border-zinc-900 pt-2 shrink-0">
        Ejercicios disponibles: <span className="text-lime-400 font-extrabold">{filteredExercises.length}</span> (Filtros activos) de <span className="text-zinc-300 font-bold">{exercises.length}</span> totales
      </div>
    </div>
  );
}
