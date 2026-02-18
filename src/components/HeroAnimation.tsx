'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import * as THREE from 'three';
import { Float, Environment, PerspectiveCamera, OrbitControls, useScroll, ScrollControls, Scroll } from '@react-three/drei';

// --- STABILITY COMPONENTS ---

class ErrorBoundary extends React.Component<{ children: React.ReactNode, fallback: React.ReactNode }, { hasError: boolean }> {
    constructor(props: { children: React.ReactNode, fallback: React.ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.error("Hero 3D Engine Error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) return this.props.fallback;
        return this.props.children;
    }
}

const phrases = [
    "LEX 360°",
    "JUSTICIA CON VISIÓN 360°",
    "LEGISLACIÓN INTELIGENTE",
    "PROTECCIÓN PATRIMONIAL",
    "INNOVACIÓN JURÍDICA",
    "EXCELENCIA ÉTICA"
];

const mediaAssets = [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=60&w=500", // Justice
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=60&w=500", // Gavel
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=60&w=500", // Docs
];

function GlassCube({ position, textureUrl, index }: { position: [number, number, number], textureUrl: string, index: number }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [texture, setTexture] = useState<THREE.Texture | null>(null);
    const speed = 0.2 + (index % 3) * 0.1;

    useEffect(() => {
        const loader = new THREE.TextureLoader();
        loader.load(
            textureUrl,
            (tex) => setTexture(tex),
            undefined,
            () => console.warn(`Texture failed to load: ${textureUrl}`)
        );
    }, [textureUrl]);

    useFrame((state) => {
        if (meshRef.current) {
            const time = state.clock.elapsedTime * speed;
            const radius = Math.sqrt(position[0] ** 2 + position[2] ** 2);
            const angle = Math.atan2(position[2], position[0]) + time * 0.2;
            meshRef.current.position.x = Math.cos(angle) * radius;
            meshRef.current.position.z = Math.sin(angle) * radius;
            meshRef.current.lookAt(0, meshRef.current.position.y, 0);
            meshRef.current.position.y += Math.sin(state.clock.elapsedTime + index) * 0.005;
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <boxGeometry args={[2, 2, 0.1]} />
            <meshStandardMaterial
                map={texture || undefined}
                color={!texture ? "#001a2a" : "#fff"}
                metalness={0.9}
                roughness={0.1}
                transparent
                opacity={0.8}
                emissive="#00e5ff"
                emissiveIntensity={0.1}
            />
            {/* Golden Frame */}
            <mesh position={[0, 0, -0.06]}>
                <boxGeometry args={[2.1, 2.1, 0.05]} />
                <meshStandardMaterial color="#c8a96e" metalness={1} roughness={0.1} />
            </mesh>
        </mesh>
    );
}

function JurisprudenceCylinder() {
    const count = 6;
    const radius = 8;
    const heightRange = 8;

    const cubeData = React.useMemo(() => {
        return Array.from({ length: count }).map((_, i) => {
            const angle = (i / count) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            const y = (Math.random() - 0.5) * heightRange;
            return { x, y, z, textureUrl: mediaAssets[i % mediaAssets.length] };
        });
    }, []);

    return (
        <group>
            {cubeData.map((data, i) => (
                <GlassCube
                    key={i}
                    index={i}
                    position={[data.x, data.y, data.z]}
                    textureUrl={data.textureUrl}
                />
            ))}
        </group>
    );
}

function LexPerspective() {
    const groupRef = useRef<THREE.Group>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            // Constant autonomous rotation (Autonomous Movement)
            groupRef.current.rotation.y += 0.001;

            // Dampened mouse-dependency (Subtle Parallax)
            const targetY = mouseRef.current.x * 0.15;
            const targetX = mouseRef.current.y * 0.1;
            groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y % (Math.PI * 2)) * 0.02;
            groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.02;
        }
    });

    return (
        <group ref={groupRef}>
            <JurisprudenceCylinder />
            {/* Central Core Light */}
            <pointLight intensity={2} color="#00e5ff" distance={20} />
            <pointLight position={[0, 5, 0]} intensity={1} color="#c8a96e" />
        </group>
    );
}

export default function HeroAnimation({ children }: { children?: React.ReactNode }) {
    const [index, setIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const isBrand = index === 0;

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#02050a]">
            {/* 1. Base Fail-Safe Layer (Always visible, even if 3D crashes) */}
            <div className="absolute inset-0 bg-[#02050a] z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,255,0.05)_0%,transparent_70%)]" />
            </div>

            {/* 2. 3D Engine Layer (Wrapped in Safety) */}
            <div className="absolute inset-0 z-10 opacity-70">
                {mounted && (
                    <ErrorBoundary fallback={<div className="absolute inset-0 bg-[#02050a]" />}>
                        <Canvas dpr={1} gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}>
                            <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
                            <color attach="background" args={['#02050a']} />
                            <fog attach="fog" args={['#02050a', 15, 30]} />

                            <ambientLight intensity={0.4} />
                            <spotLight position={[20, 20, 20]} angle={0.15} penumbra={1} intensity={1} color="#00e5ff" />

                            <Suspense fallback={null}>
                                <LexPerspective />
                                <Environment preset="night" />
                            </Suspense>
                        </Canvas>
                    </ErrorBoundary>
                )}
            </div>

            {/* 3. Cinematic Overlays */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,5,10,0.8)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#02050a] via-transparent to-transparent" />
                {/* Lens Vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
            </div>

            {/* 4. Content Container */}
            <div className="relative z-30 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
                {/* Badge - Minimalist Lex 360 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-3 px-8 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-extralight tracking-[0.6em] uppercase mb-16 backdrop-blur-3xl shadow-[0_0_30px_rgba(0,229,255,0.05)]"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#00e5ff] animate-pulse" />
                    <ShieldCheck size={16} className="opacity-40" /> Lex-360: Innovación sin límites
                </motion.div>

                {/* Brand/Phrases Reveal */}
                <div className="h-[220px] md:h-[320px] flex items-center justify-center w-full mb-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, filter: 'blur(30px)', scale: 1.15, y: 10 }}
                            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1, y: 0 }}
                            exit={{ opacity: 0, filter: 'blur(30px)', scale: 0.85, y: -10 }}
                            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                            className="text-center"
                        >
                            <h1 className={`${isBrand ? "text-7xl md:text-9xl lg:text-[11rem] font-black tracking-tighter italic" : "text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.25em]"} text-white leading-[0.85] uppercase relative drop-shadow-[0_0_60px_rgba(255,255,255,0.2)]`}>
                                {isBrand ? (
                                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#c8a96e] via-white to-[#c8a96e] animate-shimmer">
                                        {phrases[index]}
                                    </span>
                                ) : (
                                    phrases[index].split(' ').map((word, i) => {
                                        const isFocus = (phrases[index].split(' ').length > 2) ? (i === 1) : (i === 0);
                                        return (
                                            <span key={i} className={isFocus ? "text-[#c8a96e]" : "text-white/90"}>
                                                {word}{' '}
                                                {i === 1 && phrases[index].split(' ').length > 2 && <br className="hidden md:block" />}
                                            </span>
                                        );
                                    })
                                )}
                            </h1>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Cinematic Tagline - Formalized Version */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.45 }}
                    className="text-white text-[13px] md:text-sm max-w-4xl text-center mb-20 leading-relaxed font-light tracking-[1.2em] uppercase"
                >
                    "Fidelidad. Inteligencia. Trascendencia."
                </motion.p>

                {/* CTA Section */}
                <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
                    {children}
                </div>
            </div>

            {/* Cinematic Overlay FX */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.08] z-30 mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>
    );
}
