/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Load env vars
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser
app.use(express.json());

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

function getAIClient(): GoogleGenAI {
  if (!aiClient) {
    if (!apiKey) {
      console.warn("WARNING: GEMINI_API_KEY is not defined. AI Coach features will fallback to helpful static answers.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey || "dummy-key",
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Chat/Form Coach Endpoint
app.post("/api/coach", async (req, res) => {
  try {
    const { message, history, selectedExercise, exercisesList } = req.body;

    if (!apiKey) {
      return res.json({
        text: `### ⚠️ Coach de IA Fuera de Línea
Parece que la clave **GEMINI_API_KEY** no está configurada en la sección **Secrets** del menú izquierdo.

Sin embargo, aquí tienes unos consejos rápidos para **${selectedExercise?.name || "tu entrenamiento"}**:
1. Asegura mantener el rango de movimiento completo de forma controlada.
2. Descansa entre 90 y 120 segundos entre series de hipertrofia.
3. No sacrifiques nunca la buena técnica por levantar más kilos.`
      });
    }

    const ai = getAIClient();

    // Prepare system instructions ensuring we align our feedback with the exercise database
    const systemInstruction = `Eres un Entrenador Personal de Gimnasio especializado y Coach de IA. Ayudas al usuario a resolver dudas sobre ejercicios de gimnasio, técnica, ejecución, rutinas de entrenamiento y calentamiento.
Tu tono es motivador, profesional, humilde, claro y preciso. 
Te estamos proporcionando una base de datos de ejercicios del gimnasio que el usuario tiene disponible. Siempre que sea relevante, sugiere o enlaza rutinas que utilicen principalmente ESTOS ejercicios para que el usuario pueda cargarlos en la app.

Aquí tienes la lista completa de ejercicios configurados en la app:
${JSON.stringify(exercisesList?.map((e: any) => ({ id: e.id, name: e.name, muscle: e.primaryMuscle, equipment: e.equipment })) || [])}

Si el usuario pregunta por un ejercicio específico que seleccionó:
- Ejercicio Seleccionado: ${selectedExercise ? `${selectedExercise.name} (${selectedExercise.nameEn})` : "Ninguno seleccionado en este momento"}
- Músculo Principal: ${selectedExercise ? selectedExercise.primaryMuscle : ""}
- Equipo: ${selectedExercise ? selectedExercise.equipment : ""}
- Instrucciones: ${selectedExercise ? selectedExercise.instructions.join(" | ") : ""}

Organiza tu respuesta usando formato Markdown elegante con secciones, negritas y puntos de viñeta. Divide tu respuesta en:
1. Consejos de técnica y forma.
2. Errores comunes a evitar.
3. Técnica de respiración (Cuándo inhalar y exhalar).
4. Sugerencia de cuántas series, repeticiones y descanso (ej: Rango de hipertrofia o fuerza).`;

    // Construct contents list with historical context plus client query
    const contents = [];
    if (history && Array.isArray(history)) {
      for (const msg of history) {
        contents.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        });
      }
    }

    // Add current user query
    contents.push({
      role: 'user',
      parts: [{ text: message || `Háblame del ejercicio ${selectedExercise?.name || "actual"} y dame consejos avanzados.` }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error in backend:", error);
    res.status(500).json({ error: "Error de servidor al contactar con el Coach de IA.", details: error.message });
  }
});

// Setup Vite development server or production static serving middleware
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve production static assets
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Gym Server] Servidor activo en http://localhost:${PORT}`);
  });
}

setupServer();
