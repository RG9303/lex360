import {
    ShieldCheck, Landmark, FileText, Gavel, Scale, Globe, Vote, Shield, Plane, Users,
    Heart, Briefcase, HardHat, Leaf, ShieldPlus, TrendingUp, TreePalm, ShoppingCart,
    Zap, Building2, Radio, Lightbulb, Handshake, Stethoscope, Home, PawPrint,
    PlaneTakeoff, Library, Cpu, Anchor
} from 'lucide-react';
import React from 'react';

export interface Service {
    title: string;
    description: string;
    iconName: string;
    specialty: string;
    leaderSlug?: string;
}

export const services: Service[] = [
    {
        title: 'Derecho Constitucional y Amparo',
        description: 'Protección integral de los derechos fundamentales ante actos de autoridad.',
        iconName: 'ShieldCheck',
        specialty: 'Amparo',
        leaderSlug: 'laura-iris-porras'
    },
    {
        title: 'Derecho Administrativo',
        description: 'Asesoría en procedimientos ante la administración pública y órganos reguladores.',
        iconName: 'FileText',
        specialty: 'Derecho Administrativo',
        leaderSlug: 'alejandro-valenzuela'
    },
    {
        title: 'Derecho Fiscal',
        description: 'Estrategias de defensa y cumplimiento normativo de alto impacto.',
        iconName: 'Landmark',
        specialty: 'Derecho Fiscal',
        leaderSlug: 'israel-ascencio-cadenas'
    },
    {
        title: 'Derecho Penal',
        description: 'Defensa técnica especializada en el sistema penal acusatorio.',
        iconName: 'Gavel',
        specialty: 'Derecho Penal',
        leaderSlug: 'elena-gil-valle'
    },
    {
        title: 'Derecho Procesal',
        description: 'Representación en litigios civiles, mercantiles y administrativos.',
        iconName: 'Scale',
        specialty: 'Derecho Procesal'
    },
    {
        title: 'Derecho Internacional Privado',
        description: 'Resolución de conflictos legales con elementos de extranjería.',
        iconName: 'Globe',
        specialty: 'Derecho Internacional'
    },
    {
        title: 'Derecho Electoral',
        description: 'Asesoría en procesos democráticos y defensa de derechos político-electorales.',
        iconName: 'Vote',
        specialty: 'Derecho Electoral',
        leaderSlug: 'laura-iris-porras'
    },
    {
        title: 'Derecho Militar',
        description: 'Defensa y asesoría especializada en el ámbito castrense.',
        iconName: 'Shield',
        specialty: 'Derecho Militar'
    },
    {
        title: 'Derecho Migratorio',
        description: 'Gestión de trámites y defensa de derechos de extranjeros en México.',
        iconName: 'Plane',
        specialty: 'Derecho Migratorio'
    },
    {
        title: 'Derecho Civil',
        description: 'Soluciones legales en contratos, bienes y obligaciones.',
        iconName: 'Users',
        specialty: 'Derecho Civil',
        leaderSlug: 'joel-nunez-garcia'
    },
    {
        title: 'Derecho Familiar',
        description: 'Protección jurídica de la unidad familiar y sus integrantes.',
        iconName: 'Heart',
        specialty: 'Familiar'
    },
    {
        title: 'Derecho Mercantil',
        description: 'Asesoría integral para empresas y operaciones comerciales.',
        iconName: 'Briefcase',
        specialty: 'Derecho Mercantil',
        leaderSlug: 'alejandro-ornelas'
    },
    {
        title: 'Derecho Laboral',
        description: 'Defensa de los derechos en las relaciones de trabajo.',
        iconName: 'HardHat',
        specialty: 'Derecho Laboral'
    },
    {
        title: 'Derecho Agrario',
        description: 'Asesoría en la tenencia de la tierra y núcleos agrarios.',
        iconName: 'Leaf',
        specialty: 'Litigio Agrario',
        leaderSlug: 'joel-nunez-garcia'
    },
    {
        title: 'Derecho de la Seguridad Social',
        description: 'Protección de los derechos a la salud y previsión social.',
        iconName: 'ShieldPlus',
        specialty: 'Seguridad Social'
    },
    {
        title: 'Derecho Económico',
        description: 'Regulación de la actividad económica y competencia.',
        iconName: 'TrendingUp',
        specialty: 'Derecho Económico'
    },
    {
        title: 'Derecho Ecológico y Ambiental',
        description: 'Cumplimiento normativo y protección del medio ambiente.',
        iconName: 'TreePalm',
        specialty: 'Derecho Ambiental'
    },
    {
        title: 'Derecho del Consumidor',
        description: 'Defensa de los derechos frente a proveedores de bienes y servicios.',
        iconName: 'ShoppingCart',
        specialty: 'Derecho del Consumidor'
    },
    {
        title: 'Derecho Energético',
        description: 'Asesoría en proyectos de electricidad, hidrocarburos y energías renovables.',
        iconName: 'Zap',
        specialty: 'Derecho Energético'
    },
    {
        title: 'Derecho Bancario y Financiero',
        description: 'Regulación de instituciones financieras y operaciones de crédito.',
        iconName: 'Building2',
        specialty: 'Derecho Bancario',
        leaderSlug: 'israel-ascencio-cadenas'
    },
    {
        title: 'Derecho de las Telecomunicaciones',
        description: 'Regulación de redes, espectro radioeléctrico y servicios digitales.',
        iconName: 'Radio',
        specialty: 'Telecomunicaciones'
    },
    {
        title: 'Derecho de Propiedad Industrial e Intelectual',
        description: 'Protección de marcas, patentes y derechos de autor.',
        iconName: 'Lightbulb',
        specialty: 'Propiedad Intelectual'
    },
    {
        title: 'Métodos Alternos',
        description: 'Mediación y conciliación para la resolución de conflictos.',
        iconName: 'Handshake',
        specialty: 'Mediación',
        leaderSlug: 'alejandro-ornelas'
    },
    {
        title: 'Arbitraje Médico',
        description: 'Resolución de controversias entre usuarios y prestadores de servicios de salud.',
        iconName: 'Stethoscope',
        specialty: 'Arbitraje Médico'
    },
    {
        title: 'Derecho Inmobiliario y Arrendamiento',
        description: 'Asesoría en operaciones de compraventa y arrendamiento de bienes raíces.',
        iconName: 'Home',
        specialty: 'Derecho Inmobiliario',
        leaderSlug: 'alejandro-ornelas'
    },
    {
        title: 'Derecho Animal',
        description: 'Protección jurídica y defensa de los derechos de los animales.',
        iconName: 'PawPrint',
        specialty: 'Derecho Animal'
    },
    {
        title: 'Derecho Aeronaútico',
        description: 'Regulación del espacio aéreo y transporte de aviación.',
        iconName: 'PlaneTakeoff',
        specialty: 'Derecho Aeronaútico'
    },
    {
        title: 'Derecho del Patrimonio Cultural',
        description: 'Protección y preservación del acervo cultural e histórico.',
        iconName: 'Library',
        specialty: 'Patrimonio Cultural'
    },
    {
        title: 'Derecho Digital e Inteligencia Artificial',
        description: 'Nuevos retos legales en la era de la transformación digital.',
        iconName: 'Cpu',
        specialty: 'Derecho Digital'
    },
    {
        title: 'Derecho Marítimo',
        description: 'Regulación del comercio marítimo y navegación.',
        iconName: 'Anchor',
        specialty: 'Derecho Marítimo'
    }
];

export const getIcon = (name: string) => {
    const icons: Record<string, React.ReactNode> = {
        ShieldCheck: <ShieldCheck className="w-10 h-10" />,
    Landmark: <Landmark className="w-10 h-10" />,
    FileText: <FileText className="w-10 h-10" />,
    Gavel: <Gavel className="w-10 h-10" />,
    Scale: <Scale className="w-10 h-10" />,
    Globe: <Globe className="w-10 h-10" />,
    Vote: <Vote className="w-10 h-10" />,
    Shield: <Shield className="w-10 h-10" />,
    Plane: <Plane className="w-10 h-10" />,
    Users: <Users className="w-10 h-10" />,
    Heart: <Heart className="w-10 h-10" />,
    Briefcase: <Briefcase className="w-10 h-10" />,
    HardHat: <HardHat className="w-10 h-10" />,
    Leaf: <Leaf className="w-10 h-10" />,
    ShieldPlus: <ShieldPlus className="w-10 h-10" />,
    TrendingUp: <TrendingUp className="w-10 h-10" />,
    TreePalm: <TreePalm className="w-10 h-10" />,
    ShoppingCart: <ShoppingCart className="w-10 h-10" />,
    Zap: <Zap className="w-10 h-10" />,
    Building2: <Building2 className="w-10 h-10" />,
    Radio: <Radio className="w-10 h-10" />,
    Lightbulb: <Lightbulb className="w-10 h-10" />,
    Handshake: <Handshake className="w-10 h-10" />,
    Stethoscope: <Stethoscope className="w-10 h-10" />,
    Home: <Home className="w-10 h-10" />,
    PawPrint: <PawPrint className="w-10 h-10" />,
    PlaneTakeoff: <PlaneTakeoff className="w-10 h-10" />,
    Library: <Library className="w-10 h-10" />,
    Cpu: <Cpu className="w-10 h-10" />,
    Anchor: <Anchor className="w-10 h-10" />
    };
    return icons[name] || <ShieldCheck className="w-10 h-10" />;
};
