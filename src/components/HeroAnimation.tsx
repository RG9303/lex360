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

    // Plexus Background Effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const points: Point[] = [];
        const maxDistance = 150 * (width / 1920); // Responsive distance
        const pointCount = Math.floor((width * height) / 15000); // Responsive density

        class Point {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 1.5 + 0.5;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(197, 160, 89, 0.4)';
                ctx.fill();
            }
        }

        for (let i = 0; i < pointCount; i++) {
            points.push(new Point());
        }

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Update and draw points
            points.forEach(p => {
                p.update();
                // p.draw(); // Hidden points for cleaner look, only show lines
            });

            // Draw lines (Plexus)
            ctx.lineWidth = 0.5;
            for (let i = 0; i < points.length; i++) {
                for (let j = i + 1; j < points.length; j++) {
                    const dx = points[i].x - points[j].x;
                    const dy = points[i].y - points[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDistance) {
                        const opacity = 1 - dist / maxDistance;
                        ctx.beginPath();
                        ctx.moveTo(points[i].x, points[i].y);
                        ctx.lineTo(points[j].x, points[j].y);
                        ctx.strokeStyle = `rgba(0, 180, 255, ${opacity * 0.15})`;
                        ctx.stroke();

                        // Subtle gold dots at intersections
                        if (opacity > 0.8) {
                            ctx.beginPath();
                            ctx.arc(points[i].x, points[i].y, 1, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(197, 160, 89, ${opacity * 0.3})`;
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
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Canvas Plexus Layer */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 opacity-40"
            />

            {/* Deep Background Overlays */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-900/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gold text-[9px] font-bold tracking-[0.4em] uppercase mb-12 backdrop-blur-md"
                >
                    <ShieldCheck size={12} className="text-gold/80" /> Innovación Legal Inteligente
                </motion.div>

                {/* Phrases Cycle */}
                <div className="h-[120px] md:h-[200px] flex items-center justify-center w-full mb-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -30, scale: 1.02 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-center"
                        >
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight uppercase italic relative">
                                <span className="relative z-10">
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
                                {/* Subtle Glow Behind Text */}
                                <span className="absolute inset-0 blur-2xl bg-white/5 -z-10" />
                            </h1>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 0.5 }}
                    className="text-slate-300 text-xs md:text-sm max-w-2xl text-center mb-16 leading-relaxed font-bold tracking-[0.3em] uppercase italic"
                >
                    "Estrategia Jurídica de Vanguardia"
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    {children}
                </div>
            </div>

            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.005),rgba(0,0,255,0.01))] z-20 bg-[length:100%_4px,3px_100%] pointer-events-none" />
        </div>
    );
}
