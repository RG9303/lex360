'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const phrases = [
    "LEX 360°",
    "JUSTICIA CON VISIÓN 360°",
    "LEGISLACIÓN INTELIGENTE",
    "PROTECCIÓN PATRIMONIAL",
    "INNOVACIÓN JURÍDICA",
    "EXCELENCIA ÉTICA"
];

export default function HeroAnimation({ children }: { children?: React.ReactNode }) {
    const [index, setIndex] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isBrand = index === 0;

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // High-Density Iridescent Globe + Enhanced Brillos
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
        const points: { x: number, y: number, z: number }[] = [];
        const beams: { angle: number, speed: number, size: number, color: string, zAxis: boolean }[] = [];

        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;
            points.push({
                x: Math.cos(theta) * Math.sin(phi) * radius,
                y: Math.sin(theta) * Math.sin(phi) * radius,
                z: Math.cos(phi) * radius
            });
        }

        // High-impact orbital beams (Brillos)
        for (let i = 0; i < 12; i++) {
            beams.push({
                angle: Math.random() * Math.PI * 2,
                speed: (Math.random() * 0.03 + 0.015) * (Math.random() > 0.5 ? 1 : -1),
                size: Math.random() * 120 + 80,
                color: Math.random() > 0.4 ? '#00e5ff' : '#c5a059',
                zAxis: Math.random() > 0.5
            });
        }

        let rotation = 0;

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            rotation += 0.002;

            const centerX = width / 2;
            const centerY = height / 2;

            // Draw Globe Points
            points.sort((a, b) => b.z - a.z);

            points.forEach((p, i) => {
                const rx = p.x * Math.cos(rotation) - p.z * Math.sin(rotation);
                const rz = p.x * Math.sin(rotation) + p.z * Math.cos(rotation);

                const psp = 1000 / (1000 + rz);
                const px = centerX + rx * psp;
                const py = centerY + p.y * psp;

                if (px < 0 || px > width || py < 0 || py > height) return;

                // Tornasol Metallic
                const hue = (rz / radius) * 30 + 200;
                const sat = 80;
                const light = 50 + (rz / radius) * 20;
                const op = Math.max(0.1, 0.6 * psp * (rz > 0 ? 1 : 0.4));

                ctx.beginPath();
                ctx.arc(px, py, Math.max(0.4, 1.2 * psp), 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${hue}, ${sat}%, ${light}%, ${op})`;
                ctx.fill();

                // Restored Metallic Shines (Node glows)
                if (i % 150 === 0 && rz > 200) {
                    ctx.beginPath();
                    ctx.arc(px, py, 3 * psp, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${op * 0.6})`;
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = '#00e5ff';
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            });

            // Enhanced Orbital Beams
            beams.forEach(b => {
                b.angle += b.speed;
                const bx = Math.cos(b.angle) * radius * 1.15;
                const bz = Math.sin(b.angle) * radius * 1.15;
                const by = b.zAxis ? 0 : Math.sin(b.angle * 0.5) * radius * 0.3;

                const psp = 1000 / (1000 + bz);
                const bpx = centerX + bx * psp;
                const bpy = centerY + by * psp;

                const grad = ctx.createRadialGradient(bpx, bpy, 0, bpx, bpy, b.size * psp);
                grad.addColorStop(0, b.color + '88');
                grad.addColorStop(0.3, b.color + '22');
                grad.addColorStop(1, 'transparent');

                ctx.beginPath();
                ctx.fillStyle = grad;
                ctx.arc(bpx, bpy, b.size * psp, 0, Math.PI * 2);
                ctx.fill();

                // Beam core streak
                ctx.beginPath();
                ctx.moveTo(bpx, bpy);
                ctx.lineTo(bpx - Math.cos(b.angle) * 50 * psp, bpy - Math.sin(b.angle) * 20 * psp);
                ctx.strokeStyle = b.color + '44';
                ctx.lineWidth = 2 * psp;
                ctx.stroke();
            });

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
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#01020a]">
            {/* Canvas Layer */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ filter: 'contrast(1.2) brightness(1.1) saturate(1.3)' }}
            />

            {/* Overlays */}
            <div className="absolute inset-0 z-[5] pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,180,255,0.06)_0%,transparent_70%)]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gold text-[10px] font-bold tracking-[0.5em] uppercase mb-16 backdrop-blur-xl"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#00e5ff] animate-pulse" />
                    <ShieldCheck size={14} className="text-cyan-400 opacity-80" /> Innovación Legal Inteligente
                </motion.div>

                {/* Phrases Cycle */}
                <div className="h-[140px] md:h-[220px] flex items-center justify-center w-full mb-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.05, y: -30 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="text-center"
                        >
                            <h1 className={`${isBrand ? "text-6xl md:text-8xl lg:text-9xl tracking-tighter" : "text-4xl md:text-6xl lg:text-7xl font-black"} font-black text-white leading-tight uppercase italic relative`}>
                                <span className="relative z-10 block drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                                    {isBrand ? (
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold animate-shimmer">
                                            {phrases[index]}
                                        </span>
                                    ) : (
                                        phrases[index].split(' ').map((word, i) => {
                                            const isFocus = (phrases[index].split(' ').length > 2) ? (i === 1) : (i === 0);
                                            return (
                                                <span key={i} className={isFocus ? "text-transparent bg-clip-text bg-gradient-to-b from-gold via-white/80 to-gold" : "text-white"}>
                                                    {word}{' '}
                                                    {i === 1 && phrases[index].split(' ').length > 2 && <br className="hidden md:block" />}
                                                </span>
                                            );
                                        })
                                    )}
                                </span>
                            </h1>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    className="text-slate-400 text-[10px] md:text-xs max-w-2xl text-center mb-16 leading-relaxed font-black tracking-[0.6em] uppercase italic"
                >
                    "Estrategia Jurídica Global"
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                    {children}
                </div>
            </div>
        </div>
    );
}
