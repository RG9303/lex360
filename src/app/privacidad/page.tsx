import Link from 'next/link';

export default function PrivacyNotice() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24 px-6">
            <div className="container mx-auto max-w-4xl bg-white dark:bg-slate-900 p-8 md:p-16 rounded-[2rem] shadow-xl border border-slate-200 dark:border-white/5">
                <Link href="/" className="inline-flex items-center text-gold hover:text-primary dark:hover:text-white mb-12 transition-colors text-sm font-bold uppercase tracking-widest gap-2">
                    ← Volver al Inicio
                </Link>

                <h1 className="text-3xl md:text-5xl font-black text-primary dark:text-white mb-12 tracking-tighter uppercase italic">
                    AVISO DE PRIVACIDAD INTEGRAL
                </h1>

                <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p className="font-bold text-primary dark:text-white">
                        Lex 360 Rex, S.A. de C.V. (en adelante "LEX-360"), con domicilio para oír y recibir notificaciones en Camino a Sta. Teresa 763, Jardines del Pedregal, Álvaro Obregón, 01900, CDMX, es el responsable del uso y protección de sus datos personales, y al respecto le informa lo siguiente:
                    </p>

                    <section>
                        <h2 className="text-xl font-bold text-primary dark:text-white mb-4 uppercase tracking-tight">1. ¿Qué datos personales recabamos y utilizamos?</h2>
                        <p>Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos las siguientes categorías de datos personales:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li><strong>Datos de identificación:</strong> Nombre completo.</li>
                            <li><strong>Datos de contacto:</strong> Correo electrónico, número de teléfono fijo y móvil.</li>
                            <li><strong>Datos patrimoniales:</strong> Información fiscal y bancaria para cobro de servicios.</li>
                        </ul>
                        <div className="mt-6 p-6 bg-slate-100 dark:bg-white/5 rounded-2xl">
                            <p className="font-bold mb-2">Datos Personales Sensibles</p>
                            <p>Debido a la naturaleza de nuestros servicios de defensa medicolegal, le informamos que recabamos y tratamos datos personales sensibles que requieren especial protección:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Datos de salud:</strong> Antecedentes clínicos propios o de terceros contenidos en los expedientes objeto de la defensa.</li>
                                <li><strong>Datos jurídicos:</strong> Información sobre procedimientos legales, demandas o litigios en curso.</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary dark:text-white mb-4 uppercase tracking-tight">2. ¿Para qué fines utilizaremos sus datos personales?</h2>
                        <p>Los datos personales que recabamos serán utilizados para las siguientes finalidades que son necesarias para el servicio que solicita:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Brindar asesoría y defensa jurídica especializada en responsabilidad profesional médica.</li>
                            <li>Gestión, integración y análisis de expedientes clínicos y legales para su defensa.</li>
                            <li>Trámites ante compañías aseguradoras para la cobertura de responsabilidad civil.</li>
                            <li>Facturación y cobro de honorarios.</li>
                            <li>Verificación de identidad y validación de vigencia de derechos.</li>
                        </ul>
                        <div className="mt-6">
                            <p className="font-bold mb-2">Finalidades Secundarias</p>
                            <p>De manera adicional, utilizaremos su información personal para las siguientes finalidades que no son necesarias para el servicio solicitado:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Envío de boletines informativos, actualizaciones legales y material educativo.</li>
                                <li>Mercadotecnia, publicidad y prospección comercial de nuevos servicios de Lex-360.</li>
                            </ul>
                            <p className="mt-4 italic text-sm">En caso de que no desee que sus datos personales sean tratados para estos fines secundarios, usted puede presentar desde este momento un escrito vía correo electrónico a lex260mx@gmail.com manifestando lo anterior.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary dark:text-white mb-4 uppercase tracking-tight">3. Medios para ejercer Derechos ARCO y Revocación del Consentimiento</h2>
                        <p>Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso).</p>
                        <p>Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través de:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li><strong>Correo electrónico:</strong> lex360mx@gmail.com</li>
                            <li><strong>Domicilio:</strong> Acudiendo directamente a la dirección señalada al inicio de este aviso.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary dark:text-white mb-4 uppercase tracking-tight">4. Uso de Tecnologías de Rastreo (Cookies)</h2>
                        <p>Le informamos que en nuestra página de Internet utilizamos cookies a través de las cuales es posible monitorear su comportamiento como usuario de Internet, para brindarle un mejor servicio. Usted puede deshabilitar estas tecnologías en la configuración de su navegador.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary dark:text-white mb-4 uppercase tracking-tight">5. Cambios al Aviso de Privacidad</h2>
                        <p>El presente aviso de privacidad puede sufrir modificaciones derivadas de nuevos requerimientos legales. Mantendremos informados sobre los cambios a través de nuestra página de internet: <a href="https://www.lex-360.com.mx" className="text-gold hover:underline">www.lex-360.com.mx</a>.</p>
                    </section>

                    <section className="pt-12 border-t border-slate-200 dark:border-white/5">
                        <p className="text-sm font-bold uppercase tracking-widest text-gold mb-2">Fecha de última actualización</p>
                        <p className="text-primary dark:text-white">04 febrero 2026</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
