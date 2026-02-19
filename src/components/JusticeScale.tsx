'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function JusticeScaleModel() {
    const beamRef = useRef<THREE.Group>(null);
    const leftPlateRef = useRef<THREE.Group>(null);
    const rightPlateRef = useRef<THREE.Group>(null);

    // Constants for materials
    const goldMaterialProps = {
        color: "#c8a96e",
        metalness: 1,
        roughness: 0.2,
    };

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        // Slight tilting of the beam
        const tilt = Math.sin(t * 1.2) * 0.15;
        if (beamRef.current) {
            beamRef.current.rotation.z = tilt;
        }

        // Counter-rotation for plates to stay vertical and sway
        if (leftPlateRef.current) {
            leftPlateRef.current.rotation.z = -tilt + Math.sin(t * 1.5) * 0.05;
        }
        if (rightPlateRef.current) {
            rightPlateRef.current.rotation.z = -tilt + Math.sin(t * 1.5 + Math.PI) * 0.05;
        }
    });

    return (
        <group position={[0, -2, 0]} scale={[1.2, 1.2, 1.2]}>
            {/* Base */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[2, 2.2, 0.4, 32]} />
                <meshStandardMaterial {...goldMaterialProps} />
            </mesh>

            {/* Main Pillar */}
            <mesh position={[0, 4, 0]}>
                <cylinderGeometry args={[0.2, 0.4, 8, 16]} />
                <meshStandardMaterial {...goldMaterialProps} />
            </mesh>

            {/* Pillar Top Ornament */}
            <mesh position={[0, 8.2, 0]}>
                <sphereGeometry args={[0.4, 16, 16]} />
                <meshStandardMaterial {...goldMaterialProps} />
            </mesh>

            {/* Rotating Beam Assembly */}
            <group ref={beamRef} position={[0, 7.5, 0]}>
                {/* Horizontal Beam */}
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.1, 0.1, 8, 16]} />
                    <meshStandardMaterial {...goldMaterialProps} />
                </mesh>

                {/* Left Side suspension point */}
                <group position={[-4, -0.1, 0]}>
                    <group ref={leftPlateRef}>
                        {/* Thread/Wire */}
                        <mesh position={[0, -2, 0]}>
                            <cylinderGeometry args={[0.02, 0.02, 4, 8]} />
                            <meshStandardMaterial color="#888" metalness={0.5} roughness={0.5} />
                        </mesh>
                        {/* Plate */}
                        <mesh position={[0, -4, 0]} rotation={[Math.PI, 0, 0]}>
                            <coneGeometry args={[1.5, 0.5, 32, 1, true]} />
                            <meshStandardMaterial {...goldMaterialProps} side={THREE.DoubleSide} />
                        </mesh>
                    </group>
                </group>

                {/* Right Side suspension point */}
                <group position={[4, -0.1, 0]}>
                    <group ref={rightPlateRef}>
                        {/* Thread/Wire */}
                        <mesh position={[0, -2, 0]}>
                            <cylinderGeometry args={[0.02, 0.02, 4, 8]} />
                            <meshStandardMaterial color="#888" metalness={0.5} roughness={0.5} />
                        </mesh>
                        {/* Plate */}
                        <mesh position={[0, -4, 0]} rotation={[Math.PI, 0, 0]}>
                            <coneGeometry args={[1.5, 0.5, 32, 1, true]} />
                            <meshStandardMaterial {...goldMaterialProps} side={THREE.DoubleSide} />
                        </mesh>
                    </group>
                </group>
            </group>
        </group>
    );
}
