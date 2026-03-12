'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, ChevronDown, ChevronUp, ArrowLeft, 
  Scale, ShieldCheck, Landmark, Lock, MapPin, 
  Facebook, Twitter, Linkedin, Youtube, ArrowRight,
  Gavel, FileText, Globe, Vote, Shield, Plane, Users,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';
import { catalogData, CatalogCategory, Procedure } from '@/data/catalog';
import MobileMenu from '@/components/MobileMenu';

export default function CatalogoJuridico() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const filteredCatalog = useMemo(() => {
    return catalogData.map(cat => ({
      ...cat,
      procedures: cat.procedures.filter(proc => 
        proc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(cat => 
      cat.procedures.length > 0 && 
      (selectedCategory ? cat.id === selectedCategory : true)
    );
  }, [searchTerm, selectedCategory]);

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-primary-dark text-white selection:bg-gold/30">
      {/* Navigation (Reused from Home) */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-lg bg-white/5 border-b border-white/5">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/logo.jpg" alt="Lex-360 Logo" className="w-10 h-10 rounded-full object-cover shadow-lg border border-gold/30 group-hover:border-gold transition-colors" />
          <span className="text-xl md:text-2xl font-serif font-medium tracking-widest text-white uppercase group-hover:text-gold transition-colors">Lex-360</span>
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300">
            <Link href="/#servicios" className="hover:text-gold transition-colors">Servicios</Link>
            <Link href="/abogados" className="hover:text-gold transition-colors">Abogados</Link>
            <Link href="/#quienes-somos" className="hover:text-gold transition-colors">Nosotros</Link>
            <Link href="/#contacto" className="hover:text-gold transition-colors">Contacto</Link>
            <div className="w-[1px] h-4 bg-white/20 mx-2"></div>
            <Link href="/login" className="flex items-center gap-2 hover:text-white transition-colors border border-white/20 px-4 py-1.5 rounded-full hover:bg-white/10">
              <Lock size={12} /> Portal Clientes
            </Link>
          </div>
          <MobileMenu />
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/" className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.3em] mb-8 hover:text-white transition-colors group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Volver al Inicio
            </Link>
            <h1 className="text-5xl md:text-8xl font-serif font-normal leading-tight mb-8">
              Catálogo Jurídico <br />
              <span className="text-gold italic">Exhaustivo</span>
            </h1>
            <p className="text-slate-400 max-w-2xl text-lg font-light leading-relaxed">
              Explora nuestra cobertura integral de procedimientos, juicios y recursos legales. 
              En Lex 360° combinamos la maestría del derecho tradicional con inteligencia estratégica para cada caso.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Search & Filter Section */}
      <section className="sticky top-[72px] z-40 bg-primary-dark/80 backdrop-blur-md border-y border-white/5 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center">
          <div className="relative w-full md:flex-grow flex items-center bg-white/5 border border-white/10 rounded-full px-6 py-3 focus-within:border-gold/50 transition-all group">
            <Search size={18} className="text-slate-500 group-focus-within:text-gold transition-colors" />
            <input 
              type="text" 
              placeholder="Buscar por procedimiento, materia o palabra clave..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none focus:ring-0 text-sm w-full ml-4 placeholder:text-slate-600"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar w-full md:w-auto">
            <button 
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap border ${!selectedCategory ? 'bg-gold text-primary-dark border-gold' : 'border-white/10 text-slate-400 hover:border-gold/30'}`}
            >
              Todos
            </button>
            {catalogData.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap border ${selectedCategory === cat.id ? 'bg-gold text-primary-dark border-gold' : 'border-white/10 text-slate-400 hover:border-gold/30'}`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {filteredCatalog.length > 0 ? (
          <div className="space-y-12">
            {filteredCatalog.map((category) => (
              <motion.div 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={category.id}
                className="group"
              >
                <div 
                  onClick={() => toggleCategory(category.id)}
                  className="flex justify-between items-center py-6 border-b border-white/10 cursor-pointer group-hover:border-gold/30 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-2xl font-serif text-gold/30 group-hover:text-gold transition-colors">
                      {catalogData.findIndex(c => c.id === category.id) + 1 < 10 ? `0${catalogData.findIndex(c => c.id === category.id) + 1}` : catalogData.findIndex(c => c.id === category.id) + 1}.
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif">{category.category}</h2>
                  </div>
                  <div className="text-gold">
                    {expandedCategories.includes(category.id) ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>

                <AnimatePresence>
                  {(expandedCategories.includes(category.id) || searchTerm) && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 pb-6 ml-0 md:ml-12">
                        {category.procedures.map((proc, i) => (
                          <div key={i} className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.04] hover:border-gold/20 transition-all group/card">
                            <h4 className="text-lg font-bold text-white mb-3 group-hover/card:text-gold transition-colors">{proc.name}</h4>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                              {proc.description}
                            </p>
                            <div className="flex flex-wrap gap-4 mt-auto">
                              {proc.authority && (
                                <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest">
                                  <Landmark size={12} className="text-gold/50" />
                                  <span>{proc.authority}</span>
                                </div>
                              )}
                              {proc.legalBasis && (
                                <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest px-3 py-1 rounded-full bg-white/5">
                                  <FileText size={12} className="text-gold/50" />
                                  <span>{proc.legalBasis}</span>
                                </div>
                              )}
                            </div>
                            <Link 
                                href={`/#contacto`}
                                className="mt-8 inline-flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors pt-4 border-t border-white/5 w-full group/link"
                            >
                                Solicitar Orientación
                                <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-40">
            <Search className="mx-auto text-gold/20 w-20 h-20 mb-6" />
            <h3 className="text-2xl font-serif text-white mb-4">No se encontraron resultados</h3>
            <p className="text-slate-500 max-w-sm mx-auto">Pruebe con otros términos de búsqueda o explore las categorías del catálogo.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory(null);}}
              className="mt-8 text-gold uppercase text-[10px] font-bold tracking-widest border border-gold/30 px-8 py-3 rounded-full hover:bg-gold hover:text-primary-dark transition-all"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </section>

      {/* Footer (Reused from Home) */}
      <footer className="relative bg-primary-dark border-t border-white/5 pt-24 pb-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20 text-center md:text-left">
            <div className="md:col-span-4">
              <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
                <img src="/logo.jpg" alt="Lex-360 Logo" className="w-12 h-12 rounded-full border border-gold/30" />
                <span className="text-2xl font-serif font-medium uppercase tracking-widest text-[#c6a87c]">Lex-360</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
                Líderes en asesoría jurídica integral. Camino a Sta. Teresa 763, Jardines del Pedregal, Álvaro Obregón, CDMX.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold transition-all"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold transition-all"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold transition-all"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold transition-all"><Youtube size={18} /></a>
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-[0.4em] mb-8 text-gold">Explorar</h4>
              <ul className="space-y-4 text-xs font-bold tracking-widest text-slate-500">
                <li className=""><Link href="/#servicios" className="hover:text-white transition-colors">SERVICIOS</Link></li>
                <li className=""><Link href="/#quienes-somos" className="hover:text-white transition-colors">NOSOTROS</Link></li>
                <li className=""><Link href="/#blog" className="hover:text-white transition-colors">BLOG LEGAL</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] text-slate-600 uppercase tracking-[0.5em] font-bold">
              © 2026 Lex-360 Despacho Jurídico Digital
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
