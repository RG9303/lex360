export interface Abogado {
    slug: string;
    name: string;
    title: string;
    shortBio: string;
    fullBio: string;
    specialties: string[];
    image?: string;
    socialMedia?: {
        linkedin?: string;
        twitter?: string;
        instagram?: string;
        email?: string;
        phone?: string;
    };
    calendarUrl?: string; // Calendly or similar link
}

export const abogados: Abogado[] = [
    {
        slug: 'alejandro-ornelas',
        name: 'Alejandro Ornelas Nápoles',
        title: 'Abogado Corporativo y Notarial',
        shortBio: 'Especialista en estructuración jurídica empresarial y fiscal estratégica con más de veinte años de experiencia.',
        fullBio: `Alejandro Ornelas Nápoles es un destacado abogado corporativo y notarial, socio fundador en Guadalajara, con más de veinte años de experiencia. Su práctica se distingue por una visión empresarial y un enfoque preventivo, integrando el derecho con la estrategia financiera y operativa de las compañías que asesora.

Como especialista, domina el diseño de estructuras jurídicas, contables y empresariales de alta rentabilidad, bajo riesgo y estricto cumplimiento normativo. Sus áreas de especialización clave incluyen:

Derecho Corporativo y Comercial: Dirige la constitución, reestructuración y blindaje de sociedades, así como la elaboración de contratos, estatutos y auditorías preventivas.
Fiscal y Seguridad Social: Es experto en planeación fiscal estratégica, diseño de beneficios exentos de ISR, estrategias de no integración al Salario Base de Cotización (SBC) y la creación de Planes de Pensión (PPRE).
Inmobiliario y Patrimonial: Asesora integralmente a desarrolladores y constructores en proyectos de desarrollo urbano, fideicomisos y la estructuración de regímenes de condominio.
Entre sus logros más significativos se encuentra la reestructuración de certificaciones contables para Banamex, validadas judicialmente. Su despacho fue reconocido entre los cinco de mejor desempeño a nivel nacional, logrando un índice de resolución del 90% en más de 1,200 expedientes mediante negociación directa. Además, ha conducido procesos de liquidación laboral masiva sin generar demandas, basándose en la conciliación.

Egresado con excelencia académica de la Universidad de Guadalajara, cuenta con un postgrado en Derecho Corporativo por la Universidad Panamericana y un diplomado en Mediación. Alejandro Ornelas Nápoles concibe el derecho no solo como una herramienta de protección, sino como un instrumento que transforma, impulsa y genera valor. Su filosofía se centra en actuar como un "agente de desarrollo", convirtiendo el marco jurídico en una ventaja competitiva y de crecimiento sostenible para las empresas.`,
        specialties: ['Derecho Corporativo', 'Derecho Fiscal', 'Derecho Inmobiliario', 'Mediación'],
        image: '/team/alejandro-ornelas.jpg',
        socialMedia: {
            phone: '3316009340',
            email: 'contacto@lex-360.com.mx'
        },
        calendarUrl: 'https://calendly.com/lex-360/alejandro-ornelas'
    },
    {
        slug: 'alejandro-valenzuela',
        name: 'Alejandro Valenzuela Sosa',
        title: 'Abogado, Jurista y Consultor Internacional',
        shortBio: 'Más de veinte años de experiencia en los sectores público y privado, tanto en México como en el extranjero.',
        fullBio: `Alejandro Valenzuela Sosa es abogado, jurista y consultor internacional con más de veinte años de experiencia en los sectores público y privado, tanto en México como en el extranjero. Es miembro de la Barra de Abogados de París y experto parlamentario reconocido por la Unión Interparlamentaria, lo que refleja su sólida trayectoria en los ámbitos jurídico, legislativo y académico.

A lo largo de su carrera ha ocupado cargos de alta responsabilidad en instituciones nacionales e internacionales. En Europa, se desempeñó como consultor en ciencia y tecnología para la Unión Interparlamentaria en Ginebra, enlace con el Parlamento en la Oficina del Primer Ministro de Francia, y asesor parlamentario en la Asamblea Nacional francesa, donde contribuyó al desarrollo de iniciativas legislativas en materia de innovación y gobernanza pública.

En México, ha ejercido como Jefe de Asesores en la Honorable Cámara de Diputados, participando en la elaboración de marcos normativos estratégicos y en el fortalecimiento de procesos legislativos. Paralelamente, ha desarrollado una destacada labor académica como profesor de posgrado en la Facultad de Derecho y Criminología de la Universidad Autónoma de Nuevo León, impartiendo materias como Amparo, Derecho Administrativo, Civil y Familiar.

Valenzuela Sosa cursó estudios de posgrado en la Universidad de París 1 Panthéon-Sorbonne, y domina español, francés e inglés, lo que le ha permitido consolidar una visión jurídica con perspectiva comparada y vocación internacional. Su perfil combina análisis normativo, gestión legislativa y consultoría jurídica de alto nivel, orientado a ofrecer soluciones integrales en entornos complejos y multiculturales.`,
        specialties: ['Derecho Internacional', 'Consultoría Legislativa', 'Amparo', 'Derecho Administrativo'],
        image: '/team/alejandro-valenzuela.jpg',
        socialMedia: {
            email: 'alejandrovalenl@gmail.com',
            phone: '5620200020'
        },
        calendarUrl: 'https://calendly.com/lex-360/alejandro-valenzuela'
    },
    {
        slug: 'alfonso-jimenez',
        name: "Alfonso Jimenez O'Farril",
        title: 'Abogado Asociado',
        shortBio: 'Consultor jurídico con amplia experiencia.',
        fullBio: 'Trayectoria profesional y biografía completa en proceso de actualización.',
        specialties: ['Consultoría Jurídica'],
        image: '/team/placeholder-user.jpg',
        socialMedia: {
            phone: '5554162721'
        }
    },
    {
        slug: 'angel-baron',
        name: 'Angel Baron Alonso',
        title: 'Abogado Asociado',
        shortBio: 'Especialista en litigio y resolución de disputas.',
        fullBio: 'Trayectoria profesional y biografía completa en proceso de actualización.',
        specialties: ['Litigio'],
        image: '/team/placeholder-user.jpg',
        socialMedia: {
            phone: '5617226633'
        }
    },
    {
        slug: 'carlos-angulo',
        name: 'Carlos F. Angulo Parra',
        title: 'Abogado Asociado',
        shortBio: 'Especialista en derecho corporativo internacional.',
        fullBio: 'Trayectoria profesional y biografía completa en proceso de actualización.',
        specialties: ['Derecho Corporativo', 'Internacional'],
        image: '/team/carlos-angulo.jpg',
        socialMedia: {
            email: 'carlosangulo50@gmail.com',
            phone: '6566380218'
        }
    },
    {
        slug: 'carlos-g-gomez',
        name: 'Carlos G. Gomez',
        title: 'Abogado Asociado',
        shortBio: 'Especialista en derecho administrativo y gestión pública.',
        fullBio: 'Trayectoria profesional y biografía completa en proceso de actualización.',
        specialties: ['Derecho Administrativo', 'Gestión Pública'],
        image: '/team/placeholder-user.jpg',
        socialMedia: {
            email: 'cgomez@espacio-publico.mx',
            phone: '5554369589'
        }
    },
    {
        slug: 'elena-gil-valle',
        name: 'Elena Gil Valle',
        title: 'Especialista en Derecho Penal y Derechos Humanos',
        shortBio: 'Más de 25 años de trayectoria en defensa de derechos humanos y litigio estratégico colectivo.',
        fullBio: `M. Elena Gil Valle es Licenciada en Derecho y Especialista en Derecho Penal, con más de 25 años de trayectoria profesional dedicados a la defensa de los derechos humanos, el litigio estratégico y la representación legal de colectivos sociales de gran escala.

A lo largo de su carrera, ha encabezado la representación jurídica de más de 5,000 familias en conflictos de vivienda, urbanización y defensa patrimonial, consolidándose como una figura de referencia en el litigio colectivo y la protección de derechos sociales. Su experiencia incluye la defensa de deudores bancarios, con más de mil procedimientos legales frente a instituciones financieras y sociedades financieras de objeto limitado.

Cuenta con una amplia trayectoria en el sector público, habiendo colaborado con la Procuraduría General de Justicia del Distrito Federal, el sistema penitenciario capitalino y el Sindicato Único de Trabajadores y Poderes del Estado de México (SUTEYM). Asimismo, ha participado en proyectos de vinculación social, enfocados en la rehabilitación de internos y programas de apoyo comunitario a poblaciones vulnerables.

En el ámbito de la sociedad civil, se desempeña como Presidenta de la Fundación de Abogados Egresados del Instituto Universitario ETAC, A.C., y como Procuradora General de la Organización Continental de Derechos Humanos, con presencia internacional y registro ante organismos nacionales e internacionales, incluyendo la Organización de las Naciones Unidas, donde ha participado en foros sociales en Ginebra desde 2009.

Su perfil se complementa con una destacada labor académica como catedrática y asesora jurídica universitaria, impartiendo materias como Derecho Penal, Derecho Procesal Penal, Derecho Mercantil y seminarios de titulación en diversas instituciones de educación superior. La combinación de experiencia jurídica, compromiso social, liderazgo institucional y vocación docente posiciona a M. Elena Gil Valle como una profesional con una visión integral del derecho, orientada a la justicia social, la defensa de los derechos humanos y la formación de nuevas generaciones de juristas.`,
        specialties: ['Derecho Penal', 'Derechos Humanos', 'Derecho Civil', 'Derecho Mercantil'],
        image: '/team/elena-gil-valle.jpg',
        socialMedia: {
            phone: '5536733684',
            email: 'contacto@lex-360.com.mx'
        },
        calendarUrl: 'https://calendly.com/lex-360/elena-gil-valle'
    },
    {
        slug: 'guillermo-hamdan',
        name: 'Guillermo Hamdan',
        title: 'Abogado Litigante y Estratega Jurídico',
        shortBio: 'Egresado de la Escuela Libre de Derecho con una trayectoria destacada en asuntos de alta relevancia mediática y política.',
        fullBio: `CURRICULUM VITAE.
Nacido en México en 1958, egresado de la prestigiosa Escuela Libre de Derecho, con menciones honoríficas y tesis laureada.
A los 18 años trabajó en el despacho del licenciado Felipe Gómez Mont; años después colaboró en la Procuraduría General de la República (en los asuntos especiales del Presidente Lopez Portillo) ; posteriormente fue asociado del licenciado Sergio vela Treviño( penalista histórico ); y culminó formando su propia firma de abogados litigantes con reconocido éxito patrocinando asuntos muy importantes en la historia mediática del país…apoderado de políticos, periodistas, artistas, empresarios y deportistas ( denunció el fraude en la privatización de Telmex y la denuncia contra la inexistencia bancaria ) vinculando al movimiento del Barzón al Partido de la Revolución Democrática ( PRD).
Asesor jurídico personal por varias décadas del ingeniero Cuauhtémoc Cárdenas Solórzano ( líder moral de la izquierda mexicana ,tres veces candidato a la Presidencia de la República y expresidente de la Internacional Socialista.)
Asesor personal de algunas de las más grandes acaudalados del mundo, contando con relaciones muy relevantes con gobiernos y organizaciones internacionales en conjunción con despachos estratégicos y poderosos….especializados en grandes reclamaciones en operaciones de mercado secundario de MTN’s y colaborador en distintas plataformas financieras.
En el aspecto docente ha sido maestro por varios años-en las cátedras de derecho penal, derecho procedimental penal y derecho constitucional en las universidades Anáhuac, la Escuela Libre de Derecho y la Universidad Panamericana.
Por otro lado, ha sido conferencista y entrevistado ( más de 300 veces ) en distintos foros ( nacionales e internacionales) en materia jurídica y geopolítica.
Es creador del proyecto de una película y libro intitulado “Mi Legado”.
Ya expuesto “El Fraude Electoral “ de junio del 2024, sobre la Elección de Estado de la Dr. Scheinbaum.
Además , publicará libros ya terminados “ Mi Legado” e “ Historia de un Genocidio”….”Historia de un amor o un amor de historia”.
Escribió “ Infamia a la justicia” relato de un muy controvertido juicio.
En otro contexto y tras 30 años de estudio y reflexión estratégica, ha decidido elaborar y presentar bajo su más estricta y única responsabilidad el PROYECTO de demandar la declaratoria de nulidad absoluta del -ilegítimo e ilegal- Tratado de Guadalupe Hidalgo de 1848, por el cual y previa premeditada y provocada intervención e invasión militar, los Estados Unidos de Norteamérica nos despojaron para mutilarnos más de la mitad de nuestro territorio, usufructuando injustamente, por casi 170 años un suelo y subsuelo que no les corresponde, pues son y serán formalmente territorios ocupados. La acción intentada es retroactiva,imprescriptible , no convalidable y la indemnización, luego entonces, sería inmedible e incuantificable. De encausar la decisión presidencial y ante la Corte Internacional de Justicia será una de las mayores demandas en la historia de la humanidad.(11tomos). Hay videos con mas de 3 millones de vistas.

En el año 2020, escribió su titulado libro “ Cuando lo invisible , se hizo visible: Dios y el virus”…libro de plena información sobre temas poco conocidos y menos publicados, dando razón y sentido a la pandemia acontecida.

En el año 2021/2022 , presento una DENUNCIA en la Fiscalía General de la República Mexicana y de la parte conducente de la introducción de su nuevo libro denominado “YO ACUSO..nos quieren matar”, se desprende lo siguiente:”…Los hechos narrados sobre los antecedentes, causas y consecuencias de la pandemia en contexto cronológico y fáctico, nos conllevan a inducir y deducir , sin temor a equivocarnos, que un grupo ELITISTA de poder ( económico, político y mediático ) pretende y ha dañado a la humanidad, como ningún otro grupo totalitario y absolutista en la historia de nuestra propia existencia, tomando en consideración probatoria que: a) Han desarrollado y/o modificado genética y artificialmente un Coronavirus ( de ontología natural ) para traspasar las células humanas, infectándolas - mortal y dañinamente - como un ARMA BIOLOGICA de destrucción masiva y, b) han desarrollado, distribuido y comercializado unas “ VACUNAS “ ( que ni técnica ni científicamente lo son ) y que en realidad son los “ medios comisivos “ para efectuar una estrategia patológica de despoblación mundial, con intereses económicos y políticos ( brutales y muy definidos ) realizando la adecuación de sus conductas a los delitos de GENOCIDIO, TERRORISMO y DELINCUENCIA ORGANIZADA…conforme a la legislación mexicana y que en base, al PRINCIPIO DE EXTRATERRITORIALIDAD , han sido efectuados por extranjeros, en el extranjero , pero que han intentado y tenido efectos en el territorio de la República mexicana y en contra de sus habitantes.
Expuesto lo anterior, nos encontramos que los gobernantes competenciales en MEXICO, atendiendo a la legislación conducente, deben investigar - rigurosamente - los hechos denunciados y lograr hacer JUSTICIA a nuestro pueblo, por la violación a todos los bienes - jurídicamente tutelados ya infringidos- por seres patológicamente enfermos como BILL Y MELINDA GATES, GEORGE SOROS, KLAUS SCHWAB, ANTHONY FAUCI, THEDROS ADHANON ( OMS), DRA. SHI ZHENGLI, DR. RALPH BARIC , DR. PETER DASZACK ….y otras personas - físicas y morales - promoviendo legal y legítimamente su persecución y encarcelamiento con el fin de cumplir las condenas ( previamente establecidas ) que ameritan estos delitos, privándolos de los bienes y de las ganancias que - inmoralmente además - han obtenido, lucrando con la humanidad entera……e impedir, que sigan cometiendo sus fechorías y fracasen en su reclamado y publicitado intento de controlar a la raza humana…”. Quedaron impunes 800,000 homicidios de mexicanos.
HOY día , diciembre del 2025 el Congreso Estadounidense reconoció TODO lo anterior.

Finalmente, es asesor jurídico principal del Supremo Consejo Nacional Indígena y designado como “ EL FISCAL DEL PUEBLO “de los Pueblos Originarios y Ancestrales de Mexico y del recién constituído Imperio Mexicano.
También es activista social reconocido y asesor de “las madres buscadoras “ y de familiares víctimas del desabasto de medicinas…luchador infatigable contra la “ Deforma Judicial “ de AMLO y uno de los primeros que advirtió de la Elección de Estado; del golpe de Estado por la ilegal SOBREREPRESENTACION del Congreso de la Unión ; las violatorias reformas a nuestra Constitución y con el otro golpe de Estado al Poder Judicial de la Federación…..la catástrofe y destrucción del Estado de Derecho.

El único abogado que ha presentado más de 20 denuncias contra los narco gobiernistas de MORENA .


Por otro lado es Miembro activo legal de la Coalición Mundial de Salud y Vida(COMUSAV)…que tiene como miembro fundador honorífico al biofísico ANDREAS KALCKER , promotor del famoso dióxido de cloro ( alternativa para la cura del Covid-19 ) y probable Premio Nobel de medicina.

También ha terminado la “ Historia de un Genocidio” , narrando las fechas desde 1776-2023, fundamentales para entender el desglose cronológico o una progresión secuencial de la plandemia.

Asesor en distintos países colaborando sobre el ejercicio del Derecho de Petición y Derecho de Acceso a la Información ,para obtener respuestas a preguntas puntuales sobre el problema pandémico del Covid 19.
Ahora, ha terminado la Denuncia de Hechos informándole al Fiscal de la Corte Penal Internacional para que investigue a los responsables mexicanos del combate a la pandemia, por los delitos de Genocidio y Lesa Humanidad por la inoculación de experimentos médicos y por la violación del “ consentimiento informado “ de los pacientes, prohibidos desde 1947 en Nuremberg, siendo el soporte de su libro titulado “ El Holocausto Mexicano”
Finalmente, es fundador , de la siguiente iniciativa a favor de la NIÑEZ en el mundo:
OBJETIVO
Se pretende lograr establecer que la CORTE PENAL INTERNACIONAL tenga competencia ( hoy solo “combate” -limitativamente- El Genocidio , los Crímenes de Lesa Humanidad,los Crímenes de Guerra y de Agresión ) para conocer, investigar , procesar y sancionar -legitima y legalmente - a quienes MASIVAMENTE afecten delictivamente la VIDA, la SALUD, la LIBERTAD de los infantes e incapacitados toda vez, que se REPORTAN mas de 8,000,000 millones de DESAPARECIDOS en el mundo….y su destino es para la trata de personas, para rituales satánicos, para prostituirlos, para la extracción de órganos, para la pornografía , lenocinio y pederastia, turismo sexual, para esclavizarlos, trabajos forzados, utilizarlos en experimentos médicos….hasta para convertirlos en mercenarios , sicarios o empleándolos para el narcotráfico y demás finalidades.
¿ COMO LOGRARLO ?
Esta civil y no política INICIATIVA -idóneamente - deberá alcanzarse mediante la recaudación de firmas, de personas plenamente identificadas, instigando a las autoridades nacionales e internacionales ( en un marco de cooperación y colaboración complementaria ) para primero DEFINIR claramente las conductas penales conducentes y segundo investigar , procesar y sancionar dichas conductas y asi estar en capacidad y aptitud legal para lograr la JUSTICIA merecida y evitar la IMPUNIDAD imperante.
Esta ejemplificativa derrota humana, ha sido - entre otras cuestiones -
posible y permisible PORQUE increíblemente HOY día, por distintas razones, estos crímenes NO pueden investigarlos y sancionarlos, con todo el imperio del Derecho y de la LEY una jurisdicción MUNDIAL. En otra terminología, se pretende que este catálogo pormenorizado de delitos, puedan perseguirse y sancionarse en cualquier país por la CORTE PENAL INTERNACIONAL.
Como no es meritorio hacer un tratado doctrinal de esta iniciativa, se anexa al escrito, la DESCRIPCION de los delitos o CRIMENES CONTRA LA INFANCIA Y LOS INCAPACITADOS que se proponen .Procede puntualizar que existe confusión legal entre genocidio, Crímenes de Lesa humanidad y Trata de personas ( ley mexicana ); que algunos delitos no están debidamente tipificados ( prostitución ); otros que no están contemplados
( pederastia, lenocinio, turismo sexual …) ; y algunos más que necesitan actualizarse ( cuando utilizan a los menores como sicarios, mercenarios y narcotraficantes ) ….
Se requiere un ordenamiento especial, con fiscales especializados para actuar con prontitud y eficacia.
De esta iniciativa se desprendió la colaboración con Robert Kennedy Jr.`,
        specialties: ['Derecho Penal', 'Derecho Constitucional', 'Litigio de Alto Impacto', 'Estrategia Geopolítica'],
        image: '/team/placeholder-user.jpg',
        socialMedia: {
            email: 'abogadohamdan@gmail.com',
            phone: '5547614616'
        }
    },
    {
        slug: 'hugo-arriaga',
        name: 'Hugo Arriaga',
        title: 'Abogado Asociado',
        shortBio: 'Consultor legal experto.',
        fullBio: 'Trayectoria profesional y biografía completa en proceso de actualización.',
        specialties: ['Consultoría Legal'],
        image: '/team/placeholder-user.jpg',
        socialMedia: {
            phone: '5527278342'
        }
    },
    {
        slug: 'israel-ascencio-cadenas',
        name: 'Israel Ascencio Cadenas',
        title: 'Especialista en Litigio y Consultoría Estratégica',
        shortBio: 'Abogado con más de 40 años de experiencia en litigación y asesoría jurídica empresarial.',
        fullBio: `Israel Ascencio Cadenas es abogado con más de 40 años de experiencia en el ejercicio profesional del derecho, con una trayectoria sólida en litigación, asesoría jurídica empresarial y consultoría estratégica. Su práctica se ha distinguido por la búsqueda de soluciones legales eficaces, personalizadas y orientadas a la prevención de riesgos, combinando un profundo conocimiento jurídico con una visión práctica y analítica.

A lo largo de su carrera, ha brindado asesoría legal corporativa a empresas de los sectores constructor, comercial y financiero, desarrollando estrategias integrales en materia contractual, cumplimiento normativo y mitigación de riesgos. Asimismo, cuenta con una amplia experiencia como abogado corporativo bancario, colaborando con instituciones de reconocido prestigio como Banamex, Bancomer y Banca Serfin, principalmente en la gestión de litigios y recuperación de cartera vencida.

Su especialización en cobranza, recuperación de créditos y reestructuración de deudas le ha permitido representar eficazmente a empresas y organizaciones en procedimientos judiciales y extrajudiciales, destacando por su capacidad de negociación y conciliación. Complementa su perfil jurídico con formación en Psicoterapia Gestalt, lo que fortalece sus habilidades de comunicación, manejo de conflictos y negociación estratégica.


Cuenta con Especialidad en Derecho de Amparo, así como con actualización continua, incluyendo un Diplomado en Juicio de Amparo impartido por la Suprema Corte de Justicia de la Nación, lo que respalda su dominio técnico y vigencia profesional. Su compromiso con el aprendizaje permanente, el liderazgo y el trabajo en equipo lo posicionan como un abogado experimentado, confiable y orientado a la excelencia jurídica.`,
        specialties: ['Derecho Fiscal', 'Litigio Civil', 'Amparo', 'Cobranza Bancaria'],
        image: '/team/israel-ascencio.jpg',
        socialMedia: {
            phone: '4431460242',
            email: 'contacto@lex-360.com.mx'
        },
        calendarUrl: 'https://calendly.com/lex-360/israel-ascencio'
    },
    {
        slug: 'joel-nunez-garcia',
        name: 'Joel Núñez García',
        title: 'Abogado Litigante y Experto en Gestión Gubernamental',
        shortBio: 'Especialista en derecho civil, mercantil y agrario, con enfoque en la defensa de derechos de pueblos originarios.',
        fullBio: `Joel Núñez García es abogado litigante con ejercicio profesional desde el año 2004, con amplia experiencia en las materias civil, mercantil, agraria, administrativa en materia aduanera, regularización de inmuebles y juicio de amparo, así como en gestión gubernamental y defensa de derechos humanos, con especial énfasis en la protección de los pueblos originarios.

Es socio fundador del despacho Defensores de Tijuana, con presencia en Baja California, Sonora, Sinaloa y Jalisco, así como socio fundador de Law Firma International, firma con operaciones en San Diego, Los Ángeles y Calexico, California (EE. UU.), y socio corresponsal del despacho BlackDawn, con sede en Guadalajara, Jalisco.

Cuenta con una amplia trayectoria en el sector público, habiendo desempeñado cargos relevantes como Regidor del H. Ayuntamiento de Mazatlán, Director General de Planeación del DIF, Director de Desarrollo Social Rural, así como funciones de secretaría particular, coordinación administrativa y asesoría legislativa en el Congreso de la Unión y en dependencias estatales del Gobierno de Sinaloa. 

En el ámbito de la sociedad civil, ha ocupado cargos de liderazgo y responsabilidad, entre ellos Presidente de la Federación de Estudiantes de Sinaloa, Contralor-Inspector de Derechos Humanos Internacionales y Coordinador Ejecutivo de la asociación civil CHAORDIC KAIZEN, enfocada en el desarrollo integral y la defensa jurídica de comunidades indígenas.

Desde febrero de 2025, se desempeña como Consejero Jurídico del Supremo Consejo Nacional Indígena (SCNI), encabezando la interposición y análisis de recursos legales y juicios de amparo en defensa de los derechos constitucionales de los pueblos originarios, particularmente frente a reformas y leyes federales emitidas sin los procesos de consulta previstos en la Constitución. Su trayectoria se distingue por la combinación de litigio estratégico, experiencia gubernamental y compromiso con los derechos humanos, consolidándolo como un abogado con visión social, rigor jurídico y alcance nacional e internacional.`,
        specialties: ['Derecho Civil', 'Amparo', 'Derecho Mercantil', 'Litigio Agrario'],
        image: '/team/joel-nunez.jpg',
        socialMedia: {
            phone: '6647864439',
            email: 'contacto@lex-360.com.mx'
        },
        calendarUrl: 'https://calendly.com/lex-360/joel-nunez'
    },
    {
        slug: 'jorge-cruz',
        name: 'Jorge Antonio Cruz Ramos',
        title: 'Abogado Asociado',
        shortBio: 'Especialista en derecho penal.',
        fullBio: 'Trayectoria profesional y biografía completa en proceso de actualización.',
        specialties: ['Derecho Penal'],
        image: '/team/placeholder-user.jpg',
        socialMedia: {
            phone: '5554158693'
        }
    },
    {
        slug: 'laura-iris-porras',
        name: 'Laura Iris Porras Espinosa',
        title: 'Jurista, Académica y Servidora Pública',
        shortBio: 'Amplia experiencia en el Poder Judicial de la Federación, con especialización en Justicia Constitucional y Derecho Electoral.',
        fullBio: `Laura Iris Porras Espinosa es jurista, académica y servidora pública con amplia experiencia en el Poder Judicial de la Federación, donde ha desempeñado funciones jurisdiccionales, administrativas y de gestión institucional.

Es Licenciada en Derecho por la Universidad Nacional Autónoma de México (UNAM), Especialista en Carrera Judicial Federal por el Instituto de Especialización Judicial de la Suprema Corte de Justicia de la Nación, y Maestra en Derecho Electoral por la Escuela Judicial Electoral del TEPJF. Asimismo, cuenta con dos maestrías cursadas en la Universidad de Castilla-La Mancha (España): una en Justicia Constitucional, Interpretación y Tutela de los Derechos Fundamentales, y otra en Derecho Antidiscriminatorio.

Dentro del Poder Judicial ha ocupado diversos cargos, entre ellos Directora de Transparencia, Directora de Bienes Asegurados, Abandonados y Decomisados, Directora de Asuntos Contencioso Administrativo y Coordinadora de la Unidad de Estadística y Planeación Judicial del Consejo de la Judicatura Federal, donde participó en el diseño del actual Sistema Integral de Seguimiento de Expedientes (SISE). También se ha desempeñado como Secretaria Proyectista, Jueza de Distrito en funciones en el Estado de Guerrero, y colaboradora en la ponencia de la Ministra Olga Sánchez Cordero en la Suprema Corte de Justicia de la Nación.

En el ámbito académico, ha impartido cursos en el Instituto de la Judicatura Federal y en distintas instituciones educativas, en materias como Juicio de Amparo, Controversias Constitucionales, Administración Judicial y Técnica de Sentencia. Además, ha participado en múltiples diplomados y programas especializados en Derechos Humanos, Transparencia, Argumentación Jurídica e Innovación Judicial, reafirmando su compromiso con la modernización de la justicia y la formación de nuevas generaciones jurídicas.`,
        specialties: ['Justicia Constitucional', 'Derecho Electoral', 'Amparo', 'Derechos Humanos'],
        image: '/team/laura-iris-porras.jpg',
        socialMedia: {
            email: 'laura.porrase@gmail.com',
            phone: '5512861589'
        },
        calendarUrl: 'https://calendly.com/lex-360/laura-porras'
    },
    {
        slug: 'maria-elena-suarez',
        name: 'María Elena Suárez Préstamo',
        title: 'Magistrada, Jurista y Académica',
        shortBio: 'Más de veinticinco años de experiencia en el Poder Judicial de la Federación, actualmente Magistrada en Materia Civil.',
        fullBio: `María Elena Suárez Préstamo es magistrada, jurista y académica con más de veinticinco años de experiencia en el Poder Judicial de la Federación, donde ha desempeñado una destacada trayectoria en los ámbitos civil, penal, administrativo y de formación judicial. Actualmente se desempeña como Magistrada Integrante del Primer Tribunal Colegiado en Materia Civil del Primer Circuito, con residencia en la Ciudad de México. Ha logrado diversas responsabilidades en juzgados y tribunales federales, entre ellas Jueza de Distrito en los estados de Tabasco y Veracruz, así como Magistrada de Tribunal Unitario y de Tribunal Colegiado en el Vigésimo Séptimo Circuito, con sede en Quintana Roo. Asimismo, fungió como Visitadora Judicial "A" del Consejo de la Judicatura Federal, donde contribuyó al fortalecimiento de los procesos de supervisión y calidad jurisdiccional.

Es Licenciada en Derecho y Maestra en Derecho Privado por la Universidad Cristóbal Colón, y cuenta con una Maestría en Justicia Adversarial por el Instituto de la Judicatura Federal. Además, ha realizado múltiples especializaciones en Argumentación Jurídica, Comunicación Oral y Escrita, Justicia Penal Acusatoria, Administración Estratégica y Perspectiva de Género, cursadas en el Instituto de la Judicatura Federal y en distintas instituciones del país.

En el ámbito académico, ha sido docente en el Instituto de la Judicatura Federal y en la Universidad Cristóbal Colón, donde impartió asignaturas y talleres en Técnicas de Investigación Jurídica, Juicio de Amparo, Argumentación Jurídica y Perspectiva de Género. También ha participado en congresos nacionales e internacionales sobre sistema penal acusatorio, derechos humanos y transparencia judicial. A lo largo de su trayectoria, ha participado en más de cincuenta cursos, diplomados y programas de actualización enfocados en las transformaciones del derecho procesal, la equidad de género y la justicia constitucional. Es reconocida por su excelencia académica y compromiso institucional, así como por su contribución a las nuevas generaciones de juristas.`,
        specialties: ['Derecho Civil', 'Amparo', 'Justicia Adversarial', 'Argumentación Jurídica'],
        image: '/team/maria-elena-suarez.jpg',
        socialMedia: {
            email: 'marielsuapre@hotmail.com',
            phone: '5512477209'
        },
        calendarUrl: 'https://calendly.com/lex-360/maria-elena-suarez'
    }
];
