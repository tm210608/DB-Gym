import { PILOT_EXERCISES_V2 } from '../src/data/pilot_exercises_v2.js';
import { validateExercises } from './validate-db.js';

const res = validateExercises(PILOT_EXERCISES_V2);
if (!res.success) {
  process.exit(1);
} else {
  console.log('\n🎉 ¡Lote Piloto v2.0 cumple el 100% de las especificaciones SDD!\n');
  process.exit(0);
}
