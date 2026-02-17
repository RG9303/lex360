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

    // Plexus + Scales Background Effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const points: Point[] = [];
        const maxDistance = 160 * (width / 1920);
        const pointCount = Math.floor((width * height) / 14000);

        class Point {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.radius = Math.random() * 1.2 + 0.3;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }
        }

        for (let i = 0; i < pointCount; i++) {
            points.push(new Point());
        }

        let rotation = 0;

        const drawScales = (centerX: number, centerY: number, scale: number) => {
            if (!ctx) return;
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(Math.sin(rotation * 0.5) * 0.05); // Subtle tilt

            ctx.strokeStyle = 'rgba(197, 160, 89, 0.4)';
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(197, 160, 89, 0.5)';
            ctx.lineWidth = 1;

            // Base/Stem
            ctx.beginPath();
            ctx.moveTo(0, 50 * scale);
            ctx.lineTo(0, -80 * scale);
            ctx.stroke();

            // Crossbar
            const barTilt = Math.sin(rotation * 0.8) * 10 * scale;
            ctx.beginPath();
            ctx.moveTo(-100 * scale, -60 * scale + barTilt);
            ctx.lineTo(100 * scale, -60 * scale - barTilt);
            ctx.stroke();

            // Support base
            ctx.beginPath();
            ctx.moveTo(-30 * scale, 50 * scale);
            ctx.lineTo(30 * scale, 50 * scale);
            ctx.stroke();

            // Hanging Scales (Left)
            ctx.beginPath();
            ctx.arc(-100 * scale, 0 * scale + barTilt, 40 * scale, 0, Math.PI, false);
            ctx.stroke();
            ctx.moveTo(-100 * scale, -60 * scale + barTilt);
            ctx.lineTo(-140 * scale, 0 * scale + barTilt);
            ctx.moveTo(-100 * scale, -60 * scale + barTilt);
            ctx.lineTo(-60 * scale, 0 * scale + barTilt);
            ctx.stroke();

            // Hanging Scales (Right)
            ctx.beginPath();
            ctx.arc(100 * scale, 0 * scale - barTilt, 40 * scale, 0, Math.PI, false);
            ctx.stroke();
            ctx.moveTo(100 * scale, -60 * scale - barTilt);
            ctx.lineTo(60 * scale, 0 * scale - barTilt);
            ctx.moveTo(100 * scale, -60 * scale - barTilt);
            ctx.lineTo(140 * scale, 0 * scale - barTilt);
            ctx.stroke();

            ctx.restore();
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            rotation += 0.01;

            // Draw Atmospheric Glows
            const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width / 1.5);
            gradient.addColorStop(0, 'rgba(2, 6, 23, 0)');
            gradient.addColorStop(1, 'rgba(15, 23, 42, 0.4)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Draw Scales of Justice (Central Background)
            drawScales(width / 2, height / 2 - 50, 1.2);

            // Draw Plexus Lines
            ctx.lineWidth = 0.5;
            for (let i = 0; i < points.length; i++) {
                points[i].update();
                for (let j = i + 1; j < points.length; j++) {
                    const dx = points[i].x - points[j].x;
                    const dy = points[i].y - points[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDistance) {
                        const opacity = 1 - dist / maxDistance;
                        ctx.beginPath();
                        ctx.moveTo(points[i].x, points[i].y);
                        ctx.lineTo(points[j].x, points[j].y);

                        // Metallic Gradient Style (Cyan to Gold)
                        const lineGrad = ctx.createLinearGradient(points[i].x, points[i].y, points[j].x, points[j].y);
                        lineGrad.addColorStop(0, `rgba(0, 200, 255, ${opacity * 0.1})`); // Chrome/Cyan
                        lineGrad.addColorStop(1, `rgba(197, 160, 89, ${opacity * 0.2})`); // Gold

                        ctx.strokeStyle = lineGrad;
                        ctx.stroke();

                        // Intermittent bright nodes
                        if (opacity > 0.9) {
                            ctx.beginPath();
                            ctx.arc(points[i].x, points[i].y, 1, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(197, 160, 89, ${opacity * 0.5})`;
                            ctx.fill();
                        }
                    }
                }
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
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#020617]">
            {/* Canvas Layer */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 opacity-60"
                style={{ filter: 'contrast(1.1) brightness(0.9)' }}
            />

            {/* Metallic/Shadow Overlays */}
            <div className="absolute inset-0 z-[5] pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80" />
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-900/40 border border-white/10 text-gold text-[10px] font-bold tracking-[0.5em] uppercase mb-16 backdrop-blur-xl"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_10px_rgba(197,160,89,1)] animate-pulse" />
                    <ShieldCheck size={14} className="text-gold" /> Innovación Legal Inteligente
                </motion.div>

                {/* Phrases Cycle */}
                <div className="h-[120px] md:h-[200px] flex items-center justify-center w-full mb-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
                            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                            className="text-center"
                        >
                            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight uppercase italic relative">
                                <span className="relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                    {phrases[index].split(' ').map((word, i) => {
                                        const isGold = (phrases[index].split(' ').length > 2) ? (i === 1) : (i === 0);
                                        return (
                                            <span key={i} className={isGold ? "text-gold" : "text-white"}>
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
                    animate={{ opacity: 0.5 }}
                    className="text-slate-400 text-[10px] md:text-xs max-w-2xl text-center mb-16 leading-relaxed font-black tracking-[0.6em] uppercase italic"
                >
                    "Estrategia Jurídica de Vanguardia"
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                    {children}
                </div>
            </div>

            {/* Glassmorphism Scanlines Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[20] bg-[length:100%_4px] bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(255,255,255,1)_50%)]" />
        </div>
    );
}
