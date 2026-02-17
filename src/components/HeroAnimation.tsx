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
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    // Wavy Blue Mesh + 4D Legal Parallax + Brillos
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // 1. Mesh Grid Setup (Ground/Midground)
        const cols = 30;
        const rows = 30;
        const spacing = 120;
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

        // 2. Foreground: Floating Elements (Scales & Fragments)
        const fragments = ["Lex", "§", "Art. 1", "Law", "Iustitia", "Codex"];
        const legalFragments: { text: string, x: number, y: number, z: number, speed: number, opacity: number }[] = [];
        for (let i = 0; i < 20; i++) {
            legalFragments.push({
                text: fragments[Math.floor(Math.random() * fragments.length)],
                x: Math.random() * width,
                y: Math.random() * height,
                z: Math.random() * 400,
                speed: Math.random() * 0.3 + 0.1,
                opacity: Math.random() * 0.4 + 0.1
            });
        }

        // 3. Dynamic Orbital Beams (Brillos)
        const beams: { angle: number, speed: number, size: number, color: string, radius: number }[] = [];
        for (let i = 0; i < 10; i++) {
            beams.push({
                angle: Math.random() * Math.PI * 2,
                speed: (Math.random() * 0.03 + 0.015),
                size: Math.random() * 100 + 150,
                color: Math.random() > 0.4 ? '#00e5ff' : '#c8a96e',
                radius: Math.random() * 300 + 200
            });
        }

        let time = 0;

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            time += 0.015;

            const centerX = width / 2;
            const centerY = height / 2;

            // --- LAYER 1: Wavy Blue Metallic Mesh (Background/Terrain) ---
            ctx.save();
            grid.forEach((p, i) => {
                const dist = Math.sqrt(p.ox * p.ox + p.oy * p.oy);
                p.z = Math.sin(dist / 300 - time) * 100 + Math.cos(p.ox / 500 + time) * 50;

                const perspective = 1000 / (1000 + p.z);
                const px = centerX + p.ox * perspective;
                const py = centerY + (p.oy + 300) * perspective; // Low terrain

                const op = Math.max(0.05, 0.4 * perspective);

                // Draw Mesh Connections
                if (i % rows < rows - 1) {
                    const next = grid[i + 1];
                    const np = 1000 / (1000 + (Math.sin(Math.sqrt(next.ox ** 2 + next.oy ** 2) / 300 - time) * 100));
                    ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(centerX + next.ox * np, centerY + (next.oy + 300) * np);
                    ctx.strokeStyle = `rgba(0, 150, 255, ${op * 0.3})`; ctx.stroke();
                }
                if (i < grid.length - rows) {
                    const next = grid[i + rows];
                    const np = 1000 / (1000 + (Math.sin(Math.sqrt(next.ox ** 2 + next.oy ** 2) / 300 - time) * 100));
                    ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(centerX + next.ox * np, centerY + (next.oy + 300) * np);
                    ctx.strokeStyle = `rgba(0, 100, 255, ${op * 0.2})`; ctx.stroke();
                }

                // Glow nodes on mesh
                if (i % 5 === 0) {
                    ctx.beginPath(); ctx.arc(px, py, 1.5 * perspective, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(0, 229, 255, ${op * 0.8})`; ctx.fill();
                }
            });
            ctx.restore();

            // --- LAYER 2: Foreground 4D Elements ---

            // Legal Fragments (Rising)
            ctx.font = '300 12px serif';
            ctx.textAlign = 'center';
            legalFragments.forEach(f => {
                f.y -= f.speed;
                if (f.y < -50) f.y = height + 50;
                const p = 600 / (600 + f.z);
                ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity * p})`;
                ctx.fillText(f.text, centerX + (f.x - width / 2) * p, f.y * p);
            });

            // Scales of Justice (Wireframe Blue/White)
            const drawScales = (x: number, y: number, scale: number) => {
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(Math.sin(time * 0.2) * 0.05);
                ctx.strokeStyle = 'rgba(0, 229, 255, 0.2)';
                ctx.lineWidth = 1;

                // Stem & Crossbar
                const tilt = Math.sin(time * 0.5) * 20;
                ctx.beginPath(); ctx.moveTo(0, -100 * scale); ctx.lineTo(0, 100 * scale); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(-150 * scale, -60 * scale + tilt); ctx.lineTo(150 * scale, -60 * scale - tilt); ctx.stroke();

                // Plates
                ctx.beginPath(); ctx.arc(-150 * scale, 20 * scale + tilt, 60 * scale, 0, Math.PI, false); ctx.stroke();
                ctx.beginPath(); ctx.arc(150 * scale, 20 * scale - tilt, 60 * scale, 0, Math.PI, false); ctx.stroke();
                ctx.restore();
            };
            drawScales(centerX + 350, centerY - 50, 1.1);

            // --- LAYER 3: Orbital "Brillos" (Glowing Streaks) ---
            beams.forEach(b => {
                b.angle += b.speed;
                const bx = Math.cos(b.angle) * b.radius;
                const by = Math.sin(b.angle) * b.radius * 0.4 + Math.cos(time * 0.5) * 50;

                const grad = ctx.createRadialGradient(centerX + bx, centerY + by, 0, centerX + bx, centerY + by, b.size);
                grad.addColorStop(0, b.color + '77');
                grad.addColorStop(0.4, b.color + '22');
                grad.addColorStop(1, 'transparent');

                ctx.fillStyle = grad;
                ctx.beginPath(); ctx.arc(centerX + bx, centerY + by, b.size, 0, Math.PI * 2); ctx.fill();

                // Core beam
                ctx.beginPath(); ctx.arc(centerX + bx, centerY + by, 2, 0, Math.PI * 2);
                ctx.fillStyle = '#fff'; ctx.fill();
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
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#01030d]">
            {/* Canvas Layer */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ filter: 'contrast(1.2) brightness(1.2) saturate(1.4)' }}
            />

            {/* Cinematic Overlays */}
            <div className="absolute inset-0 z-[5] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,180,255,0.04)_0%,transparent_80%)]" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#01030d] to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-900/40 border border-white/5 text-[#00e5ff] text-[10px] font-bold tracking-[0.6em] uppercase mb-16 backdrop-blur-xl"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#00e5ff] animate-pulse" />
                    <ShieldCheck size={14} className="opacity-80" /> Innovación Legal Inteligente
                </motion.div>

                {/* Phrases Cycle */}
                <div className="h-[180px] md:h-[280px] flex items-center justify-center w-full mb-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 30, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 1.05, y: -30, filter: 'blur(10px)' }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-center"
                        >
                            <h1 className={`${isBrand ? "text-6xl md:text-8xl lg:text-9xl tracking-tighter" : "text-4xl md:text-6xl lg:text-7xl font-black"} text-white leading-tight uppercase italic relative`}>
                                <span className="relative z-10 block drop-shadow-[0_0_35px_rgba(0,180,255,0.4)]">
                                    {isBrand ? (
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8a96e] via-white to-gold animate-shimmer">
                                            {phrases[index]}
                                        </span>
                                    ) : (
                                        phrases[index].split(' ').map((word, i) => {
                                            const isFocus = (phrases[index].split(' ').length > 2) ? (i === 1) : (i === 0);
                                            return (
                                                <span key={i} className={isFocus ? "text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 via-white to-cyan-300" : "text-white"}>
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
                    animate={{ opacity: 0.4 }}
                    className="text-slate-400 text-[10px] md:text-xs max-w-2xl text-center mb-16 leading-relaxed font-black tracking-[0.8em] uppercase italic"
                >
                    "Estrategia Jurídica Global"
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                    {children}
                </div>
            </div>

            {/* Deep Vignette */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(1,3,13,0.7)_100%)] z-20" />
        </div>
    );
}
