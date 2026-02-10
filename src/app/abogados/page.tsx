'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Scale, Users, ArrowRight, Gavel, ShieldCheck, Landmark } from 'lucide-react';
import { abogados } from '@/data/abogados';

export default function AbogadosPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" as any }
        }
    };

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
                    <Link href="/#servicios" className="hover:text-gold transition-colors">Servicios</Link>
                    <Link href="/abogados" className="text-gold">Abogados</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 pointer-events-none"></div>
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-[100px]"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase italic">
                            Nuestra <span className="text-gold">Elite</span> Legal
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed mb-12">
                            Un equipo multidisciplinario de juristas internacionales, magistrados y consultores estratégicos dedicados a la excelencia y protección 360°.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Lawyers Grid */}
            <section className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {abogados.map((abogado) => (
                        <motion.div
                            key={abogado.slug}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group relative h-full"
                        >
                            <div className="absolute inset-0 bg-gold/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                            <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-white/5 p-8 rounded-[2rem] flex flex-col justify-between overflow-hidden">
                                {/* Decorative Icon */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors"></div>

                                <div>
                                    <div className="mb-6 flex justify-between items-start">
                                        <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                                            <Scale size={20} />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-black mb-2 tracking-tight group-hover:text-gold transition-colors">
                                        {abogado.name}
                                    </h3>
                                    <p className="text-gold/80 text-xs font-bold uppercase tracking-widest mb-4">
                                        {abogado.title}
                                    </p>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                        {abogado.shortBio}
                                    </p>
                                </div>

                                <Link
                                    href={`/abogados/${abogado.slug}`}
                                    className="flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest group-hover:gap-5 transition-all w-fit"
                                >
                                    Ver Perfil Completo <ArrowRight size={14} className="text-gold" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Trust Quote */}
            <section className="container mx-auto px-6 mt-32">
                <div className="glass-card bg-white/5 border border-white/10 p-16 rounded-[4rem] relative overflow-hidden text-center max-w-5xl mx-auto">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px]"></div>
                    <Users className="mx-auto w-16 h-16 text-gold mb-8 opacity-30" />
                    <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Compromiso Institucional</h2>
                    <p className="text-xl text-slate-400 font-light italic leading-relaxed">
                        "La fuerza de Lex-360 reside en la diversidad de talentos y la profundidad del conocimiento de nuestros líderes de área, unidos por una sola misión: su tranquilidad legal."
                    </p>
                </div>
            </section>

            {/* Footer Nav Links Replication */}
            <section className="container mx-auto px-6 mt-24 pt-12 border-t border-white/5 text-center">
                <div className="flex flex-wrap justify-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                    <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
                    <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
                    <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
                </div>
            </section>
        </main>
    );
}
