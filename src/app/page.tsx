'use client';
// Triggering production deployment with integrated lawyers biographies

import Link from 'next/link';
import ChatWidget from '@/components/chatbot/ChatWidget';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Scale, ShieldCheck, Clock, Users, ArrowRight, Gavel, FileText, Landmark } from 'lucide-react';

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

  const itemVariants: any = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const services = [
    {
      title: 'Derecho Fiscal',
      description: 'Estrategias de defensa y cumplimiento normativo de alto impacto.',
      icon: <Landmark className="w-10 h-10 text-gold" />,
      leader: {
        name: 'Israel Cadenas',
        title: 'Especialista Legal',
        bio: 'Consultor estratégico en materia impositiva y defensa ante autoridades fiscales, enfocado en el blindaje patrimonial.'
      }
    },
    {
      title: 'Derecho de Amparo',
      description: 'Protección constitucional inmediata ante actos de autoridad.',
      icon: <ShieldCheck className="w-10 h-10 text-gold" />,
      leader: {
        name: 'Diana Montserrat Partida',
        title: 'Especialista en Argumentación Jurídica',
        bio: 'Maestra en Procuración y Administración de Justicia. Miembro del Poder Judicial de la Federación con amplia trayectoria en defensa constitucional.'
      }
    },
    {
      title: 'Consultoría Corporativa',
      description: 'Blindaje legal para empresas en expansión y consolidación.',
      icon: <FileText className="w-10 h-10 text-gold" />,
      leader: {
        name: 'Alejandro Valenzuela',
        title: 'Jurista Internacional',
        bio: 'Miembro de la Barra de Abogados de París y Experto Parlamentario por la Unión Interparlamentaria (UIP). Especialista en derecho comparado.'
      }
    },
    {
      title: 'Litigio Civil',
      description: 'Resolución de conflictos con enfoque en la eficiencia y el resultado.',
      icon: <Gavel className="w-10 h-10 text-gold" />,
      leader: {
        name: 'Joel Garcia',
        title: 'Especialista Legal',
        bio: 'Experto en litigio civil y mercantil de alta complejidad, con enfoque en resoluciones ágiles y protección de intereses privados.'
      }
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-lg bg-white/5 border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <img src="/logo.jpg" alt="Lex-360 Logo" className="w-10 h-10 rounded-full object-cover shadow-lg border border-gold/30" />
          <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase italic">Lex-360</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300"
        >
          <span className="hover:text-gold cursor-pointer transition-colors">Servicios</span>
          <span className="hover:text-gold cursor-pointer transition-colors">Nosotros</span>
          <span className="hover:text-gold cursor-pointer transition-colors">Contacto</span>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section ref={targetRef} className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          style={{ scale: backgroundScale, y: backgroundY }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/background.png"
            alt="Lawyers in discussion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-slate-950/100"></div>
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="container mx-auto px-6 relative z-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gold text-[9px] font-bold tracking-[0.4em] uppercase mb-10 backdrop-blur-md"
          >
            <ShieldCheck size={12} /> Innovación Legal Inteligente
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter drop-shadow-2xl uppercase">
            SOLUCIONES <br /> <span className="text-gold">LEGALES</span> <br /> INTEGRALES
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light drop-shadow-md italic opacity-90">
            "Su tranquilidad, nuestra cobertura total."
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gold text-primary font-black rounded-full shadow-2xl transition-all flex items-center justify-center gap-3 group uppercase tracking-widest text-xs"
            >
              Iniciar Consulta
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              onClick={() => document.getElementById('quienes-somos')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-5 border border-white/20 text-white font-bold rounded-full transition-all backdrop-blur-sm uppercase tracking-widest text-xs"
            >
              Conoce el Despacho
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* Quienes Somos Section */}
      <section id="quienes-somos" className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
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
                <h2 className="text-[10px] font-black text-gold uppercase tracking-[0.5em] mb-8">¿Quiénes somos?</h2>
                <h3 className="text-3xl md:text-5xl font-black text-primary dark:text-white leading-tight mb-8 tracking-tighter">
                  Estrategia Jurídica <br /> con Visión 360°
                </h3>
                <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-light">
                  <p>
                    En <span className="font-bold text-primary dark:text-white">Lex 360° Bufete de Abogados</span>, entendemos que el derecho no se limita a la interpretación de las leyes, sino que abarca la comprensión profunda de las personas y sus contextos.
                  </p>
                  <p>
                    Nacimos con la visión de ofrecer asesoría jurídica integral que combina la experiencia tradicional del litigio con la innovación tecnológica.
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
                className="bg-slate-50 dark:bg-white/[0.02] p-8 md:p-16 rounded-[3rem] border border-slate-200 dark:border-white/5 shadow-2xl"
              >
                <p className="text-slate-500 dark:text-slate-300 text-xl md:text-2xl mb-12 italic font-light leading-relaxed">
                  "Desde nuestra fundación, trabajamos con un principio esencial: la justicia debe ser tan <span className="text-gold">precisa como humana</span>."
                </p>

                <h4 className="text-[9px] font-black text-primary dark:text-white uppercase tracking-[0.3em] mb-10 border-b border-gold/30 pb-4 inline-block">
                  Objetivos Estratégicos
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {[
                    { title: 'Cobertura Total', desc: 'Expertos de primer nivel en todas las áreas del derecho mexicano.' },
                    { title: 'Visión Preventiva', desc: 'Modelo "Auditoría Legal 360°" enfocado en la prevención de litigios.' },
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
                      <h5 className="font-bold text-primary dark:text-white mb-3 flex gap-3 transition-all">
                        <span className="text-gold">0{i + 1}.</span>
                        {obj.title}
                      </h5>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
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
      <section id="servicios" className="py-32 bg-slate-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-black text-gold uppercase tracking-[0.5em] mb-6">Especialización</h2>
              <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">Servicios Legales Premium</h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg font-light">Soluciones integrales con el respaldo tecnológico de Lex-360.</p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="glass-card p-10 md:p-12 rounded-[2.5rem] hover:border-gold/30 transition-all cursor-pointer group flex flex-col h-full"
              >
                <div className="mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="pt-8 border-t border-slate-200 dark:border-white/5 mt-auto">
                  <p className="text-[9px] font-black text-gold uppercase tracking-[0.2em] mb-2">Líder de Área</p>
                  <p className="text-sm font-bold text-primary dark:text-white mb-1">{service.leader.name}</p>
                  <p className="text-xs text-slate-400 italic mb-3">{service.leader.title}</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium line-clamp-3 group-hover:line-clamp-none transition-all duration-500">{service.leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Trust Section */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter">Excelencia Jurídica Especializada</h2>
              <div className="space-y-10">
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card bg-white/5 border-white/10 p-16 rounded-[4rem] relative shadow-2xl"
            >
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/10 rounded-full blur-[100px]"></div>
              <div className="text-center">
                <Scale className="mx-auto w-20 h-20 text-gold mb-10 opacity-30" />
                <p className="text-2xl md:text-3xl font-light italic text-slate-300 leading-relaxed">
                  "Nuestra visión integra la maestría del derecho tradicional con la agilidad de la era digital para proteger su <span className="text-white font-medium">patrimonio y futuro</span>."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="relative py-24 bg-slate-950 text-white overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-primary/20 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20 text-center md:text-left">
            <div className="md:col-span-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex items-center gap-4 mb-8 justify-center md:justify-start"
              >
                <img src="/logo.jpg" alt="Lex-360 Logo" className="w-12 h-12 rounded-full border border-gold/30" />
                <span className="text-2xl font-black italic tracking-tighter uppercase">Lex-360</span>
              </motion.div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
                Líderes en asesoría jurídica integral. Combinamos décadas de experiencia con innovación tecnológica para proteger lo que más importa.
              </p>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-8 text-gold">Explorar</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                <li className="hover:text-white transition-colors cursor-pointer">Servicios</li>
                <li className="hover:text-white transition-colors cursor-pointer">Nosotros</li>
                <li className="hover:text-white transition-colors cursor-pointer">Blog Legal</li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-8 text-gold">Legal</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                <li className="hover:text-white transition-colors cursor-pointer">
                  <Link href="/privacidad">Privacidad</Link>
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  <Link href="/terminos">Términos</Link>
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  <Link href="/cookies">Cookies</Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-8 text-gold">Newsletter</h4>
              <div className="flex bg-white/5 border border-white/10 p-1 rounded-full backdrop-blur-md">
                <input
                  type="email"
                  placeholder="Tu correo"
                  className="bg-transparent border-none focus:ring-0 text-xs px-6 flex-grow"
                />
                <button className="bg-gold text-primary p-3 rounded-full hover:bg-white transition-all shadow-xl">
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] text-slate-600 uppercase tracking-[0.5em] font-bold">
              © 2026 Lex-360 Despacho Jurídico Digital
            </p>
            <div className="flex gap-8 text-gold opacity-50">
              <Landmark size={18} />
              <Scale size={18} />
              <ShieldCheck size={18} />
            </div>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </main>
  );
}
