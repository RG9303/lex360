'use client';

import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 4500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            {/* Background Layers */}
            <div className="absolute inset-0 z-0 bg-slate-950">
                {/* Deep Gradient Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] opacity-30" />
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] animate-pulse" />

                {/* Starfield / Data Nodes */}
                <div className="absolute inset-0">
                    {[...Array(40)].map((_, i) => (
                        <motion.div
                            key={`node-${i}`}
                            className="absolute w-[2px] h-[2px] bg-gold/20 rounded-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.4, 0] }}
                            transition={{
                                duration: 3 + Math.random() * 5,
                                repeat: Infinity,
                                delay: Math.random() * 10
                            }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                            }}
                        />
                    ))}
                </div>

                {/* Dynamic SVG Globe */}
                <svg className="w-full h-full opacity-40" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="ringGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#C5A059" stopOpacity="0" />
                        </radialGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    <motion.g
                        animate={{ rotate: 360 }}
                        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: '500px 500px' }}
                    >
                        {/* Latitude & Longitude with complex arcs */}
                        {[...Array(12)].map((_, i) => (
                            <React.Fragment key={i}>
                                <ellipse
                                    cx="500" cy="500" rx="400" ry={30 * (i + 1)}
                                    fill="none" stroke="#C5A059" strokeWidth="0.5" strokeOpacity="0.15"
                                />
                                <ellipse
                                    cx="500" cy="500" rx={30 * (i + 1)} ry="400"
                                    fill="none" stroke="#C5A059" strokeWidth="0.5" strokeOpacity="0.15"
                                    transform={`rotate(${30 * i} 500 500)`}
                                />
                            </React.Fragment>
                        ))}

                        {/* Glowing Connection Nodes */}
                        {[...Array(8)].map((_, i) => (
                            <motion.circle
                                key={`con-${i}`}
                                cx={500 + 350 * Math.cos((i * 45 * Math.PI) / 180)}
                                cy={500 + 350 * Math.sin((i * 45 * Math.PI) / 180)}
                                r="3"
                                fill="#C5A059"
                                filter="url(#glow)"
                                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                                transition={{ duration: 2 + i, repeat: Infinity }}
                            />
                        ))}
                    </motion.g>

                    {/* Inner pulsating tech rings */}
                    <motion.circle
                        cx="500" cy="500" r="300"
                        fill="none" stroke="#C5A059" strokeWidth="1" strokeDasharray="10 20"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: '500px 500px' }}
                    />
                </svg>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gold text-[9px] font-bold tracking-[0.4em] uppercase mb-10 backdrop-blur-md"
                >
                    <ShieldCheck size={12} /> Innovación Legal Inteligente
                </motion.div>

                {/* Phrases Cycle */}
                <div className="h-[200px] md:h-[300px] flex items-center justify-center w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
                            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                            className="text-center"
                        >
                            <h1 className="text-4xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] uppercase italic">
                                {phrases[index].split(' ').map((word, i) => {
                                    const isGold = (phrases[index].split(' ').length > 2) ? (i === 1) : (i === 0);
                                    return (
                                        <span key={i} className={isGold ? "text-gold" : "text-white"}>
                                            {word}{' '}
                                            {i === 1 && phrases[index].split(' ').length > 2 && <br className="hidden md:block" />}
                                        </span>
                                    );
                                })}
                            </h1>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    className="text-slate-300 text-xs md:text-sm max-w-2xl text-center mb-12 leading-relaxed font-bold tracking-[0.3em] uppercase italic"
                >
                    "Su tranquilidad, nuestra cobertura total."
                </motion.p>

                {/* CTA Buttons - Passed from Parent or Static here */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    {children}
                </div>
            </div>
        </div>
    );
}
