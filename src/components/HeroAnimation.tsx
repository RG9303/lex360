'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import * as THREE from 'three';
import { Float, Text, Environment, PerspectiveCamera, MeshDistortMaterial, Bloom, EffectComposer } from '@react-three/drei';

const phrases = [
    "LEX 360°",
    "JUSTICIA CON VISIÓN 360°",
    "LEGISLACIÓN INTELIGENTE",
    "PROTECCIÓN PATRIMONIAL",
    "INNOVACIÓN JURÍDICA",
    "EXCELENCIA ÉTICA"
];

const mediaAssets = [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800", // Scales of Justice
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800", // Gavel / Courtroom
    "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80&w=800", // Modern Corporate Building
    "https://images.unsplash.com/photo-1521791136064-7986c295944b?auto=format&fit=crop&q=80&w=800", // Business Handshake
];

function LegalCube({ position, textureUrl, delay }: { position: [number, number, number], textureUrl: string, delay: number }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const texture = useLoader(THREE.TextureLoader, textureUrl);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.1;
            meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.3 + delay) * 0.1;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={position}>
            <mesh ref={meshRef}>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial
                    map={texture}
                    metalness={0.7}
                    roughness={0.2}
                    emissive="#00e5ff"
                    emissiveIntensity={0.05}
                />
                {/* Glow edges effect */}
                <lineSegments>
                    <edgesGeometry args={[new THREE.BoxGeometry(2, 2, 2)]} />
                    <lineBasicMaterial color="#00e5ff" linewidth={2} transparent opacity={0.4} />
                </lineSegments>
            </mesh>
        </Float>
    );
}

function CubeWall() {
    const cubes = [];
    const spacing = 4;
    const rows = 3;
    const cols = 4;

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            cubes.push(
                <LegalCube
                    key={`${i}-${j}`}
                    position={[(i - cols / 2 + 0.5) * spacing, (j - rows / 2 + 0.5) * spacing, Math.sin(i + j) * 2]}
                    textureUrl={mediaAssets[(i + j) % mediaAssets.length]}
                    delay={i * 0.5 + j * 0.3}
                />
            );
        }
    }

    return <group position={[0, 0, -5]}>{cubes}</group>;
}

function BackgroundAtmosphere() {
    return (
        <>
            <color attach="background" args={['#02040a']} />
            <fog attach="fog" args={['#02040a', 10, 25]} />
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#00e5ff" />
            <pointLight position={[-10, -10, -10]} intensity={0.8} color="#c8a96e" />
            <Environment preset="night" />
        </>
    );
}

export default function HeroAnimation({ children }: { children?: React.ReactNode }) {
    const [index, setIndex] = useState(0);
    const isBrand = index === 0;

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#02040a]">
            {/* 3D Engine Layer */}
            <div className="absolute inset-0 z-0">
                <Canvas shadows>
                    <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
                    <BackgroundAtmosphere />
                    <Suspense fallback={null}>
                        <CubeWall />
                    </Suspense>
                </Canvas>
            </div>

            {/* Cinematic Overlays */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,4,10,0.9)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#02040a] via-[#02040a]/40 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-3 px-8 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-extralight tracking-[0.5em] uppercase mb-16 backdrop-blur-3xl"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#00e5ff] animate-pulse" />
                    <ShieldCheck size={16} className="opacity-60" /> Jurisprudencia de Innovación
                </motion.div>

                {/* Phrases Cycle */}
                <div className="h-[200px] md:h-[300px] flex items-center justify-center w-full mb-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, filter: 'blur(20px)', letterSpacing: '0.3em', scale: 1.1 }}
                            animate={{ opacity: 1, filter: 'blur(0px)', letterSpacing: isBrand ? '-0.02em' : '0.15em', scale: 1 }}
                            exit={{ opacity: 0, filter: 'blur(20px)', letterSpacing: '0.3em', scale: 0.9 }}
                            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                            className="text-center"
                        >
                            <h1 className={`${isBrand ? "text-7xl md:text-9xl lg:text-[10rem] font-black italic tracking-tighter" : "text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.2em]"} text-white leading-[0.9] uppercase relative drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]`}>
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

                {/* Cinematic Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 1 }}
                    className="text-white text-[11px] md:text-xs max-w-2xl text-center mb-16 leading-relaxed font-extralight tracking-[1.2em] uppercase italic"
                >
                    "Fidelidad. Inteligencia. Resultados."
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
                    {children}
                </div>
            </div>

            {/* Cinematic Film Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.06] z-30 mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>
    );
}
