'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { services, getIcon } from '@/data/services';
import { abogados } from '@/data/abogados';
import Link from 'next/link';

export default function ServicesCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            el.addEventListener('scroll', checkScroll);
            checkScroll();
            window.addEventListener('resize', checkScroll);
        }
        return () => {
            el?.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative group/carousel">
            {/* Navigation Arrows */}
            <div className="absolute -top-24 right-0 flex gap-4 z-20">
                <button
                    onClick={() => scroll('left')}
                    disabled={!canScrollLeft}
                    className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all ${canScrollLeft
                            ? 'border-gold text-gold hover:bg-gold hover:text-primary shadow-lg shadow-gold/20'
                            : 'border-white/10 text-white/20 cursor-not-allowed'
                        }`}
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={() => scroll('right')}
                    disabled={!canScrollRight}
                    className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all ${canScrollRight
                            ? 'border-gold text-gold hover:bg-gold hover:text-primary shadow-lg shadow-gold/20'
                            : 'border-white/10 text-white/20 cursor-not-allowed'
                        }`}
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Carousel Container */}
            <div
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto pb-12 pt-4 no-scrollbar snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {services.map((service, i) => {
                    const leader = service.leaderSlug
                        ? abogados.find(a => a.slug === service.leaderSlug)
                        : null;

                    const specialists = abogados.filter(a =>
                        a.specialties.some(s => s.toLowerCase().includes(service.specialty.toLowerCase())) &&
                        a.slug !== service.leaderSlug
                    ).slice(0, 3);

                    return (
                        <motion.div
                            key={i}
                            className="min-w-[300px] md:min-w-[380px] snap-start"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <div className="group relative bg-secondary-dark p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-white/5 h-[480px] flex flex-col overflow-hidden">
                                <div className="mb-8 p-4 w-fit rounded-2xl bg-gold/5 border border-gold/10 text-gold group-hover:scale-110 transition-transform duration-500">
                                    {getIcon(service.iconName)}
                                </div>
                                <h3 className="text-2xl font-serif font-medium mb-4 tracking-wide group-hover:text-gold transition-colors">{service.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-6 flex-grow line-clamp-3">
                                    {service.description}
                                </p>

                                {/* Overlay Content (Hidden by default, shown on hover like original) */}
                                <div className="absolute inset-0 bg-tertiary-dark/95 backdrop-blur-md p-8 flex flex-col justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-2xl z-20">
                                    {leader && (
                                        <>
                                            <p className="text-[10px] text-gold font-bold uppercase tracking-widest mb-2">Líder de Área</p>
                                            <Link href={`/abogados/${leader.slug}`} className="block group/leader">
                                                <p className="text-lg font-serif font-medium mb-1 text-white group-hover/leader:text-gold transition-colors">{leader.name}</p>
                                                <p className="text-[9px] text-slate-500 uppercase tracking-widest mb-4">{leader.title}</p>
                                            </Link>
                                        </>
                                    )}

                                    {specialists.length > 0 && (
                                        <div className={`${leader ? 'mt-2 pt-6 border-t border-white/10' : ''}`}>
                                            <p className="text-[9px] text-gold font-bold uppercase tracking-widest mb-4">Especialistas</p>
                                            <div className="flex flex-col gap-3">
                                                {specialists.map((spec) => (
                                                    <Link
                                                        key={spec.slug}
                                                        href={`/abogados/${spec.slug}`}
                                                        className="group/spec flex items-center justify-between py-1 border-b border-white/5 last:border-0"
                                                    >
                                                        <span className="text-[11px] text-slate-300 group-hover/spec:text-white transition-colors capitalize">{spec.name.toLowerCase()}</span>
                                                        <ArrowRight size={10} className="text-gold opacity-0 group-hover/spec:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="mt-auto pt-8">
                                        {leader ? (
                                            <Link
                                                href={`/abogados/${leader.slug}`}
                                                className="bg-gold text-primary-dark font-bold px-6 py-3 rounded-full text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-xl inline-block"
                                            >
                                                Ver Líder de Área
                                            </Link>
                                        ) : (
                                            <Link
                                                href="/abogados"
                                                className="bg-gold text-primary-dark font-bold px-6 py-3 rounded-full text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-xl inline-block"
                                            >
                                                Ver Especialistas
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
}
