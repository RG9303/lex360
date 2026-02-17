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
    const videoRef = useRef<HTMLVideoElement>(null);
    const isBrand = index === 0;

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    // Sync Video Playback
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75; // Slow-motion feel
        }
    }, []);

    // Digital Overlays: Brillos & Particles
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles: { x: number, y: number, size: number, speed: number, opacity: number }[] = [];
        for (let i = 0; i < 80; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 2 + 0.5,
                speed: Math.random() * 0.5 + 0.2,
                opacity: Math.random() * 0.5 + 0.1
            });
        }

        const beams: { angle: number, speed: number, size: number, radius: number, color: string }[] = [];
        for (let i = 0; i < 6; i++) {
            beams.push({
                angle: Math.random() * Math.PI * 2,
                speed: 0.02 + Math.random() * 0.02,
                size: 150 + Math.random() * 100,
                radius: 250 + Math.random() * 150,
                color: Math.random() > 0.5 ? '#00e5ff' : '#c8a96e'
            });
        }

        let time = 0;

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            time += 0.01;

            const centerX = width / 2;
            const centerY = height / 2;

            // Draw Digital Particles (Floating Innovation)
            particles.forEach(p => {
                p.y -= p.speed;
                if (p.y < 0) p.y = height;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 229, 255, ${p.opacity})`;
                ctx.fill();
            });

            // Draw Sublte Orbital Beams (Brillos)
            beams.forEach(b => {
                b.angle += b.speed;
                const bx = centerX + Math.cos(b.angle) * b.radius;
                const by = centerY + Math.sin(b.angle) * b.radius * 0.5;

                const grad = ctx.createRadialGradient(bx, by, 0, bx, by, b.size);
                grad.addColorStop(0, b.color + '44');
                grad.addColorStop(1, 'transparent');

                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(bx, by, b.size, 0, Math.PI * 2);
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
        };
    }, []);

    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#02040a]">
            {/* 1. Base Video Layer (Cinematic Lawyers/Office) */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-105"
                style={{
                    filter: 'brightness(0.35) contrast(1.1) saturate(0.6) hue-rotate(-5deg)',
                    // Darker cinematic grade to blend with Site aesthetics
                }}
            >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-business-people-walking-in-a-hallway-4433-large.mp4" type="video/mp4" />
                {/* Note: This is a placeholder professional walking video. User can replace with their own. */}
            </video>

            {/* 2. Digital Overlay Canvas (Brillos & Particles) */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-10 pointer-events-none opacity-60"
            />

            {/* 3. Cinematic Vignette & Framing */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(2,4,10,0.85)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#02040a] via-[#02040a]/20 to-transparent" />
                {/* Blue Side Glows (Intrkt style) */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cyan-500/5 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cyan-500/5 to-transparent" />
            </div>

            {/* 4. Content Container */}
            <div className="relative z-30 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[9px] font-extralight tracking-[0.6em] uppercase mb-16 backdrop-blur-3xl"
                >
                    <div className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_15px_#00e5ff] animate-pulse" />
                    <ShieldCheck size={14} className="opacity-60" /> Inteligencia Legal Global
                </motion.div>

                {/* Phrases Cycle - Ultra-Thin Typography */}
                <div className="h-[180px] md:h-[280px] flex items-center justify-center w-full mb-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, filter: 'blur(15px)', y: 20 }}
                            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                            exit={{ opacity: 0, filter: 'blur(15px)', y: -20 }}
                            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                            className="text-center"
                        >
                            <h1 className={`${isBrand ? "text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter italic" : "text-4xl md:text-6xl lg:text-7xl font-thin tracking-[0.2em]"} text-white leading-tight uppercase relative drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]`}>
                                {isBrand ? (
                                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-cyan-500 animate-shimmer">
                                        {phrases[index]}
                                    </span>
                                ) : (
                                    phrases[index].split(' ').map((word, i) => {
                                        const isFocus = (phrases[index].split(' ').length > 2) ? (i === 1) : (i === 0);
                                        return (
                                            <span key={i} className={isFocus ? "text-cyan-400 font-extralight" : "text-white/80"}>
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

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    className="text-white text-[10px] md:text-xs max-w-2xl text-center mb-16 leading-relaxed font-extralight tracking-[1em] uppercase italic"
                >
                    "Estrategia Jurídica de Vanguardia"
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                    {children}
                </div>
            </div>

            {/* Cinematic Grain Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-[40] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>
    );
}
