'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const phrases = [
    "JUSTICIA CON VISIÓN 360°",
    "LEGISLACIÓN INTELIGENTE",
    "PROTECCIÓN PATRIMONIAL",
    "INNOVACIÓN JURÍDICA",
    "EXCELENCIA ÉTICA"
];

const CHARS = "ABCDEFGHIKLMNOPQRSTVXYZ0123456789$#@&";

const ScrambleText = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState(text);

    useEffect(() => {
        let frame = 0;
        const duration = 15; // frames of scrambling
        const interval = setInterval(() => {
            frame++;
            setDisplayText(text.split('').map((char, i) => {
                if (char === ' ') return ' ';
                if (frame > (duration + i * 2)) return char;
                return CHARS[Math.floor(Math.random() * CHARS.length)];
            }).join(''));

            if (frame > duration + text.length * 2) clearInterval(interval);
        }, 30);
        return () => clearInterval(interval);
    }, [text]);

    return <span>{displayText}</span>;
}

export default function HeroAnimation({ children }: { children?: React.ReactNode }) {
    const [index, setIndex] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // Canvas Globe Animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const points: { x: number, y: number, z: number }[] = [];
        const count = 1200; // High density
        const radius = Math.min(width, height) * 0.35;

        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;
            points.push({
                x: Math.cos(theta) * Math.sin(phi) * radius,
                y: Math.sin(theta) * Math.sin(phi) * radius,
                z: Math.cos(phi) * radius
            });
        }

        let rotation = 0;

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            rotation += 0.003;

            const centerX = width / 2;
            const centerY = height / 2;

            points.sort((a, b) => b.z - a.z); // Simple z-buffer sort

            points.forEach((p, i) => {
                // Rotate around Y axis
                const x = p.x * Math.cos(rotation) - p.z * Math.sin(rotation);
                const z = p.x * Math.sin(rotation) + p.z * Math.cos(rotation);

                // Perspective
                const perspective = 1000 / (1000 + z);
                const px = centerX + x * perspective;
                const py = centerY + p.y * perspective;

                const size = Math.max(0.5, 2 * perspective);
                const opacity = Math.max(0.05, 0.4 * perspective * (z > 0 ? 1 : 0.5));

                ctx.beginPath();
                ctx.arc(px, py, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(197, 160, 89, ${opacity})`;
                ctx.fill();

                // Occasional light streaks
                if (i % 50 === 0) {
                    ctx.beginPath();
                    ctx.moveTo(px, py);
                    ctx.lineTo(px + 40 * perspective, py - 20 * perspective);
                    ctx.strokeStyle = `rgba(0, 180, 255, ${opacity * 0.3})`;
                    ctx.stroke();
                }
            });

            // Add subtle scanlines
            ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
            for (let i = 0; i < height; i += 4) {
                ctx.fillRect(0, i, width, 1);
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
    }, []);

    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            {/* Canvas Layer */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 opacity-60"
                style={{ filter: 'blur(0.5px) contrast(1.2)' }}
            />

            {/* Background Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05)_0%,transparent_70%)]" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-900/40 border border-white/5 text-gold text-[10px] font-bold tracking-[0.5em] uppercase mb-16 backdrop-blur-xl"
                >
                    <div className="w-1 h-1 rounded-full bg-gold animate-ping" />
                    <ShieldCheck size={14} className="opacity-80" /> Innovación Legal Inteligente
                </motion.div>

                {/* Phrases Cycle */}
                <div className="h-[140px] md:h-[220px] flex items-center justify-center w-full mb-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] uppercase">
                                <ScrambleText text={phrases[index]} />
                            </h1>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-slate-400 text-xs md:text-sm max-w-2xl text-center mb-16 leading-relaxed font-bold tracking-[0.4em] uppercase tracking-widest opacity-60"
                >
                    "Estrategia Jurídica de Vanguardia"
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                    {children}
                </div>
            </div>

            {/* Aesthetic Overlays */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.4)_100%)] z-[5]" />
        </div>
    );
}
