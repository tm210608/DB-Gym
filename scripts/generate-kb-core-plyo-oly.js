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
// A. KETTLEBELL & ENTRENAMIENTO BALÍSTICO (35 ejercicios)
// ========================================================
const kbDefs = [
  { id: 'kettlebell-clean-single-arm', name: 'Clean con Pesa Rusa a Una Mano', nameEn: 'Single-Arm Kettlebell Clean', target: 'Glutes', sec: ['Hamstrings', 'Traps', 'Forearms'], diff: 'Intermedio', uni: true, pat: 'Bisagra de Cadera' },
  { id: 'kettlebell-snatch-single-arm', name: 'Snatch (Arrancada) con Pesa Rusa a Una Mano', nameEn: 'Single-Arm Kettlebell Snatch', target: 'Glutes', sec: ['Hamstrings', 'Shoulders', 'Lats'], diff: 'Avanzado', uni: true, pat: 'Bisagra de Cadera' },
  { id: 'turkish-get-up-full', name: 'Levantamiento Turco Completo (Turkish Get-Up)', nameEn: 'Full Turkish Get-Up', target: 'Shoulders', sec: ['Abs', 'Glutes', 'Quads', 'Back'], diff: 'Avanzado', uni: true, pat: 'Multi-plano' },
  { id: 'kettlebell-strict-press', name: 'Press Militar Estricto con Pesa Rusa', nameEn: 'Single-Arm Kettlebell Military Press', target: 'Shoulders', sec: ['Triceps', 'Traps'], diff: 'Intermedio', uni: true, pat: 'Empuje Vertical' },
  { id: 'kettlebell-push-press', name: 'Push Press con Pesa Rusa', nameEn: 'Kettlebell Push Press', target: 'Shoulders', sec: ['Quads', 'Triceps', 'Glutes'], diff: 'Intermedio', uni: true, pat: 'Empuje Vertical' },
  { id: 'kettlebell-halo', name: 'El Halo con Pesa Rusa alrededor de la Cabeza', nameEn: 'Kettlebell Halo for Shoulder Mobility', target: 'Shoulders', sec: ['Traps', 'Forearms', 'Abs'], pat: 'Rotación' },
  { id: 'double-kettlebell-front-squat', name: 'Sentadilla Frontal con Doble Pesa Rusa en Rack', nameEn: 'Double Kettlebell Front Squat', target: 'Quads', sec: ['Glutes', 'Abs', 'Back'], diff: 'Intermedio', pat: 'Sentadilla' },
  { id: 'kettlebell-somersault-squat', name: 'Sentadilla con Pesa Rusa Apoyada Tras Nuca', nameEn: 'Kettlebell Somersault Squat', target: 'Quads', sec: ['Glutes'], pat: 'Sentadilla' },
  { id: 'single-leg-kettlebell-rdl', name: 'Peso Muerto Rumano Unilateral con Pesa Rusa', nameEn: 'Single-Leg Kettlebell Romanian Deadlift', target: 'Hamstrings', sec: ['Glutes', 'Forearms', 'Abs'], diff: 'Intermedio', uni: true, pat: 'Bisagra de Cadera' },
  { id: 'kettlebell-gorilla-row', name: 'Remo Gorila Alterno con Dos Pesas Rusas', nameEn: 'Kettlebell Gorilla Row', target: 'Back', sec: ['Lats', 'Abs', 'Hamstrings'], diff: 'Intermedio', uni: true, pat: 'Tirón Horizontal' },
  { id: 'kettlebell-high-pull', name: 'Tirón Alto con Pesa Rusa (High Pull)', nameEn: 'Kettlebell High Pull', target: 'Traps', sec: ['Glutes', 'Hamstrings', 'Shoulders'], diff: 'Intermedio', pat: 'Tirón Vertical' },
  { id: 'kettlebell-bottoms-up-clean', name: 'Clean con Base hacia Arriba (Bottoms-Up)', nameEn: 'Bottoms-Up Kettlebell Clean', target: 'Forearms', sec: ['Biceps', 'Shoulders'], diff: 'Avanzado', uni: true, pat: 'Bisagra de Cadera' },
  { id: 'kettlebell-bottoms-up-press', name: 'Press con Base hacia Arriba para Estabilidad', nameEn: 'Bottoms-Up Kettlebell Press', target: 'Shoulders', sec: ['Forearms', 'Triceps', 'Abs'], diff: 'Avanzado', uni: true, pat: 'Empuje Vertical' },
  { id: 'kettlebell-figure-eight', name: 'El Ocho entre Piernas con Pesa Rusa (Figure 8)', nameEn: 'Kettlebell Figure 8 Dynamic Core Flow', target: 'Abs', sec: ['Glutes', 'Forearms'], pat: 'Rotación' },
  { id: 'kettlebell-deck-squat', name: 'Deck Squat con Impulso de Pesa Rusa', nameEn: 'Kettlebell Deck Squat to Stand', target: 'Quads', sec: ['Abs', 'Glutes'], diff: 'Avanzado', pat: 'Sentadilla' },
  { id: 'kettlebell-curtsy-lunge', name: 'Zancada de Reverencia con Pesa Rusa', nameEn: 'Kettlebell Curtsy Lunge', target: 'Glutes', sec: ['Quads', 'Adductors'], uni: true, pat: 'Estocada' },
  { id: 'kettlebell-sots-press', name: 'Press Sots en Sentadilla Profunda con Pesa Rusa', nameEn: 'Kettlebell Sots Press in Deep Squat', target: 'Shoulders', sec: ['Quads', 'Back', 'Abs'], diff: 'Avanzado', uni: true, pat: 'Empuje Vertical' },
  { id: 'kettlebell-slingshot', name: 'Vuelta al Mundo alrededor del Torso (Slingshot)', nameEn: 'Kettlebell Slingshot / Around the World', target: 'Forearms', sec: ['Abs', 'Shoulders'], pat: 'Rotación' },
  { id: 'kettlebell-overhead-carry', name: 'Paseo con Pesa Rusa Bloqueada sobre la Cabeza', nameEn: 'Single-Arm Kettlebell Overhead Carry', target: 'Shoulders', sec: ['Abs', 'Traps'], uni: true, pat: 'Carry' },
  { id: 'kettlebell-rack-carry', name: 'Paseo en Posición de Rack con Pesa Rusa', nameEn: 'Single-Arm Kettlebell Front Rack Carry', target: 'Abs', sec: ['Forearms', 'Glutes'], uni: true, pat: 'Carry' },
  { id: 'kettlebell-waiter-walk', name: 'Paseo del Camarero con Pesa Rusa', nameEn: 'Kettlebell Waiter’s Walk', target: 'Shoulders', sec: ['Forearms', 'Abs'], uni: true, pat: 'Carry' },
  { id: 'kettlebell-crush-curl', name: 'Curl de Bíceps Comprimiendo Pesa Rusa (Crush Curl)', nameEn: 'Kettlebell Crush Grip Biceps Curl', target: 'Biceps', sec: ['Chest', 'Forearms'], pat: 'Tirón Vertical' },
  { id: 'kettlebell-overhead-triceps-extension', name: 'Extensión de Tríceps sobre Cabeza con Pesa Rusa', nameEn: 'Kettlebell Overhead Triceps Extension', target: 'Triceps', sec: ['Forearms'], pat: 'Empuje Vertical' },
  { id: 'kettlebell-floor-press-single', name: 'Press en el Suelo a Una Mano con Pesa Rusa', nameEn: 'Single-Arm Kettlebell Floor Press', target: 'Chest', sec: ['Triceps', 'Shoulders', 'Abs'], uni: true, pat: 'Empuje Horizontal' },
  { id: 'kettlebell-cross-body-clean', name: 'Clean Cruzado Diagonal con Pesa Rusa', nameEn: 'Cross-Body Kettlebell Clean', target: 'Glutes', sec: ['Abs', 'Back'], uni: true, pat: 'Bisagra de Cadera' },
  { id: 'kettlebell-kneeling-windlass', name: 'Giro de Molinete de Rodillas con Pesa Rusa', nameEn: 'Half-Kneeling Kettlebell Windmill', target: 'Shoulders', sec: ['Abs', 'Glutes'], uni: true, pat: 'Rotación' },
  { id: 'kettlebell-lateral-swing', name: 'Swing Lateral Controlado en el Plano Frontal', nameEn: 'Kettlebell Lateral Plane Swing', target: 'Glutes', sec: ['Abs', 'Adductors'], diff: 'Intermedio', pat: 'Rotación' },
  { id: 'kettlebell-pistol-box-squat', name: 'Sentadilla Pistola a Cajón con Pesa Rusa Contrapeso', nameEn: 'Counterbalance Kettlebell Pistol Squat to Box', target: 'Quads', sec: ['Glutes'], diff: 'Intermedio', uni: true, pat: 'Sentadilla' },
  { id: 'kettlebell-good-morning', name: 'Buenos Días con Pesa Rusa Abrazada al Pecho', nameEn: 'Kettlebell Hugged Good Morning', target: 'Hamstrings', sec: ['Glutes', 'LowerBack'], pat: 'Bisagra de Cadera' },
  { id: 'kettlebell-cossack-press', name: 'Sentadilla Cosaca con Press Frontal de Pesa Rusa', nameEn: 'Kettlebell Cossack Squat with Press-Out', target: 'Adductors', sec: ['Quads', 'Shoulders'], diff: 'Intermedio', uni: true, pat: 'Estocada' },
  { id: 'double-kettlebell-clean-and-jerk', name: 'Clean & Jerk Completo con Doble Pesa Rusa', nameEn: 'Double Kettlebell Clean and Jerk (Long Cycle)', target: 'Shoulders', sec: ['Glutes', 'Hamstrings', 'Triceps'], diff: 'Avanzado', pat: 'Explosivo' },
  { id: 'double-kettlebell-snatch', name: 'Snatch Simultáneo con Dos Pesas Rusas', nameEn: 'Double Kettlebell Snatch', target: 'Glutes', sec: ['Back', 'Shoulders'], diff: 'Avanzado', pat: 'Explosivo' },
  { id: 'kettlebell-renegade-row', name: 'Remo Renegado en Plancha con Pesas Rusas', nameEn: 'Kettlebell Renegade Row', target: 'Back', sec: ['Abs', 'Chest', 'Triceps'], diff: 'Avanzado', uni: true, pat: 'Tirón Horizontal' },
  { id: 'kettlebell-thruster', name: 'Thruster con Pesa Rusa (Sentadilla + Press)', nameEn: 'Kettlebell Thruster', target: 'Quads', sec: ['Shoulders', 'Triceps', 'Glutes'], pat: 'Sentadilla' },
  { id: 'kettlebell-man-maker', name: 'Man Maker con Pesas Rusas (Flexión + Remo + Thruster)', nameEn: 'Kettlebell Man Maker Complex', target: 'Chest', sec: ['Back', 'Shoulders', 'Quads'], diff: 'Avanzado', pat: 'Multi-plano' }
];

kbDefs.forEach(k => {
  addEx({
    id: k.id,
    name: k.name,
    nameEn: k.nameEn,
    primaryMuscle: k.target,
    secondaryMuscles: k.sec,
    stabilizers: ['Abs', 'Forearms'],
    equipment: 'Kettlebell',
    difficulty: k.diff || 'Principiante',
    category: 'Kettlebell',
    mechanics: 'Compuesto',
    movementPattern: k.pat || 'Bisagra de Cadera',
    isUnilateral: !!k.uni,
    trackingType: 'Peso×Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Tirón',
    instructions: [
      `Asegura el agarre firme y la postura sólida con la pesa rusa para ${k.name.toLowerCase()}.`,
      `Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.`,
      `Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada.`
    ],
    tips: ['En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos.'],
    breathingCue: 'Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.',
    alternatives: ['kettlebell-swing', 'kettlebell-deadlift']
  });
});

// ========================================================
// B. CORE, ANTI-MOVIMIENTO Y ESTABILIDAD (45 ejercicios)
// ========================================================
const coreDefs = [
  { id: 'pallof-press-cable', name: 'Press Pallof Antirrotación en Polea', nameEn: 'Cable Pallof Press', target: 'Abs', sec: ['Glutes'], eq: 'Cable', uni: true, pat: 'Anti-Rotación' },
  { id: 'pallof-press-band', name: 'Press Pallof con Banda Elástica', nameEn: 'Resistance Band Pallof Press', target: 'Abs', sec: ['Glutes'], eq: 'Band', uni: true, pat: 'Anti-Rotación' },
  { id: 'half-kneeling-pallof-press', name: 'Press Pallof en Posición de Caballero', nameEn: 'Half-Kneeling Pallof Press', target: 'Abs', sec: ['Glutes', 'HipFlexors'], eq: 'Cable', uni: true, pat: 'Anti-Rotación' },
  { id: 'ab-wheel-rollout-knees', name: 'Rueda Abdominal de Rodillas (Ab Wheel)', nameEn: 'Kneeling Ab Wheel Rollout', target: 'Abs', sec: ['Lats', 'Shoulders'], eq: 'Bodyweight', pat: 'Anti-Extensión' },
  { id: 'ab-wheel-rollout-standing', name: 'Rueda Abdominal de Pie (Avanzado)', nameEn: 'Standing Ab Wheel Rollout', target: 'Abs', sec: ['Lats', 'Chest'], diff: 'Avanzado', eq: 'Bodyweight', pat: 'Anti-Extensión' },
  { id: 'stir-the-pot-stability-ball', name: 'Remover la Olla sobre Balón Suizo (Stir the Pot)', nameEn: 'Stability Ball Stir the Pot Plank', target: 'Abs', sec: ['Shoulders'], diff: 'Intermedio', eq: 'StabilityBall', pat: 'Anti-Rotación' },
  { id: 'suitcase-carry-dumbbell', name: 'Paseo de la Maleta (Suitcase Carry Unilateral)', nameEn: 'Single-Arm Dumbbell Suitcase Carry', target: 'Abs', sec: ['Forearms', 'Traps', 'Glutes'], diff: 'Intermedio', eq: 'Dumbbell', uni: true, pat: 'Carry' },
  { id: 'farmers-walk-heavy', name: 'Paseo del Granjero Bilateral Pesado', nameEn: 'Heavy Dumbbell Farmer’s Walk', target: 'Forearms', sec: ['Traps', 'Abs', 'Glutes'], diff: 'Intermedio', eq: 'Dumbbell', pat: 'Carry' },
  { id: 'overhead-dumbbell-carry-dual', name: 'Paseo con Mancuernas sobre la Cabeza', nameEn: 'Dual Dumbbell Overhead Carry', target: 'Shoulders', sec: ['Traps', 'Abs'], eq: 'Dumbbell', pat: 'Carry' },
  { id: 'side-plank-forearm-hold', name: 'Plancha Lateral sobre Antebrazo', nameEn: 'Side Plank Forearm Hold', target: 'Abs', sec: ['Glutes', 'Shoulders'], uni: true, pat: 'Anti-Rotación' },
  { id: 'rkc-plank-max-tension', name: 'Plancha RKC de Tensión Máxima', nameEn: 'RKC Maximum Tension Plank', target: 'Abs', sec: ['Glutes', 'Quads'], diff: 'Intermedio', pat: 'Anti-Extensión' },
  { id: 'hollow-body-rocks', name: 'Balanceos en Posición Hueca (Hollow Rocks)', nameEn: 'Hollow Body Rocks', target: 'Abs', sec: ['HipFlexors'], diff: 'Intermedio', pat: 'Anti-Extensión' },
  { id: 'v-up-ab-crunch', name: 'V-Ups Abdominales en V', nameEn: 'Jackknife V-Up Crunch', target: 'Abs', sec: ['HipFlexors'], diff: 'Intermedio', pat: 'Anti-Extensión' },
  { id: 'bicycle-crunches-tempo', name: 'Bicicleta Abdominal con Pausa Isométrica', nameEn: 'Slow Tempo Bicycle Crunch', target: 'Abs', sec: ['HipFlexors'], pat: 'Rotación' },
  { id: 'reverse-crunch-incline-bench', name: 'Crunch Inverso en Banco Inclinado', nameEn: 'Incline Bench Reverse Crunch', target: 'Abs', sec: ['HipFlexors'], pat: 'Anti-Extensión' },
  { id: 'woodchopper-cable-high-to-low', name: 'Leñador en Polea Alta hacia Abajo (Woodchopper)', nameEn: 'High-to-Low Cable Woodchopper', target: 'Abs', sec: ['Shoulders', 'Back'], eq: 'Cable', uni: true, pat: 'Rotación' },
  { id: 'woodchopper-cable-low-to-high', name: 'Leñador en Polea Baja hacia Arriba', nameEn: 'Low-to-High Cable Woodchopper', target: 'Abs', sec: ['Glutes', 'Shoulders'], eq: 'Cable', uni: true, pat: 'Rotación' },
  { id: 'landmine-rotations-core', name: 'Rotaciones en Landmine para Oblicuos', nameEn: 'Barbell Landmine Core Rotations', target: 'Abs', sec: ['Shoulders', 'Back'], eq: 'Barbell', diff: 'Intermedio', pat: 'Rotación' },
  { id: 'landmine-anti-rotation', name: 'Sostenimiento Antirrotación en Landmine', nameEn: 'Landmine Anti-Rotation Hold', target: 'Abs', sec: ['Shoulders'], eq: 'Barbell', diff: 'Intermedio', pat: 'Anti-Rotación' },
  { id: 'hanging-oblique-knee-tuck', name: 'Elevación de Rodillas Cruzada Colgado en Barra', nameEn: 'Hanging Oblique Knee Raise', target: 'Abs', sec: ['Forearms'], diff: 'Intermedio', pat: 'Rotación' },
  { id: 'plank-shoulder-taps', name: 'Plancha Alta con Toques de Hombro Alternos', nameEn: 'Plank Shoulder Taps', target: 'Abs', sec: ['Shoulders'], uni: true, pat: 'Anti-Rotación' },
  { id: 'bear-crawl-pull-through', name: 'Arrastre de Saco o Pesa en Posición de Oso', nameEn: 'Bear Crawl Sandbag Pull-Through', target: 'Abs', sec: ['Shoulders'], eq: 'Kettlebell', diff: 'Intermedio', pat: 'Anti-Rotación' },
  { id: 'plank-cable-row', name: 'Remo en Plancha Unilateral en Polea', nameEn: 'Plank Single-Arm Cable Row', target: 'Back', sec: ['Abs', 'Shoulders'], eq: 'Cable', diff: 'Avanzado', uni: true, pat: 'Tirón Horizontal' },
  { id: 'pot-stirrer-ab-wheel', name: 'Círculos con Rueda Abdominal (Pot Stirrers)', nameEn: 'Ab Wheel Circular Rollout', target: 'Abs', sec: ['Shoulders'], diff: 'Avanzado', pat: 'Anti-Rotación' },
  { id: 'seated-med-ball-rotational-throw', name: 'Lanzamiento Rotacional de Balón Medicinal Sentado', nameEn: 'Seated Medicine Ball Rotational Wall Throw', target: 'Abs', sec: ['Chest', 'Back'], eq: 'MedicineBall', uni: true, pat: 'Rotación' },
  { id: 'standing-med-ball-side-slam', name: 'Slam Lateral Rotacional de Balón al Suelo', nameEn: 'Rotational Medicine Ball Side Slam', target: 'Abs', sec: ['Glutes', 'Shoulders'], eq: 'MedicineBall', pat: 'Rotación' },
  { id: 'overhead-med-ball-slam', name: 'Slam Balístico Frontal de Balón Medicinal', nameEn: 'Overhead Medicine Ball Slam', target: 'Abs', sec: ['Lats', 'Shoulders'], eq: 'MedicineBall', pat: 'Explosivo' },
  { id: 'cable-kneeling-crunch', name: 'Crunch Abdominal Arrodillado en Polea Alta', nameEn: 'Kneeling Cable Abdominal Crunch', target: 'Abs', sec: [], eq: 'Cable', pat: 'Anti-Extensión' },
  { id: 'captain-chair-leg-raise', name: 'Elevación de Piernas en Silla del Capitán', nameEn: 'Captain’s Chair Vertical Leg Raise', target: 'Abs', sec: ['HipFlexors'], eq: 'Machine', pat: 'Anti-Extensión' },
  { id: 'decline-bench-sit-up-weighted', name: 'Sit-Up en Banco Declinado con Disco al Pecho', nameEn: 'Weighted Decline Bench Sit-Up', target: 'Abs', sec: ['HipFlexors'], eq: 'Dumbbell', diff: 'Intermedio', pat: 'Anti-Extensión' },
  { id: 'garhammer-raise-bench', name: 'Elevación Garhammer de Pelvis en Banco', nameEn: 'Garhammer Abdominal Bench Pulse', target: 'Abs', sec: [], pat: 'Anti-Extensión' },
  { id: 'caterpillar-walk-plank', name: 'Caminata de Oruga a Plancha Larga (Long Lever)', nameEn: 'Long-Lever Extended Plank Walkouts', target: 'Abs', sec: ['Shoulders'], diff: 'Avanzado', pat: 'Anti-Extensión' },
  { id: 'turkish-sit-up-dumbbell', name: 'Sit-Up Turco con Mancuerna Vertical', nameEn: 'Dumbbell Turkish Sit-Up', target: 'Abs', sec: ['Shoulders'], eq: 'Dumbbell', uni: true, pat: 'Anti-Extensión' },
  { id: 'side-plank-star', name: 'Plancha Lateral en Estrella con Brazo y Pierna Arriba', nameEn: 'Side Plank Star Hold', target: 'Abs', sec: ['Abductors', 'Shoulders'], diff: 'Avanzado', uni: true, pat: 'Anti-Rotación' },
  { id: 'body-saw-plank-sliders', name: 'Sierra Corporal en Plancha con Deslizadores', nameEn: 'Body Saw Plank on Sliders or Towel', target: 'Abs', sec: ['Shoulders'], diff: 'Intermedio', pat: 'Anti-Extensión' },
  { id: 'ab-crunch-stability-ball', name: 'Crunch Abdominal sobre Balón Suizo con Gran Recorrido', nameEn: 'Stability Ball Extended Range Crunch', target: 'Abs', sec: [], eq: 'StabilityBall', pat: 'Anti-Extensión' },
  { id: 'stability-ball-pike', name: 'Pica en Balón Suizo desde Plancha', nameEn: 'Stability Ball Plank to Pike', target: 'Abs', sec: ['Shoulders'], diff: 'Intermedio', eq: 'StabilityBall', pat: 'Anti-Extensión' },
  { id: 'stability-ball-knee-tuck', name: 'Recogida de Rodillas al Pecho en Balón Suizo', nameEn: 'Stability Ball Knee Tuck In', target: 'Abs', sec: ['HipFlexors'], eq: 'StabilityBall', pat: 'Anti-Extensión' },
  { id: 'reverse-hyperextension-bench', name: 'Hiperextensión Inversa en Banco para Cadena Posterior', nameEn: 'Reverse Hyperextension on Flat Bench', target: 'LowerBack', sec: ['Glutes', 'Hamstrings'], pat: 'Bisagra de Cadera' },
  { id: 'back-hyperextension-45-degree', name: 'Hiperextensión a 45 Grados en Banco Romano', nameEn: '45-Degree Back Extension on Roman Chair', target: 'LowerBack', sec: ['Glutes', 'Hamstrings'], eq: 'Machine', pat: 'Bisagra de Cadera' },
  { id: 'good-morning-barbell-heavy', name: 'Buenos Días con Barra para Erectores Espinales', nameEn: 'Barbell Good Morning', target: 'LowerBack', sec: ['Hamstrings', 'Glutes'], eq: 'Barbell', diff: 'Intermedio', pat: 'Bisagra de Cadera' },
  { id: 'jefferson-curl-barbell', name: 'Curl Jefferson con Barra para Flexión Vertebral Controlada', nameEn: 'Jefferson Curl for Spinal Articulation', target: 'LowerBack', sec: ['Hamstrings'], eq: 'Barbell', diff: 'Avanzado', pat: 'Movilidad' },
  { id: 'standing-cable-anti-flexion-chop', name: 'Bloqueo Antiflexión Lateral en Polea', nameEn: 'Standing Lateral Anti-Flexion Cable Hold', target: 'Abs', sec: ['Glutes'], eq: 'Cable', uni: true, pat: 'Anti-Rotación' },
  { id: 'sled-push-prowler', name: 'Empuje de Trineo Pesado (Prowler Sled Push)', nameEn: 'Heavy Prowler Sled Push', target: 'Quads', sec: ['Glutes', 'Calves', 'Cardio'], eq: 'Sled', pat: 'Sentadilla' },
  { id: 'sled-drag-backward', name: 'Arrastre de Trineo Marchando hacia Atrás', nameEn: 'Backward Sled Drag for Knee Resilience', target: 'Quads', sec: ['Calves'], eq: 'Sled', pat: 'Sentadilla' }
];

coreDefs.forEach(c => {
  addEx({
    id: c.id,
    name: c.name,
    nameEn: c.nameEn,
    primaryMuscle: c.target,
    secondaryMuscles: c.sec,
    stabilizers: ['Abs'],
    equipment: c.eq || 'Bodyweight',
    difficulty: c.diff || 'Principiante',
    category: c.eq === 'Sled' ? 'Funcional' : 'Isométrico',
    mechanics: 'Compuesto',
    movementPattern: c.pat || 'Anti-Extensión',
    isUnilateral: !!c.uni,
    trackingType: c.target === 'Abs' && c.name.toLowerCase().includes('hold') ? 'Tiempo' : 'Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Core',
    instructions: [
      `Posiciónate para ${c.name.toLowerCase()} con la faja abdominal fuertemente activada.`,
      `Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.`,
      `Mantén la respiración diafragmática fluida sin perder presión intraabdominal.`
    ],
    tips: ['El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas.'],
    breathingCue: 'Respiración corta y presurizada manteniendo el abdomen endurecido.',
    alternatives: ['plank', 'dead-bug']
  });
});

// ========================================================
// C. PLIOMETRÍA Y POTENCIA EXPLOSIVA (20 ejercicios)
// ========================================================
const plyoDefs = [
  { id: 'box-jump-standard', name: 'Salto al Cajón Pliométrico', nameEn: 'Standard Plyometric Box Jump', target: 'Quads', sec: ['Glutes', 'Calves'], eq: 'Box' },
  { id: 'box-jump-step-down', name: 'Salto al Cajón con Bajada Caminando', nameEn: 'Box Jump with Step-Down', target: 'Quads', sec: ['Glutes', 'Calves'], eq: 'Box' },
  { id: 'depth-jump-reactive', name: 'Salto de Profundidad Reactivo (Depth Jump)', nameEn: 'Depth Jump for Reactive Elastic Power', target: 'Quads', sec: ['Calves', 'Glutes'], diff: 'Avanzado', eq: 'Box' },
  { id: 'broad-jump-standing', name: 'Salto Horizontal de Longitud a Dos Pies', nameEn: 'Standing Long Jump (Broad Jump)', target: 'Glutes', sec: ['Quads', 'Hamstrings'] },
  { id: 'vertical-jump-countermovement', name: 'Salto Vertical con Contramovimiento (CMJ)', nameEn: 'Countermovement Vertical Jump (CMJ)', target: 'Quads', sec: ['Glutes', 'Calves'] },
  { id: 'tuck-jump-plyo', name: 'Salto con Rodillas al Pecho en el Aire (Tuck Jump)', nameEn: 'Tuck Jump High Impact Drill', target: 'Abs', sec: ['Quads', 'Calves'] },
  { id: 'lateral-bound-heiden', name: 'Salto Lateral a Una Pierna (Heiden Jump)', nameEn: 'Lateral Bound Heiden Jump', target: 'Glutes', sec: ['Abductors', 'Calves'], uni: true },
  { id: 'split-squat-jump', name: 'Salto en Tijera Alternando Piernas en el Aire', nameEn: 'Jumping Split Squat Lunges', target: 'Quads', sec: ['Glutes', 'Calves'], uni: true },
  { id: 'burpee-chest-to-ground', name: 'Burpee Completo con Pecho a Tierra', nameEn: 'Full Chest-to-Ground Burpee', target: 'Cardio', sec: ['Chest', 'Quads', 'Triceps'] },
  { id: 'squat-thrust-burpee', name: 'Squat Thrust sin Flexión (Sprawl)', nameEn: 'Squat Thrust / Sprawl', target: 'Cardio', sec: ['Abs', 'Quads'] },
  { id: 'jump-squat-plyometric', name: 'Sentadilla con Salto Vertical Continuo', nameEn: 'Continuous Plyometric Jump Squat', target: 'Quads', sec: ['Glutes', 'Calves'] },
  { id: 'single-leg-box-jump', name: 'Salto al Cajón a Una Pierna', nameEn: 'Single-Leg Box Jump', target: 'Quads', sec: ['Glutes', 'Calves'], diff: 'Avanzado', eq: 'Box', uni: true },
  { id: 'med-ball-chest-pass-explosive', name: 'Pase Pectoral Explosivo de Balón contra Pared', nameEn: 'Explosive Medicine Ball Chest Pass to Wall', target: 'Chest', sec: ['Triceps', 'Shoulders'], eq: 'MedicineBall' },
  { id: 'plyometric-push-up-box', name: 'Flexión Pliométrica con Manos al Cajón', nameEn: 'Incline Plyometric Push-Up on Box', target: 'Chest', sec: ['Triceps'], eq: 'Box' },
  { id: 'depth-pushup-blocks', name: 'Flexión con Caída Reactiva desde Bloques', nameEn: 'Depth Push-Up from Drop Blocks', target: 'Chest', sec: ['Triceps', 'Shoulders'], diff: 'Avanzado' },
  { id: 'hurdle-hops-continuous', name: 'Saltos Continuos por Encima de Mini-Vallas', nameEn: 'Continuous Mini-Hurdle Forward Hops', target: 'Calves', sec: ['Quads'], diff: 'Intermedio' },
  { id: 'skater-bounds-reactive', name: 'Patinadores Laterales Reactivos con Palo o Cono', nameEn: 'Reactive Lateral Skater Bounds', target: 'Glutes', sec: ['Abductors'], uni: true },
  { id: 'band-assisted-jump-squat', name: 'Sentadilla con Salto Asistida por Banda Elástica', nameEn: 'Band-Assisted Overspeed Jump Squat', target: 'Quads', sec: ['Glutes'], eq: 'Band' },
  { id: 'trap-bar-jump-shrug', name: 'Salto con Encogimiento en Barra Hexagonal (Jump Shrug)', nameEn: 'Trap Bar Jump Shrug Power Pull', target: 'Traps', sec: ['Quads', 'Glutes'], eq: 'Trap Bar', diff: 'Avanzado' },
  { id: 'dumbbell-jump-squat-light', name: 'Sentadilla con Salto con Mancuernas Ligeras', nameEn: 'Light Dumbbell Loaded Jump Squat', target: 'Quads', sec: ['Glutes'], eq: 'Dumbbell', diff: 'Intermedio' }
];

plyoDefs.forEach(p => {
  addEx({
    id: p.id,
    name: p.name,
    nameEn: p.nameEn,
    primaryMuscle: p.target,
    secondaryMuscles: p.sec,
    stabilizers: ['Abs'],
    equipment: p.eq || 'Bodyweight',
    difficulty: p.diff || 'Intermedio',
    category: 'Pliométrico',
    mechanics: 'Compuesto',
    movementPattern: 'Explosivo',
    isUnilateral: !!p.uni,
    trackingType: 'Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Empuje',
    instructions: [
      `Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para ${p.name.toLowerCase()}.`,
      `Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.`,
      `Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa.`
    ],
    tips: ['La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada.'],
    breathingCue: 'Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.',
    alternatives: ['box-jump-standard', 'vertical-jump-countermovement']
  });
});

// ========================================================
// D. LEVANTAMIENTO OLÍMPICO Y DERIVADOS (20 ejercicios)
// ========================================================
const olympicDefs = [
  { id: 'power-clean-barbell', name: 'Power Clean con Barra desde el Suelo', nameEn: 'Barbell Power Clean from Floor', target: 'Glutes', sec: ['Hamstrings', 'Traps', 'Back', 'Quads'] },
  { id: 'hang-clean-barbell', name: 'Hang Clean con Barra desde Rodillas', nameEn: 'Barbell Hang Clean (Hang Power Clean)', target: 'Glutes', sec: ['Hamstrings', 'Traps'] },
  { id: 'clean-and-jerk-olympic', name: 'Dos Tiempos Olímpico Completo (Clean & Jerk)', nameEn: 'Olympic Clean and Jerk', target: 'Quads', sec: ['Shoulders', 'Glutes', 'Traps', 'Triceps'], diff: 'Avanzado' },
  { id: 'power-snatch-barbell', name: 'Power Snatch (Arrancada de Potencia)', nameEn: 'Barbell Power Snatch from Floor', target: 'Glutes', sec: ['Hamstrings', 'Shoulders', 'Traps'], diff: 'Avanzado' },
  { id: 'hang-snatch-barbell', name: 'Hang Snatch desde los Muslos', nameEn: 'Barbell Hang Power Snatch', target: 'Glutes', sec: ['Traps', 'Back'], diff: 'Avanzado' },
  { id: 'split-jerk-barbell', name: 'Envión en Tijera (Split Jerk)', nameEn: 'Barbell Split Jerk from Racks', target: 'Shoulders', sec: ['Quads', 'Triceps', 'Glutes'], diff: 'Avanzado' },
  { id: 'push-jerk-barbell', name: 'Push Jerk con Barra Olímpica', nameEn: 'Barbell Push Jerk Power Drive', target: 'Shoulders', sec: ['Quads', 'Triceps'], diff: 'Intermedio' },
  { id: 'clean-pull-barbell', name: 'Tirón de Cargada Pesado (Clean Pull)', nameEn: 'Barbell Heavy Clean Pull', target: 'Traps', sec: ['Hamstrings', 'Glutes', 'Back'] },
  { id: 'snatch-pull-barbell', name: 'Tirón de Arrancada con Agarre Ancho', nameEn: 'Barbell Snatch Pull', target: 'Traps', sec: ['Hamstrings', 'Back'] },
  { id: 'overhead-squat-olympic', name: 'Sentadilla de Arrancada Olímpica (Overhead Squat)', nameEn: 'Olympic Barbell Overhead Squat', target: 'Quads', sec: ['Shoulders', 'Back', 'Abs'], diff: 'Avanzado' },
  { id: 'snatch-balance-barbell', name: 'Snatch Balance para Velocidad bajo la Barra', nameEn: 'Barbell Snatch Balance Drill', target: 'Shoulders', sec: ['Quads', 'Traps'], diff: 'Avanzado' },
  { id: 'muscle-clean-barbell', name: 'Muscle Clean de Calentamiento sin Flexión de Rodillas', nameEn: 'Barbell Muscle Clean Warmup Drill', target: 'Traps', sec: ['Biceps', 'Shoulders'] },
  { id: 'muscle-snatch-barbell', name: 'Muscle Snatch sin Metida', nameEn: 'Barbell Muscle Snatch Drill', target: 'Shoulders', sec: ['Traps', 'Back'] },
  { id: 'tall-clean-barbell', name: 'Tall Clean desde Bipedestación', nameEn: 'Barbell Tall Clean Turnover Drill', target: 'Traps', sec: ['Quads'], diff: 'Avanzado' },
  { id: 'tall-snatch-barbell', name: 'Tall Snatch para Rapidez de Entrada', nameEn: 'Barbell Tall Snatch Turnover Drill', target: 'Shoulders', sec: ['Traps'], diff: 'Avanzado' },
  { id: 'clean-deadlift-barbell', name: 'Peso Muerto con Postura Específica de Cargada', nameEn: 'Clean Grip Barbell Deadlift', target: 'Quads', sec: ['Hamstrings', 'Traps', 'Back'] },
  { id: 'snatch-deadlift-barbell', name: 'Peso Muerto con Agarre Ancho de Arrancada', nameEn: 'Snatch Grip Barbell Deadlift', target: 'Back', sec: ['Hamstrings', 'Traps', 'Forearms'] },
  { id: 'block-clean-power', name: 'Clean desde Bloques Altos (Block Clean)', nameEn: 'Clean from High Pulling Blocks', target: 'Glutes', sec: ['Traps'], diff: 'Avanzado' },
  { id: 'block-snatch-power', name: 'Snatch desde Bloques (Block Snatch)', nameEn: 'Snatch from Pulling Blocks', target: 'Glutes', sec: ['Shoulders', 'Traps'], diff: 'Avanzado' },
  { id: 'jerk-recovery-barbell', name: 'Recuperación de Envión en Rack Alto', nameEn: 'Barbell Jerk Drive and Recovery', target: 'Quads', sec: ['Shoulders'], diff: 'Avanzado' }
];

olympicDefs.forEach(o => {
  addEx({
    id: o.id,
    name: o.name,
    nameEn: o.nameEn,
    primaryMuscle: o.target,
    secondaryMuscles: o.sec,
    stabilizers: ['Abs', 'LowerBack'],
    equipment: 'Barbell',
    difficulty: o.diff || 'Intermedio',
    category: 'Olímpico',
    mechanics: 'Compuesto',
    movementPattern: 'Explosivo',
    isUnilateral: false,
    trackingType: 'Peso×Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Tirón',
    instructions: [
      `Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para ${o.name.toLowerCase()}.`,
      `Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.`,
      `Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.`,
      `Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros.`
    ],
    tips: ['El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia.'],
    breathingCue: 'Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.',
    alternatives: ['barbell-deadlift', 'kettlebell-snatch-single-arm']
  });
});

fs.writeFileSync(
  path.join(__dirname, '../src/data/batches/batch_05_kb_core_plyo_oly120.json'),
  JSON.stringify(generated, null, 2),
  'utf8'
);

console.log(`✅ Lote 05 (Kettlebell, Core, Pliometría y Halterofilia - ${generated.length} ejercicios) generado con éxito.`);
