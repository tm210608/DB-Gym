/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Exercise } from '../types';
import { Sparkles, Send, Loader2, Dumbbell, ShieldAlert, Wind, HelpCircle, Bot } from 'lucide-react';

interface AICoachPanelProps {
  selectedExercise: Exercise | null;
  exercisesList: Exercise[];
}

interface Message {
  role: 'user' | 'model';
  content: string;
}

export default function AICoachPanel({ selectedExercise, exercisesList }: AICoachPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Clear messages on exercise change or add a welcoming introductory coach card
  useEffect(() => {
    if (selectedExercise) {
      setMessages([
        {
          role: 'model',
          content: `¡Hola atleta! Veo que estás revisando **${selectedExercise.name}**. 
          
¿Quieres que te prepare una guía completa de este ejercicio? Puedes usar los botones rápidos a continuación para consultarme sobre técnica, errores populares o respiración coordinada. ¿En qué puedo ayudarte hoy?`,
        },
      ]);
    } else {
      setMessages([
        {
          role: 'model',
          content: `¡Hola! Soy tu **Coach de IA de Hevy/Fitcron**. 
          
Selecciona cualquier ejercicio de la lista o pregúntame directamente sobre cómo diseñar una rutina, técnicas avanzadas de hipertrofia o consejos de fuerza. ¡Vamos a por ello!`,
        },
      ]);
    }
  }, [selectedExercise]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = { role: 'user', content: textToSend };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: messages,
          selectedExercise,
          exercisesList,
        }),
      });

      const data = await response.json();
      if (response.ok && data.text) {
        setMessages((prev) => [...prev, { role: 'model', content: data.text }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: 'model',
            content: `⚠️ Disculpa, ocurrió un error al procesar tu solicitud: ${data.details || 'Error desconocido'}.`,
          },
        ]);
      }
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          content: `⚠️ No pude conectarme con el servidor del gimnasio. Asegúrate de que el backend esté levantado. Detalle: ${err.message}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Custom regex-based extremely safe renderer for basic markdown details
  const renderMarkdownText = (text: string) => {
    return text.split('\n').map((line, idx) => {
      let trimmed = line.trim();

      // Check for headings
      if (trimmed.startsWith('###')) {
        return (
          <h4 key={idx} className="text-sm font-bold text-slate-100 mt-4 mb-2 first:mt-1 flex items-center gap-1.5 border-b border-slate-800 pb-1">
            {trimmed.replace('###', '').trim()}
          </h4>
        );
      }
      if (trimmed.startsWith('##') || trimmed.startsWith('#')) {
        return (
          <h3 key={idx} className="text-base font-extrabold text-lime-400 mt-4 mb-2">
            {trimmed.replace(/^#+/, '').trim()}
          </h3>
        );
      }

      // Check for lists
      if (trimmed.startsWith('-') || trimmed.startsWith('+') || trimmed.startsWith('*')) {
        const itemContent = trimmed.replace(/^[-+*]/, '').trim();
        return (
          <li key={idx} className="text-xs text-slate-300 ml-4 list-disc mb-1 leading-relaxed">
            {parseBoldText(itemContent)}
          </li>
        );
      }

      // Check for numbered lists
      if (/^\u0031-\u0039\d*\./.test(trimmed)) {
        return (
          <li key={idx} className="text-xs text-slate-300 ml-5 list-decimal mb-1 leading-relaxed">
            {parseBoldText(trimmed.replace(/^\d+\./, '').trim())}
          </li>
        );
      }

      return (
        <p key={idx} className="text-xs text-slate-300 mb-2 leading-relaxed">
          {parseBoldText(line)}
        </p>
      );
    });
  };

  const parseBoldText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
       if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="text-lime-400 font-bold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  // Quick Action triggers
  const getQuickQuestions = () => {
    if (!selectedExercise) {
      return [
        { label: '🏋️ Diseñar rutina de Fuerza de 3 días', q: 'Diseña una rutina completa de fuerza de 3 días (Push/Pull/Legs) usando únicamente los ejercicios cargados en la base de datos de esta app.' },
        { label: '🔥 Rutina HIIT / Cardio para quemar grasa', q: 'Recomiéndame una rutina de acondicionamiento de cardio y abdomen combinando carrera y planchas de forma efectiva.' },
        { label: '💪 Qué es el volumen de entrenamiento', q: 'Explícame de forma extremadamente sencilla qué es el volumen de entrenamiento, intensidad, y cuántas series semanales sugieres por grupo muscular.' },
      ];
    }

    return [
      { logo: <Dumbbell className="w-3.5 h-3.5 text-rose-400" />, label: 'Guía de Ejecución', q: `Dame una guía paso a paso ultra detalla para ejecutar correctamente: ${selectedExercise.name}.` },
      { logo: <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />, label: 'Errores Populares', q: `¿Cuáles son los 3 errores técnicos más típicos y lesivos al realizar ${selectedExercise.name} y cómo corregirlos?` },
      { logo: <Wind className="w-3.5 h-3.5 text-emerald-400" />, label: 'Respiración Coordinada', q: `Diséñame un patrón de respiración correcto para ${selectedExercise.name}. ¿Cuándo inhalo y cuándo exhalo?` },
      { logo: <HelpCircle className="w-3.5 h-3.5 text-sky-400" />, label: 'Mejores Alternativas', q: `Sugiéreme alternativas basadas en la base de datos para sustituir ${selectedExercise.name} si está ocupada la máquina o barra.` },
    ];
  };

  return (
    <div id="ai-coach-panel" className="bg-[#0E0E0E] border border-zinc-800 rounded-2xl p-4 flex flex-col h-[520px] shadow-xl relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-2 pb-3 border-b border-zinc-800 mb-3 shrink-0">
        <div className="p-2 bg-lime-500/10 text-lime-400 rounded-xl">
          <Bot className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-sm font-bold text-zinc-100">AI Gym Coach</h3>
            <span className="flex items-center gap-0.5 text-[9px] font-bold text-lime-400 bg-lime-500/10 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-2.5 h-2.5 text-lime-400 fill-lime-400" /> PRO
            </span>
          </div>
          <p className="text-[10px] text-zinc-500">Técnica correctiva y generador de rutinas</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1 mb-3 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-950">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-3 text-xs shadow-md ${
                msg.role === 'user'
                  ? 'bg-lime-400 text-black rounded-tr-none font-extrabold'
                  : 'bg-zinc-950/80 text-zinc-300 rounded-tl-none border border-zinc-900'
              }`}
            >
              <div className="prose prose-invert prose-xs">
                {msg.role === 'user' ? <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p> : renderMarkdownText(msg.content)}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-zinc-950/80 border border-zinc-900 rounded-2xl rounded-tl-none p-3.5 max-w-[80%] text-xs text-zinc-400 flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-lime-400" />
              <span>Coach de IA está analizando los detalles anatómicos...</span>
            </div>
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* Quick Action Chips */}
      <div className="shrink-0 mb-3 space-y-2">
        <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider block">Preguntas Rápidas:</span>
        <div className="flex flex-wrap gap-1.5 max-h-[85px] overflow-y-auto">
          {getQuickQuestions().map((item, idx) => (
            <button
              id={`quick-question-btn-${idx}`}
              key={idx}
              onClick={() => handleSendMessage(item.q)}
              disabled={loading}
              className="text-[10px] text-zinc-300 bg-zinc-900 hover:bg-zinc-800 disabled:opacity-50 border border-zinc-800 px-2.5 py-1.5 rounded-lg text-left transition duration-150 flex items-center gap-1.5 cursor-pointer"
            >
              {'logo' in item && item.logo}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat input box */}
      <form
        id="ai-coach-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(input);
        }}
        className="flex gap-2 shrink-0 border-t border-zinc-800 pt-3"
      >
        <input
          id="ai-coach-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={selectedExercise ? `Escribe tu pregunta sobre ${selectedExercise.name}...` : "Escribe o pide consejos sobre rutinas..."}
          disabled={loading}
          className="flex-1 bg-zinc-950 text-xs border border-zinc-800 rounded-xl px-3 py-2.5 focus:outline-none focus:border-lime-500 text-zinc-200 placeholder-zinc-500 transition"
        />
        <button
          id="ai-coach-send"
          type="submit"
          disabled={!input.trim() || loading}
          className="bg-lime-400 hover:bg-lime-300 disabled:opacity-40 text-black p-2.5 rounded-xl transition flex items-center justify-center shrink-0 cursor-pointer font-extrabold"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
