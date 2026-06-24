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
    id: 'decline-barbell-bench-press',
    name: 'Press de Banca Declinado con Barra',
    nameEn: 'Decline Barbell Bench Press',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Shoulders', 'Triceps'],
    equipment: 'Barbell',
    difficulty: 'Intermedio',
    forceType: 'Empuje',
    instructions: [
      'Asegura tus piernas en el soporte del banco declinado y acuéstate.',
      'Toma la barra con un agarre prono un poco más ancho que los hombros.',
      'Saca la barra del rack y bájala controladamente hacia la parte inferior del pecho.',
      'Empuja verticalmente hacia arriba contrayendo el pectoral inferior.'
    ],
    alternatives: ['decline-dumbbell-bench-press', 'barbell-bench-press']
  },
  {
    id: 'decline-dumbbell-bench-press',
    name: 'Press de Banca Declinado con Mancuernas',
    nameEn: 'Decline Dumbbell Bench Press',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Shoulders', 'Triceps'],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    forceType: 'Empuje',
    instructions: [
      'Siéntate en el banco declinado sosteniendo las mancuernas sobre los muslos.',
      'Acuéstate hacia atrás controlando el peso a los lados del pecho inferior.',
      'Empuja las mancuernas hacia arriba bloqueando suavemente arriba.',
      'Baja sintiendo el estiramiento en la porción inferior del pectoral.'
    ],
    alternatives: ['decline-barbell-bench-press', 'dumbbell-bench-press']
  },
  {
    id: 'chest-press-machine',
    name: 'Press de Pecho en Máquina',
    nameEn: 'Machine Chest Press',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Shoulders', 'Triceps'],
    equipment: 'Machine',
    difficulty: 'Principiante',
    forceType: 'Empuje',
    instructions: [
      'Ajusta la altura del asiento para que los agarres queden alineados con la mitad del pecho.',
      'Apoya la espalda firmemente contra el respaldo y toma los agarres.',
      'Empuja hacia adelante extendiendo los brazos sin bloquear por completo los codos.',
      'Regresa lentamente sintiendo la tensión constante en los pectorales.'
    ],
    alternatives: ['barbell-bench-press', 'dumbbell-bench-press']
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
    alternatives: ['dumbbell-fly', 'low-cable-crossover']
  },
  {
    id: 'low-cable-crossover',
    name: 'Cruces de Polea Baja',
    nameEn: 'Low Cable Crossover',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Shoulders'],
    equipment: 'Cable',
    difficulty: 'Intermedio',
    forceType: 'Empuje',
    instructions: [
      'Coloca las poleas en la posición más baja de las columnas.',
      'Toma los agarres D, da un paso adelante e inclina ligeramente el torso hacia el frente.',
      'Lleva las manos hacia adelante y hacia arriba hasta que se junten a la altura del pecho superior.',
      'Baja controladamente los brazos al punto de inicio.'
    ],
    alternatives: ['cable-crossover', 'incline-dumbbell-fly']
  },
  {
    id: 'dumbbell-fly',
    name: 'Aperturas con Mancuernas',
    nameEn: 'Dumbbell Fly',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Shoulders'],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    forceType: 'Empuje',
    instructions: [
      'Acuéstate en un banco plano sosteniendo las mancuernas sobre tu pecho con las palmas mirándose.',
      'Abre los brazos de forma lateral formando un arco amplio, doblando ligeramente los codos.',
      'Baja hasta sentir un estiramiento cómodo en el pecho.',
      'Contrae el pectoral para regresar las mancuernas a la posición de inicio.'
    ],
    alternatives: ['cable-crossover', 'pec-deck-fly']
  },
  {
    id: 'incline-dumbbell-fly',
    name: 'Aperturas Inclinadas con Mancuernas',
    nameEn: 'Incline Dumbbell Fly',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Shoulders'],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    forceType: 'Empuje',
    instructions: [
      'Acuéstate en un banco inclinado (30-45 grados) con las mancuernas en vertical sobre los hombros.',
      'Baja las mancuernas hacia los lados manteniendo una ligera flexión de codo.',
      'Sube contrayendo la parte alta de los pectorales.'
    ],
    alternatives: ['dumbbell-fly', 'low-cable-crossover']
  },
  {
    id: 'pec-deck-fly',
    name: 'Aperturas en Contratora (Pec Deck)',
    nameEn: 'Pec Deck Fly',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Shoulders'],
    equipment: 'Machine',
    difficulty: 'Principiante',
    forceType: 'Empuje',
    instructions: [
      'Siéntate con la espalda apoyada y los brazos extendidos hacia los lados tomando los agarres.',
      'Junta los agarres en el centro contrayendo activamente el pecho.',
      'Regresa lentamente al punto de inicio sin permitir que las pesas toquen el bloque.'
    ],
    alternatives: ['dumbbell-fly', 'cable-crossover']
  },
  {
    id: 'chest-dips',
    name: 'Fondos en Paralelas para Pecho',
    nameEn: 'Chest Dips',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Triceps', 'Shoulders'],
    equipment: 'Bodyweight',
    difficulty: 'Avanzado',
    forceType: 'Empuje',
    instructions: [
      'Sujétate de las barras paralelas y elévate extendiendo los brazos.',
      'Inclina el torso ligeramente hacia adelante y dobla las rodillas si es necesario.',
      'Baja el cuerpo doblando los codos hacia afuera hasta que tus hombros estén debajo de los codos.',
      'Empuja hacia arriba con fuerza focalizando el pectoral inferior.'
    ],
    alternatives: ['decline-barbell-bench-press', 'push-up']
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
  {
    id: 'decline-push-up',
    name: 'Flexiones Declina (Pies Elevados)',
    nameEn: 'Decline Push-Up',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Shoulders', 'Triceps'],
    equipment: 'Bodyweight',
    difficulty: 'Intermedio',
    forceType: 'Empuje',
    instructions: [
      'Coloca los pies sobre un banco o superficie elevada y las manos en el suelo.',
      'Mantén el torso y las piernas en línea recta.',
      'Baja el pecho hacia el suelo doblando los codos.',
      'Empuja con fuerza hacia arriba para volver a la posición inicial.'
    ],
    alternatives: ['push-up', 'incline-dumbbell-bench-press']
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
    alternatives: ['romanian-deadlift', 'sumo-deadlift']
  },
  {
    id: 'sumo-deadlift',
    name: 'Peso Muerto Sumo',
    nameEn: 'Sumo Deadlift',
    primaryMuscle: 'Back',
    secondaryMuscles: ['Glutes', 'Quads', 'Hamstrings'],
    equipment: 'Barbell',
    difficulty: 'Avanzado',
    forceType: 'Tirón',
    instructions: [
      'Adopta una postura muy ancha con las puntas de los pies apuntando hacia afuera.',
      'Baja las caderas y sujeta la barra por el centro con los brazos dentro de las piernas.',
      'Mantén la espalda recta e impulsa con las piernas para ponerte erguido.',
      'Bloquea la posición superior empujando las caderas hacia la barra.'
    ],
    alternatives: ['deadlift', 'barbell-squat']
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
    alternatives: ['lat-pulldown', 'chin-up', 'assisted-pull-up']
  },
  {
    id: 'chin-up',
    name: 'Dominadas Supinas',
    nameEn: 'Chin-Up',
    primaryMuscle: 'Back',
    secondaryMuscles: ['Biceps', 'Shoulders', 'Forearms'],
    equipment: 'Bodyweight',
    difficulty: 'Intermedio',
    forceType: 'Tirón',
    instructions: [
      'Sujétate de la barra con un agarre supino (palmas hacia ti) al ancho de hombros.',
      'Cuelga con brazos estirados y tira de tu cuerpo hacia arriba.',
      'Lleva la barbilla sobre la barra contrayendo los bíceps y dorsales.',
      'Desciende de forma controlada.'
    ],
    alternatives: ['pull-up', 'lat-pulldown']
  },
  {
    id: 'assisted-pull-up',
    name: 'Dominadas Asistidas en Máquina',
    nameEn: 'Assisted Pull-Up',
    primaryMuscle: 'Back',
    secondaryMuscles: ['Biceps', 'Forearms'],
    equipment: 'Machine',
    difficulty: 'Principiante',
    forceType: 'Tirón',
    instructions: [
      'Selecciona el peso de asistencia adecuado (a mayor peso, más fácil).',
      'Coloca las rodillas o pies en la plataforma de asistencia.',
      'Sujeta las barras superiores y realiza el movimiento de dominada controlando el descenso.'
    ],
    alternatives: ['lat-pulldown', 'pull-up']
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
    id: 'behind-neck-pulldown',
    name: 'Jalón Tras Nuca en Polea',
    nameEn: 'Behind Neck Pulldown',
    primaryMuscle: 'Back',
    secondaryMuscles: ['Biceps', 'Shoulders'],
    equipment: 'Cable',
    difficulty: 'Avanzado',
    forceType: 'Tirón',
    instructions: [
      'Siéntate en la máquina de jalones con agarre amplio.',
      'Mantén el torso erguido y baja la barra lentamente por detrás de la cabeza hasta la nuca.',
      'Evita movimientos bruscos para no tensionar los rotadores del hombro.',
      'Sube la barra controlando la fase excéntrica.'
    ],
    alternatives: ['lat-pulldown', 'pull-up']
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
    alternatives: ['dumbbell-single-row', 'seated-cable-row', 't-bar-row']
  },
  {
    id: 't-bar-row',
    name: 'Remo en Barra T',
    nameEn: 'T-Bar Row',
    primaryMuscle: 'Back',
    secondaryMuscles: ['Biceps', 'Forearms'],
    equipment: 'Machine',
    difficulty: 'Intermedio',
    forceType: 'Tirón',
    instructions: [
      'Colócate en la plataforma de la barra T y flexiona las rodillas y cadera.',
      'Toma las manijas con un agarre neutro o prono.',
      'Manteniendo la espalda recta, jala el peso hacia el pecho contrayendo la espalda media.',
      'Baja lentamente el peso extendiendo los brazos.'
    ],
    alternatives: ['barbell-row', 'seated-cable-row']
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
  {
    id: 'seated-cable-row',
    name: 'Remo Sentado en Polea con Agarre Gironda',
    nameEn: 'Seated Cable Row',
    primaryMuscle: 'Back',
    secondaryMuscles: ['Biceps', 'Forearms'],
    equipment: 'Cable',
    difficulty: 'Principiante',
    forceType: 'Tirón',
    instructions: [
      'Siéntate con los pies apoyados e inclínate para tomar el agarre estrecho.',
      'Enderézate con el torso perpendicular al suelo y los brazos extendidos.',
      'Jala el agarre hacia tu abdomen bajo retrayendo la espalda media y flexionando codos.',
      'Regresa extendiendo los brazos sin redondear la columna.'
    ],
    alternatives: ['barbell-row', 'dumbbell-single-row']
  },
  {
    id: 'chest-supported-dumbbell-row',
    name: 'Remo Apoyado en Banco con Mancuernas',
    nameEn: 'Chest-Supported Dumbbell Row',
    primaryMuscle: 'Back',
    secondaryMuscles: ['Biceps', 'Shoulders'],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    forceType: 'Tirón',
    instructions: [
      'Coloca un banco a unos 30 grados de inclinación.',
      'Acuéstate boca abajo apoyando el pecho contra el respaldo.',
      'Toma una mancuerna en cada mano y déjalas colgar estiradas.',
      'Jala los codos hacia arriba y atrás contrayendo la espalda sin despegar el pecho.'
    ],
    alternatives: ['dumbbell-single-row', 'barbell-row']
  },
  {
    id: 'straight-arm-pulldown',
    name: 'Pullover en Polea con Brazos Rectos',
    nameEn: 'Straight Arm Pulldown',
    primaryMuscle: 'Back',
    secondaryMuscles: ['Triceps', 'Chest'],
    equipment: 'Cable',
    difficulty: 'Intermedio',
    forceType: 'Tirón',
    instructions: [
      'Párate frente a la polea alta con una barra recta.',
      'Toma la barra a la altura de los hombros y da un paso atrás para estirar el cable.',
      'Inclinando un poco el torso hacia adelante, jala la barra con los brazos casi rectos hasta los muslos.',
      'Regresa lentamente al punto de inicio sintiendo el estiramiento del dorsal.'
    ],
    alternatives: ['lat-pulldown', 'barbell-pullover']
  },
  {
    id: 'barbell-pullover',
    name: 'Pullover con Barra',
    nameEn: 'Barbell Pullover',
    primaryMuscle: 'Back',
    secondaryMuscles: ['Chest', 'Triceps'],
    equipment: 'Barbell',
    difficulty: 'Intermedio',
    forceType: 'Tirón',
    instructions: [
      'Acuéstate a lo largo de un banco plano sosteniendo la barra directamente sobre tu pecho.',
      'Manteniendo los codos ligeramente flexionados, baja la barra detrás de la cabeza.',
      'Lleva la barra de regreso sobre el pecho contrayendo los dorsales y pectorales.'
    ],
    alternatives: ['straight-arm-pulldown', 'dumbbell-fly']
  },
  {
    id: 'back-hyperextension',
    name: 'Hiperextensiones Lumbares',
    nameEn: 'Back Hyperextension',
    primaryMuscle: 'Back',
    secondaryMuscles: ['Glutes', 'Hamstrings'],
    equipment: 'None',
    difficulty: 'Principiante',
    forceType: 'Core',
    instructions: [
      'Colócate en el banco de hiperextensiones con los tobillos asegurados.',
      'Flexiona la cadera bajando el torso de forma controlada con la espalda recta.',
      'Contrae la espalda baja y glúteos para levantar el torso hasta alinearlo con tus piernas.'
    ],
    alternatives: ['deadlift']
  },
  {
    id: 'barbell-shrug',
    name: 'Encogimientos de Hombros con Barra',
    nameEn: 'Barbell Shrug',
    primaryMuscle: 'Back',
    secondaryMuscles: ['Shoulders'],
    equipment: 'Barbell',
    difficulty: 'Principiante',
    forceType: 'Tirón',
    instructions: [
      'Párate erguido sosteniendo la barra delante de los muslos con agarre prono.',
      'Eleva los hombros verticalmente hacia las orejas lo más alto posible.',
      'Sostén un segundo arriba y baja controladamente.'
    ],
    alternatives: ['dumbbell-shrug']
  },
  {
    id: 'dumbbell-shrug',
    name: 'Encogimientos con Mancuernas',
    nameEn: 'Dumbbell Shrug',
    primaryMuscle: 'Back',
    secondaryMuscles: ['Shoulders'],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    forceType: 'Tirón',
    instructions: [
      'Sostén una mancuerna a cada lado de tu torso.',
      'Eleva los hombros hacia arriba sin doblar los codos y sin rotar los hombros hacia atrás.',
      'Baja el peso a la posición inicial.'
    ],
    alternatives: ['barbell-shrug']
  },

  // --- HOMBROS (SHOULDERS) ---
  {
    id: 'overhead-press',
    name: 'Press Militar con Barra',
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
    alternatives: ['dumbbell-shoulder-press', 'seated-barbell-press']
  },
  {
    id: 'seated-barbell-press',
    name: 'Press Militar Sentado con Barra',
    nameEn: 'Seated Barbell Press',
    primaryMuscle: 'Shoulders',
    secondaryMuscles: ['Triceps'],
    equipment: 'Barbell',
    difficulty: 'Intermedio',
    forceType: 'Empuje',
    instructions: [
      'Siéntate en un banco con soporte para barra.',
      'Toma la barra un poco más ancha que los hombros y sácala del soporte.',
      'Bájala lentamente hasta la barbilla y empuja verticalmente.'
    ],
    alternatives: ['overhead-press', 'dumbbell-shoulder-press']
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
    alternatives: ['overhead-press', 'arnold-press']
  },
  {
    id: 'arnold-press',
    name: 'Press Arnold con Mancuernas',
    nameEn: 'Arnold Press',
    primaryMuscle: 'Shoulders',
    secondaryMuscles: ['Triceps'],
    equipment: 'Dumbbell',
    difficulty: 'Intermedio',
    forceType: 'Empuje',
    instructions: [
      'Siéntate en un banco y sostén las mancuernas al nivel del pecho con palmas mirando hacia ti.',
      'Empuja las mancuernas hacia arriba mientras giras las muñecas 180 grados.',
      'En el tope del movimiento, las palmas deben mirar hacia adelante.',
      'Baja el peso girando las muñecas a la posición inicial.'
    ],
    alternatives: ['dumbbell-shoulder-press', 'overhead-press']
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
    alternatives: ['cable-lateral-raise', 'machine-lateral-raise']
  },
  {
    id: 'cable-lateral-raise',
    name: 'Elevaciones Laterales en Polea',
    nameEn: 'Cable Lateral Raise',
    primaryMuscle: 'Shoulders',
    secondaryMuscles: [],
    equipment: 'Cable',
    difficulty: 'Intermedio',
    forceType: 'Empuje',
    instructions: [
      'Párate de lado a la polea baja, sostén el agarre D con el brazo opuesto.',
      'Eleva el cable lateralmente cruzando el cuerpo hasta la altura del hombro.',
      'Regresa lentamente al punto de inicio.'
    ],
    alternatives: ['lateral-raise']
  },
  {
    id: 'machine-lateral-raise',
    name: 'Elevaciones Laterales en Máquina',
    nameEn: 'Machine Lateral Raise',
    primaryMuscle: 'Shoulders',
    secondaryMuscles: [],
    equipment: 'Machine',
    difficulty: 'Principiante',
    forceType: 'Empuje',
    instructions: [
      'Siéntate en la máquina apoyando los brazos contra las almohadillas.',
      'Eleva los codos hacia afuera contrayendo los hombros.',
      'Baja controladamente resistiendo el peso.'
    ],
    alternatives: ['lateral-raise', 'cable-lateral-raise']
  },
  {
    id: 'front-dumbbell-raise',
    name: 'Elevaciones Frontales con Mancuernas',
    nameEn: 'Front Dumbbell Raise',
    primaryMuscle: 'Shoulders',
    secondaryMuscles: [],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    forceType: 'Empuje',
    instructions: [
      'Sostén las mancuernas frente a tus muslos con agarre prono.',
      'Eleva una mancuerna hacia adelante hasta la altura de los ojos de forma controlada.',
      'Baja el peso e intercambia el brazo o elévalos juntos.'
    ],
    alternatives: ['front-plate-raise', 'cable-front-raise']
  },
  {
    id: 'front-plate-raise',
    name: 'Elevaciones Frontales con Disco',
    nameEn: 'Front Plate Raise',
    primaryMuscle: 'Shoulders',
    secondaryMuscles: [],
    equipment: 'None',
    difficulty: 'Principiante',
    forceType: 'Empuje',
    instructions: [
      'Sostén un disco de peso con ambas manos a los lados del disco.',
      'Eleva el disco hacia adelante a la altura del pecho superior.',
      'Baja controladamente hacia los muslos.'
    ],
    alternatives: ['front-dumbbell-raise']
  },
  {
    id: 'rear-delt-fly',
    name: 'Pájaros con Mancuernas (Hombro Posterior)',
    nameEn: 'Dumbbell Rear Delt Fly',
    primaryMuscle: 'Shoulders',
    secondaryMuscles: ['Back'],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    forceType: 'Tirón',
    instructions: [
      'Inclinando el torso hacia adelante casi paralelo al suelo doblando rodillas.',
      'Sostén las mancuernas colgando abajo.',
      'Eleva las mancuernas hacia los lados retrayendo el deltoides posterior.',
      'Baja el peso controladamente.'
    ],
    alternatives: ['reverse-pec-deck', 'face-pull']
  },
  {
    id: 'reverse-pec-deck',
    name: 'Aperturas Inversas en Máquina',
    nameEn: 'Reverse Pec Deck Fly',
    primaryMuscle: 'Shoulders',
    secondaryMuscles: ['Back'],
    equipment: 'Machine',
    difficulty: 'Principiante',
    forceType: 'Tirón',
    instructions: [
      'Siéntate mirando hacia la máquina contratora.',
      'Toma los agarres a nivel de los hombros con los codos ligeramente flexionados.',
      'Jala hacia atrás abriendo los brazos hasta contraer el deltoides posterior.'
    ],
    alternatives: ['rear-delt-fly', 'face-pull']
  },
  {
    id: 'face-pull',
    name: 'Face Pull con Cuerda en Polea',
    nameEn: 'Cable Face Pull',
    primaryMuscle: 'Shoulders',
    secondaryMuscles: ['Back'],
    equipment: 'Cable',
    difficulty: 'Intermedio',
    forceType: 'Tirón',
    instructions: [
      'Ajusta la polea a la altura del rostro superior y conecta la soga.',
      'Toma la soga con pulgares apuntando hacia ti y da dos pasos atrás.',
      'Jala la soga hacia la frente separando los extremos de la cuerda al nivel de tus orejas.',
      'Aprieta el deltoides posterior e infraespinoso, y regresa despacio.'
    ],
    alternatives: ['rear-delt-fly', 'reverse-pec-deck']
  },
  {
    id: 'upright-row',
    name: 'Remo al Mentón con Barra',
    nameEn: 'Barbell Upright Row',
    primaryMuscle: 'Shoulders',
    secondaryMuscles: ['Back'],
    equipment: 'Barbell',
    difficulty: 'Intermedio',
    forceType: 'Tirón',
    instructions: [
      'Párate erguido sosteniendo la barra delante de ti con agarre estrecho.',
      'Jala la barra verticalmente hacia tu mentón elevando los codos por encima de la barra.',
      'Mantén la barra muy pegada al cuerpo durante el movimiento.',
      'Baja lentamente.'
    ],
    alternatives: ['dumbbell-upright-row', 'lateral-raise']
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
    id: 'dumbbell-curl',
    name: 'Curl de Bíceps alterno con Mancuernas',
    nameEn: 'Dumbbell Curl',
    primaryMuscle: 'Biceps',
    secondaryMuscles: ['Forearms'],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    forceType: 'Tirón',
    instructions: [
      'Párate o siéntate con una mancuerna a cada lado.',
      'Eleva el peso flexionando el codo y girando la muñeca hacia arriba (supinando) en el medio del recorrido.',
      'Baja controladamente y alterna de brazo.'
    ],
    alternatives: ['barbell-curl', 'incline-dumbbell-curl']
  },
  {
    id: 'incline-dumbbell-curl',
    name: 'Curl Inclinado con Mancuernas',
    nameEn: 'Incline Dumbbell Curl',
    primaryMuscle: 'Biceps',
    secondaryMuscles: ['Forearms'],
    equipment: 'Dumbbell',
    difficulty: 'Intermedio',
    forceType: 'Tirón',
    instructions: [
      'Siéntate en un banco inclinado a unos 45 grados sosteniendo las mancuernas colgadas.',
      'Flexiona los codos manteniendo los brazos detrás del torso para enfatizar la cabeza larga del bíceps.',
      'Baja extendiendo completamente.'
    ],
    alternatives: ['dumbbell-curl', 'concentration-curl']
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
    alternatives: ['barbell-curl', 'cable-hammer-curl']
  },
  {
    id: 'preacher-curl',
    name: 'Curl Predicador en Banco Scott',
    nameEn: 'Preacher Curl',
    primaryMuscle: 'Biceps',
    secondaryMuscles: ['Forearms'],
    equipment: 'Barbell',
    difficulty: 'Principiante',
    forceType: 'Tirón',
    instructions: [
      'Siéntate en el banco predicador y apoya la parte posterior de tus brazos firmemente contra el colchón.',
      'Toma la barra EZ y flexiona los codos para llevar el peso arriba sin separar los brazos de la almohadilla.',
      'Baja controladamente estirando casi por completo los codos.'
    ],
    alternatives: ['dumbbell-preacher-curl', 'barbell-curl']
  },
  {
    id: 'concentration-curl',
    name: 'Curl de Concentración con Mancuerna',
    nameEn: 'Concentration Curl',
    primaryMuscle: 'Biceps',
    secondaryMuscles: [],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    forceType: 'Tirón',
    instructions: [
      'Siéntate en un banco, apoya el codo contra la cara interna de tu muslo del mismo lado.',
      'Flexiona el codo levantando la mancuerna de forma aislada hacia tu cara.',
      'Baja de vuelta controladamente.'
    ],
    alternatives: ['incline-dumbbell-curl', 'preacher-curl']
  },
  {
    id: 'cable-curl',
    name: 'Curl de Bíceps en Polea',
    nameEn: 'Cable Bicep Curl',
    primaryMuscle: 'Biceps',
    secondaryMuscles: ['Forearms'],
    equipment: 'Cable',
    difficulty: 'Principiante',
    forceType: 'Tirón',
    instructions: [
      'Párate frente a la polea baja con barra de agarre.',
      'Toma la barra con palmas hacia arriba y flexiona los codos contrayendo bíceps.',
      'Baja resistiendo la tensión constante del cable.'
    ],
    alternatives: ['barbell-curl', 'dumbbell-curl']
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
    id: 'overhead-cable-extension',
    name: 'Extensión de Tríceps sobre la Cabeza en Polea',
    nameEn: 'Overhead Cable Triceps Extension',
    primaryMuscle: 'Triceps',
    secondaryMuscles: [],
    equipment: 'Cable',
    difficulty: 'Intermedio',
    forceType: 'Empuje',
    instructions: [
      'Dale la espalda a la polea y sujeta la soga llevándola detrás de tu cabeza.',
      'Da un paso adelante e inclínate ligeramente.',
      'Extiende los codos proyectando la soga hacia el frente.',
      'Baja controlando el jalón detrás de tu cabeza.'
    ],
    alternatives: ['triceps-pushdown', 'skull-crusher']
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
    alternatives: ['triceps-pushdown', 'dumbbell-kickback']
  },
  {
    id: 'close-grip-bench-press',
    name: 'Press de Banca Cerrado para Tríceps',
    nameEn: 'Close Grip Bench Press',
    primaryMuscle: 'Triceps',
    secondaryMuscles: ['Chest', 'Shoulders'],
    equipment: 'Barbell',
    difficulty: 'Intermedio',
    forceType: 'Empuje',
    instructions: [
      'Acuéstate en el banco y toma la barra con un agarre estrecho (al ancho de hombros).',
      'Baja la barra lentamente hacia el pecho inferior con los codos pegados al cuerpo.',
      'Empuja con fuerza de regreso usando los tríceps.'
    ],
    alternatives: ['barbell-bench-press', 'skull-crusher']
  },
  {
    id: 'dumbbell-kickback',
    name: 'Patada de Tríceps con Mancuerna',
    nameEn: 'Dumbbell Triceps Kickback',
    primaryMuscle: 'Triceps',
    secondaryMuscles: [],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    forceType: 'Empuje',
    instructions: [
      'Apoya una mano y rodilla en el banco, manteniendo la espalda recta.',
      'Sostén la mancuerna levantando el codo hasta que el brazo quede paralelo al torso.',
      'Extiende el codo hacia atrás por completo.',
      'Baja la mancuerna a 90 grados de flexión controladamente.'
    ],
    alternatives: ['triceps-pushdown', 'overhead-cable-extension']
  },
  {
    id: 'bench-dips',
    name: 'Fondos entre Bancos',
    nameEn: 'Bench Dips',
    primaryMuscle: 'Triceps',
    secondaryMuscles: ['Chest', 'Shoulders'],
    equipment: 'Bodyweight',
    difficulty: 'Principiante',
    forceType: 'Empuje',
    instructions: [
      'Coloca las manos en el borde de un banco detrás de ti y estira las piernas apoyadas en otro banco o suelo.',
      'Baja el cuerpo doblando los codos hasta unos 90 grados.',
      'Empuja con los tríceps para regresar arriba.'
    ],
    alternatives: ['triceps-pushdown', 'chest-dips']
  },

  // --- PIERNAS (QUADS & LEGS) ---
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
    alternatives: ['leg-press', 'bulgarian-split-squat', 'front-squat']
  },
  {
    id: 'front-squat',
    name: 'Sentadilla Frontal con Barra',
    nameEn: 'Barbell Front Squat',
    primaryMuscle: 'Quads',
    secondaryMuscles: ['Glutes', 'Abs'],
    equipment: 'Barbell',
    difficulty: 'Avanzado',
    forceType: 'Flexión/Extensión',
    instructions: [
      'Coloca la barra sobre los hombros delanteros y crúzale los dedos para asegurar el agarre.',
      'Mantén los codos en posición alta durante todo el movimiento.',
      'Baja las caderas controlando la posición y cuidando no inclinar el torso.',
      'Sube empujando activamente con los cuádriceps.'
    ],
    alternatives: ['barbell-squat', 'hack-squat']
  },
  {
    id: 'hack-squat',
    name: 'Sentadilla Hack en Máquina',
    nameEn: 'Hack Squat Machine',
    primaryMuscle: 'Quads',
    secondaryMuscles: ['Glutes', 'Hamstrings'],
    equipment: 'Machine',
    difficulty: 'Intermedio',
    forceType: 'Flexión/Extensión',
    instructions: [
      'Apoya la espalda en el respaldo de la máquina Hack y coloca los hombros bajo las almohadillas.',
      'Coloca los pies al ancho de hombros en la plataforma.',
      'Baja de forma controlada flexionando las rodillas.',
      'Empuja la plataforma hacia arriba extendiendo las piernas.'
    ],
    alternatives: ['barbell-squat', 'leg-press']
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
    id: 'leg-extension',
    name: 'Extensiones de Cuádriceps en Máquina',
    nameEn: 'Leg Extension',
    primaryMuscle: 'Quads',
    secondaryMuscles: [],
    equipment: 'Machine',
    difficulty: 'Principiante',
    forceType: 'Flexión/Extensión',
    instructions: [
      'Siéntate ajustando la almohadilla del rodillo sobre tus tobillos.',
      'Sostén los agarres laterales para evitar levantar el trasero.',
      'Extiende las piernas por completo levantando el rodillo.',
      'Baja lentamente resistiendo la carga.'
    ],
    alternatives: ['leg-press', 'barbell-squat']
  },
  {
    id: 'dumbbell-lunge',
    name: 'Zancadas con Mancuerna',
    nameEn: 'Dumbbell Lunge',
    primaryMuscle: 'Quads',
    secondaryMuscles: ['Glutes', 'Hamstrings'],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    forceType: 'Flexión/Extensión',
    instructions: [
      'Sostén una mancuerna en cada mano erguido.',
      'Da un paso amplio hacia adelante con una pierna.',
      'Baja el cuerpo doblando ambas rodillas a 90 grados, con la rodilla trasera rozando el suelo.',
      'Empuja con el talón delantero para volver al inicio.'
    ],
    alternatives: ['bulgarian-split-squat', 'barbell-lunge']
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
    alternatives: ['barbell-squat', 'dumbbell-lunge']
  },

  // --- ISQUIOTIBIALES (HAMSTRINGS) ---
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
    id: 'dumbbell-rdl',
    name: 'Peso Muerto Rumano con Mancuernas',
    nameEn: 'Dumbbell Romanian Deadlift',
    primaryMuscle: 'Hamstrings',
    secondaryMuscles: ['Glutes', 'Back'],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    forceType: 'Flexión/Extensión',
    instructions: [
      'Sostén las mancuernas delante de tus piernas de pie.',
      'Envía las caderas hacia atrás bajando las mancuernas pegadas a tus espinillas.',
      'Contrae isquiotibiales y glúteos para regresar arriba.'
    ],
    alternatives: ['romanian-deadlift', 'lying-leg-curl']
  },
  {
    id: 'lying-leg-curl',
    name: 'Curl Femoral Acostado',
    nameEn: 'Lying Leg Curl',
    primaryMuscle: 'Hamstrings',
    secondaryMuscles: [],
    equipment: 'Machine',
    difficulty: 'Principiante',
    forceType: 'Flexión/Extensión',
    instructions: [
      'Acuéstate boca abajo en la máquina de curl femoral.',
      'Ubica el rodillo sobre los talones superiores.',
      'Flexiona las rodillas jalando el peso hacia los glúteos.',
      'Extiende controladamente las piernas.'
    ],
    alternatives: ['seated-leg-curl', 'dumbbell-rdl']
  },
  {
    id: 'seated-leg-curl',
    name: 'Curl Femoral Sentado',
    nameEn: 'Seated Leg Curl',
    primaryMuscle: 'Hamstrings',
    secondaryMuscles: [],
    equipment: 'Machine',
    difficulty: 'Principiante',
    forceType: 'Flexión/Extensión',
    instructions: [
      'Siéntate y asegura el soporte de rodillas firmemente.',
      'Coloca los talones sobre el rodillo de resistencia.',
      'Flexiona las piernas empujando el rodillo hacia abajo.',
      'Regresa despacio estirando por completo.'
    ],
    alternatives: ['lying-leg-curl', 'romanian-deadlift']
  },

  // --- GLÚTEOS (GLUTES) ---
  {
    id: 'barbell-hip-thrust',
    name: 'Hip Thrust con Barra',
    nameEn: 'Barbell Hip Thrust',
    primaryMuscle: 'Glutes',
    secondaryMuscles: ['Hamstrings'],
    equipment: 'Barbell',
    difficulty: 'Principiante',
    forceType: 'Flexión/Extensión',
    instructions: [
      'Apoya tu espalda escapular alta firmemente contra el borde largo de un banco resistente.',
      'Coloca la barra acolchada justo sobre el pliegue de tu pelvis.',
      'Posiciona las rodillas de tal manera que a 90 grados apoyes firmemente la planta entera sobre el suelo.',
      'Empuja la cadera hacia arriba apretando los glúteos de manera que queden alineados con rodillas e inserciones.',
      'Baja controlando el peso a escasos centímetros del suelo.'
    ],
    alternatives: ['dumbbell-glute-bridge', 'romanian-deadlift']
  },
  {
    id: 'dumbbell-glute-bridge',
    name: 'Puente de Glúteos con Mancuerna',
    nameEn: 'Dumbbell Glute Bridge',
    primaryMuscle: 'Glutes',
    secondaryMuscles: ['Hamstrings'],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    forceType: 'Flexión/Extensión',
    instructions: [
      'Acuéstate boca arriba con rodillas dobladas y pies apoyados en el suelo.',
      'Coloca una mancuerna sobre tu pelvis.',
      'Eleva la pelvis contrayendo los glúteos formando una línea recta desde los hombros a las rodillas.',
      'Baja despacio.'
    ],
    alternatives: ['barbell-hip-thrust']
  },
  {
    id: 'cable-kickback',
    name: 'Patada de Glúteo en Polea',
    nameEn: 'Cable Glute Kickback',
    primaryMuscle: 'Glutes',
    secondaryMuscles: ['Hamstrings'],
    equipment: 'Cable',
    difficulty: 'Intermedio',
    forceType: 'Flexión/Extensión',
    instructions: [
      'Coloca una tobillera a tu pie y conéctala a la polea baja.',
      'Sostén el marco de la polea inclinado un poco adelante.',
      'Patea el pie hacia atrás y hacia arriba contrayendo el glúteo.',
      'Regresa despacio.'
    ],
    alternatives: ['barbell-hip-thrust', 'dumbbell-glute-bridge']
  },

  // --- GEMELOS (CALVES) ---
  {
    id: 'standing-calf-raise',
    name: 'Elevación de Gemelos de Pie con Barra',
    nameEn: 'Standing Barbell Calf Raise',
    primaryMuscle: 'Calves',
    secondaryMuscles: [],
    equipment: 'Barbell',
    difficulty: 'Principiante',
    forceType: 'Flexión/Extensión',
    instructions: [
      'Coloca la barra sobre la espalda alta.',
      'Párate sobre el borde de un bloque metálico o disco.',
      'Baja los talones por debajo del nivel del bloque para estirar.',
      'Eleva los talones lo más alto posible apoyándote en las puntas de los pies.'
    ],
    alternatives: ['seated-calf-raise', 'donkey-calf-raise']
  },
  {
    id: 'seated-calf-raise',
    name: 'Elevación de Gemelos Sentado',
    nameEn: 'Seated Calf Raise',
    primaryMuscle: 'Calves',
    secondaryMuscles: [],
    equipment: 'Machine',
    difficulty: 'Principiante',
    forceType: 'Flexión/Extensión',
    instructions: [
      'Siéntate en la máquina apoyando la almohadilla sobre tus muslos bajos.',
      'Coloca la punta de los pies en el bloque.',
      'Eleva las puntas quitando el seguro, baja los talones al máximo y vuelve a elevar extendiendo al máximo el tobillo.'
    ],
    alternatives: ['standing-calf-raise']
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
    alternatives: ['hanging-leg-raise', 'ab-crunch']
  },
  {
    id: 'ab-crunch',
    name: 'Crunch Abdominal',
    nameEn: 'Abdominal Crunch',
    primaryMuscle: 'Abs',
    secondaryMuscles: [],
    equipment: 'None',
    difficulty: 'Principiante',
    forceType: 'Core',
    instructions: [
      'Acuéstate de espaldas con las rodillas flexionadas y pies en el suelo.',
      'Coloca las manos ligeramente detrás de las orejas.',
      'Eleva los hombros del suelo contrayendo el recto abdominal, sin tirar del cuello.',
      'Baja con control.'
    ],
    alternatives: ['ab-plank', 'hanging-leg-raise']
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
      'Cuelga de la barra de tracción con los brazos totalmente extendidos.',
      'Usa tu fuerza abdominal sin balancear el torso para elevar los pies o rodillas hacia el nivel de tu pecho.',
      'Baja con total lentitud controlando la fuerza excéntrica.'
    ],
    alternatives: ['ab-plank', 'ab-crunch']
  },
  {
    id: 'russian-twist',
    name: 'Giro Ruso con Disco/Mancuerna',
    nameEn: 'Russian Twist',
    primaryMuscle: 'Abs',
    secondaryMuscles: [],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    forceType: 'Core',
    instructions: [
      'Siéntate con rodillas dobladas, inclina el torso hacia atrás en 45 grados y despega los pies del suelo.',
      'Sostén una mancuerna y gírala alternamente de lado a lado cruzando tu abdomen.'
    ],
    alternatives: ['ab-plank']
  },
  {
    id: 'ab-wheel-rollout',
    name: 'Rueda Abdominal',
    nameEn: 'Ab Wheel Rollout',
    primaryMuscle: 'Abs',
    secondaryMuscles: ['Back', 'Shoulders'],
    equipment: 'None',
    difficulty: 'Avanzado',
    forceType: 'Core',
    instructions: [
      'Arrodíllate en el suelo y sostén la rueda abdominal delante de ti.',
      'Rueda la rueda hacia el frente estirando el cuerpo en una línea recta horizontal.',
      'Contrae fuertemente el abdomen para regresar a la posición vertical.'
    ],
    alternatives: ['ab-plank']
  },

  // --- ANTEBRAZOS (FOREARMS) ---
  {
    id: 'wrist-curl',
    name: 'Curl de Muñeca con Barra',
    nameEn: 'Wrist Curl',
    primaryMuscle: 'Forearms',
    secondaryMuscles: [],
    equipment: 'Barbell',
    difficulty: 'Principiante',
    forceType: 'Tirón',
    instructions: [
      'Apoya los antebrazos sobre un banco con las manos colgando al borde sosteniendo la barra en supinación.',
      'Flexiona la muñeca llevando la barra hacia arriba.',
      'Baja la barra controlando la carga.'
    ],
    alternatives: ['reverse-wrist-curl']
  },
  {
    id: 'reverse-wrist-curl',
    name: 'Curl de Muñeca Inverso',
    nameEn: 'Reverse Wrist Curl',
    primaryMuscle: 'Forearms',
    secondaryMuscles: [],
    equipment: 'Barbell',
    difficulty: 'Principiante',
    forceType: 'Tirón',
    instructions: [
      'Apoya los antebrazos con manos colgadas sosteniendo la barra en pronación (palmas boca abajo).',
      'Extiende las muñecas subiendo la barra.'
    ],
    alternatives: ['wrist-curl']
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
    alternatives: ['stationary-bike', 'rowing-machine']
  },
  {
    id: 'stationary-bike',
    name: 'Bicicleta Estática',
    nameEn: 'Stationary Bike',
    primaryMuscle: 'Cardio',
    secondaryMuscles: ['Quads', 'Hamstrings'],
    equipment: 'Machine',
    difficulty: 'Principiante',
    forceType: 'Cardio',
    instructions: [
      'Ajusta la altura del sillín al nivel de la cadera.',
      'Pedalea manteniendo una cadencia constante y la columna neutral.'
    ],
    alternatives: ['treadmill-run', 'elliptical-trainer']
  },
  {
    id: 'rowing-machine',
    name: 'Máquina de Remo (Ergómetro)',
    nameEn: 'Rowing Machine',
    primaryMuscle: 'Cardio',
    secondaryMuscles: ['Back', 'Legs', 'Arms'],
    equipment: 'Machine',
    difficulty: 'Intermedio',
    forceType: 'Cardio',
    instructions: [
      'Siéntate con los pies asegurados en los estribos.',
      'Empuja con las piernas, inclina el torso atrás y jala el manillar hacia el pecho bajo.',
      'Regresa las manos, el torso y flexiona las piernas.'
    ],
    alternatives: ['treadmill-run']
  },
  {
    id: 'elliptical-trainer',
    name: 'Elíptica',
    nameEn: 'Elliptical Trainer',
    primaryMuscle: 'Cardio',
    secondaryMuscles: ['Quads', 'Glutes'],
    equipment: 'Machine',
    difficulty: 'Principiante',
    forceType: 'Cardio',
    instructions: [
      'Súbete a los pedales y toma los agarres móviles.',
      'Muévete en un movimiento fluido de zancada elíptica empujando con brazos y piernas.'
    ],
    alternatives: ['stationary-bike', 'treadmill-run']
  },
  {
    id: 'jump-rope',
    name: 'Salto de Cuerda',
    nameEn: 'Jump Rope',
    primaryMuscle: 'Cardio',
    secondaryMuscles: ['Calves', 'Shoulders'],
    equipment: 'None',
    difficulty: 'Principiante',
    forceType: 'Cardio',
    instructions: [
      'Sostén los mangos a los lados de tus caderas.',
      'Salta en las puntas de los pies mientras rotas la cuerda con las muñecas.'
    ],
    alternatives: ['treadmill-run']
  }
];
