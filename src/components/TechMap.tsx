'use client';

import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';

export default function TechMap() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Campos+El%C3%ADseos+Polanco+Ciudad+de+Mexico";

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="glass-card bg-white/5 border-white/10 p-2 md:p-4 rounded-[4rem] relative shadow-2xl backdrop-blur-md overflow-hidden group h-full flex flex-col"
    >
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Map Content */}
      <div className="relative flex-grow rounded-[3.5rem] overflow-hidden border border-white/10 mb-4 h-[400px]">
        <img 
          src="/tech-map.png" 
          alt="Mapa Tecnológico de Polanco" 
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Overlay with high-tech details */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Pulsing Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gold rounded-full animate-ping opacity-75"></div>
                <div className="relative w-3 h-3 bg-gold rounded-full shadow-[0_0_15px_rgba(198,168,124,0.8)] border border-white/30"></div>
            </div>
        </div>

        {/* HUD Graphics Overlay */}
        <div className="absolute top-6 right-6 flex flex-col gap-2 items-end opacity-40 pointer-events-none">
            <div className="h-[1px] w-20 bg-gold/30"></div>
            <div className="h-[1px] w-12 bg-gold/30"></div>
            <span className="text-[10px] font-mono text-gold tracking-tighter uppercase whitespace-nowrap">GPS LOCK: 19.4326° N, 99.1913° W</span>
        </div>
      </div>

      {/* Address & Actions */}
      <div className="px-8 pb-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <MapPin size={16} className="text-gold" />
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.3em]">Ubicación Polanco</h4>
          </div>
          <p className="text-slate-300 text-sm font-light leading-relaxed">
            Campos Elíseos, Polanco, <br />
            Ciudad de México, Miguel Hidalgo
          </p>
        </div>

        <a 
          href={googleMapsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-gold/10 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all group/btn"
        >
          Google Maps
          <ExternalLink size={14} className="text-gold group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
