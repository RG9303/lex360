'use client';
// Triggering production deployment with integrated lawyers biographies

import Link from 'next/link';
import ChatWidget from '@/components/chatbot/ChatWidget';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Scale, ShieldCheck, ArrowRight, Landmark, Facebook, Twitter, Linkedin, Youtube, Lock, Cpu, Activity, Search, Database, UserCheck, Eye } from 'lucide-react';
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
              
              {/* 1. LEX360 es */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl mx-auto mb-24"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                  <Cpu className="text-gold w-4 h-4" />
                  <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#c6a87c] uppercase tracking-[0.3em]">IA Legal Integrada</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-normal text-white leading-tight mb-8">
                  Conocimiento y experiencia humana <br className="hidden md:block"/> con <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">Inteligencia Artificial.</span>
                </h2>
                <p className="text-xl md:text-2xl text-slate-300 font-light mb-6 italic">
                  &quot;El futuro del Derecho no se predice, se construye con Inteligencia Artificial.&quot;
                </p>
                <p className="text-lg text-slate-400 font-light leading-relaxed">
                  Elevamos la precisión jurídica mediante la integración estratégica de IA Legal. Transformamos la complejidad en soluciones ágiles, seguras y vanguardistas.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
                {/* 2. Sobre Nosotros */}
                <div className="lg:col-span-5">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="sticky top-32"
                  >
                    <h3 className="text-sm font-medium text-gold uppercase tracking-[0.4em] mb-6 font-sans">Sobre Nosotros</h3>
                    <h4 className="text-3xl md:text-4xl font-serif text-white mb-6">La Nueva Era de la Consultoría</h4>
                    <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
                      <p>
                        En <span className="text-white font-medium">LEX360</span> entendemos que la Inteligencia Artificial <span className="text-gold">no reemplaza al abogado</span>, sino que potencia su capacidad analítica. Hemos evolucionado nuestra práctica para liderar la intersección entre el código y la ley.
                      </p>
                      <p>
                        No solo usamos herramientas de IA; comprendemos su arquitectura ética, técnica y legal. Esto nos permite ofrecer una asesoría que es, al mismo tiempo, <span className="text-white font-medium">hiper-eficiente y profundamente humana.</span>
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* 3. ¿Cómo aplicamos la IA en su beneficio? */}
                <div className="lg:col-span-7">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h4 className="text-2xl font-serif text-white mb-4">¿Cómo aplicamos la IA en su beneficio?</h4>
                    <p className="text-slate-400 mb-10 font-light text-lg">
                      Nuestra metodología integra algoritmos avanzados para maximizar el valor en cada caso:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        { 
                          icon: <Activity className="w-6 h-6" />, 
                          title: 'Análisis Predictivo de Litigios', 
                          desc: 'Utilizamos modelos de procesamiento de datos para evaluar probabilidades de éxito y riesgos procesales basados en jurisprudencia masiva.' 
                        },
                        { 
                          icon: <Search className="w-6 h-6" />, 
                          title: 'Auditoría de Contratos (CLMS)', 
                          desc: 'Revisión automatizada de documentos para detectar cláusulas de riesgo en segundos, garantizando una precisión que el ojo humano podría pasar por alto.' 
                        },
                        { 
                          icon: <Database className="w-6 h-6" />, 
                          title: 'Investigación Jurídica Aumentada', 
                          desc: 'Acceso inmediato a una base de conocimientos global y actualizada, permitiéndonos encontrar argumentos sólidos en tiempos récord.' 
                        },
                        { 
                          icon: <ShieldCheck className="w-6 h-6" />, 
                          title: 'Compliance en Algoritmos', 
                          desc: 'Asesoramos a empresas en la implementación ética de IA, asegurando que sus sistemas cumplan con las normativas de protección de datos y transparencia.' 
                        }
                      ].map((feature, i) => (
                        <div key={i} className="bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-colors p-8 rounded-3xl backdrop-blur-sm group">
                          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
                            {feature.icon}
                          </div>
                          <h5 className="text-white font-bold mb-3">{feature.title}</h5>
                          <p className="text-sm text-slate-400 leading-relaxed font-light">{feature.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* 4. Compromiso Ético y Seguridad */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 p-10 md:p-16 rounded-[3rem] backdrop-blur-md relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] rounded-full pointer-events-none"></div>
                
                <div className="max-w-3xl mb-12 relative z-10">
                  <h4 className="text-3xl font-serif text-white mb-6">Compromiso Ético y Seguridad</h4>
                  <p className="text-gold text-xl font-medium mb-4">La tecnología solo es valiosa si es segura.</p>
                  <p className="text-slate-400 text-lg font-light leading-relaxed">
                    Entendemos las preocupaciones sobre la privacidad. Por ello, operamos bajo protocolos estrictos:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                  {[
                    {
                      icon: <Lock className="w-5 h-5" />,
                      number: "01",
                      title: "Privacidad por diseño",
                      desc: "Los datos de nuestros clientes nunca alimentan modelos públicos de IA."
                    },
                    {
                      icon: <UserCheck className="w-5 h-5" />,
                      number: "02",
                      title: "Supervisión Humana",
                      desc: "Cada resultado generado por IA es validado y refinado por nuestros consultores senior."
                    },
                    {
                      icon: <Eye className="w-5 h-5" />,
                      number: "03",
                      title: "Transparencia",
                      desc: "Informamos siempre a nuestros clientes sobre las herramientas utilizadas en su proceso."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl font-serif text-white/10 font-bold">{item.number}</span>
                        <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center border border-gold/20">
                          {item.icon}
                        </div>
                      </div>
                      <h5 className="text-white font-bold mb-2">{item.title}</h5>
                      <p className="text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

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
