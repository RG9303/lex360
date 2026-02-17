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

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    // Cinematic 4D Parallax Animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Layer Elements Setup
        const particles: { x: number, y: number, z: number, size: number, speed: number }[] = [];
        const legalFragments: { text: string, x: number, y: number, z: number, opacity: number, speed: number }[] = [];
        const gridLines: { x1: number, y1: number, x2: number, y2: number, z: number }[] = [];

        // Foreground: Rising Golden Particles (Z: 0-200)
        for (let i = 0; i < 150; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                z: Math.random() * 200,
                size: Math.random() * 2 + 0.5,
                speed: Math.random() * 0.4 + 0.1
            });
        }

        // Foreground: Legal Fragments
        const fragments = ["Lex", "§", "Art. 1", "Law", "Iustitia"];
        for (let i = 0; i < 15; i++) {
            legalFragments.push({
                text: fragments[Math.floor(Math.random() * fragments.length)],
                x: Math.random() * width,
                y: Math.random() * height,
                z: Math.random() * 300,
                opacity: Math.random() * 0.3 + 0.1,
                speed: Math.random() * 0.2 + 0.05
            });
        }

        // Midground: 3D Grid lines
        for (let i = -10; i <= 10; i++) {
            gridLines.push({ x1: i * 200, y1: -height, x2: i * 200, y2: height, z: 500 }); // Vert
            gridLines.push({ x1: -width, y1: i * 200, x2: width, y2: i * 200, z: 500 }); // Horiz
        }

        let time = 0;
        let cameraDrift = 0;

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            time += 0.01;
            cameraDrift = Math.sin(time * 0.2) * (width * 0.01); // 2% drift

            const centerX = width / 2 + cameraDrift;
            const centerY = height / 2;

            // --- BACKGROUND LAYER (Nebula & Sonar) ---
            ctx.save();
            const nebulaGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, width);
            nebulaGrad.addColorStop(0, '#0a1628');
            nebulaGrad.addColorStop(1, '#06090f');
            ctx.fillStyle = nebulaGrad;
            ctx.fillRect(0, 0, width, height);

            // Pulsing Sonar Circles
            const sonarPulse = (time % 3) / 3;
            ctx.beginPath();
            ctx.arc(centerX, centerY, (sonarPulse * width * 0.8), 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(200, 169, 110, ${0.04 * (1 - sonarPulse)})`;
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.restore();

            // --- MIDGROUND LAYER (3D Grid & Volumetric Light) ---
            ctx.save();
            const gridOpacity = 0.08 + Math.sin(time * 0.5) * 0.03; // "Breathing" grid
            ctx.strokeStyle = `rgba(200, 169, 110, ${gridOpacity})`;
            ctx.lineWidth = 0.5;

            gridLines.forEach(l => {
                const p1 = 800 / (800 + l.z);
                const p2 = 800 / (800 + l.z);
                ctx.beginPath();
                ctx.moveTo(centerX + l.x1 * p1, centerY + l.y1 * p1);
                ctx.lineTo(centerX + l.x2 * p2, centerY + l.y2 * p2);
                ctx.stroke();
            });

            // Volumetric Light Shafts
            const drawGodRay = (x: number, y: number, angle: number, color: string) => {
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(angle);
                const rayGrad = ctx.createLinearGradient(0, 0, 0, height * 1.5);
                rayGrad.addColorStop(0, color + '22');
                rayGrad.addColorStop(1, 'transparent');
                ctx.fillStyle = rayGrad;
                ctx.beginPath();
                ctx.moveTo(-100, 0);
                ctx.lineTo(100, 0);
                ctx.lineTo(400, height * 1.5);
                ctx.lineTo(-400, height * 1.5);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            };
            drawGodRay(0, 0, Math.PI / 4, '#c8a96e'); // Gold Ray
            drawGodRay(width, 0, -Math.PI / 4, '#c8a96e'); // Gold Ray
            ctx.restore();

            // --- FOREGROUND LAYER (Particles, Fragments, Scales) ---

            // Legal Fragments
            ctx.font = '300 14px "Playfair Display", serif';
            ctx.textAlign = 'center';
            legalFragments.forEach(f => {
                f.y -= f.speed;
                if (f.y < -50) f.y = height + 50;

                const p = 500 / (500 + f.z);
                const fx = centerX + (f.x - width / 2) * p;
                const fy = f.y * p;

                ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity * p})`;
                ctx.fillText(f.text, fx, fy);
            });

            // Rising Particles
            particles.forEach(p => {
                p.y -= p.speed;
                if (p.y < 0) p.y = height;

                const psp = 400 / (400 + p.z);
                const px = centerX + (p.x - width / 2) * psp;
                const py = p.y * psp;

                ctx.beginPath();
                ctx.arc(px, py, p.size * psp, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 169, 110, ${0.4 * psp})`;
                ctx.fill();
            });

            // Scales of Justice (Wireframe Silhouette in Foreground)
            const drawScales = (x: number, y: number, scale: number) => {
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(Math.sin(time * 0.3) * 0.05);
                ctx.strokeStyle = 'rgba(200, 169, 110, 0.2)';
                ctx.lineWidth = 1;
                ctx.shadowBlur = 15;
                ctx.shadowColor = 'rgba(200, 169, 110, 0.4)';

                // Stem
                ctx.beginPath(); ctx.moveTo(0, -100 * scale); ctx.lineTo(0, 80 * scale); ctx.stroke();
                // Crossbar
                const tilt = Math.sin(time * 0.8) * 15;
                ctx.beginPath(); ctx.moveTo(-120 * scale, -70 * scale + tilt); ctx.lineTo(120 * scale, -70 * scale - tilt); ctx.stroke();
                // Plate support
                ctx.beginPath(); ctx.arc(-120 * scale, 0 * scale + tilt, 50 * scale, 0, Math.PI, false); ctx.stroke();
                ctx.beginPath(); ctx.arc(120 * scale, 0 * scale - tilt, 50 * scale, 0, Math.PI, false); ctx.stroke();

                ctx.restore();
            };
            drawScales(centerX + 400, centerY - 100, 1.2);

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
            {/* 4D Parallax Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ filter: 'contrast(1.1) brightness(1.2)' }}
            />

            {/* Post-Processing Layer: Vignette & Grain */}
            <div className="absolute inset-0 z-[5] pointer-events-none">
                <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#06090f]/60" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-3 px-8 py-2.5 rounded-full bg-[#c8a96e]/5 border border-[#c8a96e]/20 text-[#c8a96e] text-[10px] font-bold tracking-[0.6em] uppercase mb-16 backdrop-blur-2xl"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8a96e] shadow-[0_0_15px_#c8a96e] animate-pulse" />
                    <ShieldCheck size={14} className="opacity-80" /> Autoridad Jurídica Global
                </motion.div>

                {/* Phrases Cycle */}
                <div className="h-[200px] md:h-[300px] flex items-center justify-center w-full mb-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98, y: 40, filter: 'blur(15px)' }}
                            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 1.02, y: -40, filter: 'blur(15px)' }}
                            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                            className="text-center"
                        >
                            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-tight uppercase italic relative tracking-tighter">
                                <span className="relative z-10 block drop-shadow-[0_0_40px_rgba(200,169,110,0.3)]">
                                    {phrases[index].split(' ').map((word, i) => {
                                        const isBrand = phrases[index] === "LEX 360°";
                                        const isFocus = isBrand || (phrases[index].split(' ').length > 2 ? i === 1 : i === 0);
                                        return (
                                            <span key={i} className={isFocus ? "text-transparent bg-clip-text bg-gradient-to-br from-[#c8a96e] via-white to-[#c8a96e] animate-shimmer" : "text-white"}>
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
                    animate={{ opacity: 0.4 }}
                    className="text-white text-[10px] md:text-xs max-w-2xl text-center mb-16 leading-relaxed font-black tracking-[0.8em] uppercase italic"
                >
                    "Estrategia Jurídica de Élite"
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
                    {children}
                </div>
            </div>

            {/* Cinematic Teal Highlight (Complementary) */}
            <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none" />
        </div>
    );
}
