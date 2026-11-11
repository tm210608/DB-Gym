/**
 * Script de migración enriquecida para los 86 ejercicios originales al formato SDD v2.0
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const originalData = JSON.parse(fs.readFileSync(path.join(__dirname, '../exercises.json'), 'utf8'));

// Mapeos inteligentes para enriquecer los campos que faltaban
const patternMap = {
  'Chest': 'Empuje Horizontal',
  'Shoulders': 'Empuje Vertical',
  'Triceps': 'Empuje Vertical',
  'Back': 'Tirón Horizontal',
  'Lats': 'Tirón Vertical',
  'Biceps': 'Tirón Vertical',
  'Quads': 'Sentadilla',
  'Hamstrings': 'Bisagra de Cadera',
  'Glutes': 'Bisagra de Cadera',
  'Calves': 'Sentadilla',
  'Abs': 'Anti-Extensión',
  'Forearms': 'Tirón Horizontal',
  'Cardio': 'Cardiovascular'
};

const categoryMap = {
  'Cardio': 'Cardio',
  'Abs': 'Isométrico',
};

const enriched = originalData.map(ex => {
  const isCardio = ex.primaryMuscle === 'Cardio';
  const isAbs = ex.primaryMuscle === 'Abs';
  const isIsolation = ['Biceps', 'Triceps', 'Calves', 'Forearms'].includes(ex.primaryMuscle) || 
                      ex.name.toLowerCase().includes('curl') || 
                      ex.name.toLowerCase().includes('elevaciones') || 
                      ex.name.toLowerCase().includes('aperturas') ||
                      ex.name.toLowerCase().includes('extensión') ||
                      ex.name.toLowerCase().includes('patada');

  // Determinar categoría
  let category = 'Hipertrofia';
  if (isCardio) category = 'Cardio';
  else if (ex.difficulty === 'Avanzado' && !isIsolation) category = 'Fuerza';
  else if (ex.equipment === 'Bodyweight' && !isAbs) category = 'Calistenia';
  else if (isAbs) category = 'Isométrico';

  // Mecánica
  const mechanics = isIsolation ? 'Aislamiento' : 'Compuesto';

  // Patrón de movimiento
  let movementPattern = patternMap[ex.primaryMuscle] || 'Movilidad';
  if (ex.name.toLowerCase().includes('peso muerto') || ex.name.toLowerCase().includes('deadlift')) {
    movementPattern = 'Bisagra de Cadera';
  } else if (ex.name.toLowerCase().includes('jalón') || ex.name.toLowerCase().includes('dominada') || ex.name.toLowerCase().includes('pulldown')) {
    movementPattern = 'Tirón Vertical';
  } else if (ex.name.toLowerCase().includes('press de banca') || ex.name.toLowerCase().includes('flexion')) {
    movementPattern = 'Empuje Horizontal';
  } else if (ex.name.toLowerCase().includes('militar') || ex.name.toLowerCase().includes('overhead') || ex.name.toLowerCase().includes('hombro')) {
    movementPattern = 'Empuje Vertical';
  } else if (ex.name.toLowerCase().includes('zancada') || ex.name.toLowerCase().includes('lunge') || ex.name.toLowerCase().includes('búlgara')) {
    movementPattern = 'Estocada';
  }

  // Estabilizadores
  const stabilizers = [];
  if (mechanics === 'Compuesto') {
    if (!['Abs'].includes(ex.primaryMuscle)) stabilizers.push('Abs');
    if (['Quads', 'Hamstrings', 'Back'].includes(ex.primaryMuscle)) stabilizers.push('LowerBack');
  }

  // Unilateral
  const isUnilateral = ex.name.toLowerCase().includes('unilateral') || 
                       ex.name.toLowerCase().includes('a una mano') || 
                       ex.name.toLowerCase().includes('alterno') || 
                       ex.name.toLowerCase().includes('zancada') || 
                       ex.name.toLowerCase().includes('búlgara') ||
                       ex.name.toLowerCase().includes('lunge');

  // Tipo de tracking
  let trackingType = 'Peso×Reps';
  if (isCardio) trackingType = 'Tiempo';
  else if (ex.equipment === 'Bodyweight' && !ex.name.toLowerCase().includes('lastre')) trackingType = 'Reps';
  else if (isAbs && ex.name.toLowerCase().includes('plancha')) trackingType = 'Tiempo';

  // Sanitizar alternativas huérfanas conocidas que rompían integridad
  const validOriginalIds = new Set(originalData.map(e => e.id));
  const cleanAlternatives = (ex.alternatives || []).filter(altId => validOriginalIds.has(altId) && altId !== ex.id);

  return {
    ...ex,
    category,
    mechanics,
    movementPattern,
    stabilizers: stabilizers.length > 0 ? stabilizers : undefined,
    isUnilateral,
    trackingType,
    planeOfMotion: 'Sagital',
    alternatives: cleanAlternatives,
    tips: [
      `Mantén la tensión muscular controlada y evita movimientos bruscos en la fase excéntrica.`
    ],
    breathingCue: 'Exhala en la fase concéntrica de esfuerzo y toma aire en la fase excéntrica de retorno.'
  };
});

fs.writeFileSync(
  path.join(__dirname, '../src/data/batches/batch_00_base86.json'),
  JSON.stringify(enriched, null, 2),
  'utf8'
);

console.log(`✅ Base de 86 ejercicios migrada y enriquecida con éxito a batch_00_base86.json.`);
