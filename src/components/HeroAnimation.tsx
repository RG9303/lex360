'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroAnimation({ children }: { children?: React.ReactNode }) {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-110"
                style={{ backgroundImage: "url('/hero-bg.png?v=4')", filter: "blur(6px)" }}
            />

            {/* Base Background/Shadow Overlays */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                {/* Transparency at the top (gradient from dark to transparent) */}
                <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#02050a] via-[#02050a]/60 to-transparent" />
                
                {/* Vignette effect around the edges if desired, or gradient at the bottom to blend with next section */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#02050a] via-[#02050a]/80 to-transparent" />
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
            </div>

            {/* Content Container (Recuadros / Botones) */}
            <div className="relative z-30 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center h-full">
                {/* Text Overlay */}
                <div className="flex flex-col items-center justify-center flex-grow text-center mt-32 md:mt-40">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white font-medium tracking-wide drop-shadow-2xl mb-4 leading-tight">
                        Tu tranquilidad tiene nombre: <br className="hidden md:block" />
                        <span className="text-gold">Lex 360°.</span>
                    </h1>
                    <p className="text-sm md:text-lg lg:text-xl text-white/90 font-light tracking-widest uppercase mt-4 max-w-2xl">
                        La máxima autoridad legal de la era digital.
                    </p>
                </div>

                {/* CTA Section (Buttons) */}
                <div className="flex flex-col sm:flex-row gap-6 md:gap-12 justify-center items-center mt-auto mb-32 md:mb-40">
                    {children}
                </div>
            </div>

            {/* Subtle stardust overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.08] z-30 mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>
    );
}
