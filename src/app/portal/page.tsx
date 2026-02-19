'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { LogOut, FileText, CheckCircle2, Clock, AlertCircle, Download, FileUp, ChevronRight, Scale } from 'lucide-react';
import Link from 'next/link';

// Mock Data
const clientData = {
    name: "Grupo Constructor Mítikah S.A. de C.V.",
    id: "LEX-2026-8942",
    abogadoTitular: "Alejandro Valenzuela Sosa",
    activeCases: [
        {
            id: "ADR-4592/2026",
            title: "Amparo Directo en Revisión",
            materia: "Constitucional / Administrativo",
            status: "En espera de resolución",
            statusType: "warning",
            lastUpdate: "Hace 2 días"
        },
        {
            id: "NUL-1120/2026",
            title: "Juicio de Nulidad vs SAT",
            materia: "Derecho Fiscal",
            status: "Pruebas Admitidas",
            statusType: "success",
            lastUpdate: "Hace 1 semana"
        }
    ],
    documents: [
        { name: "Acuse_Presentacion_Amparo.pdf", date: "15 Oct 2026", size: "2.4 MB" },
        { name: "Contestacion_Demanda_Fiscal.pdf", date: "02 Oct 2026", size: "5.1 MB" },
        { name: "Contrato_Servicios_Lex360.pdf", date: "10 Ene 2026", size: "1.2 MB" }
    ],
    billing: {
        status: "Al corriente",
        nextPayment: "01 Nov 2026",
        amount: "$45,000 MXN"
    }
};

export default function PortalPage() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Quick Mock Auth Check
        const auth = localStorage.getItem('lex360_auth');
        if (auth !== 'authenticated') {
            router.push('/login');
        } else {
            setIsAuthenticated(true);
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('lex360_auth');
        router.push('/');
    };

    if (!isAuthenticated) return null; // Prevent flash of content

    return (
        <main className="min-h-screen bg-[#02050a] text-slate-300 pb-20">
            {/* Nav Header */}
            <nav className="w-full px-8 py-4 flex justify-between items-center bg-white/5 border-b border-white/5 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <img src="/logo.jpg" alt="Lex-360 Logo" className="w-8 h-8 rounded-full border border-gold/30" />
                    <span className="text-lg font-black tracking-tighter text-white uppercase italic hidden sm:block">Lex-360 <span className="text-gold font-light">Portal</span></span>
                </div>

                <div className="flex items-center gap-6">
                    <div className="text-right hidden md:block">
                        <p className="text-xs font-bold text-white uppercase tracking-widest">{clientData.name}</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">ID: {clientData.id}</p>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10 hidden md:block"></div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
                    >
                        <LogOut size={16} /> Salir
                    </button>
                </div>
            </nav>

            <div className="container mx-auto px-6 max-w-6xl mt-12">
                {/* Welcome Ribbon */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter uppercase italic">
                        Panel de <span className="text-gold">Seguimiento</span>
                    </h1>
                    <p className="text-sm text-slate-400 uppercase tracking-[0.2em]">Abogado Titular Asignado: <span className="text-white font-bold">{clientData.abogadoTitular}</span></p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content Area (2 cols) */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Active Cases */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8"
                        >
                            <div className="flex justify-between items-end mb-8 border-b border-white/5 pb-4">
                                <h2 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
                                    <Scale size={18} className="text-gold" /> Asuntos Activos
                                </h2>
                            </div>

                            <div className="space-y-4">
                                {clientData.activeCases.map((asunto, idx) => (
                                    <div key={idx} className="bg-slate-950/50 border border-white/5 rounded-2xl p-6 hover:border-gold/30 transition-all group">
                                        <div className="flex justify-between items-start mb-4 flex-col sm:flex-row gap-4">
                                            <div>
                                                <span className="text-[10px] text-gold font-bold uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full mb-3 inline-block">
                                                    {asunto.id}
                                                </span>
                                                <h3 className="text-lg font-bold text-white mb-1">{asunto.title}</h3>
                                                <p className="text-xs text-slate-500 uppercase tracking-widest">{asunto.materia}</p>
                                            </div>
                                            <div className="text-left sm:text-right">
                                                <div className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 sm:justify-end mb-1
                                                    ${asunto.statusType === 'success' ? 'text-green-400' : 'text-amber-400'}
                                                `}>
                                                    {asunto.statusType === 'success' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                                                    {asunto.status}
                                                </div>
                                                <p className="text-[10px] text-slate-500 uppercase tracking-widest">{asunto.lastUpdate}</p>
                                            </div>
                                        </div>
                                        <button className="w-full text-center text-xs font-bold text-slate-400 hover:text-gold uppercase tracking-widest border border-white/5 rounded-xl py-3 group-hover:border-gold/30 transition-colors flex items-center justify-center gap-2">
                                            Ver detalle completo <ChevronRight size={14} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Recent Documents */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8"
                        >
                            <div className="flex justify-between items-end mb-8 border-b border-white/5 pb-4">
                                <h2 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
                                    <FileText size={18} className="text-gold" /> Bóveda Documental
                                </h2>
                                <button className="text-xs font-bold text-gold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                                    <FileUp size={14} /> Subir Documento
                                </button>
                            </div>

                            <div className="space-y-2">
                                {clientData.documents.map((doc, idx) => (
                                    <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-white/5 hover:bg-white/5 transition-colors gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center">
                                                <FileText size={20} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-300">{doc.name}</p>
                                                <p className="text-[10px] text-slate-500 uppercase tracking-widest">{doc.date} • {doc.size}</p>
                                            </div>
                                        </div>
                                        <button className="text-xs font-bold text-slate-400 hover:text-white uppercase tracking-widest flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
                                            <Download size={14} /> Descargar
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar Area (1 col) */}
                    <div className="space-y-8">
                        {/* Account StatusWidget */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-slate-900 to-[#02050a] border border-white/10 rounded-3xl p-8 relative overflow-hidden"
                        >
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />

                            <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-6">Estado de Cuenta</h2>

                            <div className="mb-8">
                                <p className="text-3xl font-black text-white tracking-tighter">{clientData.billing.amount}</p>
                                <p className="text-[10px] text-gold uppercase tracking-widest font-bold mt-1 max-w-xs leading-relaxed">Honorarios cubiertos hasta el momento</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                                    <span className="text-[10px] text-slate-400 uppercase tracking-widest">Estatus</span>
                                    <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest flex items-center gap-1">
                                        <CheckCircle2 size={12} /> {clientData.billing.status}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                                    <span className="text-[10px] text-slate-400 uppercase tracking-widest">Siguiente Pago Estimado</span>
                                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">{clientData.billing.nextPayment}</span>
                                </div>
                            </div>

                            <button className="w-full mt-6 bg-white/10 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10">
                                Ver Detalles de Facturación
                            </button>
                        </motion.div>

                        {/* Contact Widget */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-gold/10 border border-gold/20 rounded-3xl p-8 text-center"
                        >
                            <div className="w-12 h-12 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto mb-4">
                                <AlertCircle size={24} />
                            </div>
                            <h3 className="text-sm font-black text-white uppercase tracking-widest mb-2">Atención Urgente</h3>
                            <p className="text-xs text-slate-400 leading-relaxed mb-6">Si surge una eventualidad legal grave, cuenta con comunicación directa 24/7 con su abogado.</p>
                            <button className="w-full bg-gold text-primary font-black py-3 rounded-xl text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl">
                                Contactar Abogado
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </main>
    );
}
