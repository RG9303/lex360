'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const phrases = [
    "JUSTICIA CON VISIÓN 360°",
    "LEGISLACIÓN INTELIGENTE",
    "PROTECCIÓN PATRIMONIAL",
    "INNOVACIÓN JURÍDICA",
    "EXCELENCIA ÉTICA"
];

export default function HeroAnimation({ children }: { children?: React.ReactNode }) {
    const [index, setIndex] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // High-Density Iridescent Globe Animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const points: { x: number, y: number, z: number, color: string }[] = [];
        const beams: { angle: number, speed: number, size: number, color: string }[] = [];

        // 4000 points for high density
        const count = 4000;
        const radius = Math.min(width, height) * 0.4;

        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;

            // Add random "noise" to clusters to create silhouettes
            const noise = (Math.sin(phi * 5) * Math.cos(theta * 5) > 0.3) ? 1.02 : 0.98;

            points.push({
                x: Math.cos(theta) * Math.sin(phi) * radius * noise,
                y: Math.sin(theta) * Math.sin(phi) * radius * noise,
                z: Math.cos(phi) * radius * noise,
                color: '' // Determined during render for iridescence
            });
        }

        // Dynamic orbital beams
        for (let i = 0; i < 8; i++) {
            beams.push({
                angle: Math.random() * Math.PI * 2,
                speed: (Math.random() * 0.02 + 0.01) * (Math.random() > 0.5 ? 1 : -1),
                size: Math.random() * 100 + 50,
                color: Math.random() > 0.5 ? '#00e5ff' : '#c5a059'
            });
        }

        let rotation = 0;

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            rotation += 0.002;

            const centerX = width / 2;
            const centerY = height / 2;

            // Draw Globe Points
            points.sort((a, b) => b.z - a.z); // Sort for depth

            points.forEach((p, i) => {
                // Rotate around Y axis
                const rx = p.x * Math.cos(rotation) - p.z * Math.sin(rotation);
                const rz = p.x * Math.sin(rotation) + p.z * Math.cos(rotation);

                // Perspective
                const perspective = 1000 / (1000 + rz);
                const px = centerX + rx * perspective;
                const py = centerY + p.y * perspective;

                if (px < 0 || px > width || py < 0 || py > height) return;

                // Iridescent "Tornasol" Logic
                // Colors shift based on depth (rz) and vertical position (p.y)
                const hue = (rz / radius) * 30 + 200; // Shift around Blue/Cyan
                const saturation = 70 + (p.y / radius) * 20;
                const lightness = 50 + (rz / radius) * 20;
                const opacity = Math.max(0.1, 0.6 * perspective * (rz > 0 ? 1 : 0.4));

                const size = Math.max(0.5, 1.5 * perspective);

                ctx.beginPath();
                ctx.arc(px, py, size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
                ctx.fill();

                // Intermittent bright nodes for "metallic" shine
                if (i % 200 === 0 && rz > 0) {
                    ctx.beginPath();
                    ctx.arc(px, py, size * 2.5, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.4})`;
                    ctx.fill();
                }
            });

            // Draw Orbital Beams
            beams.forEach(b => {
                b.angle += b.speed;
                const bx = Math.cos(b.angle) * radius * 1.1;
                const bz = Math.sin(b.angle) * radius * 1.1;

                const p = 1000 / (1000 + bz);
                const bpx = centerX + bx * p;
                const bpy = centerY + (Math.sin(b.angle * 0.5) * radius * 0.2) * p;

                ctx.beginPath();
                const grad = ctx.createRadialGradient(bpx, bpy, 0, bpx, bpy, b.size * p);
                grad.addColorStop(0, b.color + '66');
                grad.addColorStop(1, 'transparent');
                ctx.fillStyle = grad;
                ctx.arc(bpx, bpy, b.size * p, 0, Math.PI * 2);
                ctx.fill();
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
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#010411]">
            {/* Canvas Layer */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ filter: 'contrast(1.2) brightness(1.1) saturate(1.2)' }}
            />

            {/* Atmosphere & Silhouettes */}
            <div className="absolute inset-0 z-[5] pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.03)_0%,transparent_70%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#010411]/20 to-[#010411]/80" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gold text-[10px] font-bold tracking-[0.5em] uppercase mb-16 backdrop-blur-xl"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#00e5ff] animate-pulse" />
                    <ShieldCheck size={14} className="text-cyan-400 opacity-80" /> Innovación Legal Inteligente
                </motion.div>

                {/* Phrases Cycle */}
                <div className="h-[120px] md:h-[200px] flex items-center justify-center w-full mb-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.05, y: -20 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-center"
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter uppercase italic">
                                <span className="relative z-10 block drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                    {phrases[index].split(' ').map((word, i) => {
                                        const isFocus = (phrases[index].split(' ').length > 2) ? (i === 1) : (i === 0);
                                        return (
                                            <span key={i} className={isFocus ? "text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold animate-shimmer" : "text-white"}>
                                                {word}{' '}
                                                {i === 1 && phrases[index].split(' ').length > 2 && <br className="hidden md:block" />}
                                            </span>
                                        );
                                    })}
                                </span>
                            </h1>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    className="text-slate-400 text-[10px] md:text-xs max-w-2xl text-center mb-16 leading-relaxed font-black tracking-[0.6em] uppercase italic"
                >
                    "Estrategia Jurídica Global"
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-8 justify-center shadow-2xl">
                    {children}
                </div>
            </div>

            {/* Deep Vignette Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(1,4,17,0.5)_100%)] z-20" />
        </div>
    );
}
