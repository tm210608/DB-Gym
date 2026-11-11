import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Vocabularios controlados
const difficulties = ['Principiante', 'Intermedio', 'Avanzado'];

// Generador de variaciones sistemáticas con control biomecánico
const generatedExercises = [];

function addEx(ex) {
  generatedExercises.push(ex);
}

// ==========================================
// 1. CALISTENIA Y PESO CORPORAL (50 ejercicios)
// ==========================================
const pushupVariations = [
  { id: 'diamond-pushup', name: 'Flexiones Diamante', nameEn: 'Diamond Push-Up', diff: 'Intermedio', target: 'Triceps', sec: ['Chest', 'Shoulders'] },
  { id: 'wide-grip-pushup', name: 'Flexiones con Agarre Ancho', nameEn: 'Wide Grip Push-Up', diff: 'Principiante', target: 'Chest', sec: ['Shoulders'] },
  { id: 'decline-pushup', name: 'Flexiones Declinadas con Pies Elevados', nameEn: 'Decline Push-Up', diff: 'Intermedio', target: 'Chest', sec: ['Shoulders', 'Triceps'] },
  { id: 'incline-pushup', name: 'Flexiones Inclinadas con Manos Elevadas', nameEn: 'Incline Push-Up', diff: 'Principiante', target: 'Chest', sec: ['Triceps'] },
  { id: 'archer-pushup', name: 'Flexiones de Arquero', nameEn: 'Archer Push-Up', diff: 'Avanzado', target: 'Chest', sec: ['Triceps', 'Shoulders'], uni: true },
  { id: 'pike-pushup', name: 'Flexiones en Pica', nameEn: 'Pike Push-Up', diff: 'Intermedio', target: 'Shoulders', sec: ['Triceps', 'Traps'], pat: 'Empuje Vertical' },
  { id: 'hindu-pushup', name: 'Flexiones Hindúes (Dand)', nameEn: 'Hindu Push-Up', diff: 'Intermedio', target: 'Shoulders', sec: ['Chest', 'Triceps'], pat: 'Multi-plano' },
  { id: 'spiderman-pushup', name: 'Flexiones Spiderman', nameEn: 'Spiderman Push-Up', diff: 'Avanzado', target: 'Chest', sec: ['Abs', 'Triceps'], uni: true },
  { id: 'clap-pushup', name: 'Flexiones con Palmada Pliométricas', nameEn: 'Clap Push-Up', diff: 'Avanzado', target: 'Chest', sec: ['Triceps'], cat: 'Pliométrico' },
  { id: 'ring-pushup', name: 'Flexiones en Anillas de Gimnasia', nameEn: 'Gymnastic Ring Push-Up', diff: 'Intermedio', target: 'Chest', sec: ['Triceps', 'Shoulders'], eq: 'Rings' }
];

pushupVariations.forEach(p => {
  addEx({
    id: p.id,
    name: p.name,
    nameEn: p.nameEn,
    primaryMuscle: p.target,
    secondaryMuscles: p.sec,
    stabilizers: ['Abs', 'Glutes'],
    equipment: p.eq || 'Bodyweight',
    difficulty: p.diff,
    category: p.cat || 'Calistenia',
    mechanics: 'Compuesto',
    movementPattern: p.pat || 'Empuje Horizontal',
    isUnilateral: !!p.uni,
    trackingType: 'Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Empuje',
    instructions: [
      `Adopta la postura inicial de ${p.name.toLowerCase()} asegurando alineación pélvica y core tenso.`,
      `Desciende el torso de forma controlada hasta el rango óptimo de estiramiento articular.`,
      `Empuja con potencia contra el punto de apoyo extendiendo los brazos a la posición inicial.`
    ],
    tips: ['Mantén la retroversión pélvica activa para evitar el arqueo lumbar.'],
    breathingCue: 'Inhala en el descenso; exhala al empujar hacia la posición inicial.',
    alternatives: ['push-up', 'barbell-bench-press']
  });
});

const pullupVariations = [
  { id: 'chin-up', name: 'Dominadas Supinas (Chin-Up)', nameEn: 'Chin-Up', diff: 'Intermedio', target: 'Biceps', sec: ['Lats', 'Back'] },
  { id: 'neutral-grip-pullup', name: 'Dominadas con Agarre Neutro', nameEn: 'Neutral Grip Pull-Up', diff: 'Intermedio', target: 'Lats', sec: ['Biceps', 'Back'] },
  { id: 'wide-grip-pullup', name: 'Dominadas Pronas con Agarre Ancho', nameEn: 'Wide Grip Pull-Up', diff: 'Avanzado', target: 'Lats', sec: ['Back', 'Forearms'] },
  { id: 'archer-pullup', name: 'Dominadas de Arquero', nameEn: 'Archer Pull-Up', diff: 'Avanzado', target: 'Lats', sec: ['Biceps', 'Back'], uni: true },
  { id: 'l-sit-pullup', name: 'Dominadas en L-Sit', nameEn: 'L-Sit Pull-Up', diff: 'Avanzado', target: 'Lats', sec: ['Abs', 'HipFlexors', 'Biceps'] },
  { id: 'ring-pullup', name: 'Dominadas en Anillas', nameEn: 'Ring Pull-Up', diff: 'Intermedio', target: 'Lats', sec: ['Biceps', 'Back'], eq: 'Rings' },
  { id: 'scapular-pullup', name: 'Dominadas Escapulares de Activación', nameEn: 'Scapular Pull-Up', diff: 'Principiante', target: 'Back', sec: ['Traps'], cat: 'Calentamiento' },
  { id: 'chest-to-bar-pullup', name: 'Dominadas Pecho a la Barra', nameEn: 'Chest-to-Bar Pull-Up', diff: 'Avanzado', target: 'Lats', sec: ['Back', 'Biceps'] },
  { id: 'muscle-up-bar', name: 'Muscle-Up en Barra', nameEn: 'Bar Muscle-Up', diff: 'Avanzado', target: 'Lats', sec: ['Chest', 'Triceps', 'Shoulders'] },
  { id: 'muscle-up-rings', name: 'Muscle-Up en Anillas', nameEn: 'Ring Muscle-Up', diff: 'Avanzado', target: 'Lats', sec: ['Chest', 'Triceps', 'Shoulders'], eq: 'Rings' }
];

pullupVariations.forEach(p => {
  addEx({
    id: p.id,
    name: p.name,
    nameEn: p.nameEn,
    primaryMuscle: p.target,
    secondaryMuscles: p.sec,
    stabilizers: ['Abs', 'Traps'],
    equipment: p.eq || 'Bodyweight',
    difficulty: p.diff,
    category: p.cat || 'Calistenia',
    mechanics: 'Compuesto',
    movementPattern: 'Tirón Vertical',
    isUnilateral: !!p.uni,
    trackingType: 'Reps',
    planeOfMotion: 'Frontal',
    forceType: 'Tirón',
    instructions: [
      `Cuélgate del soporte con el agarre especificado para ${p.name.toLowerCase()} con brazos rectos.`,
      `Activa las escápulas y tracciona con los dorsales impulsando el cuerpo hacia el agarre.`,
      `Baja con descenso suave y controlado hasta extender los codos por completo.`
    ],
    tips: ['Inicia siempre el movimiento deprimiendo las escápulas antes de doblar los codos.'],
    breathingCue: 'Exhala durante la tracción concéntrica; inhala en la bajada.',
    alternatives: ['pull-up', 'lat-pulldown']
  });
});

const dipsAndLegsCalisthenics = [
  { id: 'parallel-bar-dips', name: 'Fondos en Barras Paralelas', nameEn: 'Parallel Bar Dips', target: 'Chest', sec: ['Triceps', 'Shoulders'] },
  { id: 'bench-dips', name: 'Fondos de Tríceps en Banco', nameEn: 'Bench Dips', target: 'Triceps', sec: ['Chest', 'Shoulders'], diff: 'Principiante' },
  { id: 'ring-dips', name: 'Fondos en Anillas', nameEn: 'Ring Dips', target: 'Chest', sec: ['Triceps', 'Shoulders'], diff: 'Avanzado', eq: 'Rings' },
  { id: 'pistol-squat', name: 'Sentadilla Pistola a Una Pierna (Pistol Squat)', nameEn: 'Pistol Squat', target: 'Quads', sec: ['Glutes', 'Calves'], diff: 'Avanzado', uni: true, pat: 'Sentadilla' },
  { id: 'shrimp-squat', name: 'Sentadilla Camarón (Shrimp Squat)', nameEn: 'Shrimp Squat', target: 'Quads', sec: ['Glutes'], diff: 'Avanzado', uni: true, pat: 'Sentadilla' },
  { id: 'sissy-squat-bodyweight', name: 'Sentadilla Sissy con Peso Corporal', nameEn: 'Bodyweight Sissy Squat', target: 'Quads', sec: [], diff: 'Intermedio', pat: 'Sentadilla' },
  { id: 'nordic-hamstring-curl', name: 'Curl Nórdico de Isquiotibiales', nameEn: 'Nordic Hamstring Curl', target: 'Hamstrings', sec: ['Glutes', 'Calves'], diff: 'Avanzado', pat: 'Bisagra de Cadera' },
  { id: 'reverse-nordic-curl', name: 'Curl Nórdico Inverso para Cuádriceps', nameEn: 'Reverse Nordic Curl', target: 'Quads', sec: ['HipFlexors'], diff: 'Intermedio', pat: 'Sentadilla' },
  { id: 'single-leg-glute-bridge', name: 'Puente de Glúteos a Una Pierna', nameEn: 'Single-Leg Glute Bridge', target: 'Glutes', sec: ['Hamstrings'], diff: 'Principiante', uni: true, pat: 'Bisagra de Cadera' },
  { id: 'calf-raise-single-leg-bodyweight', name: 'Elevación de Talón Unilateral en Escalón', nameEn: 'Single-Leg Calf Raise on Step', target: 'Calves', sec: [], diff: 'Principiante', uni: true, pat: 'Sentadilla' }
];

dipsAndLegsCalisthenics.forEach(d => {
  addEx({
    id: d.id,
    name: d.name,
    nameEn: d.nameEn,
    primaryMuscle: d.target,
    secondaryMuscles: d.sec,
    stabilizers: ['Abs'],
    equipment: d.eq || 'Bodyweight',
    difficulty: d.diff || 'Intermedio',
    category: 'Calistenia',
    mechanics: 'Compuesto',
    movementPattern: d.pat || 'Empuje Vertical',
    isUnilateral: !!d.uni,
    trackingType: 'Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Empuje',
    instructions: [
      `Sitúate en posición de partida para ${d.name.toLowerCase()} equilibrando el cuerpo.`,
      `Ejecuta el rango de recorrido completo manteniendo la tensión continua en ${d.target.toLowerCase()}.`,
      `Regresa a la postura inicial con control técnico riguroso.`
    ],
    tips: ['Prioriza la cadencia controlada sobre la cantidad de repeticiones.'],
    breathingCue: 'Exhala en el esfuerzo principal; inhala en la fase de retorno.',
    alternatives: ['push-up', 'goblet-squat']
  });
});

// Calistenia estática y core avanzado
const calisthenicsIsometrics = [
  { id: 'l-sit-floor', name: 'L-Sit en el Suelo', nameEn: 'Floor L-Sit', target: 'Abs', sec: ['HipFlexors', 'Triceps'] },
  { id: 'l-sit-parallettes', name: 'L-Sit en Paralelas Bajas', nameEn: 'Parallettes L-Sit', target: 'Abs', sec: ['HipFlexors', 'Triceps'] },
  { id: 'hollow-body-hold', name: 'Posición Hueca (Hollow Body Hold)', nameEn: 'Hollow Body Hold', target: 'Abs', sec: ['Quads', 'HipFlexors'], diff: 'Principiante' },
  { id: 'arch-body-hold-superman', name: 'Posición de Arco / Superman Isométrico', nameEn: 'Superman Arch Hold', target: 'LowerBack', sec: ['Glutes', 'Traps'], diff: 'Principiante' },
  { id: 'planche-lean', name: 'Inclinación de Plancha (Planche Lean)', nameEn: 'Planche Lean', target: 'Shoulders', sec: ['Chest', 'Abs', 'Serratus'] },
  { id: 'tuck-planche', name: 'Tuck Planche en Paralelas', nameEn: 'Tuck Planche', target: 'Shoulders', sec: ['Chest', 'Triceps', 'Abs'], diff: 'Avanzado' },
  { id: 'front-lever-tuck', name: 'Tuck Front Lever en Barra', nameEn: 'Tuck Front Lever', target: 'Lats', sec: ['Abs', 'Back'], diff: 'Intermedio' },
  { id: 'back-lever-tuck', name: 'Tuck Back Lever en Barra', nameEn: 'Tuck Back Lever', target: 'Back', sec: ['Shoulders', 'LowerBack'], diff: 'Intermedio' },
  { id: 'handstand-wall-hold', name: 'Pino contra la Pared Isométrico', nameEn: 'Wall Handstand Hold', target: 'Shoulders', sec: ['Triceps', 'Traps', 'Abs'] },
  { id: 'freestanding-handstand', name: 'Pino Libre (Handstand)', nameEn: 'Freestanding Handstand', target: 'Shoulders', sec: ['Traps', 'Forearms', 'Abs'], diff: 'Avanzado' }
];

calisthenicsIsometrics.forEach(c => {
  addEx({
    id: c.id,
    name: c.name,
    nameEn: c.nameEn,
    primaryMuscle: c.target,
    secondaryMuscles: c.sec,
    stabilizers: ['Abs', 'Glutes'],
    equipment: 'Bodyweight',
    difficulty: c.diff || 'Intermedio',
    category: 'Isométrico',
    mechanics: 'Compuesto',
    movementPattern: 'Anti-Extensión',
    isUnilateral: false,
    trackingType: 'Tiempo',
    planeOfMotion: 'Sagital',
    forceType: 'Estático',
    instructions: [
      `Adopta la postura isométrica de ${c.name.toLowerCase()} bloqueando articulaciones clave.`,
      `Genera tensión máxima en ${c.target.toLowerCase()} y respira de forma corta y controlada.`,
      `Sostén la alineación corporal estricta durante el tiempo programado sin descompensar.`
    ],
    tips: ['La calidad postural y la protracción escapular son críticas en las figuras gimnásticas.'],
    breathingCue: 'Respiración diafragmática superficial y constante sin despresurizar el abdomen.',
    alternatives: ['plank', 'dead-bug']
  });
});

// Calistenia dinámica restante
const dynamicCalisthenics = [
  { id: 'hanging-knee-raise', name: 'Elevación de Rodillas Colgado en Barra', nameEn: 'Hanging Knee Raise', target: 'Abs', sec: ['HipFlexors', 'Forearms'], diff: 'Principiante' },
  { id: 'hanging-leg-raise', name: 'Elevación de Piernas Rectas Colgado', nameEn: 'Hanging Straight Leg Raise', target: 'Abs', sec: ['HipFlexors', 'Forearms'], diff: 'Intermedio' },
  { id: 'toes-to-bar', name: 'Pies a la Barra (Toes to Bar)', nameEn: 'Toes to Bar', target: 'Abs', sec: ['Lats', 'HipFlexors', 'Forearms'], diff: 'Avanzado' },
  { id: 'windshield-wipers-hanging', name: 'Limpiaparabrisas Colgado en Barra', nameEn: 'Hanging Windshield Wipers', target: 'Abs', sec: ['Lats', 'Forearms'], diff: 'Avanzado', pat: 'Rotación' },
  { id: 'dragon-flag', name: 'Dragon Flag (Bandera de Dragón)', nameEn: 'Dragon Flag', target: 'Abs', sec: ['Lats', 'Glutes'], diff: 'Avanzado' },
  { id: 'human-flag', name: 'Bandera Humana (Human Flag)', nameEn: 'Human Flag', target: 'Abs', sec: ['Shoulders', 'Lats'], diff: 'Avanzado', uni: true },
  { id: 'side-plank-hip-abduction', name: 'Plancha Lateral con Elevación de Pierna', nameEn: 'Side Plank with Hip Abduction', target: 'Abductors', sec: ['Abs', 'Glutes'], diff: 'Intermedio', uni: true },
  { id: 'copenhagen-plank', name: 'Plancha Copenhague para Aductores', nameEn: 'Copenhagen Adductor Plank', target: 'Adductors', sec: ['Abs'], diff: 'Avanzado', uni: true },
  { id: 'bear-crawl', name: 'Paso del Oso (Bear Crawl)', nameEn: 'Bear Crawl', target: 'Abs', sec: ['Shoulders', 'Quads'], diff: 'Principiante', cat: 'Calentamiento' },
  { id: 'crab-walk', name: 'Caminata de Cangrejo (Crab Walk)', nameEn: 'Crab Walk', target: 'Glutes', sec: ['Triceps', 'Shoulders'], diff: 'Principiante', cat: 'Movilidad' }
];

dynamicCalisthenics.forEach(c => {
  addEx({
    id: c.id,
    name: c.name,
    nameEn: c.nameEn,
    primaryMuscle: c.target,
    secondaryMuscles: c.sec,
    stabilizers: ['Forearms', 'LowerBack'],
    equipment: 'Bodyweight',
    difficulty: c.diff,
    category: c.cat || 'Calistenia',
    mechanics: 'Compuesto',
    movementPattern: c.pat || 'Anti-Extensión',
    isUnilateral: !!c.uni,
    trackingType: 'Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Core',
    instructions: [
      `Inicia en la posición base de ${c.name.toLowerCase()} asegurando el anclaje firme.`,
      `Ejecuta el desplazamiento o flexión activa contrayendo con intención el músculo principal.`,
      `Retorna bajo control excéntrico sin rebotes articulares.`
    ],
    tips: ['Evita el balanceo por inercia para aislar el trabajo en la musculatura diana.'],
    breathingCue: 'Exhala en el esfuerzo de cierre; inhala en la fase de extensión.',
    alternatives: ['plank', 'dead-bug']
  });
});

// Guardar archivo de lote 03
fs.writeFileSync(
  path.join(__dirname, '../src/data/batches/batch_03_calisthenics50.json'),
  JSON.stringify(generatedExercises, null, 2),
  'utf8'
);

console.log(`✅ Lote 03 (Calistenia y Peso Corporal - ${generatedExercises.length} ejercicios) generado con éxito.`);
