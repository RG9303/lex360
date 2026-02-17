'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const phrases = [
    "JUSTICIA CON VISIÓN 360°",
    "LEGISLACIÓN INTELIGENTE",
    "PROTECCIÓN PATRIMONIAL",
    "INNOVACIÓN JURÍDICA",
    "EXCELENCIA ÉTICA",
    "LEX 360"
];

export default function HeroAnimation({ children }: { children?: React.ReactNode }) {
    const [index, setIndex] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isFinale = index === phrases.length - 1;

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // High-Density Iridescent Globe + Explosion Animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const count = 4000;
        const radius = Math.min(width, height) * 0.4;
        const points: { x: number, y: number, z: number, ox: number, oy: number, oz: number, speed: number }[] = [];

        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;
            const x = Math.cos(theta) * Math.sin(phi) * radius;
            const y = Math.sin(theta) * Math.sin(phi) * radius;
            const z = Math.cos(phi) * radius;

            points.push({
                x, y, z,
                ox: x, oy: y, oz: z,
                speed: Math.random() * 0.1 + 0.05
            });
        }

        let rotation = 0;
        let explosionFactor = 0;

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            rotation += 0.002;

            // Explosion logic for Lex 360
            if (isFinale) {
                explosionFactor = Math.min(2.5, explosionFactor + 0.02);
            } else {
                explosionFactor = Math.max(1, explosionFactor - 0.05);
            }

            const centerX = width / 2;
            const centerY = height / 2;

            points.sort((a, b) => b.oz - a.oz);

            points.forEach((p, i) => {
                // Apply explosion expansion
                const ex = p.ox * explosionFactor;
                const ey = p.oy * explosionFactor;
                const ez = p.oz * explosionFactor;

                // Apply rotation
                const rx = ex * Math.cos(rotation) - ez * Math.sin(rotation);
                const rz = ex * Math.sin(rotation) + ez * Math.cos(rotation);

                const perspective = 1000 / (1000 + rz);
                const px = centerX + rx * perspective;
                const py = centerY + ey * perspective;

                if (px < 0 || px > width || py < 0 || py > height) return;

                // Tornasol Metallic Colors
                const hue = (rz / radius) * 40 + 190; // Deep Metallic Blues/Cyans
                const saturation = 80 + (ey / radius) * 20;
                const lightness = 40 + (rz / radius) * 30;
                const opacity = Math.max(0.05, 0.7 * perspective * (rz > 0 ? 1 : 0.3));

                ctx.beginPath();
                ctx.arc(px, py, Math.max(0.5, 1.2 * perspective), 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
                ctx.fill();

                // Connect lines for the "Plexus/Mesh" feel (Metallic Blue)
                if (i % 80 === 0 && !isFinale) {
                    const nextP = points[(i + 1) % points.length];
                    const nx = (nextP.ox * explosionFactor) * Math.cos(rotation) - (nextP.oz * explosionFactor) * Math.sin(rotation);
                    const ny = nextP.oy * explosionFactor;
                    const nz = (nextP.ox * explosionFactor) * Math.sin(rotation) + (nextP.oz * explosionFactor) * Math.cos(rotation);

                    const np = 1000 / (1000 + nz);
                    ctx.beginPath();
                    ctx.moveTo(px, py);
                    ctx.lineTo(centerX + nx * np, centerY + ny * np);
                    ctx.strokeStyle = `rgba(0, 229, 255, ${opacity * 0.15})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            });

            // Glowing center for Lex 360 reveal
            if (isFinale) {
                const grad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 300 * explosionFactor);
                grad.addColorStop(0, 'rgba(0, 229, 255, 0.15)');
                grad.addColorStop(1, 'transparent');
                ctx.fillStyle = grad;
                ctx.fillRect(0, 0, width, height);
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        }
    }, [isFinale]);

    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#010208]">
            {/* Canvas Layer */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ filter: 'contrast(1.3) brightness(1.2) saturate(1.5)' }}
            />

            {/* Cinematic Overlays */}
            <div className="absolute inset-0 z-[5] pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,180,255,0.05)_0%,transparent_70%)]" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#010208] to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
                {/* Top Badge */}
                <AnimatePresence>
                    {!isFinale && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-900/40 border border-white/5 text-gold text-[10px] font-bold tracking-[0.5em] uppercase mb-16 backdrop-blur-xl"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#00e5ff] animate-pulse" />
                            <ShieldCheck size={14} className="text-cyan-400 opacity-80" /> Innovación Legal Inteligente
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Phrases Cycle */}
                <div className="h-[150px] md:h-[250px] flex items-center justify-center w-full mb-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={isFinale ? { opacity: 0, scale: 0.2, z: -500 } : { opacity: 0, scale: 0.9, y: 30 }}
                            animate={isFinale ?
                                { opacity: 1, scale: 1.2, z: 0, transition: { type: "spring", stiffness: 50, damping: 15 } } :
                                { opacity: 1, scale: 1, y: 0 }
                            }
                            exit={isFinale ? { opacity: 0, scale: 2, z: 500 } : { opacity: 0, scale: 1.1, y: -30 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="text-center"
                        >
                            <h1 className={`${isFinale ? "text-6xl md:text-8xl lg:text-9xl tracking-[0.2em] font-black" : "text-4xl md:text-6xl lg:text-7xl font-black"} text-white leading-tight uppercase italic drop-shadow-[0_0_30px_rgba(0,180,255,0.4)]`}>
                                {isFinale ? (
                                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-400 to-gold animate-shimmer block">
                                        {phrases[index]}
                                    </span>
                                ) : (
                                    <span className="relative z-10 block">
                                        {phrases[index].split(' ').map((word, i) => {
                                            const isFocus = (phrases[index].split(' ').length > 2) ? (i === 1) : (i === 0);
                                            return (
                                                <span key={i} className={isFocus ? "text-gold" : "text-white"}>
                                                    {word}{' '}
                                                    {i === 1 && phrases[index].split(' ').length > 2 && <br className="hidden md:block" />}
                                                </span>
                                            );
                                        })}
                                    </span>
                                )}
                            </h1>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Subtitle */}
                <AnimatePresence>
                    {!isFinale && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            exit={{ opacity: 0 }}
                            className="text-slate-300 text-[10px] md:text-xs max-w-2xl text-center mb-16 leading-relaxed font-black tracking-[0.6em] uppercase italic"
                        >
                            "Estrategia Jurídica Global"
                        </motion.p>
                    )}
                </AnimatePresence>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                    {children}
                </div>
            </div>

            {/* Cinematic Vignette */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,2,10,0.6)_100%)] z-20" />
        </div>
    );
}
