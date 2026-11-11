import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generated = [];

function addEx(ex) {
  generated.push(ex);
}

// ========================================================
// REHABILITACIÓN, PREHAB Y CONTROL MOTOR (35 ejercicios)
// ========================================================
const rehabDefs = [
  { id: 'scapular-push-up-plus', name: 'Flexiones Escapulares (Push-Up Plus para Serrato)', nameEn: 'Scapular Push-Up Plus for Serratus Anterior', target: 'Serratus', sec: ['Chest', 'Triceps'], pat: 'Empuje Horizontal' },
  { id: 'serratus-wall-slide-foam-roller', name: 'Deslizamiento en Pared con Rodillo para Serrato', nameEn: 'Foam Roller Serratus Wall Slide', target: 'Serratus', sec: ['Shoulders'], eq: 'FoamRoller', pat: 'Empuje Vertical' },
  { id: 'prone-y-raise-bench', name: 'Elevaciones en Y Boca Abajo para Trapecio Inferior', nameEn: 'Prone Incline Bench Y-Raise', target: 'Traps', sec: ['Shoulders'], eq: 'Dumbbell', pat: 'Tirón Vertical' },
  { id: 'prone-t-raise-bench', name: 'Elevaciones en T Boca Abajo para Romboides', nameEn: 'Prone Incline Bench T-Raise', target: 'Back', sec: ['Traps'], eq: 'Dumbbell', pat: 'Tirón Horizontal' },
  { id: 'prone-w-raise-bench', name: 'Elevaciones en W Boca Abajo para Manguito Rotador', nameEn: 'Prone Incline Bench W-Raise', target: 'Shoulders', sec: ['Traps'], eq: 'Dumbbell', pat: 'Tirón Horizontal' },
  { id: 'external-rotation-cable-neutral', name: 'Rotación Externa de Hombro en Polea a 0 Grados', nameEn: 'Standing Cable Shoulder External Rotation', target: 'Shoulders', sec: [], eq: 'Cable', uni: true, pat: 'Rotación' },
  { id: 'internal-rotation-cable-neutral', name: 'Rotación Interna de Hombro en Polea', nameEn: 'Standing Cable Shoulder Internal Rotation', target: 'Shoulders', sec: ['Chest'], eq: 'Cable', uni: true, pat: 'Rotación' },
  { id: 'external-rotation-90-90-cable', name: 'Rotación Externa a 90/90 de Abducción en Polea', nameEn: '90/90 Cable Shoulder External Rotation', target: 'Shoulders', sec: [], eq: 'Cable', uni: true, pat: 'Rotación', diff: 'Intermedio' },
  { id: 'banded-clamshell-tempo', name: 'Almejas con Banda y Pausa Isométrica para Glúteo Medio', nameEn: 'Banded Tempo Clamshell Holds', target: 'Glutes', sec: ['Abductors'], eq: 'Band', uni: true, pat: 'Movilidad' },
  { id: 'glute-kickback-cable', name: 'Patada de Glúteo en Polea Baja con Tobillera', nameEn: 'Standing Cable Glute Kickback', target: 'Glutes', sec: ['Hamstrings'], eq: 'Cable', uni: true, pat: 'Bisagra de Cadera' },
  { id: 'standing-hip-abduction-cable', name: 'Abducción de Cadera de Pie en Polea', nameEn: 'Standing Cable Hip Abduction', target: 'Abductors', sec: ['Glutes'], eq: 'Cable', uni: true, pat: 'Movilidad' },
  { id: 'standing-hip-adduction-cable', name: 'Aducción de Cadera de Pie en Polea', nameEn: 'Standing Cable Hip Adduction', target: 'Adductors', sec: [], eq: 'Cable', uni: true, pat: 'Movilidad' },
  { id: 'tibialis-raise-weighted-bar', name: 'Elevación de Tibial con Barra de Tobillo (Tib Bar)', nameEn: 'Weighted Tib Bar Tibialis Raise', target: 'Calves', sec: [], eq: 'Dumbbell', pat: 'Movilidad' },
  { id: 'slant-board-calf-stretch-eccentric', name: 'Descensos Excéntricos de Gemelo en Tabla Inclinada', nameEn: 'Slant Board Eccentric Calf Drops', target: 'Calves', sec: [], uni: true, pat: 'Movilidad' },
  { id: 'single-leg-isometric-split-squat-hold', name: 'Sostenimiento Isométrico en Sentadilla Split', nameEn: 'Long-Duration Isometric Split Squat Hold', target: 'Quads', sec: ['Glutes', 'Calves'], uni: true, pat: 'Estocada' },
  { id: 'spanish-squat-banded', name: 'Sentadilla Española con Correa para Tendinopatía Patelar', nameEn: 'Banded Spanish Squat for Patellar Tendon', target: 'Quads', sec: [], eq: 'Band', pat: 'Sentadilla' },
  { id: 'peterson-step-up', name: 'Step-Up Peterson con Apoyo Metatarsal', nameEn: 'Peterson Step-Up for VMO Activation', target: 'Quads', sec: ['Calves'], uni: true, pat: 'Estocada' },
  { id: 'poliquin-step-up-slant-board', name: 'Step-Up Poliquin en Tabla Inclinada', nameEn: 'Poliquin Step-Up on Slant Board', target: 'Quads', sec: [], uni: true, pat: 'Estocada' },
  { id: 'atg-split-squat', name: 'Sentadilla Split ATG (Rodilla sobre Puntera)', nameEn: 'ATG Full Knee Flexion Split Squat', target: 'Quads', sec: ['Glutes', 'Calves', 'HipFlexors'], diff: 'Intermedio', uni: true, pat: 'Estocada' },
  { id: 'seated-good-morning-bench', name: 'Buenos Días Sentado en Banco con Piernas Abiertas', nameEn: 'Seated Good Morning on Flat Bench', target: 'LowerBack', sec: ['Hamstrings', 'Adductors'], eq: 'Barbell', pat: 'Bisagra de Cadera' },
  { id: 'mcgill-big-three-curl-up', name: 'McGill Curl-Up de Estabilidad Lumbar Segura', nameEn: 'McGill Clinical Curl-Up', target: 'Abs', sec: [], pat: 'Anti-Extensión' },
  { id: 'mcgill-side-bridge', name: 'Puente Lateral McGill con Rodillas Flexionadas', nameEn: 'McGill Modified Side Bridge', target: 'Abs', sec: ['Glutes'], uni: true, pat: 'Anti-Rotación' },
  { id: 'prone-cobra-hold', name: 'Cobra Prona Isométrica para Cadena Posterior Alta', nameEn: 'Prone Cobra Scapular Retraction Hold', target: 'Traps', sec: ['Back', 'LowerBack'], pat: 'Movilidad' },
  { id: 'chin-tuck-neck-flexion', name: 'Retracción Cervical (Chin Tuck contra la Pared)', nameEn: 'Chin Tuck Neck Deep Flexor Activation', target: 'Traps', sec: [], pat: 'Movilidad' },
  { id: 'wrist-curls-dumbbell', name: 'Curl de Muñeca Supino con Mancuerna para Antebrazo', nameEn: 'Seated Dumbbell Wrist Curl', target: 'Forearms', sec: [], eq: 'Dumbbell', pat: 'Tirón Horizontal' },
  { id: 'reverse-wrist-curls-dumbbell', name: 'Curl de Muñeca Prono Inverso para Extensores', nameEn: 'Seated Dumbbell Reverse Wrist Curl', target: 'Forearms', sec: [], eq: 'Dumbbell', pat: 'Empuje Horizontal' },
  { id: 'wrist-radial-ulnar-deviation', name: 'Desviación Radial y Cubital con Barra de Palanca', nameEn: 'Lever Bar Radial and Ulnar Wrist Deviations', target: 'Forearms', sec: [], eq: 'Dumbbell', pat: 'Movilidad' },
  { id: 'wrist-pronator-supinator-dumbbell', name: 'Pronación y Supinación de Muñeca con Martillo', nameEn: 'Forearm Pronation and Supination with Hammer', target: 'Forearms', sec: [], eq: 'Dumbbell', uni: true, pat: 'Rotación' },
  { id: 'seated-calf-stretch-towel', name: 'Estiramiento Asistido de Gemelo con Toalla', nameEn: 'Towel-Assisted Gastrocnemius Stretch', target: 'Calves', sec: [], pat: 'Estiramiento' },
  { id: 'wall-sit-isometric', name: 'Sentadilla Isométrica contra la Pared (Wall Sit)', nameEn: 'Wall Sit Isometric Hold', target: 'Quads', sec: ['Glutes', 'Calves'], pat: 'Sentadilla' },
  { id: 'hamstring-bridge-isometric-bench', name: 'Puente de Isquiotibiales con Pies en Banco', nameEn: 'Long-Lever Hamstring Bridge on Bench', target: 'Hamstrings', sec: ['Glutes'], pat: 'Bisagra de Cadera' },
  { id: 'single-leg-isometric-calf-raise', name: 'Sostenimiento Isométrico de Gemelo en Punta de Pie', nameEn: 'Single-Leg Isometric Calf Raise Hold', target: 'Calves', sec: [], uni: true, pat: 'Sentadilla' },
  { id: 'standing-banded-hip-flexor-pull', name: 'Tracción de Flexores de Cadera de Pie con Banda', nameEn: 'Standing Banded Knee Drive / Hip Flexor Pull', target: 'HipFlexors', sec: ['Abs'], eq: 'Band', uni: true, pat: 'Movilidad' },
  { id: 'seated-hip-internal-rotation-band', name: 'Rotación Interna de Cadera Sentado con Banda', nameEn: 'Seated Hip Internal Rotation with Band', target: 'Abductors', sec: ['Glutes'], eq: 'Band', uni: true, pat: 'Rotación' },
  { id: 'side-lying-hip-abduction-straight-leg', name: 'Elevación Lateral de Pierna Recta Tumbado', nameEn: 'Side-Lying Straight Leg Hip Abduction', target: 'Abductors', sec: ['Glutes'], uni: true, pat: 'Movilidad' }
];

rehabDefs.forEach(r => {
  addEx({
    id: r.id,
    name: r.name,
    nameEn: r.nameEn,
    primaryMuscle: r.target,
    secondaryMuscles: r.sec,
    stabilizers: ['Abs'],
    equipment: r.eq || 'Bodyweight',
    difficulty: r.diff || 'Principiante',
    category: 'Rehabilitación',
    mechanics: 'Aislamiento',
    movementPattern: r.pat || 'Movilidad',
    isUnilateral: !!r.uni,
    trackingType: r.name.toLowerCase().includes('hold') || r.name.toLowerCase().includes('sit') ? 'Tiempo' : 'Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Estático',
    instructions: [
      `Colócate en la posición indicada para ${r.name.toLowerCase()} con atención rigurosa a la postura anatómica neutra.`,
      `Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en ${r.target.toLowerCase()}.`,
      `Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes.`
    ],
    tips: ['Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular.'],
    breathingCue: 'Respiración diafragmática fluida y rítmica sin aguantar el aire.',
    alternatives: ['scapular-wall-slides', 'cat-cow-stretch']
  });
});

// ========================================================
// TREN SUPERIOR E INFERIOR EXTRA (BARRA, MANCUERNAS, MÁQUINAS) (90 ejercicios)
// ========================================================
const heavyGymExtra = [
  // Pecho
  { id: 'guillotine-bench-press', name: 'Press Guillotina con Barra al Cuello', nameEn: 'Guillotine Neck Bench Press', target: 'Chest', sec: ['Shoulders'], diff: 'Avanzado', eq: 'Barbell', pat: 'Empuje Horizontal' },
  { id: 'incline-cable-chest-press', name: 'Press de Pecho Inclinado en Poleas Bajas', nameEn: 'Incline Low-to-High Cable Chest Press', target: 'Chest', sec: ['Shoulders', 'Triceps'], eq: 'Cable', pat: 'Empuje Horizontal' },
  { id: 'decline-cable-flyes', name: 'Cruces Declinados de Polea Alta hacia Abajo', nameEn: 'Decline High-to-Low Cable Flyes', target: 'Chest', sec: ['Shoulders'], eq: 'Cable', pat: 'Empuje Horizontal' },
  { id: 'floor-press-barbell', name: 'Press en el Suelo con Barra Olímpica', nameEn: 'Barbell Floor Press', target: 'Chest', sec: ['Triceps', 'Shoulders'], eq: 'Barbell', pat: 'Empuje Horizontal' },
  { id: 'dumbbell-pullover-chest', name: 'Pull-Over con Mancuerna Cruzado en Banco', nameEn: 'Cross-Bench Dumbbell Pullover', target: 'Chest', sec: ['Lats', 'Triceps', 'Serratus'], eq: 'Dumbbell', pat: 'Empuje Horizontal' },
  { id: 'smith-machine-incline-press', name: 'Press Inclinado en Máquina Smith', nameEn: 'Smith Machine Incline Bench Press', target: 'Chest', sec: ['Shoulders', 'Triceps'], eq: 'SmithMachine', pat: 'Empuje Horizontal' },
  { id: 'smith-machine-flat-press', name: 'Press Plano en Máquina Smith', nameEn: 'Smith Machine Flat Bench Press', target: 'Chest', sec: ['Shoulders', 'Triceps'], eq: 'SmithMachine', pat: 'Empuje Horizontal' },
  { id: 'neutral-grip-dumbbell-bench-press', name: 'Press de Banca con Mancuernas en Agarre Neutro', nameEn: 'Neutral Grip Dumbbell Bench Press', target: 'Chest', sec: ['Triceps', 'Shoulders'], eq: 'Dumbbell', pat: 'Empuje Horizontal' },
  
  // Espalda y Dorsales
  { id: 'pendlay-row-barbell', name: 'Remo Pendlay Estricto desde el Suelo', nameEn: 'Strict Pendlay Barbell Row', target: 'Back', sec: ['Lats', 'Hamstrings', 'Traps'], diff: 'Avanzado', eq: 'Barbell', pat: 'Tirón Horizontal' },
  { id: 'yates-row-underhand', name: 'Remo Yates con Agarre Supino Invertido', nameEn: 'Yates Underhand Barbell Row', target: 'Back', sec: ['Biceps', 'Lats'], eq: 'Barbell', pat: 'Tirón Horizontal' },
  { id: 'kroc-row-heavy-dumbbell', name: 'Remo Kroc Pesado a Altas Repeticiones', nameEn: 'Heavy Kroc Dumbbell Row', target: 'Back', sec: ['Forearms', 'Biceps', 'Traps'], diff: 'Avanzado', eq: 'Dumbbell', uni: true, pat: 'Tirón Horizontal' },
  { id: 'meadows-row-landmine', name: 'Remo Meadows en Landmine con Agarre Prono', nameEn: 'Meadows Landmine Single-Arm Row', target: 'Back', sec: ['Lats', 'Forearms'], diff: 'Intermedio', eq: 'Barbell', uni: true, pat: 'Tirón Horizontal' },
  { id: 'seal-row-dumbbell-bench', name: 'Remo Foca en Banco Elevado (Seal Row)', nameEn: 'Seal Row with Dumbbells on High Bench', target: 'Back', sec: ['Traps', 'Biceps'], eq: 'Dumbbell', pat: 'Tirón Horizontal' },
  { id: 'mag-grip-lat-pulldown', name: 'Jalón al Pecho con Agarre Neutro Ergonómico (MAG)', nameEn: 'MAG Grip Neutral Lat Pulldown', target: 'Lats', sec: ['Biceps', 'Back'], eq: 'Cable', pat: 'Tirón Vertical' },
  { id: 'kneeling-single-arm-lat-pulldown', name: 'Jalón Unilateral Arrodillado en Polea', nameEn: 'Kneeling Single-Arm Cable Lat Pulldown', target: 'Lats', sec: ['Biceps'], eq: 'Cable', uni: true, pat: 'Tirón Vertical' },
  { id: 'lat-prayer-pulldown-rope', name: 'Oración Dorsal con Cuerda en Polea Alta', nameEn: 'Kneeling Cable Lat Prayer Pullover', target: 'Lats', sec: ['Back', 'Triceps'], eq: 'Cable', pat: 'Tirón Vertical' },
  { id: 'trap-bar-deadlift-high-handles', name: 'Peso Muerto en Barra Hexagonal (Asas Altas)', nameEn: 'Trap Bar Deadlift High Handles', target: 'Quads', sec: ['Glutes', 'Hamstrings', 'Traps', 'Back'], eq: 'Trap Bar', pat: 'Bisagra de Cadera' },
  { id: 'trap-bar-deadlift-low-handles', name: 'Peso Muerto en Barra Hexagonal (Asas Bajas)', nameEn: 'Trap Bar Deadlift Low Handles', target: 'Hamstrings', sec: ['Glutes', 'Quads', 'Traps'], eq: 'Trap Bar', diff: 'Intermedio', pat: 'Bisagra de Cadera' },
  { id: 'rack-pull-above-knee', name: 'Rack Pull por Encima de las Rodillas', nameEn: 'Above-the-Knee Barbell Rack Pull', target: 'Traps', sec: ['Back', 'Glutes', 'Forearms'], diff: 'Avanzado', eq: 'Barbell', pat: 'Bisagra de Cadera' },
  { id: 'snatch-grip-barbell-shrug', name: 'Encogimientos con Barra Agarre de Arrancada', nameEn: 'Snatch-Grip Barbell Shrug', target: 'Traps', sec: ['Forearms'], eq: 'Barbell', pat: 'Tirón Vertical' },
  { id: 'dumbbell-incline-shrug', name: 'Encogimientos con Mancuernas en Banco Inclinado', nameEn: 'Prone Incline Dumbbell Shrug', target: 'Traps', sec: ['Back'], eq: 'Dumbbell', pat: 'Tirón Horizontal' },

  // Hombros
  { id: 'seated-behind-neck-press', name: 'Press Tras Nuca Sentado con Barra', nameEn: 'Seated Behind-the-Neck Barbell Press', target: 'Shoulders', sec: ['Triceps', 'Traps'], diff: 'Avanzado', eq: 'Barbell', pat: 'Empuje Vertical' },
  { id: 'z-press-barbell-floor', name: 'Z-Press con Barra Sentado en el Suelo', nameEn: 'Barbell Z-Press on Floor', target: 'Shoulders', sec: ['Abs', 'Triceps', 'Traps'], diff: 'Avanzado', eq: 'Barbell', pat: 'Empuje Vertical' },
  { id: 'z-press-dumbbell-floor', name: 'Z-Press con Mancuernas en el Suelo', nameEn: 'Dumbbell Z-Press on Floor', target: 'Shoulders', sec: ['Abs', 'Triceps'], diff: 'Intermedio', eq: 'Dumbbell', pat: 'Empuje Vertical' },
  { id: 'cable-lateral-raise-behind-back', name: 'Elevaciones Laterales en Polea por Detrás de la Espalda', nameEn: 'Behind-the-Back Cable Lateral Raise', target: 'Shoulders', sec: [], eq: 'Cable', uni: true, pat: 'Empuje Vertical' },
  { id: 'egyptian-cable-lateral-raise', name: 'Elevación Lateral Egipcia Inclinada en Polea', nameEn: 'Leaning Egyptian Cable Lateral Raise', target: 'Shoulders', sec: [], eq: 'Cable', uni: true, pat: 'Empuje Vertical' },
  { id: 'dumbbell-lu-raises', name: 'Elevaciones Lu Xiaojun Completas sobre Cabeza', nameEn: 'Dumbbell Lu Lateral Overhead Raises', target: 'Shoulders', sec: ['Traps'], eq: 'Dumbbell', pat: 'Empuje Vertical' },
  { id: 'machine-lateral-raise', name: 'Elevaciones Laterales en Máquina de Deltoides', nameEn: 'Machine Lateral Raise', target: 'Shoulders', sec: [], eq: 'Machine', pat: 'Empuje Vertical' },
  { id: 'reverse-pec-deck-rear-delts', name: 'Pájaro en Máquina Pec-Deck Inversa', nameEn: 'Reverse Pec-Deck Rear Delt Flye', target: 'Shoulders', sec: ['Traps', 'Back'], eq: 'Machine', pat: 'Tirón Horizontal' },
  { id: 'incline-dumbbell-rear-delt-flye', name: 'Pájaros con Mancuernas en Banco Inclinado', nameEn: 'Incline Prone Dumbbell Rear Delt Flye', target: 'Shoulders', sec: ['Back', 'Traps'], eq: 'Dumbbell', pat: 'Tirón Horizontal' },

  // Brazos
  { id: 'preacher-curl-ez-bar-machine', name: 'Curl Predicador en Máquina de Palanca', nameEn: 'Machine Preacher Arm Curl', target: 'Biceps', sec: ['Forearms'], eq: 'Machine', pat: 'Tirón Vertical' },
  { id: 'cable-biceps-curl-straight-bar', name: 'Curl de Bíceps con Barra Recta en Polea Baja', nameEn: 'Standing Low Cable Biceps Curl', target: 'Biceps', sec: ['Forearms'], eq: 'Cable', pat: 'Tirón Vertical' },
  { id: 'concentration-curl-seated', name: 'Curl Concentrado con Mancuerna Apoyo en Muslo', nameEn: 'Seated Concentration Dumbbell Curl', target: 'Biceps', sec: ['Forearms'], eq: 'Dumbbell', uni: true, pat: 'Tirón Vertical' },
  { id: 'drag-curl-barbell', name: 'Drag Curl con Barra Rozando el Torso', nameEn: 'Barbell Drag Curl', target: 'Biceps', sec: ['Forearms'], eq: 'Barbell', pat: 'Tirón Vertical' },
  { id: 'waiter-curl-dumbbell', name: 'Curl del Camarero con Una Sola Mancuerna', nameEn: 'Waiter Dumbbell Biceps Curl', target: 'Biceps', sec: ['Forearms'], eq: 'Dumbbell', pat: 'Tirón Vertical' },
  { id: 'cross-body-hammer-curl', name: 'Curl Martillo Cruzado al Pecho con Mancuerna', nameEn: 'Cross-Body Dumbbell Hammer Curl', target: 'Forearms', sec: ['Biceps'], eq: 'Dumbbell', uni: true, pat: 'Tirón Vertical' },
  { id: 'reverse-curl-ez-bar', name: 'Curl Invertido con Barra Z para Braquiorradial', nameEn: 'EZ-Bar Reverse Grip Biceps Curl', target: 'Forearms', sec: ['Biceps'], eq: 'EZBar', pat: 'Tirón Vertical' },
  { id: 'seated-triceps-dip-machine', name: 'Fondos de Tríceps Sentado en Máquina', nameEn: 'Seated Dip Machine for Triceps', target: 'Triceps', sec: ['Chest', 'Shoulders'], eq: 'Machine', pat: 'Empuje Vertical' },
  { id: 'tate-press-dumbbells', name: 'Press Tate con Mancuernas en Banco Plano', nameEn: 'Flat Bench Dumbbell Tate Press', target: 'Triceps', sec: ['Chest'], eq: 'Dumbbell', pat: 'Empuje Horizontal' },
  { id: 'california-press-barbell', name: 'Press California (Híbrido Cerrado + Press Francés)', nameEn: 'Barbell California Press', target: 'Triceps', sec: ['Chest', 'Shoulders'], diff: 'Intermedio', eq: 'Barbell', pat: 'Empuje Horizontal' },
  { id: 'cable-kickback-triceps', name: 'Patada de Tríceps Unilateral en Polea Baja', nameEn: 'Single-Arm Cable Triceps Kickback', target: 'Triceps', sec: [], eq: 'Cable', uni: true, pat: 'Empuje Horizontal' },
  { id: 'diamond-pushdown-cable', name: 'Extensión de Tríceps con Agarre en V en Polea', nameEn: 'V-Bar Cable Triceps Pushdown', target: 'Triceps', sec: ['Forearms'], eq: 'Cable', pat: 'Empuje Vertical' },

  // Piernas
  { id: 'zercher-squat-barbell', name: 'Sentadilla Zercher con Barra en el Pliegue de los Codos', nameEn: 'Zercher Squat with Barbell in Elbow Crook', target: 'Quads', sec: ['Glutes', 'Back', 'Abs', 'Biceps'], diff: 'Avanzado', eq: 'Barbell', pat: 'Sentadilla' },
  { id: 'box-squat-barbell', name: 'Sentadilla a Cajón con Barra Olímpica', nameEn: 'Barbell Box Squat with Pause', target: 'Glutes', sec: ['Quads', 'Hamstrings'], eq: 'Barbell', pat: 'Sentadilla' },
  { id: 'safety-bar-squat', name: 'Sentadilla con Barra de Seguridad (SSB Squat)', nameEn: 'Safety Squat Bar (SSB) Squat', target: 'Quads', sec: ['Glutes', 'Back'], eq: 'Barbell', pat: 'Sentadilla' },
  { id: 'pin-squat-anderson', name: 'Sentadilla Concéntrica desde Soportes (Anderson Squat)', nameEn: 'Pin Squat / Anderson Squat', target: 'Quads', sec: ['Glutes'], diff: 'Avanzado', eq: 'Barbell', pat: 'Sentadilla' },
  { id: 'belt-squat-machine', name: 'Sentadilla con Cinturón en Máquina (Belt Squat)', nameEn: 'Belt Squat Machine (Spinal-Free)', target: 'Quads', sec: ['Glutes', 'Calves'], eq: 'Machine', pat: 'Sentadilla' },
  { id: 'sissy-squat-bench-machine', name: 'Sentadilla Sissy en Banco Específico Bloqueado', nameEn: 'Sissy Squat Bench Machine Isolation', target: 'Quads', sec: [], eq: 'Machine', pat: 'Sentadilla' },
  { id: 'pendulum-squat-machine', name: 'Sentadilla en Máquina de Péndulo', nameEn: 'Pendulum Squat Machine', target: 'Quads', sec: ['Glutes'], diff: 'Intermedio', eq: 'Machine', pat: 'Sentadilla' },
  { id: 'walking-lunges-barbell', name: 'Zancadas Caminando con Barra al Cuello', nameEn: 'Barbell Walking Lunges', target: 'Quads', sec: ['Glutes', 'Hamstrings', 'Calves'], diff: 'Intermedio', eq: 'Barbell', uni: true, pat: 'Estocada' },
  { id: 'reverse-lunge-smith-machine', name: 'Zancada Inversa en Máquina Smith', nameEn: 'Smith Machine Reverse Lunge', target: 'Glutes', sec: ['Quads'], eq: 'SmithMachine', uni: true, pat: 'Estocada' },
  { id: 'step-up-dumbbells-high-box', name: 'Subidas a Cajón Alto con Mancuernas', nameEn: 'High Box Step-Up with Dumbbells', target: 'Glutes', sec: ['Quads'], eq: 'Dumbbell', uni: true, pat: 'Estocada' },
  { id: 'glute-ham-raise-ghd', name: 'Elevación Glúteo-Femoral en GHD (Glute Ham Raise)', nameEn: 'Glute Ham Raise on GHD Machine', target: 'Hamstrings', sec: ['Glutes', 'Calves', 'LowerBack'], diff: 'Avanzado', eq: 'Machine', pat: 'Bisagra de Cadera' },
  { id: 'stiff-leg-deadlift-deficit', name: 'Peso Muerto Piernas Semirrígidas con Déficit', nameEn: 'Deficit Stiff-Legged Barbell Deadlift', target: 'Hamstrings', sec: ['Glutes', 'LowerBack'], diff: 'Avanzado', eq: 'Barbell', pat: 'Bisagra de Cadera' },
  { id: 'single-leg-leg-press-45', name: 'Prensa de Piernas Unilateral a 45 Grados', nameEn: 'Single-Leg 45-Degree Leg Press', target: 'Quads', sec: ['Glutes'], eq: 'Machine', uni: true, pat: 'Sentadilla' },
  { id: 'standing-single-leg-curl-machine', name: 'Curl Femoral de Pie en Máquina Unilateral', nameEn: 'Standing Single-Leg Hamstring Curl Machine', target: 'Hamstrings', sec: [], eq: 'Machine', uni: true, pat: 'Bisagra de Cadera' },
  { id: 'donkey-calf-raise-machine', name: 'Elevación de Gemelos Estilo Burro (Donkey Calf)', nameEn: 'Donkey Calf Raise Machine', target: 'Calves', sec: [], eq: 'Machine', pat: 'Sentadilla' },
  { id: 'leg-press-calf-raise', name: 'Elevación de Talones en Prensa de Piernas', nameEn: 'Leg Press Toe Press / Calf Raise', target: 'Calves', sec: [], eq: 'Machine', pat: 'Sentadilla' },
  { id: 'smith-machine-standing-calf-raise', name: 'Elevación de Talones de Pie en Máquina Smith', nameEn: 'Smith Machine Standing Calf Raise on Block', target: 'Calves', sec: [], eq: 'SmithMachine', pat: 'Sentadilla' },
  { id: 'cable-pull-through-glutes', name: 'Pull-Through en Polea Baja con Cuerda para Glúteos', nameEn: 'Low Cable Pull-Through for Glutes', target: 'Glutes', sec: ['Hamstrings', 'LowerBack'], eq: 'Cable', pat: 'Bisagra de Cadera' },
  { id: 'frog-pump-glute-bodyweight', name: 'Frog Pumps para Glúteo Mayor en Suelo', nameEn: 'High-Rep Bodyweight Frog Pumps', target: 'Glutes', sec: ['Adductors'], pat: 'Bisagra de Cadera' },
  { id: 'single-leg-hip-thrust-bench', name: 'Hip Thrust a Una Pierna en Banco con Mancuerna', nameEn: 'Single-Leg Dumbbell Hip Thrust', target: 'Glutes', sec: ['Hamstrings'], eq: 'Dumbbell', diff: 'Intermedio', uni: true, pat: 'Bisagra de Cadera' },
  { id: 'good-morning-safety-bar', name: 'Buenos Días con Barra de Seguridad (SSB)', nameEn: 'Safety Squat Bar Good Morning', target: 'Hamstrings', sec: ['Glutes', 'LowerBack'], eq: 'Barbell', diff: 'Intermedio', pat: 'Bisagra de Cadera' }
];

heavyGymExtra.forEach(h => {
  addEx({
    id: h.id,
    name: h.name,
    nameEn: h.nameEn,
    primaryMuscle: h.target,
    secondaryMuscles: h.sec,
    stabilizers: ['Abs'],
    equipment: h.eq || 'Barbell',
    difficulty: h.diff || 'Principiante',
    category: 'Hipertrofia',
    mechanics: h.name.toLowerCase().includes('curl') || h.name.toLowerCase().includes('raise') || h.name.toLowerCase().includes('flye') ? 'Aislamiento' : 'Compuesto',
    movementPattern: h.pat || 'Sentadilla',
    isUnilateral: !!h.uni,
    trackingType: 'Peso×Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Empuje',
    instructions: [
      `Ajusta el equipamiento y adopta la colocación anatómica de inicio para ${h.name.toLowerCase()}.`,
      `Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.`,
      `Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular.`
    ],
    tips: ['Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga.'],
    breathingCue: 'Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.',
    alternatives: ['barbell-bench-press', 'barbell-back-squat']
  });
});

fs.writeFileSync(
  path.join(__dirname, '../src/data/batches/batch_06_rehab_gym_extra100.json'),
  JSON.stringify(generated, null, 2),
  'utf8'
);

console.log(`✅ Lote 06 (Rehabilitación y Tren Superior/Inferior de Gimnasio - ${generated.length} ejercicios) generado con éxito.`);
