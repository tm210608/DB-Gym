/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Exercise, EquipmentType, ForceType } from '../types';
import { Play, Pause } from 'lucide-react';

interface ExerciseVisualizerProps {
  exercise: Exercise;
}

export default function ExerciseVisualizer({ exercise }: ExerciseVisualizerProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  const forceType = exercise.forceType || 'Empuje';
  const equipment = exercise.equipment;

  // Render different SVG animations depending on Force Type & Equipment
  const renderAnimation = () => {
    const playClass = isPlaying ? 'running' : 'paused';

    switch (forceType) {
      case 'Empuje': // Bench Press, Overhead Press, Push Ups, etc.
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full text-lime-400">
            {/* Background Grid */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(63, 63, 70, 0.15)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Bench/Platform */}
            <line x1="40" y1="140" x2="160" y2="140" stroke="#3f3f46" strokeWidth="6" strokeLinecap="round" />
            <line x1="60" y1="140" x2="60" y2="165" stroke="#3f3f46" strokeWidth="4" />
            <line x1="140" y1="140" x2="140" y2="165" stroke="#3f3f46" strokeWidth="4" />

            {/* Body wireframe (Pressing action) */}
            <g className={`animate-press-${playClass}`}>
              {/* Torso/Head */}
              <circle cx="100" cy="120" r="10" fill="#27272a" stroke="#a3e635" strokeWidth="3" />
              {/* Arms pushing */}
              <path d="M 80 120 L 70 90 L 85 70" fill="none" stroke="#e4e4e7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 120 120 L 130 90 L 115 70" fill="none" stroke="#e4e4e7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Barbell / Dumbbell moving */}
            <g className={`animate-push-weight-${playClass}`}>
              {equipment === 'Barbell' ? (
                <>
                  {/* Barbell */}
                  <line x1="50" y1="70" x2="150" y2="70" stroke="#e4e4e7" strokeWidth="4" />
                  {/* Weights */}
                  <rect x="42" y="55" width="8" height="30" rx="2" fill="#a3e635" />
                  <rect x="34" y="60" width="8" height="20" rx="1" fill="#71717a" />
                  <rect x="150" y="55" width="8" height="30" rx="2" fill="#a3e635" />
                  <rect x="158" y="60" width="8" height="20" rx="1" fill="#71717a" />
                </>
              ) : (
                <>
                  {/* Dumbbells */}
                  {/* Left */}
                  <line x1="75" y1="70" x2="95" y2="70" stroke="#e4e4e7" strokeWidth="3" />
                  <rect x="70" y="60" width="5" height="20" rx="1" fill="#a3e635" />
                  <rect x="95" y="60" width="5" height="20" rx="1" fill="#a3e635" />
                  {/* Right */}
                  <line x1="105" y1="70" x2="125" y2="70" stroke="#e4e4e7" strokeWidth="3" />
                  <rect x="100" y="60" width="5" height="20" rx="1" fill="#a3e635" />
                  <rect x="125" y="60" width="5" height="20" rx="1" fill="#a3e635" />
                </>
              )}
            </g>

            {/* Force Direction arrows */}
            <path
              d="M 100 100 L 100 55 M 95 65 L 100 55 L 105 65"
              fill="none"
              stroke="#a3e635"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`animate-pulse-${playClass}`}
            />
          </svg>
        );

      case 'Tirón': // Pulldowns, Rows, Deadlifts, Pullups
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full text-lime-400">
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Pulley setup */}
            <circle cx="100" cy="30" r="8" fill="none" stroke="#3f3f46" strokeWidth="3" />
            <line x1="100" y1="10" x2="100" y2="22" stroke="#3f3f46" strokeWidth="4" />

            {/* Cable line & Barbell pulling */}
            <g className={`animate-pull-weight-${playClass}`}>
              {/* Cable wire */}
              <line x1="100" y1="38" x2="100" y2="90" stroke="#71717a" strokeWidth="2" strokeDasharray="3,3" />
              {/* Bar */}
              <line x1="60" y1="90" x2="140" y2="90" stroke="#e4e4e7" strokeWidth="4" strokeLinecap="round" />
              {/* Hands/Arms drawing bar */}
              <path d="M 80 135 L 75 105 L 85 90" fill="none" stroke="#a3e635" strokeWidth="3" strokeLinecap="round" />
              <path d="M 120 135 L 125 105 L 115 90" fill="none" stroke="#a3e635" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* Human Base (Seated) */}
            <circle cx="100" cy="145" r="10" fill="#27272a" stroke="#e4e4e7" strokeWidth="3" />
            <path d="M 100 155 L 100 180" stroke="#3f3f46" strokeWidth="4" strokeLinecap="round" />

            {/* Direction Arrows */}
            <path
              d="M 100 50 L 100 85 M 95 75 L 100 85 L 105 75"
              fill="none"
              stroke="#a3e635"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`opacity-60 animate-pulse-${playClass}`}
            />
          </svg>
        );

      case 'Flexión/Extensión': // Squats, Leg Press, curls, RDL
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full text-lime-400">
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Floor line */}
            <line x1="30" y1="170" x2="170" y2="170" stroke="#3f3f46" strokeWidth="4" strokeLinecap="round" />

            {/* Squatting figure / Hinge model */}
            <g className={`animate-hinge-${playClass}`}>
              {/* Head */}
              <circle cx="100" cy="70" r="10" fill="#27272a" stroke="#e4e4e7" strokeWidth="3" />
              {/* Torso & Hip */}
              <path d="M 100 80 L 100 115" stroke="#e4e4e7" strokeWidth="4" strokeLinecap="round" />
              {/* Upper Thigh */}
              <line x1="100" y1="115" x2="80" y2="140" stroke="#a3e635" strokeWidth="4" strokeLinecap="round" />
              {/* Lower Calf */}
              <line x1="80" y1="140" x2="100" y2="170" stroke="#e4e4e7" strokeWidth="4" strokeLinecap="round" />
            </g>

            {/* Load indicator */}
            <g className={`animate-hinge-bar-${playClass}`}>
              <circle cx="100" cy="75" r="8" fill="#a3e635" opacity="0.8" />
              <line x1="80" y1="75" x2="120" y2="75" stroke="#71717a" strokeWidth="3" />
            </g>

            {/* Dynamic arrow */}
            <path
              d="M 140 100 L 140 140 M 135 130 L 140 140 L 145 130"
              fill="none"
              stroke="#a3e635"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`animate-pulse-${playClass}`}
            />
          </svg>
        );

      case 'Core': // Plank, Leg Raises, Twists
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full text-lime-400">
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Ground support */}
            <line x1="30" y1="145" x2="170" y2="145" stroke="#3f3f46" strokeWidth="4" strokeLinecap="round" />

            {/* Core activation diagram */}
            <g>
              {/* Head */}
              <circle cx="150" cy="115" r="8" fill="#27272a" stroke="#e4e4e7" strokeWidth="3" />
              {/* Plank body line */}
              <line x1="50" y1="130" x2="142" y2="118" stroke="#e4e4e7" strokeWidth="4" strokeLinecap="round" />
              {/* Elbow support */}
              <path d="M 135 119 L 135 145" stroke="#71717a" strokeWidth="3" strokeLinecap="round" />
              {/* Feet support */}
              <path d="M 50 130 L 48 145" stroke="#71717a" strokeWidth="3" strokeLinecap="round" />

              {/* Contracting core shield (pulsing animation) */}
              <circle cx="95" cy="123" r="16" fill="rgba(163, 230, 53, 0.15)" stroke="#a3e635" strokeWidth="2" className={`animate-core-pulse-${playClass} stroke-dasharray-[4,2]`} />
              <path d="M 90 123 Q 95 110 100 123" fill="none" stroke="#a3e635" strokeWidth="2" />
            </g>
          </svg>
        );

      case 'Cardio': // Treadmill, Bike, Jump Rope
      default:
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full text-lime-400">
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Wheel / Roller */}
            <circle cx="100" cy="100" r="45" fill="none" stroke="#3f3f46" strokeWidth="4" />
            <circle cx="100" cy="100" r="45" fill="none" stroke="#a3e635" strokeWidth="4" strokeDasharray="15,20" className={`animate-spin-wheel-${playClass} origin-center`} />

            {/* Center axle */}
            <circle cx="100" cy="100" r="10" fill="#27272a" stroke="#e4e4e7" strokeWidth="3" />

            {/* Treadmill base */}
            <rect x="40" y="145" width="120" height="15" rx="3" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />

            {/* Running rays */}
            <line x1="60" y1="152" x2="80" y2="152" stroke="#a3e635" strokeWidth="2" className={`animate-cardio-ray-1-${playClass}`} />
            <line x1="110" y1="152" x2="135" y2="152" stroke="#a3e635" strokeWidth="2" className={`animate-cardio-ray-2-${playClass}`} />
          </svg>
        );
    }
  };

  return (
    <div className="relative bg-zinc-950 border border-zinc-850 rounded-2xl p-4 overflow-hidden aspect-video flex items-center justify-center">
      {/* Absolute top tags */}
      <div className="absolute top-3 left-3 flex gap-2">
        <span className="text-[9px] font-bold uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded-md">
          {forceType}
        </span>
        <span className="text-[9px] font-bold uppercase tracking-wider bg-lime-500/10 border border-lime-500/20 text-lime-400 px-2 py-0.5 rounded-md">
          {equipment}
        </span>
      </div>

      <div className="w-32 h-32 flex items-center justify-center">
        {renderAnimation()}
      </div>

      {/* Control bar */}
      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-zinc-900/90 border border-zinc-800 rounded-lg p-1 backdrop-blur-md">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-1.5 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 rounded transition cursor-pointer"
          title={isPlaying ? 'Pausar' : 'Reproducir'}
        >
          {isPlaying ? '⏸️ Pausar' : '▶️ Reproducir'}
        </button>
      </div>

      {/* Styled inline keyframe rules for performance */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes push-weight {
          0% { transform: translateY(35px); }
          50% { transform: translateY(0px); }
          100% { transform: translateY(35px); }
        }
        @keyframes press-arm {
          0% { transform: scaleY(0.6) translateY(20px); transform-origin: 100px 120px; }
          50% { transform: scaleY(1.1) translateY(0px); transform-origin: 100px 120px; }
          100% { transform: scaleY(0.6) translateY(20px); transform-origin: 100px 120px; }
        }
        @keyframes pull-weight {
          0% { transform: translateY(0px); }
          50% { transform: translateY(35px); }
          100% { transform: translateY(0px); }
        }
        @keyframes hinge-body {
          0% { transform: translateY(0px) scaleY(1); transform-origin: 100px 170px; }
          50% { transform: translateY(12px) scaleY(0.85); transform-origin: 100px 170px; }
          100% { transform: translateY(0px) scaleY(1); transform-origin: 100px 170px; }
        }
        @keyframes hinge-bar {
          0% { transform: translateY(0px); }
          50% { transform: translateY(22px); }
          100% { transform: translateY(0px); }
        }
        @keyframes core-pulse {
          0% { transform: scale(0.9); opacity: 0.5; transform-origin: 95px 123px; }
          50% { transform: scale(1.2); opacity: 1; transform-origin: 95px 123px; }
          100% { transform: scale(0.9); opacity: 0.5; transform-origin: 95px 123px; }
        }
        @keyframes spin-wheel {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes cardio-ray {
          0% { transform: translateX(-10px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(25px); opacity: 0; }
        }

        .animate-push-weight-running { animation: push-weight 2.4s ease-in-out infinite; }
        .animate-push-weight-paused { transform: translateY(15px); }

        .animate-press-running { animation: press-arm 2.4s ease-in-out infinite; }
        .animate-press-paused { transform: scaleY(0.8); }

        .animate-pull-weight-running { animation: pull-weight 2.6s ease-in-out infinite; }
        .animate-pull-weight-paused { transform: translateY(10px); }

        .animate-hinge-running { animation: hinge-body 2.8s ease-in-out infinite; }
        .animate-hinge-paused { transform: translateY(5px); }

        .animate-hinge-bar-running { animation: hinge-bar 2.8s ease-in-out infinite; }
        .animate-hinge-bar-paused { transform: translateY(10px); }

        .animate-core-pulse-running { animation: core-pulse 1.8s ease-in-out infinite; }
        .animate-core-pulse-paused { transform: scale(1); }

        .animate-spin-wheel-running { animation: spin-wheel 2s linear infinite; }
        .animate-spin-wheel-paused { transform: rotate(45deg); }

        .animate-cardio-ray-1-running { animation: cardio-ray 1.2s linear infinite; }
        .animate-cardio-ray-2-running { animation: cardio-ray 1.2s linear infinite 0.6s; }
      ` }} />
    </div>
  );
}
