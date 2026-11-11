import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, '..');
const exercisesPath = path.join(rootDir, 'exercises.json');
const animPath = path.join(rootDir, 'animation_mappings.json');

const exercises = JSON.parse(fs.readFileSync(exercisesPath, 'utf8'));
const animMap = JSON.parse(fs.readFileSync(animPath, 'utf8'));

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

function toSlug(str) {
  return String(str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Paso 1: Enriquecer con traducciones e imágenes
const baseEnriched = exercises.map(ex => {
  const images = animMap[ex.id] || ex.images || [];
  return {
    ...ex,
    primaryMuscleEs: MUSCLE_TRANSLATIONS[ex.primaryMuscle] || ex.primaryMuscle,
    secondaryMusclesEs: (ex.secondaryMuscles || []).map(m => MUSCLE_TRANSLATIONS[m] || m),
    stabilizersEs: (ex.stabilizers || []).map(m => MUSCLE_TRANSLATIONS[m] || m),
    equipmentEs: EQUIPMENT_TRANSLATIONS[ex.equipment] || ex.equipment,
    images: images
  };
});

const byId = new Map(baseEnriched.map(e => [e.id, e]));

// Paso 2: Pre-calcular sustitutos inteligentes ("Máquina Ocupada / Alternativas") para cada ejercicio
const enrichedExercises = baseEnriched.map(ex => {
  const candidates = [];

  // 2a. Primero priorizar variations explícitas con distinto equipamiento
  for (const varId of (ex.variations || [])) {
    const v = byId.get(varId);
    if (v && v.id !== ex.id) {
      candidates.push({ item: v, score: (v.equipment !== ex.equipment ? 10 : 6) + (v.movementPattern === ex.movementPattern ? 4 : 0) });
    }
  }

  // 2b. Buscar en todo el catálogo ejercicios del mismo músculo y patrón pero con distinto equipamiento
  for (const other of baseEnriched) {
    if (other.id === ex.id) continue;
    if (candidates.some(c => c.item.id === other.id)) continue;
    if (other.primaryMuscle !== ex.primaryMuscle) continue;

    let score = 0;
    if (other.movementPattern === ex.movementPattern) score += 5;
    if (other.category === ex.category) score += 3;
    if (other.mechanics === ex.mechanics) score += 2;
    if (other.equipment !== ex.equipment) score += 4; // Ideal para "Máquina Ocupada"

    if (score >= 7) {
      candidates.push({ item: other, score });
    }
  }

  candidates.sort((a, b) => b.score - a.score);
  const substitutes = candidates.slice(0, 3).map(({ item }) => ({
    id: item.id,
    name: item.name,
    nameEn: item.nameEn,
    equipment: item.equipment,
    equipmentEs: item.equipmentEs,
    primaryMuscle: item.primaryMuscle,
    primaryMuscleEs: item.primaryMuscleEs,
    images: item.images
  }));

  return {
    ...ex,
    substitutes
  };
});

const enrichedById = new Map(enrichedExercises.map(e => [e.id, e]));

// Guardar en la raíz exercises.json
fs.writeFileSync(exercisesPath, JSON.stringify(enrichedExercises, null, 2), 'utf8');

// Paso 3: Crear estructura de API REST Estática en docs/api/ y docs/api/v1/
const docsDir = path.join(rootDir, 'docs');
const apiDir = path.join(docsDir, 'api');
const v1Dir = path.join(apiDir, 'v1');
const musclesDir = path.join(v1Dir, 'muscles');
const equipDir = path.join(v1Dir, 'equipment');
const categoriesDir = path.join(v1Dir, 'categories');

[docsDir, apiDir, v1Dir, musclesDir, equipDir, categoriesDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Endpoints completos
fs.writeFileSync(path.join(apiDir, 'exercises.json'), JSON.stringify(enrichedExercises, null, 2), 'utf8');
fs.writeFileSync(path.join(v1Dir, 'exercises.json'), JSON.stringify(enrichedExercises, null, 2), 'utf8');

// Endpoints segmentados por Músculo (/api/v1/muscles/{slug}.json)
const muscleGroups = {};
enrichedExercises.forEach(ex => {
  const slug = toSlug(ex.primaryMuscle);
  if (!muscleGroups[slug]) {
    muscleGroups[slug] = {
      muscle: ex.primaryMuscle,
      muscleEs: ex.primaryMuscleEs,
      slug,
      items: []
    };
  }
  muscleGroups[slug].items.push(ex);
});

const muscleIndex = [];
for (const [slug, group] of Object.entries(muscleGroups)) {
  fs.writeFileSync(path.join(musclesDir, `${slug}.json`), JSON.stringify(group.items, null, 2), 'utf8');
  muscleIndex.push({
    muscle: group.muscle,
    muscleEs: group.muscleEs,
    slug,
    count: group.items.length,
    endpoint: `/api/v1/muscles/${slug}.json`,
    cdnUrl: `https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/docs/api/v1/muscles/${slug}.json`
  });
}

// Endpoints segmentados por Equipamiento (/api/v1/equipment/{slug}.json)
const equipGroups = {};
enrichedExercises.forEach(ex => {
  const slug = toSlug(ex.equipment);
  if (!equipGroups[slug]) {
    equipGroups[slug] = {
      equipment: ex.equipment,
      equipmentEs: ex.equipmentEs,
      slug,
      items: []
    };
  }
  equipGroups[slug].items.push(ex);
});

const equipmentIndex = [];
for (const [slug, group] of Object.entries(equipGroups)) {
  fs.writeFileSync(path.join(equipDir, `${slug}.json`), JSON.stringify(group.items, null, 2), 'utf8');
  equipmentIndex.push({
    equipment: group.equipment,
    equipmentEs: group.equipmentEs,
    slug,
    count: group.items.length,
    endpoint: `/api/v1/equipment/${slug}.json`,
    cdnUrl: `https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/docs/api/v1/equipment/${slug}.json`
  });
}

// Endpoints segmentados por Categoría (/api/v1/categories/{slug}.json)
const categoryGroups = {};
enrichedExercises.forEach(ex => {
  const slug = toSlug(ex.category);
  if (!categoryGroups[slug]) {
    categoryGroups[slug] = {
      category: ex.category,
      slug,
      items: []
    };
  }
  categoryGroups[slug].items.push(ex);
});

const categoryIndex = [];
for (const [slug, group] of Object.entries(categoryGroups)) {
  fs.writeFileSync(path.join(categoriesDir, `${slug}.json`), JSON.stringify(group.items, null, 2), 'utf8');
  categoryIndex.push({
    category: group.category,
    slug,
    count: group.items.length,
    endpoint: `/api/v1/categories/${slug}.json`,
    cdnUrl: `https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/docs/api/v1/categories/${slug}.json`
  });
}

// Paso 4: Generar Pack de 10 Rutinas Oficiales en /api/v1/routines.json
function pickExerciseSummary(id, sets, reps, restSeconds, rpe) {
  const ex = enrichedById.get(id);
  if (!ex) return null;
  return {
    exerciseId: ex.id,
    name: ex.name,
    nameEn: ex.nameEn,
    primaryMuscle: ex.primaryMuscle,
    primaryMuscleEs: ex.primaryMuscleEs,
    equipment: ex.equipment,
    equipmentEs: ex.equipmentEs,
    sets,
    reps,
    restSeconds,
    rpe,
    images: ex.images,
    substitutes: ex.substitutes
  };
}

const OFFICIAL_ROUTINES = [
  {
    id: 'push-hypertrophy',
    name: 'Empuje Pro: Pecho, Hombros y Tríceps',
    nameEn: 'Push Day Hypertrophy (Chest, Shoulders & Triceps)',
    goal: 'Hipertrofia',
    level: 'Intermedio',
    durationMinutes: 60,
    targetMusclesEs: ['Pecho / Pectoral', 'Hombros / Deltoides', 'Tríceps'],
    blocks: {
      warmup: [
        pickExerciseSummary('arm-circles-forward-backward', 2, '15 reps', 30, 5),
        pickExerciseSummary('band-pull-apart-warmup', 2, '15 reps', 30, 6),
        pickExerciseSummary('scapular-push-up-plus', 2, '12 reps', 30, 6)
      ].filter(Boolean),
      main: [
        pickExerciseSummary('barbell-bench-press', 4, '6-8 reps', 120, 8),
        pickExerciseSummary('incline-dumbbell-bench-press', 3, '8-10 reps', 90, 8),
        pickExerciseSummary('dumbbell-shoulder-press', 3, '8-10 reps', 90, 8),
        pickExerciseSummary('cable-crossover', 3, '12-15 reps', 60, 8),
        pickExerciseSummary('lateral-raise', 4, '12-15 reps', 60, 9),
        pickExerciseSummary('triceps-pushdown', 3, '10-12 reps', 60, 8),
        pickExerciseSummary('overhead-cable-extension', 3, '12-15 reps', 60, 9)
      ].filter(Boolean),
      cooldown: [
        pickExerciseSummary('doorway-pec-stretch', 2, '30 seg', 15, 4),
        pickExerciseSummary('triceps-overhead-stretch-towel', 2, '30 seg', 15, 4)
      ].filter(Boolean)
    }
  },
  {
    id: 'pull-hypertrophy',
    name: 'Tirón Pro: Espalda, Dorsal y Bíceps',
    nameEn: 'Pull Day Hypertrophy (Back, Lats & Biceps)',
    goal: 'Hipertrofia',
    level: 'Intermedio',
    durationMinutes: 60,
    targetMusclesEs: ['Espalda / Dorsal', 'Dorsal Ancho', 'Bíceps', 'Trapecio'],
    blocks: {
      warmup: [
        pickExerciseSummary('cat-cow-stretch', 2, '12 reps', 20, 4),
        pickExerciseSummary('dead-hang-bar-warmup', 2, '30 seg', 30, 5),
        pickExerciseSummary('face-pull-band-warmup', 2, '15 reps', 30, 6)
      ].filter(Boolean),
      main: [
        pickExerciseSummary('pull-up', 4, '6-10 reps', 120, 8),
        pickExerciseSummary('barbell-row', 4, '8-10 reps', 90, 8),
        pickExerciseSummary('seated-cable-row', 3, '10-12 reps', 75, 8),
        pickExerciseSummary('face-pull', 3, '15 reps', 60, 8),
        pickExerciseSummary('barbell-curl', 3, '8-10 reps', 75, 8),
        pickExerciseSummary('incline-dumbbell-curl', 3, '10-12 reps', 60, 9),
        pickExerciseSummary('hammer-curl', 3, '12 reps', 60, 8)
      ].filter(Boolean),
      cooldown: [
        pickExerciseSummary('childs-pose-lat-reach', 2, '40 seg', 15, 4),
        pickExerciseSummary('biceps-wall-stretch', 2, '30 seg', 15, 4)
      ].filter(Boolean)
    }
  },
  {
    id: 'legs-glutes-strength',
    name: 'Pierna Completa y Glúteos (Fuerza e Hipertrofia)',
    nameEn: 'Complete Legs & Glutes (Strength & Hypertrophy)',
    goal: 'Fuerza',
    level: 'Intermedio',
    durationMinutes: 65,
    targetMusclesEs: ['Cuádriceps', 'Isquiotibiales / Femoral', 'Glúteos', 'Gemelos / Pantorrillas'],
    blocks: {
      warmup: [
        pickExerciseSummary('hip-90-90-mobility', 2, '10 reps', 20, 5),
        pickExerciseSummary('leg-swings-front-back', 2, '15 reps', 20, 5),
        pickExerciseSummary('glute-bridge-activation-bodyweight', 2, '15 reps', 30, 6)
      ].filter(Boolean),
      main: [
        pickExerciseSummary('barbell-squat', 4, '5-8 reps', 150, 8),
        pickExerciseSummary('romanian-deadlift', 4, '8-10 reps', 120, 8),
        pickExerciseSummary('barbell-hip-thrust', 3, '8-12 reps', 90, 8),
        pickExerciseSummary('bulgarian-split-squat', 3, '10 reps/pierna', 90, 9),
        pickExerciseSummary('lying-leg-curl', 3, '12-15 reps', 60, 8),
        pickExerciseSummary('leg-extension', 3, '12-15 reps', 60, 9),
        pickExerciseSummary('standing-calf-raise', 4, '15 reps', 45, 9)
      ].filter(Boolean),
      cooldown: [
        pickExerciseSummary('couch-stretch-hip-flexor', 2, '40 seg', 15, 4),
        pickExerciseSummary('pigeon-pose-glute', 2, '40 seg', 15, 4)
      ].filter(Boolean)
    }
  },
  {
    id: 'full-body-3days',
    name: 'Full Body Inteligente (Cuerpo Completo)',
    nameEn: 'Smart Full Body Workout',
    goal: 'Hipertrofia',
    level: 'Principiante',
    durationMinutes: 50,
    targetMusclesEs: ['Pecho / Pectoral', 'Espalda / Dorsal', 'Cuádriceps', 'Hombros / Deltoides', 'Abdomen / Core'],
    blocks: {
      warmup: [
        pickExerciseSummary('jumping-jacks-cardio', 2, '40 seg', 20, 5),
        pickExerciseSummary('inchworm-walkout', 2, '8 reps', 30, 5),
        pickExerciseSummary('air-squat-warmup', 2, '15 reps', 30, 5)
      ].filter(Boolean),
      main: [
        pickExerciseSummary('dumbbell-bench-press', 3, '8-10 reps', 90, 8),
        pickExerciseSummary('lat-pulldown', 3, '10-12 reps', 90, 8),
        pickExerciseSummary('leg-press', 3, '10-12 reps', 90, 8),
        pickExerciseSummary('dumbbell-rdl', 3, '10-12 reps', 90, 8),
        pickExerciseSummary('dumbbell-shoulder-press', 3, '10-12 reps', 75, 8),
        pickExerciseSummary('ab-plank', 3, '45 seg', 45, 7)
      ].filter(Boolean),
      cooldown: [
        pickExerciseSummary('cat-cow-stretch', 2, '30 seg', 15, 4),
        pickExerciseSummary('standing-quad-reach-stretch', 2, '30 seg', 15, 4)
      ].filter(Boolean)
    }
  },
  {
    id: 'calisthenics-street-workout',
    name: 'Calistenia y Peso Corporal (Sin Gimnasio)',
    nameEn: 'Calisthenics & Bodyweight Mastery',
    goal: 'Calistenia',
    level: 'Intermedio',
    durationMinutes: 45,
    targetMusclesEs: ['Pecho / Pectoral', 'Dorsal Ancho', 'Cuádriceps', 'Abdomen / Core'],
    blocks: {
      warmup: [
        pickExerciseSummary('wrist-mobility-circles-quadruped', 2, '30 seg', 15, 4),
        pickExerciseSummary('scapular-pullup', 2, '10 reps', 30, 6),
        pickExerciseSummary('mountain-climbers', 2, '30 seg', 20, 6)
      ].filter(Boolean),
      main: [
        pickExerciseSummary('pull-up', 4, '8-12 reps', 90, 8),
        pickExerciseSummary('parallel-bar-dips', 4, '8-12 reps', 90, 8),
        pickExerciseSummary('pike-pushup', 3, '8-10 reps', 75, 8),
        pickExerciseSummary('inverted-row', 3, '10-12 reps', 75, 8),
        pickExerciseSummary('bulgarian-split-squat', 3, '12 reps/pierna', 60, 8),
        pickExerciseSummary('hanging-leg-raise', 3, '10-15 reps', 60, 8)
      ].filter(Boolean),
      cooldown: [
        pickExerciseSummary('childs-pose-lat-reach', 2, '40 seg', 15, 4),
        pickExerciseSummary('upward-facing-dog-abdominal', 2, '30 seg', 15, 4)
      ].filter(Boolean)
    }
  },
  {
    id: 'trx-kettlebell-functional',
    name: 'Funcional Híbrido: TRX + Pesa Rusa (Kettlebell)',
    nameEn: 'Functional Hybrid: TRX Suspension & Kettlebell',
    goal: 'Funcional',
    level: 'Intermedio',
    durationMinutes: 45,
    targetMusclesEs: ['Glúteos', 'Hombros / Deltoides', 'Espalda / Dorsal', 'Abdomen / Core'],
    blocks: {
      warmup: [
        pickExerciseSummary('hip-circles-fire-hydrant', 2, '10 reps', 20, 5),
        pickExerciseSummary('kettlebell-halo', 2, '10 reps', 25, 6)
      ].filter(Boolean),
      main: [
        pickExerciseSummary('double-kettlebell-front-squat', 4, '8-10 reps', 75, 8),
        pickExerciseSummary('trx-chest-press', 3, '12 reps', 60, 8),
        pickExerciseSummary('trx-inverted-row-high', 3, '12 reps', 60, 8),
        pickExerciseSummary('kettlebell-clean-single-arm', 3, '8 reps/lado', 75, 8),
        pickExerciseSummary('trx-suspended-lunge', 3, '10 reps/pierna', 60, 8),
        pickExerciseSummary('trx-body-saw-plank', 3, '12 reps', 45, 8)
      ].filter(Boolean),
      cooldown: [
        pickExerciseSummary('spiderman-stretch-with-reach', 2, '30 seg/lado', 15, 4),
        pickExerciseSummary('seated-spinal-twist', 2, '30 seg/lado', 15, 4)
      ].filter(Boolean)
    }
  },
  {
    id: 'mobility-foam-recovery',
    name: 'Movilidad Articular Completa y Foam Rolling',
    nameEn: 'Full Body Mobility & Myofascial Release',
    goal: 'Movilidad',
    level: 'Principiante',
    durationMinutes: 25,
    targetMusclesEs: ['Espalda Baja / Lumbar', 'Glúteos', 'Flexores de Cadera / Psoas', 'Espalda / Dorsal'],
    blocks: {
      warmup: [
        pickExerciseSummary('foam-roll-thoracic-spine', 1, '60 seg', 15, 4),
        pickExerciseSummary('foam-roll-glutes-piriformis', 1, '60 seg', 15, 4),
        pickExerciseSummary('foam-roll-quadriceps', 1, '60 seg', 15, 4)
      ].filter(Boolean),
      main: [
        pickExerciseSummary('cat-cow-stretch', 2, '10 reps', 15, 4),
        pickExerciseSummary('thoracic-spine-rotations-quadruped', 2, '8 reps/lado', 15, 5),
        pickExerciseSummary('spiderman-stretch-with-reach', 2, '6 reps/lado', 20, 5),
        pickExerciseSummary('hip-90-90-transitions', 2, '10 reps', 20, 5),
        pickExerciseSummary('deep-squat-prying', 2, '45 seg', 20, 5),
        pickExerciseSummary('ankle-dorsiflexion-wall-drill', 2, '12 reps/lado', 15, 5)
      ].filter(Boolean),
      cooldown: [
        pickExerciseSummary('supine-figure-four-glute-stretch', 2, '45 seg/lado', 15, 4),
        pickExerciseSummary('childs-pose-lat-reach', 2, '60 seg', 15, 3)
      ].filter(Boolean)
    }
  },
  {
    id: 'hiit-cardio-burn',
    name: 'HIIT Metabólico y Acondicionamiento Atlético',
    nameEn: 'Metabolic HIIT & Athletic Conditioning',
    goal: 'Cardio',
    level: 'Intermedio',
    durationMinutes: 30,
    targetMusclesEs: ['Sistema Cardiovascular', 'Cuádriceps', 'Abdomen / Core'],
    blocks: {
      warmup: [
        pickExerciseSummary('jumping-jacks-cardio', 2, '45 seg', 15, 5),
        pickExerciseSummary('high-knees-drill', 2, '30 seg', 15, 6)
      ].filter(Boolean),
      main: [
        pickExerciseSummary('battle-ropes-waves-alternating', 4, '30 seg', 30, 9),
        pickExerciseSummary('box-jump-standard', 4, '10 reps', 45, 8),
        pickExerciseSummary('burpee-chest-to-ground', 4, '12 reps', 45, 9),
        pickExerciseSummary('kettlebell-thruster', 4, '12 reps', 45, 8),
        pickExerciseSummary('mountain-climbers', 4, '40 seg', 30, 8),
        pickExerciseSummary('jump-rope', 4, '60 seg', 30, 8)
      ].filter(Boolean),
      cooldown: [
        pickExerciseSummary('downward-facing-dog-pedaling', 2, '40 seg', 15, 4),
        pickExerciseSummary('standing-quad-reach-stretch', 2, '30 seg', 15, 4)
      ].filter(Boolean)
    }
  }
];

fs.writeFileSync(path.join(v1Dir, 'routines.json'), JSON.stringify(OFFICIAL_ROUTINES, null, 2), 'utf8');

// Paso 5: Índice Maestro de la API v1 (/api/v1/index.json y /api/version.json)
const apiV1Index = {
  name: 'DB-Gym Open Exercise & Routine API',
  version: '2.2.0',
  license: 'MIT',
  updatedAt: new Date().toISOString(),
  totalExercises: enrichedExercises.length,
  totalRoutines: OFFICIAL_ROUTINES.length,
  features: [
    'Bilingual metadata (Spanish & English)',
    'Verified 2-frame looping photography (0.jpg & 1.jpg)',
    'Pre-computed biomechanical substitutes (Busy Machine / Equipment swap)',
    'Zero-backend pre-sharded static REST endpoints',
    'Ready-to-use 3-block workout routines',
    'SQLite (Android Room) and PostgreSQL SQL dumps'
  ],
  endpoints: {
    allExercises: 'https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/exercises.json',
    v1Exercises: 'https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/docs/api/v1/exercises.json',
    v1Routines: 'https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/docs/api/v1/routines.json',
    v1Index: 'https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/docs/api/v1/index.json',
    githubPagesExplorer: 'https://tm210608.github.io/DB-Gym/'
  },
  muscles: muscleIndex,
  equipment: equipmentIndex,
  categories: categoryIndex
};

fs.writeFileSync(path.join(v1Dir, 'index.json'), JSON.stringify(apiV1Index, null, 2), 'utf8');
fs.writeFileSync(path.join(apiDir, 'version.json'), JSON.stringify(apiV1Index, null, 2), 'utf8');

// Paso 6: Generar exportaciones SQL (SQLite/Room y PostgreSQL/Supabase) en carpeta sql/
const sqlDir = path.join(rootDir, 'sql');
if (!fs.existsSync(sqlDir)) fs.mkdirSync(sqlDir, { recursive: true });

function sqlEscape(val) {
  if (val === null || val === undefined) return 'NULL';
  return "'" + String(val).replace(/'/g, "''") + "'";
}

const sqliteLines = [
  '-- DB-Gym SQLite / Android Room Dump (533 Exercises)',
  '-- Auto-generated by scripts/build-public-api.js',
  'BEGIN TRANSACTION;',
  'CREATE TABLE IF NOT EXISTS exercises (',
  '  id TEXT PRIMARY KEY,',
  '  name TEXT NOT NULL,',
  '  name_en TEXT NOT NULL,',
  '  category TEXT NOT NULL,',
  '  primary_muscle TEXT NOT NULL,',
  '  primary_muscle_es TEXT NOT NULL,',
  '  secondary_muscles_json TEXT NOT NULL,',
  '  equipment TEXT NOT NULL,',
  '  equipment_es TEXT NOT NULL,',
  '  difficulty TEXT NOT NULL,',
  '  mechanics TEXT NOT NULL,',
  '  movement_pattern TEXT NOT NULL,',
  '  force_type TEXT NOT NULL,',
  '  description TEXT NOT NULL,',
  '  instructions_json TEXT NOT NULL,',
  '  common_mistakes_json TEXT NOT NULL,',
  '  images_json TEXT NOT NULL,',
  '  substitutes_json TEXT NOT NULL',
  ');'
];

const pgLines = [
  '-- DB-Gym PostgreSQL / Supabase Dump (533 Exercises)',
  '-- Auto-generated by scripts/build-public-api.js',
  'BEGIN;',
  'CREATE TABLE IF NOT EXISTS exercises (',
  '  id TEXT PRIMARY KEY,',
  '  name TEXT NOT NULL,',
  '  name_en TEXT NOT NULL,',
  '  category TEXT NOT NULL,',
  '  primary_muscle TEXT NOT NULL,',
  '  primary_muscle_es TEXT NOT NULL,',
  '  secondary_muscles JSONB NOT NULL DEFAULT \'[]\'::jsonb,',
  '  equipment TEXT NOT NULL,',
  '  equipment_es TEXT NOT NULL,',
  '  difficulty TEXT NOT NULL,',
  '  mechanics TEXT NOT NULL,',
  '  movement_pattern TEXT NOT NULL,',
  '  force_type TEXT NOT NULL,',
  '  description TEXT NOT NULL,',
  '  instructions JSONB NOT NULL DEFAULT \'[]\'::jsonb,',
  '  common_mistakes JSONB NOT NULL DEFAULT \'[]\'::jsonb,',
  '  images JSONB NOT NULL DEFAULT \'[]\'::jsonb,',
  '  substitutes JSONB NOT NULL DEFAULT \'[]\'::jsonb',
  ');'
];

enrichedExercises.forEach(ex => {
  const rowValues = [
    sqlEscape(ex.id),
    sqlEscape(ex.name),
    sqlEscape(ex.nameEn || ex.name),
    sqlEscape(ex.category),
    sqlEscape(ex.primaryMuscle),
    sqlEscape(ex.primaryMuscleEs),
    sqlEscape(JSON.stringify(ex.secondaryMuscles || [])),
    sqlEscape(ex.equipment),
    sqlEscape(ex.equipmentEs),
    sqlEscape(ex.difficulty),
    sqlEscape(ex.mechanics),
    sqlEscape(ex.movementPattern),
    sqlEscape(ex.forceType),
    sqlEscape(ex.description || ''),
    sqlEscape(JSON.stringify(ex.instructions || [])),
    sqlEscape(JSON.stringify(ex.commonMistakes || [])),
    sqlEscape(JSON.stringify(ex.images || [])),
    sqlEscape(JSON.stringify(ex.substitutes || []))
  ].join(', ');

  sqliteLines.push(`INSERT OR REPLACE INTO exercises VALUES (${rowValues});`);
  pgLines.push(`INSERT INTO exercises VALUES (${rowValues}) ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, images = EXCLUDED.images, substitutes = EXCLUDED.substitutes;`);
});

sqliteLines.push('COMMIT;');
pgLines.push('COMMIT;');

fs.writeFileSync(path.join(sqlDir, 'exercises-sqlite.sql'), sqliteLines.join('\n'), 'utf8');
fs.writeFileSync(path.join(sqlDir, 'exercises-postgres.sql'), pgLines.join('\n'), 'utf8');

// Copiar el visor visual también a docs/index.html para que sea la portada pública de GitHub Pages
if (fs.existsSync(path.join(rootDir, 'visor_ejercicios.html'))) {
  const visorContent = fs.readFileSync(path.join(rootDir, 'visor_ejercicios.html'), 'utf8');
  fs.writeFileSync(path.join(docsDir, 'index.html'), visorContent, 'utf8');
}

console.log(`✅ API Pública v2.2 generada con éxito:`);
console.log(`   - ${enrichedExercises.length} ejercicios con sustitutos pre-calculados ("substitutes").`);
console.log(`   - ${muscleIndex.length} endpoints por músculo en docs/api/v1/muscles/*.json`);
console.log(`   - ${equipmentIndex.length} endpoints por equipamiento en docs/api/v1/equipment/*.json`);
console.log(`   - ${categoryIndex.length} endpoints por categoría en docs/api/v1/categories/*.json`);
console.log(`   - ${OFFICIAL_ROUTINES.length} rutinas oficiales completas en docs/api/v1/routines.json`);
console.log(`   - Dumps SQL generados en sql/exercises-sqlite.sql y sql/exercises-postgres.sql`);
