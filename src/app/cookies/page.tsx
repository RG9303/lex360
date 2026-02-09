import Link from 'next/link';

export default function CookiesPolicy() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24 px-6">
            <div className="container mx-auto max-w-4xl bg-white dark:bg-slate-900 p-8 md:p-16 rounded-[2rem] shadow-xl border border-slate-200 dark:border-white/5">
                <Link href="/" className="inline-flex items-center text-gold hover:text-primary dark:hover:text-white mb-12 transition-colors text-sm font-bold uppercase tracking-widest gap-2">
                    ← Volver al Inicio
                </Link>

                <h1 className="text-3xl md:text-5xl font-black text-primary dark:text-white mb-12 tracking-tighter uppercase italic">
                    POLÍTICA DE COOKIES Y TECNOLOGÍAS DE RASTREO
                </h1>

                <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p className="font-bold text-primary dark:text-white">
                        Última actualización: 04 de febrero 2026
                    </p>

                    <p>
                        En <Link href="/" className="text-gold hover:underline">www.lex-360.com.mx</Link> (en adelante, el "Sitio"), propiedad de Lex 360 Rex, S.A. de C.V., utilizamos cookies y tecnologías similares para garantizar la funcionalidad de la plataforma, analizar nuestro tráfico y mejorar su experiencia como usuario de nuestros servicios de defensa legal.
                    </p>

                    <section>
                        <h2 className="text-xl font-bold text-primary dark:text-white mb-4 uppercase tracking-tight">1. ¿Qué son las Cookies?</h2>
                        <p>
                            Las cookies son pequeños archivos de texto que el Sitio descarga y almacena en su dispositivo (computadora, tableta o móvil) cuando usted navega por nuestras páginas. Estas tecnologías nos permiten recordar sus preferencias, mantener su sesión iniciada en el área de clientes y entender cómo interactúa con nuestros servicios.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary dark:text-white mb-4 uppercase tracking-tight">2. Tipos de Cookies que utilizamos</h2>
                        <p>Dada la naturaleza de nuestros servicios, clasificamos las cookies en las siguientes categorías:</p>
                        <ul className="list-disc pl-6 space-y-4 mt-4">
                            <li>
                                <strong>Cookies Estrictamente Necesarias:</strong> Son esenciales para que el Sitio funcione correctamente. Permiten la navegación, el acceso a áreas seguras (como la consulta de expedientes) y la contratación de servicios. Sin estas cookies, el Sitio no puede operar.
                            </li>
                            <li>
                                <strong>Cookies de Funcionalidad:</strong> Nos permiten recordar sus selecciones (como su nombre de usuario, idioma o región) para proporcionarle una experiencia más personalizada y evitar que deba reintroducir sus datos cada vez que nos visita.
                            </li>
                            <li>
                                <strong>Cookies de Análisis y Desempeño:</strong> Nos ayudan a entender cómo los visitantes interactúan con el Sitio, recopilando información de manera anónima sobre las secciones más visitadas, tiempos de navegación y errores encontrados. Utilizamos esta información exclusivamente para mejorar la estructura y el contenido de nuestra plataforma.
                            </li>
                            <li>
                                <strong>Cookies de Publicidad (Opcionales):</strong> Pueden ser establecidas por nuestros socios publicitarios para crear un perfil de sus intereses y mostrarle anuncios relevantes en otros sitios. Si no permite estas cookies, experimentará una publicidad menos dirigida.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary dark:text-white mb-4 uppercase tracking-tight">3. Gestión y Desactivación de Cookies</h2>
                        <p>
                            Usted tiene el control sobre sus datos. Al ingresar a nuestro Sitio, se le presentará un Banner de Cookies donde podrá aceptar todas, rechazarlas o configurarlas según sus preferencias.
                        </p>
                        <p className="mt-4">
                            Adicionalmente, puede deshabilitar el uso de cookies directamente desde la configuración de su navegador. Tenga en cuenta que bloquear las "Cookies Estrictamente Necesarias" puede afectar el funcionamiento de la plataforma y su capacidad para acceder a su cuenta.
                        </p>
                        <p className="mt-4">Para configurar su navegador, consulte los siguientes enlaces oficiales:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Google Chrome</a></li>
                            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Mozilla Firefox</a></li>
                            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Safari</a></li>
                            <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Microsoft Edge</a></li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary dark:text-white mb-4 uppercase tracking-tight">4. Web Beacons y otras tecnologías</h2>
                        <p>
                            Además de cookies, podemos utilizar "web beacons" (imágenes gráficas transparentes) en nuestros correos electrónicos para saber si usted ha abierto nuestros comunicados o ha hecho clic en los enlaces de nuestros boletines informativos, lo cual nos ayuda a medir la efectividad de nuestra comunicación.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-primary dark:text-white mb-4 uppercase tracking-tight">5. Consentimiento</h2>
                        <p>
                            De conformidad con la LFPDPPP y la NMX-COE-001-SCFI-2018, al hacer clic en "Aceptar" en nuestro banner de cookies o al continuar navegando tras haber sido informado, usted otorga su consentimiento para el uso de estas tecnologías para las finalidades descritas.
                        </p>
                    </section>

                    <section className="pt-12 border-t border-slate-200 dark:border-white/5">
                        <p className="text-slate-500">
                            Si tiene dudas sobre esta política, puede contactarnos en: <a href="mailto:lex360mx@gmail.com" className="text-gold hover:underline">lex360mx@gmail.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
