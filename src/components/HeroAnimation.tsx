'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
    "JUSTICIA CON VISIÓN 360°",
    "LEGISLACIÓN INTELIGENTE",
    "PROTECCIÓN PATRIMONIAL",
    "INNOVACIÓN JURÍDICA",
    "EXCELENCIA ÉTICA"
];

export default function HeroAnimation() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            {/* Digital Globe / Network Background */}
            <div className="absolute inset-0 z-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                            <stop offset="0%" stopColor="#C5A059" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#C5A059" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <motion.g
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: '500px 500px' }}
                    >
                        {/* Latitude lines */}
                        {[...Array(10)].map((_, i) => (
                            <ellipse
                                key={`lat-${i}`}
                                cx="500"
                                cy="500"
                                rx="450"
                                ry={45 * (i + 1)}
                                fill="none"
                                stroke="#C5A059"
                                strokeWidth="0.5"
                                strokeOpacity="0.4"
                            />
                        ))}
                        {/* Longitude lines */}
                        {[...Array(10)].map((_, i) => (
                            <ellipse
                                key={`lon-${i}`}
                                cx="500"
                                cy="500"
                                rx={45 * (i + 1)}
                                ry="450"
                                fill="none"
                                stroke="#C5A059"
                                strokeWidth="0.5"
                                strokeOpacity="0.4"
                                transform={`rotate(${36 * i} 500 500)`}
                            />
                        ))}
                    </motion.g>
                    {/* Pulsing core */}
                    <motion.circle
                        cx="500"
                        cy="500"
                        r="200"
                        fill="url(#globeGrad)"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                </svg>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 z-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-gold/40 rounded-full"
                        initial={{
                            x: Math.random() * 1000,
                            y: Math.random() * 1000,
                            opacity: 0
                        }}
                        animate={{
                            y: [null, Math.random() * -200],
                            opacity: [0, 0.8, 0],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: 5 + Math.random() * 10,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            {/* Text Transitions */}
            <div className="relative z-10 w-full text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="w-full"
                    >
                        <h1 className="text-4xl md:text-8xl font-black text-white leading-[1.1] tracking-tighter drop-shadow-[0_0_30px_rgba(197,160,89,0.3)] uppercase italic">
                            {phrases[index].split(' ').map((word, i) => (
                                <span key={i} className={i === 1 ? "text-gold" : "text-white"}>
                                    {word}{' '}
                                    {i === 1 && <br />}
                                </span>
                            ))}
                        </h1>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
