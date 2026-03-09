'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { abogados } from '@/data/abogados';
import Link from 'next/link';

// Background images for the 6 main categories to match the luxurious aesthetic
const backgroundImages = [
    "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000", // Civil (Courthouse)
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000", // Penal (Scales dark)
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000", // Administrativo (Documents)
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=2000", // Amparo (Library)
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000", // Fiscal (Accounting/Business)
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"  // Médico (Medical abstract)
];

const mainSpecialties = [
    'Derecho Civil',
    'Derecho Penal',
    'Derecho Administrativo',
    'Derecho Constitucional y Amparo',
    'Derecho Fiscal',
    'Arbitraje Médico'
];

export default function EspecializacionAccordion() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Filter the services to only include the main 6 from the reference HTML
    const featuredServices = mainSpecialties.map(title => 
        services.find(s => s.title === title)
    ).filter(Boolean) as typeof services;

    return (
        <div className="w-full relative z-10" data-purpose="expertise-accordion">
            <div className="mb-12">
                <h2 className="text-sm font-medium text-gold uppercase tracking-[0.5em] mb-6 font-sans">Especialización</h2>
                <h3 className="text-4xl md:text-6xl font-serif font-normal text-white mb-6">Servicios Legales Premium</h3>
                <p className="text-slate-400 max-w-xl text-lg font-light leading-relaxed">
                    Soluciones integrales con el respaldo tecnológico de Lex-360°.
                </p>
            </div>

            <div className="border-t border-white/10" data-purpose="accordion-container">
                {featuredServices.map((service, index) => {
                    const isActive = activeIndex === index;
                    const numberStr = `0${index + 1}.`;
                    const leader = service.leaderSlug ? abogados.find(a => a.slug === service.leaderSlug) : null;
                    const bgImage = backgroundImages[index];

                    return (
                        <article
                            key={index}
                            onClick={() => setActiveIndex(isActive ? null : index)}
                            className={`group border-b border-white/10 transition-all duration-500 overflow-hidden cursor-pointer ${
                                isActive ? 'h-auto md:h-[400px]' : 'hover:bg-white/5 py-6 h-auto'
                            }`}
                        >
                            <AnimatePresence mode="wait">
                                {isActive ? (
                                    <motion.div
                                        key={`active-${index}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative w-full h-full py-12 md:py-0 flex items-center"
                                    >
                                        {/* Background Image */}
                                        <div className="absolute inset-0 z-0">
                                            <div 
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105 grayscale opacity-40 mix-blend-luminosity"
                                                style={{ backgroundImage: `url(${bgImage})` }}
                                            />
                                            {/* Gradient Overlay using generic tailwind properties */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40"></div>
                                            <div className="absolute inset-0 bg-[#c6a87c]/10 mix-blend-overlay"></div>
                                        </div>

                                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full px-4 md:px-8">
                                            {/* Number */}
                                            <div 
                                                className="md:col-span-2 text-6xl md:text-8xl font-serif font-bold text-transparent"
                                                style={{ WebkitTextStroke: '1px #C6A87C' }}
                                            >
                                                {numberStr}
                                            </div>
                                            {/* Content */}
                                            <div className="md:col-span-9">
                                                <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">{service.title}</h2>
                                                <p className="text-slate-300 font-light text-lg md:max-w-2xl mb-6">
                                                    {service.description}
                                                </p>
                                                
                                                {leader ? (
                                                    <Link 
                                                        href={`/abogados/${leader.slug}`}
                                                        className="inline-flex items-center gap-2 mt-2 text-gold uppercase text-xs tracking-widest border-b border-gold/30 pb-1 hover:text-white hover:border-white transition-all w-fit group/btn"
                                                    >
                                                        Ver Líder de Área: {leader.name}
                                                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                                    </Link>
                                                ) : (
                                                    <Link 
                                                        href="/abogados"
                                                        className="inline-flex items-center gap-2 mt-2 text-gold uppercase text-xs tracking-widest border-b border-gold/30 pb-1 hover:text-white hover:border-white transition-all w-fit group/btn"
                                                    >
                                                        Ver Especialistas
                                                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                                    </Link>
                                                )}
                                            </div>
                                            {/* Icon */}
                                            <div className="md:col-span-1 flex justify-end">
                                                <div className="text-gold bg-black/20 p-2 rounded-full border border-gold/20 backdrop-blur-sm">
                                                    <Minus size={24} />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key={`inactive-${index}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full px-4 md:px-8"
                                    >
                                        <div 
                                            className="md:col-span-2 text-4xl md:text-5xl font-serif font-bold opacity-50 group-hover:opacity-100 transition-opacity text-transparent"
                                            style={{ WebkitTextStroke: '1px #C6A87C' }}
                                        >
                                            {numberStr}
                                        </div>
                                        <div className="md:col-span-9">
                                            <h2 className="text-2xl md:text-3xl font-serif text-white group-hover:text-gold transition-colors">
                                                {service.title}
                                            </h2>
                                            <p className="text-slate-500 group-hover:text-slate-400 font-light text-sm mt-2 hidden md:block transition-colors">
                                                {service.description}
                                            </p>
                                        </div>
                                        <div className="md:col-span-1 flex justify-end text-white/30 group-hover:text-gold transition-colors">
                                            <Plus size={24} />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </article>
                    );
                })}
            </div>

            <div className="text-center mt-16 pb-8">
                <Link 
                    href="/abogados"
                    className="inline-flex items-center gap-3 text-gold uppercase text-xs tracking-widest border border-gold/30 px-8 py-4 rounded-full hover:bg-gold hover:text-primary-dark transition-all group shadow-lg shadow-gold/5"
                >
                    Ver Especialistas en las +30 Áreas de Práctica
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
}
