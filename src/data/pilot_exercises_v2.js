/**
 * Primer lote de validación SDD (20 ejercicios piloto con especificación completa v2.0).
 * Cubre: Pecho, Espalda, Piernas, Hombros, Brazos, Core, Movilidad, Calistenia y Kettlebell.
 */

export const PILOT_EXERCISES_V2 = [
  // --- FUERZA: PECHO ---
  {
    id: 'barbell-bench-press',
    name: 'Press de Banca con Barra',
    nameEn: 'Barbell Bench Press',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Shoulders', 'Triceps'],
    stabilizers: ['Abs', 'Lats'],
    equipment: 'Barbell',
    difficulty: 'Intermedio',
    category: 'Fuerza',
    mechanics: 'Compuesto',
    movementPattern: 'Empuje Horizontal',
    isUnilateral: false,
    trackingType: 'Peso×Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Empuje',
    instructions: [
      'Acuéstate sobre el banco plano manteniendo 5 puntos de apoyo: pies firmes en el suelo, glúteos, espalda alta y cabeza sobre el tapizado.',
      'Sujeta la barra con agarre prono ligeramente más ancho que el ancho de los hombros y retrae las escápulas.',
      'Desengancha la barra de forma controlada y estabilízala directamente sobre la línea media del pecho con codos extendidos.',
      'Inhala y desciende la barra controladamente en una trayectoria ligeramente diagonal hacia la parte inferior del esternón.',
      'Exhala y empuja la barra con fuerza devolviéndola sobre el pecho sin perder la retracción escapular ni bloquear violentamente los codos.'
    ],
    tips: [
      'Mantén los codos en un ángulo aproximado de 45° a 75° respecto al torso, no los abras a 90°.',
      'Evita que las muñecas se doblen excesivamente hacia atrás durante el empuje.'
    ],
    breathingCue: 'Inhala en la bajada excéntrica; exhala durante la fase concéntrica de empuje.',
    alternatives: ['dumbbell-bench-press'],
    regressions: ['push-up']
  },
  {
    id: 'dumbbell-bench-press',
    name: 'Press de Banca con Mancuernas',
    nameEn: 'Dumbbell Bench Press',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Shoulders', 'Triceps'],
    stabilizers: ['Abs', 'Forearms'],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    category: 'Hipertrofia',
    mechanics: 'Compuesto',
    movementPattern: 'Empuje Horizontal',
    isUnilateral: false,
    trackingType: 'Peso×Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Empuje',
    instructions: [
      'Siéntate en el borde de un banco plano apoyando las mancuernas verticalmente sobre tus muslos.',
      'Túmbate hacia atrás impulsando las mancuernas con las rodillas hasta posicionarlas al lado del pecho con codos flexionados.',
      'Planta los pies firmemente en el suelo y estabiliza el torso con retracción escapular activa.',
      'Empuja verticalmente ambas mancuernas hacia arriba en un arco convergente hasta extender los brazos sin chocar las mancuernas.',
      'Desciende con cadencia lenta de 2 a 3 segundos sintiendo el estiramiento del pectoral antes de la siguiente repetición.'
    ],
    tips: [
      'Aprovecha el mayor rango de movimiento que permiten las mancuernas frente a la barra sin forzar la cápsula anterior del hombro.'
    ],
    breathingCue: 'Inhala en el descenso; exhala al empujar hacia el centro.',
    alternatives: ['barbell-bench-press'],
    regressions: ['push-up']
  },
  {
    id: 'push-up',
    name: 'Flexiones de Brazos',
    nameEn: 'Push-Up',
    primaryMuscle: 'Chest',
    secondaryMuscles: ['Shoulders', 'Triceps'],
    stabilizers: ['Abs', 'Glutes', 'Quads'],
    equipment: 'Bodyweight',
    difficulty: 'Principiante',
    category: 'Calistenia',
    mechanics: 'Compuesto',
    movementPattern: 'Empuje Horizontal',
    isUnilateral: false,
    trackingType: 'Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Empuje',
    instructions: [
      'Colócate en posición de plancha alta con las manos apoyadas en el suelo a una distancia ligeramente mayor que el ancho de los hombros.',
      'Activa abdomen y glúteos formando una línea recta continua desde los talones hasta la coronilla.',
      'Flexiona los codos en un ángulo de 45° respecto al cuerpo y baja todo el cuerpo en bloque hasta que el pecho quede a 2 cm del suelo.',
      'Empuja con las palmas contra el suelo hasta volver a la posición inicial, manteniendo la tensión en el core en todo momento.'
    ],
    tips: [
      'No dejes caer la pelvis ni arquees la zona lumbar durante el movimiento.'
    ],
    breathingCue: 'Inhala al descender; exhala al empujar hacia arriba.',
    alternatives: ['barbell-bench-press', 'dumbbell-bench-press'],
    progressions: ['barbell-bench-press']
  },

  // --- FUERZA: ESPALDA ---
  {
    id: 'barbell-deadlift',
    name: 'Peso Muerto Convencional con Barra',
    nameEn: 'Conventional Barbell Deadlift',
    primaryMuscle: 'Back',
    secondaryMuscles: ['Hamstrings', 'Glutes', 'Forearms', 'Traps'],
    stabilizers: ['Abs', 'LowerBack', 'Lats'],
    equipment: 'Barbell',
    difficulty: 'Avanzado',
    category: 'Fuerza',
    mechanics: 'Compuesto',
    movementPattern: 'Bisagra de Cadera',
    isUnilateral: false,
    trackingType: 'Peso×Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Tirón',
    instructions: [
      'Párate frente a la barra con los pies al ancho de las caderas, con la barra cruzando sobre la mitad del empeine del pie.',
      'Haz una bisagra de cadera hacia atrás y desciende el torso hasta agarrar la barra justo por fuera de las espinillas.',
      'Baja las caderas hasta que las espinillas toquen suavemente la barra, abre el pecho y crea tensión tirando de la holgura de la barra.',
      'Empuja el suelo con las piernas manteniendo la barra pegada a las piernas durante todo el recorrido hasta alcanzar la extensión completa.',
      'Desciende deslizando la barra por los muslos mediante bisagra de cadera antes de flexionar las rodillas para regresar al suelo.'
    ],
    tips: [
      'La columna debe permanecer neutra en todo el levantamiento; no redondees la zona lumbar bajo carga.'
    ],
    breathingCue: 'Inhala profundo con maniobra de Valsalva antes del despegue; exhala al completar el bloqueo arriba.',
    alternatives: ['romanian-deadlift'],
    regressions: ['kettlebell-deadlift']
  },
  {
    id: 'romanian-deadlift',
    name: 'Peso Muerto Rumano con Barra',
    nameEn: 'Romanian Deadlift (RDL)',
    primaryMuscle: 'Hamstrings',
    secondaryMuscles: ['Glutes', 'LowerBack', 'Forearms'],
    stabilizers: ['Abs', 'Lats', 'Traps'],
    equipment: 'Barbell',
    difficulty: 'Intermedio',
    category: 'Hipertrofia',
    mechanics: 'Compuesto',
    movementPattern: 'Bisagra de Cadera',
    isUnilateral: false,
    trackingType: 'Peso×Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Tirón',
    instructions: [
      'De pie con la barra sostenida con agarre prono al ancho de hombros, con rodillas con una ligera semiflexión constante.',
      'Inicia el movimiento empujando la pelvis hacia atrás, manteniendo la barra en contacto permanente con los muslos.',
      'Desciende el torso manteniendo la espalda recta hasta sentir un estiramiento marcado en los isquiotibiales (generalmente bajo las rodillas).',
      'Contrae glúteos e isquiotibiales empujando las caderas hacia adelante para regresar a la vertical erguida.'
    ],
    tips: [
      'Las rodillas no deben aumentar su flexión durante el descenso; el movimiento nace puramente del desplazamiento posterior de la pelvis.'
    ],
    breathingCue: 'Inhala al desplazar la cadera hacia atrás; exhala al retornar a la posición inicial.',
    alternatives: ['barbell-deadlift', 'kettlebell-deadlift'],
    regressions: ['kettlebell-deadlift']
  },
  {
    id: 'pull-up',
    name: 'Dominadas Pronas',
    nameEn: 'Pull-Up',
    primaryMuscle: 'Lats',
    secondaryMuscles: ['Biceps', 'Back', 'Forearms'],
    stabilizers: ['Abs', 'Traps'],
    equipment: 'Bodyweight',
    difficulty: 'Intermedio',
    category: 'Calistenia',
    mechanics: 'Compuesto',
    movementPattern: 'Tirón Vertical',
    isUnilateral: false,
    trackingType: 'Reps',
    planeOfMotion: 'Frontal',
    forceType: 'Tirón',
    instructions: [
      'Cuélgate de una barra fija con agarre prono con las manos más separadas que el ancho de los hombros y brazos completamente estirados.',
      'Inicia la tracción deprimiendo las escápulas hacia abajo y hacia atrás antes de doblar los codos.',
      'Tira con los dorsales llevando el pecho hacia la barra hasta que la barbilla supere con claridad el nivel de la barra.',
      'Desciende de forma controlada hasta la posición de cuelgue pasivo completo sintiendo el estiramiento dorsal.'
    ],
    tips: [
      'Evita balancear las piernas o impulsarte con patadas (kipping) si buscas desarrollo de fuerza e hipertrofia estricta.'
    ],
    breathingCue: 'Exhala en la subida al traccionar; inhala en el descenso controlado.',
    alternatives: ['lat-pulldown'],
    regressions: ['lat-pulldown']
  },
  {
    id: 'lat-pulldown',
    name: 'Jalón al Pecho en Polea',
    nameEn: 'Lat Pulldown',
    primaryMuscle: 'Lats',
    secondaryMuscles: ['Biceps', 'Back', 'Forearms'],
    stabilizers: ['Abs'],
    equipment: 'Cable',
    difficulty: 'Principiante',
    category: 'Hipertrofia',
    mechanics: 'Compuesto',
    movementPattern: 'Tirón Vertical',
    isUnilateral: false,
    trackingType: 'Peso×Reps',
    planeOfMotion: 'Frontal',
    forceType: 'Tirón',
    instructions: [
      'Siéntate en la máquina de jalón ajustando los rodillos firmemente sobre los muslos para anclar el cuerpo.',
      'Agarra la barra ancha con agarre prono y reclina el torso sutilmente hacia atrás unos 10° a 15°.',
      'Tira de la barra hacia la parte superior del pecho guiando con los codos hacia abajo y hacia los lados.',
      'Haz una pausa de un segundo contrayendo la musculatura dorsal y extiende los brazos de regreso con lentitud.'
    ],
    tips: [
      'No lleves nunca la barra por detrás de la nuca para proteger la articulación glenohumeral y la columna cervical.'
    ],
    breathingCue: 'Exhala al tirar de la barra hacia el pecho; inhala al permitir que la polea regrese arriba.',
    alternatives: ['pull-up'],
    progressions: ['pull-up']
  },

  // --- FUERZA: PIERNAS ---
  {
    id: 'barbell-back-squat',
    name: 'Sentadilla Trasera con Barra',
    nameEn: 'Barbell Back Squat',
    primaryMuscle: 'Quads',
    secondaryMuscles: ['Glutes', 'Hamstrings', 'Calves'],
    stabilizers: ['Abs', 'LowerBack'],
    equipment: 'Barbell',
    difficulty: 'Intermedio',
    category: 'Fuerza',
    mechanics: 'Compuesto',
    movementPattern: 'Sentadilla',
    isUnilateral: false,
    trackingType: 'Peso×Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Empuje',
    instructions: [
      'Apoya la barra sobre los trapecios (barra alta) o deltoides posteriores (barra baja) y desengánchala dando dos pasos hacia atrás.',
      'Coloca los pies al ancho de hombros con las puntas ligeramente dirigidas hacia afuera (15° a 30°).',
      'Inhala profundo, flexiona caderas y rodillas simultáneamente llevando la pelvis hacia abajo y atrás.',
      'Desciende hasta que el pliegue de la cadera quede por debajo de la parte superior de las rodillas (rompiendo el paralelo).',
      'Empuja con todo el pie contra el suelo extendiendo rodillas y caderas con potencia hasta erguirte por completo.'
    ],
    tips: [
      'Asegúrate de que las rodillas sigan la misma dirección que la punta de los pies sin colapsar hacia adentro (valgo).'
    ],
    breathingCue: 'Inhala y bloquea core antes de bajar; exhala al pasar el punto de estancamiento en la subida.',
    alternatives: ['goblet-squat'],
    regressions: ['goblet-squat']
  },
  {
    id: 'goblet-squat',
    name: 'Sentadilla Goblet con Pesa Rusa o Mancuerna',
    nameEn: 'Goblet Squat',
    primaryMuscle: 'Quads',
    secondaryMuscles: ['Glutes', 'Calves'],
    stabilizers: ['Abs', 'Biceps', 'Forearms'],
    equipment: 'Kettlebell',
    difficulty: 'Principiante',
    category: 'Fuerza',
    mechanics: 'Compuesto',
    movementPattern: 'Sentadilla',
    isUnilateral: false,
    trackingType: 'Peso×Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Empuje',
    instructions: [
      'Sostén una pesa rusa por los cuernos o una mancuerna verticalmente pegada al pecho con ambas manos.',
      'Párate con los pies ligeramente más anchos que la anchura de las caderas con las puntas abiertas.',
      'Desciende en sentadilla manteniendo el torso muy vertical y los codos por dentro de las rodillas.',
      'Llega a la profundidad máxima manteniendo los talones pegados al suelo y vuelve a subir empujando el suelo.'
    ],
    tips: [
      'Excelente ejercicio para aprender la mecánica de sentadilla con torso vertical sin sobrecargar la espalda baja.'
    ],
    breathingCue: 'Inhala en el descenso; exhala al retornar a la posición inicial.',
    alternatives: ['barbell-back-squat'],
    progressions: ['barbell-back-squat']
  },
  {
    id: 'bulgarian-split-squat',
    name: 'Sentadilla Búlgara con Mancuernas',
    nameEn: 'Dumbbell Bulgarian Split Squat',
    primaryMuscle: 'Quads',
    secondaryMuscles: ['Glutes', 'Hamstrings'],
    stabilizers: ['Calves', 'Abs', 'Adductors'],
    equipment: 'Dumbbell',
    difficulty: 'Intermedio',
    category: 'Hipertrofia',
    mechanics: 'Compuesto',
    movementPattern: 'Estocada',
    isUnilateral: true,
    trackingType: 'Peso×Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Empuje',
    instructions: [
      'De espaldas a un banco plano, apoya el empeine de un pie sobre el banco a una distancia aproximada de un paso amplio.',
      'Sujeta una mancuerna en cada mano a los costados del cuerpo manteniendo la postura erguida.',
      'Desciende flexionando la pierna delantera hasta que el muslo quede paralelo al suelo y la rodilla trasera casi toque el piso.',
      'Empuja a través del talón de la pierna delantera para regresar a la posición erguida.'
    ],
    tips: [
      'Para enfatizar más el glúteo inclina ligeramente el torso hacia adelante; para cuádriceps mantén el torso completamente vertical.'
    ],
    breathingCue: 'Inhala al descender; exhala al empujar hacia la posición inicial.',
    alternatives: ['goblet-squat']
  },

  // --- FUERZA: HOMBROS ---
  {
    id: 'overhead-press',
    name: 'Press Militar de Pie con Barra',
    nameEn: 'Overhead Press (OHP)',
    primaryMuscle: 'Shoulders',
    secondaryMuscles: ['Triceps', 'Traps', 'Serratus'],
    stabilizers: ['Abs', 'Glutes', 'LowerBack'],
    equipment: 'Barbell',
    difficulty: 'Intermedio',
    category: 'Fuerza',
    mechanics: 'Compuesto',
    movementPattern: 'Empuje Vertical',
    isUnilateral: false,
    trackingType: 'Peso×Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Empuje',
    instructions: [
      'Párate erguido con la barra apoyada sobre las clavículas, manos a una anchura justo por fuera de los hombros con codos ligeramente adelantados.',
      'Aprieta glúteos y core firmemente para crear una base rígida inamovible.',
      'Inclina levemente la cabeza hacia atrás para despejar la trayectoria y empuja la barra verticalmente en línea recta.',
      'Una vez que la barra pasa la frente, adelanta la cabeza a su posición neutra y bloquea los brazos sobre la corona de la cabeza.',
      'Desciende la barra con control siguiendo el mismo camino hasta el pecho.'
    ],
    tips: [
      'No arquees en exceso la zona lumbar para empujar el peso; si ocurre, el peso es excesivo.'
    ],
    breathingCue: 'Inhala en el pecho antes del empuje; exhala en el bloqueo superior.',
    alternatives: ['dumbbell-shoulder-press']
  },
  {
    id: 'dumbbell-shoulder-press',
    name: 'Press de Hombros Sentado con Mancuernas',
    nameEn: 'Seated Dumbbell Shoulder Press',
    primaryMuscle: 'Shoulders',
    secondaryMuscles: ['Triceps', 'Traps'],
    stabilizers: ['Abs'],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    category: 'Hipertrofia',
    mechanics: 'Compuesto',
    movementPattern: 'Empuje Vertical',
    isUnilateral: false,
    trackingType: 'Peso×Reps',
    planeOfMotion: 'Frontal',
    forceType: 'Empuje',
    instructions: [
      'Siéntate en un banco con respaldo vertical manteniendo la espalda firmemente apoyada.',
      'Lleva las mancuernas a la altura de las orejas con los codos abiertos apuntando hacia los lados.',
      'Empuja las mancuernas hacia arriba en un movimiento coordinado hasta extender los brazos casi por completo.',
      'Baja lentamente hasta la altura inicial sintiendo el control del deltoides.'
    ],
    tips: [
      'Evita chocar las mancuernas entre sí en la parte superior para mantener la tensión muscular continua.'
    ],
    breathingCue: 'Exhala al empujar hacia arriba; inhala en el descenso.',
    alternatives: ['overhead-press']
  },

  // --- BRAZOS: BÍCEPS / TRÍCEPS ---
  {
    id: 'barbell-biceps-curl',
    name: 'Curl de Bíceps con Barra',
    nameEn: 'Barbell Biceps Curl',
    primaryMuscle: 'Biceps',
    secondaryMuscles: ['Forearms'],
    stabilizers: ['Abs', 'Shoulders'],
    equipment: 'Barbell',
    difficulty: 'Principiante',
    category: 'Hipertrofia',
    mechanics: 'Aislamiento',
    movementPattern: 'Tirón Vertical',
    isUnilateral: false,
    trackingType: 'Peso×Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Flexión/Extensión',
    instructions: [
      'De pie con los pies al ancho de caderas, sujeta la barra con agarre supino (palmas al frente) al ancho de hombros.',
      'Mantén los codos pegados a los costados del torso y la espalda completamente quieta.',
      'Flexiona los codos contrayendo los bíceps para elevar la barra hacia el pecho sin mover los hombros hacia adelante.',
      'Aprieta los bíceps en el punto máximo de contracción y desciende la barra con control total hasta extender casi por completo.'
    ],
    tips: [
      'No utilices balanceo lumbar para iniciar la repetición; aísla el trabajo estrictamente en los brazos.'
    ],
    breathingCue: 'Exhala al subir la barra; inhala al bajar.',
    alternatives: ['dumbbell-biceps-curl']
  },
  {
    id: 'dumbbell-biceps-curl',
    name: 'Curl de Bíceps Alterno con Mancuernas',
    nameEn: 'Alternating Dumbbell Biceps Curl',
    primaryMuscle: 'Biceps',
    secondaryMuscles: ['Forearms'],
    stabilizers: ['Abs'],
    equipment: 'Dumbbell',
    difficulty: 'Principiante',
    category: 'Hipertrofia',
    mechanics: 'Aislamiento',
    movementPattern: 'Tirón Vertical',
    isUnilateral: true,
    trackingType: 'Peso×Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Flexión/Extensión',
    instructions: [
      'De pie con una mancuerna en cada mano a los lados del cuerpo, palmas orientadas hacia los muslos.',
      'Eleva una mancuerna girando la muñeca (supinación) a medida que asciende hasta que la palma apunte al hombro.',
      'Contrae intensamente el bíceps en la cima y desciende con control a la posición neutra inicial.',
      'Repite el movimiento con el brazo contrario alternando repetición por repetición.'
    ],
    tips: [
      'La supinación activa de la muñeca maximiza el reclutamiento de ambas cabezas del bíceps braquial.'
    ],
    breathingCue: 'Exhala al flexionar el codo; inhala al descender.',
    alternatives: ['barbell-biceps-curl']
  },
  {
    id: 'triceps-cable-pushdown',
    name: 'Extensión de Tríceps en Polea con Cuerda',
    nameEn: 'Triceps Rope Pushdown',
    primaryMuscle: 'Triceps',
    secondaryMuscles: ['Forearms'],
    stabilizers: ['Abs'],
    equipment: 'Cable',
    difficulty: 'Principiante',
    category: 'Hipertrofia',
    mechanics: 'Aislamiento',
    movementPattern: 'Empuje Vertical',
    isUnilateral: false,
    trackingType: 'Peso×Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Flexión/Extensión',
    instructions: [
      'Acopla la cuerda a una polea alta y sujétala con ambas manos cerca del extremo de los topes.',
      'Inclina el torso ligeramente hacia adelante con rodillas suaves y fija los codos firmemente contra tus costados.',
      'Extiende los brazos hacia abajo empujando la cuerda hacia el suelo.',
      'En la parte final del recorrido, separa los extremos de la cuerda hacia afuera para una contracción pico de la cabeza lateral.',
      'Regresa la cuerda hacia el pecho sin permitir que los codos se desplacen hacia adelante.'
    ],
    tips: [
      'El único segmento móvil debe ser el antebrazo; el brazo superior debe permanecer bloqueado.'
    ],
    breathingCue: 'Exhala al empujar la cuerda hacia abajo; inhala al permitir que suba controladamente.',
    alternatives: ['dumbbell-biceps-curl']
  },

  // --- CORE & ANTI-MOVIMIENTO ---
  {
    id: 'plank',
    name: 'Plancha Abdominal Isométrica',
    nameEn: 'Forearm Plank',
    primaryMuscle: 'Abs',
    secondaryMuscles: ['Glutes', 'Shoulders', 'Quads'],
    stabilizers: ['Serratus', 'LowerBack'],
    equipment: 'Bodyweight',
    difficulty: 'Principiante',
    category: 'Isométrico',
    mechanics: 'Compuesto',
    movementPattern: 'Anti-Extensión',
    isUnilateral: false,
    trackingType: 'Tiempo',
    planeOfMotion: 'Sagital',
    forceType: 'Estático',
    instructions: [
      'Colócate boca abajo apoyando los antebrazos en el suelo con los codos directamente alineados bajo los hombros.',
      'Eleva el cuerpo apoyando únicamente las puntas de los pies y los antebrazos.',
      'Genera una retroversión pélvica sutil, activa glúteos fuertemente y empuja el suelo con los codos para activar los serratos.',
      'Sostén la posición manteniendo una respiración fluida y constante sin dejar caer la cadera.'
    ],
    tips: [
      'Prioriza la tensión máxima corporal activa durante periodos de 30-45 segundos en vez de aguantar minutos con técnica deficiente.'
    ],
    breathingCue: 'Respira de forma diafragmática y corta, manteniendo la tensión isométrica abdominal.',
    alternatives: ['dead-bug']
  },
  {
    id: 'dead-bug',
    name: 'Dead Bug (Bicho Muerto)',
    nameEn: 'Dead Bug',
    primaryMuscle: 'Abs',
    secondaryMuscles: ['HipFlexors'],
    stabilizers: ['LowerBack'],
    equipment: 'Bodyweight',
    difficulty: 'Principiante',
    category: 'Movilidad',
    mechanics: 'Compuesto',
    movementPattern: 'Anti-Extensión',
    isUnilateral: true,
    trackingType: 'Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Core',
    instructions: [
      'Acuéstate boca arriba en el suelo con los brazos extendidos hacia el techo y las rodillas y caderas flexionadas a 90° (posición de mesa).',
      'Presiona activamente la zona lumbar contra el suelo eliminando cualquier arco o hueco.',
      'Extiende lentamente el brazo derecho hacia atrás por encima de la cabeza mientras extiendes simultáneamente la pierna izquierda hacia adelante a ras del suelo.',
      'Regresa ambos segmentos a la posición inicial y alterna con el brazo izquierdo y pierna derecha.'
    ],
    tips: [
      'Si sientes que la zona lumbar se despega del suelo, acorta el rango de extensión de la pierna.'
    ],
    breathingCue: 'Exhala al extender brazo y pierna opuesta; inhala al regresar al centro.',
    alternatives: ['plank']
  },

  // --- KETTLEBELL & MOVILIDAD ARTICULAR ---
  {
    id: 'kettlebell-swing',
    name: 'Swing con Pesa Rusa Ruso (Estilo Hardstyle)',
    nameEn: 'Hardstyle Kettlebell Swing',
    primaryMuscle: 'Glutes',
    secondaryMuscles: ['Hamstrings', 'LowerBack', 'Forearms'],
    stabilizers: ['Abs', 'Lats', 'Shoulders'],
    equipment: 'Kettlebell',
    difficulty: 'Intermedio',
    category: 'Kettlebell',
    mechanics: 'Compuesto',
    movementPattern: 'Bisagra de Cadera',
    isUnilateral: false,
    trackingType: 'Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Tirón',
    instructions: [
      'Coloca la pesa rusa a un paso frente a ti; haz bisagra de cadera con rodillas suaves e inclina el torso para sujetar el asa con ambas manos.',
      'Tira de la pesa hacia atrás entre las piernas (caminata del balón) activando los dorsales fuertemente.',
      'Extiende las caderas y rodillas con potencia explosiva propulsando la pesa hacia adelante por inercia de la pelvis.',
      'Deja que la pesa flote brevemente hasta la altura del pecho sin usar los brazos para levantarla.',
      'Guía la pesa en su caída libre de regreso entre las piernas absorbiendo el impacto con otra bisagra de cadera fluida.'
    ],
    tips: [
      'El swing es un movimiento balístico de bisagra de cadera posterior, no una sentadilla frontal.'
    ],
    breathingCue: 'Inhala en el pase hacia atrás; exhala con un sonido seco y percusivo al bloquear las caderas.',
    alternatives: ['kettlebell-deadlift'],
    progressions: ['barbell-deadlift'],
    regressions: ['kettlebell-deadlift']
  },
  {
    id: 'kettlebell-deadlift',
    name: 'Peso Muerto con Pesa Rusa',
    nameEn: 'Kettlebell Deadlift',
    primaryMuscle: 'Glutes',
    secondaryMuscles: ['Hamstrings', 'LowerBack'],
    stabilizers: ['Abs', 'Forearms'],
    equipment: 'Kettlebell',
    difficulty: 'Principiante',
    category: 'Kettlebell',
    mechanics: 'Compuesto',
    movementPattern: 'Bisagra de Cadera',
    isUnilateral: false,
    trackingType: 'Peso×Reps',
    planeOfMotion: 'Sagital',
    forceType: 'Tirón',
    instructions: [
      'Coloca la pesa rusa en el suelo entre tus dos pies, alineada con los maléolos de los tobillos.',
      'Realiza una bisagra de cadera manteniendo la espalda neutra y agarra el asa con ambas manos.',
      'Contrae dorsales y empuja el suelo con los talones extendiendo las caderas hasta quedar erguido.',
      'Desciende deslizando la cadera hacia atrás para apoyar la pesa en el suelo entre repeticiones.'
    ],
    tips: [
      'Excelente ejercicio preparatorio para interiorizar la bisagra de cadera antes de usar barras olímpicas.'
    ],
    breathingCue: 'Inhala abajo; exhala al erguirte.',
    alternatives: ['romanian-deadlift'],
    progressions: ['kettlebell-swing', 'barbell-deadlift']
  },
  {
    id: 'worlds-greatest-stretch',
    name: 'El Mejor Estiramiento del Mundo (World’s Greatest Stretch)',
    nameEn: "World's Greatest Stretch",
    primaryMuscle: 'HipFlexors',
    secondaryMuscles: ['Hamstrings', 'Glutes', 'Back', 'Adductors'],
    stabilizers: ['Shoulders', 'Abs'],
    equipment: 'Bodyweight',
    difficulty: 'Principiante',
    category: 'Movilidad',
    mechanics: 'Compuesto',
    movementPattern: 'Movilidad',
    isUnilateral: true,
    trackingType: 'Reps',
    planeOfMotion: 'Multi-plano',
    forceType: 'Estático',
    instructions: [
      'Da un paso largo al frente entrando en posición de estocada profunda y apoya ambas manos en el suelo por dentro del pie delantero.',
      'Lleva el codo del mismo lado que el pie adelantado hacia el empeine para intensificar la apertura de cadera.',
      'Rota el torso hacia el lado del pie delantero extendiendo ese brazo verticalmente hacia el techo siguiendo la mano con la mirada.',
      'Apoya la mano en el suelo, extiende la pierna delantera llevando las caderas hacia atrás para estirar el isquiotibial.',
      'Regresa y repite la secuencia completa con el lado opuesto.'
    ],
    tips: [
      'Fluye a través de cada fase sin rebotes, manteniendo cada posición durante 2 a 3 segundos.'
    ],
    breathingCue: 'Inhala al rotar el torso y abrir el pecho al techo; exhala al regresar la mano al suelo.',
    alternatives: ['dead-bug']
  }
];
