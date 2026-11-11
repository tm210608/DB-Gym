import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, '..');
const exercisesPath = path.join(rootDir, 'exercises.json');
const animPath = path.join(rootDir, 'animation_mappings.json');

const exercises = JSON.parse(fs.readFileSync(exercisesPath, 'utf8'));
const animMap = JSON.parse(fs.readFileSync(animPath, 'utf8'));

const MUSCLE_TRANSLATIONS = {
  'Chest': 'Pecho / Pectoral',
  'Back': 'Espalda / Dorsal',
  'Lats': 'Dorsal Ancho',
  'Traps': 'Trapecio',
  'LowerBack': 'Espalda Baja / Lumbar',
  'Shoulders': 'Hombros / Deltoides',
  'Biceps': 'Bíceps',
  'Triceps': 'Tríceps',
  'Forearms': 'Antebrazos',
  'Quads': 'Cuádriceps',
  'Hamstrings': 'Isquiotibiales / Femoral',
  'Glutes': 'Glúteos',
  'Calves': 'Gemelos / Pantorrillas',
  'Abs': 'Abdomen / Core',
  'Serratus': 'Serrato Anterior',
  'HipFlexors': 'Flexores de Cadera / Psoas',
  'Adductors': 'Aductores (Cara Interna)',
  'Abductors': 'Abductores (Glúteo Medio)',
  'Cardio': 'Sistema Cardiovascular'
};

const EQUIPMENT_TRANSLATIONS = {
  'Barbell': 'Barra Olímpica',
  'Dumbbell': 'Mancuernas',
  'EZBar': 'Barra Z',
  'Machine': 'Máquina de Palanca',
  'Cable': 'Polea con Cable',
  'Kettlebell': 'Pesa Rusa (Kettlebell)',
  'Bodyweight': 'Peso Corporal',
  'Band': 'Banda Elástica',
  'TRX': 'TRX / Suspensión',
  'MedicineBall': 'Balón Medicinal',
  'FoamRoller': 'Rodillo de Espuma',
  'Box': 'Cajón Pliométrico',
  'Rings': 'Anillas de Gimnasia',
  'SmithMachine': 'Máquina Smith / Multipower',
  'StabilityBall': 'Balón Suizo / Fitball',
  'Rope': 'Cuerda de Batalla',
  'Sled': 'Trineo de Empuje (Prowler)',
  'Trap Bar': 'Barra Hexagonal',
  'None': 'Sin Equipamiento'
};

const enrichedExercises = exercises.map(ex => {
  const images = animMap[ex.id] || [];
  return {
    ...ex,
    primaryMuscleEs: MUSCLE_TRANSLATIONS[ex.primaryMuscle] || ex.primaryMuscle,
    secondaryMusclesEs: (ex.secondaryMuscles || []).map(m => MUSCLE_TRANSLATIONS[m] || m),
    stabilizersEs: (ex.stabilizers || []).map(m => MUSCLE_TRANSLATIONS[m] || m),
    equipmentEs: EQUIPMENT_TRANSLATIONS[ex.equipment] || ex.equipment,
    images: images
  };
});

// 1. Guardar en la raíz exercises.json
fs.writeFileSync(exercisesPath, JSON.stringify(enrichedExercises, null, 2), 'utf8');

// 2. Crear carpeta docs/ (estándar para GitHub Pages y API remota)
const docsDir = path.join(rootDir, 'docs');
const apiDir = path.join(docsDir, 'api');
if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir);
if (!fs.existsSync(apiDir)) fs.mkdirSync(apiDir);

// Guardar endpoints estáticos en docs/api/
fs.writeFileSync(path.join(apiDir, 'exercises.json'), JSON.stringify(enrichedExercises, null, 2), 'utf8');

const versionMeta = {
  version: '2.1.0',
  updatedAt: new Date().toISOString(),
  totalExercises: enrichedExercises.length,
  endpoints: {
    allExercises: 'https://tm210608.github.io/DB-Gym/api/exercises.json',
    cdnExercises: 'https://cdn.jsdelivr.net/gh/tm210608/DB-Gym@main/exercises.json',
    rawExercises: 'https://raw.githubusercontent.com/tm210608/DB-Gym/main/exercises.json'
  }
};
fs.writeFileSync(path.join(apiDir, 'version.json'), JSON.stringify(versionMeta, null, 2), 'utf8');

// Copiar el visor visual también a docs/index.html para que sea la portada pública de GitHub Pages
const visorContent = fs.readFileSync(path.join(rootDir, 'visor_ejercicios.html'), 'utf8');
fs.writeFileSync(path.join(docsDir, 'index.html'), visorContent, 'utf8');

console.log('✅ Base de datos remota enriquecida con imágenes y etiquetas en español.');
console.log('✅ Estructura docs/index.html y docs/api/ lista para GitHub Pages.');
