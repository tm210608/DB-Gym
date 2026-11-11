import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.join(__dirname, 'exercises.json');
const exercises = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const animPath = path.join(__dirname, 'animation_mappings.json');
const animations = JSON.parse(fs.readFileSync(animPath, 'utf8'));

const routinesPath = path.join(__dirname, 'docs', 'api', 'v1', 'routines.json');
const officialRoutines = fs.existsSync(routinesPath)
  ? JSON.parse(fs.readFileSync(routinesPath, 'utf8'))
  : [];

const categories = {};
const musclesCount = {};
exercises.forEach(ex => {
  categories[ex.category] = (categories[ex.category] || 0) + 1;
  musclesCount[ex.primaryMuscle] = (musclesCount[ex.primaryMuscle] || 0) + 1;
});

const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DB-Gym Suite Pro v2.2 • Mapa Anatómico + Catálogo 533 Ejercicios + API Pública</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { background-color: #080d1a; color: #e2e8f0; font-family: system-ui, -apple-system, sans-serif; }
    .badge-compuesto { background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
    .badge-aislamiento { background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3); }
    .badge-unilateral { background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); }
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: #0f172a; }
    ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
    .muscle-zone {
      fill: #1e293b;
      stroke: #475569;
      stroke-width: 1.5;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .muscle-zone:hover {
      fill: #3b82f6;
      stroke: #93c5fd;
      filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.7));
    }
    .muscle-zone.active-zone {
      fill: #10b981;
      stroke: #6ee7b7;
      filter: drop-shadow(0 0 10px rgba(16, 185, 129, 0.85));
    }
    .body-outline {
      fill: #0f172a;
      stroke: #334155;
      stroke-width: 1.5;
    }
  </style>
</head>
<body class="min-h-screen flex flex-col">

  <!-- Header con Navegación de Pestañas -->
  <header class="border-b border-slate-800 bg-slate-900/95 backdrop-blur sticky top-0 z-50 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <span class="text-3xl">🏋️‍♂️</span>
        <div>
          <h1 class="text-xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
            DB-Gym Suite Pro v2.2
          </h1>
          <p class="text-xs text-slate-400">533 Ejercicios • Mapa Anatómico • API REST Estática</p>
        </div>
      </div>

      <!-- Selector de Modo: Catálogo vs Generador de Rutinas vs API Docs -->
      <div class="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
        <button id="tabCatalogBtn" onclick="switchTab('catalog')" class="px-3.5 py-2 rounded-lg text-sm font-bold bg-blue-600 text-white transition flex items-center gap-1.5 cursor-pointer">
          <span>📚</span> <span>Catálogo + Mapa (533)</span>
        </button>
        <button id="tabBuilderBtn" onclick="switchTab('builder')" class="px-3.5 py-2 rounded-lg text-sm font-bold text-slate-400 hover:text-white transition flex items-center gap-1.5 cursor-pointer">
          <span>⚡</span> <span>Rutinas Inteligentes</span>
        </button>
        <button id="tabApiBtn" onclick="switchTab('api')" class="px-3.5 py-2 rounded-lg text-sm font-bold text-slate-400 hover:text-white transition flex items-center gap-1.5 cursor-pointer">
          <span>📡</span> <span>API REST & SQL</span>
        </button>
      </div>

      <!-- Buscador (Visible en Catálogo) -->
      <div id="catalogSearchBox" class="flex-1 max-w-sm relative">
        <input 
          id="searchInput"
          type="text" 
          placeholder="Buscar ejercicio, músculo en español, equipo..."
          class="w-full bg-slate-800/90 border border-slate-700 rounded-lg px-4 py-2 pl-9 text-sm focus:outline-none focus:border-blue-500 text-slate-200"
          oninput="filterExercises()"
        />
        <span class="absolute left-3 top-2.5 text-slate-400 text-sm">🔍</span>
      </div>
    </div>
  </header>

  <!-- ========================================================= -->
  <!-- VISTA 1: CATÁLOGO DE EJERCICIOS + MAPA ANATÓMICO          -->
  <!-- ========================================================= -->
  <div id="catalogView" class="flex-1 flex flex-col">
    <!-- Panel del Mapa Anatómico Interactivo (Colapsable) -->
    <div class="bg-slate-900/80 border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div class="flex items-center gap-2">
            <span class="text-lg">🧍‍♂️</span>
            <h2 class="text-sm font-bold text-slate-100 uppercase tracking-wider">Mapa Anatómico Interactivo (Estilo MuscleWiki)</h2>
            <span id="activeMuscleBadge" class="hidden px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"></span>
          </div>
          <div class="flex items-center gap-2">
            <button id="clearMuscleBtn" onclick="setMuscleFilter('')" class="hidden text-xs px-3 py-1 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 font-semibold cursor-pointer transition">
              ✕ Quitar filtro muscular
            </button>
            <button onclick="toggleBodyMap()" id="toggleMapBtn" class="text-xs px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 cursor-pointer transition">
              Ocultar Mapa ▲
            </button>
          </div>
        </div>

        <div id="bodyMapContainer" class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-slate-950/70 border border-slate-800/90 rounded-2xl p-4">
          <!-- Siluetas SVG Frontal y Posterior -->
          <div class="lg:col-span-5 flex items-center justify-around gap-4 py-2">
            <!-- VISTA FRONTAL -->
            <div class="text-center">
              <span class="text-[11px] font-bold uppercase tracking-wider text-blue-400 block mb-1">Vista Frontal</span>
              <svg viewBox="0 0 200 420" class="w-36 sm:w-40 h-72 mx-auto select-none">
                <!-- Cabeza y cuello base -->
                <circle cx="100" cy="34" r="20" class="body-outline" />
                <rect x="92" y="54" width="16" height="14" class="body-outline" />
                <!-- Trapecio frontal -->
                <polygon data-muscle="Traps" onclick="setMuscleFilter('Traps')" class="muscle-zone" points="72,68 92,58 108,58 128,68 118,76 82,76">
                  <title>Trapecio</title>
                </polygon>
                <!-- Hombros (Deltoides) -->
                <path data-muscle="Shoulders" onclick="setMuscleFilter('Shoulders')" class="muscle-zone" d="M52,72 Q62,64 74,70 L72,102 Q54,98 50,86 Z" />
                <path data-muscle="Shoulders" onclick="setMuscleFilter('Shoulders')" class="muscle-zone" d="M148,72 Q138,64 126,70 L128,102 Q146,98 150,86 Z" />
                <!-- Pecho (Pectorales) -->
                <path data-muscle="Chest" onclick="setMuscleFilter('Chest')" class="muscle-zone" d="M74,72 L99,74 L99,112 L72,106 Z" />
                <path data-muscle="Chest" onclick="setMuscleFilter('Chest')" class="muscle-zone" d="M126,72 L101,74 L101,112 L128,106 Z" />
                <!-- Bíceps -->
                <rect data-muscle="Biceps" onclick="setMuscleFilter('Biceps')" class="muscle-zone" x="48" y="104" width="18" height="42" rx="8" />
                <rect data-muscle="Biceps" onclick="setMuscleFilter('Biceps')" class="muscle-zone" x="134" y="104" width="18" height="42" rx="8" />
                <!-- Antebrazos -->
                <rect data-muscle="Forearms" onclick="setMuscleFilter('Forearms')" class="muscle-zone" x="42" y="150" width="16" height="46" rx="6" />
                <rect data-muscle="Forearms" onclick="setMuscleFilter('Forearms')" class="muscle-zone" x="142" y="150" width="16" height="46" rx="6" />
                <!-- Serrato / Oblicuos -->
                <polygon data-muscle="Serratus" onclick="setMuscleFilter('Serratus')" class="muscle-zone" points="72,108 82,112 80,145 70,138" />
                <polygon data-muscle="Serratus" onclick="setMuscleFilter('Serratus')" class="muscle-zone" points="128,108 118,112 120,145 130,138" />
                <!-- Abdomen / Core -->
                <rect data-muscle="Abs" onclick="setMuscleFilter('Abs')" class="muscle-zone" x="83" y="114" width="34" height="70" rx="6" />
                <!-- Flexores de Cadera -->
                <polygon data-muscle="HipFlexors" onclick="setMuscleFilter('HipFlexors')" class="muscle-zone" points="74,186 96,188 92,212 70,204" />
                <polygon data-muscle="HipFlexors" onclick="setMuscleFilter('HipFlexors')" class="muscle-zone" points="126,186 104,188 108,212 130,204" />
                <!-- Aductores -->
                <polygon data-muscle="Adductors" onclick="setMuscleFilter('Adductors')" class="muscle-zone" points="92,210 99,210 96,268 88,260" />
                <polygon data-muscle="Adductors" onclick="setMuscleFilter('Adductors')" class="muscle-zone" points="108,210 101,210 104,268 112,260" />
                <!-- Cuádriceps -->
                <path data-muscle="Quads" onclick="setMuscleFilter('Quads')" class="muscle-zone" d="M68,206 L90,214 L88,295 L68,295 Z" />
                <path data-muscle="Quads" onclick="setMuscleFilter('Quads')" class="muscle-zone" d="M132,206 L110,214 L112,295 L132,295 Z" />
                <!-- Gemelos / Tibial Frontal -->
                <rect data-muscle="Calves" onclick="setMuscleFilter('Calves')" class="muscle-zone" x="70" y="305" width="18" height="75" rx="7" />
                <rect data-muscle="Calves" onclick="setMuscleFilter('Calves')" class="muscle-zone" x="112" y="305" width="18" height="75" rx="7" />
              </svg>
            </div>

            <!-- VISTA POSTERIOR -->
            <div class="text-center">
              <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">Vista Posterior</span>
              <svg viewBox="0 0 200 420" class="w-36 sm:w-40 h-72 mx-auto select-none">
                <!-- Cabeza -->
                <circle cx="100" cy="34" r="20" class="body-outline" />
                <!-- Trapecio Superior y Medio -->
                <polygon data-muscle="Traps" onclick="setMuscleFilter('Traps')" class="muscle-zone" points="72,64 100,54 128,64 114,102 100,112 86,102" />
                <!-- Hombro Posterior -->
                <path data-muscle="Shoulders" onclick="setMuscleFilter('Shoulders')" class="muscle-zone" d="M52,72 L72,68 L72,98 L50,90 Z" />
                <path data-muscle="Shoulders" onclick="setMuscleFilter('Shoulders')" class="muscle-zone" d="M148,72 L128,68 L128,98 L150,90 Z" />
                <!-- Dorsal Ancho (Lats) -->
                <polygon data-muscle="Lats" onclick="setMuscleFilter('Lats')" class="muscle-zone" points="72,98 88,104 92,152 72,142" />
                <polygon data-muscle="Lats" onclick="setMuscleFilter('Lats')" class="muscle-zone" points="128,98 112,104 108,152 128,142" />
                <!-- Espalda Media (Back) -->
                <rect data-muscle="Back" onclick="setMuscleFilter('Back')" class="muscle-zone" x="88" y="102" width="24" height="44" rx="4" />
                <!-- Tríceps -->
                <rect data-muscle="Triceps" onclick="setMuscleFilter('Triceps')" class="muscle-zone" x="48" y="102" width="18" height="44" rx="8" />
                <rect data-muscle="Triceps" onclick="setMuscleFilter('Triceps')" class="muscle-zone" x="134" y="102" width="18" height="44" rx="8" />
                <!-- Antebrazos -->
                <rect data-muscle="Forearms" onclick="setMuscleFilter('Forearms')" class="muscle-zone" x="42" y="150" width="16" height="46" rx="6" />
                <rect data-muscle="Forearms" onclick="setMuscleFilter('Forearms')" class="muscle-zone" x="142" y="150" width="16" height="46" rx="6" />
                <!-- Lumbar (LowerBack) -->
                <rect data-muscle="LowerBack" onclick="setMuscleFilter('LowerBack')" class="muscle-zone" x="82" y="148" width="36" height="34" rx="5" />
                <!-- Abductores / Glúteo Medio -->
                <polygon data-muscle="Abductors" onclick="setMuscleFilter('Abductors')" class="muscle-zone" points="68,184 78,184 74,212 64,204" />
                <polygon data-muscle="Abductors" onclick="setMuscleFilter('Abductors')" class="muscle-zone" points="132,184 122,184 126,212 136,204" />
                <!-- Glúteos -->
                <rect data-muscle="Glutes" onclick="setMuscleFilter('Glutes')" class="muscle-zone" x="74" y="184" width="25" height="38" rx="10" />
                <rect data-muscle="Glutes" onclick="setMuscleFilter('Glutes')" class="muscle-zone" x="101" y="184" width="25" height="38" rx="10" />
                <!-- Isquiotibiales (Hamstrings) -->
                <rect data-muscle="Hamstrings" onclick="setMuscleFilter('Hamstrings')" class="muscle-zone" x="70" y="226" width="22" height="68" rx="8" />
                <rect data-muscle="Hamstrings" onclick="setMuscleFilter('Hamstrings')" class="muscle-zone" x="108" y="226" width="22" height="68" rx="8" />
                <!-- Gemelos (Calves) -->
                <rect data-muscle="Calves" onclick="setMuscleFilter('Calves')" class="muscle-zone" x="70" y="302" width="20" height="78" rx="8" />
                <rect data-muscle="Calves" onclick="setMuscleFilter('Calves')" class="muscle-zone" x="110" y="302" width="20" height="78" rx="8" />
              </svg>
            </div>
          </div>

          <!-- Botonera Rápida de los 19 Grupos Musculares en Español -->
          <div class="lg:col-span-7">
            <p class="text-xs text-slate-400 mb-2.5">
              Haz clic sobre cualquier zona muscular de la figura o selecciona un grupo muscular abajo para filtrar las animaciones:
            </p>
            <div id="muscleButtonsGrid" class="grid grid-cols-2 sm:grid-cols-3 gap-2"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Filtro por Categorías -->
    <div class="bg-slate-900/40 border-b border-slate-800/80 py-3">
      <div class="max-w-7xl mx-auto px-4 flex flex-wrap gap-2 text-xs">
        <button onclick="setCategoryFilter('')" class="cat-pill active px-3 py-1 rounded-full bg-blue-600 text-white font-medium cursor-pointer transition">
          Todas las Categorías (533)
        </button>
        ${Object.entries(categories).map(([cat, count]) => `
          <button onclick="setCategoryFilter('${cat}')" class="cat-pill px-3 py-1 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 cursor-pointer transition">
            ${cat} (${count})
          </button>
        `).join('')}
      </div>
    </div>

    <main class="max-w-7xl mx-auto px-4 py-6 flex-1 w-full">
      <div class="flex items-center justify-between mb-4">
        <p id="resultsCount" class="text-sm text-slate-400">Mostrando 533 ejercicios</p>
        <div class="text-xs text-slate-400 flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          Pulsa en cualquier tarjeta para ver instrucciones, errores comunes y sustitutos.
        </div>
      </div>

      <div id="exerciseGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"></div>
    </main>
  </div>

  <!-- ========================================================= -->
  <!-- VISTA 2: GENERADOR INTELIGENTE DE RUTINAS + PLANTILLAS    -->
  <!-- ========================================================= -->
  <div id="builderView" class="hidden flex-1 max-w-7xl mx-auto px-4 py-6 w-full">
    <!-- Selector Rápido de Plantillas Oficiales (/api/v1/routines.json) -->
    <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 mb-6">
      <div class="flex items-center justify-between mb-3">
        <div>
          <h3 class="text-sm font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
            <span>🏆</span> Plantillas Oficiales Pre-diseñadas (/api/v1/routines.json)
          </h3>
          <p class="text-xs text-slate-400">Carga con 1 clic cualquiera de las 8 rutinas oficiales de la API o genera una personalizada abajo.</p>
        </div>
      </div>
      <div id="officialRoutinesBar" class="flex flex-wrap gap-2"></div>
    </div>

    <div class="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 mb-8 shadow-xl">
      <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h2 class="text-2xl font-bold text-white flex items-center gap-2">
            <span>⚡</span> Generador Inteligente de Rutinas SDD
          </h2>
          <p class="text-sm text-slate-400">Crea sesiones completas en 3 bloques (Calentamiento → Bloque Principal → Movilidad/Vuelta a la Calma) con botón "Máquina Ocupada".</p>
        </div>
        <button onclick="generateSmartRoutine()" class="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-bold shadow-lg shadow-blue-900/30 transition transform hover:scale-105 cursor-pointer flex items-center gap-2">
          <span>🎲</span> <span>Generar Nueva Rutina</span>
        </button>
      </div>

      <!-- Parámetros del Generador -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label class="block text-xs font-semibold text-slate-400 uppercase mb-1.5">1. Enfoque / Split del Día</label>
          <select id="genSplit" onchange="generateSmartRoutine()" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500">
            <option value="push">Empuje (Pecho, Hombros y Tríceps)</option>
            <option value="pull">Tirón (Espalda, Dorsales y Bíceps)</option>
            <option value="legs">Pierna Completa (Cuádriceps, Glúteo, Femoral)</option>
            <option value="upper">Tren Superior Completo (Torso)</option>
            <option value="fullbody">Cuerpo Completo (Full Body Funcional)</option>
            <option value="core_mobility">Core, Postura y Movilidad Articular</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-400 uppercase mb-1.5">2. Objetivo Principal</label>
          <select id="genGoal" onchange="generateSmartRoutine()" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500">
            <option value="hypertrophy">Hipertrofia / Ganar Masa Muscular (8-12 reps)</option>
            <option value="strength">Fuerza Máxima y Potencia (4-6 reps)</option>
            <option value="endurance">Pérdida de Grasa y Tono Metabólico (12-15 reps)</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-400 uppercase mb-1.5">3. Equipamiento Disponible</label>
          <select id="genEquip" onchange="generateSmartRoutine()" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500">
            <option value="all">Gimnasio Completo (Todo el equipo)</option>
            <option value="dumbbells_barbell">Solo Peso Libre (Barras, Mancuernas, Kettlebell)</option>
            <option value="dumbbells_only">Entrenamiento en Casa (Mancuernas y Bandas)</option>
            <option value="bodyweight">Calistenia / Sin Material (Peso Corporal y TRX)</option>
          </select>
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-400 uppercase mb-1.5">4. Duración de la Sesión</label>
          <select id="genDuration" onchange="generateSmartRoutine()" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500">
            <option value="4">Sesión Express (45 min • 4 ejercicios principales)</option>
            <option value="6" selected>Sesión Estándar (60 min • 6 ejercicios principales)</option>
            <option value="8">Sesión Volumen Alto (75 min • 8 ejercicios principales)</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Contenedor de la Rutina Generada -->
    <div id="routineOutput" class="space-y-8"></div>
  </div>

  <!-- ========================================================= -->
  <!-- VISTA 3: EXPLORADOR DE ENDPOINTS API REST v1 & SQL        -->
  <!-- ========================================================= -->
  <div id="apiView" class="hidden flex-1 max-w-7xl mx-auto px-4 py-6 w-full space-y-6">
    <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 class="text-2xl font-bold text-white mb-2 flex items-center gap-2">
        <span>📡</span> API REST Estática v2.2 (Zero-Backend CDN)
      </h2>
      <p class="text-sm text-slate-400 mb-6">
        Todos los endpoints son gratuitos, sin API Key y servidos globalmente vía <strong>jsDelivr CDN</strong> y <strong>GitHub Pages</strong>.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
          <span class="text-xs font-bold text-emerald-400 uppercase">Índice Maestro API v1</span>
          <code class="block text-xs text-slate-200 mt-1 break-all bg-slate-900 p-2.5 rounded border border-slate-800">
            https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/docs/api/v1/index.json
          </code>
        </div>
        <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
          <span class="text-xs font-bold text-blue-400 uppercase">Catálogo Completo (533 Ejercicios)</span>
          <code class="block text-xs text-slate-200 mt-1 break-all bg-slate-900 p-2.5 rounded border border-slate-800">
            https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/docs/api/v1/exercises.json
          </code>
        </div>
        <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
          <span class="text-xs font-bold text-purple-400 uppercase">Pack de 8 Rutinas Oficiales</span>
          <code class="block text-xs text-slate-200 mt-1 break-all bg-slate-900 p-2.5 rounded border border-slate-800">
            https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/docs/api/v1/routines.json
          </code>
        </div>
        <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
          <span class="text-xs font-bold text-amber-400 uppercase">Dumps SQL (SQLite Room & PostgreSQL)</span>
          <code class="block text-xs text-slate-200 mt-1 break-all bg-slate-900 p-2.5 rounded border border-slate-800">
            https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/sql/exercises-sqlite.sql
          </code>
        </div>
      </div>

      <h3 class="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3">Endpoints Segmentados por Músculo (/api/v1/muscles/{slug}.json)</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
        ${Object.entries(musclesCount).map(([m, c]) => {
          const slug = m.toLowerCase();
          return `
            <a href="https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/docs/api/v1/muscles/${slug}.json" target="_blank" class="p-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 flex items-center justify-between transition">
              <span class="font-semibold text-blue-400">/api/v1/muscles/${slug}.json</span>
              <span class="px-2 py-0.5 rounded bg-slate-800 text-slate-300">${c} ej.</span>
            </a>
          `;
        }).join('')}
      </div>
    </div>
  </div>

  <!-- Modal de Detalle con Animación Ampliada y Sustitución en Vivo -->
  <div id="modalBackdrop" class="fixed inset-0 bg-black/80 backdrop-blur-md hidden z-50 flex items-center justify-center p-4" onclick="closeModal(event)">
    <div class="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 relative shadow-2xl" onclick="event.stopPropagation()">
      <button onclick="closeModal()" class="absolute top-4 right-4 text-slate-400 hover:text-white text-xl z-20 bg-slate-800/90 rounded-full w-8 h-8 flex items-center justify-center">✕</button>
      <div id="modalContent"></div>
    </div>
  </div>

  <script>
    const allExercises = ${JSON.stringify(exercises)};
    const animMap = ${JSON.stringify(animations)};
    const officialRoutines = ${JSON.stringify(officialRoutines)};
    const musclesCount = ${JSON.stringify(musclesCount)};
    let activeCategory = '';
    let activeMuscle = '';
    let currentRoutine = { warmup: [], main: [], cooldown: [] };

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

    function translateMuscle(m) { return MUSCLE_TRANSLATIONS[m] || m; }
    function translateEquipment(e) { return EQUIPMENT_TRANSLATIONS[e] || e; }

    function toggleBodyMap() {
      const box = document.getElementById('bodyMapContainer');
      const btn = document.getElementById('toggleMapBtn');
      if (box.classList.contains('hidden')) {
        box.classList.remove('hidden');
        btn.innerText = 'Ocultar Mapa ▲';
      } else {
        box.classList.add('hidden');
        btn.innerText = 'Mostrar Mapa ▼';
      }
    }

    function renderMuscleButtons() {
      const container = document.getElementById('muscleButtonsGrid');
      container.innerHTML = Object.entries(MUSCLE_TRANSLATIONS).map(([key, label]) => {
        const count = musclesCount[key] || 0;
        const isActive = activeMuscle === key;
        return \`
          <button 
            onclick="setMuscleFilter('\${isActive ? '' : key}')"
            class="px-3 py-2 rounded-xl border text-left transition flex items-center justify-between cursor-pointer \${
              isActive
                ? 'bg-emerald-600/25 border-emerald-400 text-emerald-200 shadow-lg shadow-emerald-950/50'
                : 'bg-slate-900/90 border-slate-800 hover:border-blue-500/60 text-slate-300'
            }"
          >
            <span class="text-xs font-semibold truncate pr-1">\${label}</span>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-bold">\${count}</span>
          </button>
        \`;
      }).join('');

      // Actualizar iluminación en el SVG
      document.querySelectorAll('.muscle-zone').forEach(el => {
        if (el.getAttribute('data-muscle') === activeMuscle) {
          el.classList.add('active-zone');
        } else {
          el.classList.remove('active-zone');
        }
      });

      const badge = document.getElementById('activeMuscleBadge');
      const clearBtn = document.getElementById('clearMuscleBtn');
      if (activeMuscle) {
        badge.innerText = '🎯 ' + translateMuscle(activeMuscle);
        badge.classList.remove('hidden');
        clearBtn.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
        clearBtn.classList.add('hidden');
      }
    }

    function setMuscleFilter(muscle) {
      activeMuscle = muscle === activeMuscle ? '' : muscle;
      renderMuscleButtons();
      filterExercises();
    }

    function switchTab(tab) {
      const catView = document.getElementById('catalogView');
      const bldView = document.getElementById('builderView');
      const apiView = document.getElementById('apiView');
      const searchBox = document.getElementById('catalogSearchBox');
      const btnCat = document.getElementById('tabCatalogBtn');
      const btnBld = document.getElementById('tabBuilderBtn');
      const btnApi = document.getElementById('tabApiBtn');

      const inactiveClass = 'px-3.5 py-2 rounded-lg text-sm font-bold text-slate-400 hover:text-white transition flex items-center gap-1.5 cursor-pointer';
      btnCat.className = inactiveClass;
      btnBld.className = inactiveClass;
      btnApi.className = inactiveClass;

      catView.classList.add('hidden');
      bldView.classList.add('hidden');
      apiView.classList.add('hidden');
      searchBox.classList.add('hidden');

      if (tab === 'catalog') {
        catView.classList.remove('hidden');
        searchBox.classList.remove('hidden');
        btnCat.className = 'px-3.5 py-2 rounded-lg text-sm font-bold bg-blue-600 text-white transition flex items-center gap-1.5 cursor-pointer';
      } else if (tab === 'builder') {
        bldView.classList.remove('hidden');
        btnBld.className = 'px-3.5 py-2 rounded-lg text-sm font-bold bg-emerald-600 text-white transition flex items-center gap-1.5 cursor-pointer';
        if (currentRoutine.main.length === 0) {
          generateSmartRoutine();
        }
      } else {
        apiView.classList.remove('hidden');
        btnApi.className = 'px-3.5 py-2 rounded-lg text-sm font-bold bg-indigo-600 text-white transition flex items-center gap-1.5 cursor-pointer';
      }
    }

    function setCategoryFilter(cat) {
      activeCategory = cat;
      document.querySelectorAll('.cat-pill').forEach(btn => {
        if ((cat === '' && btn.innerText.startsWith('Todas')) || btn.innerText.startsWith(cat)) {
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
        const matchesMuscle = !activeMuscle || ex.primaryMuscle === activeMuscle;
        const spanishMuscle = translateMuscle(ex.primaryMuscle).toLowerCase();
        const spanishEq = translateEquipment(ex.equipment).toLowerCase();

        const matchesText = !q || 
          ex.name.toLowerCase().includes(q) || 
          (ex.nameEn && ex.nameEn.toLowerCase().includes(q)) || 
          ex.primaryMuscle.toLowerCase().includes(q) || 
          spanishMuscle.includes(q) ||
          ex.equipment.toLowerCase().includes(q) ||
          spanishEq.includes(q);

        return matchesCat && matchesMuscle && matchesText;
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
        const frames = animMap[ex.id] || ex.images || [];
        const f0 = frames[0] || '';
        const f1 = frames[1] || f0;
        const muscleEs = translateMuscle(ex.primaryMuscle);
        const equipEs = translateEquipment(ex.equipment);

        return \`
          <div onclick="openModal('\${ex.id}')" class="bg-slate-800/80 border border-slate-700/80 hover:border-blue-500/80 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl cursor-pointer flex flex-col justify-between group">
            
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

                <div class="flex flex-wrap gap-1.5 mb-3 text-xs">
                  <span class="px-2.5 py-1 rounded-md bg-indigo-950/90 text-indigo-300 border border-indigo-700/50 font-medium flex items-center gap-1">
                    <span>🎯</span> <span>\${muscleEs}</span>
                  </span>
                  \${ex.mechanics ? \`<span class="px-2 py-1 rounded-md \${ex.mechanics === 'Compuesto' ? 'badge-compuesto' : 'badge-aislamiento'} font-medium">\${ex.mechanics}</span>\` : ''}
                  \${ex.unilateral ? '<span class="px-2 py-1 rounded-md badge-unilateral font-medium">Unilateral</span>' : ''}
                </div>
              </div>

              <div class="pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <span class="font-medium">\${(ex.substitutes && ex.substitutes.length) ? ('🔄 ' + ex.substitutes.length + ' sustitutos listos') : (ex.movementPattern || 'Movimiento')}</span>
                <span class="text-blue-400 font-semibold group-hover:translate-x-1 transition">Ver técnica →</span>
              </div>
            </div>
          </div>
        \`;
      }).join('');
    }

    // =========================================================================
    // MOTOR DEL GENERADOR DE RUTINAS, PLANTILLAS OFICIALES Y "MÁQUINA OCUPADA"
    // =========================================================================
    function renderOfficialRoutinesBar() {
      const bar = document.getElementById('officialRoutinesBar');
      if (!bar || !officialRoutines.length) return;
      bar.innerHTML = officialRoutines.map(r => \`
        <button 
          onclick="loadOfficialRoutine('\${r.id}')"
          class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-indigo-600/30 border border-slate-700 hover:border-indigo-400 text-xs font-semibold text-slate-200 transition cursor-pointer flex items-center gap-1.5"
        >
          <span>📋</span> <span>\${r.name}</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-900 text-indigo-300">\${r.durationMinutes} min</span>
        </button>
      \`).join('');
    }

    function loadOfficialRoutine(routineId) {
      const tpl = officialRoutines.find(r => r.id === routineId);
      if (!tpl) return;
      const mapBlock = (items) => (items || [])
        .map(item => allExercises.find(e => e.id === item.exerciseId))
        .filter(Boolean);

      currentRoutine = {
        title: tpl.name,
        warmup: mapBlock(tpl.blocks.warmup),
        main: mapBlock(tpl.blocks.main),
        cooldown: mapBlock(tpl.blocks.cooldown),
        goal: tpl.goal === 'Fuerza' ? 'strength' : (tpl.goal === 'Cardio' ? 'endurance' : 'hypertrophy')
      };
      renderRoutine();
    }

    function pickRandom(arr, count) {
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    }

    function generateSmartRoutine() {
      const split = document.getElementById('genSplit').value;
      const goal = document.getElementById('genGoal').value;
      const equip = document.getElementById('genEquip').value;
      const mainCount = parseInt(document.getElementById('genDuration').value, 10);

      const splitMuscles = {
        'push': ['Chest', 'Shoulders', 'Triceps'],
        'pull': ['Back', 'Lats', 'Traps', 'Biceps', 'Forearms'],
        'legs': ['Quads', 'Hamstrings', 'Glutes', 'Calves', 'Adductors', 'Abductors'],
        'upper': ['Chest', 'Back', 'Lats', 'Shoulders', 'Biceps', 'Triceps'],
        'fullbody': ['Chest', 'Back', 'Lats', 'Quads', 'Glutes', 'Hamstrings', 'Shoulders', 'Abs'],
        'core_mobility': ['Abs', 'LowerBack', 'HipFlexors', 'Glutes', 'Shoulders']
      }[split];

      const allowedEquip = {
        'all': null,
        'dumbbells_barbell': ['Barbell', 'Dumbbell', 'EZBar', 'Kettlebell', 'Bodyweight', 'Trap Bar'],
        'dumbbells_only': ['Dumbbell', 'Band', 'Bodyweight', 'Kettlebell'],
        'bodyweight': ['Bodyweight', 'TRX', 'Rings', 'Band', 'None']
      }[equip];

      const filterByEquip = (list) => {
        if (!allowedEquip) return list;
        return list.filter(e => allowedEquip.includes(e.equipment));
      };

      let warmupPool = allExercises.filter(e => e.category === 'Calentamiento' || e.category === 'Movilidad');
      warmupPool = warmupPool.filter(e => splitMuscles.includes(e.primaryMuscle) || e.primaryMuscle === 'Cardio');
      if (warmupPool.length < 2) warmupPool = allExercises.filter(e => e.category === 'Calentamiento');

      let mainPool = filterByEquip(allExercises.filter(e => 
        splitMuscles.includes(e.primaryMuscle) &&
        !['Calentamiento', 'Estiramiento', 'FoamRolling', 'Movilidad'].includes(e.category)
      ));
      if (mainPool.length < mainCount) {
        mainPool = allExercises.filter(e => splitMuscles.includes(e.primaryMuscle));
      }

      const compounds = mainPool.filter(e => e.mechanics === 'Compuesto');
      const isolations = mainPool.filter(e => e.mechanics !== 'Compuesto');
      const numCompounds = Math.ceil(mainCount * 0.65);
      const numIsolations = mainCount - numCompounds;

      const selectedMain = [
        ...pickRandom(compounds, numCompounds),
        ...pickRandom(isolations, numIsolations)
      ].slice(0, mainCount);

      let cooldownPool = allExercises.filter(e => ['Estiramiento', 'Movilidad', 'FoamRolling', 'Rehabilitación'].includes(e.category));
      cooldownPool = cooldownPool.filter(e => splitMuscles.includes(e.primaryMuscle) || e.primaryMuscle === 'LowerBack');

      currentRoutine = {
        title: 'Rutina Personalizada SDD',
        warmup: pickRandom(warmupPool, 2),
        main: selectedMain,
        cooldown: pickRandom(cooldownPool, 2),
        goal: goal
      };

      renderRoutine();
    }

    function swapRoutineExercise(blockKey, index) {
      const currentEx = currentRoutine[blockKey][index];
      if (!currentEx) return;

      const usedIds = new Set([
        ...currentRoutine.warmup.map(e => e.id),
        ...currentRoutine.main.map(e => e.id),
        ...currentRoutine.cooldown.map(e => e.id)
      ]);

      // 1. Priorizar sustitutos pre-calculados de la API v2.2 (substitutes / variations)
      const subIds = [
        ...((currentEx.substitutes || []).map(s => s.id)),
        ...(currentEx.variations || []),
        ...(currentEx.alternatives || [])
      ];
      let candidates = subIds
        .map(id => allExercises.find(e => e.id === id))
        .filter(e => e && !usedIds.has(e.id));

      // 2. Si no quedan libres, buscar mismo músculo primario y patrón biomecánico
      if (candidates.length === 0) {
        candidates = allExercises.filter(e => 
          e.primaryMuscle === currentEx.primaryMuscle &&
          e.movementPattern === currentEx.movementPattern &&
          !usedIds.has(e.id)
        );
      }

      if (candidates.length === 0) {
        candidates = allExercises.filter(e => 
          e.primaryMuscle === currentEx.primaryMuscle && !usedIds.has(e.id)
        );
      }

      if (candidates.length > 0) {
        const replacement = candidates[0];
        currentRoutine[blockKey][index] = replacement;
        renderRoutine();
      }
    }

    function renderRoutine() {
      const container = document.getElementById('routineOutput');
      const goalPrescription = {
        'hypertrophy': { sets: '4 series', reps: '8 - 12 reps', rest: '90 seg descanso', rpe: 'RIR 1-2' },
        'strength': { sets: '5 series', reps: '4 - 6 reps', rest: '180 seg descanso', rpe: 'RPE 8.5' },
        'endurance': { sets: '3 series', reps: '12 - 15 reps', rest: '45 seg descanso', rpe: 'Continuo' }
      }[currentRoutine.goal || 'hypertrophy'];

      const renderBlock = (title, subtitle, badgeColor, blockKey, items, prescriptionText) => \`
        <div class="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
          <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
            <div>
              <h3 class="text-lg font-bold text-white">\${title}</h3>
              <p class="text-xs text-slate-400">\${subtitle}</p>
            </div>
            <span class="text-xs font-bold px-3 py-1 rounded-full \${badgeColor}">\${items.length} ejercicios</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            \${items.map((ex, idx) => {
              const frames = animMap[ex.id] || ex.images || [];
              const f0 = frames[0] || '';
              const f1 = frames[1] || f0;
              const muscleEs = translateMuscle(ex.primaryMuscle);
              const equipEs = translateEquipment(ex.equipment);

              return \`
                <div class="bg-slate-800/90 border border-slate-700/80 rounded-xl overflow-hidden flex flex-col sm:flex-row">
                  <div onclick="openModal('\${ex.id}')" class="sm:w-40 h-40 sm:h-auto bg-slate-950 relative flex-shrink-0 cursor-pointer overflow-hidden">
                    <img 
                      src="\${f0}" 
                      data-f0="\${f0}" 
                      data-f1="\${f1}" 
                      data-active="0" 
                      class="exercise-anim-frame w-full h-full object-cover hover:scale-105 transition"
                    />
                    <span class="absolute top-2 left-2 text-[9px] font-bold px-2 py-0.5 rounded bg-emerald-500 text-slate-950">
                      #\${idx + 1}
                    </span>
                  </div>

                  <div class="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2 mb-1">
                        <span class="text-[11px] font-semibold text-indigo-400">🎯 \${muscleEs}</span>
                        <span class="text-[11px] text-slate-400">⚙️ \${equipEs}</span>
                      </div>

                      <h4 onclick="openModal('\${ex.id}')" class="font-bold text-slate-100 text-base hover:text-blue-400 cursor-pointer leading-snug mb-1">
                        \${ex.name}
                      </h4>

                      <div class="flex flex-wrap gap-1.5 my-2 text-xs">
                        <span class="px-2 py-0.5 rounded bg-slate-900 text-emerald-400 font-semibold border border-emerald-900/60">
                          \${prescriptionText}
                        </span>
                        \${ex.mechanics ? \`<span class="px-2 py-0.5 rounded bg-slate-700 text-slate-300">\${ex.mechanics}</span>\` : ''}
                      </div>
                    </div>

                    <div class="pt-2 mt-2 border-t border-slate-700/60 flex items-center justify-between gap-2">
                      <button 
                        onclick="swapRoutineExercise('\${blockKey}', \${idx})"
                        class="px-3 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer"
                        title="Sustituir por alternativa biomecánica si la máquina está ocupada"
                      >
                        <span>🔄</span> <span>Máquina Ocupada / Sustituir</span>
                      </button>

                      <button onclick="openModal('\${ex.id}')" class="text-xs text-blue-400 hover:underline font-medium cursor-pointer">
                        Técnica →
                      </button>
                    </div>
                  </div>
                </div>
              \`;
            }).join('')}
          </div>
        </div>
      \`;

      container.innerHTML = \`
        \${renderBlock('🔥 Bloque 1: Calentamiento y Activación Dinámica', 'Preparación articular y subida de pulsaciones sin fatiga', 'bg-amber-950 text-amber-400 border border-amber-800', 'warmup', currentRoutine.warmup, '2 series × 45 seg / 12 reps')}
        \${renderBlock('💪 Bloque 2: Núcleo Principal — ' + (currentRoutine.title || 'Entrenamiento'), 'Ordenado biomecánicamente de multiarticulares pesados a analíticos', 'bg-blue-950 text-blue-400 border border-blue-800', 'main', currentRoutine.main, \`\${goalPrescription.sets} × \${goalPrescription.reps} (\${goalPrescription.rest})\`)}
        \${renderBlock('🧘 Bloque 3: Vuelta a la Calma y Descompresión', 'Liberación miofascial y movilidad post-entreno', 'bg-emerald-950 text-emerald-400 border border-emerald-800', 'cooldown', currentRoutine.cooldown, '2 series × 45-60 seg suaves')}
      \`;
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

      const frames = animMap[ex.id] || ex.images || [];
      const f0 = frames[0] || '';
      const f1 = frames[1] || f0;
      const muscleEs = translateMuscle(ex.primaryMuscle);
      const equipEs = translateEquipment(ex.equipment);

      // Usar sustitutos pre-calculados en la API v2.2 o buscar equivalentes
      const subIds = [
        ...((ex.substitutes || []).map(s => s.id)),
        ...(ex.variations || []),
        ...(ex.alternatives || [])
      ];
      const uniqueSubIds = [...new Set(subIds)].filter(sid => sid !== ex.id);
      const altObjects = uniqueSubIds
        .map(altId => allExercises.find(e => e.id === altId))
        .filter(Boolean)
        .slice(0, 4);

      const equivalentObjects = altObjects.length > 0 ? altObjects : allExercises.filter(e => 
        e.id !== ex.id && e.primaryMuscle === ex.primaryMuscle && e.movementPattern === ex.movementPattern
      ).slice(0, 4);

      const content = document.getElementById('modalContent');
      content.innerHTML = \`
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

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 text-xs bg-slate-800/80 p-3 rounded-lg border border-slate-700">
          <div><span class="text-slate-400 block">Músculo Principal:</span> <strong class="text-indigo-400 text-sm">\${muscleEs}</strong></div>
          <div><span class="text-slate-400 block">Equipamiento:</span> <strong class="text-slate-200">\${equipEs}</strong></div>
          <div><span class="text-slate-400 block">Mecánica:</span> <strong class="text-slate-200">\${ex.mechanics || 'N/A'}</strong></div>
          <div><span class="text-slate-400 block">Modo Registro:</span> <strong class="text-slate-200">\${ex.trackingType || 'Reps'}</strong></div>
        </div>

        \${ex.secondaryMuscles && ex.secondaryMuscles.length ? \`
          <div class="mb-4">
            <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">Músculos Sinergistas (Asistentes):</span>
            <div class="flex flex-wrap gap-1.5">
              \${ex.secondaryMuscles.map(m => \`<span class="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700 font-medium">\${translateMuscle(m)}</span>\`).join('')}
            </div>
          </div>
        \` : ''}

        <!-- Instrucciones -->
        <div class="mb-5">
          <h4 class="text-sm font-semibold text-slate-200 mb-2 flex items-center gap-2">
            <span>📋</span> Instrucciones Paso a Paso
          </h4>
          <ol class="space-y-2 text-sm text-slate-300 list-decimal list-inside bg-slate-950/60 p-4 rounded-lg border border-slate-800">
            \${(ex.instructions || []).map(step => \`<li class="leading-relaxed pl-1">\${step}</li>\`).join('')}
          </ol>
        </div>

        <!-- Errores Comunes (commonMistakes) -->
        \${ex.commonMistakes && ex.commonMistakes.length ? \`
          <div class="mb-5 bg-rose-950/30 border border-rose-900/60 rounded-lg p-3.5 text-xs">
            <span class="text-rose-400 font-bold block mb-1.5">⚠️ Errores Comunes a Evitar:</span>
            <ul class="list-disc list-inside space-y-1 text-slate-300">
              \${ex.commonMistakes.map(m => \`<li>\${m}</li>\`).join('')}
            </ul>
          </div>
        \` : ''}

        <!-- Sustitución interactiva "Máquina Ocupada" dentro del Modal -->
        \${equivalentObjects.length ? \`
          <div class="pt-4 border-t border-slate-800">
            <span class="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
              <span>🔄</span> ¿Máquina ocupada o sin este material? Pulsa para cambiar a un sustituto directo:
            </span>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              \${equivalentObjects.map(alt => \`
                <button onclick="openModal('\${alt.id}')" class="text-left p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-500/50 transition flex items-center justify-between group cursor-pointer">
                  <div>
                    <div class="text-xs font-bold text-slate-200 group-hover:text-amber-300">\${alt.name}</div>
                    <div class="text-[10px] text-slate-400">⚙️ \${translateEquipment(alt.equipment)}</div>
                  </div>
                  <span class="text-amber-400 text-xs font-bold">Cambiar →</span>
                </button>
              \`).join('')}
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

    renderMuscleButtons();
    renderOfficialRoutinesBar();
    renderGrid(allExercises);
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'visor_ejercicios.html'), html, 'utf8');
fs.writeFileSync(path.join(__dirname, 'docs', 'index.html'), html, 'utf8');
console.log('✅ Visor y docs/index.html actualizados con Mapa Anatómico Interactivo, Plantillas Oficiales y Explorador API.');
