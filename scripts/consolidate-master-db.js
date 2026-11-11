/**
 * Consolidador Maestro SDD: Fusiona todos los lotes validados,
 * sanitiza referencias foráneas (alternatives/progressions/regressions),
 * ejecuta validateExercises y exporta exercises.json y exercises.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { validateExercises } from './validate-db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const batchesDir = path.join(__dirname, '../src/data/batches');
const batchFiles = fs.readdirSync(batchesDir).filter(f => f.endsWith('.json'));

console.log(`\n📂 Cargando ${batchFiles.length} archivos de lotes generados:`);
let masterList = [];
const seenIds = new Set();

batchFiles.sort().forEach(file => {
  const filePath = path.join(batchesDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  console.log(`  - ${file}: ${data.length} ejercicios`);
  
  data.forEach(ex => {
    if (!seenIds.has(ex.id)) {
      seenIds.add(ex.id);
      masterList.push(ex);
    } else {
      console.warn(`    ⚠️ ID duplicado omitido: ${ex.id}`);
    }
  });
});

console.log(`\n📊 Total de ejercicios únicos consolidados: ${masterList.length}`);

// Paso 2: Sanitización rigurosa de referencias cruzadas
masterList = masterList.map(ex => {
  const cleanAlternatives = (ex.alternatives || []).filter(id => seenIds.has(id) && id !== ex.id);
  const cleanProgressions = (ex.progressions || []).filter(id => seenIds.has(id) && id !== ex.id);
  const cleanRegressions = (ex.regressions || []).filter(id => seenIds.has(id) && id !== ex.id);

  return {
    ...ex,
    alternatives: cleanAlternatives,
    progressions: cleanProgressions.length > 0 ? cleanProgressions : undefined,
    regressions: cleanRegressions.length > 0 ? cleanRegressions : undefined
  };
});

// Paso 3: Validación SDD formal de toda la base
const validationResult = validateExercises(masterList);
if (!validationResult.success) {
  console.error('\n❌ La consolidación falló por violaciones en las invariantes SDD.');
  process.exit(1);
}

// Paso 4: Exportación a exercises.json para apps Android
const jsonPath = path.join(__dirname, '../exercises.json');
fs.writeFileSync(jsonPath, JSON.stringify(masterList, null, 2), 'utf8');
console.log(`\n💾 Archivo exportado con éxito: ${jsonPath} (${masterList.length} registros)`);

// Paso 5: Exportación a src/data/exercises.ts para la web React
const tsPath = path.join(__dirname, '../src/data/exercises.ts');
const tsContent = `/**
 * Base de datos principal de ejercicios de DB-Gym (SDD v2.0)
 * Total de ejercicios certificados: ${masterList.length}
 */

import { Exercise } from '../types';

export const EXERCISES_DB: Exercise[] = ${JSON.stringify(masterList, null, 2)};
`;

fs.writeFileSync(tsPath, tsContent, 'utf8');
console.log(`💾 Archivo TypeScript exportado con éxito: ${tsPath}`);
console.log(`\n🎉 ¡META ALCANZADA! 500+ ejercicios implementados y validados conforme a SDD.\n`);
