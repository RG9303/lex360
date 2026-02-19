'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Users, Briefcase, BookOpen, Mail, ChevronRight, Lock } from 'lucide-react';
import Link from 'next/link';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { label: 'Inicio', href: '/', icon: <Home size={20} /> },
        { label: 'Servicios', href: '/#servicios', icon: <Briefcase size={20} /> },
        { label: 'Abogados', href: '/abogados', icon: <Users size={20} /> },
        { label: 'Nosotros', href: '/#quienes-somos', icon: <Users size={20} /> },
        { label: 'Blog Legal', href: '/#blog', icon: <BookOpen size={20} /> },
        { label: 'Contacto', href: '/#contacto', icon: <Mail size={20} /> },
        { label: 'Portal Clientes', href: '/login', icon: <Lock size={20} className="text-gold" /> },
    ];

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-white hover:text-gold transition-colors"
                aria-label="Toggle menu"
            >
                <Menu size={28} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[60]"
                        />

                        {/* Menu Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-slate-900 border-l border-white/10 z-[70] shadow-2xl p-8 flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <div className="flex items-center gap-3">
                                    <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full border border-gold/30" />
                                    <span className="text-xl font-black italic tracking-tighter text-white">LEX-360</span>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-slate-400 hover:text-white transition-colors"
                                >
                                    <X size={28} />
                                </button>
                            </div>

                            <nav className="flex-grow">
                                <ul className="space-y-4">
                                    {menuItems.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/30 hover:bg-gold/5 group transition-all"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <span className="text-gold group-hover:scale-110 transition-transform">{item.icon}</span>
                                                    <span className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">{item.label}</span>
                                                </div>
                                                <ChevronRight size={18} className="text-slate-600 group-hover:text-gold transition-colors" />
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>

                            <div className="mt-auto pt-8 border-t border-white/5">
                                <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold mb-4">
                                    Profesionalismo & Tecnología
                                </p>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gold">
                                        <Briefcase size={18} />
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gold">
                                        <Users size={18} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
