import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.join(__dirname, 'exercises.json');
const exercises = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const animPath = path.join(__dirname, 'animation_mappings.json');
const animations = JSON.parse(fs.readFileSync(animPath, 'utf8'));

const categories = {};
exercises.forEach(ex => {
  categories[ex.category] = (categories[ex.category] || 0) + 1;
});

const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DB-Gym Explorer Pro • Músculos en Español (533 Ejercicios)</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { background-color: #080d1a; color: #e2e8f0; font-family: system-ui, -apple-system, sans-serif; }
    .badge-compuesto { background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
    .badge-aislamiento { background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3); }
    .badge-unilateral { background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); }
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: #0f172a; }
    ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
  </style>
</head>
<body class="min-h-screen flex flex-col">

  <!-- Header -->
  <header class="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-50 shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <span class="text-3xl">🏋️‍♂️</span>
        <div>
          <h1 class="text-xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
            DB-Gym Visual Explorer Pro
          </h1>
          <p class="text-xs text-slate-400">533 Ejercicios • Anatomía y Etiquetas 100% en Español</p>
        </div>
      </div>

      <!-- Buscador -->
      <div class="flex-1 max-w-md relative">
        <input 
          id="searchInput"
          type="text" 
          placeholder="Buscar ejercicio, músculo en español, equipamiento..."
          class="w-full bg-slate-800/90 border border-slate-700 rounded-lg px-4 py-2 pl-10 text-sm focus:outline-none focus:border-blue-500 text-slate-200"
          oninput="filterExercises()"
        />
        <span class="absolute left-3 top-2.5 text-slate-400 text-sm">🔍</span>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
          533 ejercicios
        </span>
      </div>
    </div>
  </header>

  <!-- Filtro por Categorías -->
  <div class="bg-slate-900/40 border-b border-slate-800/80 py-3">
    <div class="max-w-7xl mx-auto px-4 flex flex-wrap gap-2 text-xs">
      <button onclick="setCategoryFilter('')" class="cat-pill active px-3 py-1 rounded-full bg-blue-600 text-white font-medium cursor-pointer transition">
        Todos (533)
      </button>
      ${Object.entries(categories).map(([cat, count]) => `
        <button onclick="setCategoryFilter('${cat}')" class="cat-pill px-3 py-1 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 cursor-pointer transition">
          ${cat} (${count})
        </button>
      `).join('')}
    </div>
  </div>

  <!-- Contenido Principal -->
  <main class="max-w-7xl mx-auto px-4 py-6 flex-1 w-full">
    <div class="flex items-center justify-between mb-4">
      <p id="resultsCount" class="text-sm text-slate-400">Mostrando 533 ejercicios</p>
      <div class="text-xs text-slate-400 flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        Etiquetas anatómicas traducidas al español técnico.
      </div>
    </div>

    <!-- Grid de Ejercicios -->
    <div id="exerciseGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"></div>
  </main>

  <!-- Modal de Detalle con Animación Ampliada -->
  <div id="modalBackdrop" class="fixed inset-0 bg-black/80 backdrop-blur-md hidden z-50 flex items-center justify-center p-4" onclick="closeModal(event)">
    <div class="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 relative shadow-2xl" onclick="event.stopPropagation()">
      <button onclick="closeModal()" class="absolute top-4 right-4 text-slate-400 hover:text-white text-xl z-20 bg-slate-800/90 rounded-full w-8 h-8 flex items-center justify-center">✕</button>
      <div id="modalContent"></div>
    </div>
  </div>

  <script>
    const allExercises = ${JSON.stringify(exercises)};
    const animMap = ${JSON.stringify(animations)};
    let activeCategory = '';

    // Diccionario de traducción completa al español de todos los grupos musculares y equipamiento
    const MUSCLE_TRANSLATIONS = {
      'Chest': 'Pecho / Pectoral',
      'Back': 'Espalda / Dorsal',
      'Lats': 'Dorsal Ancho',
      'Traps': 'Trapecio',
      'LowerBack': 'Espalda Baja / Lumbar',
      'Shoulders': 'Hombros / Deltoides',
      'Biceps': 'Bíceps',
      'Triceps': 'Tríceps',
      'Forearms': 'Antebrazos',
      'Quads': 'Cuádriceps',
      'Hamstrings': 'Isquiotibiales / Femoral',
      'Glutes': 'Glúteos',
      'Calves': 'Gemelos / Pantorrillas',
      'Abs': 'Abdomen / Core',
      'Serratus': 'Serrato Anterior',
      'HipFlexors': 'Flexores de Cadera / Psoas',
      'Adductors': 'Aductores (Cara Interna)',
      'Abductors': 'Abductores (Glúteo Medio)',
      'Cardio': 'Sistema Cardiovascular'
    };

    const EQUIPMENT_TRANSLATIONS = {
      'Barbell': 'Barra Olímpica',
      'Dumbbell': 'Mancuernas',
      'EZBar': 'Barra Z',
      'Machine': 'Máquina de Palanca',
      'Cable': 'Polea con Cable',
      'Kettlebell': 'Pesa Rusa (Kettlebell)',
      'Bodyweight': 'Peso Corporal',
      'Band': 'Banda Elástica',
      'TRX': 'TRX / Suspensión',
      'MedicineBall': 'Balón Medicinal',
      'FoamRoller': 'Rodillo de Espuma',
      'Box': 'Cajón Pliométrico',
      'Rings': 'Anillas de Gimnasia',
      'SmithMachine': 'Máquina Smith / Multipower',
      'StabilityBall': 'Balón Suizo / Fitball',
      'Rope': 'Cuerda de Batalla',
      'Sled': 'Trineo de Empuje (Prowler)',
      'Trap Bar': 'Barra Hexagonal',
      'None': 'Sin Equipamiento'
    };

    function translateMuscle(m) {
      return MUSCLE_TRANSLATIONS[m] || m;
    }

    function translateEquipment(e) {
      return EQUIPMENT_TRANSLATIONS[e] || e;
    }

    function setCategoryFilter(cat) {
      activeCategory = cat;
      document.querySelectorAll('.cat-pill').forEach(btn => {
        if ((cat === '' && btn.innerText.startsWith('Todos')) || btn.innerText.startsWith(cat)) {
          btn.className = 'cat-pill px-3 py-1 rounded-full bg-blue-600 text-white font-medium cursor-pointer transition';
        } else {
          btn.className = 'cat-pill px-3 py-1 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 cursor-pointer transition';
        }
      });
      filterExercises();
    }

    function filterExercises() {
      const q = document.getElementById('searchInput').value.toLowerCase().trim();
      const filtered = allExercises.filter(ex => {
        const matchesCat = !activeCategory || ex.category === activeCategory;
        const spanishMuscle = translateMuscle(ex.primaryMuscle).toLowerCase();
        const spanishEq = translateEquipment(ex.equipment).toLowerCase();

        const matchesText = !q || 
          ex.name.toLowerCase().includes(q) || 
          (ex.nameEn && ex.nameEn.toLowerCase().includes(q)) || 
          ex.primaryMuscle.toLowerCase().includes(q) || 
          spanishMuscle.includes(q) ||
          ex.equipment.toLowerCase().includes(q) ||
          spanishEq.includes(q);

        return matchesCat && matchesText;
      });

      document.getElementById('resultsCount').innerText = 'Mostrando ' + filtered.length + ' de ' + allExercises.length + ' ejercicios';
      renderGrid(filtered);
    }

    function renderGrid(list) {
      const grid = document.getElementById('exerciseGrid');
      if (list.length === 0) {
        grid.innerHTML = '<div class="col-span-full py-12 text-center text-slate-500">No se encontraron ejercicios con ese filtro.</div>';
        return;
      }

      grid.innerHTML = list.map((ex) => {
        const frames = animMap[ex.id] || [];
        const f0 = frames[0] || '';
        const f1 = frames[1] || f0;
        const muscleEs = translateMuscle(ex.primaryMuscle);
        const equipEs = translateEquipment(ex.equipment);

        return \`
          <div onclick="openModal('\${ex.id}')" class="bg-slate-800/80 border border-slate-700/80 hover:border-blue-500/80 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl cursor-pointer flex flex-col justify-between group">
            
            <!-- Visor con animación continua activa garantizada -->
            <div class="w-full h-48 bg-slate-950 relative overflow-hidden flex items-center justify-center border-b border-slate-800/70">
              <img 
                id="thumb-\${ex.id}"
                src="\${f0}" 
                alt="\${ex.name}" 
                loading="lazy" 
                data-f0="\${f0}"
                data-f1="\${f1}"
                data-active="0"
                class="exercise-anim-frame w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span class="absolute top-2.5 left-2.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 animate-pulse">
                ● EN MOVIMIENTO
              </span>
              <span class="absolute bottom-2.5 right-2.5 text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-900/90 text-slate-200 backdrop-blur-sm">
                ⚙️ \${equipEs}
              </span>
            </div>

            <div class="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-start justify-between gap-2 mb-2">
                  <span class="text-xs px-2 py-0.5 rounded bg-slate-700/60 text-slate-300 font-medium">\${ex.category || 'General'}</span>
                  <span class="text-xs font-semibold px-2 py-0.5 rounded \${
                    ex.difficulty === 'Principiante' ? 'bg-emerald-950 text-emerald-400' :
                    ex.difficulty === 'Intermedio' ? 'bg-amber-950 text-amber-400' : 'bg-rose-950 text-rose-400'
                  }">\${ex.difficulty}</span>
                </div>

                <h3 class="font-bold text-slate-100 text-base leading-snug mb-1 group-hover:text-blue-400 transition">\${ex.name}</h3>
                <p class="text-xs text-slate-400 italic mb-3">\${ex.nameEn || ''}</p>

                <!-- Etiquetas de Músculo en Español -->
                <div class="flex flex-wrap gap-1.5 mb-3 text-xs">
                  <span class="px-2.5 py-1 rounded-md bg-indigo-950/90 text-indigo-300 border border-indigo-700/50 font-medium flex items-center gap-1">
                    <span>🎯</span> <span>\${muscleEs}</span>
                  </span>
                  \${ex.mechanics ? \`<span class="px-2 py-1 rounded-md \${ex.mechanics === 'Compuesto' ? 'badge-compuesto' : 'badge-aislamiento'} font-medium">\${ex.mechanics}</span>\` : ''}
                  \${ex.isUnilateral ? '<span class="px-2 py-1 rounded-md badge-unilateral font-medium">Unilateral</span>' : ''}
                </div>
              </div>

              <div class="pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <span class="font-medium">\${ex.movementPattern || 'Movimiento'}</span>
                <span class="text-blue-400 font-semibold group-hover:translate-x-1 transition">Ver técnica y ficha →</span>
              </div>
            </div>
          </div>
        \`;
      }).join('');
    }

    // Motor de animación continua (alterna fases cada 1 segundo)
    setInterval(() => {
      document.querySelectorAll('.exercise-anim-frame').forEach(img => {
        const f0 = img.getAttribute('data-f0');
        const f1 = img.getAttribute('data-f1');
        if (f0 && f1 && f0 !== f1) {
          const active = img.getAttribute('data-active') || '0';
          if (active === '0') {
            img.setAttribute('data-active', '1');
            img.src = f1;
          } else {
            img.setAttribute('data-active', '0');
            img.src = f0;
          }
        }
      });
    }, 1000);

    function openModal(id) {
      const ex = allExercises.find(e => e.id === id);
      if (!ex) return;

      const frames = animMap[ex.id] || [];
      const f0 = frames[0] || '';
      const f1 = frames[1] || f0;
      const muscleEs = translateMuscle(ex.primaryMuscle);
      const equipEs = translateEquipment(ex.equipment);

      const content = document.getElementById('modalContent');
      content.innerHTML = \`
        <!-- Visor Animado en Grande en el Modal -->
        <div class="w-full h-72 bg-slate-950 rounded-xl overflow-hidden mb-4 relative flex items-center justify-center border border-slate-800">
          <img 
            id="modal-anim-img"
            src="\${f0}" 
            alt="\${ex.name}" 
            data-f0="\${f0}"
            data-f1="\${f1}"
            data-active="0"
            class="exercise-anim-frame w-full h-full object-contain p-2"
          />
          <span class="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500 text-slate-950 animate-pulse">
            ● ANIMACIÓN EN BUCLE ACTIVA (FASE 1 ⇄ FASE 2)
          </span>
        </div>

        <div class="flex items-center gap-2 mb-1">
          <span class="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800">\${ex.category || 'General'}</span>
          <span class="text-xs px-2.5 py-0.5 rounded bg-slate-800 text-slate-300">\${ex.movementPattern || ''}</span>
          <span class="text-xs px-2.5 py-0.5 rounded \${
            ex.difficulty === 'Principiante' ? 'bg-emerald-950 text-emerald-400' :
            ex.difficulty === 'Intermedio' ? 'bg-amber-950 text-amber-400' : 'bg-rose-950 text-rose-400'
          }">\${ex.difficulty}</span>
        </div>

        <h2 class="text-2xl font-bold text-slate-100 mt-2 mb-0.5">\${ex.name}</h2>
        <p class="text-sm text-slate-400 italic mb-4">\${ex.nameEn || ''}</p>

        <!-- Ficha Técnica con Músculos y Equipo en Español -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 text-xs bg-slate-800/80 p-3 rounded-lg border border-slate-700">
          <div><span class="text-slate-400 block">Músculo Principal:</span> <strong class="text-indigo-400 text-sm">\${muscleEs}</strong></div>
          <div><span class="text-slate-400 block">Equipamiento:</span> <strong class="text-slate-200">\${equipEs}</strong></div>
          <div><span class="text-slate-400 block">Mecánica:</span> <strong class="text-slate-200">\${ex.mechanics || 'N/A'}</strong></div>
          <div><span class="text-slate-400 block">Modo Registro:</span> <strong class="text-slate-200">\${ex.trackingType || 'Reps'}</strong></div>
        </div>

        <!-- Músculos Secundarios / Sinergistas en Español -->
        \${ex.secondaryMuscles && ex.secondaryMuscles.length ? \`
          <div class="mb-4">
            <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">Músculos Sinergistas (Asistentes):</span>
            <div class="flex flex-wrap gap-1.5">
              \${ex.secondaryMuscles.map(m => \`<span class="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 font-medium">\${translateMuscle(m)}</span>\`).join('')}
            </div>
          </div>
        \` : ''}

        <!-- Músculos Estabilizadores si los tiene -->
        \${ex.stabilizers && ex.stabilizers.length ? \`
          <div class="mb-4">
            <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">Músculos Estabilizadores (Isométricos):</span>
            <div class="flex flex-wrap gap-1.5">
              \${ex.stabilizers.map(m => \`<span class="text-xs px-2.5 py-1 rounded bg-slate-900/80 text-amber-300/90 border border-amber-900/50 font-medium">\${translateMuscle(m)}</span>\`).join('')}
            </div>
          </div>
        \` : ''}

        <!-- Instrucciones -->
        <div class="mb-6">
          <h4 class="text-sm font-semibold text-slate-200 mb-2 flex items-center gap-2">
            <span>📋</span> Instrucciones Paso a Paso
          </h4>
          <ol class="space-y-2 text-sm text-slate-300 list-decimal list-inside bg-slate-950/60 p-4 rounded-lg border border-slate-800">
            \${(ex.instructions || []).map(step => \`<li class="leading-relaxed pl-1">\${step}</li>\`).join('')}
          </ol>
        </div>

        <!-- Tips y Respiración -->
        <div class="grid sm:grid-cols-2 gap-3 mb-4">
          \${ex.breathingCue ? \`
            <div class="bg-blue-950/40 border border-blue-900/60 rounded-lg p-3 text-xs">
              <span class="text-blue-400 font-semibold block mb-1">🫁 Pauta de Respiración:</span>
              <p class="text-slate-300 leading-relaxed">\${ex.breathingCue}</p>
            </div>
          \` : ''}

          \${ex.tips && ex.tips.length ? \`
            <div class="bg-amber-950/40 border border-amber-900/60 rounded-lg p-3 text-xs">
              <span class="text-amber-400 font-semibold block mb-1">💡 Consejo Técnico:</span>
              <p class="text-slate-300 leading-relaxed">\${ex.tips[0]}</p>
            </div>
          \` : ''}
        </div>

        <!-- Alternativas -->
        \${ex.alternatives && ex.alternatives.length ? \`
          <div class="pt-3 border-t border-slate-800 text-xs">
            <span class="text-slate-400 block mb-1.5 font-medium">Ejercicios Alternativos:</span>
            <div class="flex flex-wrap gap-1.5">
              \${ex.alternatives.map(alt => \`<span class="px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">\${alt}</span>\`).join('')}
            </div>
          </div>
        \` : ''}
      \`;

      document.getElementById('modalBackdrop').classList.remove('hidden');
    }

    function closeModal(e) {
      document.getElementById('modalBackdrop').classList.add('hidden');
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });

    renderGrid(allExercises);
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'visor_ejercicios.html'), html, 'utf8');
console.log('✅ visor_ejercicios.html actualizado con músculos y equipamiento 100% en español.');
