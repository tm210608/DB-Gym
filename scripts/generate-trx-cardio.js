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
// A. ENTRENAMIENTO EN SUSPENSIÓN (TRX / RINGS) (35 ejercicios)
// ========================================================
const trxDefs = [
  { id: 'trx-chest-press', name: 'Press de Pecho en Suspensión (TRX Chest Press)', nameEn: 'TRX Suspension Chest Press', target: 'Chest', sec: ['Triceps', 'Shoulders'], pat: 'Empuje Horizontal' },
  { id: 'trx-chest-flye', name: 'Aperturas de Pecho en Suspensión (TRX Flye)', nameEn: 'TRX Suspension Chest Flye', target: 'Chest', sec: ['Shoulders'], pat: 'Empuje Horizontal' },
  { id: 'trx-inverted-row-high', name: 'Remo Invertido en TRX Agarre Alto', nameEn: 'TRX High Inverted Row', target: 'Back', sec: ['Traps', 'Biceps'], pat: 'Tirón Horizontal' },
  { id: 'trx-low-row-neutral', name: 'Remo en TRX con Agarre Neutro al Torso', nameEn: 'TRX Low Neutral Grip Row', target: 'Lats', sec: ['Biceps', 'Back'], pat: 'Tirón Horizontal' },
  { id: 'trx-single-arm-power-pull', name: 'Tirón de Potencia con Rotación en TRX (Power Pull)', nameEn: 'TRX Single-Arm Rotational Power Pull', target: 'Back', sec: ['Abs', 'Shoulders'], uni: true, pat: 'Rotación' },
  { id: 'trx-y-flye-deltoids', name: 'Aperturas en Y en Suspensión para Deltoides Posterior', nameEn: 'TRX Y-Deltoid Flye', target: 'Shoulders', sec: ['Traps'], pat: 'Tirón Horizontal' },
  { id: 'trx-t-flye-rhomboids', name: 'Aperturas en T en Suspensión para Romboides', nameEn: 'TRX T-Flye for Upper Back and Rhomboids', target: 'Back', sec: ['Traps', 'Shoulders'], pat: 'Tirón Horizontal' },
  { id: 'trx-biceps-curl-overhead', name: 'Curl de Bíceps en Suspensión', nameEn: 'TRX Suspension Biceps Curl', target: 'Biceps', sec: ['Forearms'], pat: 'Tirón Vertical' },
  { id: 'trx-triceps-pressdown', name: 'Extensión de Tríceps sobre Cabeza en TRX', nameEn: 'TRX Overhead Triceps Extension', target: 'Triceps', sec: ['Forearms'], pat: 'Empuje Vertical' },
  { id: 'trx-pistol-squat-assisted', name: 'Sentadilla Pistola Asistida con TRX', nameEn: 'TRX Assisted Single-Leg Pistol Squat', target: 'Quads', sec: ['Glutes', 'Calves'], uni: true, pat: 'Sentadilla' },
  { id: 'trx-hamstring-curl-supine', name: 'Curl de Isquiotibiales en Suspensión Boca Arriba', nameEn: 'TRX Supine Hamstring Runner Curl', target: 'Hamstrings', sec: ['Glutes', 'Calves'], pat: 'Bisagra de Cadera' },
  { id: 'trx-atomic-push-up', name: 'Flexión Atómica con Pies en TRX (Push-Up + Crunch)', nameEn: 'TRX Atomic Push-Up to Pike', target: 'Chest', sec: ['Abs', 'Triceps', 'Shoulders'], pat: 'Empuje Horizontal' },
  { id: 'trx-plank-feet-suspended', name: 'Plancha Isométrica con Pies en TRX', nameEn: 'TRX Suspended Feet Forearm Plank', target: 'Abs', sec: ['Glutes', 'Shoulders'], pat: 'Anti-Extensión' },
  { id: 'trx-side-plank-suspended', name: 'Plancha Lateral con Pies Suspendidos en TRX', nameEn: 'TRX Suspended Side Plank', target: 'Abs', sec: ['Glutes'], uni: true, pat: 'Anti-Rotación' },
  { id: 'trx-pikes-abdominals', name: 'Pica Abdominal en Suspensión (TRX Pike)', nameEn: 'TRX Abdominal Pike Drill', target: 'Abs', sec: ['Shoulders'], pat: 'Anti-Extensión' },
  { id: 'trx-mountain-climbers', name: 'Escaladores Suspendidos en TRX', nameEn: 'TRX Suspended Mountain Climbers', target: 'Abs', sec: ['Shoulders', 'HipFlexors'], pat: 'Anti-Extensión' },
  { id: 'trx-suspended-lunge', name: 'Zancada Búlgara en Suspensión (TRX Suspended Lunge)', nameEn: 'TRX Rear-Foot Suspended Lunge', target: 'Quads', sec: ['Glutes'], uni: true, pat: 'Estocada' },
  { id: 'trx-cossack-squat-assisted', name: 'Sentadilla Cosaca Lateral Asistida en TRX', nameEn: 'TRX Assisted Lateral Cossack Squat', target: 'Adductors', sec: ['Quads', 'Glutes'], uni: true, pat: 'Estocada' },
  { id: 'trx-clock-press', name: 'Press del Reloj Asimétrico en Suspensión', nameEn: 'TRX Clock Press Multi-Angle Chest', target: 'Chest', sec: ['Shoulders', 'Triceps'], uni: true, pat: 'Empuje Horizontal' },
  { id: 'trx-alligator-jaw-flye', name: 'Apertura Cocodrilo Asimétrica en TRX', nameEn: 'TRX Alligator Diagonal Shoulder Flye', target: 'Shoulders', sec: ['Back', 'Abs'], uni: true, pat: 'Tirón Horizontal' },
  { id: 'trx-curtsy-lunge-balance', name: 'Zancada Cruzada de Reverencia con TRX', nameEn: 'TRX Balance Curtsy Lunge', target: 'Glutes', sec: ['Quads', 'Abductors'], uni: true, pat: 'Estocada' },
  { id: 'trx-sprinter-start', name: 'Salida de Velocista en Suspensión (Sprinter Start)', nameEn: 'TRX Sprinter Start Explosive Drive', target: 'Quads', sec: ['Glutes', 'Calves'], uni: true, pat: 'Estocada' },
  { id: 'trx-single-leg-deadlift', name: 'Peso Muerto Unilateral Asistido en TRX', nameEn: 'TRX Assisted Single-Leg RDL', target: 'Hamstrings', sec: ['Glutes', 'Abs'], uni: true, pat: 'Bisagra de Cadera' },
  { id: 'trx-body-saw-plank', name: 'Sierra Corporal Suspendida en TRX', nameEn: 'TRX Suspended Body Saw Plank', target: 'Abs', sec: ['Shoulders'], pat: 'Anti-Extensión' },
  { id: 'trx-pendulum-oblique-swings', name: 'Péndulo de Piernas Suspendidas para Oblicuos', nameEn: 'TRX Suspended Oblique Pendulum Swings', target: 'Abs', sec: ['Shoulders'], pat: 'Rotación' },
  { id: 'trx-face-pull-high', name: 'Face Pull en TRX con Rotación Externa', nameEn: 'TRX High Face Pull and External Rotate', target: 'Shoulders', sec: ['Traps'], pat: 'Tirón Horizontal' },
  { id: 'trx-w-flye-external-rotation', name: 'Aperturas en W en Suspensión', nameEn: 'TRX W-Flye for Rotator Cuff and Mid Back', target: 'Shoulders', sec: ['Traps'], pat: 'Tirón Horizontal' },
  { id: 'trx-squat-jump-power', name: 'Sentadilla con Salto Asistida por TRX', nameEn: 'TRX Assisted Plyometric Squat Jump', target: 'Quads', sec: ['Glutes', 'Calves'], pat: 'Explosivo' },
  { id: 'trx-hip-abduction-supine', name: 'Abducción de Cadera con Pies Suspendidos', nameEn: 'TRX Supine Suspended Hip Abduction', target: 'Abductors', sec: ['Glutes'], pat: 'Movilidad' },
  { id: 'trx-hip-press-bridge', name: 'Puente de Caderas con Talones en TRX', nameEn: 'TRX Suspended Glute Bridge Press', target: 'Glutes', sec: ['Hamstrings'], pat: 'Bisagra de Cadera' },
  { id: 'trx-rollout-core', name: 'Rollout Abdominal en TRX de Pie', nameEn: 'TRX Standing Abdominal Rollout', target: 'Abs', sec: ['Lats', 'Shoulders'], pat: 'Anti-Extensión' },
  { id: 'trx-overhead-squat', name: 'Sentadilla Profunda con Brazos en Y en TRX', nameEn: 'TRX Overhead Deep Squat Mobility', target: 'Quads', sec: ['Shoulders', 'Back'], pat: 'Sentadilla' },
  { id: 'trx-swimmer-pull', name: 'Tirón de Nadador con Brazos Rectos en TRX', nameEn: 'TRX Straight-Arm Swimmer Lat Pull', target: 'Lats', sec: ['Triceps', 'Back'], pat: 'Tirón Vertical' },
  { id: 'trx-side-lunge-assisted', name: 'Zancada Lateral Asistida con TRX', nameEn: 'TRX Assisted Lateral Lunge', target: 'Quads', sec: ['Adductors', 'Glutes'], uni: true, pat: 'Estocada' },
  { id: 'trx-burpee-single-leg', name: 'Burpee Unilateral con Pie en TRX (Avanzado)', nameEn: 'TRX Single-Leg Suspended Burpee', target: 'Cardio', sec: ['Chest', 'Quads', 'Abs'], diff: 'Avanzado', uni: true, pat: 'Explosivo' }
];

trxDefs.forEach(t => {
  addEx({
    id: t.id,
    name: t.name,
    nameEn: t.nameEn,
    primaryMuscle: t.target,
    secondaryMuscles: t.sec,
    stabilizers: ['Abs'],
    equipment: 'TRX',
    difficulty: t.diff || 'Principiante',
    category: 'Funcional',
    mechanics: 'Compuesto',
    movementPattern: t.pat || 'Empuje Horizontal',
    isUnilateral: !!t.uni,
    trackingType: t.name.toLowerCase().includes('plank') ? 'Tiempo' : 'Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Empuje',
    instructions: [
      `Ajusta la longitud de las correas y fija los anclajes con tensión constante para ${t.name.toLowerCase()}.`,
      `Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.`,
      `Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas.`
    ],
    tips: ['Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje.'],
    breathingCue: 'Exhala en el esfuerzo principal; inhala al retornar con control.',
    alternatives: ['push-up', 'inverted-row']
  });
});

// ========================================================
// B. CARDIO FUNCIONAL Y METABÓLICO (HIIT / RESISTENCIA) (30 ejercicios)
// ========================================================
const cardioDefs = [
  { id: 'assault-bike-sprint', name: 'Sprint Máximo en Bicicleta de Aire (Air Bike)', nameEn: 'Air Bike All-Out Sprint', target: 'Cardio', sec: ['Quads', 'Shoulders', 'Lats'] },
  { id: 'rowing-machine-500m', name: 'Remoergómetro Prueba de 500 Metros', nameEn: 'Concept2 Rowing Machine 500m Sprint', target: 'Cardio', sec: ['Back', 'Quads', 'Hamstrings', 'Biceps'] },
  { id: 'ski-erg-intervals', name: 'Intervalos en Simulador de Esquí (SkiErg)', nameEn: 'Concept2 SkiErg Sprint Intervals', target: 'Cardio', sec: ['Lats', 'Abs', 'Triceps'] },
  { id: 'battle-ropes-waves-alternating', name: 'Olas Alternas con Cuerdas de Batalla', nameEn: 'Alternating Battle Rope Waves', target: 'Cardio', sec: ['Shoulders', 'Forearms', 'Abs'], eq: 'Rope' },
  { id: 'battle-ropes-double-slams', name: 'Slams Dobles con Cuerdas de Batalla al Suelo', nameEn: 'Double Battle Rope Power Slams', target: 'Cardio', sec: ['Lats', 'Shoulders', 'Abs'], eq: 'Rope' },
  { id: 'battle-ropes-snake-variations', name: 'Movimiento de Serpiente con Cuerdas de Batalla', nameEn: 'Snake Waves on Battle Ropes', target: 'Cardio', sec: ['Chest', 'Shoulders'], eq: 'Rope' },
  { id: 'treadmill-incline-power-walk', name: 'Marcha Rápida en Cinta con Inclinación Máxima', nameEn: 'Steep Incline Treadmill Power Walk', target: 'Cardio', sec: ['Calves', 'Glutes', 'Hamstrings'], eq: 'Machine' },
  { id: 'stairmaster-intervals', name: 'Escaladora Continua en Intervalos (StairMaster)', nameEn: 'StairMaster Step Climber Intervals', target: 'Cardio', sec: ['Glutes', 'Quads', 'Calves'], eq: 'Machine' },
  { id: 'jump-rope-double-unders', name: 'Saltos Dobles a la Comba (Double Unders)', nameEn: 'CrossFit Double Unders Jump Rope', target: 'Cardio', sec: ['Calves', 'Forearms'], diff: 'Avanzado', eq: 'Rope' },
  { id: 'shuttle-run-suicides', name: 'Carrera de Lanzadera de Conos (Suicidios)', nameEn: 'Pro Agility Shuttle Run Drill', target: 'Cardio', sec: ['Quads', 'Glutes', 'Calves'] },
  { id: 'boxer-skip-jump-rope', name: 'Paso de Boxeador Cruzado con Comba', nameEn: 'Boxer Skip Rhythm Jump Rope', target: 'Cardio', sec: ['Calves'] },
  { id: 'lateral-skater-bounds-continuous', name: 'Saltos de Patinador Continuos de Resistencia', nameEn: 'Continuous Lateral Skater Cardio', target: 'Cardio', sec: ['Glutes', 'Abductors'] },
  { id: 'plyometric-lunges-continuous', name: 'Zancadas Pliométricas Alternadas Rápidas', nameEn: 'Fast Jumping Switch Lunges', target: 'Cardio', sec: ['Quads', 'Glutes'] },
  { id: 'high-knee-sprint-rope', name: 'Sprint de Rodillas Arriba con Cuerda', nameEn: 'High-Knee Sprint with Jump Rope', target: 'Cardio', sec: ['Calves', 'Abs'] },
  { id: 'shadow-box-high-intensity', name: 'Sombra de Golpeo Continuo a Alta Intensidad', nameEn: 'High-Intensity Shadow Boxing Interval', target: 'Cardio', sec: ['Shoulders', 'Abs'] },
  { id: 'sled-sprint-high-speed', name: 'Sprint con Empuje de Trineo Ligero', nameEn: 'High-Speed Sled Push Sprint', target: 'Cardio', sec: ['Quads', 'Calves'], eq: 'Sled' },
  { id: 'bear-crawl-sprint-forward', name: 'Gateo del Oso a Máxima Velocidad Frontal', nameEn: 'High-Speed Bear Crawl Sprint', target: 'Cardio', sec: ['Abs', 'Shoulders'] },
  { id: 'gorilla-hops-cardio', name: 'Saltos de Gorila Laterales Continuos', nameEn: 'Lateral Gorilla Hops Cardio Drill', target: 'Cardio', sec: ['Quads', 'Glutes'] },
  { id: 'fast-feet-football-drill', name: 'Pies Rápidos en el Sitio (Fast Feet Drill)', nameEn: 'Rapid Fire Fast Feet Football Drill', target: 'Cardio', sec: ['Calves', 'Quads'] },
  { id: 'agility-ladder-in-and-out', name: 'Escalera de Agilidad: Entradas y Salidas', nameEn: 'Agility Ladder In-and-Out Footwork', target: 'Cardio', sec: ['Calves'] },
  { id: 'agility-ladder-icky-shuffle', name: 'Escalera de Agilidad: Icky Shuffle Rítmico', nameEn: 'Agility Ladder Icky Shuffle Drill', target: 'Cardio', sec: ['Calves', 'Glutes'] },
  { id: 'jumping-jack-crossover', name: 'Saltos de Tijera con Cruce de Brazos y Pies', nameEn: 'Crossover Jumping Jacks', target: 'Cardio', sec: ['Shoulders', 'Calves'] },
  { id: 'tuck-jump-burpee-complex', name: 'Burpee Explosivo con Salto de Rodillas al Pecho', nameEn: 'Burpee to Tuck Jump Complex', target: 'Cardio', sec: ['Chest', 'Quads', 'Abs'], diff: 'Avanzado' },
  { id: 'half-burpee-speed', name: 'Medio Burpee de Velocidad (Speed Sprawl)', nameEn: 'Speed Half Burpee without Push-Up', target: 'Cardio', sec: ['Abs', 'Quads'] },
  { id: 'seal-jacks-chest', name: 'Saltos de Foca con Palmada Frontal', nameEn: 'Seal Jacks Cardio Drill', target: 'Cardio', sec: ['Chest', 'Calves'] },
  { id: 'butt-kick-heel-taps', name: 'Talones a Glúteos con Toque de Manos Atrás', nameEn: 'Heel Tap Butt Kicks Fast Pace', target: 'Cardio', sec: ['Hamstrings', 'Calves'] },
  { id: 'single-under-crossover-rope', name: 'Salto con Cruzada de Cuerda (Criss-Cross)', nameEn: 'Criss-Cross Jump Rope Drill', target: 'Cardio', sec: ['Forearms', 'Calves'] },
  { id: 'broad-jump-to-backpedal', name: 'Salto de Longitud con Carrera de Retroceso', nameEn: 'Broad Jump with Fast Backpedal', target: 'Cardio', sec: ['Glutes', 'Quads'] },
  { id: 'jumping-rope-side-straddle', name: 'Salto de Comba con Apertura Lateral de Piernas', nameEn: 'Side Straddle Jump Rope Footwork', target: 'Cardio', sec: ['Calves', 'Abductors'] },
  { id: 'turbo-climbers-ground', name: 'Escaladores Turbo a Máxima Cadencia', nameEn: 'Max Cadence Turbo Mountain Climbers', target: 'Cardio', sec: ['Abs', 'Shoulders'] }
];

cardioDefs.forEach(c => {
  addEx({
    id: c.id,
    name: c.name,
    nameEn: c.nameEn,
    primaryMuscle: 'Cardio',
    secondaryMuscles: c.sec,
    stabilizers: ['Abs'],
    equipment: c.eq || 'Bodyweight',
    difficulty: c.diff || 'Principiante',
    category: 'Cardio',
    mechanics: 'Compuesto',
    movementPattern: 'Cardiovascular',
    isUnilateral: false,
    trackingType: 'Tiempo',
    planeOfMotion: 'Sagital',
    forceType: 'Cardio',
    instructions: [
      `Mantén la postura erguida y comienza el ritmo de ${c.name.toLowerCase()} a una cadencia sostenida.`,
      `Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.`,
      `Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca.`
    ],
    tips: ['Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia).'],
    breathingCue: 'Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.',
    alternatives: ['jumping-jacks-cardio', 'high-knees-drill']
  });
});

fs.writeFileSync(
  path.join(__dirname, '../src/data/batches/batch_07_trx_cardio65.json'),
  JSON.stringify(generated, null, 2),
  'utf8'
);

console.log(`✅ Lote 07 (TRX y Cardio Metabólico - ${generated.length} ejercicios) generado con éxito.`);
