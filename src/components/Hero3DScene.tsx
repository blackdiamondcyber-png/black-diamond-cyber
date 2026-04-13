'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/*
 * Subtle dark abstract form — inspired by LeftClick's metallic ribbon.
 * Near-invisible, adds depth without competing with text.
 * Dark grays and very low opacity — no bright cyan, no particle confetti.
 */

function AbstractForm() {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.TorusKnotGeometry(1.8, 0.4, 128, 16, 2, 3);
    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.03;
    meshRef.current.rotation.y = t * 0.05;
    meshRef.current.rotation.z = t * 0.02;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, 0.5, -2]} scale={1.2}>
      <meshStandardMaterial
        color="#1a1a1e"
        emissive="#0a0a0c"
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.95}
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

/* Secondary subtle ring */
function SubtleRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = Math.PI * 0.4 + t * 0.015;
    ref.current.rotation.z = t * 0.02;
  });

  return (
    <mesh ref={ref} position={[0, 0, -3]} scale={2.5}>
      <torusGeometry args={[1, 0.02, 16, 64]} />
      <meshStandardMaterial
        color="#222226"
        emissive="#111113"
        emissiveIntensity={0.3}
        roughness={0.4}
        metalness={0.9}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

export function Hero3DScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Skip 3D entirely on mobile for performance
  if (isMobile) return null;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.4,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.15} />
        <directionalLight
          position={[3, 5, 4]}
          intensity={0.3}
          color="#888"
        />
        <pointLight
          position={[-4, -2, 3]}
          intensity={0.15}
          color="#555"
        />
        <AbstractForm />
        <SubtleRing />
      </Canvas>
    </div>
  );
}
