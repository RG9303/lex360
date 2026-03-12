export interface Procedure {
  name: string;
  description: string;
  authority?: string;
  legalBasis?: string;
}

export interface CatalogCategory {
  id: string;
  category: string;
  procedures: Procedure[];
}

export const catalogData: CatalogCategory[] = [
  {
    id: 'constitucional-amparo',
    category: 'Constitucional y Amparo',
    procedures: [
      { name: 'Juicio de Amparo Indirecto', description: 'Protección contra actos de autoridad, leyes autoaplicativas o resoluciones fuera de juicio que vulneren derechos humanos.', authority: 'Juzgados de Distrito', legalBasis: 'Ley de Amparo' },
      { name: 'Juicio de Amparo Directo', description: 'Impugnación de sentencias definitivas, laudos o resoluciones que ponen fin al juicio.', authority: 'Tribunales Colegiados de Circuito', legalBasis: 'Ley de Amparo' },
      { name: 'Incidente de Suspensión', description: 'Medida cautelar para paralizar los efectos del acto reclamado y preservar la materia del juicio.', authority: 'PJF', legalBasis: 'Ley de Amparo, Arts. 125-158' },
      { name: 'Recurso de Revisión', description: 'Medio de impugnación contra resoluciones dictadas en la audiencia constitucional.', authority: 'SCJN / TCC' },
      { name: 'Recurso de Queja/Reclamación', description: 'Procedimientos para corregir irregularidades u omisiones en el trámite del amparo.', authority: 'Tribunales Colegiados' }
    ]
  },
  {
    id: 'civil-familiar',
    category: 'Civil y Familiar',
    procedures: [
      { name: 'Juicio Oral Familiar', description: 'Resolución ágil de controversias relacionadas con el estado civil y relaciones familiares.', authority: 'Juzgados Familiares' },
      { name: 'Divorcio Incausado o Bilateral', description: 'Disolución del vínculo matrimonial sin necesidad de expresar causa o por mutuo acuerdo.', authority: 'Juez de lo Familiar' },
      { name: 'Pensión Alimenticia', description: 'Determinación, aseguramiento y pago de alimentos para acreedores alimentarios.', authority: 'Juez de lo Familiar' },
      { name: 'Guarda y Custodia', description: 'Determinación sobre el cuidado y protección de menores o personas con discapacidad.', authority: 'Juez de lo Familiar' },
      { name: 'Juicio Sucesoris (Testamentario/Intestamentario)', description: 'Transmisión de bienes, derechos y obligaciones por causa de muerte.', authority: 'Juez de lo Civil / Notario' },
      { name: 'Adopción y Filiación', description: 'Procedimientos para establecer vínculos jurídicos de parentesco.', authority: 'Juez de lo Familiar' }
    ]
  },
  {
    id: 'mercantil-concursal',
    category: 'Mercantil y Concursal',
    procedures: [
      { name: 'Juicio Ejecutivo Mercantil', description: 'Cobro de deudas basadas en títulos que traen aparejada ejecución como pagarés o cheques.', authority: 'Juzgados Mercantiles', legalBasis: 'Código de Comercio' },
      { name: 'Juicio Oral Mercantil', description: 'Resolución de controversias comerciales mediante audiencias predominantes orales.', authority: 'Juzgados de Proceso Oral', legalBasis: 'Código de Comercio' },
      { name: 'Concurso Mercantil', description: 'Procedimiento para empresas en insolvencia que buscan reestructuración o liquidación ordenada.', authority: 'Juez de Distrito', legalBasis: 'Ley de Concursos Mercantiles' },
      { name: 'Arbitraje Comercial', description: 'Resolución de disputas mediante árbitros privados con validez legal.', authority: 'Cámaras de Comercio / Centros de Arbitraje' }
    ]
  },
  {
    id: 'fiscal-administrativa',
    category: 'Fiscal, Administrativa y Aduanera',
    procedures: [
      { name: 'Juicio Contencioso Administrativo (Nulidad)', description: 'Impugnación de actos administrativos o resoluciones fiscales federales.', authority: 'TFJA', legalBasis: 'LFPVCA' },
      { name: 'Recurso de Revocación', description: 'Medio de defensa administrativo ante la propia autoridad que dictó el acto (SAT/IMSS).', authority: 'SAT / IMSS / ISSSTE', legalBasis: 'Código Fiscal de la Federación' },
      { name: 'Representación en Auditorías y Visitas Domiciliarias', description: 'Acompañamiento legal durante las facultades de comprobación de la autoridad fiscal.', authority: 'SAT / Entidades Federativas' },
      { name: 'Procedimiento Administrativo en Materia Aduanera (PAMA)', description: 'Defensa contra el embargo precautorio de mercancías de procedencia extranjera.', authority: 'Aduanas / SAT', legalBasis: 'Ley Aduanera' },
      { name: 'Procedimientos EFOS y EDOS', description: 'Defensa ante la presunción de operaciones inexistentes o emisión de facturas falsas.', authority: 'SAT', legalBasis: 'Art. 69-B CFF' }
    ]
  },
  {
    id: 'penal',
    category: 'Penal',
    procedures: [
      { name: 'Estrategia en Sistema Penal Acusatorio', description: 'Defensa técnica o representación de víctimas en las etapas inicial, intermedia y de juicio oral.', authority: 'Jueces de Control / Tribunales de Enjuiciamiento' },
      { name: 'Juicio de Extradición', description: 'Procedimientos internacionales para la entrega de personas reclamadas por otros Estados.', authority: 'SRE / Juez de Distrito' },
      { name: 'Mediciones Alternas (MASC)', description: 'Salidas alternas al proceso penal mediante acuerdos reparatorios.', authority: 'Fiscalías / Centros de Mecanismos Alternativos' },
      { name: 'Ejecución de Penas y Beneficios Preliberacionales', description: 'Trámite para la obtención de libertad anticipada o beneficios durante el cumplimiento de condena.', authority: 'Juez de Ejecución' }
    ]
  },
  {
    id: 'laboral',
    category: 'Laboral',
    procedures: [
      { name: 'Juicio Ordinario Laboral', description: 'Resolución de conflictos individuales o colectivos de trabajo ante los nuevos Tribunales Laborales.', authority: 'Poder Judicial (Federal/Local)', legalBasis: 'Ley Federal del Trabajo' },
      { name: 'Conciliación Prejudicial Obligatoria', description: 'Etapa necesaria antes de demandar para buscar un arreglo conciliatorio.', authority: 'Centros de Conciliación Laboral' },
      { name: 'Rescisiones y Despidos Injustificados', description: 'Defensa de los derechos ante la terminación de la relación laboral sin causa justificada.', authority: 'Tribunal Laboral' }
    ]
  },
  {
    id: 'consumidor-financiero',
    category: 'Protección al Consumidor y Usuario Financiero',
    procedures: [
      { name: 'Queja y Conciliación PROFECO', description: 'Procedimiento administrativo contra proveedores que vulneran derechos del consumidor.', authority: 'PROFECO', legalBasis: 'LFPC' },
      { name: 'Reclamación CONDUSEF', description: 'Defensa de usuarios frente a instituciones financieras por cobros indebidos o servicios no reconocidos.', authority: 'CONDUSEF', legalBasis: 'LPDUEF' },
      { name: 'Juicio de nulidad contra multas administrativas', description: 'Defensa legal contra sanciones impuestas por organismos reguladores.', authority: 'TFJA' }
    ]
  },
  {
    id: 'agrario',
    category: 'Agrario',
    procedures: [
      { name: 'Juicio Agrario Ordinario', description: 'Controversias sobre tenencia, límites y derechos ejidales o comunales.', authority: 'Tribunales Unitarios Agrarios', legalBasis: 'Ley Agraria' },
      { name: 'Restitución de Tierras', description: 'Acciones legales para recuperar superficies despojadas a núcleos de población.', authority: 'TUA' },
      { name: 'Regularización de Tierras y Asentamientos', description: 'Procedimientos para formalizar la propiedad en medios rurales.', authority: 'RAN / SEDATU' }
    ]
  },
  {
    id: 'propiedad-intelectual',
    category: 'Propiedad Intelectual y Derechos de Autor',
    procedures: [
      { name: 'Registro de Marcas y Patentes', description: 'Protección de signos distintivos, invenciones, modelos de utilidad y diseños industriales.', authority: 'IMPI', legalBasis: 'LFPPI' },
      { name: 'Litigio Infracción Administrativa', description: 'Defensa o ataque contra el uso no autorizado de derechos de propiedad industrial.', authority: 'IMPI / SEPI', legalBasis: 'LFPPI' },
      { name: 'Registro de Obra (Copyright)', description: 'Protección de creaciones literarias, artísticas, software y bases de datos.', authority: 'INDAUTOR', legalBasis: 'LFDA' }
    ]
  },
  {
    id: 'competencia-economica',
    category: 'Competencia Económica',
    procedures: [
      { name: 'Investigación de Prácticas Monopólicas', description: 'Defensa en procedimientos seguidos en forma de juicio por conductas anticompetitivas.', authority: 'COFECE / IFT' },
      { name: 'Notificación de Concentraciones', description: 'Autorización previa para fusiones y adquisiciones que impacten el mercado.', authority: 'COFECE' },
      { name: 'Programa de Inmunidad (Clemencia)', description: 'Gestión para la reducción de sanciones a cambio de cooperación informativa.', authority: 'COFECE' }
    ]
  },
  {
    id: 'telecomunicaciones-energia',
    category: 'Telecomunicaciones y Energía',
    procedures: [
      { name: 'Obtención de Concesiones de Telecomunicaciones', description: 'Trámite para operar redes públicas de telecomunicaciones o uso del espectro.', authority: 'IFT' },
      { name: 'Permisos de Generación de Energía Eléctrica', description: 'Gestión ante el regulador para proyectos de energía convencional o limpia.', authority: 'CRE / SENER' },
      { name: 'Defensa contra Sanciones Regulatorias', description: 'Litigio especializado ante organismos autónomos y dependencias del sector energético.', authority: 'PJF (Juzgados Especializados)' }
    ]
  },
  {
    id: 'sanitario',
    category: 'Sanitario',
    procedures: [
      { name: 'Registros Sanitarios (Medicamentos y Dispositivos)', description: 'Autorización comercial para productos sujetos a vigilancia sanitaria.', authority: 'COFEPRIS' },
      { name: 'Licencias Sanitarias y Avisos de Funcionamiento', description: 'Regularización de establecimientos de salud, farmacias e industrias.', authority: 'COFEPRIS / Entidades Estatales' },
      { name: 'Defensa ante Clausuras y Aseguramientos', description: 'Litigio administrativo contra medidas de seguridad sanitarias.', authority: 'COFEPRIS / Juez Administrativo' }
    ]
  },
  {
    id: 'bancario-bursatil',
    category: 'Bancario, Bursátil y Seguros',
    procedures: [
      { name: 'Autorización IFPE/ITF (Fintech)', description: 'Trámite de constitución y operación para Instituciones de Tecnología Financiera.', authority: 'CNBV / SHCP' },
      { name: 'Registro Nacional de Valores (RNV)', description: 'Gestión para la emisión y oferta pública de valores en bolsa.', authority: 'CNBV' },
      { name: 'Reclamos de Seguros y Fianzas', description: 'Cobro judicial o administrativo de pólizas ante incumplimiento de aseguradoras.', authority: 'CONDUSEF / Juez Civil' }
    ]
  },
  {
    id: 'transparencia',
    category: 'Transparencia y Datos Personales',
    procedures: [
      { name: 'Recurso de Revisión de Transparencia', description: 'Impugnación de negativas de acceso a información pública gubernamental.', authority: 'INAI / Organismos Locales' },
      { name: 'Procedimiento de Imposición de Sanciones (LFPDPPP)', description: 'Defensa o denuncia por mal uso de datos personales por particulares.', authority: 'INAI', legalBasis: 'LFPDPPP' },
      { name: 'Derechos ARCO', description: 'Gestión de solicitudes de Acceso, Rectificación, Cancelación y Oposición de datos.', authority: 'INAI' }
    ]
  },
  {
    id: 'responsabilidades-anticorripcion',
    category: 'Responsabilidades Administrativas y Anticorrupción',
    procedures: [
      { name: 'Juicio de Responsabilidad Administrativa', description: 'Defensa de servidores públicos o particulares ante faltas administrativas graves.', authority: 'TFJA / Tribunales Locales', legalBasis: 'LGRA' },
      { name: 'Procedimiento de Inhabilitación', description: 'Impugnación de sanciones que impiden contratar con el gobierno.', authority: 'SFP / TFJA' },
      { name: 'Auditorías de Legalidad y Compliance Público', description: 'Evaluación preventiva para el cumplimiento de normatividad en la gestión pública.', authority: 'ASF / Entidades de Fiscalización' }
    ]
  },
  {
    id: 'seguridad-nacional',
    category: 'Seguridad Nacional',
    procedures: [
      { name: 'Consultoría en Infraestructura Crítica', description: 'Asesoría en la protección jurídica de activos estratégicos del Estado.', authority: 'Consejo de Seguridad Nacional' },
      { name: 'Litigio en Información Reservada', description: 'Defensa de la confidencialidad de datos sensibles por razones de seguridad nacional.', authority: 'PJF / INAI' }
    ]
  }
];
