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
// A. MOVILIDAD ARTICULAR (45 ejercicios)
// ========================================================
const mobilityDefs = [
  { id: 'cat-cow-stretch', name: 'Gato-Camello (Cat-Cow)', nameEn: 'Cat-Cow Mobility Stretch', target: 'LowerBack', sec: ['Back', 'Abs'], pat: 'Movilidad' },
  { id: 'thoracic-spine-rotations-quadruped', name: 'Rotación Torácica en Cuadrupedia', nameEn: 'Quadruped Thoracic Rotation', target: 'Back', sec: ['Shoulders'], pat: 'Rotación', uni: true },
  { id: 'thread-the-needle', name: 'Enhebrar la Aguja (Thread the Needle)', nameEn: 'Thread the Needle Stretch', target: 'Back', sec: ['Shoulders', 'LowerBack'], pat: 'Rotación', uni: true },
  { id: 'hip-90-90-mobility', name: 'Movilidad de Cadera 90/90', nameEn: '90/90 Hip Mobility Flow', target: 'Glutes', sec: ['HipFlexors', 'Adductors'], pat: 'Movilidad', uni: true },
  { id: 'hip-90-90-transitions', name: 'Transiciones de Cadera 90/90 sin Manos', nameEn: 'Hands-Free 90/90 Hip Switches', target: 'Glutes', sec: ['HipFlexors', 'Adductors'], pat: 'Movilidad', uni: true, diff: 'Intermedio' },
  { id: 'frog-stretch-mobility', name: 'Postura de la Rana (Frog Stretch)', nameEn: 'Frog Mobility Stretch', target: 'Adductors', sec: ['HipFlexors', 'Glutes'], pat: 'Movilidad' },
  { id: 'ankle-dorsiflexion-wall-drill', name: 'Movilidad de Dorsiflexión de Tobillo contra Pared', nameEn: 'Knee-to-Wall Ankle Mobilization', target: 'Calves', sec: [], pat: 'Movilidad', uni: true },
  { id: 'shoulder-dislocations-band', name: 'Dislocaciones de Hombro con Banda o Pica', nameEn: 'Band Shoulder Dislocates', target: 'Shoulders', sec: ['Chest', 'Traps'], pat: 'Movilidad', eq: 'Band' },
  { id: 'scapular-wall-slides', name: 'Deslizamientos Escapulares en Pared (Wall Slides)', nameEn: 'Scapular Wall Slides', target: 'Traps', sec: ['Shoulders', 'Serratus'], pat: 'Movilidad' },
  { id: 'deep-squat-prying', name: 'Apertura de Cadera en Sentadilla Profunda', nameEn: 'Deep Squat Pry and Hold', target: 'Glutes', sec: ['Adductors', 'Calves'], pat: 'Sentadilla' },
  { id: 'spiderman-stretch-with-reach', name: 'Estiramiento Spiderman con Apertura Torácica', nameEn: 'Spiderman Stretch with Overhead Reach', target: 'HipFlexors', sec: ['Back', 'Adductors'], pat: 'Movilidad', uni: true },
  { id: 'couch-stretch-hip-flexor', name: 'Estiramiento del Sofá para Flexores de Cadera', nameEn: 'Couch Stretch for Hip Flexors', target: 'HipFlexors', sec: ['Quads'], pat: 'Estiramiento', uni: true, diff: 'Intermedio' },
  { id: 'pigeon-pose-glute', name: 'Postura de la Paloma para Glúteo y Piramidal', nameEn: 'Pigeon Pose for Glutes', target: 'Glutes', sec: ['LowerBack'], pat: 'Estiramiento', uni: true },
  { id: 'childs-pose-lat-reach', name: 'Postura del Niño con Inclinación Lateral', nameEn: 'Extended Child’s Pose with Lat Reach', target: 'Lats', sec: ['LowerBack', 'Back'], pat: 'Estiramiento' },
  { id: 'puppy-dog-thoracic-stretch', name: 'Postura del Cachorro para Extensión Torácica', nameEn: 'Puppy Dog Thoracic Extension Stretch', target: 'Back', sec: ['Shoulders', 'Chest'], pat: 'Estiramiento' },
  { id: 'wrist-mobility-circles-quadruped', name: 'Movilidad Articular de Muñecas en Cuadrupedia', nameEn: 'Quadruped Wrist Mobility Sequence', target: 'Forearms', sec: [], pat: 'Movilidad' },
  { id: 'half-kneeling-ankle-mobility-band', name: 'Movilidad de Tobillo Asistida con Banda Elástica', nameEn: 'Band-Distracted Ankle Mobilization', target: 'Calves', sec: [], pat: 'Movilidad', eq: 'Band', uni: true },
  { id: 'windmills-kettlebell-mobility', name: 'Molino con Pesa Rusa (Windmill de Movilidad)', nameEn: 'Kettlebell Windmill', target: 'Hamstrings', sec: ['Shoulders', 'Abs', 'Glutes'], pat: 'Rotación', eq: 'Kettlebell', uni: true, diff: 'Intermedio' },
  { id: 'overhead-squat-dowel-mobility', name: 'Sentadilla de Arrancada con Pica de Madera', nameEn: 'Dowel Overhead Squat Mobility Assessment', target: 'Shoulders', sec: ['Back', 'Quads', 'Calves'], pat: 'Sentadilla' },
  { id: 'seated-straddle-stretch', name: 'Apertura Sentada en Straddle', nameEn: 'Seated Straddle Pancake Stretch', target: 'Adductors', sec: ['Hamstrings', 'LowerBack'], pat: 'Estiramiento' },
  { id: 'standing-quad-reach-stretch', name: 'Estiramiento de Cuádriceps de Pie con Elevación', nameEn: 'Standing Quadriceps and Psoas Stretch', target: 'Quads', sec: ['HipFlexors'], pat: 'Estiramiento', uni: true },
  { id: 'doorway-pec-stretch', name: 'Estiramiento Pectoral en Marco de Puerta', nameEn: 'Doorway Chest and Biceps Stretch', target: 'Chest', sec: ['Shoulders', 'Biceps'], pat: 'Estiramiento', uni: true },
  { id: 'biceps-wall-stretch', name: 'Estiramiento de Bíceps contra la Pared', nameEn: 'Wall Biceps and Anterior Shoulder Stretch', target: 'Biceps', sec: ['Forearms', 'Shoulders'], pat: 'Estiramiento', uni: true },
  { id: 'triceps-overhead-stretch-towel', name: 'Estiramiento de Tríceps sobre Cabeza con Toalla', nameEn: 'Overhead Triceps and Lat Stretch', target: 'Triceps', sec: ['Lats'], pat: 'Estiramiento', uni: true },
  { id: 'seated-spinal-twist', name: 'Torsión Espinal Sentado', nameEn: 'Seated Spinal Twist', target: 'LowerBack', sec: ['Back', 'Glutes'], pat: 'Rotación', uni: true },
  { id: 'cross-body-shoulder-stretch', name: 'Estiramiento Posterior del Deltoides Cruzando Brazo', nameEn: 'Cross-Body Posterior Shoulder Stretch', target: 'Shoulders', sec: ['Back'], pat: 'Estiramiento', uni: true },
  { id: 'sleeper-stretch-rotator-cuff', name: 'Sleeper Stretch para Manguito Rotador Interno', nameEn: 'Sleeper Stretch for Internal Rotation', target: 'Shoulders', sec: [], pat: 'Movilidad', uni: true, diff: 'Intermedio' },
  { id: 'prone-ytw-raises', name: 'Elevaciones Y-T-W en Decúbito Prono', nameEn: 'Prone Y-T-W Scapular Raises', target: 'Traps', sec: ['Shoulders', 'Back'], pat: 'Movilidad' },
  { id: 'prone-swimmer-rotations', name: 'Nadadores Pronos de Hombro (Prone Swimmers)', nameEn: 'Prone Shoulder Swimmer Hover Flow', target: 'Shoulders', sec: ['Traps', 'Lats'], pat: 'Movilidad', diff: 'Intermedio' },
  { id: 'tall-kneeling-lat-stretch-ball', name: 'Estiramiento de Dorsal de Rodillas sobre Balón', nameEn: 'Kneeling Lat Stretch on Stability Ball', target: 'Lats', sec: ['Back', 'Shoulders'], pat: 'Estiramiento', eq: 'StabilityBall' },
  { id: 'hamstring-sweep-dynamic-stretch', name: 'Barrido Dinámico de Isquiotibiales en Marcha', nameEn: 'Dynamic Walking Hamstring Sweeps', target: 'Hamstrings', sec: ['Calves', 'LowerBack'], pat: 'Estiramiento', cat: 'Calentamiento' },
  { id: 'knee-hug-glute-march', name: 'Abrazo de Rodilla en Marcha con Elevación', nameEn: 'Walking Knee Hug to Glute Stretch', target: 'Glutes', sec: ['HipFlexors'], pat: 'Estiramiento', cat: 'Calentamiento' },
  { id: 'quad-pull-reach-march', name: 'Tirón de Cuádriceps en Marcha con Extensión', nameEn: 'Walking Quad Pull with Overhead Reach', target: 'Quads', sec: ['HipFlexors'], pat: 'Estiramiento', cat: 'Calentamiento' },
  { id: 'hip-circles-fire-hydrant', name: 'Círculos Articulares de Cadera (Fire Hydrant CARs)', nameEn: 'Quadruped Hip CARs (Controlled Articular Rotations)', target: 'Glutes', sec: ['Abductors', 'HipFlexors'], pat: 'Movilidad', uni: true },
  { id: 'shoulder-cars-standing', name: 'Rotaciones Articulares Controladas de Hombro (CARs)', nameEn: 'Standing Shoulder CARs', target: 'Shoulders', sec: ['Traps'], pat: 'Movilidad', uni: true },
  { id: 'neck-controlled-articular-rotations', name: 'Rotaciones Controladas del Cuello y Columna Cervical', nameEn: 'Cervical Spine CARs', target: 'Traps', sec: [], pat: 'Movilidad' },
  { id: 'cossack-squat-mobility', name: 'Sentadilla Cosaca de Movilidad Lateral', nameEn: 'Cossack Squat Mobility Flow', target: 'Adductors', sec: ['Quads', 'Glutes', 'Calves'], pat: 'Estocada', uni: true, diff: 'Intermedio' },
  { id: 'shin-box-get-up', name: 'Levantamiento desde Posición de Shin Box', nameEn: 'Shin Box Hip Extension and Get-Up', target: 'Glutes', sec: ['HipFlexors', 'Adductors'], pat: 'Movilidad', uni: true },
  { id: 'kneeling-quad-reach-bench', name: 'Estiramiento de Cuádriceps con Pie Elevado en Banco', nameEn: 'Rear-Foot Elevated Couch Hip Stretch', target: 'Quads', sec: ['HipFlexors'], pat: 'Estiramiento', uni: true },
  { id: 'banded-distracted-hip-flexor', name: 'Descompresión de Cadera con Tracción de Banda', nameEn: 'Banded Hip Flexor Distraction', target: 'HipFlexors', sec: ['Quads'], pat: 'Movilidad', eq: 'Band', uni: true },
  { id: 'standing-it-band-cross-stretch', name: 'Estiramiento de Banda Iliotibial Cruzando Piernas', nameEn: 'Standing IT Band and Lateral Line Stretch', target: 'Abductors', sec: ['Glutes', 'LowerBack'], pat: 'Estiramiento', uni: true },
  { id: 'seated-butterfly-stretch', name: 'Postura de la Mariposa Sentado', nameEn: 'Seated Butterfly Adductor Stretch', target: 'Adductors', sec: ['Glutes'], pat: 'Estiramiento' },
  { id: 'downward-facing-dog-pedaling', name: 'Perro Boca Abajo con Pedaleo de Talones', nameEn: 'Downward Dog Calf and Hamstring Pedals', target: 'Calves', sec: ['Hamstrings', 'Shoulders', 'Back'], pat: 'Estiramiento' },
  { id: 'upward-facing-dog-abdominal', name: 'Perro Boca Arriba para Cadena Anterior', nameEn: 'Upward-Facing Dog Core Stretch', target: 'Abs', sec: ['HipFlexors', 'Chest'], pat: 'Estiramiento' },
  { id: 'supine-figure-four-glute-stretch', name: 'Estiramiento del Número Cuatro Boca Arriba', nameEn: 'Supine Figure Four Piriformis Stretch', target: 'Glutes', sec: ['LowerBack'], pat: 'Estiramiento', uni: true }
];

mobilityDefs.forEach(m => {
  addEx({
    id: m.id,
    name: m.name,
    nameEn: m.nameEn,
    primaryMuscle: m.target,
    secondaryMuscles: m.sec,
    stabilizers: ['Abs'],
    equipment: m.eq || 'Bodyweight',
    difficulty: m.diff || 'Principiante',
    category: m.cat || 'Movilidad',
    mechanics: 'Compuesto',
    movementPattern: m.pat || 'Movilidad',
    isUnilateral: !!m.uni,
    trackingType: 'Tiempo',
    planeOfMotion: 'Multi-plano',
    forceType: 'Estático',
    instructions: [
      `Adopta suavemente la postura de ${m.name.toLowerCase()} sin forzar las articulaciones.`,
      `Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.`,
      `Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular.`
    ],
    tips: ['La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante.'],
    breathingCue: 'Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.',
    alternatives: ['worlds-greatest-stretch', 'dead-bug']
  });
});

// ========================================================
// B. CALENTAMIENTO Y ACTIVACIÓN DINÁMICA (35 ejercicios)
// ========================================================
const warmupDefs = [
  { id: 'jumping-jacks-cardio', name: 'Saltos de Tijera (Jumping Jacks)', nameEn: 'Jumping Jacks', target: 'Cardio', sec: ['Calves', 'Shoulders'], pat: 'Cardiovascular' },
  { id: 'high-knees-drill', name: 'Rodillas Arriba en el Sitio (High Knees)', nameEn: 'High Knees Running in Place', target: 'Cardio', sec: ['Quads', 'Calves', 'Abs'], pat: 'Cardiovascular' },
  { id: 'butt-kicks-drill', name: 'Talones a los Glúteos (Butt Kicks)', nameEn: 'Butt Kicks Running Drill', target: 'Cardio', sec: ['Hamstrings', 'Calves'], pat: 'Cardiovascular' },
  { id: 'inchworm-walkout', name: 'El Gusano (Inchworm Walkout con Flexión Opcional)', nameEn: 'Inchworm to Plank Walkout', target: 'Hamstrings', sec: ['Shoulders', 'Abs', 'Chest'], pat: 'Movilidad' },
  { id: 'mountain-climbers', name: 'Escaladores en Plancha (Mountain Climbers)', nameEn: 'Mountain Climbers', target: 'Abs', sec: ['Shoulders', 'HipFlexors', 'Cardio'], pat: 'Anti-Extensión' },
  { id: 'banded-lateral-monster-walk', name: 'Caminata Lateral de Monstruo con Banda en Rodillas', nameEn: 'Banded Lateral Monster Walk', target: 'Glutes', sec: ['Abductors', 'Quads'], eq: 'Band', pat: 'Estocada' },
  { id: 'banded-clamshell', name: 'La Almeja con Banda Elástica (Clamshell)', nameEn: 'Banded Clamshell', target: 'Glutes', sec: ['Abductors'], eq: 'Band', uni: true, pat: 'Movilidad' },
  { id: 'arm-circles-forward-backward', name: 'Círculos de Brazos hacia Adelante y Atrás', nameEn: 'Forward and Backward Arm Circles', target: 'Shoulders', sec: ['Traps'], pat: 'Movilidad' },
  { id: 'leg-swings-front-back', name: 'Balanceos de Pierna Frontales y Posteriores', nameEn: 'Front-to-Back Dynamic Leg Swings', target: 'Hamstrings', sec: ['HipFlexors', 'Glutes'], uni: true, pat: 'Movilidad' },
  { id: 'leg-swings-side-to-side', name: 'Balanceos de Pierna Laterales', nameEn: 'Side-to-Side Dynamic Leg Swings', target: 'Adductors', sec: ['Abductors', 'Glutes'], uni: true, pat: 'Movilidad' },
  { id: 'torso-rotations-standing', name: 'Rotaciones de Tronco de Pie con Pivote', nameEn: 'Standing Torso Twists with Foot Pivot', target: 'Abs', sec: ['LowerBack'], pat: 'Rotación' },
  { id: 'air-squat-warmup', name: 'Sentadilla al Aire de Calentamiento Rítmico', nameEn: 'Dynamic Bodyweight Air Squat', target: 'Quads', sec: ['Glutes', 'Calves'], pat: 'Sentadilla' },
  { id: 'alternating-reverse-lunge-reach', name: 'Zancada Inversa Alterna con Extensión de Brazos', nameEn: 'Reverse Lunge with Overhead Lateral Reach', target: 'Quads', sec: ['Glutes', 'HipFlexors'], uni: true, pat: 'Estocada' },
  { id: 'glute-bridge-activation-bodyweight', name: 'Puente de Glúteos de Activación con Doble Apoyo', nameEn: 'Bodyweight Glute Bridge Holds', target: 'Glutes', sec: ['Hamstrings'], pat: 'Bisagra de Cadera' },
  { id: 'band-pull-apart-warmup', name: 'Separaciones de Banda Elástica al Pecho (Pull-Apart)', nameEn: 'Band Pull-Apart Warmup', target: 'Shoulders', sec: ['Traps', 'Back'], eq: 'Band', pat: 'Tirón Horizontal' },
  { id: 'overhead-band-press-warmup', name: 'Press sobre Cabeza con Banda de Activación', nameEn: 'Banded Overhead Press Warmup', target: 'Shoulders', sec: ['Triceps'], eq: 'Band', pat: 'Empuje Vertical' },
  { id: 'skater-jumps-warmup', name: 'Saltos de Patinador Laterales (Skater Hops)', nameEn: 'Lateral Skater Hops', target: 'Glutes', sec: ['Abductors', 'Calves', 'Cardio'], pat: 'Explosivo', uni: true },
  { id: 'pogo-hops-calves', name: 'Saltos Pogo Rítmicos en los Tobillos', nameEn: 'Pogo Hops for Ankle Stiffness', target: 'Calves', sec: ['Cardio'], pat: 'Explosivo' },
  { id: 'single-leg-ruler-hop', name: 'Pequeños Saltos Unilaterales de Reactividad', nameEn: 'Single-Leg Linear Hop Drill', target: 'Calves', sec: ['Quads'], uni: true, pat: 'Explosivo' },
  { id: 'plank-to-downward-dog', name: 'Transición de Plancha a Perro Boca Abajo', nameEn: 'Plank to Downward Dog Flow', target: 'Abs', sec: ['Shoulders', 'Calves', 'Hamstrings'], pat: 'Anti-Extensión' },
  { id: 'bear-hold-activation', name: 'Posición Isométrica de Oso con Rodillas Flotantes', nameEn: 'Quadruped Hovering Bear Hold', target: 'Abs', sec: ['Quads', 'Shoulders'], pat: 'Anti-Extensión' },
  { id: 'bird-dog-activation', name: 'Pájaro-Perro de Estabilidad Lumbar (Bird-Dog)', nameEn: 'Bird-Dog Core Stability Activation', target: 'LowerBack', sec: ['Glutes', 'Shoulders', 'Abs'], uni: true, pat: 'Anti-Rotación' },
  { id: 'side-lying-external-rotation-band', name: 'Rotación Externa de Hombro Tumbado con Mini-Banda', nameEn: 'Side-Lying Rotator Cuff External Rotation', target: 'Shoulders', sec: [], eq: 'Band', uni: true },
  { id: 'face-pull-band-warmup', name: 'Face Pull con Banda Elástica en Anclaje', nameEn: 'Banded Face Pull Warmup', target: 'Shoulders', sec: ['Traps'], eq: 'Band', pat: 'Tirón Horizontal' },
  { id: 'shadow-boxing-footwork', name: 'Sombra de Boxeo con Juego de Pies Ligero', nameEn: 'Light Shadow Boxing and Footwork Flow', target: 'Cardio', sec: ['Shoulders', 'Calves'], pat: 'Cardiovascular' },
  { id: 'jump-rope-basic-bounce', name: 'Salto con Cuerda / Comba Rítmica Básica', nameEn: 'Basic Jump Rope Bounce', target: 'Cardio', sec: ['Calves', 'Forearms'], eq: 'Rope', pat: 'Cardiovascular' },
  { id: 'lateral-shuffle-cones', name: 'Desplazamiento Lateral de Baloncesto (Shuffles)', nameEn: 'Lateral Defensive Shuffle Drill', target: 'Quads', sec: ['Glutes', 'Calves', 'Cardio'], pat: 'Estocada' },
  { id: 'a-skip-running-drill', name: 'A-Skip de Técnica de Carrera', nameEn: 'Track and Field A-Skip Drill', target: 'Cardio', sec: ['Calves', 'HipFlexors'], pat: 'Cardiovascular' },
  { id: 'b-skip-running-drill', name: 'B-Skip con Extensión y Zarpazo', nameEn: 'Dynamic B-Skip Hamstring Drill', target: 'Hamstrings', sec: ['Calves', 'Cardio'], pat: 'Cardiovascular' },
  { id: 'carioca-grapevine-warmup', name: 'Carioca / Pasos Cruzados Dinámicos de Cadera', nameEn: 'Carioca Grapevine Hip Warmup Drill', target: 'Glutes', sec: ['Adductors', 'Cardio'], pat: 'Rotación' },
  { id: 'squat-to-stand-hamstring', name: 'De Sentadilla Profunda a Flexión Frontal (Squat to Stand)', nameEn: 'Squat-to-Stand with Hamstring Stretch', target: 'Hamstrings', sec: ['Quads', 'LowerBack'], pat: 'Sentadilla' },
  { id: 'dead-hang-bar-warmup', name: 'Cuelgue Pasivo en Barra para Descompresión Espinal', nameEn: 'Passive Bar Dead Hang', target: 'Lats', sec: ['Forearms', 'Shoulders'], pat: 'Tirón Vertical' },
  { id: 'active-hang-scapular-depression', name: 'Cuelgue Activo con Depresión Escapular', nameEn: 'Active Bar Hang with Scapular Retraction', target: 'Back', sec: ['Forearms', 'Traps'], pat: 'Tirón Vertical' },
  { id: 'wrist-waves-joint-warmup', name: 'Olas y Entrelazado de Muñecas', nameEn: 'Wrist Wave Articulations', target: 'Forearms', sec: [], pat: 'Movilidad' },
  { id: 'hip-opener-hurdle-step', name: 'Paso por Encima de la Valla Imaginaria', nameEn: 'Over-the-Hurdle Hip Rotation Steps', target: 'HipFlexors', sec: ['Glutes', 'Abductors'], pat: 'Movilidad', uni: true }
];

warmupDefs.forEach(w => {
  addEx({
    id: w.id,
    name: w.name,
    nameEn: w.nameEn,
    primaryMuscle: w.target,
    secondaryMuscles: w.sec,
    stabilizers: ['Abs'],
    equipment: w.eq || 'Bodyweight',
    difficulty: 'Principiante',
    category: 'Calentamiento',
    mechanics: 'Compuesto',
    movementPattern: w.pat || 'Cardiovascular',
    isUnilateral: !!w.uni,
    trackingType: w.target === 'Cardio' ? 'Tiempo' : 'Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Cardio',
    instructions: [
      `Inicia el movimiento dinámico de ${w.name.toLowerCase()} a ritmo moderado y progresivo.`,
      `Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.`,
      `Finaliza manteniendo la respiración rítmica y el control postural.`
    ],
    tips: ['El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal.'],
    breathingCue: 'Respiración continua y rítmica a través de la nariz y boca.',
    alternatives: ['jumping-jacks-cardio', 'inchworm-walkout']
  });
});

// ========================================================
// C. FOAM ROLLING Y TEJIDO BLANDO (15 ejercicios)
// ========================================================
const foamRollingDefs = [
  { id: 'foam-roll-thoracic-spine', name: 'Liberación Miofascial de Columna Torácica con Rodillo', nameEn: 'Foam Rolling Thoracic Spine Extension', target: 'Back', sec: ['Traps'] },
  { id: 'foam-roll-lats', name: 'Liberación de Dorsal Ancho con Foam Roller', nameEn: 'Foam Rolling Latissimus Dorsi', target: 'Lats', sec: ['Back'], uni: true },
  { id: 'foam-roll-glutes-piriformis', name: 'Autoliberación de Glúteo y Piramidal con Rodillo', nameEn: 'Foam Rolling Gluteus and Piriformis', target: 'Glutes', sec: ['Abductors'], uni: true },
  { id: 'foam-roll-quadriceps', name: 'Masaje Miofascial de Cuádriceps con Foam Roller', nameEn: 'Foam Rolling Quadriceps', target: 'Quads', sec: ['HipFlexors'] },
  { id: 'foam-roll-it-band-tfl', name: 'Liberación del Tensor de la Fascia Lata y Banda Iliotibial', nameEn: 'Foam Rolling IT Band and Tensor Fasciae Latae', target: 'Abductors', sec: ['Quads'], uni: true },
  { id: 'foam-roll-hamstrings', name: 'Liberación de Isquiotibiales con Rodillo', nameEn: 'Foam Rolling Hamstrings', target: 'Hamstrings', sec: [] },
  { id: 'foam-roll-adductors', name: 'Liberación de Aductores en Posición de Rana', nameEn: 'Foam Rolling Adductor Complex', target: 'Adductors', sec: [], uni: true },
  { id: 'foam-roll-calves-gastrocnemius', name: 'Autoliberación de Gemelos y Tendón de Aquiles', nameEn: 'Foam Rolling Calves and Gastrocnemius', target: 'Calves', sec: [], uni: true },
  { id: 'foam-roll-shins-tibialis', name: 'Liberación Miofascial de Tibial Anterior', nameEn: 'Foam Rolling Anterior Tibialis', target: 'Calves', sec: [], uni: true },
  { id: 'foam-roll-pec-minor-ball', name: 'Presión en Pectoral Menor con Pelota de Lacrosse', nameEn: 'Lacrosse Ball Trigger Point Release for Pec Minor', target: 'Chest', sec: ['Shoulders'], uni: true, eq: 'MedicineBall' },
  { id: 'lacrosse-ball-rhomboids-trigger', name: 'Puntos Gatillo en Romboides con Pelota de Masaje', nameEn: 'Lacrosse Ball Upper Back and Rhomboids Release', target: 'Back', sec: ['Traps'], uni: true, eq: 'MedicineBall' },
  { id: 'lacrosse-ball-plantar-fascia', name: 'Masaje de Fascia Plantar del Pie con Pelota', nameEn: 'Plantar Fascia Foot Ball Rolling', target: 'Calves', sec: [], uni: true, eq: 'MedicineBall' },
  { id: 'foam-roll-neck-suboccipital', name: 'Descompresión Suboccipital con Rodillo Suave', nameEn: 'Suboccipital Neck Release on Foam Roller', target: 'Traps', sec: [] },
  { id: 'foam-roll-hip-flexors-psoas', name: 'Liberación de Psoas y Flexores con Esfera o Rodillo', nameEn: 'Psoas and Hip Flexor Targeted Ball Release', target: 'HipFlexors', sec: ['Quads'], uni: true, eq: 'MedicineBall' },
  { id: 'foam-roll-triceps-long-head', name: 'Liberación Miofascial de la Cabeza Larga del Tríceps', nameEn: 'Foam Rolling Long Head of Triceps', target: 'Triceps', sec: ['Lats'], uni: true }
];

foamRollingDefs.forEach(f => {
  addEx({
    id: f.id,
    name: f.name,
    nameEn: f.nameEn,
    primaryMuscle: f.target,
    secondaryMuscles: f.sec,
    stabilizers: ['Abs'],
    equipment: f.eq || 'FoamRoller',
    difficulty: 'Principiante',
    category: 'FoamRolling',
    mechanics: 'Aislamiento',
    movementPattern: 'Movilidad',
    isUnilateral: !!f.uni,
    trackingType: 'Tiempo',
    planeOfMotion: 'Sagital',
    forceType: 'Estático',
    instructions: [
      `Coloca el rodillo o pelota bajo el área muscular diana de ${f.name.toLowerCase()}.`,
      `Rueda lentamente buscando zonas de mayor tensión o nudos musculares (puntos gatillo).`,
      `Al localizar un punto sensible, sostén la presión fija durante 30 a 60 segundos respirando hondo.`
    ],
    tips: ['Nunca ruedes directamente sobre articulaciones, huesos prominentes o la zona lumbar sin apoyo pélvico.'],
    breathingCue: 'Exhala largo y relajado mientras permites que el músculo ceda a la presión del rodillo.',
    alternatives: ['cat-cow-stretch']
  });
});

fs.writeFileSync(
  path.join(__dirname, '../src/data/batches/batch_04_mobility_warmup95.json'),
  JSON.stringify(generated, null, 2),
  'utf8'
);

console.log(`✅ Lote 04 (Movilidad, Calentamiento y Foam Rolling - ${generated.length} ejercicios) generado con éxito.`);
