/**
 * Validador formal de integridad de la base de datos de ejercicios (SDD v2.0).
 * Ejecuta y verifica las invariantes INV-01 hasta INV-08.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function validateExercises(exercises) {
  const errors = [];
  const warnings = [];
  const idMap = new Map();
  const idRegex = /^[a-z0-9]+(-[a-z0-9]+)*$/;

  console.log(`\n🔍 Iniciando validación SDD sobre ${exercises.length} ejercicios...\n`);

  // Paso 1: Unicidad e integridad estructural de cada ejercicio
  exercises.forEach((ex, index) => {
    const ref = `[Index ${index} - ${ex.id || 'SIN_ID'}]`;

    // INV-01: Unicidad
    if (!ex.id) {
      errors.push(`${ref} INV-01/02: El ejercicio carece de 'id'.`);
    } else {
      if (idMap.has(ex.id)) {
        errors.push(`${ref} INV-01: ID duplicado '${ex.id}'. Primera ocurrencia en índice ${idMap.get(ex.id)}.`);
      } else {
        idMap.set(ex.id, index);
      }

      // INV-02: Formato kebab-case
      if (!idRegex.test(ex.id)) {
        errors.push(`${ref} INV-02: El ID '${ex.id}' no cumple el formato kebab-case reglamentario.`);
      }
    }

    // INV-07: Bilingüismo básico
    if (!ex.name || typeof ex.name !== 'string' || ex.name.trim() === '') {
      errors.push(`${ref} INV-07: 'name' en español obligatorio.`);
    }
    if (!ex.nameEn || typeof ex.nameEn !== 'string' || ex.nameEn.trim() === '') {
      errors.push(`${ref} INV-07: 'nameEn' en inglés obligatorio.`);
    }

    // INV-08: Metadatos mínimos
    if (!ex.primaryMuscle) errors.push(`${ref} INV-08: 'primaryMuscle' no especificado.`);
    if (!ex.equipment) errors.push(`${ref} INV-08: 'equipment' no especificado.`);
    if (!ex.difficulty) errors.push(`${ref} INV-08: 'difficulty' no especificado.`);
    if (!ex.category) warnings.push(`${ref} INV-08 (Transición v2): 'category' no especificado.`);

    // INV-05: Completitud de instrucciones
    if (!Array.isArray(ex.instructions) || ex.instructions.length < 2) {
      errors.push(`${ref} INV-05: 'instructions' debe tener al menos 2 pasos estructurados.`);
    }

    // INV-06: Consistencia biomecánica de ejercicios compuestos
    if (ex.mechanics === 'Compuesto') {
      const hasSecondary = Array.isArray(ex.secondaryMuscles) && ex.secondaryMuscles.length > 0;
      const hasStabilizers = Array.isArray(ex.stabilizers) && ex.stabilizers.length > 0;
      if (!hasSecondary && !hasStabilizers) {
        warnings.push(`${ref} INV-06: Marcado como 'Compuesto' pero no define secondaryMuscles ni stabilizers.`);
      }
    }
  });

  // Paso 2: Integridad referencial (INV-03 e INV-04)
  exercises.forEach((ex) => {
    const ref = `[${ex.id}]`;

    // INV-03: alternatives
    if (Array.isArray(ex.alternatives)) {
      ex.alternatives.forEach((altId) => {
        if (altId === ex.id) {
          errors.push(`${ref} INV-03: Autoreferencia detectada en 'alternatives'.`);
        } else if (!idMap.has(altId)) {
          errors.push(`${ref} INV-03: Alternativa huérfana '${altId}'. No existe en la base de datos.`);
        }
      });
    }

    // INV-04: progressions y regressions
    if (Array.isArray(ex.progressions)) {
      ex.progressions.forEach((progId) => {
        if (!idMap.has(progId)) {
          errors.push(`${ref} INV-04: Progresión huérfana '${progId}'. No existe en la base de datos.`);
        }
      });
    }

    if (Array.isArray(ex.regressions)) {
      ex.regressions.forEach((regId) => {
        if (!idMap.has(regId)) {
          errors.push(`${ref} INV-04: Regresión huérfana '${regId}'. No existe en la base de datos.`);
        }
      });
    }
  });

  // Reporte final
  console.log('--- REPORTE DE VALIDACIÓN SDD ---');
  console.log(`Total Ejercicios: ${exercises.length}`);
  console.log(`Errores (Invariantes rotas): ${errors.length}`);
  console.log(`Advertencias: ${warnings.length}`);

  if (warnings.length > 0) {
    console.log(`\n⚠️  ADVERTENCIAS (${warnings.length}):`);
    warnings.slice(0, 5).forEach(w => console.log('  ' + w));
    if (warnings.length > 5) console.log(`  ... y ${warnings.length - 5} advertencias más.`);
  }

  if (errors.length > 0) {
    console.log(`\n❌ ERRORES DE INTEGRIDAD (${errors.length}):`);
    errors.slice(0, 10).forEach(e => console.log('  ' + e));
    if (errors.length > 10) console.log(`  ... y ${errors.length - 10} errores más.`);
    return { success: false, errors, warnings };
  }

  console.log('\n✅ VALIDACIÓN EXITOSA: La base de datos cumple formalmente las especificaciones SDD.');
  return { success: true, errors: [], warnings };
}

// Ejecución directa desde CLI sólo si se invoca este archivo puntualmente
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const targetFile = process.argv[2] || path.join(__dirname, '../exercises.json');
  if (fs.existsSync(targetFile)) {
    const data = JSON.parse(fs.readFileSync(targetFile, 'utf8'));
    const result = validateExercises(data);
    process.exit(result.success ? 0 : 1);
  } else {
    console.error(`Archivo no encontrado: ${targetFile}`);
    process.exit(1);
  }
}
