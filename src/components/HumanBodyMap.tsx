/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MuscleGroup } from '../types';

interface HumanBodyMapProps {
  selectedMuscle: MuscleGroup | null;
  onSelectMuscle: (muscle: MuscleGroup | null) => void;
  highlightPrimary?: MuscleGroup | null;
  highlightSecondaries?: MuscleGroup[];
}

export default function HumanBodyMap({
  selectedMuscle,
  onSelectMuscle,
  highlightPrimary,
  highlightSecondaries = [],
}: HumanBodyMapProps) {
  const [hoveredGroup, setHoveredGroup] = useState<MuscleGroup | null>(null);

  // Helper to determine path color based on status
  const getMuscleColor = (muscle: MuscleGroup) => {
    const isPrimary = highlightPrimary === muscle;
    const isSecondary = highlightSecondaries.includes(muscle);
    const isSelected = selectedMuscle === muscle;
    const isHovered = hoveredGroup === muscle;

    if (isPrimary) return 'fill-lime-400/90 stroke-lime-305 shadow shadow-lime-400/50';
    if (isSecondary) return 'fill-lime-500/30 stroke-lime-500/60';
    if (isSelected) return 'fill-zinc-350 stroke-zinc-200';
    if (isHovered) return 'fill-lime-400/50 stroke-lime-300 cursor-pointer';
    return 'fill-zinc-800 stroke-zinc-700 cursor-pointer hover:fill-zinc-700 transition-all duration-200';
  };

  const muscles: { id: MuscleGroup; nameEs: string; view: 'front' | 'back' }[] = [
    { id: 'Chest', nameEs: 'Pecho', view: 'front' },
    { id: 'Shoulders', nameEs: 'Hombros', view: 'front' },
    { id: 'Abs', nameEs: 'Abdomen', view: 'front' },
    { id: 'Biceps', nameEs: 'Bíceps', view: 'front' },
    { id: 'Forearms', nameEs: 'Antebrazos', view: 'front' },
    { id: 'Quads', nameEs: 'Cuádriceps', view: 'front' },
    { id: 'Back', nameEs: 'Espalda (Dorsal)', view: 'back' },
    { id: 'Triceps', nameEs: 'Tríceps', view: 'back' },
    { id: 'Hamstrings', nameEs: 'Isquiotibiales', view: 'back' },
    { id: 'Glutes', nameEs: 'Glúteos', view: 'back' },
    { id: 'Calves', nameEs: 'Gemelos', view: 'back' },
  ];

  const handleMuscleClick = (id: MuscleGroup) => {
    if (selectedMuscle === id) {
      onSelectMuscle(null); // toggle off
    } else {
      onSelectMuscle(id);
    }
  };

  return (
    <div id="human-body-map-container" className="flex flex-col bg-[#0E0E0E] border border-zinc-800 rounded-2xl p-4 shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-sm font-bold text-zinc-150">Mapa Anatómico</h3>
          <p className="text-xs text-zinc-400">Filtra tocando un músculo</p>
        </div>
        {selectedMuscle && (
          <button
            id="clear-muscle-filter"
            onClick={() => onSelectMuscle(null)}
            className="text-xs font-medium text-lime-455 hover:text-lime-350 bg-lime-400/10 border border-lime-500/15 px-2 py-1 rounded cursor-pointer"
          >
            Ver todos
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 pb-2">
        {/* VISTA FRONTAL */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2">Vista Frontal</span>
          <svg viewBox="0 0 100 200" className="w-full max-w-[130px] h-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            {/* Cabeza */}
            <circle cx="50" cy="20" r="10" className="fill-slate-800 stroke-slate-700" />
            {/* Cuello */}
            <rect x="47" y="29" width="6" height="6" className="fill-slate-800 stroke-slate-700" />

            {/* PECHO (Chest) */}
            <path
              d="M 38 36 Q 50 42 62 36 Q 60 52 50 54 Q 40 52 38 36 Z"
              className={getMuscleColor('Chest')}
              onMouseEnter={() => setHoveredGroup('Chest')}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => handleMuscleClick('Chest')}
            />

            {/* HOMBROS (Shoulders) - Front Right & Left */}
            <path
              d="M 33 36 Q 30 45 37 46 Q 38 36 33 36 Z"
              className={getMuscleColor('Shoulders')}
              onMouseEnter={() => setHoveredGroup('Shoulders')}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => handleMuscleClick('Shoulders')}
            />
            <path
              d="M 67 36 Q 70 45 63 46 Q 62 36 67 36 Z"
              className={getMuscleColor('Shoulders')}
              onMouseEnter={() => setHoveredGroup('Shoulders')}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => handleMuscleClick('Shoulders')}
            />

            {/* ABDOMEN (Abs) */}
            <path
              d="M 39 52 Q 50 55 61 52 L 58 78 Q 50 82 42 78 Z"
              className={getMuscleColor('Abs')}
              onMouseEnter={() => setHoveredGroup('Abs')}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => handleMuscleClick('Abs')}
            />

            {/* BÍCEPS (Biceps) - Right & Left */}
            <path
              d="M 31 46 Q 26 56 31 64 L 35 60 Q 33 50 34 46 Z"
              className={getMuscleColor('Biceps')}
              onMouseEnter={() => setHoveredGroup('Biceps')}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => handleMuscleClick('Biceps')}
            />
            <path
              d="M 69 46 Q 74 56 69 64 L 65 60 Q 67 50 66 46 Z"
              className={getMuscleColor('Biceps')}
              onMouseEnter={() => setHoveredGroup('Biceps')}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => handleMuscleClick('Biceps')}
            />

            {/* ANTEBRAZOS (Forearms) */}
            <path
              d="M 31 64 L 26 86 L 31 86 L 35 65 Z"
              className={getMuscleColor('Forearms')}
              onMouseEnter={() => setHoveredGroup('Forearms')}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => handleMuscleClick('Forearms')}
            />
            <path
              d="M 69 64 L 74 86 L 69 86 L 65 65 Z"
              className={getMuscleColor('Forearms')}
              onMouseEnter={() => setHoveredGroup('Forearms')}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => handleMuscleClick('Forearms')}
            />

            {/* CUÁDRICEPS (Quads) */}
            {/* Quádriceps Izq (Right visual screen perspective) */}
            <path
              d="M 34 94 Q 40 102 41 138 L 47 136 Q 48 100 46 94 Z"
              className={getMuscleColor('Quads')}
              onMouseEnter={() => setHoveredGroup('Quads')}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => handleMuscleClick('Quads')}
            />
            {/* Quádriceps Der */}
            <path
              d="M 66 94 Q 60 102 59 138 L 53 136 Q 52 100 54 94 Z"
              className={getMuscleColor('Quads')}
              onMouseEnter={() => setHoveredGroup('Quads')}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => handleMuscleClick('Quads')}
            />

            {/* Pelvis/Esqueleto general */}
            <path d="M 42 78 L 46 94 L 54 94 L 58 78 Z" className="fill-slate-800/40 stroke-slate-700" />
            <line x1="41" y1="138" x2="43" y2="175" className="stroke-slate-700 stroke-2" />
            <line x1="59" y1="138" x2="57" y2="175" className="stroke-slate-700 stroke-2" />
          </svg>
        </div>

        {/* VISTA TRASERA */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2">Vista Trasera</span>
          <svg viewBox="0 0 100 200" className="w-full max-w-[130px] h-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            {/* Cabeza */}
            <circle cx="50" cy="20" r="10" className="fill-slate-800 stroke-slate-700" />
            {/* Cuello */}
            <rect x="47" y="29" width="6" height="6" className="fill-slate-800 stroke-slate-700" />

            {/* ESPALDA (Back / Dorsales / Trapecio) */}
            <path
              d="M 33 36 Q 50 33 67 36 L 61 74 Q 50 78 39 74 Z"
              className={getMuscleColor('Back')}
              onMouseEnter={() => setHoveredGroup('Back')}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => handleMuscleClick('Back')}
            />

            {/* HOMBROS Posterior (Shoulders Back) */}
            <path
              d="M 33 36 Q 28 44 34 46 Q 35 38 33 36 Z"
              className={getMuscleColor('Shoulders')}
              onMouseEnter={() => setHoveredGroup('Shoulders')}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => handleMuscleClick('Shoulders')}
            />
            <path
              d="M 67 36 Q 72 44 66 46 Q 65 38 67 36 Z"
              className={getMuscleColor('Shoulders')}
              onMouseEnter={() => setHoveredGroup('Shoulders')}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => handleMuscleClick('Shoulders')}
            />

            {/* TRÍCEPS (Triceps) */}
            <path
              d="M 31 46 Q 27 55 31 63 L 34 58 Q 32 49 33 46 Z"
              className={getMuscleColor('Triceps')}
              onMouseEnter={() => setHoveredGroup('Triceps')}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => handleMuscleClick('Triceps')}
            />
            <path
              d="M 69 46 Q 73 55 69 63 L 66 58 Q 68 49 67 46 Z"
              className={getMuscleColor('Triceps')}
              onMouseEnter={() => setHoveredGroup('Triceps')}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => handleMuscleClick('Triceps')}
            />

            {/* GLÚTEOS (Glutes) */}
            <path
              d="M 38 88 Q 50 92 62 88 Q 64 104 50 104 Q 36 104 38 88 Z"
              className={getMuscleColor('Glutes')}
              onMouseEnter={() => setHoveredGroup('Glutes')}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => handleMuscleClick('Glutes')}
            />

            {/* ISQUIOTIBIALES (Hamstrings) */}
            <path
              d="M 37 104 Q 42 110 42 136 L 48 134 Q 47 108 45 104 Z"
              className={getMuscleColor('Hamstrings')}
              onMouseEnter={() => setHoveredGroup('Hamstrings')}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => handleMuscleClick('Hamstrings')}
            />
            <path
              d="M 63 104 Q 58 110 58 136 L 52 134 Q 53 108 55 104 Z"
              className={getMuscleColor('Hamstrings')}
              onMouseEnter={() => setHoveredGroup('Hamstrings')}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => handleMuscleClick('Hamstrings')}
            />

            {/* GEMELOS (Calves) */}
            <path
              d="M 38 141 Q 34 154 41 168 L 44 168 Q 43 150 43 141 Z"
              className={getMuscleColor('Calves')}
              onMouseEnter={() => setHoveredGroup('Calves')}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => handleMuscleClick('Calves')}
            />
            <path
              d="M 62 141 Q 66 154 59 168 L 56 168 Q 57 150 57 141 Z"
              className={getMuscleColor('Calves')}
              onMouseEnter={() => setHoveredGroup('Calves')}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => handleMuscleClick('Calves')}
            />

            {/* Espalda baja */}
            <path d="M 39 74 L 38 88 L 62 88 L 61 74 Z" className="fill-slate-800/40 stroke-slate-700" />
          </svg>
        </div>
      </div>

      <div className="mt-2 border-t border-zinc-800 pt-3 flex flex-wrap justify-center gap-x-3 gap-y-1.5">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-lime-400 rounded-full" />
          <span className="text-[10px] text-zinc-350 font-medium">Primario</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-lime-500/30 border border-lime-500/60 rounded-full" />
          <span className="text-[10px] text-zinc-300 font-medium">Secundario</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-zinc-350 rounded-full" />
          <span className="text-[10px] text-zinc-300 font-medium">Seleccionado</span>
        </div>
      </div>

      {hoveredGroup && (
        <div className="text-center mt-2 bg-zinc-950 border border-zinc-850 py-1 rounded text-xs font-medium text-zinc-250">
          Enfoque: {muscles.find((m) => m.id === hoveredGroup)?.nameEs || hoveredGroup}
        </div>
      )}
    </div>
  );
}
