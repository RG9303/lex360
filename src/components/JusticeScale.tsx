'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function JusticeScaleModel() {
    const beamRef = useRef<THREE.Group>(null);
    const leftPlateRef = useRef<THREE.Group>(null);
    const rightPlateRef = useRef<THREE.Group>(null);

    // Constants for materials - SHINY GOLD
    const goldMaterialProps = useMemo(() => ({
        color: "#ffcc33", // Brighter, more yellow-gold
        metalness: 1.0,
        roughness: 0.05, // Mirror finish
        emissive: "#aa8822",
        emissiveIntensity: 0.1,
    }), []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        // Slight tilting of the beam
        const tilt = Math.sin(t * 0.8) * 0.1;
        if (beamRef.current) {
            beamRef.current.rotation.z = tilt;
        }

        // Counter-rotation for plates to stay vertical and sway
        if (leftPlateRef.current) {
            leftPlateRef.current.rotation.z = -tilt + Math.sin(t * 1.1) * 0.03;
        }
        if (rightPlateRef.current) {
            rightPlateRef.current.rotation.z = -tilt + Math.sin(t * 1.1 + Math.PI) * 0.03;
        }
    });

    return (
        <group position={[0, -5, 0]} scale={[1.1, 1.1, 1.1]}>
            {/* --- STEPPED BASE --- */}
            {/* Ornate Rounded Base */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[3, 3.2, 0.4, 128]} />
                <meshStandardMaterial {...goldMaterialProps} />
            </mesh>
            <mesh position={[0, 0.4, 0]}>
                <cylinderGeometry args={[2.5, 2.8, 0.3, 128]} />
                <meshStandardMaterial {...goldMaterialProps} />
            </mesh>
            {/* Flourished base neck */}
            <mesh position={[0, 1.0, 0]}>
                <cylinderGeometry args={[1.5, 2.4, 0.8, 128]} />
                <meshStandardMaterial {...goldMaterialProps} />
            </mesh>

            {/* --- DECORATIVE PILLAR --- */}
            {/* Fluted/Tapered Column */}
            <mesh position={[0, 3.0, 0]}>
                <cylinderGeometry args={[0.6, 1.0, 4, 64]} />
                <meshStandardMaterial {...goldMaterialProps} />
            </mesh>
            {/* Decorative Orbs & Rings */}
            <mesh position={[0, 5.0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.7, 0.15, 32, 128]} />
                <meshStandardMaterial {...goldMaterialProps} />
            </mesh>
            <mesh position={[0, 5.0, 0]}>
                <sphereGeometry args={[0.4, 64, 64]} />
                <meshStandardMaterial {...goldMaterialProps} />
            </mesh>
            {/* Upper Column */}
            <mesh position={[0, 7.5, 0]}>
                <cylinderGeometry args={[0.5, 0.6, 6, 64]} />
                <meshStandardMaterial {...goldMaterialProps} />
            </mesh>

            {/* Pillar Top - Ornate Finial */}
            <mesh position={[0, 10.8, 0]}>
                <sphereGeometry args={[0.7, 64, 64]} />
                <meshStandardMaterial {...goldMaterialProps} />
            </mesh>
            <mesh position={[0, 11.5, 0]}>
                <coneGeometry args={[0.4, 1.0, 64]} />
                <meshStandardMaterial {...goldMaterialProps} />
            </mesh>

            {/* --- ROTATING BEAM ASSEMBLY --- */}
            <group ref={beamRef} position={[0, 10, 0]}>
                {/* Horizontal Beam (with elegant taper) */}
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.15, 0.2, 12, 64]} />
                    <meshStandardMaterial {...goldMaterialProps} />
                </mesh>

                {/* Decorative Scrollwork flourishes */}
                <mesh position={[1.5, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 4]}>
                    <torusGeometry args={[0.8, 0.08, 32, 64, Math.PI * 1.2]} />
                    <meshStandardMaterial {...goldMaterialProps} />
                </mesh>
                <mesh position={[-1.5, 0.5, 0]} rotation={[Math.PI / 2, 0, Math.PI / 4]}>
                    <torusGeometry args={[0.8, 0.08, 32, 64, Math.PI * 1.2]} />
                    <meshStandardMaterial {...goldMaterialProps} />
                </mesh>

                {/* Left Side suspension point */}
                <group position={[-6, 0.2, 0]}>
                    <group ref={leftPlateRef}>
                        {/* Triple Chains */}
                        <mesh position={[0.3, -3.5, 0.3]} rotation={[0.08, 0, -0.08]}>
                            <cylinderGeometry args={[0.02, 0.02, 7, 16]} />
                            <meshStandardMaterial {...goldMaterialProps} />
                        </mesh>
                        <mesh position={[-0.3, -3.5, 0.3]} rotation={[0.08, 0, 0.08]}>
                            <cylinderGeometry args={[0.02, 0.02, 7, 16]} />
                            <meshStandardMaterial {...goldMaterialProps} />
                        </mesh>
                        <mesh position={[0, -3.5, -0.4]} rotation={[-0.08, 0, 0]}>
                            <cylinderGeometry args={[0.02, 0.02, 7, 16]} />
                            <meshStandardMaterial {...goldMaterialProps} />
                        </mesh>

                        {/* Deep Bowl Plate */}
                        <mesh position={[0, -7, 0]} scale={[2.5, 0.6, 2.5]}>
                            <sphereGeometry args={[1, 64, 64, 0, Math.PI * 2, Math.PI / 2, Math.PI]} />
                            <meshStandardMaterial {...goldMaterialProps} side={THREE.DoubleSide} />
                        </mesh>
                        {/* Plate Rim */}
                        <mesh position={[0, -7.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
                            <torusGeometry args={[2.5, 0.05, 32, 128]} />
                            <meshStandardMaterial {...goldMaterialProps} />
                        </mesh>
                    </group>
                </group>

                {/* Right Side suspension point */}
                <group position={[6, 0.2, 0]}>
                    <group ref={rightPlateRef}>
                        {/* Triple Chains */}
                        <mesh position={[0.3, -3.5, 0.3]} rotation={[0.08, 0, -0.08]}>
                            <cylinderGeometry args={[0.02, 0.02, 7, 16]} />
                            <meshStandardMaterial {...goldMaterialProps} />
                        </mesh>
                        <mesh position={[-0.3, -3.5, 0.3]} rotation={[0.08, 0, 0.08]}>
                            <cylinderGeometry args={[0.02, 0.02, 7, 16]} />
                            <meshStandardMaterial {...goldMaterialProps} />
                        </mesh>
                        <mesh position={[0, -3.5, -0.4]} rotation={[-0.08, 0, 0]}>
                            <cylinderGeometry args={[0.02, 0.02, 7, 16]} />
                            <meshStandardMaterial {...goldMaterialProps} />
                        </mesh>

                        {/* Deep Bowl Plate */}
                        <mesh position={[0, -7, 0]} scale={[2.5, 0.6, 2.5]}>
                            <sphereGeometry args={[1, 64, 64, 0, Math.PI * 2, Math.PI / 2, Math.PI]} />
                            <meshStandardMaterial {...goldMaterialProps} side={THREE.DoubleSide} />
                        </mesh>
                        {/* Plate Rim */}
                        <mesh position={[0, -7.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
                            <torusGeometry args={[2.5, 0.05, 32, 128]} />
                            <meshStandardMaterial {...goldMaterialProps} />
                        </mesh>
                    </group>
                </group>
            </group>
        </group>
    );
}
