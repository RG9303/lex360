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
    const mouseRef = useRef({ x: 0, y: 0 });
    const isBrand = index === 0;

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    // Handle Mouse Movement for Interactivity
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = {
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: (e.clientY / window.innerHeight - 0.5) * 2
            };
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Cinematic 4D Atmosphere - Inspired by Waters of Creation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Elements Setup
        const particles: { x: number, y: number, z: number, size: number, speed: number }[] = [];
        const legalFragments: { text: string, x: number, y: number, z: number, opacity: number, speed: number }[] = [];

        // Foreground: Drifting micro-particles
        for (let i = 0; i < 100; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                z: Math.random() * 500,
                size: Math.random() * 1.5 + 0.5,
                speed: Math.random() * 0.2 + 0.05
            });
        }

        // Floating legal symbols
        const symbols = ["§", "Art. 1", "Law", "LEX", "⚖️", "Codex"];
        for (let i = 0; i < 12; i++) {
            legalFragments.push({
                text: symbols[Math.floor(Math.random() * symbols.length)],
                x: Math.random() * width,
                y: Math.random() * height,
                z: Math.random() * 800,
                opacity: Math.random() * 0.2 + 0.05,
                speed: Math.random() * 0.1 + 0.03
            });
        }

        let time = 0;

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            time += 0.01;

            const centerX = width / 2;
            const centerY = height / 2;
            const mx = mouseRef.current.x * 30;
            const my = mouseRef.current.y * 30;

            // --- LAYER 1: Deep Nebula & Pulsing Sonar (Background) ---
            ctx.save();
            const nebulaGrad = ctx.createRadialGradient(centerX + mx * 0.2, centerY + my * 0.2, 0, centerX, centerY, width);
            nebulaGrad.addColorStop(0, '#0a1628');
            nebulaGrad.addColorStop(1, '#06090f');
            ctx.fillStyle = nebulaGrad;
            ctx.fillRect(0, 0, width, height);

            // Sonar Rings (Jurisdiction Pulse)
            const sonarPulse = (time % 4) / 4;
            ctx.beginPath();
            ctx.arc(centerX + mx * 0.1, centerY + my * 0.1, sonarPulse * width * 1.2, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(200, 169, 110, ${0.05 * (1 - sonarPulse)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.restore();

            // --- LAYER 2: Architectural Grid of Law (Midground) ---
            ctx.save();
            ctx.translate(centerX + mx * 0.5, centerY + my * 0.5);
            ctx.rotate(time * 0.02);
            const gridOpacity = 0.03 + Math.sin(time * 0.4) * 0.01;
            ctx.strokeStyle = `rgba(200, 169, 110, ${gridOpacity})`;
            ctx.lineWidth = 0.5;

            const gridSize = 1500;
            const step = 200;
            for (let i = -gridSize; i <= gridSize; i += step) {
                ctx.beginPath(); ctx.moveTo(i, -gridSize); ctx.lineTo(i, gridSize); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(-gridSize, i); ctx.lineTo(gridSize, i); ctx.stroke();
            }
            ctx.restore();

            // --- LAYER 3: Wireframe Scales & God Rays ---
            // Volumetric Glow
            ctx.save();
            const drawGodRay = (lx: number, ly: number, angle: number) => {
                ctx.save();
                ctx.translate(lx, ly);
                ctx.rotate(angle + Math.sin(time * 0.2) * 0.05);
                const grad = ctx.createLinearGradient(0, 0, 0, height);
                grad.addColorStop(0, 'rgba(200, 169, 110, 0.08)');
                grad.addColorStop(1, 'transparent');
                ctx.fillStyle = grad;
                ctx.beginPath(); ctx.moveTo(-200, 0); ctx.lineTo(200, 0); ctx.lineTo(400, height); ctx.lineTo(-400, height); ctx.fill();
                ctx.restore();
            };
            drawGodRay(0, 0, Math.PI / 6);
            drawGodRay(width, 0, -Math.PI / 6);
            ctx.restore();

            // Scales of Justice Wireframe (Mid-Parallax)
            const drawScales = (sx: number, sy: number, scale: number) => {
                ctx.save();
                ctx.translate(sx + mx * 0.8, sy + my * 0.8);
                ctx.rotate(Math.sin(time * 0.3) * 0.03);
                ctx.strokeStyle = 'rgba(0, 212, 212, 0.15)'; // Electric teal subtly
                ctx.lineWidth = 1;

                const tilt = Math.sin(time * 0.5) * 30;
                ctx.beginPath(); ctx.moveTo(0, -120 * scale); ctx.lineTo(0, 100 * scale); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(-180 * scale, -80 * scale + tilt); ctx.lineTo(180 * scale, -80 * scale - tilt); ctx.stroke();
                ctx.beginPath(); ctx.arc(-180 * scale, 30 * scale + tilt, 70 * scale, 0, Math.PI, false); ctx.stroke();
                ctx.beginPath(); ctx.arc(180 * scale, 30 * scale - tilt, 70 * scale, 0, Math.PI, false); ctx.stroke();
                ctx.restore();
            };
            drawScales(centerX + 450, centerY - 100, 1.2);

            // --- LAYER 4: Fragments & Particles (Foreground) ---
            legalFragments.forEach(f => {
                f.y -= f.speed;
                if (f.y < -50) f.y = height + 50;
                const p = 800 / (800 + f.z);
                const fx = centerX + (f.x - width / 2) * p + mx * (1.2 * p);
                const fy = f.y * p + my * (1.2 * p);
                ctx.font = `300 ${12 * p}px "Inter", sans-serif`;
                ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity * p})`;
                ctx.fillText(f.text, fx, fy);
            });

            particles.forEach(p => {
                p.y -= p.speed;
                if (p.y < 0) p.y = height;
                const psp = 500 / (500 + p.z);
                const px = centerX + (p.x - width / 2) * psp + mx * (2 * psp);
                const py = p.y * psp + my * (2 * psp);
                ctx.beginPath();
                ctx.arc(px, py, p.size * psp, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 169, 110, ${0.3 * psp})`;
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
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#06090f]">
            {/* 4D Atmospheric Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ filter: 'contrast(1.1) brightness(1.2) blur(0.5px)' }}
            />

            {/* Waters of Creation Dynamic Vignette Layer */}
            <div className="absolute inset-0 z-[5] pointer-events-none">
                {/* Glowing Cyan Frame */}
                <div className="absolute inset-0 border-[60px] md:border-[100px] border-transparent shadow-[inset_0_0_120px_rgba(0,180,255,0.12)] opacity-60" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(6,9,15,0.8)_100%)]" />
                {/* Subtle Lens Flare at bottom */}
                <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-full h-[300px] bg-cyan-500/10 rounded-full blur-[150px]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
                {/* Top Badge - Ultra-Thin style */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-4 px-10 py-3 rounded-full bg-white/5 border border-white/10 text-white/60 text-[9px] font-extralight tracking-[0.8em] uppercase mb-20 backdrop-blur-3xl"
                >
                    <div className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_15px_#00e5ff] animate-pulse" />
                    <ShieldCheck size={14} className="opacity-40" /> Estrategia Jurídica de Vanguardia
                </motion.div>

                {/* Phrases Cycle - Ultra-Thin Luxury Typography */}
                <div className="h-[200px] md:h-[300px] flex items-center justify-center w-full mb-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, filter: 'blur(20px)', letterSpacing: '0.2em', scale: 1.05 }}
                            animate={{ opacity: 1, filter: 'blur(0px)', letterSpacing: isBrand ? '-0.02em' : '0.1em', scale: 1 }}
                            exit={{ opacity: 0, filter: 'blur(20px)', letterSpacing: '0.2em', scale: 0.95 }}
                            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                            className="text-center"
                        >
                            <h1 className={`${isBrand ? "text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter" : "text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.15em]"} text-white leading-tight uppercase relative drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]`}>
                                {isBrand ? (
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8a96e] via-white to-[#c8a96e] animate-shimmer">
                                        {phrases[index]}
                                    </span>
                                ) : (
                                    phrases[index].split(' ').map((word, i) => {
                                        const isFocus = (phrases[index].split(' ').length > 2) ? (i === 1) : (i === 0);
                                        return (
                                            <span key={i} className={isFocus ? "text-[#c8a96e]" : "text-white/80"}>
                                                {word}{' '}
                                                {i === 1 && phrases[index].split(' ').length > 2 && <br className="hidden md:block" />}
                                            </span>
                                        );
                                    })
                                )}
                            </h1>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Subtitle - Static Elegant */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    className="text-white text-[9px] md:text-[10px] max-w-2xl text-center mb-16 leading-relaxed font-extralight tracking-[1em] uppercase italic"
                >
                    "Fidelidad. Inteligencia. Poder."
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
                    {children}
                </div>
            </div>

            {/* Cinematic Grain Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>
    );
}
