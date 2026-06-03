/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Exercise } from '../types';

export const EXERCISES_DB: Exercise[] = [
  // --- PECHO (CHEST) ---
  {
    id: 'barbell-bench-press',
    name: 'Press de Banca con Barra',
    nameEn: 'Barbell Bench Press',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Shoulders', 'Triceps'],
    equipment: 'Barbell',
    difficulty: 'Intermedio',
    forceType: 'Empuje',
    instructions: [
      'Acuéstate libremente en el banco plano, con la cabeza, espalda alta y glúteos apoyados.',
      'Sujeta la barra con las manos un poco más anchas que los hombros.',
      'Desengancha la barra de forma controlada y colócala sobre el centro del pecho.',
      'Baja la barra lentamente doblando los codos a unos 45 grados de tu torso hasta rozar la línea media del pecho.',
      'Empuja la barra con fuerza y estabilidad de regreso a la posición de brazos extendidos, sin bloquear los codos por completo.'
    ],
    alternatives: ['dumbbell-bench-press', 'chest-press-machine', 'incline-barbell-bench-press']
  },
  {
    id: 'dumbbell-bench-press',
    name: 'Press de Banca con Mancuernas',
    nameEn: 'Dumbbell Bench Press',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Shoulders', 'Triceps'],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    forceType: 'Empuje',
    instructions: [
      'Siéntate en un banco plano con una mancuerna en cada rodilla.',
      'Acuéstate hacia atrás mientras llevas las mancuernas al pecho con la ayuda de tus piernas.',
      'Sostén las mancuernas sobre tu pecho alineadas con tus codos bajando a unos 90 grados.',
      'Empuja las mancuernas hacia arriba en un movimiento semicircular controlado hacia el centro.',
      'Baja de regreso estirando el pecho de forma constante.'
    ],
    alternatives: ['barbell-bench-press', 'incline-dumbbell-bench-press', 'chest-press-machine']
  },
  {
    id: 'incline-barbell-bench-press',
    name: 'Press de Banca Inclinado con Barra',
    nameEn: 'Incline Barbell Bench Press',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Shoulders', 'Triceps'],
    equipment: 'Barbell',
    difficulty: 'Intermedio',
    forceType: 'Empuje',
    instructions: [
      'Alinea el banco a unos 30 o 45 grados de inclinación.',
      'Acuéstate bocarriba y toma la barra un poco más ancha que tus hombros.',
      'Retira la barra del soporte y bájala lentamente hacia la parte alta del pecho.',
      'Empuja con los tríceps y el pecho alto para subir el peso verticalmente.',
      'Inhala al bajar, exhala con fuerza al empujar el peso.'
    ],
    alternatives: ['incline-dumbbell-bench-press', 'barbell-bench-press']
  },
  {
    id: 'incline-dumbbell-bench-press',
    name: 'Press de Banca Inclinado con Mancuernas',
    nameEn: 'Incline Dumbbell Bench Press',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Shoulders', 'Triceps'],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    forceType: 'Empuje',
    instructions: [
      'Asegura una inclinación del banco entre 30 y 45 grados.',
      'Empuja las mancuernas hacia arriba empezando desde los lados de tus hombros superiores.',
      'Controla el descenso de manera que tus codos formen un ángulo cómodo e higiénico.',
      'Asegúrate de no chocar las mancuernas al tope de la fase de ascenso para mantener tensión.'
    ],
    alternatives: ['incline-barbell-bench-press', 'dumbbell-bench-press']
  },
  {
    id: 'cable-crossover',
    name: 'Cruces de Polea Alta',
    nameEn: 'Cable Crossover',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Shoulders'],
    equipment: 'Cable',
    difficulty: 'Intermedio',
    forceType: 'Empuje',
    instructions: [
      'Coloca las poleas a una altura superior a tu cabeza en ambas columnas del crossover.',
      'Sujeta los agarres D, da un paso adelante para tensar el cable y flexiona levemente las rodillas y codos.',
      'Lleva los brazos hacia adelante y abajo en un arco de círculo encontrando tus manos al frente del abdomen bajo.',
      'Regresa lentamente abriendo los brazos controlando el tirón del cable.'
    ],
    alternatives: ['dumbbell-bench-press']
  },
  {
    id: 'push-up',
    name: 'Flexiones de Pecho',
    nameEn: 'Push-Up',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Shoulders', 'Triceps', 'Abs'],
    equipment: 'Bodyweight',
    difficulty: 'Principiante',
    forceType: 'Empuje',
    instructions: [
      'Colócate boca abajo en el suelo apoyando manos a ancho de hombros y las puntas de tus pies.',
      'Mantén todo tu cuerpo en línea recta sin doblar la cadera.',
      'Baja doblando los codos hacia atrás formando una flecha con tu cabeza (no codos de 90 grados).',
      'Empuja el suelo con fuerza regresando a la plancha de inicio.'
    ],
    alternatives: ['barbell-bench-press', 'chest-press-machine']
  },

  // --- ESPALDA (BACK) ---
  {
    id: 'deadlift',
    name: 'Peso Muerto con Barra',
    nameEn: 'Barbell Deadlift',
    primaryMuscle: 'Back',
    secondaryMuscles: ['Hamstrings', 'Glutes', 'Forearms'],
    equipment: 'Barbell',
    difficulty: 'Avanzado',
    forceType: 'Tirón',
    instructions: [
      'Párate frente a la barra con los pies al ancho de las caderas, la barra debe cruzar la mitad del pie.',
      'Doble la cadera inclinándote hacia abajo para tomar la barra y acomoda la espalda de forma neutra y recta.',
      'Mantén los hombros alineados con la barra y dobla un poco las rodillas hasta que la espinilla toque la barra.',
      'Presiona el suelo con los talones y mantén la barra pegada a ti mientras te pones de pie de manera erguida.',
      'Bloquea arriba con fuerza sin hiperextender excesivamente la espalda baja.'
    ],
    alternatives: ['romanian-deadlift']
  },
  {
    id: 'pull-up',
    name: 'Dominadas Prone',
    nameEn: 'Pull-Up',
    primaryMuscle: 'Back',
    secondaryMuscles: ['Biceps', 'Shoulders', 'Forearms'],
    equipment: 'Bodyweight',
    difficulty: 'Avanzado',
    forceType: 'Tirón',
    instructions: [
      'Sujétate de la barra de dominadas con un agarre prono (palmas hacia adelante) más ancho que los hombros.',
      'Cuelga con los brazos completamente estirados y saca pecho levemente.',
      'Tira de tu cuerpo hacia arriba retrayendo los omóplatos, llevando tu pecho hacia la barra.',
      'Llega con la barbilla sobre la barra sin balancear las piernas.',
      'Baja suave y controladamente hasta la posición extendida de inicio.'
    ],
    alternatives: ['lat-pulldown', 'seated-cable-row']
  },
  {
    id: 'lat-pulldown',
    name: 'Jalón al Pecho en Polea',
    nameEn: 'Lat Pulldown',
    primaryMuscle: 'Back',
    secondaryMuscles: ['Biceps', 'Forearms'],
    equipment: 'Cable',
    difficulty: 'Principiante',
    forceType: 'Tirón',
    instructions: [
      'Siéntate en la máquina ajustando el colchón a tus muslos para que no te levantes.',
      'Sujeta la barra con agarre amplio prono y sostén con los brazos totalmente estirados.',
      'Inclina ligeramente el torso hacia atrás y conduce los codos hacia abajo bajando la barra a tu pecho alto.',
      'Concentra la fuerza en juntar tus codos a los costados antes que jalar con los puños.',
      'Extiende lentamente de regreso estirando los dorsales por completo.'
    ],
    alternatives: ['pull-up', 'seated-cable-row']
  },
  {
    id: 'barbell-row',
    name: 'Remo con Barra',
    nameEn: 'Barbell Row',
    primaryMuscle: 'Back',
    secondaryMuscles: ['Biceps', 'Forearms'],
    equipment: 'Barbell',
    difficulty: 'Intermedio',
    forceType: 'Tirón',
    instructions: [
      'Sostén una barra cargada con agarre prono y colócate de pie.',
      'Flexiona la cadera enviando los glúteos atrás y la espalda perfectamente neutra en un ángulo de casi 45 grados.',
      'Jala la barra verticalmente hacia tu ombligo levantando los codos por encima del torso.',
      'Mantén los codos pegados a ti y aprieta la espalda al final.',
      'Baja la barra de vuelta de forma extendida y controlada.'
    ],
    alternatives: ['dumbbell-single-row', 'seated-cable-row']
  },
  {
    id: 'dumbbell-single-row',
    name: 'Remo a una Mano con Mancuerna',
    nameEn: 'Dumbbell Single-Arm Row',
    primaryMuscle: 'Back',
    secondaryMuscles: ['Biceps', 'Forearms'],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    forceType: 'Tirón',
    instructions: [
      'Apoya una rodilla y la mano del mismo lado sobre un banco plano.',
      'Mantén la espalda paralela al suelo y sujeta una mancuerna con el brazo libre extendido.',
      'Jala la mancuerna hacia tu cadera, elevando el codo hacia el techo y manteniendo el brazo rozando tu costado.',
      'Baja con lentitud estirando el hombro sin rotar la columna.'
    ],
    alternatives: ['barbell-row', 'seated-cable-row']
  },

  // --- HOMBROS (SHOULDERS) ---
  {
    id: 'overhead-press',
    name: 'Press Militar de Hombro con Barra',
    nameEn: 'Barbell Overhead Press',
    primaryMuscle: 'Shoulders',
    secondaryMuscles: ['Triceps', 'Abs'],
    equipment: 'Barbell',
    difficulty: 'Avanzado',
    forceType: 'Empuje',
    instructions: [
      'Párate con los pies al ancho de tus caderas y descansa la barra sobre tus clavículas o pecho alto.',
      'Aprieta fuerte tus glúteos y tu abdomen para dar estabilidad a tu espalda baja.',
      'Empuja la barra rectamente hacia el techo pasando cerca de tu cara y bloqueando suave arriba.',
      'Pasa la cabeza levemente hacia adelante una vez la barra libre tu frente.',
      'Baja controladamente de vuelta a tus clavículas.'
    ],
    alternatives: ['dumbbell-shoulder-press']
  },
  {
    id: 'dumbbell-shoulder-press',
    name: 'Press de Hombro con Mancuernas',
    nameEn: 'Dumbbell Shoulder Press',
    primaryMuscle: 'Shoulders',
    secondaryMuscles: ['Triceps'],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    forceType: 'Empuje',
    instructions: [
      'Siéntate en un banco con respaldo vertical casi en 90 grados.',
      'Lleva las mancuernas sobre tus hombros con los codos apuntando en diagonal (no rectos a los lados).',
      'Empuja el peso verticalmente hacia arriba hasta estirar por completo los brazos.',
      'Baja lentamente hasta que tus manos estén a la altura de las orejas.'
    ],
    alternatives: ['overhead-press']
  },
  {
    id: 'lateral-raise',
    name: 'Elevaciones Laterales con Mancuernas',
    nameEn: 'Dumbbell Lateral Raise',
    primaryMuscle: 'Shoulders',
    secondaryMuscles: [],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    forceType: 'Empuje',
    instructions: [
      'Párate erguido con una mancuerna en cada mano colgando a los lados.',
      'Con los codos ligeramente flexionados, eleva los brazos hacia los costados en un plano levemente escapular (30 grados adelante).',
      'Sube hasta la altura de tus hombros en paralelo al suelo de tal manera que el dedo meñique apunte levemente arriba.',
      'Baja lentamente sintiendo la tensión en el deltoides lateral.'
    ],
    alternatives: ['cable-lateral-raise']
  },

  // --- BÍCEPS (BICEPS) ---
  {
    id: 'barbell-curl',
    name: 'Curl de Bíceps con Barra EZ',
    nameEn: 'Barbell Curl',
    primaryMuscle: 'Biceps',
    secondaryMuscles: ['Forearms'],
    equipment: 'Barbell',
    difficulty: 'Principiante',
    forceType: 'Tirón',
    instructions: [
      'Sujeta la barra curva EZ frente a ti con agarre supino (palmas bocarriba) ancho de hombros.',
      'Mantén los codos pegados a tus costados y rígidos.',
      'Contrae los bíceps trayendo la barra hacia el pecho sin balancear la espalda.',
      'Aprieta arriba un segundo y desciende estirando suavemente el codo.'
    ],
    alternatives: ['dumbbell-curl', 'hammer-curl']
  },
  {
    id: 'hammer-curl',
    name: 'Curl de Bíceps Martillo',
    nameEn: 'Hammer Curl',
    primaryMuscle: 'Biceps',
    secondaryMuscles: ['Forearms'],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    forceType: 'Tirón',
    instructions: [
      'Sostén un par de mancuernas a los lados de tu torso con agarre neutro (las palmas se miran cara a cara).',
      'Sube la mancuerna verticalmente doblando el codo sin girar la muñeca.',
      'Asegúrate de no usar impulso en la parte baja del movimiento.',
      'Desciende con control absoluto de los flexores de codo.'
    ],
    alternatives: ['barbell-curl']
  },

  // --- TRÍCEPS (TRICEPS) ---
  {
    id: 'triceps-pushdown',
    name: 'Extensión de Tríceps en Polea Alta',
    nameEn: 'Triceps Cable Pushdown',
    primaryMuscle: 'Triceps',
    secondaryMuscles: [],
    equipment: 'Cable',
    difficulty: 'Principiante',
    forceType: 'Empuje',
    instructions: [
      'Coloca una soga o barra recta en la polea en posición superior y sujétala.',
      'Da un medio paso atrás inclinando un poco el torso hacia adelante, con los codos fijos a las costillas.',
      'Extiende el codo por completo empujando la soga hacia el suelo, abriéndola en el fondo del movimiento.',
      'Flexiona el codo dejando subir la soga hasta la altura del pecho superior de forma controlada.'
    ],
    alternatives: ['skull-crusher', 'bench-dips']
  },
  {
    id: 'skull-crusher',
    name: 'Rompecráneos / Press Francés',
    nameEn: 'Skull Crusher',
    primaryMuscle: 'Triceps',
    secondaryMuscles: [],
    equipment: 'Barbell',
    difficulty: 'Intermedio',
    forceType: 'Empuje',
    instructions: [
      'Acuéstate sobre un banco plano y sostén una barra EZ con los brazos estirados verticalmente sobre el rostro.',
      'Lleva los brazos ligeramente en diagonal hacia atrás para mantener los tríceps trabajando bajo tensión constante.',
      'Dobla únicamente el codo bajando la barra lentamente hacia tu frente o detrás de la cabeza.',
      'Utiliza los tríceps para empujar la barra a la posición de partida.'
    ],
    alternatives: ['triceps-pushdown']
  },

  // --- PIERNAS (LEGS) ---
  {
    id: 'barbell-squat',
    name: 'Sentadilla de Espalda con Barra',
    nameEn: 'Barbell Back Squat',
    primaryMuscle: 'Quads',
    secondaryMuscles: ['Glutes', 'Hamstrings', 'Abs'],
    equipment: 'Barbell',
    difficulty: 'Intermedio',
    forceType: 'Flexión/Extensión',
    instructions: [
      'Coloca la barra sobre el músculo trapecio superior de tu espalda alta (no en el cuello).',
      'Desengancha del rack dando uno o dos pasos moderados hacia atrás.',
      'Párate con pies al ancho de hombros con rodillas y puntas mirando levemente afuera.',
      'Baja mandando cadera atrás y doblando rodillas de forma paralela en cuclillas.',
      'Empuja con fuerza los talones y el centro de tus pies para subir de forma vertical y erguirte.'
    ],
    alternatives: ['leg-press', 'bulgarian-split-squat']
  },
  {
    id: 'leg-press',
    name: 'Prensa de Pierna de 45 Grados',
    nameEn: 'Leg Press',
    primaryMuscle: 'Quads',
    secondaryMuscles: ['Glutes', 'Hamstrings'],
    equipment: 'Machine',
    difficulty: 'Principiante',
    forceType: 'Flexión/Extensión',
    instructions: [
      'Acomódate en el asiento de la prensa recargando la espalda lumbar contra el respaldo.',
      'Coloca los pies en la plataforma en un patrón medio al ancho de caderas.',
      'Quita los pestillos de seguridad y baja la plataforma doblando las rodillas hasta un ángulo aproximado de 90 grados.',
      'Empuja con el talón y el tercio medio de la planta sin bloquear tus rodillas de golpe arriba.'
    ],
    alternatives: ['barbell-squat', 'leg-extension']
  },
  {
    id: 'romanian-deadlift',
    name: 'Peso Muerto Rumano con Barra',
    nameEn: 'Barbell Romanian Deadlift',
    primaryMuscle: 'Hamstrings',
    secondaryMuscles: ['Glutes', 'Back'],
    equipment: 'Barbell',
    difficulty: 'Intermedio',
    forceType: 'Flexión/Extensión',
    instructions: [
      'Sostén la barra verticalmente estando de pie con los hombros relajados espalda recta.',
      'Empieza a bajar la barra deslizando tus caderas directamente hacia atrás, como si quisieras empujar una puerta con los glúteos.',
      'Mantén los hombros estables y la barra muy pegada a tus muslos doblando casi nada las rodillas.',
      'Baja hasta que sientas el máximo estiramiento en los femorales traseros.',
      'Haz fuerza con los glúteos para volver a enderezarte.'
    ],
    alternatives: ['dumbbell-rdl', 'seated-leg-curl']
  },
  {
    id: 'bulgarian-split-squat',
    name: 'Sentadilla Búlgara con Mancuerna',
    nameEn: 'Bulgarian Split Squat',
    primaryMuscle: 'Quads',
    secondaryMuscles: ['Glutes', 'Hamstrings'],
    equipment: 'Dumbbell',
    difficulty: 'Intermedio',
    forceType: 'Flexión/Extensión',
    instructions: [
      'Coloca un pie de apoyo atrás descansando el empeine del pie sobre un banco plano.',
      'Da un paso moderado adelante con el otro pie sosteniendo una mancuerna en cada mano.',
      'Desciende de forma vertical bajando la rodilla trasera hacia el suelo curvando levemente el torso si deseas enfatizar glúteo.',
      'Empuja firmemente con el talón de la pierna delantera para regresar erguido.'
    ],
    alternatives: ['barbell-squat', 'leg-press']
  },
  {
    id: 'barbell-hip-thrust',
    name: 'Hip Thrust con Barra para Glúteo',
    nameEn: 'Barbell Hip Thrust',
    primaryMuscle: 'Glutes',
    secondaryMuscles: ['Hamstrings'],
    equipment: 'Barbell',
    difficulty: 'Principiante',
    forceType: 'Flexión/Extensión',
    instructions: [
      'Apoya tu espalda escapular alta firmemente contra el borde largo de un banco resistente.',
      'Coloca la barra acolchada justo sobre el pliegue de tu pelvis.',
      'Posiciona las rodillas dobladas a 90 grados apoyando firmemente la planta entera sobre el suelo.',
      'Empuja la cadera hacia arriba apretando los glúteos de manera que queden alineados con rodillas e inserciones.',
      'Baja controlando el peso a escasos centímetros del suelo.'
    ],
    alternatives: ['romanian-deadlift']
  },

  // --- CORE & ABDOMEN (ABS) ---
  {
    id: 'ab-plank',
    name: 'Plancha Abdominal',
    nameEn: 'Abdominal Plank',
    primaryMuscle: 'Abs',
    secondaryMuscles: ['Shoulders', 'Back'],
    equipment: 'None',
    difficulty: 'Principiante',
    forceType: 'Core',
    instructions: [
      'Apoya tus antebrazos en el suelo alineando los codos justo bajo los hombros.',
      'Estira tus piernas atrás apoyando las puntas de tus pies.',
      'Contrae activamente el abdomen, los glúteos y las piernas creando fuerza en bloque.',
      'Evita dejar caer la zona lumbar, mantén el cuello alineado neutro respirando rítmicamente.'
    ],
    alternatives: ['hanging-leg-raise']
  },
  {
    id: 'hanging-leg-raise',
    name: 'Elevación de Piernas Colgado',
    nameEn: 'Hanging Leg Raise',
    primaryMuscle: 'Abs',
    secondaryMuscles: ['Forearms'],
    equipment: 'Bodyweight',
    difficulty: 'Intermedio',
    forceType: 'Core',
    instructions: [
      'Cuelga de la barra de tracción con los brazos totalmente extendidos y el cuerpo suspendido.',
      'Usa tu fuerza abdominal sin balancear el torso para elevar los pies o rodillas hacia el nivel de tu pecho o barra.',
      'Baja con total lentitud controlando la fuerza excéntrica para no convertirte en péndulo.'
    ],
    alternatives: ['ab-plank']
  },

  // --- CARDIO ---
  {
    id: 'treadmill-run',
    name: 'Carrera en Cinta',
    nameEn: 'Treadmill Run',
    primaryMuscle: 'Cardio',
    secondaryMuscles: ['Quads', 'Calves'],
    equipment: 'Machine',
    difficulty: 'Principiante',
    forceType: 'Cardio',
    instructions: [
      'Configura la velocidad e inclinación en el monitor de control de la cinta.',
      'Mantén tu postura erguida, la vista hacia el frente y un apoyo uniforme del pie.',
      'Disfruta de una rutina constante de baja intensidad (LISS) o sprints rápidos progresivos.'
    ],
    alternatives: ['stationary-bike']
  }
];
