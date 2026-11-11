/**
 * Base de datos principal de ejercicios de DB-Gym (SDD v2.0)
 * Total de ejercicios certificados: 533
 */

import { Exercise } from '../types';

export const EXERCISES_DB: Exercise[] = [
  {
    "id": "barbell-bench-press",
    "name": "Press de Banca con Barra",
    "nameEn": "Barbell Bench Press",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders",
      "Triceps"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "forceType": "Empuje",
    "instructions": [
      "Acuéstate libremente en el banco plano, con la cabeza, espalda alta y glúteos apoyados.",
      "Sujeta la barra con las manos un poco más anchas que los hombros.",
      "Desengancha la barra de forma controlada y colócala sobre el centro del pecho.",
      "Baja la barra lentamente doblando los codos a unos 45 grados de tu torso hasta rozar la línea media del pecho.",
      "Empuja la barra con fuerza y estabilidad de regreso a la posición de brazos extendidos, sin bloquear los codos por completo."
    ],
    "alternatives": [
      "dumbbell-bench-press",
      "chest-press-machine",
      "incline-barbell-bench-press"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "dumbbell-bench-press",
    "name": "Press de Banca con Mancuernas",
    "nameEn": "Dumbbell Bench Press",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders",
      "Triceps"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "forceType": "Empuje",
    "instructions": [
      "Siéntate en un banco plano con una mancuerna en cada rodilla.",
      "Acuéstate hacia atrás mientras llevas las mancuernas al pecho con la ayuda de tus piernas.",
      "Sostén las mancuernas sobre tu pecho alineadas con tus codos bajando a unos 90 grados.",
      "Empuja las mancuernas hacia arriba en un movimiento semicircular controlado hacia el centro.",
      "Baja de regreso estirando el pecho de forma constante."
    ],
    "alternatives": [
      "barbell-bench-press",
      "incline-dumbbell-bench-press",
      "chest-press-machine"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "incline-barbell-bench-press",
    "name": "Press de Banca Inclinado con Barra",
    "nameEn": "Incline Barbell Bench Press",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders",
      "Triceps"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "forceType": "Empuje",
    "instructions": [
      "Alinea el banco a unos 30 o 45 grados de inclinación.",
      "Acuéstate bocarriba y toma la barra un poco más ancha que tus hombros.",
      "Retira la barra del soporte y bájala lentamente hacia la parte alta del pecho.",
      "Empuja con los tríceps y el pecho alto para subir el peso verticalmente.",
      "Inhala al bajar, exhala con fuerza al empujar el peso."
    ],
    "alternatives": [
      "incline-dumbbell-bench-press",
      "barbell-bench-press"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "incline-dumbbell-bench-press",
    "name": "Press de Banca Inclinado con Mancuernas",
    "nameEn": "Incline Dumbbell Bench Press",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders",
      "Triceps"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "forceType": "Empuje",
    "instructions": [
      "Asegura una inclinación del banco entre 30 y 45 grados.",
      "Empuja las mancuernas hacia arriba empezando desde los lados de tus hombros superiores.",
      "Controla el descenso de manera que tus codos formen un ángulo cómodo e higiénico.",
      "Asegúrate de no chocar las mancuernas al tope de la fase de ascenso para mantener tensión."
    ],
    "alternatives": [
      "incline-barbell-bench-press",
      "dumbbell-bench-press"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "decline-barbell-bench-press",
    "name": "Press de Banca Declinado con Barra",
    "nameEn": "Decline Barbell Bench Press",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders",
      "Triceps"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "forceType": "Empuje",
    "instructions": [
      "Asegura tus piernas en el soporte del banco declinado y acuéstate.",
      "Toma la barra con un agarre prono un poco más ancho que los hombros.",
      "Saca la barra del rack y bájala controladamente hacia la parte inferior del pecho.",
      "Empuja verticalmente hacia arriba contrayendo el pectoral inferior."
    ],
    "alternatives": [
      "decline-dumbbell-bench-press",
      "barbell-bench-press"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "decline-dumbbell-bench-press",
    "name": "Press de Banca Declinado con Mancuernas",
    "nameEn": "Decline Dumbbell Bench Press",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders",
      "Triceps"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "forceType": "Empuje",
    "instructions": [
      "Siéntate en el banco declinado sosteniendo las mancuernas sobre los muslos.",
      "Acuéstate hacia atrás controlando el peso a los lados del pecho inferior.",
      "Empuja las mancuernas hacia arriba bloqueando suavemente arriba.",
      "Baja sintiendo el estiramiento en la porción inferior del pectoral."
    ],
    "alternatives": [
      "decline-barbell-bench-press",
      "dumbbell-bench-press"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "chest-press-machine",
    "name": "Press de Pecho en Máquina",
    "nameEn": "Machine Chest Press",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders",
      "Triceps"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la altura del asiento para que los agarres queden alineados con la mitad del pecho.",
      "Apoya la espalda firmemente contra el respaldo y toma los agarres.",
      "Empuja hacia adelante extendiendo los brazos sin bloquear por completo los codos.",
      "Regresa lentamente sintiendo la tensión constante en los pectorales."
    ],
    "alternatives": [
      "barbell-bench-press",
      "dumbbell-bench-press"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "cable-crossover",
    "name": "Cruces de Polea Alta",
    "nameEn": "Cable Crossover",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "equipment": "Cable",
    "difficulty": "Intermedio",
    "forceType": "Empuje",
    "instructions": [
      "Coloca las poleas a una altura superior a tu cabeza en ambas columnas del crossover.",
      "Sujeta los agarres D, da un paso adelante para tensar el cable y flexiona levemente las rodillas y codos.",
      "Lleva los brazos hacia adelante y abajo en un arco de círculo encontrando tus manos al frente del abdomen bajo.",
      "Regresa lentamente abriendo los brazos controlando el tirón del cable."
    ],
    "alternatives": [
      "dumbbell-fly",
      "low-cable-crossover"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "low-cable-crossover",
    "name": "Cruces de Polea Baja",
    "nameEn": "Low Cable Crossover",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "equipment": "Cable",
    "difficulty": "Intermedio",
    "forceType": "Empuje",
    "instructions": [
      "Coloca las poleas en la posición más baja de las columnas.",
      "Toma los agarres D, da un paso adelante e inclina ligeramente el torso hacia el frente.",
      "Lleva las manos hacia adelante y hacia arriba hasta que se junten a la altura del pecho superior.",
      "Baja controladamente los brazos al punto de inicio."
    ],
    "alternatives": [
      "cable-crossover",
      "incline-dumbbell-fly"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "dumbbell-fly",
    "name": "Aperturas con Mancuernas",
    "nameEn": "Dumbbell Fly",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "forceType": "Empuje",
    "instructions": [
      "Acuéstate en un banco plano sosteniendo las mancuernas sobre tu pecho con las palmas mirándose.",
      "Abre los brazos de forma lateral formando un arco amplio, doblando ligeramente los codos.",
      "Baja hasta sentir un estiramiento cómodo en el pecho.",
      "Contrae el pectoral para regresar las mancuernas a la posición de inicio."
    ],
    "alternatives": [
      "cable-crossover",
      "pec-deck-fly"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "incline-dumbbell-fly",
    "name": "Aperturas Inclinadas con Mancuernas",
    "nameEn": "Incline Dumbbell Fly",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "forceType": "Empuje",
    "instructions": [
      "Acuéstate en un banco inclinado (30-45 grados) con las mancuernas en vertical sobre los hombros.",
      "Baja las mancuernas hacia los lados manteniendo una ligera flexión de codo.",
      "Sube contrayendo la parte alta de los pectorales."
    ],
    "alternatives": [
      "dumbbell-fly",
      "low-cable-crossover"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "pec-deck-fly",
    "name": "Aperturas en Contratora (Pec Deck)",
    "nameEn": "Pec Deck Fly",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "forceType": "Empuje",
    "instructions": [
      "Siéntate con la espalda apoyada y los brazos extendidos hacia los lados tomando los agarres.",
      "Junta los agarres en el centro contrayendo activamente el pecho.",
      "Regresa lentamente al punto de inicio sin permitir que las pesas toquen el bloque."
    ],
    "alternatives": [
      "dumbbell-fly",
      "cable-crossover"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "chest-dips",
    "name": "Fondos en Paralelas para Pecho",
    "nameEn": "Chest Dips",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Shoulders"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "forceType": "Empuje",
    "instructions": [
      "Sujétate de las barras paralelas y elévate extendiendo los brazos.",
      "Inclina el torso ligeramente hacia adelante y dobla las rodillas si es necesario.",
      "Baja el cuerpo doblando los codos hacia afuera hasta que tus hombros estén debajo de los codos.",
      "Empuja hacia arriba con fuerza focalizando el pectoral inferior."
    ],
    "alternatives": [
      "decline-barbell-bench-press",
      "push-up"
    ],
    "category": "Fuerza",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "push-up",
    "name": "Flexiones de Pecho",
    "nameEn": "Push-Up",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders",
      "Triceps",
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "forceType": "Empuje",
    "instructions": [
      "Colócate boca abajo en el suelo apoyando manos a ancho de hombros y las puntas de tus pies.",
      "Mantén todo tu cuerpo en línea recta sin doblar la cadera.",
      "Baja doblando los codos hacia atrás formando una flecha con tu cabeza (no codos de 90 grados).",
      "Empuja el suelo con fuerza regresando a la plancha de inicio."
    ],
    "alternatives": [
      "barbell-bench-press",
      "chest-press-machine"
    ],
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "decline-push-up",
    "name": "Flexiones Declina (Pies Elevados)",
    "nameEn": "Decline Push-Up",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders",
      "Triceps"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "forceType": "Empuje",
    "instructions": [
      "Coloca los pies sobre un banco o superficie elevada y las manos en el suelo.",
      "Mantén el torso y las piernas en línea recta.",
      "Baja el pecho hacia el suelo doblando los codos.",
      "Empuja con fuerza hacia arriba para volver a la posición inicial."
    ],
    "alternatives": [
      "push-up",
      "incline-dumbbell-bench-press"
    ],
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "deadlift",
    "name": "Peso Muerto con Barra",
    "nameEn": "Barbell Deadlift",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Hamstrings",
      "Glutes",
      "Forearms"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "forceType": "Tirón",
    "instructions": [
      "Párate frente a la barra con los pies al ancho de las caderas, la barra debe cruzar la mitad del pie.",
      "Doble la cadera inclinándote hacia abajo para tomar la barra y acomoda la espalda de forma neutra y recta.",
      "Mantén los hombros alineados con la barra y dobla un poco las rodillas hasta que la espinilla toque la barra.",
      "Presiona el suelo con los talones y mantén la barra pegada a ti mientras te pones de pie de manera erguida.",
      "Bloquea arriba con fuerza sin hiperextender excesivamente la espalda baja."
    ],
    "alternatives": [
      "romanian-deadlift",
      "sumo-deadlift"
    ],
    "category": "Fuerza",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "sumo-deadlift",
    "name": "Peso Muerto Sumo",
    "nameEn": "Sumo Deadlift",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Glutes",
      "Quads",
      "Hamstrings"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "forceType": "Tirón",
    "instructions": [
      "Adopta una postura muy ancha con las puntas de los pies apuntando hacia afuera.",
      "Baja las caderas y sujeta la barra por el centro con los brazos dentro de las piernas.",
      "Mantén la espalda recta e impulsa con las piernas para ponerte erguido.",
      "Bloquea la posición superior empujando las caderas hacia la barra."
    ],
    "alternatives": [
      "deadlift",
      "barbell-squat"
    ],
    "category": "Fuerza",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "pull-up",
    "name": "Dominadas Prone",
    "nameEn": "Pull-Up",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Biceps",
      "Shoulders",
      "Forearms"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "forceType": "Tirón",
    "instructions": [
      "Sujétate de la barra de dominadas con un agarre prono (palmas hacia adelante) más ancho que los hombros.",
      "Cuelga con los brazos completamente estirados y saca pecho levemente.",
      "Tira de tu cuerpo hacia arriba retrayendo los omóplatos, llevando tu pecho hacia la barra.",
      "Llega con la barbilla sobre la barra sin balancear las piernas.",
      "Baja suave y controladamente hasta la posición extendida de inicio."
    ],
    "alternatives": [
      "lat-pulldown",
      "chin-up",
      "assisted-pull-up"
    ],
    "category": "Fuerza",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "chin-up",
    "name": "Dominadas Supinas",
    "nameEn": "Chin-Up",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Biceps",
      "Shoulders",
      "Forearms"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "forceType": "Tirón",
    "instructions": [
      "Sujétate de la barra con un agarre supino (palmas hacia ti) al ancho de hombros.",
      "Cuelga con brazos estirados y tira de tu cuerpo hacia arriba.",
      "Lleva la barbilla sobre la barra contrayendo los bíceps y dorsales.",
      "Desciende de forma controlada."
    ],
    "alternatives": [
      "pull-up",
      "lat-pulldown"
    ],
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "assisted-pull-up",
    "name": "Dominadas Asistidas en Máquina",
    "nameEn": "Assisted Pull-Up",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Biceps",
      "Forearms"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "forceType": "Tirón",
    "instructions": [
      "Selecciona el peso de asistencia adecuado (a mayor peso, más fácil).",
      "Coloca las rodillas o pies en la plataforma de asistencia.",
      "Sujeta las barras superiores y realiza el movimiento de dominada controlando el descenso."
    ],
    "alternatives": [
      "lat-pulldown",
      "pull-up"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "lat-pulldown",
    "name": "Jalón al Pecho en Polea",
    "nameEn": "Lat Pulldown",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Biceps",
      "Forearms"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "forceType": "Tirón",
    "instructions": [
      "Siéntate en la máquina ajustando el colchón a tus muslos para que no te levantes.",
      "Sujeta la barra con agarre amplio prono y sostén con los brazos totalmente estirados.",
      "Inclina ligeramente el torso hacia atrás y conduce los codos hacia abajo bajando la barra a tu pecho alto.",
      "Concentra la fuerza en juntar tus codos a los costados antes que jalar con los puños.",
      "Extiende lentamente de regreso estirando los dorsales por completo."
    ],
    "alternatives": [
      "pull-up",
      "seated-cable-row"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "behind-neck-pulldown",
    "name": "Jalón Tras Nuca en Polea",
    "nameEn": "Behind Neck Pulldown",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Biceps",
      "Shoulders"
    ],
    "equipment": "Cable",
    "difficulty": "Avanzado",
    "forceType": "Tirón",
    "instructions": [
      "Siéntate en la máquina de jalones con agarre amplio.",
      "Mantén el torso erguido y baja la barra lentamente por detrás de la cabeza hasta la nuca.",
      "Evita movimientos bruscos para no tensionar los rotadores del hombro.",
      "Sube la barra controlando la fase excéntrica."
    ],
    "alternatives": [
      "lat-pulldown",
      "pull-up"
    ],
    "category": "Fuerza",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "barbell-row",
    "name": "Remo con Barra",
    "nameEn": "Barbell Row",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Biceps",
      "Forearms"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "forceType": "Tirón",
    "instructions": [
      "Sostén una barra cargada con agarre prono y colócate de pie.",
      "Flexiona la cadera enviando los glúteos atrás y la espalda perfectamente neutra en un ángulo de casi 45 grados.",
      "Jala la barra verticalmente hacia tu ombligo levantando los codos por encima del torso.",
      "Mantén los codos pegados a ti y aprieta la espalda al final.",
      "Baja la barra de vuelta de forma extendida y controlada."
    ],
    "alternatives": [
      "dumbbell-single-row",
      "seated-cable-row",
      "t-bar-row"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "t-bar-row",
    "name": "Remo en Barra T",
    "nameEn": "T-Bar Row",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Biceps",
      "Forearms"
    ],
    "equipment": "Machine",
    "difficulty": "Intermedio",
    "forceType": "Tirón",
    "instructions": [
      "Colócate en la plataforma de la barra T y flexiona las rodillas y cadera.",
      "Toma las manijas con un agarre neutro o prono.",
      "Manteniendo la espalda recta, jala el peso hacia el pecho contrayendo la espalda media.",
      "Baja lentamente el peso extendiendo los brazos."
    ],
    "alternatives": [
      "barbell-row",
      "seated-cable-row"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "dumbbell-single-row",
    "name": "Remo a una Mano con Mancuerna",
    "nameEn": "Dumbbell Single-Arm Row",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Biceps",
      "Forearms"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "forceType": "Tirón",
    "instructions": [
      "Apoya una rodilla y la mano del mismo lado sobre un banco plano.",
      "Mantén la espalda paralela al suelo y sujeta una mancuerna con el brazo libre extendido.",
      "Jala la mancuerna hacia tu cadera, elevando el codo hacia el techo y manteniendo el brazo rozando tu costado.",
      "Baja con lentitud estirando el hombro sin rotar la columna."
    ],
    "alternatives": [
      "barbell-row",
      "seated-cable-row"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "seated-cable-row",
    "name": "Remo Sentado en Polea con Agarre Gironda",
    "nameEn": "Seated Cable Row",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Biceps",
      "Forearms"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "forceType": "Tirón",
    "instructions": [
      "Siéntate con los pies apoyados e inclínate para tomar el agarre estrecho.",
      "Enderézate con el torso perpendicular al suelo y los brazos extendidos.",
      "Jala el agarre hacia tu abdomen bajo retrayendo la espalda media y flexionando codos.",
      "Regresa extendiendo los brazos sin redondear la columna."
    ],
    "alternatives": [
      "barbell-row",
      "dumbbell-single-row"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "chest-supported-dumbbell-row",
    "name": "Remo Apoyado en Banco con Mancuernas",
    "nameEn": "Chest-Supported Dumbbell Row",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Biceps",
      "Shoulders"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "forceType": "Tirón",
    "instructions": [
      "Coloca un banco a unos 30 grados de inclinación.",
      "Acuéstate boca abajo apoyando el pecho contra el respaldo.",
      "Toma una mancuerna en cada mano y déjalas colgar estiradas.",
      "Jala los codos hacia arriba y atrás contrayendo la espalda sin despegar el pecho."
    ],
    "alternatives": [
      "dumbbell-single-row",
      "barbell-row"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "straight-arm-pulldown",
    "name": "Pullover en Polea con Brazos Rectos",
    "nameEn": "Straight Arm Pulldown",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Triceps",
      "Chest"
    ],
    "equipment": "Cable",
    "difficulty": "Intermedio",
    "forceType": "Tirón",
    "instructions": [
      "Párate frente a la polea alta con una barra recta.",
      "Toma la barra a la altura de los hombros y da un paso atrás para estirar el cable.",
      "Inclinando un poco el torso hacia adelante, jala la barra con los brazos casi rectos hasta los muslos.",
      "Regresa lentamente al punto de inicio sintiendo el estiramiento del dorsal."
    ],
    "alternatives": [
      "lat-pulldown",
      "barbell-pullover"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "barbell-pullover",
    "name": "Pullover con Barra",
    "nameEn": "Barbell Pullover",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Chest",
      "Triceps"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "forceType": "Tirón",
    "instructions": [
      "Acuéstate a lo largo de un banco plano sosteniendo la barra directamente sobre tu pecho.",
      "Manteniendo los codos ligeramente flexionados, baja la barra detrás de la cabeza.",
      "Lleva la barra de regreso sobre el pecho contrayendo los dorsales y pectorales."
    ],
    "alternatives": [
      "straight-arm-pulldown",
      "dumbbell-fly"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "back-hyperextension",
    "name": "Hiperextensiones Lumbares",
    "nameEn": "Back Hyperextension",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings"
    ],
    "equipment": "None",
    "difficulty": "Principiante",
    "forceType": "Core",
    "instructions": [
      "Colócate en el banco de hiperextensiones con los tobillos asegurados.",
      "Flexiona la cadera bajando el torso de forma controlada con la espalda recta.",
      "Contrae la espalda baja y glúteos para levantar el torso hasta alinearlo con tus piernas."
    ],
    "alternatives": [
      "deadlift"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "barbell-shrug",
    "name": "Encogimientos de Hombros con Barra",
    "nameEn": "Barbell Shrug",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "equipment": "Barbell",
    "difficulty": "Principiante",
    "forceType": "Tirón",
    "instructions": [
      "Párate erguido sosteniendo la barra delante de los muslos con agarre prono.",
      "Eleva los hombros verticalmente hacia las orejas lo más alto posible.",
      "Sostén un segundo arriba y baja controladamente."
    ],
    "alternatives": [
      "dumbbell-shrug"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "dumbbell-shrug",
    "name": "Encogimientos con Mancuernas",
    "nameEn": "Dumbbell Shrug",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "forceType": "Tirón",
    "instructions": [
      "Sostén una mancuerna a cada lado de tu torso.",
      "Eleva los hombros hacia arriba sin doblar los codos y sin rotar los hombros hacia atrás.",
      "Baja el peso a la posición inicial."
    ],
    "alternatives": [
      "barbell-shrug"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "overhead-press",
    "name": "Press Militar con Barra",
    "nameEn": "Barbell Overhead Press",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Triceps",
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "forceType": "Empuje",
    "instructions": [
      "Párate con los pies al ancho de tus caderas y descansa la barra sobre tus clavículas o pecho alto.",
      "Aprieta fuerte tus glúteos y tu abdomen para dar estabilidad a tu espalda baja.",
      "Empuja la barra rectamente hacia el techo pasando cerca de tu cara y bloqueando suave arriba.",
      "Pasa la cabeza levemente hacia adelante una vez la barra libre tu frente.",
      "Baja controladamente de vuelta a tus clavículas."
    ],
    "alternatives": [
      "dumbbell-shoulder-press",
      "seated-barbell-press"
    ],
    "category": "Fuerza",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "seated-barbell-press",
    "name": "Press Militar Sentado con Barra",
    "nameEn": "Seated Barbell Press",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Triceps"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "forceType": "Empuje",
    "instructions": [
      "Siéntate en un banco con soporte para barra.",
      "Toma la barra un poco más ancha que los hombros y sácala del soporte.",
      "Bájala lentamente hasta la barbilla y empuja verticalmente."
    ],
    "alternatives": [
      "overhead-press",
      "dumbbell-shoulder-press"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "dumbbell-shoulder-press",
    "name": "Press de Hombro con Mancuernas",
    "nameEn": "Dumbbell Shoulder Press",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Triceps"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "forceType": "Empuje",
    "instructions": [
      "Siéntate en un banco con respaldo vertical casi en 90 grados.",
      "Lleva las mancuernas sobre tus hombros con los codos apuntando en diagonal (no rectos a los lados).",
      "Empuja el peso verticalmente hacia arriba hasta estirar por completo los brazos.",
      "Baja lentamente hasta que tus manos estén a la altura de las orejas."
    ],
    "alternatives": [
      "overhead-press",
      "arnold-press"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "arnold-press",
    "name": "Press Arnold con Mancuernas",
    "nameEn": "Arnold Press",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Triceps"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Intermedio",
    "forceType": "Empuje",
    "instructions": [
      "Siéntate en un banco y sostén las mancuernas al nivel del pecho con palmas mirando hacia ti.",
      "Empuja las mancuernas hacia arriba mientras giras las muñecas 180 grados.",
      "En el tope del movimiento, las palmas deben mirar hacia adelante.",
      "Baja el peso girando las muñecas a la posición inicial."
    ],
    "alternatives": [
      "dumbbell-shoulder-press",
      "overhead-press"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "lateral-raise",
    "name": "Elevaciones Laterales con Mancuernas",
    "nameEn": "Dumbbell Lateral Raise",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "forceType": "Empuje",
    "instructions": [
      "Párate erguido con una mancuerna en cada mano colgando a los lados.",
      "Con los codos ligeramente flexionados, eleva los brazos hacia los costados en un plano levemente escapular (30 grados adelante).",
      "Sube hasta la altura de tus hombros en paralelo al suelo de tal manera que el dedo meñique apunte levemente arriba.",
      "Baja lentamente sintiendo la tensión en el deltoides lateral."
    ],
    "alternatives": [
      "cable-lateral-raise",
      "machine-lateral-raise"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "cable-lateral-raise",
    "name": "Elevaciones Laterales en Polea",
    "nameEn": "Cable Lateral Raise",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [],
    "equipment": "Cable",
    "difficulty": "Intermedio",
    "forceType": "Empuje",
    "instructions": [
      "Párate de lado a la polea baja, sostén el agarre D con el brazo opuesto.",
      "Eleva el cable lateralmente cruzando el cuerpo hasta la altura del hombro.",
      "Regresa lentamente al punto de inicio."
    ],
    "alternatives": [
      "lateral-raise"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "machine-lateral-raise",
    "name": "Elevaciones Laterales en Máquina",
    "nameEn": "Machine Lateral Raise",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "forceType": "Empuje",
    "instructions": [
      "Siéntate en la máquina apoyando los brazos contra las almohadillas.",
      "Eleva los codos hacia afuera contrayendo los hombros.",
      "Baja controladamente resistiendo el peso."
    ],
    "alternatives": [
      "lateral-raise",
      "cable-lateral-raise"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "front-dumbbell-raise",
    "name": "Elevaciones Frontales con Mancuernas",
    "nameEn": "Front Dumbbell Raise",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "forceType": "Empuje",
    "instructions": [
      "Sostén las mancuernas frente a tus muslos con agarre prono.",
      "Eleva una mancuerna hacia adelante hasta la altura de los ojos de forma controlada.",
      "Baja el peso e intercambia el brazo o elévalos juntos."
    ],
    "alternatives": [
      "front-plate-raise"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "front-plate-raise",
    "name": "Elevaciones Frontales con Disco",
    "nameEn": "Front Plate Raise",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [],
    "equipment": "None",
    "difficulty": "Principiante",
    "forceType": "Empuje",
    "instructions": [
      "Sostén un disco de peso con ambas manos a los lados del disco.",
      "Eleva el disco hacia adelante a la altura del pecho superior.",
      "Baja controladamente hacia los muslos."
    ],
    "alternatives": [
      "front-dumbbell-raise"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "rear-delt-fly",
    "name": "Pájaros con Mancuernas (Hombro Posterior)",
    "nameEn": "Dumbbell Rear Delt Fly",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Back"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "forceType": "Tirón",
    "instructions": [
      "Inclinando el torso hacia adelante casi paralelo al suelo doblando rodillas.",
      "Sostén las mancuernas colgando abajo.",
      "Eleva las mancuernas hacia los lados retrayendo el deltoides posterior.",
      "Baja el peso controladamente."
    ],
    "alternatives": [
      "reverse-pec-deck",
      "face-pull"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "reverse-pec-deck",
    "name": "Aperturas Inversas en Máquina",
    "nameEn": "Reverse Pec Deck Fly",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Back"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "forceType": "Tirón",
    "instructions": [
      "Siéntate mirando hacia la máquina contratora.",
      "Toma los agarres a nivel de los hombros con los codos ligeramente flexionados.",
      "Jala hacia atrás abriendo los brazos hasta contraer el deltoides posterior."
    ],
    "alternatives": [
      "rear-delt-fly",
      "face-pull"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "face-pull",
    "name": "Face Pull con Cuerda en Polea",
    "nameEn": "Cable Face Pull",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Back"
    ],
    "equipment": "Cable",
    "difficulty": "Intermedio",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta la polea a la altura del rostro superior y conecta la soga.",
      "Toma la soga con pulgares apuntando hacia ti y da dos pasos atrás.",
      "Jala la soga hacia la frente separando los extremos de la cuerda al nivel de tus orejas.",
      "Aprieta el deltoides posterior e infraespinoso, y regresa despacio."
    ],
    "alternatives": [
      "rear-delt-fly",
      "reverse-pec-deck"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "upright-row",
    "name": "Remo al Mentón con Barra",
    "nameEn": "Barbell Upright Row",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Back"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "forceType": "Tirón",
    "instructions": [
      "Párate erguido sosteniendo la barra delante de ti con agarre estrecho.",
      "Jala la barra verticalmente hacia tu mentón elevando los codos por encima de la barra.",
      "Mantén la barra muy pegada al cuerpo durante el movimiento.",
      "Baja lentamente."
    ],
    "alternatives": [
      "lateral-raise"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "barbell-curl",
    "name": "Curl de Bíceps con Barra EZ",
    "nameEn": "Barbell Curl",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Barbell",
    "difficulty": "Principiante",
    "forceType": "Tirón",
    "instructions": [
      "Sujeta la barra curva EZ frente a ti con agarre supino (palmas bocarriba) ancho de hombros.",
      "Mantén los codos pegados a tus costados y rígidos.",
      "Contrae los bíceps trayendo la barra hacia el pecho sin balancear la espalda.",
      "Aprieta arriba un segundo y desciende estirando suavemente el codo."
    ],
    "alternatives": [
      "dumbbell-curl",
      "hammer-curl"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "dumbbell-curl",
    "name": "Curl de Bíceps alterno con Mancuernas",
    "nameEn": "Dumbbell Curl",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "forceType": "Tirón",
    "instructions": [
      "Párate o siéntate con una mancuerna a cada lado.",
      "Eleva el peso flexionando el codo y girando la muñeca hacia arriba (supinando) en el medio del recorrido.",
      "Baja controladamente y alterna de brazo."
    ],
    "alternatives": [
      "barbell-curl",
      "incline-dumbbell-curl"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "incline-dumbbell-curl",
    "name": "Curl Inclinado con Mancuernas",
    "nameEn": "Incline Dumbbell Curl",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Intermedio",
    "forceType": "Tirón",
    "instructions": [
      "Siéntate en un banco inclinado a unos 45 grados sosteniendo las mancuernas colgadas.",
      "Flexiona los codos manteniendo los brazos detrás del torso para enfatizar la cabeza larga del bíceps.",
      "Baja extendiendo completamente."
    ],
    "alternatives": [
      "dumbbell-curl",
      "concentration-curl"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "hammer-curl",
    "name": "Curl de Bíceps Martillo",
    "nameEn": "Hammer Curl",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "forceType": "Tirón",
    "instructions": [
      "Sostén un par de mancuernas a los lados de tu torso con agarre neutro (las palmas se miran cara a cara).",
      "Sube la mancuerna verticalmente doblando el codo sin girar la muñeca.",
      "Asegúrate de no usar impulso en la parte baja del movimiento.",
      "Desciende con control absoluto de los flexores de codo."
    ],
    "alternatives": [
      "barbell-curl"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "preacher-curl",
    "name": "Curl Predicador en Banco Scott",
    "nameEn": "Preacher Curl",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Barbell",
    "difficulty": "Principiante",
    "forceType": "Tirón",
    "instructions": [
      "Siéntate en el banco predicador y apoya la parte posterior de tus brazos firmemente contra el colchón.",
      "Toma la barra EZ y flexiona los codos para llevar el peso arriba sin separar los brazos de la almohadilla.",
      "Baja controladamente estirando casi por completo los codos."
    ],
    "alternatives": [
      "barbell-curl"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "concentration-curl",
    "name": "Curl de Concentración con Mancuerna",
    "nameEn": "Concentration Curl",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "forceType": "Tirón",
    "instructions": [
      "Siéntate en un banco, apoya el codo contra la cara interna de tu muslo del mismo lado.",
      "Flexiona el codo levantando la mancuerna de forma aislada hacia tu cara.",
      "Baja de vuelta controladamente."
    ],
    "alternatives": [
      "incline-dumbbell-curl",
      "preacher-curl"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "cable-curl",
    "name": "Curl de Bíceps en Polea",
    "nameEn": "Cable Bicep Curl",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "forceType": "Tirón",
    "instructions": [
      "Párate frente a la polea baja con barra de agarre.",
      "Toma la barra con palmas hacia arriba y flexiona los codos contrayendo bíceps.",
      "Baja resistiendo la tensión constante del cable."
    ],
    "alternatives": [
      "barbell-curl",
      "dumbbell-curl"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "triceps-pushdown",
    "name": "Extensión de Tríceps en Polea Alta",
    "nameEn": "Triceps Cable Pushdown",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "forceType": "Empuje",
    "instructions": [
      "Coloca una soga o barra recta en la polea en posición superior y sujétala.",
      "Da un medio paso atrás inclinando un poco el torso hacia adelante, con los codos fijos a las costillas.",
      "Extiende el codo por completo empujando la soga hacia el suelo, abriéndola en el fondo del movimiento.",
      "Flexiona el codo dejando subir la soga hasta la altura del pecho superior de forma controlada."
    ],
    "alternatives": [
      "skull-crusher",
      "bench-dips"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "overhead-cable-extension",
    "name": "Extensión de Tríceps sobre la Cabeza en Polea",
    "nameEn": "Overhead Cable Triceps Extension",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Cable",
    "difficulty": "Intermedio",
    "forceType": "Empuje",
    "instructions": [
      "Dale la espalda a la polea y sujeta la soga llevándola detrás de tu cabeza.",
      "Da un paso adelante e inclínate ligeramente.",
      "Extiende los codos proyectando la soga hacia el frente.",
      "Baja controlando el jalón detrás de tu cabeza."
    ],
    "alternatives": [
      "triceps-pushdown",
      "skull-crusher"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "skull-crusher",
    "name": "Rompecráneos / Press Francés",
    "nameEn": "Skull Crusher",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "forceType": "Empuje",
    "instructions": [
      "Acuéstate sobre un banco plano y sostén una barra EZ con los brazos estirados verticalmente sobre el rostro.",
      "Lleva los brazos ligeramente en diagonal hacia atrás para mantener los tríceps trabajando bajo tensión constante.",
      "Dobla únicamente el codo bajando la barra lentamente hacia tu frente o detrás de la cabeza.",
      "Utiliza los tríceps para empujar la barra a la posición de partida."
    ],
    "alternatives": [
      "triceps-pushdown",
      "dumbbell-kickback"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "close-grip-bench-press",
    "name": "Press de Banca Cerrado para Tríceps",
    "nameEn": "Close Grip Bench Press",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Chest",
      "Shoulders"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "forceType": "Empuje",
    "instructions": [
      "Acuéstate en el banco y toma la barra con un agarre estrecho (al ancho de hombros).",
      "Baja la barra lentamente hacia el pecho inferior con los codos pegados al cuerpo.",
      "Empuja con fuerza de regreso usando los tríceps."
    ],
    "alternatives": [
      "barbell-bench-press",
      "skull-crusher"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "dumbbell-kickback",
    "name": "Patada de Tríceps con Mancuerna",
    "nameEn": "Dumbbell Triceps Kickback",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "forceType": "Empuje",
    "instructions": [
      "Apoya una mano y rodilla en el banco, manteniendo la espalda recta.",
      "Sostén la mancuerna levantando el codo hasta que el brazo quede paralelo al torso.",
      "Extiende el codo hacia atrás por completo.",
      "Baja la mancuerna a 90 grados de flexión controladamente."
    ],
    "alternatives": [
      "triceps-pushdown",
      "overhead-cable-extension"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "bench-dips",
    "name": "Fondos entre Bancos",
    "nameEn": "Bench Dips",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Chest",
      "Shoulders"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "forceType": "Empuje",
    "instructions": [
      "Coloca las manos en el borde de un banco detrás de ti y estira las piernas apoyadas en otro banco o suelo.",
      "Baja el cuerpo doblando los codos hasta unos 90 grados.",
      "Empuja con los tríceps para regresar arriba."
    ],
    "alternatives": [
      "triceps-pushdown",
      "chest-dips"
    ],
    "category": "Calistenia",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "barbell-squat",
    "name": "Sentadilla de Espalda con Barra",
    "nameEn": "Barbell Back Squat",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings",
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Coloca la barra sobre el músculo trapecio superior de tu espalda alta (no en el cuello).",
      "Desengancha del rack dando uno o dos pasos moderados hacia atrás.",
      "Párate con pies al ancho de hombros con rodillas y puntas mirando levemente afuera.",
      "Baja mandando cadera atrás y doblando rodillas de forma paralela en cuclillas.",
      "Empuja con fuerza los talones y el centro de tus pies para subir de forma vertical y erguirte."
    ],
    "alternatives": [
      "leg-press",
      "bulgarian-split-squat",
      "front-squat"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "front-squat",
    "name": "Sentadilla Frontal con Barra",
    "nameEn": "Barbell Front Squat",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Coloca la barra sobre los hombros delanteros y crúzale los dedos para asegurar el agarre.",
      "Mantén los codos en posición alta durante todo el movimiento.",
      "Baja las caderas controlando la posición y cuidando no inclinar el torso.",
      "Sube empujando activamente con los cuádriceps."
    ],
    "alternatives": [
      "barbell-squat",
      "hack-squat"
    ],
    "category": "Fuerza",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "hack-squat",
    "name": "Sentadilla Hack en Máquina",
    "nameEn": "Hack Squat Machine",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings"
    ],
    "equipment": "Machine",
    "difficulty": "Intermedio",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Apoya la espalda en el respaldo de la máquina Hack y coloca los hombros bajo las almohadillas.",
      "Coloca los pies al ancho de hombros en la plataforma.",
      "Baja de forma controlada flexionando las rodillas.",
      "Empuja la plataforma hacia arriba extendiendo las piernas."
    ],
    "alternatives": [
      "barbell-squat",
      "leg-press"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "leg-press",
    "name": "Prensa de Pierna de 45 Grados",
    "nameEn": "Leg Press",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Acomódate en el asiento de la prensa recargando la espalda lumbar contra el respaldo.",
      "Coloca los pies en la plataforma en un patrón medio al ancho de caderas.",
      "Quita los pestillos de seguridad y baja la plataforma doblando las rodillas hasta un ángulo aproximado de 90 grados.",
      "Empuja con el talón y el tercio medio de la planta sin bloquear tus rodillas de golpe arriba."
    ],
    "alternatives": [
      "barbell-squat",
      "leg-extension"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "leg-extension",
    "name": "Extensiones de Cuádriceps en Máquina",
    "nameEn": "Leg Extension",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Siéntate ajustando la almohadilla del rodillo sobre tus tobillos.",
      "Sostén los agarres laterales para evitar levantar el trasero.",
      "Extiende las piernas por completo levantando el rodillo.",
      "Baja lentamente resistiendo la carga."
    ],
    "alternatives": [
      "leg-press",
      "barbell-squat"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "dumbbell-lunge",
    "name": "Zancadas con Mancuerna",
    "nameEn": "Dumbbell Lunge",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Sostén una mancuerna en cada mano erguido.",
      "Da un paso amplio hacia adelante con una pierna.",
      "Baja el cuerpo doblando ambas rodillas a 90 grados, con la rodilla trasera rozando el suelo.",
      "Empuja con el talón delantero para volver al inicio."
    ],
    "alternatives": [
      "bulgarian-split-squat"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Estocada",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "bulgarian-split-squat",
    "name": "Sentadilla Búlgara con Mancuerna",
    "nameEn": "Bulgarian Split Squat",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Intermedio",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Coloca un pie de apoyo atrás descansando el empeine del pie sobre un banco plano.",
      "Da un paso moderado adelante con el otro pie sosteniendo una mancuerna en cada mano.",
      "Desciende de forma vertical bajando la rodilla trasera hacia el suelo curvando levemente el torso si deseas enfatizar glúteo.",
      "Empuja firmemente con el talón de la pierna delantera para regresar erguido."
    ],
    "alternatives": [
      "barbell-squat",
      "dumbbell-lunge"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Estocada",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "romanian-deadlift",
    "name": "Peso Muerto Rumano con Barra",
    "nameEn": "Barbell Romanian Deadlift",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Back"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Sostén la barra verticalmente estando de pie con los hombros relajados espalda recta.",
      "Empieza a bajar la barra deslizando tus caderas directamente hacia atrás, como si quisieras empujar una puerta con los glúteos.",
      "Mantén los hombros estables y la barra muy pegada a tus muslos doblando casi nada las rodillas.",
      "Baja hasta que sientas el máximo estiramiento en los femorales traseros.",
      "Haz fuerza con los glúteos para volver a enderezarte."
    ],
    "alternatives": [
      "dumbbell-rdl",
      "seated-leg-curl"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "dumbbell-rdl",
    "name": "Peso Muerto Rumano con Mancuernas",
    "nameEn": "Dumbbell Romanian Deadlift",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Back"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Sostén las mancuernas delante de tus piernas de pie.",
      "Envía las caderas hacia atrás bajando las mancuernas pegadas a tus espinillas.",
      "Contrae isquiotibiales y glúteos para regresar arriba."
    ],
    "alternatives": [
      "romanian-deadlift",
      "lying-leg-curl"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "lying-leg-curl",
    "name": "Curl Femoral Acostado",
    "nameEn": "Lying Leg Curl",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Acuéstate boca abajo en la máquina de curl femoral.",
      "Ubica el rodillo sobre los talones superiores.",
      "Flexiona las rodillas jalando el peso hacia los glúteos.",
      "Extiende controladamente las piernas."
    ],
    "alternatives": [
      "seated-leg-curl",
      "dumbbell-rdl"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "seated-leg-curl",
    "name": "Curl Femoral Sentado",
    "nameEn": "Seated Leg Curl",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Siéntate y asegura el soporte de rodillas firmemente.",
      "Coloca los talones sobre el rodillo de resistencia.",
      "Flexiona las piernas empujando el rodillo hacia abajo.",
      "Regresa despacio estirando por completo."
    ],
    "alternatives": [
      "lying-leg-curl",
      "romanian-deadlift"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "barbell-hip-thrust",
    "name": "Hip Thrust con Barra",
    "nameEn": "Barbell Hip Thrust",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "equipment": "Barbell",
    "difficulty": "Principiante",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Apoya tu espalda escapular alta firmemente contra el borde largo de un banco resistente.",
      "Coloca la barra acolchada justo sobre el pliegue de tu pelvis.",
      "Posiciona las rodillas de tal manera que a 90 grados apoyes firmemente la planta entera sobre el suelo.",
      "Empuja la cadera hacia arriba apretando los glúteos de manera que queden alineados con rodillas e inserciones.",
      "Baja controlando el peso a escasos centímetros del suelo."
    ],
    "alternatives": [
      "dumbbell-glute-bridge",
      "romanian-deadlift"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "dumbbell-glute-bridge",
    "name": "Puente de Glúteos con Mancuerna",
    "nameEn": "Dumbbell Glute Bridge",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Acuéstate boca arriba con rodillas dobladas y pies apoyados en el suelo.",
      "Coloca una mancuerna sobre tu pelvis.",
      "Eleva la pelvis contrayendo los glúteos formando una línea recta desde los hombros a las rodillas.",
      "Baja despacio."
    ],
    "alternatives": [
      "barbell-hip-thrust"
    ],
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "cable-kickback",
    "name": "Patada de Glúteo en Polea",
    "nameEn": "Cable Glute Kickback",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "equipment": "Cable",
    "difficulty": "Intermedio",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Coloca una tobillera a tu pie y conéctala a la polea baja.",
      "Sostén el marco de la polea inclinado un poco adelante.",
      "Patea el pie hacia atrás y hacia arriba contrayendo el glúteo.",
      "Regresa despacio."
    ],
    "alternatives": [
      "barbell-hip-thrust",
      "dumbbell-glute-bridge"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "standing-calf-raise",
    "name": "Elevación de Gemelos de Pie con Barra",
    "nameEn": "Standing Barbell Calf Raise",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [],
    "equipment": "Barbell",
    "difficulty": "Principiante",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Coloca la barra sobre la espalda alta.",
      "Párate sobre el borde de un bloque metálico o disco.",
      "Baja los talones por debajo del nivel del bloque para estirar.",
      "Eleva los talones lo más alto posible apoyándote en las puntas de los pies."
    ],
    "alternatives": [
      "seated-calf-raise"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "seated-calf-raise",
    "name": "Elevación de Gemelos Sentado",
    "nameEn": "Seated Calf Raise",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Siéntate en la máquina apoyando la almohadilla sobre tus muslos bajos.",
      "Coloca la punta de los pies en el bloque.",
      "Eleva las puntas quitando el seguro, baja los talones al máximo y vuelve a elevar extendiendo al máximo el tobillo."
    ],
    "alternatives": [
      "standing-calf-raise"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "ab-plank",
    "name": "Plancha Abdominal",
    "nameEn": "Abdominal Plank",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders",
      "Back"
    ],
    "equipment": "None",
    "difficulty": "Principiante",
    "forceType": "Core",
    "instructions": [
      "Apoya tus antebrazos en el suelo alineando los codos justo bajo los hombros.",
      "Estira tus piernas atrás apoyando las puntas de tus pies.",
      "Contrae activamente el abdomen, los glúteos y las piernas creando fuerza en bloque.",
      "Evita dejar caer la zona lumbar, mantén el cuello alineado neutro respirando rítmicamente."
    ],
    "alternatives": [
      "hanging-leg-raise",
      "ab-crunch"
    ],
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "ab-crunch",
    "name": "Crunch Abdominal",
    "nameEn": "Abdominal Crunch",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [],
    "equipment": "None",
    "difficulty": "Principiante",
    "forceType": "Core",
    "instructions": [
      "Acuéstate de espaldas con las rodillas flexionadas y pies en el suelo.",
      "Coloca las manos ligeramente detrás de las orejas.",
      "Eleva los hombros del suelo contrayendo el recto abdominal, sin tirar del cuello.",
      "Baja con control."
    ],
    "alternatives": [
      "ab-plank",
      "hanging-leg-raise"
    ],
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "hanging-leg-raise",
    "name": "Elevación de Piernas Colgado",
    "nameEn": "Hanging Leg Raise",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Forearms"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "forceType": "Core",
    "instructions": [
      "Cuelga de la barra de tracción con los brazos totalmente extendidos.",
      "Usa tu fuerza abdominal sin balancear el torso para elevar los pies o rodillas hacia el nivel de tu pecho.",
      "Baja con total lentitud controlando la fuerza excéntrica."
    ],
    "alternatives": [
      "ab-plank",
      "ab-crunch"
    ],
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "russian-twist",
    "name": "Giro Ruso con Disco/Mancuerna",
    "nameEn": "Russian Twist",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "forceType": "Core",
    "instructions": [
      "Siéntate con rodillas dobladas, inclina el torso hacia atrás en 45 grados y despega los pies del suelo.",
      "Sostén una mancuerna y gírala alternamente de lado a lado cruzando tu abdomen."
    ],
    "alternatives": [
      "ab-plank"
    ],
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "ab-wheel-rollout",
    "name": "Rueda Abdominal",
    "nameEn": "Ab Wheel Rollout",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Back",
      "Shoulders"
    ],
    "equipment": "None",
    "difficulty": "Avanzado",
    "forceType": "Core",
    "instructions": [
      "Arrodíllate en el suelo y sostén la rueda abdominal delante de ti.",
      "Rueda la rueda hacia el frente estirando el cuerpo en una línea recta horizontal.",
      "Contrae fuertemente el abdomen para regresar a la posición vertical."
    ],
    "alternatives": [
      "ab-plank"
    ],
    "category": "Fuerza",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "wrist-curl",
    "name": "Curl de Muñeca con Barra",
    "nameEn": "Wrist Curl",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [],
    "equipment": "Barbell",
    "difficulty": "Principiante",
    "forceType": "Tirón",
    "instructions": [
      "Apoya los antebrazos sobre un banco con las manos colgando al borde sosteniendo la barra en supinación.",
      "Flexiona la muñeca llevando la barra hacia arriba.",
      "Baja la barra controlando la carga."
    ],
    "alternatives": [
      "reverse-wrist-curl"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "reverse-wrist-curl",
    "name": "Curl de Muñeca Inverso",
    "nameEn": "Reverse Wrist Curl",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [],
    "equipment": "Barbell",
    "difficulty": "Principiante",
    "forceType": "Tirón",
    "instructions": [
      "Apoya los antebrazos con manos colgadas sosteniendo la barra en pronación (palmas boca abajo).",
      "Extiende las muñecas subiendo la barra."
    ],
    "alternatives": [
      "wrist-curl"
    ],
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "treadmill-run",
    "name": "Carrera en Cinta",
    "nameEn": "Treadmill Run",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Quads",
      "Calves"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "forceType": "Cardio",
    "instructions": [
      "Configura la velocidad e inclinación en el monitor de control de la cinta.",
      "Mantén tu postura erguida, la vista hacia el frente y un apoyo uniforme del pie.",
      "Disfruta de una rutina constante de baja intensidad (LISS) o sprints rápidos progresivos."
    ],
    "alternatives": [
      "stationary-bike",
      "rowing-machine"
    ],
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "stationary-bike",
    "name": "Bicicleta Estática",
    "nameEn": "Stationary Bike",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Quads",
      "Hamstrings"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "forceType": "Cardio",
    "instructions": [
      "Ajusta la altura del sillín al nivel de la cadera.",
      "Pedalea manteniendo una cadencia constante y la columna neutral."
    ],
    "alternatives": [
      "treadmill-run",
      "elliptical-trainer"
    ],
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "rowing-machine",
    "name": "Máquina de Remo (Ergómetro)",
    "nameEn": "Rowing Machine",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Back",
      "Legs",
      "Arms"
    ],
    "equipment": "Machine",
    "difficulty": "Intermedio",
    "forceType": "Cardio",
    "instructions": [
      "Siéntate con los pies asegurados en los estribos.",
      "Empuja con las piernas, inclina el torso atrás y jala el manillar hacia el pecho bajo.",
      "Regresa las manos, el torso y flexiona las piernas."
    ],
    "alternatives": [
      "treadmill-run"
    ],
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "elliptical-trainer",
    "name": "Elíptica",
    "nameEn": "Elliptical Trainer",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Quads",
      "Glutes"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "forceType": "Cardio",
    "instructions": [
      "Súbete a los pedales y toma los agarres móviles.",
      "Muévete en un movimiento fluido de zancada elíptica empujando con brazos y piernas."
    ],
    "alternatives": [
      "stationary-bike",
      "treadmill-run"
    ],
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "jump-rope",
    "name": "Salto de Cuerda",
    "nameEn": "Jump Rope",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Calves",
      "Shoulders"
    ],
    "equipment": "None",
    "difficulty": "Principiante",
    "forceType": "Cardio",
    "instructions": [
      "Sostén los mangos a los lados de tus caderas.",
      "Salta en las puntas de los pies mientras rotas la cuerda con las muñecas."
    ],
    "alternatives": [
      "treadmill-run"
    ],
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "stabilizers": [
      "Abs"
    ],
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "tips": [
      "Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica."
    ],
    "breathingCue": "Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno."
  },
  {
    "id": "incline-dumbbell-flyes",
    "name": "Aperturas Inclinadas con Mancuernas",
    "nameEn": "Incline Dumbbell Flyes",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs",
      "Biceps"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Intermedio",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Frontal",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta un banco inclinado entre 30 y 45 grados y siéntate apoyando la espalda por completo.",
      "Sujeta dos mancuernas con agarre neutro y elévalas sobre el pecho con los codos ligeramente flexionados.",
      "Abre los brazos en un arco amplio descendiendo las mancuernas hasta sentir un estiramiento profundo en el pectoral superior.",
      "Cierra los brazos contrayendo el pecho por la misma trayectoria hasta la posición inicial sin chocar las mancuernas."
    ],
    "tips": [
      "Mantén un ángulo de flexión constante en los codos durante todo el recorrido; no conviertas el ejercicio en un press."
    ],
    "breathingCue": "Inhala al descender abriendo los brazos; exhala al cerrar al centro.",
    "alternatives": [
      "cable-crossover",
      "incline-dumbbell-bench-press"
    ]
  },
  {
    "id": "svend-press",
    "name": "Press Svend con Discos",
    "nameEn": "Svend Press",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Forearms",
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ponte de pie con los pies a la anchura de las caderas y la espalda erguida.",
      "Coloca uno o dos discos pequeños (o una mancuerna) entre las palmas de las manos a la altura del esternón.",
      "Presiona activamente las palmas entre sí con fuerza isométrica máxima apretando el pecho.",
      "Empuja las manos hacia adelante hasta estirar los brazos por completo sin aflojar la presión entre las palmas.",
      "Regresa controladamente al esternón manteniendo la compresión continua."
    ],
    "tips": [
      "El estímulo no depende del peso levantado, sino de la fuerza con la que aplastas los discos entre sí."
    ],
    "breathingCue": "Exhala al extender los brazos al frente; inhala al recoger al esternón.",
    "alternatives": []
  },
  {
    "id": "seated-cable-flyes",
    "name": "Cruces en Polea Sentado en Banco",
    "nameEn": "Seated Cable Flyes",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Frontal",
    "forceType": "Empuje",
    "instructions": [
      "Coloca un banco con respaldo a 90 grados en medio de una estación de poleas dobles ajustadas a la altura del pecho.",
      "Siéntate apoyando firmemente la espalda y toma los agarres individuales.",
      "Junta las manos hacia el frente en un arco amplio con los codos ligeramente doblados.",
      "Aguanta un segundo la contracción máxima en el centro y abre los brazos despacio sintiendo la tensión continua del cable."
    ],
    "tips": [
      "Al estar sentado se anula el balanceo del tronco, aislando el trabajo en el pectoral mayor."
    ],
    "breathingCue": "Exhala al juntar los agarres al frente; inhala al abrir los brazos.",
    "alternatives": [
      "cable-crossover"
    ]
  },
  {
    "id": "single-arm-cable-chest-press",
    "name": "Press de Pecho en Polea a Una Mano",
    "nameEn": "Single-Arm Cable Chest Press",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Cable",
    "difficulty": "Intermedio",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la polea a la altura del pecho y toma el agarre con una mano situándote de espaldas a la torre en posición de zancada firme.",
      "Comienza con la mano al lado del pecho y el core completamente rígido para resistir la rotación.",
      "Empuja el agarre hacia el frente en línea recta hasta extender el brazo.",
      "Regresa lentamente sin permitir que el peso rote tu tronco hacia atrás."
    ],
    "tips": [
      "Excelente para transferir fuerza rotacional y estabilidad del core a deportes de contacto o golpeo."
    ],
    "breathingCue": "Exhala al empujar al frente; inhala al regresar reteniendo el peso.",
    "alternatives": [
      "dumbbell-bench-press"
    ]
  },
  {
    "id": "chest-supported-t-bar-row",
    "name": "Remo en Barra T con Apoyo al Pecho",
    "nameEn": "Chest-Supported T-Bar Row",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Biceps",
      "Traps",
      "Forearms"
    ],
    "stabilizers": [
      "Lats"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Apoya el pecho firmemente contra la almohadilla inclinada de la máquina y asegura los pies en las plataformas.",
      "Toma los agarres con las manos en pronación o agarre neutro con brazos totalmente estirados.",
      "Tira de las empuñaduras llevando los codos hacia atrás y apretando las escápulas con fuerza en el punto alto.",
      "Baja el peso con una cadencia controlada de 2 a 3 segundos hasta sentir el estiramiento escapular completo."
    ],
    "tips": [
      "Al tener el pecho apoyado, eliminas por completo la sobrecarga lumbar, permitiendo aislar la espalda alta."
    ],
    "breathingCue": "Exhala al traccionar los codos hacia atrás; inhala en la bajada controlada.",
    "alternatives": [
      "seated-cable-row"
    ]
  },
  {
    "id": "single-arm-dumbbell-row",
    "name": "Remo con Mancuerna a Una Mano Apoyado en Banco",
    "nameEn": "Single-Arm Dumbbell Row",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Lats",
      "Biceps",
      "Forearms"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Coloca la rodilla y la mano derecha apoyadas firmemente sobre un banco plano, con la espalda paralela al suelo.",
      "Toma una mancuerna con la mano izquierda con el brazo colgando hacia el suelo en extensión relajada.",
      "Tira de la mancuerna guiando el codo hacia el bolsillo trasero de la cadera, sin girar el tronco.",
      "Aprieta el dorsal arriba un instante y baja con lentitud extendiendo por completo el brazo."
    ],
    "tips": [
      "Tira hacia la cadera en arco, no hacia la axila de forma vertical, para focalizar el dorsal."
    ],
    "breathingCue": "Exhala al subir la mancuerna; inhala al descolgarla hacia el suelo.",
    "alternatives": [
      "seated-cable-row"
    ]
  },
  {
    "id": "inverted-row",
    "name": "Remo Invertido (Remo Australiano)",
    "nameEn": "Inverted Row (Australian Pull-Up)",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Biceps",
      "Traps",
      "Forearms"
    ],
    "stabilizers": [
      "Abs",
      "Glutes",
      "Hamstrings"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Coloca una barra fija en un rack a la altura de la cadera y túmbate debajo mirando hacia arriba.",
      "Sujeta la barra con agarre prono un poco más ancho que los hombros y apoya los talones en el suelo con el cuerpo recto.",
      "Tira del pecho hacia la barra contrayendo la espalda alta hasta que el esternón toque o quede a centímetros de la barra.",
      "Baja el cuerpo con control hasta estirar los brazos completamente sin romper la línea recta corporal."
    ],
    "tips": [
      "Para aumentar la dificultad, eleva los pies sobre un cajón; para facilitarlo, sube la altura de la barra."
    ],
    "breathingCue": "Exhala al subir tocando la barra; inhala en la bajada.",
    "alternatives": [
      "pull-up",
      "seated-cable-row"
    ]
  },
  {
    "id": "straight-arm-cable-pulldown",
    "name": "Pull-Over en Polea Alta con Brazos Rectos",
    "nameEn": "Straight-Arm Cable Pulldown",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Triceps",
      "Chest"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Coloca una barra recta o cuerda en la polea alta y tómala con las palmas hacia abajo.",
      "Da un paso hacia atrás, inclina el tronco unos 30 grados con caderas flexionadas y mantén los brazos semirrectos.",
      "Tracciona la barra en un arco descendente hacia los muslos exclusivamente contrayendo los dorsales.",
      "Aprieta los dorsales abajo durante un segundo y regresa despacio hasta sentir el estiramiento completo arriba."
    ],
    "tips": [
      "Mantén los codos fijados con un ángulo casi recto para que no intervengan los tríceps."
    ],
    "breathingCue": "Exhala al llevar la barra hacia los muslos; inhala al permitir que suba controladamente.",
    "alternatives": [
      "lat-pulldown"
    ]
  },
  {
    "id": "face-pull-rope",
    "name": "Face Pull con Cuerda en Polea",
    "nameEn": "Rope Cable Face Pull",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Traps",
      "Back"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Transverso",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta la polea a la altura de los ojos y toma la cuerda con agarre neutro (pulgares hacia atrás).",
      "Da un paso atrás con rodillas semiflexionadas y el tronco estable.",
      "Tira de la cuerda hacia la cara separando las manos y llevando los codos altos y hacia atrás.",
      "Al final del movimiento, rota externamente los hombros mostrando los nudillos hacia atrás.",
      "Regresa con lentitud a la posición de brazos extendidos."
    ],
    "tips": [
      "Fundamental para la salud articular de los hombros y compensar el exceso de press de banca."
    ],
    "breathingCue": "Exhala al traccionar hacia el rostro; inhala al retornar al frente.",
    "alternatives": []
  },
  {
    "id": "spider-curl",
    "name": "Curl Araña con Barra Z en Banco Inclinado",
    "nameEn": "Spider Curl with EZ Bar",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "EZBar",
    "difficulty": "Intermedio",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Apoya el pecho sobre la parte superior de un banco inclinado a 45 grados mirando hacia el suelo.",
      "Sujeta la barra Z con agarre supino dejando que los brazos cuelguen rectos verticalmente.",
      "Flexiona los codos elevando la barra hacia la frente con aislamiento absoluto sin balanceo.",
      "Pausa un segundo en la contracción pico y desciende lentamente hasta la vertical."
    ],
    "tips": [
      "Al estar el torso bloqueado contra el banco, se elimina cualquier inercia corporal."
    ],
    "breathingCue": "Exhala al subir la barra; inhala en la bajada.",
    "alternatives": [
      "preacher-curl"
    ]
  },
  {
    "id": "overhead-cable-triceps-extension",
    "name": "Extensión de Tríceps sobre la Cabeza en Polea",
    "nameEn": "Overhead Cable Triceps Extension",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Coloca una cuerda en una polea a media altura o baja y colócate de espaldas a la torre.",
      "Lleva la cuerda por detrás de tu nuca con codos flexionados apuntando hacia adelante.",
      "Da un paso adelante en zancada para dar estabilidad al tronco inclinado unos 30 grados.",
      "Extiende los brazos hacia adelante y arriba bloqueando los tríceps con apertura de cuerda al final.",
      "Flexiona los codos hacia atrás sintiendo un gran estiramiento en la cabeza larga del tríceps."
    ],
    "tips": [
      "La posición por encima de la cabeza coloca a la cabeza larga del tríceps en estiramiento máximo."
    ],
    "breathingCue": "Exhala al extender los codos; inhala al flexionar hacia la nuca.",
    "alternatives": []
  },
  {
    "id": "skull-crushers-ez-bar",
    "name": "Press Francés con Barra Z Acostado",
    "nameEn": "Lying EZ-Bar Skull Crusher",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "EZBar",
    "difficulty": "Intermedio",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Acuéstate sobre un banco plano sosteniendo una barra Z con agarre estrecho sobre el pecho.",
      "Lleva los brazos ligeramente inclinados hacia atrás (hacia la cabeza) unos 10-15 grados para mantener tensión.",
      "Flexiona únicamente los codos bajando la barra hacia la coronilla de la cabeza de forma controlada.",
      "Extiende los antebrazos con fuerza de los tríceps regresando a la posición inicial sin mover los brazos superiores."
    ],
    "tips": [
      "Mantén los codos cerrados, evitando que se abran hacia los lados durante la flexión."
    ],
    "breathingCue": "Inhala al doblar codos hacia la frente; exhala al extender los brazos.",
    "alternatives": [
      "close-grip-bench-press"
    ]
  },
  {
    "id": "hack-squat-machine",
    "name": "Sentadilla Hack en Máquina",
    "nameEn": "Hack Squat Machine",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings"
    ],
    "stabilizers": [
      "Calves",
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Intermedio",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Apoya la espalda y hombros firmemente contra las almohadillas de la máquina Hack y coloca los pies en el centro de la plataforma.",
      "Desengancha los seguros laterales y desciende flexionando las rodillas de forma controlada.",
      "Baja profundamente hasta formar al menos un ángulo de 90 grados o hasta que los muslos toquen las pantorrillas.",
      "Empuja la plataforma con toda la planta de los pies extendiendo las rodillas sin bloquearlas de golpe arriba."
    ],
    "tips": [
      "Permite una gran flexión de rodilla con mínimo estrés axial en la columna vertebral."
    ],
    "breathingCue": "Inhala al descender; exhala con fuerza al empujar hacia la posición erguida.",
    "alternatives": [
      "leg-press-45"
    ]
  },
  {
    "id": "leg-press-45",
    "name": "Prensa de Piernas a 45 Grados",
    "nameEn": "45-Degree Leg Press",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings"
    ],
    "stabilizers": [
      "Calves"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Siéntate en la máquina apoyando la zona lumbar firmemente contra el respaldo sin despegar los glúteos del asiento.",
      "Coloca los pies en la plataforma a la anchura de los hombros y quita los topes de seguridad con las palancas laterales.",
      "Flexiona las piernas bajando la plataforma de manera fluida hasta que las rodillas queden cerca del pecho a 90 grados.",
      "Empuja con los talones y parte media del pie regresando la plataforma sin extender bruscamente las rodillas al final."
    ],
    "tips": [
      "Nunca despegues la pelvis del respaldo en el punto más profundo para proteger la zona sacrolumbar."
    ],
    "breathingCue": "Inhala profundo en la bajada; exhala al empujar la plataforma.",
    "alternatives": [
      "hack-squat-machine"
    ]
  },
  {
    "id": "hip-thrust-barbell",
    "name": "Hip Thrust con Barra (Empuje de Cadera)",
    "nameEn": "Barbell Hip Thrust",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings",
      "Quads"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack",
      "Adductors"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Siéntate en el suelo con la espalda alta (borde inferior de las escápulas) apoyada contra un banco acolchado firme.",
      "Haz rodar una barra cargada con protector sobre tus muslos hasta ubicarla sobre el pliegue de las caderas.",
      "Coloca los pies firmes en el suelo de modo que, al elevar la cadera, las espinillas queden totalmente verticales a 90 grados.",
      "Empuja a través de los talones extendiendo las caderas hacia arriba hasta alinear torso y muslos paralelos al suelo.",
      "Aprieta los glúteos en la cima un segundo con retroversión pélvica y desciende controladamente sin arquear el cuello."
    ],
    "tips": [
      "Mantén la mirada al frente hacia las rodillas, no mires al techo para evitar la hiperextensión lumbar."
    ],
    "breathingCue": "Exhala con fuerza al empujar la cadera hacia arriba; inhala al bajar al suelo.",
    "alternatives": [
      "glute-bridge-barbell"
    ]
  },
  {
    "id": "glute-bridge-barbell",
    "name": "Puente de Glúteos con Barra en el Suelo",
    "nameEn": "Barbell Glute Bridge",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Principiante",
    "category": "Fuerza",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Acuéstate boca arriba en el suelo con las rodillas dobladas y los pies planos al suelo a la anchura de las caderas.",
      "Coloca la barra protegida sobre las caderas sosteniéndola con ambas manos para evitar que ruede.",
      "Eleva las caderas despegando los glúteos del piso hasta que los muslos queden en línea con el torso.",
      "Contrae intensamente los glúteos en el punto alto y baja la cadera rozando apenas el suelo antes de repetir."
    ],
    "tips": [
      "Rango de recorrido más corto que el hip thrust pero muy seguro para aislar el glúteo mayor."
    ],
    "breathingCue": "Exhala al subir la pelvis; inhala al apoyar suavemente en el piso.",
    "alternatives": [
      "hip-thrust-barbell"
    ]
  },
  {
    "id": "seated-leg-curl-machine",
    "name": "Curl Femoral Sentado en Máquina",
    "nameEn": "Seated Leg Curl Machine",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Ajusta el respaldo para que el eje de rotación de la máquina coincida con tus rodillas y asegura la almohadilla superior sobre tus muslos.",
      "Coloca la parte posterior de los tobillos sobre el rodillo inferior acolchado.",
      "Flexiona las piernas hacia abajo y atrás contrayendo los isquiotibiales hasta el tope de recorrido.",
      "Aguanta un instante la contracción y permite que el rodillo suba despacio en 3 segundos sintiendo el estiramiento excéntrico."
    ],
    "tips": [
      "Al tener la cadera flexionada en posición sentada, los isquiotibiales se estiran más, generando mayor hipertrofia."
    ],
    "breathingCue": "Exhala al flexionar las piernas hacia atrás; inhala al regresar a la extensión.",
    "alternatives": [
      "lying-leg-curl-machine",
      "romanian-deadlift"
    ]
  },
  {
    "id": "lying-leg-curl-machine",
    "name": "Curl Femoral Tumbado en Máquina",
    "nameEn": "Lying Leg Curl Machine",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Acuéstate boca abajo en el banco de la máquina encajando los tobillos bajo el rodillo acolchado.",
      "Sujeta firmemente las asas laterales y mantén la pelvis pegada al tapizado.",
      "Flexiona las rodillas llevando los talones hacia los glúteos de forma decidida.",
      "Desciende despacio resistiendo la carga hasta estirar casi por completo las piernas."
    ],
    "tips": [
      "No levantes las caderas del banco durante la flexión para evitar compensaciones con la zona lumbar."
    ],
    "breathingCue": "Exhala al doblar las rodillas; inhala al extender lentamente.",
    "alternatives": [
      "seated-leg-curl-machine"
    ]
  },
  {
    "id": "leg-extension-machine",
    "name": "Extensión de Cuádriceps en Máquina",
    "nameEn": "Leg Extension Machine",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Siéntate con la espalda apoyada y los tobillos colocados detrás del rodillo inferior acolchado.",
      "Agarra las asas laterales para fijar el torso en el asiento.",
      "Extiende las piernas hacia arriba contrayendo los cuádriceps hasta quedar paralelas al suelo.",
      "Mantén la contracción durante un segundo en la posición más alta y baja con control en 3 segundos."
    ],
    "tips": [
      "Ideal para trabajar el recto femoral en aislamiento completo sin sobrecarga de estabilizadores."
    ],
    "breathingCue": "Exhala al extender las piernas hacia arriba; inhala al descender despacio.",
    "alternatives": [
      "hack-squat-machine"
    ]
  },
  {
    "id": "seated-calf-raise-machine",
    "name": "Elevación de Talones Sentado en Máquina (Sóleo)",
    "nameEn": "Seated Calf Raise Machine",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [],
    "stabilizers": [],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Siéntate en la máquina de gemelos apoyando la parte delantera de los pies en la plataforma y los muslos bajo el acolchado.",
      "Quita la palanca de seguridad y desciende los talones todo lo posible sintiendo el estiramiento profundo del sóleo.",
      "Empuja sobre las puntas de los pies elevando los talones a la máxima altura.",
      "Pausa un segundo arriba y baja despacio manteniendo una cadencia estricta."
    ],
    "tips": [
      "Al tener las rodillas flexionadas a 90°, el gastrocnemio se inhibe y el sóleo asume prácticamente toda la carga."
    ],
    "breathingCue": "Exhala al elevar los talones; inhala en el descenso.",
    "alternatives": [
      "standing-calf-raise"
    ]
  },
  {
    "id": "tibialis-raise-bodyweight",
    "name": "Elevación de Tibial Anterior contra la Pared",
    "nameEn": "Wall Tibialis Raise",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs",
      "Quads"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Flexión/Extensión",
    "instructions": [
      "Apoya la espalda contra una pared lisa y adelanta los pies a una distancia de uno o dos pasos con piernas rectas.",
      "Manteniendo los talones pegados al suelo, eleva las puntas de los pies hacia las espinillas lo más alto posible.",
      "Aprieta la musculatura anterior de la espinilla en la cima durante un segundo.",
      "Baja las puntas de los pies rozando suavemente el suelo y repite de forma continua."
    ],
    "tips": [
      "Fundamental para proteger las rodillas, prevenir periostitis tibial y mejorar la dorsiflexión del tobillo."
    ],
    "breathingCue": "Exhala al subir las puntas de los pies; inhala al bajar al suelo.",
    "alternatives": [
      "standing-calf-raise"
    ]
  },
  {
    "id": "adductor-machine",
    "name": "Aductores en Máquina Sentado",
    "nameEn": "Seated Hip Adductor Machine",
    "primaryMuscle": "Adductors",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Frontal",
    "forceType": "Empuje",
    "instructions": [
      "Siéntate en la máquina de aducción ajustando las almohadillas por la parte interna de las rodillas.",
      "Abre las piernas a un rango cómodo donde sientas un estiramiento suave en la cara interna de los muslos.",
      "Junta las rodillas empujando hacia el centro contrayendo los aductores de forma controlada.",
      "Pausa un segundo en el cierre y abre las piernas despacio resistiendo el peso."
    ],
    "tips": [
      "Refuerza la estabilidad de la pelvis en sentadillas pesadas y cambios de dirección deportivos."
    ],
    "breathingCue": "Exhala al cerrar las piernas al centro; inhala al abrir.",
    "alternatives": [
      "abductor-machine"
    ]
  },
  {
    "id": "abductor-machine",
    "name": "Abductores en Máquina Sentado (Glúteo Medio)",
    "nameEn": "Seated Hip Abductor Machine",
    "primaryMuscle": "Abductors",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Frontal",
    "forceType": "Empuje",
    "instructions": [
      "Siéntate apoyando la espalda contra el respaldo y coloca la parte externa de las rodillas contra los rodillos.",
      "Empuja hacia afuera separando las piernas con fuerza del glúteo medio y abductores.",
      "Mantén la apertura máxima un segundo y regresa despacio hasta la posición inicial sin dejar caer las placas."
    ],
    "tips": [
      "Inclinarse levemente hacia adelante suele enfocar mejor las fibras superiores del glúteo."
    ],
    "breathingCue": "Exhala al separar las piernas hacia afuera; inhala al cerrar.",
    "alternatives": [
      "adductor-machine"
    ]
  },
  {
    "id": "diamond-pushup",
    "name": "Flexiones Diamante",
    "nameEn": "Diamond Push-Up",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Chest",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Adopta la postura inicial de flexiones diamante asegurando alineación pélvica y core tenso.",
      "Desciende el torso de forma controlada hasta el rango óptimo de estiramiento articular.",
      "Empuja con potencia contra el punto de apoyo extendiendo los brazos a la posición inicial."
    ],
    "tips": [
      "Mantén la retroversión pélvica activa para evitar el arqueo lumbar."
    ],
    "breathingCue": "Inhala en el descenso; exhala al empujar hacia la posición inicial.",
    "alternatives": [
      "push-up",
      "barbell-bench-press"
    ]
  },
  {
    "id": "wide-grip-pushup",
    "name": "Flexiones con Agarre Ancho",
    "nameEn": "Wide Grip Push-Up",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Adopta la postura inicial de flexiones con agarre ancho asegurando alineación pélvica y core tenso.",
      "Desciende el torso de forma controlada hasta el rango óptimo de estiramiento articular.",
      "Empuja con potencia contra el punto de apoyo extendiendo los brazos a la posición inicial."
    ],
    "tips": [
      "Mantén la retroversión pélvica activa para evitar el arqueo lumbar."
    ],
    "breathingCue": "Inhala en el descenso; exhala al empujar hacia la posición inicial.",
    "alternatives": [
      "push-up",
      "barbell-bench-press"
    ]
  },
  {
    "id": "decline-pushup",
    "name": "Flexiones Declinadas con Pies Elevados",
    "nameEn": "Decline Push-Up",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders",
      "Triceps"
    ],
    "stabilizers": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Adopta la postura inicial de flexiones declinadas con pies elevados asegurando alineación pélvica y core tenso.",
      "Desciende el torso de forma controlada hasta el rango óptimo de estiramiento articular.",
      "Empuja con potencia contra el punto de apoyo extendiendo los brazos a la posición inicial."
    ],
    "tips": [
      "Mantén la retroversión pélvica activa para evitar el arqueo lumbar."
    ],
    "breathingCue": "Inhala en el descenso; exhala al empujar hacia la posición inicial.",
    "alternatives": [
      "push-up",
      "barbell-bench-press"
    ]
  },
  {
    "id": "incline-pushup",
    "name": "Flexiones Inclinadas con Manos Elevadas",
    "nameEn": "Incline Push-Up",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps"
    ],
    "stabilizers": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Adopta la postura inicial de flexiones inclinadas con manos elevadas asegurando alineación pélvica y core tenso.",
      "Desciende el torso de forma controlada hasta el rango óptimo de estiramiento articular.",
      "Empuja con potencia contra el punto de apoyo extendiendo los brazos a la posición inicial."
    ],
    "tips": [
      "Mantén la retroversión pélvica activa para evitar el arqueo lumbar."
    ],
    "breathingCue": "Inhala en el descenso; exhala al empujar hacia la posición inicial.",
    "alternatives": [
      "push-up",
      "barbell-bench-press"
    ]
  },
  {
    "id": "archer-pushup",
    "name": "Flexiones de Arquero",
    "nameEn": "Archer Push-Up",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Adopta la postura inicial de flexiones de arquero asegurando alineación pélvica y core tenso.",
      "Desciende el torso de forma controlada hasta el rango óptimo de estiramiento articular.",
      "Empuja con potencia contra el punto de apoyo extendiendo los brazos a la posición inicial."
    ],
    "tips": [
      "Mantén la retroversión pélvica activa para evitar el arqueo lumbar."
    ],
    "breathingCue": "Inhala en el descenso; exhala al empujar hacia la posición inicial.",
    "alternatives": [
      "push-up",
      "barbell-bench-press"
    ]
  },
  {
    "id": "pike-pushup",
    "name": "Flexiones en Pica",
    "nameEn": "Pike Push-Up",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Triceps",
      "Traps"
    ],
    "stabilizers": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Adopta la postura inicial de flexiones en pica asegurando alineación pélvica y core tenso.",
      "Desciende el torso de forma controlada hasta el rango óptimo de estiramiento articular.",
      "Empuja con potencia contra el punto de apoyo extendiendo los brazos a la posición inicial."
    ],
    "tips": [
      "Mantén la retroversión pélvica activa para evitar el arqueo lumbar."
    ],
    "breathingCue": "Inhala en el descenso; exhala al empujar hacia la posición inicial.",
    "alternatives": [
      "push-up",
      "barbell-bench-press"
    ]
  },
  {
    "id": "hindu-pushup",
    "name": "Flexiones Hindúes (Dand)",
    "nameEn": "Hindu Push-Up",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Chest",
      "Triceps"
    ],
    "stabilizers": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Multi-plano",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Adopta la postura inicial de flexiones hindúes (dand) asegurando alineación pélvica y core tenso.",
      "Desciende el torso de forma controlada hasta el rango óptimo de estiramiento articular.",
      "Empuja con potencia contra el punto de apoyo extendiendo los brazos a la posición inicial."
    ],
    "tips": [
      "Mantén la retroversión pélvica activa para evitar el arqueo lumbar."
    ],
    "breathingCue": "Inhala en el descenso; exhala al empujar hacia la posición inicial.",
    "alternatives": [
      "push-up",
      "barbell-bench-press"
    ]
  },
  {
    "id": "spiderman-pushup",
    "name": "Flexiones Spiderman",
    "nameEn": "Spiderman Push-Up",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Abs",
      "Triceps"
    ],
    "stabilizers": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Adopta la postura inicial de flexiones spiderman asegurando alineación pélvica y core tenso.",
      "Desciende el torso de forma controlada hasta el rango óptimo de estiramiento articular.",
      "Empuja con potencia contra el punto de apoyo extendiendo los brazos a la posición inicial."
    ],
    "tips": [
      "Mantén la retroversión pélvica activa para evitar el arqueo lumbar."
    ],
    "breathingCue": "Inhala en el descenso; exhala al empujar hacia la posición inicial.",
    "alternatives": [
      "push-up",
      "barbell-bench-press"
    ]
  },
  {
    "id": "clap-pushup",
    "name": "Flexiones con Palmada Pliométricas",
    "nameEn": "Clap Push-Up",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps"
    ],
    "stabilizers": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Adopta la postura inicial de flexiones con palmada pliométricas asegurando alineación pélvica y core tenso.",
      "Desciende el torso de forma controlada hasta el rango óptimo de estiramiento articular.",
      "Empuja con potencia contra el punto de apoyo extendiendo los brazos a la posición inicial."
    ],
    "tips": [
      "Mantén la retroversión pélvica activa para evitar el arqueo lumbar."
    ],
    "breathingCue": "Inhala en el descenso; exhala al empujar hacia la posición inicial.",
    "alternatives": [
      "push-up",
      "barbell-bench-press"
    ]
  },
  {
    "id": "ring-pushup",
    "name": "Flexiones en Anillas de Gimnasia",
    "nameEn": "Gymnastic Ring Push-Up",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Rings",
    "difficulty": "Intermedio",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Adopta la postura inicial de flexiones en anillas de gimnasia asegurando alineación pélvica y core tenso.",
      "Desciende el torso de forma controlada hasta el rango óptimo de estiramiento articular.",
      "Empuja con potencia contra el punto de apoyo extendiendo los brazos a la posición inicial."
    ],
    "tips": [
      "Mantén la retroversión pélvica activa para evitar el arqueo lumbar."
    ],
    "breathingCue": "Inhala en el descenso; exhala al empujar hacia la posición inicial.",
    "alternatives": [
      "push-up",
      "barbell-bench-press"
    ]
  },
  {
    "id": "neutral-grip-pullup",
    "name": "Dominadas con Agarre Neutro",
    "nameEn": "Neutral Grip Pull-Up",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Back"
    ],
    "stabilizers": [
      "Abs",
      "Traps"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Frontal",
    "forceType": "Tirón",
    "instructions": [
      "Cuélgate del soporte con el agarre especificado para dominadas con agarre neutro con brazos rectos.",
      "Activa las escápulas y tracciona con los dorsales impulsando el cuerpo hacia el agarre.",
      "Baja con descenso suave y controlado hasta extender los codos por completo."
    ],
    "tips": [
      "Inicia siempre el movimiento deprimiendo las escápulas antes de doblar los codos."
    ],
    "breathingCue": "Exhala durante la tracción concéntrica; inhala en la bajada.",
    "alternatives": [
      "pull-up",
      "lat-pulldown"
    ]
  },
  {
    "id": "wide-grip-pullup",
    "name": "Dominadas Pronas con Agarre Ancho",
    "nameEn": "Wide Grip Pull-Up",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Back",
      "Forearms"
    ],
    "stabilizers": [
      "Abs",
      "Traps"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Frontal",
    "forceType": "Tirón",
    "instructions": [
      "Cuélgate del soporte con el agarre especificado para dominadas pronas con agarre ancho con brazos rectos.",
      "Activa las escápulas y tracciona con los dorsales impulsando el cuerpo hacia el agarre.",
      "Baja con descenso suave y controlado hasta extender los codos por completo."
    ],
    "tips": [
      "Inicia siempre el movimiento deprimiendo las escápulas antes de doblar los codos."
    ],
    "breathingCue": "Exhala durante la tracción concéntrica; inhala en la bajada.",
    "alternatives": [
      "pull-up",
      "lat-pulldown"
    ]
  },
  {
    "id": "archer-pullup",
    "name": "Dominadas de Arquero",
    "nameEn": "Archer Pull-Up",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Back"
    ],
    "stabilizers": [
      "Abs",
      "Traps"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Frontal",
    "forceType": "Tirón",
    "instructions": [
      "Cuélgate del soporte con el agarre especificado para dominadas de arquero con brazos rectos.",
      "Activa las escápulas y tracciona con los dorsales impulsando el cuerpo hacia el agarre.",
      "Baja con descenso suave y controlado hasta extender los codos por completo."
    ],
    "tips": [
      "Inicia siempre el movimiento deprimiendo las escápulas antes de doblar los codos."
    ],
    "breathingCue": "Exhala durante la tracción concéntrica; inhala en la bajada.",
    "alternatives": [
      "pull-up",
      "lat-pulldown"
    ]
  },
  {
    "id": "l-sit-pullup",
    "name": "Dominadas en L-Sit",
    "nameEn": "L-Sit Pull-Up",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Abs",
      "HipFlexors",
      "Biceps"
    ],
    "stabilizers": [
      "Abs",
      "Traps"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Frontal",
    "forceType": "Tirón",
    "instructions": [
      "Cuélgate del soporte con el agarre especificado para dominadas en l-sit con brazos rectos.",
      "Activa las escápulas y tracciona con los dorsales impulsando el cuerpo hacia el agarre.",
      "Baja con descenso suave y controlado hasta extender los codos por completo."
    ],
    "tips": [
      "Inicia siempre el movimiento deprimiendo las escápulas antes de doblar los codos."
    ],
    "breathingCue": "Exhala durante la tracción concéntrica; inhala en la bajada.",
    "alternatives": [
      "pull-up",
      "lat-pulldown"
    ]
  },
  {
    "id": "ring-pullup",
    "name": "Dominadas en Anillas",
    "nameEn": "Ring Pull-Up",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Back"
    ],
    "stabilizers": [
      "Abs",
      "Traps"
    ],
    "equipment": "Rings",
    "difficulty": "Intermedio",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Frontal",
    "forceType": "Tirón",
    "instructions": [
      "Cuélgate del soporte con el agarre especificado para dominadas en anillas con brazos rectos.",
      "Activa las escápulas y tracciona con los dorsales impulsando el cuerpo hacia el agarre.",
      "Baja con descenso suave y controlado hasta extender los codos por completo."
    ],
    "tips": [
      "Inicia siempre el movimiento deprimiendo las escápulas antes de doblar los codos."
    ],
    "breathingCue": "Exhala durante la tracción concéntrica; inhala en la bajada.",
    "alternatives": [
      "pull-up",
      "lat-pulldown"
    ]
  },
  {
    "id": "scapular-pullup",
    "name": "Dominadas Escapulares de Activación",
    "nameEn": "Scapular Pull-Up",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Traps"
    ],
    "stabilizers": [
      "Abs",
      "Traps"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Frontal",
    "forceType": "Tirón",
    "instructions": [
      "Cuélgate del soporte con el agarre especificado para dominadas escapulares de activación con brazos rectos.",
      "Activa las escápulas y tracciona con los dorsales impulsando el cuerpo hacia el agarre.",
      "Baja con descenso suave y controlado hasta extender los codos por completo."
    ],
    "tips": [
      "Inicia siempre el movimiento deprimiendo las escápulas antes de doblar los codos."
    ],
    "breathingCue": "Exhala durante la tracción concéntrica; inhala en la bajada.",
    "alternatives": [
      "pull-up",
      "lat-pulldown"
    ]
  },
  {
    "id": "chest-to-bar-pullup",
    "name": "Dominadas Pecho a la Barra",
    "nameEn": "Chest-to-Bar Pull-Up",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Back",
      "Biceps"
    ],
    "stabilizers": [
      "Abs",
      "Traps"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Frontal",
    "forceType": "Tirón",
    "instructions": [
      "Cuélgate del soporte con el agarre especificado para dominadas pecho a la barra con brazos rectos.",
      "Activa las escápulas y tracciona con los dorsales impulsando el cuerpo hacia el agarre.",
      "Baja con descenso suave y controlado hasta extender los codos por completo."
    ],
    "tips": [
      "Inicia siempre el movimiento deprimiendo las escápulas antes de doblar los codos."
    ],
    "breathingCue": "Exhala durante la tracción concéntrica; inhala en la bajada.",
    "alternatives": [
      "pull-up",
      "lat-pulldown"
    ]
  },
  {
    "id": "muscle-up-bar",
    "name": "Muscle-Up en Barra",
    "nameEn": "Bar Muscle-Up",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Chest",
      "Triceps",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs",
      "Traps"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Frontal",
    "forceType": "Tirón",
    "instructions": [
      "Cuélgate del soporte con el agarre especificado para muscle-up en barra con brazos rectos.",
      "Activa las escápulas y tracciona con los dorsales impulsando el cuerpo hacia el agarre.",
      "Baja con descenso suave y controlado hasta extender los codos por completo."
    ],
    "tips": [
      "Inicia siempre el movimiento deprimiendo las escápulas antes de doblar los codos."
    ],
    "breathingCue": "Exhala durante la tracción concéntrica; inhala en la bajada.",
    "alternatives": [
      "pull-up",
      "lat-pulldown"
    ]
  },
  {
    "id": "muscle-up-rings",
    "name": "Muscle-Up en Anillas",
    "nameEn": "Ring Muscle-Up",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Chest",
      "Triceps",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs",
      "Traps"
    ],
    "equipment": "Rings",
    "difficulty": "Avanzado",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Frontal",
    "forceType": "Tirón",
    "instructions": [
      "Cuélgate del soporte con el agarre especificado para muscle-up en anillas con brazos rectos.",
      "Activa las escápulas y tracciona con los dorsales impulsando el cuerpo hacia el agarre.",
      "Baja con descenso suave y controlado hasta extender los codos por completo."
    ],
    "tips": [
      "Inicia siempre el movimiento deprimiendo las escápulas antes de doblar los codos."
    ],
    "breathingCue": "Exhala durante la tracción concéntrica; inhala en la bajada.",
    "alternatives": [
      "pull-up",
      "lat-pulldown"
    ]
  },
  {
    "id": "parallel-bar-dips",
    "name": "Fondos en Barras Paralelas",
    "nameEn": "Parallel Bar Dips",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Sitúate en posición de partida para fondos en barras paralelas equilibrando el cuerpo.",
      "Ejecuta el rango de recorrido completo manteniendo la tensión continua en chest.",
      "Regresa a la postura inicial con control técnico riguroso."
    ],
    "tips": [
      "Prioriza la cadencia controlada sobre la cantidad de repeticiones."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala en la fase de retorno.",
    "alternatives": [
      "push-up"
    ]
  },
  {
    "id": "ring-dips",
    "name": "Fondos en Anillas",
    "nameEn": "Ring Dips",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Rings",
    "difficulty": "Avanzado",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Sitúate en posición de partida para fondos en anillas equilibrando el cuerpo.",
      "Ejecuta el rango de recorrido completo manteniendo la tensión continua en chest.",
      "Regresa a la postura inicial con control técnico riguroso."
    ],
    "tips": [
      "Prioriza la cadencia controlada sobre la cantidad de repeticiones."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala en la fase de retorno.",
    "alternatives": [
      "push-up"
    ]
  },
  {
    "id": "pistol-squat",
    "name": "Sentadilla Pistola a Una Pierna (Pistol Squat)",
    "nameEn": "Pistol Squat",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Sitúate en posición de partida para sentadilla pistola a una pierna (pistol squat) equilibrando el cuerpo.",
      "Ejecuta el rango de recorrido completo manteniendo la tensión continua en quads.",
      "Regresa a la postura inicial con control técnico riguroso."
    ],
    "tips": [
      "Prioriza la cadencia controlada sobre la cantidad de repeticiones."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala en la fase de retorno.",
    "alternatives": [
      "push-up"
    ]
  },
  {
    "id": "shrimp-squat",
    "name": "Sentadilla Camarón (Shrimp Squat)",
    "nameEn": "Shrimp Squat",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Sitúate en posición de partida para sentadilla camarón (shrimp squat) equilibrando el cuerpo.",
      "Ejecuta el rango de recorrido completo manteniendo la tensión continua en quads.",
      "Regresa a la postura inicial con control técnico riguroso."
    ],
    "tips": [
      "Prioriza la cadencia controlada sobre la cantidad de repeticiones."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala en la fase de retorno.",
    "alternatives": [
      "push-up"
    ]
  },
  {
    "id": "sissy-squat-bodyweight",
    "name": "Sentadilla Sissy con Peso Corporal",
    "nameEn": "Bodyweight Sissy Squat",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Sitúate en posición de partida para sentadilla sissy con peso corporal equilibrando el cuerpo.",
      "Ejecuta el rango de recorrido completo manteniendo la tensión continua en quads.",
      "Regresa a la postura inicial con control técnico riguroso."
    ],
    "tips": [
      "Prioriza la cadencia controlada sobre la cantidad de repeticiones."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala en la fase de retorno.",
    "alternatives": [
      "push-up"
    ]
  },
  {
    "id": "nordic-hamstring-curl",
    "name": "Curl Nórdico de Isquiotibiales",
    "nameEn": "Nordic Hamstring Curl",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Sitúate en posición de partida para curl nórdico de isquiotibiales equilibrando el cuerpo.",
      "Ejecuta el rango de recorrido completo manteniendo la tensión continua en hamstrings.",
      "Regresa a la postura inicial con control técnico riguroso."
    ],
    "tips": [
      "Prioriza la cadencia controlada sobre la cantidad de repeticiones."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala en la fase de retorno.",
    "alternatives": [
      "push-up"
    ]
  },
  {
    "id": "reverse-nordic-curl",
    "name": "Curl Nórdico Inverso para Cuádriceps",
    "nameEn": "Reverse Nordic Curl",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "HipFlexors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Sitúate en posición de partida para curl nórdico inverso para cuádriceps equilibrando el cuerpo.",
      "Ejecuta el rango de recorrido completo manteniendo la tensión continua en quads.",
      "Regresa a la postura inicial con control técnico riguroso."
    ],
    "tips": [
      "Prioriza la cadencia controlada sobre la cantidad de repeticiones."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala en la fase de retorno.",
    "alternatives": [
      "push-up"
    ]
  },
  {
    "id": "single-leg-glute-bridge",
    "name": "Puente de Glúteos a Una Pierna",
    "nameEn": "Single-Leg Glute Bridge",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Sitúate en posición de partida para puente de glúteos a una pierna equilibrando el cuerpo.",
      "Ejecuta el rango de recorrido completo manteniendo la tensión continua en glutes.",
      "Regresa a la postura inicial con control técnico riguroso."
    ],
    "tips": [
      "Prioriza la cadencia controlada sobre la cantidad de repeticiones."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala en la fase de retorno.",
    "alternatives": [
      "push-up"
    ]
  },
  {
    "id": "calf-raise-single-leg-bodyweight",
    "name": "Elevación de Talón Unilateral en Escalón",
    "nameEn": "Single-Leg Calf Raise on Step",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Sitúate en posición de partida para elevación de talón unilateral en escalón equilibrando el cuerpo.",
      "Ejecuta el rango de recorrido completo manteniendo la tensión continua en calves.",
      "Regresa a la postura inicial con control técnico riguroso."
    ],
    "tips": [
      "Prioriza la cadencia controlada sobre la cantidad de repeticiones."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala en la fase de retorno.",
    "alternatives": [
      "push-up"
    ]
  },
  {
    "id": "l-sit-floor",
    "name": "L-Sit en el Suelo",
    "nameEn": "Floor L-Sit",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "HipFlexors",
      "Triceps"
    ],
    "stabilizers": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Adopta la postura isométrica de l-sit en el suelo bloqueando articulaciones clave.",
      "Genera tensión máxima en abs y respira de forma corta y controlada.",
      "Sostén la alineación corporal estricta durante el tiempo programado sin descompensar."
    ],
    "tips": [
      "La calidad postural y la protracción escapular son críticas en las figuras gimnásticas."
    ],
    "breathingCue": "Respiración diafragmática superficial y constante sin despresurizar el abdomen.",
    "alternatives": []
  },
  {
    "id": "l-sit-parallettes",
    "name": "L-Sit en Paralelas Bajas",
    "nameEn": "Parallettes L-Sit",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "HipFlexors",
      "Triceps"
    ],
    "stabilizers": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Adopta la postura isométrica de l-sit en paralelas bajas bloqueando articulaciones clave.",
      "Genera tensión máxima en abs y respira de forma corta y controlada.",
      "Sostén la alineación corporal estricta durante el tiempo programado sin descompensar."
    ],
    "tips": [
      "La calidad postural y la protracción escapular son críticas en las figuras gimnásticas."
    ],
    "breathingCue": "Respiración diafragmática superficial y constante sin despresurizar el abdomen.",
    "alternatives": []
  },
  {
    "id": "hollow-body-hold",
    "name": "Posición Hueca (Hollow Body Hold)",
    "nameEn": "Hollow Body Hold",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Quads",
      "HipFlexors"
    ],
    "stabilizers": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Adopta la postura isométrica de posición hueca (hollow body hold) bloqueando articulaciones clave.",
      "Genera tensión máxima en abs y respira de forma corta y controlada.",
      "Sostén la alineación corporal estricta durante el tiempo programado sin descompensar."
    ],
    "tips": [
      "La calidad postural y la protracción escapular son críticas en las figuras gimnásticas."
    ],
    "breathingCue": "Respiración diafragmática superficial y constante sin despresurizar el abdomen.",
    "alternatives": []
  },
  {
    "id": "arch-body-hold-superman",
    "name": "Posición de Arco / Superman Isométrico",
    "nameEn": "Superman Arch Hold",
    "primaryMuscle": "LowerBack",
    "secondaryMuscles": [
      "Glutes",
      "Traps"
    ],
    "stabilizers": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Adopta la postura isométrica de posición de arco / superman isométrico bloqueando articulaciones clave.",
      "Genera tensión máxima en lowerback y respira de forma corta y controlada.",
      "Sostén la alineación corporal estricta durante el tiempo programado sin descompensar."
    ],
    "tips": [
      "La calidad postural y la protracción escapular son críticas en las figuras gimnásticas."
    ],
    "breathingCue": "Respiración diafragmática superficial y constante sin despresurizar el abdomen.",
    "alternatives": []
  },
  {
    "id": "planche-lean",
    "name": "Inclinación de Plancha (Planche Lean)",
    "nameEn": "Planche Lean",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Chest",
      "Abs",
      "Serratus"
    ],
    "stabilizers": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Adopta la postura isométrica de inclinación de plancha (planche lean) bloqueando articulaciones clave.",
      "Genera tensión máxima en shoulders y respira de forma corta y controlada.",
      "Sostén la alineación corporal estricta durante el tiempo programado sin descompensar."
    ],
    "tips": [
      "La calidad postural y la protracción escapular son críticas en las figuras gimnásticas."
    ],
    "breathingCue": "Respiración diafragmática superficial y constante sin despresurizar el abdomen.",
    "alternatives": []
  },
  {
    "id": "tuck-planche",
    "name": "Tuck Planche en Paralelas",
    "nameEn": "Tuck Planche",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Chest",
      "Triceps",
      "Abs"
    ],
    "stabilizers": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Adopta la postura isométrica de tuck planche en paralelas bloqueando articulaciones clave.",
      "Genera tensión máxima en shoulders y respira de forma corta y controlada.",
      "Sostén la alineación corporal estricta durante el tiempo programado sin descompensar."
    ],
    "tips": [
      "La calidad postural y la protracción escapular son críticas en las figuras gimnásticas."
    ],
    "breathingCue": "Respiración diafragmática superficial y constante sin despresurizar el abdomen.",
    "alternatives": []
  },
  {
    "id": "front-lever-tuck",
    "name": "Tuck Front Lever en Barra",
    "nameEn": "Tuck Front Lever",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Abs",
      "Back"
    ],
    "stabilizers": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Adopta la postura isométrica de tuck front lever en barra bloqueando articulaciones clave.",
      "Genera tensión máxima en lats y respira de forma corta y controlada.",
      "Sostén la alineación corporal estricta durante el tiempo programado sin descompensar."
    ],
    "tips": [
      "La calidad postural y la protracción escapular son críticas en las figuras gimnásticas."
    ],
    "breathingCue": "Respiración diafragmática superficial y constante sin despresurizar el abdomen.",
    "alternatives": []
  },
  {
    "id": "back-lever-tuck",
    "name": "Tuck Back Lever en Barra",
    "nameEn": "Tuck Back Lever",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Shoulders",
      "LowerBack"
    ],
    "stabilizers": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Adopta la postura isométrica de tuck back lever en barra bloqueando articulaciones clave.",
      "Genera tensión máxima en back y respira de forma corta y controlada.",
      "Sostén la alineación corporal estricta durante el tiempo programado sin descompensar."
    ],
    "tips": [
      "La calidad postural y la protracción escapular son críticas en las figuras gimnásticas."
    ],
    "breathingCue": "Respiración diafragmática superficial y constante sin despresurizar el abdomen.",
    "alternatives": []
  },
  {
    "id": "handstand-wall-hold",
    "name": "Pino contra la Pared Isométrico",
    "nameEn": "Wall Handstand Hold",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Triceps",
      "Traps",
      "Abs"
    ],
    "stabilizers": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Adopta la postura isométrica de pino contra la pared isométrico bloqueando articulaciones clave.",
      "Genera tensión máxima en shoulders y respira de forma corta y controlada.",
      "Sostén la alineación corporal estricta durante el tiempo programado sin descompensar."
    ],
    "tips": [
      "La calidad postural y la protracción escapular son críticas en las figuras gimnásticas."
    ],
    "breathingCue": "Respiración diafragmática superficial y constante sin despresurizar el abdomen.",
    "alternatives": []
  },
  {
    "id": "freestanding-handstand",
    "name": "Pino Libre (Handstand)",
    "nameEn": "Freestanding Handstand",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Traps",
      "Forearms",
      "Abs"
    ],
    "stabilizers": [
      "Abs",
      "Glutes"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Adopta la postura isométrica de pino libre (handstand) bloqueando articulaciones clave.",
      "Genera tensión máxima en shoulders y respira de forma corta y controlada.",
      "Sostén la alineación corporal estricta durante el tiempo programado sin descompensar."
    ],
    "tips": [
      "La calidad postural y la protracción escapular son críticas en las figuras gimnásticas."
    ],
    "breathingCue": "Respiración diafragmática superficial y constante sin despresurizar el abdomen.",
    "alternatives": []
  },
  {
    "id": "hanging-knee-raise",
    "name": "Elevación de Rodillas Colgado en Barra",
    "nameEn": "Hanging Knee Raise",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "HipFlexors",
      "Forearms"
    ],
    "stabilizers": [
      "Forearms",
      "LowerBack"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Inicia en la posición base de elevación de rodillas colgado en barra asegurando el anclaje firme.",
      "Ejecuta el desplazamiento o flexión activa contrayendo con intención el músculo principal.",
      "Retorna bajo control excéntrico sin rebotes articulares."
    ],
    "tips": [
      "Evita el balanceo por inercia para aislar el trabajo en la musculatura diana."
    ],
    "breathingCue": "Exhala en el esfuerzo de cierre; inhala en la fase de extensión.",
    "alternatives": []
  },
  {
    "id": "toes-to-bar",
    "name": "Pies a la Barra (Toes to Bar)",
    "nameEn": "Toes to Bar",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Lats",
      "HipFlexors",
      "Forearms"
    ],
    "stabilizers": [
      "Forearms",
      "LowerBack"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Inicia en la posición base de pies a la barra (toes to bar) asegurando el anclaje firme.",
      "Ejecuta el desplazamiento o flexión activa contrayendo con intención el músculo principal.",
      "Retorna bajo control excéntrico sin rebotes articulares."
    ],
    "tips": [
      "Evita el balanceo por inercia para aislar el trabajo en la musculatura diana."
    ],
    "breathingCue": "Exhala en el esfuerzo de cierre; inhala en la fase de extensión.",
    "alternatives": []
  },
  {
    "id": "windshield-wipers-hanging",
    "name": "Limpiaparabrisas Colgado en Barra",
    "nameEn": "Hanging Windshield Wipers",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Lats",
      "Forearms"
    ],
    "stabilizers": [
      "Forearms",
      "LowerBack"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Inicia en la posición base de limpiaparabrisas colgado en barra asegurando el anclaje firme.",
      "Ejecuta el desplazamiento o flexión activa contrayendo con intención el músculo principal.",
      "Retorna bajo control excéntrico sin rebotes articulares."
    ],
    "tips": [
      "Evita el balanceo por inercia para aislar el trabajo en la musculatura diana."
    ],
    "breathingCue": "Exhala en el esfuerzo de cierre; inhala en la fase de extensión.",
    "alternatives": []
  },
  {
    "id": "dragon-flag",
    "name": "Dragon Flag (Bandera de Dragón)",
    "nameEn": "Dragon Flag",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Lats",
      "Glutes"
    ],
    "stabilizers": [
      "Forearms",
      "LowerBack"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Inicia en la posición base de dragon flag (bandera de dragón) asegurando el anclaje firme.",
      "Ejecuta el desplazamiento o flexión activa contrayendo con intención el músculo principal.",
      "Retorna bajo control excéntrico sin rebotes articulares."
    ],
    "tips": [
      "Evita el balanceo por inercia para aislar el trabajo en la musculatura diana."
    ],
    "breathingCue": "Exhala en el esfuerzo de cierre; inhala en la fase de extensión.",
    "alternatives": []
  },
  {
    "id": "human-flag",
    "name": "Bandera Humana (Human Flag)",
    "nameEn": "Human Flag",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders",
      "Lats"
    ],
    "stabilizers": [
      "Forearms",
      "LowerBack"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Inicia en la posición base de bandera humana (human flag) asegurando el anclaje firme.",
      "Ejecuta el desplazamiento o flexión activa contrayendo con intención el músculo principal.",
      "Retorna bajo control excéntrico sin rebotes articulares."
    ],
    "tips": [
      "Evita el balanceo por inercia para aislar el trabajo en la musculatura diana."
    ],
    "breathingCue": "Exhala en el esfuerzo de cierre; inhala en la fase de extensión.",
    "alternatives": []
  },
  {
    "id": "side-plank-hip-abduction",
    "name": "Plancha Lateral con Elevación de Pierna",
    "nameEn": "Side Plank with Hip Abduction",
    "primaryMuscle": "Abductors",
    "secondaryMuscles": [
      "Abs",
      "Glutes"
    ],
    "stabilizers": [
      "Forearms",
      "LowerBack"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Inicia en la posición base de plancha lateral con elevación de pierna asegurando el anclaje firme.",
      "Ejecuta el desplazamiento o flexión activa contrayendo con intención el músculo principal.",
      "Retorna bajo control excéntrico sin rebotes articulares."
    ],
    "tips": [
      "Evita el balanceo por inercia para aislar el trabajo en la musculatura diana."
    ],
    "breathingCue": "Exhala en el esfuerzo de cierre; inhala en la fase de extensión.",
    "alternatives": []
  },
  {
    "id": "copenhagen-plank",
    "name": "Plancha Copenhague para Aductores",
    "nameEn": "Copenhagen Adductor Plank",
    "primaryMuscle": "Adductors",
    "secondaryMuscles": [
      "Abs"
    ],
    "stabilizers": [
      "Forearms",
      "LowerBack"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Calistenia",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Inicia en la posición base de plancha copenhague para aductores asegurando el anclaje firme.",
      "Ejecuta el desplazamiento o flexión activa contrayendo con intención el músculo principal.",
      "Retorna bajo control excéntrico sin rebotes articulares."
    ],
    "tips": [
      "Evita el balanceo por inercia para aislar el trabajo en la musculatura diana."
    ],
    "breathingCue": "Exhala en el esfuerzo de cierre; inhala en la fase de extensión.",
    "alternatives": []
  },
  {
    "id": "bear-crawl",
    "name": "Paso del Oso (Bear Crawl)",
    "nameEn": "Bear Crawl",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders",
      "Quads"
    ],
    "stabilizers": [
      "Forearms",
      "LowerBack"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Inicia en la posición base de paso del oso (bear crawl) asegurando el anclaje firme.",
      "Ejecuta el desplazamiento o flexión activa contrayendo con intención el músculo principal.",
      "Retorna bajo control excéntrico sin rebotes articulares."
    ],
    "tips": [
      "Evita el balanceo por inercia para aislar el trabajo en la musculatura diana."
    ],
    "breathingCue": "Exhala en el esfuerzo de cierre; inhala en la fase de extensión.",
    "alternatives": []
  },
  {
    "id": "crab-walk",
    "name": "Caminata de Cangrejo (Crab Walk)",
    "nameEn": "Crab Walk",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Triceps",
      "Shoulders"
    ],
    "stabilizers": [
      "Forearms",
      "LowerBack"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Inicia en la posición base de caminata de cangrejo (crab walk) asegurando el anclaje firme.",
      "Ejecuta el desplazamiento o flexión activa contrayendo con intención el músculo principal.",
      "Retorna bajo control excéntrico sin rebotes articulares."
    ],
    "tips": [
      "Evita el balanceo por inercia para aislar el trabajo en la musculatura diana."
    ],
    "breathingCue": "Exhala en el esfuerzo de cierre; inhala en la fase de extensión.",
    "alternatives": []
  },
  {
    "id": "cat-cow-stretch",
    "name": "Gato-Camello (Cat-Cow)",
    "nameEn": "Cat-Cow Mobility Stretch",
    "primaryMuscle": "LowerBack",
    "secondaryMuscles": [
      "Back",
      "Abs"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de gato-camello (cat-cow) sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "thoracic-spine-rotations-quadruped",
    "name": "Rotación Torácica en Cuadrupedia",
    "nameEn": "Quadruped Thoracic Rotation",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de rotación torácica en cuadrupedia sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "thread-the-needle",
    "name": "Enhebrar la Aguja (Thread the Needle)",
    "nameEn": "Thread the Needle Stretch",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Shoulders",
      "LowerBack"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de enhebrar la aguja (thread the needle) sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "hip-90-90-mobility",
    "name": "Movilidad de Cadera 90/90",
    "nameEn": "90/90 Hip Mobility Flow",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "HipFlexors",
      "Adductors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de movilidad de cadera 90/90 sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "hip-90-90-transitions",
    "name": "Transiciones de Cadera 90/90 sin Manos",
    "nameEn": "Hands-Free 90/90 Hip Switches",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "HipFlexors",
      "Adductors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de transiciones de cadera 90/90 sin manos sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "frog-stretch-mobility",
    "name": "Postura de la Rana (Frog Stretch)",
    "nameEn": "Frog Mobility Stretch",
    "primaryMuscle": "Adductors",
    "secondaryMuscles": [
      "HipFlexors",
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de postura de la rana (frog stretch) sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "ankle-dorsiflexion-wall-drill",
    "name": "Movilidad de Dorsiflexión de Tobillo contra Pared",
    "nameEn": "Knee-to-Wall Ankle Mobilization",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de movilidad de dorsiflexión de tobillo contra pared sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "shoulder-dislocations-band",
    "name": "Dislocaciones de Hombro con Banda o Pica",
    "nameEn": "Band Shoulder Dislocates",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Chest",
      "Traps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Band",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de dislocaciones de hombro con banda o pica sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "scapular-wall-slides",
    "name": "Deslizamientos Escapulares en Pared (Wall Slides)",
    "nameEn": "Scapular Wall Slides",
    "primaryMuscle": "Traps",
    "secondaryMuscles": [
      "Shoulders",
      "Serratus"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de deslizamientos escapulares en pared (wall slides) sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "deep-squat-prying",
    "name": "Apertura de Cadera en Sentadilla Profunda",
    "nameEn": "Deep Squat Pry and Hold",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Adductors",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de apertura de cadera en sentadilla profunda sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "spiderman-stretch-with-reach",
    "name": "Estiramiento Spiderman con Apertura Torácica",
    "nameEn": "Spiderman Stretch with Overhead Reach",
    "primaryMuscle": "HipFlexors",
    "secondaryMuscles": [
      "Back",
      "Adductors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de estiramiento spiderman con apertura torácica sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "couch-stretch-hip-flexor",
    "name": "Estiramiento del Sofá para Flexores de Cadera",
    "nameEn": "Couch Stretch for Hip Flexors",
    "primaryMuscle": "HipFlexors",
    "secondaryMuscles": [
      "Quads"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Estiramiento",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de estiramiento del sofá para flexores de cadera sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "pigeon-pose-glute",
    "name": "Postura de la Paloma para Glúteo y Piramidal",
    "nameEn": "Pigeon Pose for Glutes",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "LowerBack"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Estiramiento",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de postura de la paloma para glúteo y piramidal sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "childs-pose-lat-reach",
    "name": "Postura del Niño con Inclinación Lateral",
    "nameEn": "Extended Child’s Pose with Lat Reach",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "LowerBack",
      "Back"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Estiramiento",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de postura del niño con inclinación lateral sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "puppy-dog-thoracic-stretch",
    "name": "Postura del Cachorro para Extensión Torácica",
    "nameEn": "Puppy Dog Thoracic Extension Stretch",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Shoulders",
      "Chest"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Estiramiento",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de postura del cachorro para extensión torácica sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "wrist-mobility-circles-quadruped",
    "name": "Movilidad Articular de Muñecas en Cuadrupedia",
    "nameEn": "Quadruped Wrist Mobility Sequence",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de movilidad articular de muñecas en cuadrupedia sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "half-kneeling-ankle-mobility-band",
    "name": "Movilidad de Tobillo Asistida con Banda Elástica",
    "nameEn": "Band-Distracted Ankle Mobilization",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Band",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de movilidad de tobillo asistida con banda elástica sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "windmills-kettlebell-mobility",
    "name": "Molino con Pesa Rusa (Windmill de Movilidad)",
    "nameEn": "Kettlebell Windmill",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Shoulders",
      "Abs",
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Intermedio",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de molino con pesa rusa (windmill de movilidad) sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "overhead-squat-dowel-mobility",
    "name": "Sentadilla de Arrancada con Pica de Madera",
    "nameEn": "Dowel Overhead Squat Mobility Assessment",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Back",
      "Quads",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de sentadilla de arrancada con pica de madera sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "seated-straddle-stretch",
    "name": "Apertura Sentada en Straddle",
    "nameEn": "Seated Straddle Pancake Stretch",
    "primaryMuscle": "Adductors",
    "secondaryMuscles": [
      "Hamstrings",
      "LowerBack"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Estiramiento",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de apertura sentada en straddle sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "standing-quad-reach-stretch",
    "name": "Estiramiento de Cuádriceps de Pie con Elevación",
    "nameEn": "Standing Quadriceps and Psoas Stretch",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "HipFlexors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Estiramiento",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de estiramiento de cuádriceps de pie con elevación sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "doorway-pec-stretch",
    "name": "Estiramiento Pectoral en Marco de Puerta",
    "nameEn": "Doorway Chest and Biceps Stretch",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders",
      "Biceps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Estiramiento",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de estiramiento pectoral en marco de puerta sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "biceps-wall-stretch",
    "name": "Estiramiento de Bíceps contra la Pared",
    "nameEn": "Wall Biceps and Anterior Shoulder Stretch",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Estiramiento",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de estiramiento de bíceps contra la pared sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "triceps-overhead-stretch-towel",
    "name": "Estiramiento de Tríceps sobre Cabeza con Toalla",
    "nameEn": "Overhead Triceps and Lat Stretch",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Lats"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Estiramiento",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de estiramiento de tríceps sobre cabeza con toalla sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "seated-spinal-twist",
    "name": "Torsión Espinal Sentado",
    "nameEn": "Seated Spinal Twist",
    "primaryMuscle": "LowerBack",
    "secondaryMuscles": [
      "Back",
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de torsión espinal sentado sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "cross-body-shoulder-stretch",
    "name": "Estiramiento Posterior del Deltoides Cruzando Brazo",
    "nameEn": "Cross-Body Posterior Shoulder Stretch",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Back"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Estiramiento",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de estiramiento posterior del deltoides cruzando brazo sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "sleeper-stretch-rotator-cuff",
    "name": "Sleeper Stretch para Manguito Rotador Interno",
    "nameEn": "Sleeper Stretch for Internal Rotation",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de sleeper stretch para manguito rotador interno sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "prone-ytw-raises",
    "name": "Elevaciones Y-T-W en Decúbito Prono",
    "nameEn": "Prone Y-T-W Scapular Raises",
    "primaryMuscle": "Traps",
    "secondaryMuscles": [
      "Shoulders",
      "Back"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de elevaciones y-t-w en decúbito prono sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "prone-swimmer-rotations",
    "name": "Nadadores Pronos de Hombro (Prone Swimmers)",
    "nameEn": "Prone Shoulder Swimmer Hover Flow",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Traps",
      "Lats"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de nadadores pronos de hombro (prone swimmers) sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "tall-kneeling-lat-stretch-ball",
    "name": "Estiramiento de Dorsal de Rodillas sobre Balón",
    "nameEn": "Kneeling Lat Stretch on Stability Ball",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Back",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "StabilityBall",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Estiramiento",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de estiramiento de dorsal de rodillas sobre balón sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "hamstring-sweep-dynamic-stretch",
    "name": "Barrido Dinámico de Isquiotibiales en Marcha",
    "nameEn": "Dynamic Walking Hamstring Sweeps",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Calves",
      "LowerBack"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Estiramiento",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de barrido dinámico de isquiotibiales en marcha sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "knee-hug-glute-march",
    "name": "Abrazo de Rodilla en Marcha con Elevación",
    "nameEn": "Walking Knee Hug to Glute Stretch",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "HipFlexors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Estiramiento",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de abrazo de rodilla en marcha con elevación sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "quad-pull-reach-march",
    "name": "Tirón de Cuádriceps en Marcha con Extensión",
    "nameEn": "Walking Quad Pull with Overhead Reach",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "HipFlexors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Estiramiento",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de tirón de cuádriceps en marcha con extensión sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "hip-circles-fire-hydrant",
    "name": "Círculos Articulares de Cadera (Fire Hydrant CARs)",
    "nameEn": "Quadruped Hip CARs (Controlled Articular Rotations)",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Abductors",
      "HipFlexors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de círculos articulares de cadera (fire hydrant cars) sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "shoulder-cars-standing",
    "name": "Rotaciones Articulares Controladas de Hombro (CARs)",
    "nameEn": "Standing Shoulder CARs",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Traps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de rotaciones articulares controladas de hombro (cars) sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "neck-controlled-articular-rotations",
    "name": "Rotaciones Controladas del Cuello y Columna Cervical",
    "nameEn": "Cervical Spine CARs",
    "primaryMuscle": "Traps",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de rotaciones controladas del cuello y columna cervical sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "cossack-squat-mobility",
    "name": "Sentadilla Cosaca de Movilidad Lateral",
    "nameEn": "Cossack Squat Mobility Flow",
    "primaryMuscle": "Adductors",
    "secondaryMuscles": [
      "Quads",
      "Glutes",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Estocada",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de sentadilla cosaca de movilidad lateral sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "shin-box-get-up",
    "name": "Levantamiento desde Posición de Shin Box",
    "nameEn": "Shin Box Hip Extension and Get-Up",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "HipFlexors",
      "Adductors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de levantamiento desde posición de shin box sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "kneeling-quad-reach-bench",
    "name": "Estiramiento de Cuádriceps con Pie Elevado en Banco",
    "nameEn": "Rear-Foot Elevated Couch Hip Stretch",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "HipFlexors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Estiramiento",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de estiramiento de cuádriceps con pie elevado en banco sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "banded-distracted-hip-flexor",
    "name": "Descompresión de Cadera con Tracción de Banda",
    "nameEn": "Banded Hip Flexor Distraction",
    "primaryMuscle": "HipFlexors",
    "secondaryMuscles": [
      "Quads"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Band",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de descompresión de cadera con tracción de banda sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "standing-it-band-cross-stretch",
    "name": "Estiramiento de Banda Iliotibial Cruzando Piernas",
    "nameEn": "Standing IT Band and Lateral Line Stretch",
    "primaryMuscle": "Abductors",
    "secondaryMuscles": [
      "Glutes",
      "LowerBack"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Estiramiento",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de estiramiento de banda iliotibial cruzando piernas sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "seated-butterfly-stretch",
    "name": "Postura de la Mariposa Sentado",
    "nameEn": "Seated Butterfly Adductor Stretch",
    "primaryMuscle": "Adductors",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Estiramiento",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de postura de la mariposa sentado sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "downward-facing-dog-pedaling",
    "name": "Perro Boca Abajo con Pedaleo de Talones",
    "nameEn": "Downward Dog Calf and Hamstring Pedals",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Hamstrings",
      "Shoulders",
      "Back"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Estiramiento",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de perro boca abajo con pedaleo de talones sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "upward-facing-dog-abdominal",
    "name": "Perro Boca Arriba para Cadena Anterior",
    "nameEn": "Upward-Facing Dog Core Stretch",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "HipFlexors",
      "Chest"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Estiramiento",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de perro boca arriba para cadena anterior sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "supine-figure-four-glute-stretch",
    "name": "Estiramiento del Número Cuatro Boca Arriba",
    "nameEn": "Supine Figure Four Piriformis Stretch",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "LowerBack"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Movilidad",
    "mechanics": "Compuesto",
    "movementPattern": "Estiramiento",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Multi-plano",
    "forceType": "Estático",
    "instructions": [
      "Adopta suavemente la postura de estiramiento del número cuatro boca arriba sin forzar las articulaciones.",
      "Sincroniza una respiración pausada y profunda manteniendo la posición o el flujo controlado.",
      "Regresa a la posición neutra sin movimientos bruscos sintiendo la liberación articular."
    ],
    "tips": [
      "La movilidad debe sentirse como una liberación progresiva, nunca con dolor agudo punzante."
    ],
    "breathingCue": "Inhala expandiendo la caja torácica; exhala profundizando en el rango articular de forma relajada.",
    "alternatives": []
  },
  {
    "id": "jumping-jacks-cardio",
    "name": "Saltos de Tijera (Jumping Jacks)",
    "nameEn": "Jumping Jacks",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Calves",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de saltos de tijera (jumping jacks) a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "inchworm-walkout"
    ]
  },
  {
    "id": "high-knees-drill",
    "name": "Rodillas Arriba en el Sitio (High Knees)",
    "nameEn": "High Knees Running in Place",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Quads",
      "Calves",
      "Abs"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de rodillas arriba en el sitio (high knees) a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "butt-kicks-drill",
    "name": "Talones a los Glúteos (Butt Kicks)",
    "nameEn": "Butt Kicks Running Drill",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Hamstrings",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de talones a los glúteos (butt kicks) a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "inchworm-walkout",
    "name": "El Gusano (Inchworm Walkout con Flexión Opcional)",
    "nameEn": "Inchworm to Plank Walkout",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Shoulders",
      "Abs",
      "Chest"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de el gusano (inchworm walkout con flexión opcional) a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio"
    ]
  },
  {
    "id": "mountain-climbers",
    "name": "Escaladores en Plancha (Mountain Climbers)",
    "nameEn": "Mountain Climbers",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders",
      "HipFlexors",
      "Cardio"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de escaladores en plancha (mountain climbers) a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "banded-lateral-monster-walk",
    "name": "Caminata Lateral de Monstruo con Banda en Rodillas",
    "nameEn": "Banded Lateral Monster Walk",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Abductors",
      "Quads"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Band",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Estocada",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de caminata lateral de monstruo con banda en rodillas a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "banded-clamshell",
    "name": "La Almeja con Banda Elástica (Clamshell)",
    "nameEn": "Banded Clamshell",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Abductors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Band",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de la almeja con banda elástica (clamshell) a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "arm-circles-forward-backward",
    "name": "Círculos de Brazos hacia Adelante y Atrás",
    "nameEn": "Forward and Backward Arm Circles",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Traps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de círculos de brazos hacia adelante y atrás a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "leg-swings-front-back",
    "name": "Balanceos de Pierna Frontales y Posteriores",
    "nameEn": "Front-to-Back Dynamic Leg Swings",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "HipFlexors",
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de balanceos de pierna frontales y posteriores a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "leg-swings-side-to-side",
    "name": "Balanceos de Pierna Laterales",
    "nameEn": "Side-to-Side Dynamic Leg Swings",
    "primaryMuscle": "Adductors",
    "secondaryMuscles": [
      "Abductors",
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de balanceos de pierna laterales a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "torso-rotations-standing",
    "name": "Rotaciones de Tronco de Pie con Pivote",
    "nameEn": "Standing Torso Twists with Foot Pivot",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "LowerBack"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de rotaciones de tronco de pie con pivote a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "air-squat-warmup",
    "name": "Sentadilla al Aire de Calentamiento Rítmico",
    "nameEn": "Dynamic Bodyweight Air Squat",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de sentadilla al aire de calentamiento rítmico a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "alternating-reverse-lunge-reach",
    "name": "Zancada Inversa Alterna con Extensión de Brazos",
    "nameEn": "Reverse Lunge with Overhead Lateral Reach",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "HipFlexors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Estocada",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de zancada inversa alterna con extensión de brazos a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "glute-bridge-activation-bodyweight",
    "name": "Puente de Glúteos de Activación con Doble Apoyo",
    "nameEn": "Bodyweight Glute Bridge Holds",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de puente de glúteos de activación con doble apoyo a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "band-pull-apart-warmup",
    "name": "Separaciones de Banda Elástica al Pecho (Pull-Apart)",
    "nameEn": "Band Pull-Apart Warmup",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Traps",
      "Back"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Band",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de separaciones de banda elástica al pecho (pull-apart) a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "overhead-band-press-warmup",
    "name": "Press sobre Cabeza con Banda de Activación",
    "nameEn": "Banded Overhead Press Warmup",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Triceps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Band",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de press sobre cabeza con banda de activación a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "skater-jumps-warmup",
    "name": "Saltos de Patinador Laterales (Skater Hops)",
    "nameEn": "Lateral Skater Hops",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Abductors",
      "Calves",
      "Cardio"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de saltos de patinador laterales (skater hops) a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "pogo-hops-calves",
    "name": "Saltos Pogo Rítmicos en los Tobillos",
    "nameEn": "Pogo Hops for Ankle Stiffness",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Cardio"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de saltos pogo rítmicos en los tobillos a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "single-leg-ruler-hop",
    "name": "Pequeños Saltos Unilaterales de Reactividad",
    "nameEn": "Single-Leg Linear Hop Drill",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Quads"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de pequeños saltos unilaterales de reactividad a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "plank-to-downward-dog",
    "name": "Transición de Plancha a Perro Boca Abajo",
    "nameEn": "Plank to Downward Dog Flow",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders",
      "Calves",
      "Hamstrings"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de transición de plancha a perro boca abajo a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "bear-hold-activation",
    "name": "Posición Isométrica de Oso con Rodillas Flotantes",
    "nameEn": "Quadruped Hovering Bear Hold",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Quads",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de posición isométrica de oso con rodillas flotantes a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "bird-dog-activation",
    "name": "Pájaro-Perro de Estabilidad Lumbar (Bird-Dog)",
    "nameEn": "Bird-Dog Core Stability Activation",
    "primaryMuscle": "LowerBack",
    "secondaryMuscles": [
      "Glutes",
      "Shoulders",
      "Abs"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Rotación",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de pájaro-perro de estabilidad lumbar (bird-dog) a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "side-lying-external-rotation-band",
    "name": "Rotación Externa de Hombro Tumbado con Mini-Banda",
    "nameEn": "Side-Lying Rotator Cuff External Rotation",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Band",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de rotación externa de hombro tumbado con mini-banda a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "face-pull-band-warmup",
    "name": "Face Pull con Banda Elástica en Anclaje",
    "nameEn": "Banded Face Pull Warmup",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Traps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Band",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de face pull con banda elástica en anclaje a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "shadow-boxing-footwork",
    "name": "Sombra de Boxeo con Juego de Pies Ligero",
    "nameEn": "Light Shadow Boxing and Footwork Flow",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Shoulders",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de sombra de boxeo con juego de pies ligero a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "jump-rope-basic-bounce",
    "name": "Salto con Cuerda / Comba Rítmica Básica",
    "nameEn": "Basic Jump Rope Bounce",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Calves",
      "Forearms"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Rope",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de salto con cuerda / comba rítmica básica a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "lateral-shuffle-cones",
    "name": "Desplazamiento Lateral de Baloncesto (Shuffles)",
    "nameEn": "Lateral Defensive Shuffle Drill",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Calves",
      "Cardio"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Estocada",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de desplazamiento lateral de baloncesto (shuffles) a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "a-skip-running-drill",
    "name": "A-Skip de Técnica de Carrera",
    "nameEn": "Track and Field A-Skip Drill",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Calves",
      "HipFlexors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de a-skip de técnica de carrera a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "b-skip-running-drill",
    "name": "B-Skip con Extensión y Zarpazo",
    "nameEn": "Dynamic B-Skip Hamstring Drill",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Calves",
      "Cardio"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de b-skip con extensión y zarpazo a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "carioca-grapevine-warmup",
    "name": "Carioca / Pasos Cruzados Dinámicos de Cadera",
    "nameEn": "Carioca Grapevine Hip Warmup Drill",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Adductors",
      "Cardio"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de carioca / pasos cruzados dinámicos de cadera a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "squat-to-stand-hamstring",
    "name": "De Sentadilla Profunda a Flexión Frontal (Squat to Stand)",
    "nameEn": "Squat-to-Stand with Hamstring Stretch",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Quads",
      "LowerBack"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de de sentadilla profunda a flexión frontal (squat to stand) a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "dead-hang-bar-warmup",
    "name": "Cuelgue Pasivo en Barra para Descompresión Espinal",
    "nameEn": "Passive Bar Dead Hang",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Forearms",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de cuelgue pasivo en barra para descompresión espinal a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "active-hang-scapular-depression",
    "name": "Cuelgue Activo con Depresión Escapular",
    "nameEn": "Active Bar Hang with Scapular Retraction",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Forearms",
      "Traps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de cuelgue activo con depresión escapular a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "wrist-waves-joint-warmup",
    "name": "Olas y Entrelazado de Muñecas",
    "nameEn": "Wrist Wave Articulations",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de olas y entrelazado de muñecas a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "hip-opener-hurdle-step",
    "name": "Paso por Encima de la Valla Imaginaria",
    "nameEn": "Over-the-Hurdle Hip Rotation Steps",
    "primaryMuscle": "HipFlexors",
    "secondaryMuscles": [
      "Glutes",
      "Abductors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Calentamiento",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Inicia el movimiento dinámico de paso por encima de la valla imaginaria a ritmo moderado y progresivo.",
      "Aumenta la amplitud y fluidez a medida que la temperatura corporal y lubricación sinovial se incrementan.",
      "Finaliza manteniendo la respiración rítmica y el control postural."
    ],
    "tips": [
      "El objetivo del calentamiento es activar el sistema nervioso central sin generar fatiga previa al entrenamiento principal."
    ],
    "breathingCue": "Respiración continua y rítmica a través de la nariz y boca.",
    "alternatives": [
      "jumping-jacks-cardio",
      "inchworm-walkout"
    ]
  },
  {
    "id": "foam-roll-thoracic-spine",
    "name": "Liberación Miofascial de Columna Torácica con Rodillo",
    "nameEn": "Foam Rolling Thoracic Spine Extension",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Traps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "FoamRoller",
    "difficulty": "Principiante",
    "category": "FoamRolling",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Coloca el rodillo o pelota bajo el área muscular diana de liberación miofascial de columna torácica con rodillo.",
      "Rueda lentamente buscando zonas de mayor tensión o nudos musculares (puntos gatillo).",
      "Al localizar un punto sensible, sostén la presión fija durante 30 a 60 segundos respirando hondo."
    ],
    "tips": [
      "Nunca ruedes directamente sobre articulaciones, huesos prominentes o la zona lumbar sin apoyo pélvico."
    ],
    "breathingCue": "Exhala largo y relajado mientras permites que el músculo ceda a la presión del rodillo.",
    "alternatives": [
      "cat-cow-stretch"
    ]
  },
  {
    "id": "foam-roll-lats",
    "name": "Liberación de Dorsal Ancho con Foam Roller",
    "nameEn": "Foam Rolling Latissimus Dorsi",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Back"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "FoamRoller",
    "difficulty": "Principiante",
    "category": "FoamRolling",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Coloca el rodillo o pelota bajo el área muscular diana de liberación de dorsal ancho con foam roller.",
      "Rueda lentamente buscando zonas de mayor tensión o nudos musculares (puntos gatillo).",
      "Al localizar un punto sensible, sostén la presión fija durante 30 a 60 segundos respirando hondo."
    ],
    "tips": [
      "Nunca ruedes directamente sobre articulaciones, huesos prominentes o la zona lumbar sin apoyo pélvico."
    ],
    "breathingCue": "Exhala largo y relajado mientras permites que el músculo ceda a la presión del rodillo.",
    "alternatives": [
      "cat-cow-stretch"
    ]
  },
  {
    "id": "foam-roll-glutes-piriformis",
    "name": "Autoliberación de Glúteo y Piramidal con Rodillo",
    "nameEn": "Foam Rolling Gluteus and Piriformis",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Abductors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "FoamRoller",
    "difficulty": "Principiante",
    "category": "FoamRolling",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Coloca el rodillo o pelota bajo el área muscular diana de autoliberación de glúteo y piramidal con rodillo.",
      "Rueda lentamente buscando zonas de mayor tensión o nudos musculares (puntos gatillo).",
      "Al localizar un punto sensible, sostén la presión fija durante 30 a 60 segundos respirando hondo."
    ],
    "tips": [
      "Nunca ruedes directamente sobre articulaciones, huesos prominentes o la zona lumbar sin apoyo pélvico."
    ],
    "breathingCue": "Exhala largo y relajado mientras permites que el músculo ceda a la presión del rodillo.",
    "alternatives": [
      "cat-cow-stretch"
    ]
  },
  {
    "id": "foam-roll-quadriceps",
    "name": "Masaje Miofascial de Cuádriceps con Foam Roller",
    "nameEn": "Foam Rolling Quadriceps",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "HipFlexors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "FoamRoller",
    "difficulty": "Principiante",
    "category": "FoamRolling",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Coloca el rodillo o pelota bajo el área muscular diana de masaje miofascial de cuádriceps con foam roller.",
      "Rueda lentamente buscando zonas de mayor tensión o nudos musculares (puntos gatillo).",
      "Al localizar un punto sensible, sostén la presión fija durante 30 a 60 segundos respirando hondo."
    ],
    "tips": [
      "Nunca ruedes directamente sobre articulaciones, huesos prominentes o la zona lumbar sin apoyo pélvico."
    ],
    "breathingCue": "Exhala largo y relajado mientras permites que el músculo ceda a la presión del rodillo.",
    "alternatives": [
      "cat-cow-stretch"
    ]
  },
  {
    "id": "foam-roll-it-band-tfl",
    "name": "Liberación del Tensor de la Fascia Lata y Banda Iliotibial",
    "nameEn": "Foam Rolling IT Band and Tensor Fasciae Latae",
    "primaryMuscle": "Abductors",
    "secondaryMuscles": [
      "Quads"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "FoamRoller",
    "difficulty": "Principiante",
    "category": "FoamRolling",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Coloca el rodillo o pelota bajo el área muscular diana de liberación del tensor de la fascia lata y banda iliotibial.",
      "Rueda lentamente buscando zonas de mayor tensión o nudos musculares (puntos gatillo).",
      "Al localizar un punto sensible, sostén la presión fija durante 30 a 60 segundos respirando hondo."
    ],
    "tips": [
      "Nunca ruedes directamente sobre articulaciones, huesos prominentes o la zona lumbar sin apoyo pélvico."
    ],
    "breathingCue": "Exhala largo y relajado mientras permites que el músculo ceda a la presión del rodillo.",
    "alternatives": [
      "cat-cow-stretch"
    ]
  },
  {
    "id": "foam-roll-hamstrings",
    "name": "Liberación de Isquiotibiales con Rodillo",
    "nameEn": "Foam Rolling Hamstrings",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "FoamRoller",
    "difficulty": "Principiante",
    "category": "FoamRolling",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Coloca el rodillo o pelota bajo el área muscular diana de liberación de isquiotibiales con rodillo.",
      "Rueda lentamente buscando zonas de mayor tensión o nudos musculares (puntos gatillo).",
      "Al localizar un punto sensible, sostén la presión fija durante 30 a 60 segundos respirando hondo."
    ],
    "tips": [
      "Nunca ruedes directamente sobre articulaciones, huesos prominentes o la zona lumbar sin apoyo pélvico."
    ],
    "breathingCue": "Exhala largo y relajado mientras permites que el músculo ceda a la presión del rodillo.",
    "alternatives": [
      "cat-cow-stretch"
    ]
  },
  {
    "id": "foam-roll-adductors",
    "name": "Liberación de Aductores en Posición de Rana",
    "nameEn": "Foam Rolling Adductor Complex",
    "primaryMuscle": "Adductors",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "FoamRoller",
    "difficulty": "Principiante",
    "category": "FoamRolling",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Coloca el rodillo o pelota bajo el área muscular diana de liberación de aductores en posición de rana.",
      "Rueda lentamente buscando zonas de mayor tensión o nudos musculares (puntos gatillo).",
      "Al localizar un punto sensible, sostén la presión fija durante 30 a 60 segundos respirando hondo."
    ],
    "tips": [
      "Nunca ruedes directamente sobre articulaciones, huesos prominentes o la zona lumbar sin apoyo pélvico."
    ],
    "breathingCue": "Exhala largo y relajado mientras permites que el músculo ceda a la presión del rodillo.",
    "alternatives": [
      "cat-cow-stretch"
    ]
  },
  {
    "id": "foam-roll-calves-gastrocnemius",
    "name": "Autoliberación de Gemelos y Tendón de Aquiles",
    "nameEn": "Foam Rolling Calves and Gastrocnemius",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "FoamRoller",
    "difficulty": "Principiante",
    "category": "FoamRolling",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Coloca el rodillo o pelota bajo el área muscular diana de autoliberación de gemelos y tendón de aquiles.",
      "Rueda lentamente buscando zonas de mayor tensión o nudos musculares (puntos gatillo).",
      "Al localizar un punto sensible, sostén la presión fija durante 30 a 60 segundos respirando hondo."
    ],
    "tips": [
      "Nunca ruedes directamente sobre articulaciones, huesos prominentes o la zona lumbar sin apoyo pélvico."
    ],
    "breathingCue": "Exhala largo y relajado mientras permites que el músculo ceda a la presión del rodillo.",
    "alternatives": [
      "cat-cow-stretch"
    ]
  },
  {
    "id": "foam-roll-shins-tibialis",
    "name": "Liberación Miofascial de Tibial Anterior",
    "nameEn": "Foam Rolling Anterior Tibialis",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "FoamRoller",
    "difficulty": "Principiante",
    "category": "FoamRolling",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Coloca el rodillo o pelota bajo el área muscular diana de liberación miofascial de tibial anterior.",
      "Rueda lentamente buscando zonas de mayor tensión o nudos musculares (puntos gatillo).",
      "Al localizar un punto sensible, sostén la presión fija durante 30 a 60 segundos respirando hondo."
    ],
    "tips": [
      "Nunca ruedes directamente sobre articulaciones, huesos prominentes o la zona lumbar sin apoyo pélvico."
    ],
    "breathingCue": "Exhala largo y relajado mientras permites que el músculo ceda a la presión del rodillo.",
    "alternatives": [
      "cat-cow-stretch"
    ]
  },
  {
    "id": "foam-roll-pec-minor-ball",
    "name": "Presión en Pectoral Menor con Pelota de Lacrosse",
    "nameEn": "Lacrosse Ball Trigger Point Release for Pec Minor",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "MedicineBall",
    "difficulty": "Principiante",
    "category": "FoamRolling",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Coloca el rodillo o pelota bajo el área muscular diana de presión en pectoral menor con pelota de lacrosse.",
      "Rueda lentamente buscando zonas de mayor tensión o nudos musculares (puntos gatillo).",
      "Al localizar un punto sensible, sostén la presión fija durante 30 a 60 segundos respirando hondo."
    ],
    "tips": [
      "Nunca ruedes directamente sobre articulaciones, huesos prominentes o la zona lumbar sin apoyo pélvico."
    ],
    "breathingCue": "Exhala largo y relajado mientras permites que el músculo ceda a la presión del rodillo.",
    "alternatives": [
      "cat-cow-stretch"
    ]
  },
  {
    "id": "lacrosse-ball-rhomboids-trigger",
    "name": "Puntos Gatillo en Romboides con Pelota de Masaje",
    "nameEn": "Lacrosse Ball Upper Back and Rhomboids Release",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Traps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "MedicineBall",
    "difficulty": "Principiante",
    "category": "FoamRolling",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Coloca el rodillo o pelota bajo el área muscular diana de puntos gatillo en romboides con pelota de masaje.",
      "Rueda lentamente buscando zonas de mayor tensión o nudos musculares (puntos gatillo).",
      "Al localizar un punto sensible, sostén la presión fija durante 30 a 60 segundos respirando hondo."
    ],
    "tips": [
      "Nunca ruedes directamente sobre articulaciones, huesos prominentes o la zona lumbar sin apoyo pélvico."
    ],
    "breathingCue": "Exhala largo y relajado mientras permites que el músculo ceda a la presión del rodillo.",
    "alternatives": [
      "cat-cow-stretch"
    ]
  },
  {
    "id": "lacrosse-ball-plantar-fascia",
    "name": "Masaje de Fascia Plantar del Pie con Pelota",
    "nameEn": "Plantar Fascia Foot Ball Rolling",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "MedicineBall",
    "difficulty": "Principiante",
    "category": "FoamRolling",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Coloca el rodillo o pelota bajo el área muscular diana de masaje de fascia plantar del pie con pelota.",
      "Rueda lentamente buscando zonas de mayor tensión o nudos musculares (puntos gatillo).",
      "Al localizar un punto sensible, sostén la presión fija durante 30 a 60 segundos respirando hondo."
    ],
    "tips": [
      "Nunca ruedes directamente sobre articulaciones, huesos prominentes o la zona lumbar sin apoyo pélvico."
    ],
    "breathingCue": "Exhala largo y relajado mientras permites que el músculo ceda a la presión del rodillo.",
    "alternatives": [
      "cat-cow-stretch"
    ]
  },
  {
    "id": "foam-roll-neck-suboccipital",
    "name": "Descompresión Suboccipital con Rodillo Suave",
    "nameEn": "Suboccipital Neck Release on Foam Roller",
    "primaryMuscle": "Traps",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "FoamRoller",
    "difficulty": "Principiante",
    "category": "FoamRolling",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Coloca el rodillo o pelota bajo el área muscular diana de descompresión suboccipital con rodillo suave.",
      "Rueda lentamente buscando zonas de mayor tensión o nudos musculares (puntos gatillo).",
      "Al localizar un punto sensible, sostén la presión fija durante 30 a 60 segundos respirando hondo."
    ],
    "tips": [
      "Nunca ruedes directamente sobre articulaciones, huesos prominentes o la zona lumbar sin apoyo pélvico."
    ],
    "breathingCue": "Exhala largo y relajado mientras permites que el músculo ceda a la presión del rodillo.",
    "alternatives": [
      "cat-cow-stretch"
    ]
  },
  {
    "id": "foam-roll-hip-flexors-psoas",
    "name": "Liberación de Psoas y Flexores con Esfera o Rodillo",
    "nameEn": "Psoas and Hip Flexor Targeted Ball Release",
    "primaryMuscle": "HipFlexors",
    "secondaryMuscles": [
      "Quads"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "MedicineBall",
    "difficulty": "Principiante",
    "category": "FoamRolling",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Coloca el rodillo o pelota bajo el área muscular diana de liberación de psoas y flexores con esfera o rodillo.",
      "Rueda lentamente buscando zonas de mayor tensión o nudos musculares (puntos gatillo).",
      "Al localizar un punto sensible, sostén la presión fija durante 30 a 60 segundos respirando hondo."
    ],
    "tips": [
      "Nunca ruedes directamente sobre articulaciones, huesos prominentes o la zona lumbar sin apoyo pélvico."
    ],
    "breathingCue": "Exhala largo y relajado mientras permites que el músculo ceda a la presión del rodillo.",
    "alternatives": [
      "cat-cow-stretch"
    ]
  },
  {
    "id": "foam-roll-triceps-long-head",
    "name": "Liberación Miofascial de la Cabeza Larga del Tríceps",
    "nameEn": "Foam Rolling Long Head of Triceps",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Lats"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "FoamRoller",
    "difficulty": "Principiante",
    "category": "FoamRolling",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Coloca el rodillo o pelota bajo el área muscular diana de liberación miofascial de la cabeza larga del tríceps.",
      "Rueda lentamente buscando zonas de mayor tensión o nudos musculares (puntos gatillo).",
      "Al localizar un punto sensible, sostén la presión fija durante 30 a 60 segundos respirando hondo."
    ],
    "tips": [
      "Nunca ruedes directamente sobre articulaciones, huesos prominentes o la zona lumbar sin apoyo pélvico."
    ],
    "breathingCue": "Exhala largo y relajado mientras permites que el músculo ceda a la presión del rodillo.",
    "alternatives": [
      "cat-cow-stretch"
    ]
  },
  {
    "id": "kettlebell-clean-single-arm",
    "name": "Clean con Pesa Rusa a Una Mano",
    "nameEn": "Single-Arm Kettlebell Clean",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings",
      "Traps",
      "Forearms"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Intermedio",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para clean con pesa rusa a una mano.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-snatch-single-arm",
    "name": "Snatch (Arrancada) con Pesa Rusa a Una Mano",
    "nameEn": "Single-Arm Kettlebell Snatch",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings",
      "Shoulders",
      "Lats"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Avanzado",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para snatch (arrancada) con pesa rusa a una mano.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "turkish-get-up-full",
    "name": "Levantamiento Turco Completo (Turkish Get-Up)",
    "nameEn": "Full Turkish Get-Up",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Abs",
      "Glutes",
      "Quads",
      "Back"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Avanzado",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Multi-plano",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para levantamiento turco completo (turkish get-up).",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-strict-press",
    "name": "Press Militar Estricto con Pesa Rusa",
    "nameEn": "Single-Arm Kettlebell Military Press",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Triceps",
      "Traps"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Intermedio",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para press militar estricto con pesa rusa.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-push-press",
    "name": "Push Press con Pesa Rusa",
    "nameEn": "Kettlebell Push Press",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Quads",
      "Triceps",
      "Glutes"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Intermedio",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para push press con pesa rusa.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-halo",
    "name": "El Halo con Pesa Rusa alrededor de la Cabeza",
    "nameEn": "Kettlebell Halo for Shoulder Mobility",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Traps",
      "Forearms",
      "Abs"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Principiante",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para el halo con pesa rusa alrededor de la cabeza.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "double-kettlebell-front-squat",
    "name": "Sentadilla Frontal con Doble Pesa Rusa en Rack",
    "nameEn": "Double Kettlebell Front Squat",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Abs",
      "Back"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Intermedio",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para sentadilla frontal con doble pesa rusa en rack.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-somersault-squat",
    "name": "Sentadilla con Pesa Rusa Apoyada Tras Nuca",
    "nameEn": "Kettlebell Somersault Squat",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Principiante",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para sentadilla con pesa rusa apoyada tras nuca.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "single-leg-kettlebell-rdl",
    "name": "Peso Muerto Rumano Unilateral con Pesa Rusa",
    "nameEn": "Single-Leg Kettlebell Romanian Deadlift",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Forearms",
      "Abs"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Intermedio",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para peso muerto rumano unilateral con pesa rusa.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-gorilla-row",
    "name": "Remo Gorila Alterno con Dos Pesas Rusas",
    "nameEn": "Kettlebell Gorilla Row",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Lats",
      "Abs",
      "Hamstrings"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Intermedio",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para remo gorila alterno con dos pesas rusas.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-high-pull",
    "name": "Tirón Alto con Pesa Rusa (High Pull)",
    "nameEn": "Kettlebell High Pull",
    "primaryMuscle": "Traps",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Intermedio",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para tirón alto con pesa rusa (high pull).",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-bottoms-up-clean",
    "name": "Clean con Base hacia Arriba (Bottoms-Up)",
    "nameEn": "Bottoms-Up Kettlebell Clean",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [
      "Biceps",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Avanzado",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para clean con base hacia arriba (bottoms-up).",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-bottoms-up-press",
    "name": "Press con Base hacia Arriba para Estabilidad",
    "nameEn": "Bottoms-Up Kettlebell Press",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Forearms",
      "Triceps",
      "Abs"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Avanzado",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para press con base hacia arriba para estabilidad.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-figure-eight",
    "name": "El Ocho entre Piernas con Pesa Rusa (Figure 8)",
    "nameEn": "Kettlebell Figure 8 Dynamic Core Flow",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Glutes",
      "Forearms"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Principiante",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para el ocho entre piernas con pesa rusa (figure 8).",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-deck-squat",
    "name": "Deck Squat con Impulso de Pesa Rusa",
    "nameEn": "Kettlebell Deck Squat to Stand",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Abs",
      "Glutes"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Avanzado",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para deck squat con impulso de pesa rusa.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-curtsy-lunge",
    "name": "Zancada de Reverencia con Pesa Rusa",
    "nameEn": "Kettlebell Curtsy Lunge",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Quads",
      "Adductors"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Principiante",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Estocada",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para zancada de reverencia con pesa rusa.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-sots-press",
    "name": "Press Sots en Sentadilla Profunda con Pesa Rusa",
    "nameEn": "Kettlebell Sots Press in Deep Squat",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Quads",
      "Back",
      "Abs"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Avanzado",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para press sots en sentadilla profunda con pesa rusa.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-slingshot",
    "name": "Vuelta al Mundo alrededor del Torso (Slingshot)",
    "nameEn": "Kettlebell Slingshot / Around the World",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [
      "Abs",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Principiante",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para vuelta al mundo alrededor del torso (slingshot).",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-overhead-carry",
    "name": "Paseo con Pesa Rusa Bloqueada sobre la Cabeza",
    "nameEn": "Single-Arm Kettlebell Overhead Carry",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Abs",
      "Traps"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Principiante",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Carry",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para paseo con pesa rusa bloqueada sobre la cabeza.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-rack-carry",
    "name": "Paseo en Posición de Rack con Pesa Rusa",
    "nameEn": "Single-Arm Kettlebell Front Rack Carry",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Forearms",
      "Glutes"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Principiante",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Carry",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para paseo en posición de rack con pesa rusa.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-waiter-walk",
    "name": "Paseo del Camarero con Pesa Rusa",
    "nameEn": "Kettlebell Waiter’s Walk",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Forearms",
      "Abs"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Principiante",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Carry",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para paseo del camarero con pesa rusa.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-crush-curl",
    "name": "Curl de Bíceps Comprimiendo Pesa Rusa (Crush Curl)",
    "nameEn": "Kettlebell Crush Grip Biceps Curl",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Chest",
      "Forearms"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Principiante",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para curl de bíceps comprimiendo pesa rusa (crush curl).",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-overhead-triceps-extension",
    "name": "Extensión de Tríceps sobre Cabeza con Pesa Rusa",
    "nameEn": "Kettlebell Overhead Triceps Extension",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Principiante",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para extensión de tríceps sobre cabeza con pesa rusa.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-floor-press-single",
    "name": "Press en el Suelo a Una Mano con Pesa Rusa",
    "nameEn": "Single-Arm Kettlebell Floor Press",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Shoulders",
      "Abs"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Principiante",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para press en el suelo a una mano con pesa rusa.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-cross-body-clean",
    "name": "Clean Cruzado Diagonal con Pesa Rusa",
    "nameEn": "Cross-Body Kettlebell Clean",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Abs",
      "Back"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Principiante",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para clean cruzado diagonal con pesa rusa.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-kneeling-windlass",
    "name": "Giro de Molinete de Rodillas con Pesa Rusa",
    "nameEn": "Half-Kneeling Kettlebell Windmill",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Abs",
      "Glutes"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Principiante",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para giro de molinete de rodillas con pesa rusa.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-lateral-swing",
    "name": "Swing Lateral Controlado en el Plano Frontal",
    "nameEn": "Kettlebell Lateral Plane Swing",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Abs",
      "Adductors"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Intermedio",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para swing lateral controlado en el plano frontal.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-pistol-box-squat",
    "name": "Sentadilla Pistola a Cajón con Pesa Rusa Contrapeso",
    "nameEn": "Counterbalance Kettlebell Pistol Squat to Box",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Intermedio",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para sentadilla pistola a cajón con pesa rusa contrapeso.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-good-morning",
    "name": "Buenos Días con Pesa Rusa Abrazada al Pecho",
    "nameEn": "Kettlebell Hugged Good Morning",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "LowerBack"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Principiante",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para buenos días con pesa rusa abrazada al pecho.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-cossack-press",
    "name": "Sentadilla Cosaca con Press Frontal de Pesa Rusa",
    "nameEn": "Kettlebell Cossack Squat with Press-Out",
    "primaryMuscle": "Adductors",
    "secondaryMuscles": [
      "Quads",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Intermedio",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Estocada",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para sentadilla cosaca con press frontal de pesa rusa.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "double-kettlebell-clean-and-jerk",
    "name": "Clean & Jerk Completo con Doble Pesa Rusa",
    "nameEn": "Double Kettlebell Clean and Jerk (Long Cycle)",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings",
      "Triceps"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Avanzado",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para clean & jerk completo con doble pesa rusa.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "double-kettlebell-snatch",
    "name": "Snatch Simultáneo con Dos Pesas Rusas",
    "nameEn": "Double Kettlebell Snatch",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Back",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Avanzado",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para snatch simultáneo con dos pesas rusas.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-renegade-row",
    "name": "Remo Renegado en Plancha con Pesas Rusas",
    "nameEn": "Kettlebell Renegade Row",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Abs",
      "Chest",
      "Triceps"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Avanzado",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para remo renegado en plancha con pesas rusas.",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-thruster",
    "name": "Thruster con Pesa Rusa (Sentadilla + Press)",
    "nameEn": "Kettlebell Thruster",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Shoulders",
      "Triceps",
      "Glutes"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Principiante",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para thruster con pesa rusa (sentadilla + press).",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "kettlebell-man-maker",
    "name": "Man Maker con Pesas Rusas (Flexión + Remo + Thruster)",
    "nameEn": "Kettlebell Man Maker Complex",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Back",
      "Shoulders",
      "Quads"
    ],
    "stabilizers": [
      "Abs",
      "Forearms"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Avanzado",
    "category": "Kettlebell",
    "mechanics": "Compuesto",
    "movementPattern": "Multi-plano",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Asegura el agarre firme y la postura sólida con la pesa rusa para man maker con pesas rusas (flexión + remo + thruster).",
      "Ejecuta la aceleración balística o empuje estricto manteniendo el core presurizado.",
      "Amortigua o desciende la pesa a la posición de inicio siguiendo la trayectoria biomecánica adecuada."
    ],
    "tips": [
      "En movimientos balísticos como swing o snatch, la fuerza se genera con la extensión de cadera, no con los brazos."
    ],
    "breathingCue": "Exhalación seca y percusiva en el momento de máxima potencia; inhalación en la carga elástica.",
    "alternatives": []
  },
  {
    "id": "pallof-press-cable",
    "name": "Press Pallof Antirrotación en Polea",
    "nameEn": "Cable Pallof Press",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Rotación",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para press pallof antirrotación en polea con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "pallof-press-band",
    "name": "Press Pallof con Banda Elástica",
    "nameEn": "Resistance Band Pallof Press",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Band",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Rotación",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para press pallof con banda elástica con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "half-kneeling-pallof-press",
    "name": "Press Pallof en Posición de Caballero",
    "nameEn": "Half-Kneeling Pallof Press",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Glutes",
      "HipFlexors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Rotación",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para press pallof en posición de caballero con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "ab-wheel-rollout-knees",
    "name": "Rueda Abdominal de Rodillas (Ab Wheel)",
    "nameEn": "Kneeling Ab Wheel Rollout",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Lats",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para rueda abdominal de rodillas (ab wheel) con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "ab-wheel-rollout-standing",
    "name": "Rueda Abdominal de Pie (Avanzado)",
    "nameEn": "Standing Ab Wheel Rollout",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Lats",
      "Chest"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para rueda abdominal de pie (avanzado) con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "stir-the-pot-stability-ball",
    "name": "Remover la Olla sobre Balón Suizo (Stir the Pot)",
    "nameEn": "Stability Ball Stir the Pot Plank",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "StabilityBall",
    "difficulty": "Intermedio",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Rotación",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para remover la olla sobre balón suizo (stir the pot) con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "suitcase-carry-dumbbell",
    "name": "Paseo de la Maleta (Suitcase Carry Unilateral)",
    "nameEn": "Single-Arm Dumbbell Suitcase Carry",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Forearms",
      "Traps",
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Intermedio",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Carry",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para paseo de la maleta (suitcase carry unilateral) con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "farmers-walk-heavy",
    "name": "Paseo del Granjero Bilateral Pesado",
    "nameEn": "Heavy Dumbbell Farmer’s Walk",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [
      "Traps",
      "Abs",
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Intermedio",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Carry",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para paseo del granjero bilateral pesado con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "overhead-dumbbell-carry-dual",
    "name": "Paseo con Mancuernas sobre la Cabeza",
    "nameEn": "Dual Dumbbell Overhead Carry",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Traps",
      "Abs"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Carry",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para paseo con mancuernas sobre la cabeza con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "side-plank-forearm-hold",
    "name": "Plancha Lateral sobre Antebrazo",
    "nameEn": "Side Plank Forearm Hold",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Glutes",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Rotación",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para plancha lateral sobre antebrazo con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "rkc-plank-max-tension",
    "name": "Plancha RKC de Tensión Máxima",
    "nameEn": "RKC Maximum Tension Plank",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Glutes",
      "Quads"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para plancha rkc de tensión máxima con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "hollow-body-rocks",
    "name": "Balanceos en Posición Hueca (Hollow Rocks)",
    "nameEn": "Hollow Body Rocks",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "HipFlexors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para balanceos en posición hueca (hollow rocks) con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "v-up-ab-crunch",
    "name": "V-Ups Abdominales en V",
    "nameEn": "Jackknife V-Up Crunch",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "HipFlexors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para v-ups abdominales en v con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "bicycle-crunches-tempo",
    "name": "Bicicleta Abdominal con Pausa Isométrica",
    "nameEn": "Slow Tempo Bicycle Crunch",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "HipFlexors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para bicicleta abdominal con pausa isométrica con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "reverse-crunch-incline-bench",
    "name": "Crunch Inverso en Banco Inclinado",
    "nameEn": "Incline Bench Reverse Crunch",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "HipFlexors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para crunch inverso en banco inclinado con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "woodchopper-cable-high-to-low",
    "name": "Leñador en Polea Alta hacia Abajo (Woodchopper)",
    "nameEn": "High-to-Low Cable Woodchopper",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders",
      "Back"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para leñador en polea alta hacia abajo (woodchopper) con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "woodchopper-cable-low-to-high",
    "name": "Leñador en Polea Baja hacia Arriba",
    "nameEn": "Low-to-High Cable Woodchopper",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Glutes",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para leñador en polea baja hacia arriba con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "landmine-rotations-core",
    "name": "Rotaciones en Landmine para Oblicuos",
    "nameEn": "Barbell Landmine Core Rotations",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders",
      "Back"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para rotaciones en landmine para oblicuos con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "landmine-anti-rotation",
    "name": "Sostenimiento Antirrotación en Landmine",
    "nameEn": "Landmine Anti-Rotation Hold",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Rotación",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para sostenimiento antirrotación en landmine con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "hanging-oblique-knee-tuck",
    "name": "Elevación de Rodillas Cruzada Colgado en Barra",
    "nameEn": "Hanging Oblique Knee Raise",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Forearms"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para elevación de rodillas cruzada colgado en barra con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "plank-shoulder-taps",
    "name": "Plancha Alta con Toques de Hombro Alternos",
    "nameEn": "Plank Shoulder Taps",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Rotación",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para plancha alta con toques de hombro alternos con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "bear-crawl-pull-through",
    "name": "Arrastre de Saco o Pesa en Posición de Oso",
    "nameEn": "Bear Crawl Sandbag Pull-Through",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Kettlebell",
    "difficulty": "Intermedio",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Rotación",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para arrastre de saco o pesa en posición de oso con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "plank-cable-row",
    "name": "Remo en Plancha Unilateral en Polea",
    "nameEn": "Plank Single-Arm Cable Row",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Abs",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Avanzado",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para remo en plancha unilateral en polea con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "pot-stirrer-ab-wheel",
    "name": "Círculos con Rueda Abdominal (Pot Stirrers)",
    "nameEn": "Ab Wheel Circular Rollout",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Rotación",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para círculos con rueda abdominal (pot stirrers) con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "seated-med-ball-rotational-throw",
    "name": "Lanzamiento Rotacional de Balón Medicinal Sentado",
    "nameEn": "Seated Medicine Ball Rotational Wall Throw",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Chest",
      "Back"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "MedicineBall",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para lanzamiento rotacional de balón medicinal sentado con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "standing-med-ball-side-slam",
    "name": "Slam Lateral Rotacional de Balón al Suelo",
    "nameEn": "Rotational Medicine Ball Side Slam",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Glutes",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "MedicineBall",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para slam lateral rotacional de balón al suelo con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "overhead-med-ball-slam",
    "name": "Slam Balístico Frontal de Balón Medicinal",
    "nameEn": "Overhead Medicine Ball Slam",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Lats",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "MedicineBall",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para slam balístico frontal de balón medicinal con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "cable-kneeling-crunch",
    "name": "Crunch Abdominal Arrodillado en Polea Alta",
    "nameEn": "Kneeling Cable Abdominal Crunch",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para crunch abdominal arrodillado en polea alta con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "captain-chair-leg-raise",
    "name": "Elevación de Piernas en Silla del Capitán",
    "nameEn": "Captain’s Chair Vertical Leg Raise",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "HipFlexors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para elevación de piernas en silla del capitán con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "decline-bench-sit-up-weighted",
    "name": "Sit-Up en Banco Declinado con Disco al Pecho",
    "nameEn": "Weighted Decline Bench Sit-Up",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "HipFlexors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Intermedio",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para sit-up en banco declinado con disco al pecho con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "garhammer-raise-bench",
    "name": "Elevación Garhammer de Pelvis en Banco",
    "nameEn": "Garhammer Abdominal Bench Pulse",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para elevación garhammer de pelvis en banco con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "caterpillar-walk-plank",
    "name": "Caminata de Oruga a Plancha Larga (Long Lever)",
    "nameEn": "Long-Lever Extended Plank Walkouts",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para caminata de oruga a plancha larga (long lever) con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "turkish-sit-up-dumbbell",
    "name": "Sit-Up Turco con Mancuerna Vertical",
    "nameEn": "Dumbbell Turkish Sit-Up",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para sit-up turco con mancuerna vertical con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "side-plank-star",
    "name": "Plancha Lateral en Estrella con Brazo y Pierna Arriba",
    "nameEn": "Side Plank Star Hold",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Abductors",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Rotación",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para plancha lateral en estrella con brazo y pierna arriba con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "body-saw-plank-sliders",
    "name": "Sierra Corporal en Plancha con Deslizadores",
    "nameEn": "Body Saw Plank on Sliders or Towel",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para sierra corporal en plancha con deslizadores con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "ab-crunch-stability-ball",
    "name": "Crunch Abdominal sobre Balón Suizo con Gran Recorrido",
    "nameEn": "Stability Ball Extended Range Crunch",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "StabilityBall",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para crunch abdominal sobre balón suizo con gran recorrido con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "stability-ball-pike",
    "name": "Pica en Balón Suizo desde Plancha",
    "nameEn": "Stability Ball Plank to Pike",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "StabilityBall",
    "difficulty": "Intermedio",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para pica en balón suizo desde plancha con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "stability-ball-knee-tuck",
    "name": "Recogida de Rodillas al Pecho en Balón Suizo",
    "nameEn": "Stability Ball Knee Tuck In",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "HipFlexors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "StabilityBall",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para recogida de rodillas al pecho en balón suizo con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "reverse-hyperextension-bench",
    "name": "Hiperextensión Inversa en Banco para Cadena Posterior",
    "nameEn": "Reverse Hyperextension on Flat Bench",
    "primaryMuscle": "LowerBack",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para hiperextensión inversa en banco para cadena posterior con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "back-hyperextension-45-degree",
    "name": "Hiperextensión a 45 Grados en Banco Romano",
    "nameEn": "45-Degree Back Extension on Roman Chair",
    "primaryMuscle": "LowerBack",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para hiperextensión a 45 grados en banco romano con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "good-morning-barbell-heavy",
    "name": "Buenos Días con Barra para Erectores Espinales",
    "nameEn": "Barbell Good Morning",
    "primaryMuscle": "LowerBack",
    "secondaryMuscles": [
      "Hamstrings",
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para buenos días con barra para erectores espinales con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "jefferson-curl-barbell",
    "name": "Curl Jefferson con Barra para Flexión Vertebral Controlada",
    "nameEn": "Jefferson Curl for Spinal Articulation",
    "primaryMuscle": "LowerBack",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para curl jefferson con barra para flexión vertebral controlada con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "standing-cable-anti-flexion-chop",
    "name": "Bloqueo Antiflexión Lateral en Polea",
    "nameEn": "Standing Lateral Anti-Flexion Cable Hold",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Isométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Rotación",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para bloqueo antiflexión lateral en polea con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "sled-push-prowler",
    "name": "Empuje de Trineo Pesado (Prowler Sled Push)",
    "nameEn": "Heavy Prowler Sled Push",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Calves",
      "Cardio"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Sled",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para empuje de trineo pesado (prowler sled push) con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "sled-drag-backward",
    "name": "Arrastre de Trineo Marchando hacia Atrás",
    "nameEn": "Backward Sled Drag for Knee Resilience",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Sled",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Core",
    "instructions": [
      "Posiciónate para arrastre de trineo marchando hacia atrás con la faja abdominal fuertemente activada.",
      "Resiste activamente las fuerzas de torsión, flexión o extensión que intentan desestabilizar la columna.",
      "Mantén la respiración diafragmática fluida sin perder presión intraabdominal."
    ],
    "tips": [
      "El rol primordial del core en el rendimiento es resistir el movimiento indeseado, no crear torsiones lesivas."
    ],
    "breathingCue": "Respiración corta y presurizada manteniendo el abdomen endurecido.",
    "alternatives": []
  },
  {
    "id": "box-jump-standard",
    "name": "Salto al Cajón Pliométrico",
    "nameEn": "Standard Plyometric Box Jump",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Box",
    "difficulty": "Intermedio",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para salto al cajón pliométrico.",
      "Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.",
      "Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa."
    ],
    "tips": [
      "La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada."
    ],
    "breathingCue": "Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.",
    "alternatives": [
      "vertical-jump-countermovement"
    ]
  },
  {
    "id": "box-jump-step-down",
    "name": "Salto al Cajón con Bajada Caminando",
    "nameEn": "Box Jump with Step-Down",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Box",
    "difficulty": "Intermedio",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para salto al cajón con bajada caminando.",
      "Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.",
      "Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa."
    ],
    "tips": [
      "La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada."
    ],
    "breathingCue": "Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.",
    "alternatives": [
      "box-jump-standard",
      "vertical-jump-countermovement"
    ]
  },
  {
    "id": "depth-jump-reactive",
    "name": "Salto de Profundidad Reactivo (Depth Jump)",
    "nameEn": "Depth Jump for Reactive Elastic Power",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Calves",
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Box",
    "difficulty": "Avanzado",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para salto de profundidad reactivo (depth jump).",
      "Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.",
      "Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa."
    ],
    "tips": [
      "La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada."
    ],
    "breathingCue": "Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.",
    "alternatives": [
      "box-jump-standard",
      "vertical-jump-countermovement"
    ]
  },
  {
    "id": "broad-jump-standing",
    "name": "Salto Horizontal de Longitud a Dos Pies",
    "nameEn": "Standing Long Jump (Broad Jump)",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Quads",
      "Hamstrings"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para salto horizontal de longitud a dos pies.",
      "Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.",
      "Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa."
    ],
    "tips": [
      "La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada."
    ],
    "breathingCue": "Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.",
    "alternatives": [
      "box-jump-standard",
      "vertical-jump-countermovement"
    ]
  },
  {
    "id": "vertical-jump-countermovement",
    "name": "Salto Vertical con Contramovimiento (CMJ)",
    "nameEn": "Countermovement Vertical Jump (CMJ)",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para salto vertical con contramovimiento (cmj).",
      "Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.",
      "Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa."
    ],
    "tips": [
      "La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada."
    ],
    "breathingCue": "Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.",
    "alternatives": [
      "box-jump-standard"
    ]
  },
  {
    "id": "tuck-jump-plyo",
    "name": "Salto con Rodillas al Pecho en el Aire (Tuck Jump)",
    "nameEn": "Tuck Jump High Impact Drill",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Quads",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para salto con rodillas al pecho en el aire (tuck jump).",
      "Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.",
      "Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa."
    ],
    "tips": [
      "La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada."
    ],
    "breathingCue": "Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.",
    "alternatives": [
      "box-jump-standard",
      "vertical-jump-countermovement"
    ]
  },
  {
    "id": "lateral-bound-heiden",
    "name": "Salto Lateral a Una Pierna (Heiden Jump)",
    "nameEn": "Lateral Bound Heiden Jump",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Abductors",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para salto lateral a una pierna (heiden jump).",
      "Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.",
      "Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa."
    ],
    "tips": [
      "La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada."
    ],
    "breathingCue": "Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.",
    "alternatives": [
      "box-jump-standard",
      "vertical-jump-countermovement"
    ]
  },
  {
    "id": "split-squat-jump",
    "name": "Salto en Tijera Alternando Piernas en el Aire",
    "nameEn": "Jumping Split Squat Lunges",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para salto en tijera alternando piernas en el aire.",
      "Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.",
      "Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa."
    ],
    "tips": [
      "La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada."
    ],
    "breathingCue": "Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.",
    "alternatives": [
      "box-jump-standard",
      "vertical-jump-countermovement"
    ]
  },
  {
    "id": "burpee-chest-to-ground",
    "name": "Burpee Completo con Pecho a Tierra",
    "nameEn": "Full Chest-to-Ground Burpee",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Chest",
      "Quads",
      "Triceps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para burpee completo con pecho a tierra.",
      "Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.",
      "Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa."
    ],
    "tips": [
      "La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada."
    ],
    "breathingCue": "Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.",
    "alternatives": [
      "box-jump-standard",
      "vertical-jump-countermovement"
    ]
  },
  {
    "id": "squat-thrust-burpee",
    "name": "Squat Thrust sin Flexión (Sprawl)",
    "nameEn": "Squat Thrust / Sprawl",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Abs",
      "Quads"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para squat thrust sin flexión (sprawl).",
      "Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.",
      "Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa."
    ],
    "tips": [
      "La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada."
    ],
    "breathingCue": "Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.",
    "alternatives": [
      "box-jump-standard",
      "vertical-jump-countermovement"
    ]
  },
  {
    "id": "jump-squat-plyometric",
    "name": "Sentadilla con Salto Vertical Continuo",
    "nameEn": "Continuous Plyometric Jump Squat",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para sentadilla con salto vertical continuo.",
      "Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.",
      "Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa."
    ],
    "tips": [
      "La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada."
    ],
    "breathingCue": "Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.",
    "alternatives": [
      "box-jump-standard",
      "vertical-jump-countermovement"
    ]
  },
  {
    "id": "single-leg-box-jump",
    "name": "Salto al Cajón a Una Pierna",
    "nameEn": "Single-Leg Box Jump",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Box",
    "difficulty": "Avanzado",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para salto al cajón a una pierna.",
      "Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.",
      "Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa."
    ],
    "tips": [
      "La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada."
    ],
    "breathingCue": "Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.",
    "alternatives": [
      "box-jump-standard",
      "vertical-jump-countermovement"
    ]
  },
  {
    "id": "med-ball-chest-pass-explosive",
    "name": "Pase Pectoral Explosivo de Balón contra Pared",
    "nameEn": "Explosive Medicine Ball Chest Pass to Wall",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "MedicineBall",
    "difficulty": "Intermedio",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para pase pectoral explosivo de balón contra pared.",
      "Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.",
      "Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa."
    ],
    "tips": [
      "La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada."
    ],
    "breathingCue": "Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.",
    "alternatives": [
      "box-jump-standard",
      "vertical-jump-countermovement"
    ]
  },
  {
    "id": "plyometric-push-up-box",
    "name": "Flexión Pliométrica con Manos al Cajón",
    "nameEn": "Incline Plyometric Push-Up on Box",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Box",
    "difficulty": "Intermedio",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para flexión pliométrica con manos al cajón.",
      "Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.",
      "Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa."
    ],
    "tips": [
      "La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada."
    ],
    "breathingCue": "Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.",
    "alternatives": [
      "box-jump-standard",
      "vertical-jump-countermovement"
    ]
  },
  {
    "id": "depth-pushup-blocks",
    "name": "Flexión con Caída Reactiva desde Bloques",
    "nameEn": "Depth Push-Up from Drop Blocks",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para flexión con caída reactiva desde bloques.",
      "Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.",
      "Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa."
    ],
    "tips": [
      "La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada."
    ],
    "breathingCue": "Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.",
    "alternatives": [
      "box-jump-standard",
      "vertical-jump-countermovement"
    ]
  },
  {
    "id": "hurdle-hops-continuous",
    "name": "Saltos Continuos por Encima de Mini-Vallas",
    "nameEn": "Continuous Mini-Hurdle Forward Hops",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [
      "Quads"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para saltos continuos por encima de mini-vallas.",
      "Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.",
      "Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa."
    ],
    "tips": [
      "La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada."
    ],
    "breathingCue": "Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.",
    "alternatives": [
      "box-jump-standard",
      "vertical-jump-countermovement"
    ]
  },
  {
    "id": "skater-bounds-reactive",
    "name": "Patinadores Laterales Reactivos con Palo o Cono",
    "nameEn": "Reactive Lateral Skater Bounds",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Abductors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para patinadores laterales reactivos con palo o cono.",
      "Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.",
      "Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa."
    ],
    "tips": [
      "La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada."
    ],
    "breathingCue": "Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.",
    "alternatives": [
      "box-jump-standard",
      "vertical-jump-countermovement"
    ]
  },
  {
    "id": "band-assisted-jump-squat",
    "name": "Sentadilla con Salto Asistida por Banda Elástica",
    "nameEn": "Band-Assisted Overspeed Jump Squat",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Band",
    "difficulty": "Intermedio",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para sentadilla con salto asistida por banda elástica.",
      "Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.",
      "Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa."
    ],
    "tips": [
      "La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada."
    ],
    "breathingCue": "Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.",
    "alternatives": [
      "box-jump-standard",
      "vertical-jump-countermovement"
    ]
  },
  {
    "id": "trap-bar-jump-shrug",
    "name": "Salto con Encogimiento en Barra Hexagonal (Jump Shrug)",
    "nameEn": "Trap Bar Jump Shrug Power Pull",
    "primaryMuscle": "Traps",
    "secondaryMuscles": [
      "Quads",
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Trap Bar",
    "difficulty": "Avanzado",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para salto con encogimiento en barra hexagonal (jump shrug).",
      "Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.",
      "Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa."
    ],
    "tips": [
      "La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada."
    ],
    "breathingCue": "Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.",
    "alternatives": [
      "box-jump-standard",
      "vertical-jump-countermovement"
    ]
  },
  {
    "id": "dumbbell-jump-squat-light",
    "name": "Sentadilla con Salto con Mancuernas Ligeras",
    "nameEn": "Light Dumbbell Loaded Jump Squat",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Intermedio",
    "category": "Pliométrico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Carga elástica rápida mediante flexión explosiva de tobillos, rodillas y caderas para sentadilla con salto con mancuernas ligeras.",
      "Extiende con potencia triple (tobillos, rodillas y caderas) propulsando el cuerpo en el aire.",
      "Aterriza de puntillas flexionando articulaciones para amortiguar el impacto de forma silenciosa."
    ],
    "tips": [
      "La calidad y amortiguación silenciosa del aterrizaje son mucho más importantes que la altura alcanzada."
    ],
    "breathingCue": "Inhala en la precarga; exhala con un grito seco o soplido en el despegue explosivo.",
    "alternatives": [
      "box-jump-standard",
      "vertical-jump-countermovement"
    ]
  },
  {
    "id": "power-clean-barbell",
    "name": "Power Clean con Barra desde el Suelo",
    "nameEn": "Barbell Power Clean from Floor",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings",
      "Traps",
      "Back",
      "Quads"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "category": "Olímpico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para power clean con barra desde el suelo.",
      "Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.",
      "Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.",
      "Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros."
    ],
    "tips": [
      "El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia."
    ],
    "breathingCue": "Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.",
    "alternatives": [
      "kettlebell-snatch-single-arm"
    ]
  },
  {
    "id": "hang-clean-barbell",
    "name": "Hang Clean con Barra desde Rodillas",
    "nameEn": "Barbell Hang Clean (Hang Power Clean)",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings",
      "Traps"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "category": "Olímpico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para hang clean con barra desde rodillas.",
      "Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.",
      "Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.",
      "Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros."
    ],
    "tips": [
      "El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia."
    ],
    "breathingCue": "Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.",
    "alternatives": [
      "kettlebell-snatch-single-arm"
    ]
  },
  {
    "id": "clean-and-jerk-olympic",
    "name": "Dos Tiempos Olímpico Completo (Clean & Jerk)",
    "nameEn": "Olympic Clean and Jerk",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Shoulders",
      "Glutes",
      "Traps",
      "Triceps"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "category": "Olímpico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para dos tiempos olímpico completo (clean & jerk).",
      "Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.",
      "Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.",
      "Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros."
    ],
    "tips": [
      "El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia."
    ],
    "breathingCue": "Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.",
    "alternatives": [
      "kettlebell-snatch-single-arm"
    ]
  },
  {
    "id": "power-snatch-barbell",
    "name": "Power Snatch (Arrancada de Potencia)",
    "nameEn": "Barbell Power Snatch from Floor",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings",
      "Shoulders",
      "Traps"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "category": "Olímpico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para power snatch (arrancada de potencia).",
      "Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.",
      "Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.",
      "Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros."
    ],
    "tips": [
      "El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia."
    ],
    "breathingCue": "Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.",
    "alternatives": [
      "kettlebell-snatch-single-arm"
    ]
  },
  {
    "id": "hang-snatch-barbell",
    "name": "Hang Snatch desde los Muslos",
    "nameEn": "Barbell Hang Power Snatch",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Traps",
      "Back"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "category": "Olímpico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para hang snatch desde los muslos.",
      "Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.",
      "Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.",
      "Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros."
    ],
    "tips": [
      "El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia."
    ],
    "breathingCue": "Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.",
    "alternatives": [
      "kettlebell-snatch-single-arm"
    ]
  },
  {
    "id": "split-jerk-barbell",
    "name": "Envión en Tijera (Split Jerk)",
    "nameEn": "Barbell Split Jerk from Racks",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Quads",
      "Triceps",
      "Glutes"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "category": "Olímpico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para envión en tijera (split jerk).",
      "Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.",
      "Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.",
      "Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros."
    ],
    "tips": [
      "El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia."
    ],
    "breathingCue": "Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.",
    "alternatives": [
      "kettlebell-snatch-single-arm"
    ]
  },
  {
    "id": "push-jerk-barbell",
    "name": "Push Jerk con Barra Olímpica",
    "nameEn": "Barbell Push Jerk Power Drive",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Quads",
      "Triceps"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "category": "Olímpico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para push jerk con barra olímpica.",
      "Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.",
      "Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.",
      "Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros."
    ],
    "tips": [
      "El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia."
    ],
    "breathingCue": "Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.",
    "alternatives": [
      "kettlebell-snatch-single-arm"
    ]
  },
  {
    "id": "clean-pull-barbell",
    "name": "Tirón de Cargada Pesado (Clean Pull)",
    "nameEn": "Barbell Heavy Clean Pull",
    "primaryMuscle": "Traps",
    "secondaryMuscles": [
      "Hamstrings",
      "Glutes",
      "Back"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "category": "Olímpico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para tirón de cargada pesado (clean pull).",
      "Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.",
      "Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.",
      "Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros."
    ],
    "tips": [
      "El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia."
    ],
    "breathingCue": "Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.",
    "alternatives": [
      "kettlebell-snatch-single-arm"
    ]
  },
  {
    "id": "snatch-pull-barbell",
    "name": "Tirón de Arrancada con Agarre Ancho",
    "nameEn": "Barbell Snatch Pull",
    "primaryMuscle": "Traps",
    "secondaryMuscles": [
      "Hamstrings",
      "Back"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "category": "Olímpico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para tirón de arrancada con agarre ancho.",
      "Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.",
      "Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.",
      "Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros."
    ],
    "tips": [
      "El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia."
    ],
    "breathingCue": "Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.",
    "alternatives": [
      "kettlebell-snatch-single-arm"
    ]
  },
  {
    "id": "overhead-squat-olympic",
    "name": "Sentadilla de Arrancada Olímpica (Overhead Squat)",
    "nameEn": "Olympic Barbell Overhead Squat",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Shoulders",
      "Back",
      "Abs"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "category": "Olímpico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para sentadilla de arrancada olímpica (overhead squat).",
      "Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.",
      "Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.",
      "Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros."
    ],
    "tips": [
      "El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia."
    ],
    "breathingCue": "Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.",
    "alternatives": [
      "kettlebell-snatch-single-arm"
    ]
  },
  {
    "id": "snatch-balance-barbell",
    "name": "Snatch Balance para Velocidad bajo la Barra",
    "nameEn": "Barbell Snatch Balance Drill",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Quads",
      "Traps"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "category": "Olímpico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para snatch balance para velocidad bajo la barra.",
      "Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.",
      "Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.",
      "Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros."
    ],
    "tips": [
      "El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia."
    ],
    "breathingCue": "Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.",
    "alternatives": [
      "kettlebell-snatch-single-arm"
    ]
  },
  {
    "id": "muscle-clean-barbell",
    "name": "Muscle Clean de Calentamiento sin Flexión de Rodillas",
    "nameEn": "Barbell Muscle Clean Warmup Drill",
    "primaryMuscle": "Traps",
    "secondaryMuscles": [
      "Biceps",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "category": "Olímpico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para muscle clean de calentamiento sin flexión de rodillas.",
      "Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.",
      "Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.",
      "Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros."
    ],
    "tips": [
      "El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia."
    ],
    "breathingCue": "Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.",
    "alternatives": [
      "kettlebell-snatch-single-arm"
    ]
  },
  {
    "id": "muscle-snatch-barbell",
    "name": "Muscle Snatch sin Metida",
    "nameEn": "Barbell Muscle Snatch Drill",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Traps",
      "Back"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "category": "Olímpico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para muscle snatch sin metida.",
      "Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.",
      "Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.",
      "Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros."
    ],
    "tips": [
      "El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia."
    ],
    "breathingCue": "Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.",
    "alternatives": [
      "kettlebell-snatch-single-arm"
    ]
  },
  {
    "id": "tall-clean-barbell",
    "name": "Tall Clean desde Bipedestación",
    "nameEn": "Barbell Tall Clean Turnover Drill",
    "primaryMuscle": "Traps",
    "secondaryMuscles": [
      "Quads"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "category": "Olímpico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para tall clean desde bipedestación.",
      "Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.",
      "Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.",
      "Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros."
    ],
    "tips": [
      "El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia."
    ],
    "breathingCue": "Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.",
    "alternatives": [
      "kettlebell-snatch-single-arm"
    ]
  },
  {
    "id": "tall-snatch-barbell",
    "name": "Tall Snatch para Rapidez de Entrada",
    "nameEn": "Barbell Tall Snatch Turnover Drill",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Traps"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "category": "Olímpico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para tall snatch para rapidez de entrada.",
      "Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.",
      "Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.",
      "Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros."
    ],
    "tips": [
      "El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia."
    ],
    "breathingCue": "Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.",
    "alternatives": [
      "kettlebell-snatch-single-arm"
    ]
  },
  {
    "id": "clean-deadlift-barbell",
    "name": "Peso Muerto con Postura Específica de Cargada",
    "nameEn": "Clean Grip Barbell Deadlift",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Hamstrings",
      "Traps",
      "Back"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "category": "Olímpico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para peso muerto con postura específica de cargada.",
      "Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.",
      "Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.",
      "Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros."
    ],
    "tips": [
      "El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia."
    ],
    "breathingCue": "Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.",
    "alternatives": [
      "kettlebell-snatch-single-arm"
    ]
  },
  {
    "id": "snatch-deadlift-barbell",
    "name": "Peso Muerto con Agarre Ancho de Arrancada",
    "nameEn": "Snatch Grip Barbell Deadlift",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Hamstrings",
      "Traps",
      "Forearms"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "category": "Olímpico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para peso muerto con agarre ancho de arrancada.",
      "Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.",
      "Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.",
      "Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros."
    ],
    "tips": [
      "El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia."
    ],
    "breathingCue": "Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.",
    "alternatives": [
      "kettlebell-snatch-single-arm"
    ]
  },
  {
    "id": "block-clean-power",
    "name": "Clean desde Bloques Altos (Block Clean)",
    "nameEn": "Clean from High Pulling Blocks",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Traps"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "category": "Olímpico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para clean desde bloques altos (block clean).",
      "Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.",
      "Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.",
      "Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros."
    ],
    "tips": [
      "El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia."
    ],
    "breathingCue": "Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.",
    "alternatives": [
      "kettlebell-snatch-single-arm"
    ]
  },
  {
    "id": "block-snatch-power",
    "name": "Snatch desde Bloques (Block Snatch)",
    "nameEn": "Snatch from Pulling Blocks",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Shoulders",
      "Traps"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "category": "Olímpico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para snatch desde bloques (block snatch).",
      "Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.",
      "Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.",
      "Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros."
    ],
    "tips": [
      "El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia."
    ],
    "breathingCue": "Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.",
    "alternatives": [
      "kettlebell-snatch-single-arm"
    ]
  },
  {
    "id": "jerk-recovery-barbell",
    "name": "Recuperación de Envión en Rack Alto",
    "nameEn": "Barbell Jerk Drive and Recovery",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs",
      "LowerBack"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "category": "Olímpico",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Tirón",
    "instructions": [
      "Ajusta el agarre reglamentario con gancho (hook grip) y la postura de salida para recuperación de envión en rack alto.",
      "Ejecuta el primer tirón controlado manteniendo el ángulo de espalda neutro constante.",
      "Detona la extensión triple explosiva al pasar las rodillas e ingresa con rapidez bajo la barra.",
      "Recupera la vertical erguida asegurando el control total del peso sobre la cabeza o sobre los hombros."
    ],
    "tips": [
      "El hook grip (pulgar atrapado bajo los dedos índice y corazón) es indispensable para la seguridad en halterofilia."
    ],
    "breathingCue": "Inhala hondo y fija la faja abdominal antes del despegue; exhala al estabilizar la barra arriba.",
    "alternatives": [
      "kettlebell-snatch-single-arm"
    ]
  },
  {
    "id": "scapular-push-up-plus",
    "name": "Flexiones Escapulares (Push-Up Plus para Serrato)",
    "nameEn": "Scapular Push-Up Plus for Serratus Anterior",
    "primaryMuscle": "Serratus",
    "secondaryMuscles": [
      "Chest",
      "Triceps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para flexiones escapulares (push-up plus para serrato) con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en serratus.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "serratus-wall-slide-foam-roller",
    "name": "Deslizamiento en Pared con Rodillo para Serrato",
    "nameEn": "Foam Roller Serratus Wall Slide",
    "primaryMuscle": "Serratus",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "FoamRoller",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para deslizamiento en pared con rodillo para serrato con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en serratus.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "prone-y-raise-bench",
    "name": "Elevaciones en Y Boca Abajo para Trapecio Inferior",
    "nameEn": "Prone Incline Bench Y-Raise",
    "primaryMuscle": "Traps",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para elevaciones en y boca abajo para trapecio inferior con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en traps.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "prone-t-raise-bench",
    "name": "Elevaciones en T Boca Abajo para Romboides",
    "nameEn": "Prone Incline Bench T-Raise",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Traps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para elevaciones en t boca abajo para romboides con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en back.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "prone-w-raise-bench",
    "name": "Elevaciones en W Boca Abajo para Manguito Rotador",
    "nameEn": "Prone Incline Bench W-Raise",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Traps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para elevaciones en w boca abajo para manguito rotador con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en shoulders.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "external-rotation-cable-neutral",
    "name": "Rotación Externa de Hombro en Polea a 0 Grados",
    "nameEn": "Standing Cable Shoulder External Rotation",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Rotación",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para rotación externa de hombro en polea a 0 grados con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en shoulders.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "internal-rotation-cable-neutral",
    "name": "Rotación Interna de Hombro en Polea",
    "nameEn": "Standing Cable Shoulder Internal Rotation",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Chest"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Rotación",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para rotación interna de hombro en polea con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en shoulders.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "external-rotation-90-90-cable",
    "name": "Rotación Externa a 90/90 de Abducción en Polea",
    "nameEn": "90/90 Cable Shoulder External Rotation",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Intermedio",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Rotación",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para rotación externa a 90/90 de abducción en polea con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en shoulders.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "banded-clamshell-tempo",
    "name": "Almejas con Banda y Pausa Isométrica para Glúteo Medio",
    "nameEn": "Banded Tempo Clamshell Holds",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Abductors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Band",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para almejas con banda y pausa isométrica para glúteo medio con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en glutes.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "glute-kickback-cable",
    "name": "Patada de Glúteo en Polea Baja con Tobillera",
    "nameEn": "Standing Cable Glute Kickback",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para patada de glúteo en polea baja con tobillera con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en glutes.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "standing-hip-abduction-cable",
    "name": "Abducción de Cadera de Pie en Polea",
    "nameEn": "Standing Cable Hip Abduction",
    "primaryMuscle": "Abductors",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para abducción de cadera de pie en polea con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en abductors.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "standing-hip-adduction-cable",
    "name": "Aducción de Cadera de Pie en Polea",
    "nameEn": "Standing Cable Hip Adduction",
    "primaryMuscle": "Adductors",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para aducción de cadera de pie en polea con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en adductors.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "tibialis-raise-weighted-bar",
    "name": "Elevación de Tibial con Barra de Tobillo (Tib Bar)",
    "nameEn": "Weighted Tib Bar Tibialis Raise",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para elevación de tibial con barra de tobillo (tib bar) con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en calves.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "slant-board-calf-stretch-eccentric",
    "name": "Descensos Excéntricos de Gemelo en Tabla Inclinada",
    "nameEn": "Slant Board Eccentric Calf Drops",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para descensos excéntricos de gemelo en tabla inclinada con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en calves.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "single-leg-isometric-split-squat-hold",
    "name": "Sostenimiento Isométrico en Sentadilla Split",
    "nameEn": "Long-Duration Isometric Split Squat Hold",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Estocada",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para sostenimiento isométrico en sentadilla split con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en quads.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "spanish-squat-banded",
    "name": "Sentadilla Española con Correa para Tendinopatía Patelar",
    "nameEn": "Banded Spanish Squat for Patellar Tendon",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Band",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para sentadilla española con correa para tendinopatía patelar con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en quads.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "peterson-step-up",
    "name": "Step-Up Peterson con Apoyo Metatarsal",
    "nameEn": "Peterson Step-Up for VMO Activation",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Estocada",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para step-up peterson con apoyo metatarsal con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en quads.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "poliquin-step-up-slant-board",
    "name": "Step-Up Poliquin en Tabla Inclinada",
    "nameEn": "Poliquin Step-Up on Slant Board",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Estocada",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para step-up poliquin en tabla inclinada con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en quads.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "atg-split-squat",
    "name": "Sentadilla Split ATG (Rodilla sobre Puntera)",
    "nameEn": "ATG Full Knee Flexion Split Squat",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Calves",
      "HipFlexors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Intermedio",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Estocada",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para sentadilla split atg (rodilla sobre puntera) con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en quads.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "seated-good-morning-bench",
    "name": "Buenos Días Sentado en Banco con Piernas Abiertas",
    "nameEn": "Seated Good Morning on Flat Bench",
    "primaryMuscle": "LowerBack",
    "secondaryMuscles": [
      "Hamstrings",
      "Adductors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para buenos días sentado en banco con piernas abiertas con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en lowerback.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "mcgill-big-three-curl-up",
    "name": "McGill Curl-Up de Estabilidad Lumbar Segura",
    "nameEn": "McGill Clinical Curl-Up",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para mcgill curl-up de estabilidad lumbar segura con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en abs.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "mcgill-side-bridge",
    "name": "Puente Lateral McGill con Rodillas Flexionadas",
    "nameEn": "McGill Modified Side Bridge",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Anti-Rotación",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para puente lateral mcgill con rodillas flexionadas con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en abs.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "prone-cobra-hold",
    "name": "Cobra Prona Isométrica para Cadena Posterior Alta",
    "nameEn": "Prone Cobra Scapular Retraction Hold",
    "primaryMuscle": "Traps",
    "secondaryMuscles": [
      "Back",
      "LowerBack"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para cobra prona isométrica para cadena posterior alta con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en traps.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "chin-tuck-neck-flexion",
    "name": "Retracción Cervical (Chin Tuck contra la Pared)",
    "nameEn": "Chin Tuck Neck Deep Flexor Activation",
    "primaryMuscle": "Traps",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para retracción cervical (chin tuck contra la pared) con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en traps.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "wrist-curls-dumbbell",
    "name": "Curl de Muñeca Supino con Mancuerna para Antebrazo",
    "nameEn": "Seated Dumbbell Wrist Curl",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para curl de muñeca supino con mancuerna para antebrazo con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en forearms.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "reverse-wrist-curls-dumbbell",
    "name": "Curl de Muñeca Prono Inverso para Extensores",
    "nameEn": "Seated Dumbbell Reverse Wrist Curl",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para curl de muñeca prono inverso para extensores con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en forearms.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "wrist-radial-ulnar-deviation",
    "name": "Desviación Radial y Cubital con Barra de Palanca",
    "nameEn": "Lever Bar Radial and Ulnar Wrist Deviations",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para desviación radial y cubital con barra de palanca con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en forearms.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "wrist-pronator-supinator-dumbbell",
    "name": "Pronación y Supinación de Muñeca con Martillo",
    "nameEn": "Forearm Pronation and Supination with Hammer",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Rotación",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para pronación y supinación de muñeca con martillo con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en forearms.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "seated-calf-stretch-towel",
    "name": "Estiramiento Asistido de Gemelo con Toalla",
    "nameEn": "Towel-Assisted Gastrocnemius Stretch",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Estiramiento",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para estiramiento asistido de gemelo con toalla con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en calves.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "wall-sit-isometric",
    "name": "Sentadilla Isométrica contra la Pared (Wall Sit)",
    "nameEn": "Wall Sit Isometric Hold",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para sentadilla isométrica contra la pared (wall sit) con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en quads.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "hamstring-bridge-isometric-bench",
    "name": "Puente de Isquiotibiales con Pies en Banco",
    "nameEn": "Long-Lever Hamstring Bridge on Bench",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para puente de isquiotibiales con pies en banco con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en hamstrings.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "single-leg-isometric-calf-raise",
    "name": "Sostenimiento Isométrico de Gemelo en Punta de Pie",
    "nameEn": "Single-Leg Isometric Calf Raise Hold",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Sentadilla",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para sostenimiento isométrico de gemelo en punta de pie con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en calves.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "standing-banded-hip-flexor-pull",
    "name": "Tracción de Flexores de Cadera de Pie con Banda",
    "nameEn": "Standing Banded Knee Drive / Hip Flexor Pull",
    "primaryMuscle": "HipFlexors",
    "secondaryMuscles": [
      "Abs"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Band",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para tracción de flexores de cadera de pie con banda con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en hipflexors.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "seated-hip-internal-rotation-band",
    "name": "Rotación Interna de Cadera Sentado con Banda",
    "nameEn": "Seated Hip Internal Rotation with Band",
    "primaryMuscle": "Abductors",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Band",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Rotación",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para rotación interna de cadera sentado con banda con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en abductors.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "side-lying-hip-abduction-straight-leg",
    "name": "Elevación Lateral de Pierna Recta Tumbado",
    "nameEn": "Side-Lying Straight Leg Hip Abduction",
    "primaryMuscle": "Abductors",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Rehabilitación",
    "mechanics": "Aislamiento",
    "movementPattern": "Movilidad",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Estático",
    "instructions": [
      "Colócate en la posición indicada para elevación lateral de pierna recta tumbado con atención rigurosa a la postura anatómica neutra.",
      "Realiza la contracción o mantenimiento isométrico suave focalizando la conexión neuromuscular en abductors.",
      "Regresa despacio evitando compensaciones o movimientos de torsión en articulaciones adyacentes."
    ],
    "tips": [
      "Estos ejercicios están diseñados para el reacondicionamiento del tendón y la reactivación neuromuscular."
    ],
    "breathingCue": "Respiración diafragmática fluida y rítmica sin aguantar el aire.",
    "alternatives": [
      "scapular-wall-slides",
      "cat-cow-stretch"
    ]
  },
  {
    "id": "guillotine-bench-press",
    "name": "Press Guillotina con Barra al Cuello",
    "nameEn": "Guillotine Neck Bench Press",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para press guillotina con barra al cuello.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "incline-cable-chest-press",
    "name": "Press de Pecho Inclinado en Poleas Bajas",
    "nameEn": "Incline Low-to-High Cable Chest Press",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders",
      "Triceps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para press de pecho inclinado en poleas bajas.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "decline-cable-flyes",
    "name": "Cruces Declinados de Polea Alta hacia Abajo",
    "nameEn": "Decline High-to-Low Cable Flyes",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para cruces declinados de polea alta hacia abajo.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "floor-press-barbell",
    "name": "Press en el Suelo con Barra Olímpica",
    "nameEn": "Barbell Floor Press",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para press en el suelo con barra olímpica.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "dumbbell-pullover-chest",
    "name": "Pull-Over con Mancuerna Cruzado en Banco",
    "nameEn": "Cross-Bench Dumbbell Pullover",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Lats",
      "Triceps",
      "Serratus"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para pull-over con mancuerna cruzado en banco.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "smith-machine-incline-press",
    "name": "Press Inclinado en Máquina Smith",
    "nameEn": "Smith Machine Incline Bench Press",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders",
      "Triceps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "SmithMachine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para press inclinado en máquina smith.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "smith-machine-flat-press",
    "name": "Press Plano en Máquina Smith",
    "nameEn": "Smith Machine Flat Bench Press",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders",
      "Triceps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "SmithMachine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para press plano en máquina smith.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "neutral-grip-dumbbell-bench-press",
    "name": "Press de Banca con Mancuernas en Agarre Neutro",
    "nameEn": "Neutral Grip Dumbbell Bench Press",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para press de banca con mancuernas en agarre neutro.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "pendlay-row-barbell",
    "name": "Remo Pendlay Estricto desde el Suelo",
    "nameEn": "Strict Pendlay Barbell Row",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Lats",
      "Hamstrings",
      "Traps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para remo pendlay estricto desde el suelo.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "yates-row-underhand",
    "name": "Remo Yates con Agarre Supino Invertido",
    "nameEn": "Yates Underhand Barbell Row",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Biceps",
      "Lats"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para remo yates con agarre supino invertido.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "kroc-row-heavy-dumbbell",
    "name": "Remo Kroc Pesado a Altas Repeticiones",
    "nameEn": "Heavy Kroc Dumbbell Row",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Forearms",
      "Biceps",
      "Traps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Avanzado",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para remo kroc pesado a altas repeticiones.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "meadows-row-landmine",
    "name": "Remo Meadows en Landmine con Agarre Prono",
    "nameEn": "Meadows Landmine Single-Arm Row",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Lats",
      "Forearms"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para remo meadows en landmine con agarre prono.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "seal-row-dumbbell-bench",
    "name": "Remo Foca en Banco Elevado (Seal Row)",
    "nameEn": "Seal Row with Dumbbells on High Bench",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Traps",
      "Biceps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para remo foca en banco elevado (seal row).",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "mag-grip-lat-pulldown",
    "name": "Jalón al Pecho con Agarre Neutro Ergonómico (MAG)",
    "nameEn": "MAG Grip Neutral Lat Pulldown",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Back"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para jalón al pecho con agarre neutro ergonómico (mag).",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "kneeling-single-arm-lat-pulldown",
    "name": "Jalón Unilateral Arrodillado en Polea",
    "nameEn": "Kneeling Single-Arm Cable Lat Pulldown",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para jalón unilateral arrodillado en polea.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "lat-prayer-pulldown-rope",
    "name": "Oración Dorsal con Cuerda en Polea Alta",
    "nameEn": "Kneeling Cable Lat Prayer Pullover",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Back",
      "Triceps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para oración dorsal con cuerda en polea alta.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "trap-bar-deadlift-high-handles",
    "name": "Peso Muerto en Barra Hexagonal (Asas Altas)",
    "nameEn": "Trap Bar Deadlift High Handles",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings",
      "Traps",
      "Back"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Trap Bar",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para peso muerto en barra hexagonal (asas altas).",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "trap-bar-deadlift-low-handles",
    "name": "Peso Muerto en Barra Hexagonal (Asas Bajas)",
    "nameEn": "Trap Bar Deadlift Low Handles",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Quads",
      "Traps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Trap Bar",
    "difficulty": "Intermedio",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para peso muerto en barra hexagonal (asas bajas).",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "rack-pull-above-knee",
    "name": "Rack Pull por Encima de las Rodillas",
    "nameEn": "Above-the-Knee Barbell Rack Pull",
    "primaryMuscle": "Traps",
    "secondaryMuscles": [
      "Back",
      "Glutes",
      "Forearms"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para rack pull por encima de las rodillas.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "snatch-grip-barbell-shrug",
    "name": "Encogimientos con Barra Agarre de Arrancada",
    "nameEn": "Snatch-Grip Barbell Shrug",
    "primaryMuscle": "Traps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para encogimientos con barra agarre de arrancada.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "dumbbell-incline-shrug",
    "name": "Encogimientos con Mancuernas en Banco Inclinado",
    "nameEn": "Prone Incline Dumbbell Shrug",
    "primaryMuscle": "Traps",
    "secondaryMuscles": [
      "Back"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para encogimientos con mancuernas en banco inclinado.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "seated-behind-neck-press",
    "name": "Press Tras Nuca Sentado con Barra",
    "nameEn": "Seated Behind-the-Neck Barbell Press",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Triceps",
      "Traps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para press tras nuca sentado con barra.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "z-press-barbell-floor",
    "name": "Z-Press con Barra Sentado en el Suelo",
    "nameEn": "Barbell Z-Press on Floor",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Abs",
      "Triceps",
      "Traps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para z-press con barra sentado en el suelo.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "z-press-dumbbell-floor",
    "name": "Z-Press con Mancuernas en el Suelo",
    "nameEn": "Dumbbell Z-Press on Floor",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Abs",
      "Triceps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Intermedio",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para z-press con mancuernas en el suelo.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "cable-lateral-raise-behind-back",
    "name": "Elevaciones Laterales en Polea por Detrás de la Espalda",
    "nameEn": "Behind-the-Back Cable Lateral Raise",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para elevaciones laterales en polea por detrás de la espalda.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "egyptian-cable-lateral-raise",
    "name": "Elevación Lateral Egipcia Inclinada en Polea",
    "nameEn": "Leaning Egyptian Cable Lateral Raise",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para elevación lateral egipcia inclinada en polea.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "dumbbell-lu-raises",
    "name": "Elevaciones Lu Xiaojun Completas sobre Cabeza",
    "nameEn": "Dumbbell Lu Lateral Overhead Raises",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Traps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para elevaciones lu xiaojun completas sobre cabeza.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "reverse-pec-deck-rear-delts",
    "name": "Pájaro en Máquina Pec-Deck Inversa",
    "nameEn": "Reverse Pec-Deck Rear Delt Flye",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Traps",
      "Back"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para pájaro en máquina pec-deck inversa.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "incline-dumbbell-rear-delt-flye",
    "name": "Pájaros con Mancuernas en Banco Inclinado",
    "nameEn": "Incline Prone Dumbbell Rear Delt Flye",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Back",
      "Traps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para pájaros con mancuernas en banco inclinado.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "preacher-curl-ez-bar-machine",
    "name": "Curl Predicador en Máquina de Palanca",
    "nameEn": "Machine Preacher Arm Curl",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para curl predicador en máquina de palanca.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "cable-biceps-curl-straight-bar",
    "name": "Curl de Bíceps con Barra Recta en Polea Baja",
    "nameEn": "Standing Low Cable Biceps Curl",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para curl de bíceps con barra recta en polea baja.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "concentration-curl-seated",
    "name": "Curl Concentrado con Mancuerna Apoyo en Muslo",
    "nameEn": "Seated Concentration Dumbbell Curl",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para curl concentrado con mancuerna apoyo en muslo.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "drag-curl-barbell",
    "name": "Drag Curl con Barra Rozando el Torso",
    "nameEn": "Barbell Drag Curl",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para drag curl con barra rozando el torso.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "waiter-curl-dumbbell",
    "name": "Curl del Camarero con Una Sola Mancuerna",
    "nameEn": "Waiter Dumbbell Biceps Curl",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para curl del camarero con una sola mancuerna.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "cross-body-hammer-curl",
    "name": "Curl Martillo Cruzado al Pecho con Mancuerna",
    "nameEn": "Cross-Body Dumbbell Hammer Curl",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [
      "Biceps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para curl martillo cruzado al pecho con mancuerna.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "reverse-curl-ez-bar",
    "name": "Curl Invertido con Barra Z para Braquiorradial",
    "nameEn": "EZ-Bar Reverse Grip Biceps Curl",
    "primaryMuscle": "Forearms",
    "secondaryMuscles": [
      "Biceps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "EZBar",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para curl invertido con barra z para braquiorradial.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "seated-triceps-dip-machine",
    "name": "Fondos de Tríceps Sentado en Máquina",
    "nameEn": "Seated Dip Machine for Triceps",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Chest",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para fondos de tríceps sentado en máquina.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "tate-press-dumbbells",
    "name": "Press Tate con Mancuernas en Banco Plano",
    "nameEn": "Flat Bench Dumbbell Tate Press",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Chest"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para press tate con mancuernas en banco plano.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "california-press-barbell",
    "name": "Press California (Híbrido Cerrado + Press Francés)",
    "nameEn": "Barbell California Press",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Chest",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para press california (híbrido cerrado + press francés).",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "cable-kickback-triceps",
    "name": "Patada de Tríceps Unilateral en Polea Baja",
    "nameEn": "Single-Arm Cable Triceps Kickback",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para patada de tríceps unilateral en polea baja.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "diamond-pushdown-cable",
    "name": "Extensión de Tríceps con Agarre en V en Polea",
    "nameEn": "V-Bar Cable Triceps Pushdown",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para extensión de tríceps con agarre en v en polea.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "zercher-squat-barbell",
    "name": "Sentadilla Zercher con Barra en el Pliegue de los Codos",
    "nameEn": "Zercher Squat with Barbell in Elbow Crook",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Back",
      "Abs",
      "Biceps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para sentadilla zercher con barra en el pliegue de los codos.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "box-squat-barbell",
    "name": "Sentadilla a Cajón con Barra Olímpica",
    "nameEn": "Barbell Box Squat with Pause",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Quads",
      "Hamstrings"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para sentadilla a cajón con barra olímpica.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "safety-bar-squat",
    "name": "Sentadilla con Barra de Seguridad (SSB Squat)",
    "nameEn": "Safety Squat Bar (SSB) Squat",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Back"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para sentadilla con barra de seguridad (ssb squat).",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "pin-squat-anderson",
    "name": "Sentadilla Concéntrica desde Soportes (Anderson Squat)",
    "nameEn": "Pin Squat / Anderson Squat",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para sentadilla concéntrica desde soportes (anderson squat).",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "belt-squat-machine",
    "name": "Sentadilla con Cinturón en Máquina (Belt Squat)",
    "nameEn": "Belt Squat Machine (Spinal-Free)",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para sentadilla con cinturón en máquina (belt squat).",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "sissy-squat-bench-machine",
    "name": "Sentadilla Sissy en Banco Específico Bloqueado",
    "nameEn": "Sissy Squat Bench Machine Isolation",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para sentadilla sissy en banco específico bloqueado.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "pendulum-squat-machine",
    "name": "Sentadilla en Máquina de Péndulo",
    "nameEn": "Pendulum Squat Machine",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Intermedio",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para sentadilla en máquina de péndulo.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "walking-lunges-barbell",
    "name": "Zancadas Caminando con Barra al Cuello",
    "nameEn": "Barbell Walking Lunges",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Hamstrings",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Estocada",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para zancadas caminando con barra al cuello.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "reverse-lunge-smith-machine",
    "name": "Zancada Inversa en Máquina Smith",
    "nameEn": "Smith Machine Reverse Lunge",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Quads"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "SmithMachine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Estocada",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para zancada inversa en máquina smith.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "step-up-dumbbells-high-box",
    "name": "Subidas a Cajón Alto con Mancuernas",
    "nameEn": "High Box Step-Up with Dumbbells",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Quads"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Estocada",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para subidas a cajón alto con mancuernas.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "glute-ham-raise-ghd",
    "name": "Elevación Glúteo-Femoral en GHD (Glute Ham Raise)",
    "nameEn": "Glute Ham Raise on GHD Machine",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Calves",
      "LowerBack"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Avanzado",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para elevación glúteo-femoral en ghd (glute ham raise).",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "stiff-leg-deadlift-deficit",
    "name": "Peso Muerto Piernas Semirrígidas con Déficit",
    "nameEn": "Deficit Stiff-Legged Barbell Deadlift",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "LowerBack"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Avanzado",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para peso muerto piernas semirrígidas con déficit.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "single-leg-leg-press-45",
    "name": "Prensa de Piernas Unilateral a 45 Grados",
    "nameEn": "Single-Leg 45-Degree Leg Press",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para prensa de piernas unilateral a 45 grados.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "standing-single-leg-curl-machine",
    "name": "Curl Femoral de Pie en Máquina Unilateral",
    "nameEn": "Standing Single-Leg Hamstring Curl Machine",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Aislamiento",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para curl femoral de pie en máquina unilateral.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "donkey-calf-raise-machine",
    "name": "Elevación de Gemelos Estilo Burro (Donkey Calf)",
    "nameEn": "Donkey Calf Raise Machine",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para elevación de gemelos estilo burro (donkey calf).",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "leg-press-calf-raise",
    "name": "Elevación de Talones en Prensa de Piernas",
    "nameEn": "Leg Press Toe Press / Calf Raise",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para elevación de talones en prensa de piernas.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "smith-machine-standing-calf-raise",
    "name": "Elevación de Talones de Pie en Máquina Smith",
    "nameEn": "Smith Machine Standing Calf Raise on Block",
    "primaryMuscle": "Calves",
    "secondaryMuscles": [],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "SmithMachine",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para elevación de talones de pie en máquina smith.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "cable-pull-through-glutes",
    "name": "Pull-Through en Polea Baja con Cuerda para Glúteos",
    "nameEn": "Low Cable Pull-Through for Glutes",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings",
      "LowerBack"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Cable",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para pull-through en polea baja con cuerda para glúteos.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "frog-pump-glute-bodyweight",
    "name": "Frog Pumps para Glúteo Mayor en Suelo",
    "nameEn": "High-Rep Bodyweight Frog Pumps",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Adductors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Principiante",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para frog pumps para glúteo mayor en suelo.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "single-leg-hip-thrust-bench",
    "name": "Hip Thrust a Una Pierna en Banco con Mancuerna",
    "nameEn": "Single-Leg Dumbbell Hip Thrust",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Dumbbell",
    "difficulty": "Intermedio",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": true,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para hip thrust a una pierna en banco con mancuerna.",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "good-morning-safety-bar",
    "name": "Buenos Días con Barra de Seguridad (SSB)",
    "nameEn": "Safety Squat Bar Good Morning",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "LowerBack"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Barbell",
    "difficulty": "Intermedio",
    "category": "Hipertrofia",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Peso×Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta el equipamiento y adopta la colocación anatómica de inicio para buenos días con barra de seguridad (ssb).",
      "Ejecuta el recorrido concéntrico completo aplicando fuerza uniforme y sostenida.",
      "Controla la bajada excéntrica durante 2 a 3 segundos preservando la estabilidad articular."
    ],
    "tips": [
      "Prioriza el control excéntrico y la técnica antes de incrementar el tonelaje de carga."
    ],
    "breathingCue": "Exhala en la fase concéntrica positiva; inhala en la fase excéntrica negativa.",
    "alternatives": [
      "barbell-bench-press"
    ]
  },
  {
    "id": "trx-chest-press",
    "name": "Press de Pecho en Suspensión (TRX Chest Press)",
    "nameEn": "TRX Suspension Chest Press",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Triceps",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para press de pecho en suspensión (trx chest press).",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-chest-flye",
    "name": "Aperturas de Pecho en Suspensión (TRX Flye)",
    "nameEn": "TRX Suspension Chest Flye",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para aperturas de pecho en suspensión (trx flye).",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-inverted-row-high",
    "name": "Remo Invertido en TRX Agarre Alto",
    "nameEn": "TRX High Inverted Row",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Traps",
      "Biceps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para remo invertido en trx agarre alto.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-low-row-neutral",
    "name": "Remo en TRX con Agarre Neutro al Torso",
    "nameEn": "TRX Low Neutral Grip Row",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Biceps",
      "Back"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para remo en trx con agarre neutro al torso.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-single-arm-power-pull",
    "name": "Tirón de Potencia con Rotación en TRX (Power Pull)",
    "nameEn": "TRX Single-Arm Rotational Power Pull",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Abs",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para tirón de potencia con rotación en trx (power pull).",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-y-flye-deltoids",
    "name": "Aperturas en Y en Suspensión para Deltoides Posterior",
    "nameEn": "TRX Y-Deltoid Flye",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Traps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para aperturas en y en suspensión para deltoides posterior.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-t-flye-rhomboids",
    "name": "Aperturas en T en Suspensión para Romboides",
    "nameEn": "TRX T-Flye for Upper Back and Rhomboids",
    "primaryMuscle": "Back",
    "secondaryMuscles": [
      "Traps",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para aperturas en t en suspensión para romboides.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-biceps-curl-overhead",
    "name": "Curl de Bíceps en Suspensión",
    "nameEn": "TRX Suspension Biceps Curl",
    "primaryMuscle": "Biceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para curl de bíceps en suspensión.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-triceps-pressdown",
    "name": "Extensión de Tríceps sobre Cabeza en TRX",
    "nameEn": "TRX Overhead Triceps Extension",
    "primaryMuscle": "Triceps",
    "secondaryMuscles": [
      "Forearms"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Vertical",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para extensión de tríceps sobre cabeza en trx.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-pistol-squat-assisted",
    "name": "Sentadilla Pistola Asistida con TRX",
    "nameEn": "TRX Assisted Single-Leg Pistol Squat",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para sentadilla pistola asistida con trx.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-hamstring-curl-supine",
    "name": "Curl de Isquiotibiales en Suspensión Boca Arriba",
    "nameEn": "TRX Supine Hamstring Runner Curl",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para curl de isquiotibiales en suspensión boca arriba.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-atomic-push-up",
    "name": "Flexión Atómica con Pies en TRX (Push-Up + Crunch)",
    "nameEn": "TRX Atomic Push-Up to Pike",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Abs",
      "Triceps",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para flexión atómica con pies en trx (push-up + crunch).",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-plank-feet-suspended",
    "name": "Plancha Isométrica con Pies en TRX",
    "nameEn": "TRX Suspended Feet Forearm Plank",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Glutes",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para plancha isométrica con pies en trx.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-side-plank-suspended",
    "name": "Plancha Lateral con Pies Suspendidos en TRX",
    "nameEn": "TRX Suspended Side Plank",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Rotación",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para plancha lateral con pies suspendidos en trx.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-pikes-abdominals",
    "name": "Pica Abdominal en Suspensión (TRX Pike)",
    "nameEn": "TRX Abdominal Pike Drill",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para pica abdominal en suspensión (trx pike).",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-mountain-climbers",
    "name": "Escaladores Suspendidos en TRX",
    "nameEn": "TRX Suspended Mountain Climbers",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders",
      "HipFlexors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para escaladores suspendidos en trx.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-suspended-lunge",
    "name": "Zancada Búlgara en Suspensión (TRX Suspended Lunge)",
    "nameEn": "TRX Rear-Foot Suspended Lunge",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Estocada",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para zancada búlgara en suspensión (trx suspended lunge).",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-cossack-squat-assisted",
    "name": "Sentadilla Cosaca Lateral Asistida en TRX",
    "nameEn": "TRX Assisted Lateral Cossack Squat",
    "primaryMuscle": "Adductors",
    "secondaryMuscles": [
      "Quads",
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Estocada",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para sentadilla cosaca lateral asistida en trx.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-clock-press",
    "name": "Press del Reloj Asimétrico en Suspensión",
    "nameEn": "TRX Clock Press Multi-Angle Chest",
    "primaryMuscle": "Chest",
    "secondaryMuscles": [
      "Shoulders",
      "Triceps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Empuje Horizontal",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para press del reloj asimétrico en suspensión.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-alligator-jaw-flye",
    "name": "Apertura Cocodrilo Asimétrica en TRX",
    "nameEn": "TRX Alligator Diagonal Shoulder Flye",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Back",
      "Abs"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para apertura cocodrilo asimétrica en trx.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-curtsy-lunge-balance",
    "name": "Zancada Cruzada de Reverencia con TRX",
    "nameEn": "TRX Balance Curtsy Lunge",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Quads",
      "Abductors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Estocada",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para zancada cruzada de reverencia con trx.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-sprinter-start",
    "name": "Salida de Velocista en Suspensión (Sprinter Start)",
    "nameEn": "TRX Sprinter Start Explosive Drive",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Estocada",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para salida de velocista en suspensión (sprinter start).",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-single-leg-deadlift",
    "name": "Peso Muerto Unilateral Asistido en TRX",
    "nameEn": "TRX Assisted Single-Leg RDL",
    "primaryMuscle": "Hamstrings",
    "secondaryMuscles": [
      "Glutes",
      "Abs"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para peso muerto unilateral asistido en trx.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-body-saw-plank",
    "name": "Sierra Corporal Suspendida en TRX",
    "nameEn": "TRX Suspended Body Saw Plank",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para sierra corporal suspendida en trx.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-pendulum-oblique-swings",
    "name": "Péndulo de Piernas Suspendidas para Oblicuos",
    "nameEn": "TRX Suspended Oblique Pendulum Swings",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Rotación",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para péndulo de piernas suspendidas para oblicuos.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-face-pull-high",
    "name": "Face Pull en TRX con Rotación Externa",
    "nameEn": "TRX High Face Pull and External Rotate",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Traps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para face pull en trx con rotación externa.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-w-flye-external-rotation",
    "name": "Aperturas en W en Suspensión",
    "nameEn": "TRX W-Flye for Rotator Cuff and Mid Back",
    "primaryMuscle": "Shoulders",
    "secondaryMuscles": [
      "Traps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Horizontal",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para aperturas en w en suspensión.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-squat-jump-power",
    "name": "Sentadilla con Salto Asistida por TRX",
    "nameEn": "TRX Assisted Plyometric Squat Jump",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Glutes",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para sentadilla con salto asistida por trx.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-hip-abduction-supine",
    "name": "Abducción de Cadera con Pies Suspendidos",
    "nameEn": "TRX Supine Suspended Hip Abduction",
    "primaryMuscle": "Abductors",
    "secondaryMuscles": [
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Movilidad",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para abducción de cadera con pies suspendidos.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-hip-press-bridge",
    "name": "Puente de Caderas con Talones en TRX",
    "nameEn": "TRX Suspended Glute Bridge Press",
    "primaryMuscle": "Glutes",
    "secondaryMuscles": [
      "Hamstrings"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Bisagra de Cadera",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para puente de caderas con talones en trx.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-rollout-core",
    "name": "Rollout Abdominal en TRX de Pie",
    "nameEn": "TRX Standing Abdominal Rollout",
    "primaryMuscle": "Abs",
    "secondaryMuscles": [
      "Lats",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Anti-Extensión",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para rollout abdominal en trx de pie.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-overhead-squat",
    "name": "Sentadilla Profunda con Brazos en Y en TRX",
    "nameEn": "TRX Overhead Deep Squat Mobility",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Shoulders",
      "Back"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Sentadilla",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para sentadilla profunda con brazos en y en trx.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-swimmer-pull",
    "name": "Tirón de Nadador con Brazos Rectos en TRX",
    "nameEn": "TRX Straight-Arm Swimmer Lat Pull",
    "primaryMuscle": "Lats",
    "secondaryMuscles": [
      "Triceps",
      "Back"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Tirón Vertical",
    "isUnilateral": false,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para tirón de nadador con brazos rectos en trx.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-side-lunge-assisted",
    "name": "Zancada Lateral Asistida con TRX",
    "nameEn": "TRX Assisted Lateral Lunge",
    "primaryMuscle": "Quads",
    "secondaryMuscles": [
      "Adductors",
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Principiante",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Estocada",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para zancada lateral asistida con trx.",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "trx-burpee-single-leg",
    "name": "Burpee Unilateral con Pie en TRX (Avanzado)",
    "nameEn": "TRX Single-Leg Suspended Burpee",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Chest",
      "Quads",
      "Abs"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "TRX",
    "difficulty": "Avanzado",
    "category": "Funcional",
    "mechanics": "Compuesto",
    "movementPattern": "Explosivo",
    "isUnilateral": true,
    "trackingType": "Reps",
    "planeOfMotion": "Sagital",
    "forceType": "Empuje",
    "instructions": [
      "Ajusta la longitud de las correas y fija los anclajes con tensión constante para burpee unilateral con pie en trx (avanzado).",
      "Mantén la alineación axial de la columna vertebral y activa los estabilizadores del core.",
      "Ejecuta el rango de movimiento suavemente aprovechando la inestabilidad de las correas."
    ],
    "tips": [
      "Para aumentar o reducir la intensidad inmediatamente, varía el ángulo de inclinación respecto al punto de anclaje."
    ],
    "breathingCue": "Exhala en el esfuerzo principal; inhala al retornar con control.",
    "alternatives": [
      "push-up",
      "inverted-row"
    ]
  },
  {
    "id": "assault-bike-sprint",
    "name": "Sprint Máximo en Bicicleta de Aire (Air Bike)",
    "nameEn": "Air Bike All-Out Sprint",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Quads",
      "Shoulders",
      "Lats"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de sprint máximo en bicicleta de aire (air bike) a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "rowing-machine-500m",
    "name": "Remoergómetro Prueba de 500 Metros",
    "nameEn": "Concept2 Rowing Machine 500m Sprint",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Back",
      "Quads",
      "Hamstrings",
      "Biceps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de remoergómetro prueba de 500 metros a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "ski-erg-intervals",
    "name": "Intervalos en Simulador de Esquí (SkiErg)",
    "nameEn": "Concept2 SkiErg Sprint Intervals",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Lats",
      "Abs",
      "Triceps"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de intervalos en simulador de esquí (skierg) a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "battle-ropes-waves-alternating",
    "name": "Olas Alternas con Cuerdas de Batalla",
    "nameEn": "Alternating Battle Rope Waves",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Shoulders",
      "Forearms",
      "Abs"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Rope",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de olas alternas con cuerdas de batalla a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "battle-ropes-double-slams",
    "name": "Slams Dobles con Cuerdas de Batalla al Suelo",
    "nameEn": "Double Battle Rope Power Slams",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Lats",
      "Shoulders",
      "Abs"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Rope",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de slams dobles con cuerdas de batalla al suelo a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "battle-ropes-snake-variations",
    "name": "Movimiento de Serpiente con Cuerdas de Batalla",
    "nameEn": "Snake Waves on Battle Ropes",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Chest",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Rope",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de movimiento de serpiente con cuerdas de batalla a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "treadmill-incline-power-walk",
    "name": "Marcha Rápida en Cinta con Inclinación Máxima",
    "nameEn": "Steep Incline Treadmill Power Walk",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Calves",
      "Glutes",
      "Hamstrings"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de marcha rápida en cinta con inclinación máxima a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "stairmaster-intervals",
    "name": "Escaladora Continua en Intervalos (StairMaster)",
    "nameEn": "StairMaster Step Climber Intervals",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Glutes",
      "Quads",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Machine",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de escaladora continua en intervalos (stairmaster) a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "jump-rope-double-unders",
    "name": "Saltos Dobles a la Comba (Double Unders)",
    "nameEn": "CrossFit Double Unders Jump Rope",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Calves",
      "Forearms"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Rope",
    "difficulty": "Avanzado",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de saltos dobles a la comba (double unders) a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "shuttle-run-suicides",
    "name": "Carrera de Lanzadera de Conos (Suicidios)",
    "nameEn": "Pro Agility Shuttle Run Drill",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Quads",
      "Glutes",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de carrera de lanzadera de conos (suicidios) a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "boxer-skip-jump-rope",
    "name": "Paso de Boxeador Cruzado con Comba",
    "nameEn": "Boxer Skip Rhythm Jump Rope",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de paso de boxeador cruzado con comba a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "lateral-skater-bounds-continuous",
    "name": "Saltos de Patinador Continuos de Resistencia",
    "nameEn": "Continuous Lateral Skater Cardio",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Glutes",
      "Abductors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de saltos de patinador continuos de resistencia a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "plyometric-lunges-continuous",
    "name": "Zancadas Pliométricas Alternadas Rápidas",
    "nameEn": "Fast Jumping Switch Lunges",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Quads",
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de zancadas pliométricas alternadas rápidas a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "high-knee-sprint-rope",
    "name": "Sprint de Rodillas Arriba con Cuerda",
    "nameEn": "High-Knee Sprint with Jump Rope",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Calves",
      "Abs"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de sprint de rodillas arriba con cuerda a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "shadow-box-high-intensity",
    "name": "Sombra de Golpeo Continuo a Alta Intensidad",
    "nameEn": "High-Intensity Shadow Boxing Interval",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Shoulders",
      "Abs"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de sombra de golpeo continuo a alta intensidad a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "sled-sprint-high-speed",
    "name": "Sprint con Empuje de Trineo Ligero",
    "nameEn": "High-Speed Sled Push Sprint",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Quads",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Sled",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de sprint con empuje de trineo ligero a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "bear-crawl-sprint-forward",
    "name": "Gateo del Oso a Máxima Velocidad Frontal",
    "nameEn": "High-Speed Bear Crawl Sprint",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Abs",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de gateo del oso a máxima velocidad frontal a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "gorilla-hops-cardio",
    "name": "Saltos de Gorila Laterales Continuos",
    "nameEn": "Lateral Gorilla Hops Cardio Drill",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Quads",
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de saltos de gorila laterales continuos a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "fast-feet-football-drill",
    "name": "Pies Rápidos en el Sitio (Fast Feet Drill)",
    "nameEn": "Rapid Fire Fast Feet Football Drill",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Calves",
      "Quads"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de pies rápidos en el sitio (fast feet drill) a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "agility-ladder-in-and-out",
    "name": "Escalera de Agilidad: Entradas y Salidas",
    "nameEn": "Agility Ladder In-and-Out Footwork",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de escalera de agilidad: entradas y salidas a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "agility-ladder-icky-shuffle",
    "name": "Escalera de Agilidad: Icky Shuffle Rítmico",
    "nameEn": "Agility Ladder Icky Shuffle Drill",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Calves",
      "Glutes"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de escalera de agilidad: icky shuffle rítmico a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "jumping-jack-crossover",
    "name": "Saltos de Tijera con Cruce de Brazos y Pies",
    "nameEn": "Crossover Jumping Jacks",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Shoulders",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de saltos de tijera con cruce de brazos y pies a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "tuck-jump-burpee-complex",
    "name": "Burpee Explosivo con Salto de Rodillas al Pecho",
    "nameEn": "Burpee to Tuck Jump Complex",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Chest",
      "Quads",
      "Abs"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Avanzado",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de burpee explosivo con salto de rodillas al pecho a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "half-burpee-speed",
    "name": "Medio Burpee de Velocidad (Speed Sprawl)",
    "nameEn": "Speed Half Burpee without Push-Up",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Abs",
      "Quads"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de medio burpee de velocidad (speed sprawl) a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "seal-jacks-chest",
    "name": "Saltos de Foca con Palmada Frontal",
    "nameEn": "Seal Jacks Cardio Drill",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Chest",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de saltos de foca con palmada frontal a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "butt-kick-heel-taps",
    "name": "Talones a Glúteos con Toque de Manos Atrás",
    "nameEn": "Heel Tap Butt Kicks Fast Pace",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Hamstrings",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de talones a glúteos con toque de manos atrás a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "single-under-crossover-rope",
    "name": "Salto con Cruzada de Cuerda (Criss-Cross)",
    "nameEn": "Criss-Cross Jump Rope Drill",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Forearms",
      "Calves"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de salto con cruzada de cuerda (criss-cross) a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "broad-jump-to-backpedal",
    "name": "Salto de Longitud con Carrera de Retroceso",
    "nameEn": "Broad Jump with Fast Backpedal",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Glutes",
      "Quads"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de salto de longitud con carrera de retroceso a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "jumping-rope-side-straddle",
    "name": "Salto de Comba con Apertura Lateral de Piernas",
    "nameEn": "Side Straddle Jump Rope Footwork",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Calves",
      "Abductors"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de salto de comba con apertura lateral de piernas a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  },
  {
    "id": "turbo-climbers-ground",
    "name": "Escaladores Turbo a Máxima Cadencia",
    "nameEn": "Max Cadence Turbo Mountain Climbers",
    "primaryMuscle": "Cardio",
    "secondaryMuscles": [
      "Abs",
      "Shoulders"
    ],
    "stabilizers": [
      "Abs"
    ],
    "equipment": "Bodyweight",
    "difficulty": "Principiante",
    "category": "Cardio",
    "mechanics": "Compuesto",
    "movementPattern": "Cardiovascular",
    "isUnilateral": false,
    "trackingType": "Tiempo",
    "planeOfMotion": "Sagital",
    "forceType": "Cardio",
    "instructions": [
      "Mantén la postura erguida y comienza el ritmo de escaladores turbo a máxima cadencia a una cadencia sostenida.",
      "Enfoca el esfuerzo en la respiración diafragmática continua sin apneas prolongadas.",
      "Finaliza manteniendo la desaceleración gradual para permitir la recuperación cardíaca."
    ],
    "tips": [
      "Controla las zonas de frecuencia cardíaca según el objetivo (resistencia aeróbica o HIIT de alta potencia)."
    ],
    "breathingCue": "Respiración rítmica coordinada con los pasos o repeticiones del ejercicio.",
    "alternatives": [
      "jumping-jacks-cardio",
      "high-knees-drill"
    ]
  }
];
