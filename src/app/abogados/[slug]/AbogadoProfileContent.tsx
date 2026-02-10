'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronLeft, Scale, ArrowRight, ShieldCheck, Landmark, Gavel, FileText, Linkedin, Mail, Calendar } from 'lucide-react';
import { abogados } from '@/data/abogados';
import React from 'react';

export default function AbogadoProfileContent({ params }: { params: { slug: string } }) {
    const abogado = abogados.find((a) => a.slug === params.slug);

    if (!abogado) {
        return notFound();
    }

    // Choose a random icon for decorative purposes
    const icons = [<ShieldCheck key="1" />, <Landmark key="2" />, <Gavel key="3" />, <FileText key="4" />];
    const DecorativeIcon = icons[Math.floor(Math.random() * icons.length)];

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white pb-24">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-lg bg-white/5 border-b border-white/5">
                <Link href="/" className="flex items-center gap-3">
                    <img src="/logo.jpg" alt="Lex-360 Logo" className="w-10 h-10 rounded-full object-cover shadow-lg border border-gold/30" />
                    <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase italic">Lex-360</span>
                </Link>
                <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300">
                    <Link href="/" className="hover:text-gold transition-colors">Inicio</Link>
                    <Link href="/abogados" className="hover:text-gold transition-colors">Abogados</Link>
                </div>
            </nav>

            {/* Profile Header */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link
                            href="/abogados"
                            className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-[0.2em] mb-12 hover:gap-4 transition-all w-fit"
                        >
                            <ChevronLeft size={16} /> Volver al catálogo
                        </Link>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                            <div className="lg:col-span-8">
                                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase italic">
                                    {abogado.name}
                                </h1>
                                <p className="text-2xl md:text-3xl text-gold font-light mb-8 max-w-3xl leading-tight">
                                    {abogado.title}
                                </p>
                                <div className="flex flex-wrap gap-4 mb-12">
                                    {abogado.specialties.map((spec, i) => (
                                        <span key={i} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-black tracking-widest text-slate-400">
                                            {spec}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    {abogado.socialMedia?.linkedin && (
                                        <a href={abogado.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold hover:border-gold/30 transition-all">
                                            <Linkedin size={18} />
                                        </a>
                                    )}
                                    {abogado.socialMedia?.email && (
                                        <a href={`mailto:${abogado.socialMedia.email}`} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold hover:border-gold/30 transition-all">
                                            <Mail size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="lg:col-span-4 hidden lg:block">
                                <div className="glass-card bg-white/5 border border-white/10 p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>

                                    <div className="w-32 h-32 rounded-full mx-auto mb-8 p-1 border-2 border-gold/30 relative overflow-hidden">
                                        {abogado.image ? (
                                            <img src={abogado.image} alt={abogado.name} className="w-full h-full object-cover rounded-full" />
                                        ) : (
                                            <div className="w-full h-full bg-gold/10 flex items-center justify-center text-gold">
                                                <Scale size={40} />
                                            </div>
                                        )}
                                    </div>

                                    <h4 className="text-sm font-black uppercase tracking-widest mb-4">Líder de Área</h4>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-8">Lex-360 Despacho Jurídico</p>

                                    {abogado.calendarUrl ? (
                                        <a href={abogado.calendarUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-gold text-primary font-black py-4 rounded-full text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl">
                                            Agendar consulta
                                        </a>
                                    ) : (
                                        <button className="w-full bg-white/10 text-slate-500 font-black py-4 rounded-full text-xs uppercase tracking-widest cursor-not-allowed">
                                            Agenda no disponible
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Biography Content */}
            <section className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-8"
                    >
                        <div className="prose prose-invert max-w-none">
                            <h2 className="text-3xl font-black mb-12 tracking-tight uppercase italic flex items-center gap-4">
                                <span className="w-12 h-[2px] bg-gold"></span> Trayectoria Profesional
                            </h2>
                            <div className="space-y-8 text-lg text-slate-300 font-light leading-relaxed whitespace-pre-line">
                                {abogado.fullBio}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-4"
                    >
                        <div className="sticky top-32 space-y-12">
                            <div className="space-y-6">
                                <h4 className="text-xs font-black uppercase tracking-[0.4em] text-gold">Especialidades</h4>
                                <ul className="space-y-4">
                                    {abogado.specialties.map((spec, i) => (
                                        <li key={i} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-slate-400 group cursor-default">
                                            <span className="w-2 h-2 rounded-full bg-gold/50 group-hover:bg-gold transition-colors"></span>
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-1 w-full bg-gradient-to-r from-gold/20 to-transparent rounded-[2rem]">
                                <div className="bg-slate-950 p-10 rounded-[2rem] border border-white/5">
                                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-white mb-6">Consulta Premium</h4>
                                    <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                                        Obtenga asesoría directa con {abogado.name.split(' ')[0]} para un análisis estratégico de su caso.
                                    </p>
                                    {abogado.calendarUrl ? (
                                        <a
                                            href={abogado.calendarUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-3 text-gold font-black text-xs uppercase tracking-widest hover:gap-5 transition-all"
                                        >
                                            Iniciar Proceso <ArrowRight size={14} />
                                        </a>
                                    ) : (
                                        <span className="flex items-center gap-3 text-slate-600 font-bold text-xs uppercase tracking-widest cursor-not-allowed">
                                            No disponible <Calendar size={14} />
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer Nav Links Replication */}
            <section className="container mx-auto px-6 mt-32 pt-12 border-t border-white/5 text-center">
                <div className="flex flex-wrap justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                    <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
                    <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
                    <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
                </div>
            </section>
        </main>
    );
}
