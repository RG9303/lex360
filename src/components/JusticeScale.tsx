'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function JusticeScaleModel() {
    const beamRef = useRef<THREE.Group>(null);
    const leftPlateRef = useRef<THREE.Group>(null);
    const rightPlateRef = useRef<THREE.Group>(null);

    // Constants for materials
    const goldMaterialProps = useMemo(() => ({
        color: "#c8a96e",
        metalness: 1,
        roughness: 0.15,
    }), []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        // Slight tilting of the beam
        const tilt = Math.sin(t * 1.0) * 0.12;
        if (beamRef.current) {
            beamRef.current.rotation.z = tilt;
        }

        // Counter-rotation for plates to stay vertical and sway
        if (leftPlateRef.current) {
            leftPlateRef.current.rotation.z = -tilt + Math.sin(t * 1.3) * 0.04;
        }
        if (rightPlateRef.current) {
            rightPlateRef.current.rotation.z = -tilt + Math.sin(t * 1.3 + Math.PI) * 0.04;
        }
    });

    return (
        <group position={[0, -4, 0]} scale={[1, 1, 1]}>
            {/* --- STEPPED BASE --- */}
            {/* Bottom layer */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[2.5, 2.7, 0.4, 64]} />
                <meshStandardMaterial {...goldMaterialProps} />
            </mesh>
            {/* Middle layer */}
            <mesh position={[0, 0.4, 0]}>
                <cylinderGeometry args={[2.0, 2.2, 0.3, 64]} />
                <meshStandardMaterial {...goldMaterialProps} />
            </mesh>
            {/* Top layer of base */}
            <mesh position={[0, 0.7, 0]}>
                <cylinderGeometry args={[1.2, 1.8, 0.5, 64]} />
                <meshStandardMaterial {...goldMaterialProps} />
            </mesh>

            {/* --- DECORATIVE PILLAR --- */}
            {/* Lower Taper */}
            <mesh position={[0, 2.5, 0]}>
                <cylinderGeometry args={[0.5, 0.9, 3, 32]} />
                <meshStandardMaterial {...goldMaterialProps} />
            </mesh>
            {/* Middle Ring */}
            <mesh position={[0, 4, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.6, 0.15, 16, 64]} />
                <meshStandardMaterial {...goldMaterialProps} />
            </mesh>
            {/* Upper Shaft */}
            <mesh position={[0, 6.5, 0]}>
                <cylinderGeometry args={[0.4, 0.5, 5, 32]} />
                <meshStandardMaterial {...goldMaterialProps} />
            </mesh>
            {/* Pillar Top Cap (Ornate) */}
            <mesh position={[0, 9.2, 0]}>
                <sphereGeometry args={[0.6, 32, 32]} />
                <meshStandardMaterial {...goldMaterialProps} />
            </mesh>
            <mesh position={[0, 9.8, 0]}>
                <coneGeometry args={[0.3, 0.8, 32]} />
                <meshStandardMaterial {...goldMaterialProps} />
            </mesh>

            {/* --- ROTATING BEAM ASSEMBLY --- */}
            <group ref={beamRef} position={[0, 8.5, 0]}>
                {/* Horizontal Beam (with subtle taper) */}
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.15, 0.15, 10, 32]} />
                    <meshStandardMaterial {...goldMaterialProps} />
                </mesh>

                {/* Decorative Scrollwork near center */}
                <mesh position={[1, 0.3, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 4]}>
                    <torusGeometry args={[0.5, 0.05, 16, 32, Math.PI]} />
                    <meshStandardMaterial {...goldMaterialProps} />
                </mesh>
                <mesh position={[-1, 0.3, 0]} rotation={[Math.PI / 2, 0, Math.PI / 4]}>
                    <torusGeometry args={[0.5, 0.05, 16, 32, Math.PI]} />
                    <meshStandardMaterial {...goldMaterialProps} />
                </mesh>

                {/* Left Side suspension point */}
                <group position={[-5, 0, 0]}>
                    <group ref={leftPlateRef}>
                        {/* Triple Chains */}
                        <mesh position={[0.2, -2.5, 0.2]} rotation={[0.05, 0, -0.05]}>
                            <cylinderGeometry args={[0.02, 0.02, 5, 8]} />
                            <meshStandardMaterial color="#c8a96e" metalness={1} roughness={0.3} />
                        </mesh>
                        <mesh position={[-0.2, -2.5, 0.2]} rotation={[0.05, 0, 0.05]}>
                            <cylinderGeometry args={[0.02, 0.02, 5, 8]} />
                            <meshStandardMaterial color="#c8a96e" metalness={1} roughness={0.3} />
                        </mesh>
                        <mesh position={[0, -2.5, -0.2]} rotation={[-0.05, 0, 0]}>
                            <cylinderGeometry args={[0.02, 0.02, 5, 8]} />
                            <meshStandardMaterial color="#c8a96e" metalness={1} roughness={0.3} />
                        </mesh>

                        {/* Bowl Plate */}
                        <mesh position={[0, -5, 0]}>
                            <cylinderGeometry args={[2, 0.5, 0.4, 32]} />
                            <meshStandardMaterial {...goldMaterialProps} />
                        </mesh>
                    </group>
                </group>

                {/* Right Side suspension point */}
                <group position={[5, 0, 0]}>
                    <group ref={rightPlateRef}>
                        {/* Triple Chains */}
                        <mesh position={[0.2, -2.5, 0.2]} rotation={[0.05, 0, -0.05]}>
                            <cylinderGeometry args={[0.02, 0.02, 5, 8]} />
                            <meshStandardMaterial color="#c8a96e" metalness={1} roughness={0.3} />
                        </mesh>
                        <mesh position={[-0.2, -2.5, 0.2]} rotation={[0.05, 0, 0.05]}>
                            <cylinderGeometry args={[0.02, 0.02, 5, 8]} />
                            <meshStandardMaterial color="#c8a96e" metalness={1} roughness={0.3} />
                        </mesh>
                        <mesh position={[0, -2.5, -0.2]} rotation={[-0.05, 0, 0]}>
                            <cylinderGeometry args={[0.02, 0.02, 5, 8]} />
                            <meshStandardMaterial color="#c8a96e" metalness={1} roughness={0.3} />
                        </mesh>

                        {/* Bowl Plate */}
                        <mesh position={[0, -5, 0]}>
                            <cylinderGeometry args={[2, 0.5, 0.4, 32]} />
                            <meshStandardMaterial {...goldMaterialProps} />
                        </mesh>
                    </group>
                </group>
            </group>
        </group>
    );
}
