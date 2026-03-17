'use client';
// Triggering production deployment with integrated lawyers biographies

import Link from 'next/link';
import ChatWidget from '@/components/chatbot/ChatWidget';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Scale, ShieldCheck, ArrowRight, Landmark, Facebook, Twitter, Linkedin, Youtube, Lock } from 'lucide-react';
import EspecializacionAccordion from '@/components/EspecializacionAccordion';
import MobileMenu from '@/components/MobileMenu';
import HeroAnimation from '@/components/HeroAnimation';
import TechMap from '@/components/TechMap';

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };


  return (
    <main className="min-h-screen bg-primary-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center border-b border-white/5">
        <div className="absolute inset-0 backdrop-blur-lg bg-white/5 -z-10"></div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <img src="/logo.jpg" alt="Lex-360 Logo" className="w-10 h-10 rounded-full object-cover shadow-lg border border-gold/30" />
          <span className="text-xl md:text-2xl font-serif font-medium tracking-widest text-white uppercase">Lex-360</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6"
        >
          <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300">
            <Link href="#servicios" className="hover:text-gold transition-colors">Servicios</Link>
            <Link href="/abogados" className="hover:text-gold transition-colors">Abogados</Link>
            <Link href="#quienes-somos" className="hover:text-gold transition-colors">Nosotros</Link>
            <Link href="#blog" className="hover:text-gold transition-colors">Blog Legal</Link>
            <Link href="#contacto" className="hover:text-gold transition-colors">Contacto</Link>
            <div className="w-[1px] h-4 bg-white/20 mx-2"></div>
            <Link href="/login" className="flex items-center gap-2 hover:text-white transition-colors border border-white/20 px-4 py-1.5 rounded-full hover:bg-white/10">
              <Lock size={12} /> Portal Clientes
            </Link>
          </div>
          <MobileMenu />
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section ref={targetRef} className="relative h-[90vh] md:h-screen flex flex-col items-center justify-center overflow-hidden">
        <HeroAnimation>
            <motion.a
              href="mailto:lex360mx@gmail.com?subject=Solicitud%20de%20Cita"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gold text-primary-dark font-bold rounded-full shadow-2xl transition-all flex items-center justify-center gap-3 group uppercase tracking-widest text-xs inline-flex"
            >
              Programa una cita
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.button
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              onClick={() => document.getElementById('quienes-somos')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-5 border border-white/20 text-white font-bold rounded-full transition-all backdrop-blur-sm uppercase tracking-widest text-xs"
            >
              Conoce el Despacho
            </motion.button>
        </HeroAnimation>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* Atmospheric Mid-Section Container */}
      <div className="relative overflow-hidden bg-[#02050a]">

        {/* 1. Subtle Background Layer (Stardust only) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]" />
          {/* Transition blend Hero -> Content */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary-dark to-transparent" />
        </div>

        {/* Content Layers (Sections 2 to 4) */}
        <div className="relative z-10">
          {/* Quienes Somos Section */}
          <section id="quienes-somos" className="py-32 bg-transparent relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                <div className="lg:col-span-5">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-sm font-medium text-gold uppercase tracking-[0.5em] mb-8 font-sans">¿Quiénes somos?</h2>
                    <h3 className="text-4xl md:text-6xl font-serif font-normal text-white leading-tight mb-8">
                      Estrategia Jurídica <br /> con Visión 360°
                    </h3>
                    <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
                      <p>
                        En <span className="font-bold text-white">Lex 360° Bufete de Abogados</span>, redefinimos el ejercicio del derecho. Entendemos que tu tranquilidad requiere más que la simple interpretación de las leyes; exige una auténtica protección 360° adaptada a tu entorno.
                      </p>
                      <p>
                        Somos un despacho moderno donde el talento de los mejores especialistas se potencia con tecnología de punta e Inteligencia Artificial (I.A.). Nuestra visión es ofrecerte una asesoría jurídica integral que combina la solidez de la experiencia con las herramientas del futuro, garantizando respuestas más rápidas, precisas y estratégicas.
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="lg:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/[0.03] p-8 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl backdrop-blur-md"
                  >
                    <p className="text-slate-300 text-xl md:text-2xl mb-12 italic font-light leading-relaxed">
                      &quot;Desde nuestra fundación, trabajamos con un principio esencial: la justicia debe ser tan <span className="text-gold">precisa como humana</span>.&quot;
                    </p>

                    <h4 className="text-xs font-bold text-white uppercase tracking-[0.3em] mb-10 border-b border-gold/30 pb-4 inline-block">
                      Objetivos Estratégicos
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                      {[
                        { title: 'Cobertura Total', desc: 'Expertos de primer nivel en todas las áreas del derecho mexicano.' },
                        { title: 'Visión Preventiva', desc: 'Modelo &quot;Auditoría Legal 360°&quot; enfocado en la prevención de litigios.' },
                        { title: 'Innovación Tecnológica', desc: 'Herramientas LegalTech para un servicio ágil y transparente.' },
                        { title: 'Colaboración Interna', desc: 'Cultura multidisciplinaria para análisis legales integrales.' },
                        { title: 'Referente de Opinión', desc: 'Fuente de análisis estratégico sobre cambios legislativos.' }
                      ].map((obj, i) => (
                        <motion.div
                          key={i}
                          className="group"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + (i * 0.1) }}
                        >
                          <h5 className="font-bold text-white mb-3 flex gap-3 transition-all">
                            <span className="text-gold">0{i + 1}.</span>
                            {obj.title}
                          </h5>
                          <p className="text-sm text-slate-400 leading-relaxed font-light">
                            {obj.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="servicios" className="py-32 bg-transparent relative">
            <div className="container mx-auto px-6">
              <EspecializacionAccordion />
            </div>
          </section>

          {/* AI Trust Section */}
          <section className="py-32 bg-transparent text-white relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-6xl font-serif font-normal mb-12 leading-tight">Excelencia Jurídica Especializada</h2>
                  <div className="space-y-10">
                    {/*
### Restauración y Evolución Digital
- **Retorno del 3D Hero**: Se restauraron los cubos cinemáticos del inicio. El error se debía a un "suspense" infinito mientras cargaban las imágenes; ahora los cubos aparecen instantáneamente y cargan sus texturas de forma fluida de fondo.
- **Chatbot Premium**: Se rediseñó por completo el asistente con una estética de **cristal (glassmorphism)**, acentos en oro y azul marino profundo. Ahora cuenta con animaciones de entrada más suaves y un tono de respuesta mucho más sofisticado y alineado a la firma.

### Resultado Final
La web ha recuperado su dinamismo visual completo y el chatbot ahora se siente como un conserje de lujo, integrando perfectamente con la **Balanza 3D** que ajustamos previamente.
*/}
                    {[
                      { icon: <Landmark />, title: 'Estrategia Multidisciplinaria', desc: 'Análisis profundo de cada caso para ofrecer soluciones legales integrales y personalizadas.' },
                      { icon: <Scale />, title: 'Defensa Ética y Resultados', desc: 'Compromiso total con la obtención de resultados estratégicos bajo los más altos estándares éticos.' },
                      { icon: <ShieldCheck />, title: 'Protección Patrimonial 360°', desc: 'Especialistas en salvaguardar sus activos e intereses ante cualquier contingencia legal.' }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-8">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold shadow-lg">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{item.title}</h4>
                          <p className="text-slate-400 leading-relaxed font-light">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <TechMap />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-primary-dark border-t border-white/5 pt-24 pb-12 overflow-hidden">
        {/* Animated background stardust for footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-4"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex items-center gap-4 mb-8 justify-center md:justify-start"
              >
                <img src="/logo.jpg" alt="Lex-360 Logo" className="w-12 h-12 rounded-full border border-gold/30" />
                <span className="text-2xl font-serif font-medium uppercase tracking-widest text-[#c6a87c]">Lex-360</span>
              </motion.div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
                Líderes en asesoría jurídica integral. Combinamos décadas de experiencia con innovación tecnológica para proteger lo que más importa.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://www.facebook.com/LexSumma" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold hover:border-gold/30 transition-all">
                  <Facebook size={18} />
                </a>
                <a href="https://twitter.com/lex360summa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold hover:border-gold/30 transition-all">
                  <Twitter size={18} />
                </a>
                <a href="https://www.linkedin.com/company/lex-summa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold hover:border-gold/30 transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="https://www.youtube.com/@Lex360summa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold hover:border-gold/30 transition-all">
                  <Youtube size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-2"
            >
              <h4 className="text-xs font-bold uppercase tracking-[0.4em] mb-8 text-gold">Explorar</h4>
              <ul className="space-y-4 text-xs font-bold tracking-widest text-slate-500">
                <li className="hover:text-white transition-colors cursor-pointer capitalize">servicios</li>
                <li className="hover:text-white transition-colors cursor-pointer capitalize">nosotros</li>
                <li className="hover:text-white transition-colors cursor-pointer capitalize">blog legal</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-2"
            >
              <h4 className="text-xs font-bold uppercase tracking-[0.4em] mb-8 text-gold">Legal</h4>
              <ul className="space-y-4 text-xs font-bold tracking-widest text-slate-500">
                <li className="hover:text-white transition-colors cursor-pointer capitalize">
                  <Link href="/privacidad">privacidad</Link>
                </li>
                <li className="hover:text-white transition-colors cursor-pointer capitalize">
                  <Link href="/terminos">términos</Link>
                </li>
                <li className="hover:text-white transition-colors cursor-pointer capitalize">
                  <Link href="/cookies">cookies</Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:col-span-4"
            >
              <h4 className="text-xs font-bold uppercase tracking-[0.4em] mb-8 text-gold">Newsletter</h4>
              <div className="flex bg-white/5 border border-white/10 p-1 rounded-full backdrop-blur-md focus-within:border-gold/30 transition-all">
                <input
                  type="email"
                  placeholder="Tu correo"
                  className="bg-transparent border-none focus:ring-0 text-xs px-6 flex-grow"
                />
                <button className="bg-gold text-primary-dark p-3 rounded-full hover:bg-white transition-all shadow-xl">
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
          >
            <p className="text-[10px] text-slate-600 uppercase tracking-[0.5em] font-bold">
              © 2026 Lex-360 Despacho Jurídico Digital
            </p>
            <div className="flex gap-8 text-gold opacity-50">
              <Landmark size={18} />
              <Scale size={18} />
              <ShieldCheck size={18} />
            </div>
          </motion.div>
        </div>
      </footer>

      <ChatWidget />
    </main >
  );
}
