export interface Abogado {
    slug: string;
    name: string;
    title: string;
    shortBio: string;
    fullBio: string;
    specialties: string[];
    image?: string;
}

export const abogados: Abogado[] = [
    {
        slug: 'alejandro-valenzuela',
        name: 'Alejandro Valenzuela Sosa',
        title: 'Abogado, Jurista y Consultor Internacional',
        shortBio: 'Más de veinte años de experiencia en los sectores público y privado, tanto en México como en el extranjero.',
        fullBio: `Alejandro Valenzuela Sosa es abogado, jurista y consultor internacional con más de veinte años de experiencia en los sectores público y privado, tanto en México como en el extranjero. Es miembro de la Barra de Abogados de París y experto parlamentario reconocido por la Unión Interparlamentaria, lo que refleja su sólida trayectoria en los ámbitos jurídico, legislativo y académico.

A lo largo de su carrera ha ocupado cargos de alta responsabilidad en instituciones nacionales e internacionales. En Europa, se desempeñó como consultor en ciencia y tecnología para la Unión Interparlamentaria en Ginebra, enlace con el Parlamento en la Oficina del Primer Ministro de Francia, y asesor parlamentario en la Asamblea Nacional francesa, donde contribuyó al desarrollo de iniciativas legislativas en materia de innovación y gobernanza pública.

En México, ha ejercido como Jefe de Asesores en la Honorable Cámara de Diputados, participando en la elaboración de marcos normativos estratégicos y en el fortalecimiento de procesos legislativos. Paralelamente, ha desarrollado una destacada labor académica como profesor de posgrado en la Facultad de Derecho y Criminología de la Universidad Autónoma de Nuevo León, impartiendo materias como Amparo, Derecho Administrativo, Civil y Familiar.

Valenzuela Sosa cursó estudios de posgrado en la Universidad de París 1 Panthéon-Sorbonne, y domina español, francés e inglés, lo que le ha permitido consolidar una visión jurídica con perspectiva comparada y vocación internacional. Su perfil combina análisis normativo, gestión legislativa y consultoría jurídica de alto nivel, orientado a ofrecer soluciones integrales en entornos complejos y multiculturales.`,
        specialties: ['Derecho Internacional', 'Consultoría Legislativa', 'Amparo', 'Derecho Administrativo']
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
        specialties: ['Justicia Constitucional', 'Derecho Electoral', 'Amparo', 'Derechos Humanos']
    },
    {
        slug: 'maria-elena-suarez',
        name: 'María Elena Suárez Préstamo',
        title: 'Magistrada, Jurista y Académica',
        shortBio: 'Más de veinticinco años de experiencia en el Poder Judicial de la Federación, actualmente Magistrada en Materia Civil.',
        fullBio: `María Elena Suárez Préstamo es magistrada, jurista y académica con más de veinticinco años de experiencia en el Poder Judicial de la Federación, donde ha desempeñado una destacada trayectoria en los ámbitos civil, penal, administrativo y de formación judicial. Actualmente se desempeña como Magistrada Integrante del Primer Tribunal Colegiado en Materia Civil del Primer Circuito, con residencia en la Ciudad de México. Ha logrado diversas responsabilidades en juzgados y tribunales federales, entre ellas Jueza de Distrito en los estados de Tabasco y Veracruz, así como Magistrada de Tribunal Unitario y de Tribunal Colegiado en el Vigésimo Sétimo Circuito, con sede en Quintana Roo. Asimismo, fungió como Visitadora Judicial "A" del Consejo de la Judicatura Federal, donde contribuyó al fortalecimiento de los procesos de supervisión y calidad jurisdiccional.

Es Licenciada en Derecho y Maestra en Derecho Privado por la Universidad Cristóbal Colón, y cuenta con una Maestría en Justicia Adversarial por el Instituto de la Judicatura Federal. Además, ha realizado múltiples especializaciones en Argumentación Jurídica, Comunicación Oral y Escrita, Justicia Penal Acusatoria, Administración Estratégica y Perspectiva de Género, cursadas en el Instituto de la Judicatura Federal y en distintas instituciones del país.

En el ámbito académico, ha sido docente en el Instituto de la Judicatura Federal y en la Universidad Cristóbal Colón, donde impartió asignaturas y talleres en Técnicas de Investigación Jurídica, Juicio de Amparo, Argumentación Jurídica y Perspectiva de Género. También ha participado en congresos nacionales e internacionales sobre sistema penal acusatorio, derechos humanos y transparencia judicial. A lo largo de su trayectoria, ha participado en más de cincuenta cursos, diplomados y programas de actualización enfocados en las transformaciones del derecho procesal, la equidad de género y la justicia constitucional. Es reconocida por su excelencia académica y compromiso institucional, así como por su contribución a las nuevas generaciones de juristas.`,
        specialties: ['Derecho Civil', 'Justicia Adversarial', 'Argumentación Jurídica', 'Perspectiva de Género']
    },
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
        specialties: ['Derecho Corporativo', 'Derecho Fiscal', 'Derecho Inmobiliario', 'Mediación']
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
        specialties: ['Litigio Civil', 'Cobranza Bancaria', 'Amparo', 'Mediación Estratégica']
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
        specialties: ['Derecho Penal', 'Derechos Humanos', 'Litigio Colectivo', 'Derecho Mercantil']
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
        specialties: ['Litigio Agrario', 'Gestión Gubernamental', 'Derechos Indígenas', 'Amparo']
    }
];
