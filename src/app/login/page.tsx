'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight, ShieldCheck, Landmark } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Mock Authentication Simulation
        setTimeout(() => {
            if (email === 'cliente@lex-360.com' && password === 'admin123') {
                localStorage.setItem('lex360_auth', 'authenticated');
                router.push('/portal');
            } else {
                setError('Credenciales incorrectas. Verifique su correo o clave de expediente.');
                setIsLoading(false);
            }
        }, 1500); // Simulate network delay
    };

    return (
        <main className="min-h-screen bg-primary-dark flex flex-col md:flex-row">
            {/* Left Side: Branding / Info */}
            <div className="hidden md:flex flex-col flex-1 relative bg-secondary-dark/50 overflow-hidden p-12 justify-center items-start">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />

                <div className="relative z-10 max-w-lg">
                    <Link href="/" className="inline-block mb-12">
                        <img src="/logo.jpg" alt="Lex-360 Logo" className="w-16 h-16 rounded-full object-cover shadow-2xl border-2 border-gold/30 hover:border-gold transition-colors" />
                    </Link>

                    <h1 className="text-4xl lg:text-5xl font-serif font-normal text-white mb-6 uppercase leading-tight">
                        Portal Privado <br /> de Clientes
                    </h1>
                    <p className="text-slate-400 text-lg font-light leading-relaxed mb-12">
                        Acceda a nuestra plataforma segura para consultar el estatus en tiempo real de sus juicios, revisar honorarios y descargar acuses directamente desde su archivo digital blindado.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-slate-300">
                            <ShieldCheck className="text-gold" size={24} />
                            <span className="font-light tracking-wide">Cifrado de Extremo a Extremo</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-300">
                            <Lock className="text-gold" size={24} />
                            <span className="font-light tracking-wide">Acceso Exclusivo a Expedientes</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-300">
                            <Landmark className="text-gold" size={24} />
                            <span className="font-light tracking-wide">Transparencia Judicial 360°</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="flex-1 flex flex-col justify-center items-center p-8 relative">
                <div className="absolute top-8 left-8 md:hidden">
                    <Link href="/">
                        <img src="/logo.jpg" alt="Lex-360 Logo" className="w-10 h-10 rounded-full border border-gold/30" />
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl backdrop-blur-xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -z-10" />

                    <h2 className="text-2xl font-serif font-medium text-white mb-2 uppercase tracking-wide">Ingreso Seguro</h2>
                    <p className="text-xs text-slate-500 mb-8 uppercase tracking-[0.2em]">Identificación de Cliente</p>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs p-3 rounded-lg flex items-center gap-2">
                                <Lock size={14} /> {error}
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Correo Electrónico</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="cliente@empresa.com"
                                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-gold/50 focus:bg-white/5 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-2">Clave de Expediente</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-gold/50 focus:bg-white/5 transition-all"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gold text-primary-dark font-bold py-4 rounded-xl text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group mt-8"
                        >
                            {isLoading ? (
                                <span className="animate-pulse">Autenticando...</span>
                            ) : (
                                <>
                                    Acceder al Portal <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                            ¿Olvidó su clave? Contacte a su abogado titular.
                        </p>
                    </div>
                </motion.div>

                {/* Demo Hint */}
                <div className="absolute bottom-8 text-center w-full hidden md:block">
                    <p className="text-xs text-slate-600 border border-slate-800 bg-slate-900/50 px-4 py-2 rounded-full inline-block backdrop-blur-sm">
                        <span className="font-bold text-gold">Demo Access:</span> Email: cliente@lex-360.com | Password: admin123
                    </p>
                </div>
            </div>
        </main>
    );
}
