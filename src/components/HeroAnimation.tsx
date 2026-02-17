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

    // Wavy Metallic Mesh + Restored Orbital Beams
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Mesh Grid Setup
        const cols = 25;
        const rows = 25;
        const spacing = Math.max(width, height) / 15;
        const grid: { x: number, y: number, z: number, ox: number, oy: number }[] = [];

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid.push({
                    x: (i - cols / 2) * spacing,
                    y: (j - rows / 2) * spacing,
                    z: 0,
                    ox: (i - cols / 2) * spacing,
                    oy: (j - rows / 2) * spacing,
                });
            }
        }

        // Restored Fast Orbital Beams (Brillos)
        const beams: { angle: number, speed: number, size: number, color: string, radius: number, phase: number }[] = [];
        for (let i = 0; i < 10; i++) {
            beams.push({
                angle: Math.random() * Math.PI * 2,
                speed: (Math.random() * 0.04 + 0.02),
                size: Math.random() * 100 + 100,
                color: Math.random() > 0.4 ? '#00e5ff' : '#c5a059',
                radius: Math.random() * 300 + 200,
                phase: Math.random() * Math.PI * 2
            });
        }

        let time = 0;

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            time += 0.02;

            const centerX = width / 2;
            const centerY = height / 2;

            // Update and Draw Mesh
            ctx.lineWidth = 1;
            grid.forEach((p, i) => {
                // Wave physics (Terrain feel)
                const dist = Math.sqrt(p.ox * p.ox + p.oy * p.oy);
                p.z = Math.sin(dist / 200 - time) * 80 + Math.cos(p.ox / 300 + time) * 40;

                // Simple 3D projection
                const perspective = 1000 / (1000 + p.z);
                const px = centerX + p.ox * perspective;
                const py = centerY + (p.oy + 200) * perspective; // Offset down for ground feel

                const opacity = Math.max(0.1, 0.4 * perspective);

                // Connect mesh lines (Horizontal)
                if (i % rows < rows - 1) {
                    const next = grid[i + 1];
                    const np = 1000 / (1000 + next.z);
                    ctx.beginPath();
                    ctx.moveTo(px, py);
                    ctx.lineTo(centerX + next.ox * np, centerY + (next.oy + 200) * np);
                    ctx.strokeStyle = `rgba(0, 180, 255, ${opacity * 0.3})`;
                    ctx.stroke();
                }

                // Connect mesh lines (Vertical)
                if (i < grid.length - rows) {
                    const next = grid[i + rows];
                    const np = 1000 / (1000 + next.z);
                    ctx.beginPath();
                    ctx.moveTo(px, py);
                    ctx.lineTo(centerX + next.ox * np, centerY + (next.oy + 200) * np);
                    ctx.strokeStyle = `rgba(0, 180, 255, ${opacity * 0.2})`;
                    ctx.stroke();
                }

                // Draw nodes at intersections (Restored brillos on mesh)
                if (i % 4 === 0) {
                    ctx.beginPath();
                    ctx.arc(px, py, 1.5 * perspective, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(0, 229, 255, ${opacity * 0.8})`;
                    ctx.fill();
                    if (Math.random() > 0.995) { // Occasional flash
                        ctx.shadowBlur = 15;
                        ctx.shadowColor = '#00e5ff';
                        ctx.fill();
                        ctx.shadowBlur = 0;
                    }
                }
            });

            // Draw Restored Orbital Beams (Dynamic brillos around text)
            beams.forEach(b => {
                b.angle += b.speed;
                const bx = Math.cos(b.angle) * b.radius;
                const by = Math.sin(b.angle) * b.radius * 0.5 + Math.sin(time + b.phase) * 100;

                const bpx = centerX + bx;
                const bpy = centerY + by;

                const grad = ctx.createRadialGradient(bpx, bpy, 0, bpx, bpy, b.size);
                grad.addColorStop(0, b.color + '66');
                grad.addColorStop(0.5, b.color + '11');
                grad.addColorStop(1, 'transparent');

                ctx.beginPath();
                ctx.fillStyle = grad;
                ctx.arc(bpx, bpy, b.size, 0, Math.PI * 2);
                ctx.fill();

                // Glow tail
                ctx.beginPath();
                ctx.moveTo(bpx, bpy);
                ctx.lineTo(bpx - Math.cos(b.angle) * 80, bpy - Math.sin(b.angle) * 40);
                ctx.strokeStyle = b.color + '22';
                ctx.lineWidth = 3;
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
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#010208]">
            {/* Canvas Layer */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ filter: 'contrast(1.2) brightness(1.1) saturate(1.2)' }}
            />

            {/* Cinematic Overlays */}
            <div className="absolute inset-0 z-[5] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,180,255,0.05)_0%,transparent_80%)]" />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#010208] via-transparent to-transparent" />
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
                <div className="h-[150px] md:h-[250px] flex items-center justify-center w-full mb-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-center"
                        >
                            <h1 className={`${isBrand ? "text-6xl md:text-8xl lg:text-9xl tracking-tighter" : "text-4xl md:text-6xl lg:text-7xl font-black"} text-white leading-tight uppercase italic relative`}>
                                <span className="relative z-10 block drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]">
                                    {isBrand ? (
                                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-300 to-gold animate-shimmer">
                                            {phrases[index]}
                                        </span>
                                    ) : (
                                        phrases[index].split(' ').map((word, i) => {
                                            const isFocus = (phrases[index].split(' ').length > 2) ? (i === 1) : (i === 0);
                                            return (
                                                <span key={i} className={isFocus ? "text-gold" : "text-white"}>
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

            {/* Deep Vignette */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(1,2,8,0.7)_100%)] z-20" />
        </div>
    );
}
