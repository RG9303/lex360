import Link from 'next/link';

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24 px-6">
            <div className="container mx-auto max-w-4xl bg-white dark:bg-slate-900 p-8 md:p-16 rounded-[2rem] shadow-xl border border-slate-200 dark:border-white/5">
                <Link href="/" className="inline-flex items-center text-gold hover:text-primary dark:hover:text-white mb-12 transition-colors text-sm font-bold uppercase tracking-widest gap-2">
                    ← Volver al Inicio
                </Link>

                <h1 className="text-3xl md:text-5xl font-black text-primary dark:text-white mb-12 tracking-tighter uppercase italic">
                    TÉRMINOS Y CONDICIONES DE USO Y CONTRATACIÓN DE SERVICIOS LEGALES
                </h1>

                <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p className="font-bold text-primary dark:text-white">
                        Última actualización: 04 de febrero 2026
                    </p>

                    <p>
                        Bienvenido a <Link href="/" className="text-gold hover:underline">www.lex-360.com.mx</Link> (en adelante, el "Sitio" o la "Plataforma"). El presente documento constituye un acuerdo legal vinculante (Contrato de Adhesión) entre usted (en adelante, el "Usuario" o "Cliente") y Lex 360 Rex, S.A. de C.V. (en adelante, "LEX-360" o el "Prestador").
                    </p>

                    <p>
                        Al ingresar, navegar, registrarse o contratar servicios en este Sitio, usted acepta expresamente los presentes Términos y Condiciones. Si no está de acuerdo con ellos, deberá abstenerse de utilizar la plataforma.
                    </p>

                    <section>
                        <h2 className="text-xl font-bold text-primary dark:text-white mb-4 uppercase tracking-tight">1. DEFINICIÓN Y NATURALEZA DE LOS SERVICIOS</h2>
                        <p>LEX-360 es una plataforma dedicada exclusivamente a la prestación de servicios profesionales de carácter jurídico y defensa legal.</p>
                        <ul className="list-disc pl-6 space-y-4 mt-4">
                            <li>
                                <strong>Naturaleza Jurídica:</strong> De conformidad con los artículos 2606 al 2615 del Código Civil Federal, la relación entre el Usuario y LEX-360 es la de un Contrato de Prestación de Servicios Profesionales.
                            </li>
                            <li>
                                <strong>Delimitación de Responsabilidad:</strong> Se hace constar expresamente que los servicios ofrecidos son estrictamente legales. LEX-360 NO presta servicios médicos, clínicos ni sanitarios. La asesoría brindada se limita a la defensa jurídica, gestión de riesgos legales y representación ante tribunales o autoridades administrativas.
                            </li>
                            <li>
                                <strong>Obligación de Medios:</strong> El Usuario reconoce que la abogacía es una profesión de "medios" y no de "resultados". LEX-360 se obliga a actuar con la pericia, diligencia y conocimientos técnicos propios de la lex artis jurídica para la defensa de los intereses del Usuario, pero no garantiza un resultado favorable específico en litigios o procedimientos, ya que esto depende de criterios jurisdiccionales ajenos al Prestador.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary dark:text-white mb-4 uppercase tracking-tight">2. USO DEL SITIO Y CUENTA DE USUARIO</h2>
                        <p>Para acceder a la contratación de servicios, el Usuario deberá proporcionar información veraz, legal y actualizada.</p>
                        <ul className="list-disc pl-6 space-y-4 mt-4">
                            <li>
                                <strong>Capacidad:</strong> El Usuario declara ser mayor de edad y tener capacidad legal para contratar. En caso de representar a una persona moral (ej. un hospital o clínica), declara contar con las facultades suficientes para obligarla.
                            </li>
                            <li>
                                <strong>Seguridad:</strong> El Usuario es responsable de resguardar sus claves de acceso. Cualquier actividad realizada desde su cuenta se presumirá hecha por el titular.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary dark:text-white mb-4 uppercase tracking-tight">3. CONDICIONES DE CONTRATACIÓN Y PAGO</h2>
                        <p>De conformidad con el artículo 7 BIS de la Ley Federal de Protección al Consumidor (LFPC), los precios mostrados en el Sitio representan el monto total a pagar, incluyendo impuestos y comisiones.</p>
                        <ul className="list-disc pl-6 space-y-4 mt-4">
                            <li>
                                <strong>Honorarios Profesionales:</strong> Los precios corresponden a los honorarios por la defensa legal y/o consultoría. No incluyen, salvo pacto expreso en contrario, gastos extraordinarios como fianzas, peritajes externos ajenos a LEX-360, o multas impuestas por la autoridad al Usuario.
                            </li>
                            <li>
                                <strong>Forma de Pago:</strong> Los pagos se procesan a través de pasarelas de pago seguras. El contrato se perfecciona una vez que LEX-360 confirma la recepción del pago y envía la confirmación del servicio.
                            </li>
                            <li>
                                <strong>Suscripciones Recurrentes:</strong> En caso de contratar membresías de defensa (igualas mensuales), el Usuario acepta cargos recurrentes. Deberá informarse al Usuario con 5 días de anticipación sobre la renovación automática, permitiendo su cancelación inmediata sin penalización si así lo desea.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary dark:text-white mb-4 uppercase tracking-tight">4. DERECHO DE REVOCACIÓN Y CANCELACIÓN</h2>
                        <p>Conforme al artículo 56 de la LFPC aplicable a transacciones electrónicas:</p>
                        <ul className="list-disc pl-6 space-y-4 mt-4">
                            <li>
                                <strong>Plazo:</strong> El Usuario tiene derecho a revocar su consentimiento para la contratación del servicio dentro de los 5 (cinco) días hábiles siguientes a la firma del contrato o pago, siempre y cuando el servicio no haya sido prestado en su totalidad (ej. una asesoría ya ejecutada o un plazo legal vencido por inacción).
                            </li>
                            <li>
                                <strong>Procedimiento:</strong> Para revocar, el Usuario deberá enviar un correo electrónico a <a href="mailto:lex360mx@gmail.com" className="text-gold hover:underline">lex360mx@gmail.com</a>. LEX-360 reintegrará el precio pagado sin responsabilidad alguna para el Usuario.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary dark:text-white mb-4 uppercase tracking-tight">5. OBLIGACIONES DEL USUARIO</h2>
                        <p>Para la correcta prestación de los servicios legales, el Usuario se obliga a:</p>
                        <ol className="list-decimal pl-6 space-y-4 mt-4">
                            <li>
                                <strong>Veracidad:</strong> Proporcionar a LEX-360 todos los hechos, documentos, expedientes clínicos y pruebas de manera veraz y completa. La omisión o falsedad en la información proporcionada exime a LEX-360 de responsabilidad sobre el resultado de la defensa.
                            </li>
                            <li>
                                <strong>Colaboración:</strong> Asistir a las audiencias, citatorios y reuniones que la estrategia legal requiera.
                            </li>
                            <li>
                                <strong>No Interferencia:</strong> No realizar actos procesales, negociaciones o acuerdos con la contraparte sin el conocimiento y asesoría de LEX-360.
                            </li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary dark:text-white mb-4 uppercase tracking-tight">6. SECRETO PROFESIONAL Y CONFIDENCIALIDAD</h2>
                        <p>LEX-360 reconoce la naturaleza sensible de la información compartida (datos legales y de salud de terceros).</p>
                        <ul className="list-disc pl-6 space-y-4 mt-4">
                            <li>
                                <strong>Secreto Profesional:</strong> Toda la información compartida está protegida por el secreto profesional del abogado y será utilizada exclusivamente para la estrategia de defensa.
                            </li>
                            <li>
                                <strong>Protección de Datos:</strong> El tratamiento de datos personales se rige por nuestro <Link href="/privacidad" className="text-gold hover:underline font-bold">Aviso de Privacidad</Link>. LEX-360 cumple con la LFPDPPP, garantizando medidas de seguridad para proteger expedientes y datos sensibles.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary dark:text-white mb-4 uppercase tracking-tight">7. LIMITACIÓN DE RESPONSABILIDAD</h2>
                        <p>LEX-360 no será responsable por:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Negligencia médica, impericia o dolo cometidos por el Usuario en su práctica profesional. El servicio se limita a la defensa legal de dichos actos, no a su validación clínica.</li>
                            <li>Resultados adversos derivados de información falsa o incompleta proporcionada por el Usuario.</li>
                            <li>Fallas en el servicio de internet o plataformas de tribunales electrónicos ajenas al control de LEX-360.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary dark:text-white mb-4 uppercase tracking-tight">8. PROPIEDAD INTELECTUAL</h2>
                        <p>Los contenidos del Sitio (textos legales, artículos, formatos, logotipos) son propiedad de LEX-360. El Usuario tiene una licencia limitada para su uso personal, prohibiéndose su reproducción o comercialización sin autorización.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary dark:text-white mb-4 uppercase tracking-tight">9. JURISDICCIÓN Y LEY APLICABLE</h2>
                        <p>
                            Para la interpretación y cumplimiento de este contrato, las partes se someten a las leyes federales de México y a la jurisdicción de los tribunales competentes en Ciudad de México, Estados Unidos Mexicanos, renunciando a cualquier otro fuero por razón de sus domicilios presentes o futuros. Asimismo, se reconoce la competencia administrativa de la Procuraduría Federal del Consumidor (PROFECO) para controversias en materia de consumo.
                        </p>
                    </section>

                    <section className="pt-12 border-t border-slate-200 dark:border-white/5">
                        <p className="text-slate-500">
                            Si tiene dudas sobre estos términos, puede contactarnos en: <a href="mailto:lex360mx@gmail.com" className="text-gold hover:underline">lex360mx@gmail.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
