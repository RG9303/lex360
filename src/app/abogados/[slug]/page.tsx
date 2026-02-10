import { abogados } from '@/data/abogados';
import AbogadoProfileContent from './AbogadoProfileContent';
import { Metadata } from 'next';

export async function generateStaticParams() {
    return abogados.map((abogado) => ({
        slug: abogado.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const abogado = abogados.find((a) => a.slug === params.slug);
    if (!abogado) return { title: 'Abogado no encontrado' };

    return {
        title: `${abogado.name} | Lex-360 Abogados`,
        description: `Perfil profesional de ${abogado.name}, ${abogado.title}. Especialista en ${abogado.specialties.join(', ')}.`,
    };
}

export default function Page({ params }: { params: { slug: string } }) {
    return <AbogadoProfileContent params={params} />;
}
