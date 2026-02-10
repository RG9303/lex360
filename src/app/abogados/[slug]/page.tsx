import { abogados } from '@/data/abogados';
import AbogadoProfileContent from './AbogadoProfileContent';
import { Metadata } from 'next';

export async function generateStaticParams() {
    return abogados.map((abogado) => ({
        slug: abogado.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const abogado = abogados.find((a) => a.slug === slug);
    if (!abogado) return { title: 'Abogado no encontrado' };

    return {
        title: `${abogado.name} | Lex-360 Abogados`,
        description: `Perfil profesional de ${abogado.name}, ${abogado.title}. Especialista en ${abogado.specialties.join(', ')}.`,
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <AbogadoProfileContent slug={slug} />;
}
