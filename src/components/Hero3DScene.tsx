'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ── Central diamond ── */
function Diamond() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15;
      ref.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]} scale={1.8}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#2887CC"
        emissive="#5DC4E8"
        emissiveIntensity={0.15}
        transparent
        opacity={0.35}
        roughness={0.2}
        metalness={0.8}
        wireframe={false}
      />
    </mesh>
  );
}

/* ── Diamond wireframe outline ── */
function DiamondWireframe() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15;
      ref.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]} scale={1.85}>
      <octahedronGeometry args={[1, 0]} />
      <meshBasicMaterial
        color="#5DC4E8"
        transparent
        opacity={0.12}
        wireframe
      />
    </mesh>
  );
}

/* ── Instanced particle field ── */
function Particles({ count = 50 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
      ),
      speed: 0.1 + Math.random() * 0.3,
      scale: 0.03 + Math.random() * 0.08,
      offset: Math.random() * Math.PI * 2,
    }));
  }, [count]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();

    particles.forEach((p, i) => {
      dummy.position.set(
        p.position.x + Math.sin(t * p.speed + p.offset) * 0.5,
        p.position.y + Math.cos(t * p.speed * 0.7 + p.offset) * 0.3,
        p.position.z + Math.sin(t * p.speed * 0.5 + p.offset * 2) * 0.4,
      );
      dummy.scale.setScalar(p.scale);
      dummy.rotation.y = t * p.speed;
      dummy.rotation.x = t * p.speed * 0.5;
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#5DC4E8"
        emissive="#2887CC"
        emissiveIntensity={0.3}
        transparent
        opacity={0.4}
        roughness={0.4}
        metalness={0.6}
      />
    </instancedMesh>
  );
}

/* ── Subtle mouse-driven camera offset ── */
function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame(() => {
    camera.position.x += (mouse.current.x * 0.3 - camera.position.x) * 0.02;
    camera.position.y += (-mouse.current.y * 0.2 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ── Floating gradient orbs (large, subtle, background) ── */
function GradientOrbs() {
  const ref1 = useRef<THREE.Mesh>(null);
  const ref2 = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref1.current) {
      ref1.current.position.x = Math.sin(t * 0.08) * 2 - 3;
      ref1.current.position.y = Math.cos(t * 0.06) * 1.5 + 1;
    }
    if (ref2.current) {
      ref2.current.position.x = Math.cos(t * 0.07) * 2 + 3;
      ref2.current.position.y = Math.sin(t * 0.09) * 1.5 - 1;
    }
  });

  return (
    <>
      <mesh ref={ref1} position={[-3, 1, -4]} scale={2.5}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#2887CC" transparent opacity={0.04} />
      </mesh>
      <mesh ref={ref2} position={[3, -1, -5]} scale={2}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#5DC4E8" transparent opacity={0.03} />
      </mesh>
    </>
  );
}

/* ── Main exported scene ── */
export function Hero3DScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#5DC4E8" />
        <pointLight position={[-5, -3, 3]} intensity={0.3} color="#2887CC" />

        <Diamond />
        <DiamondWireframe />
        <Particles count={isMobile ? 25 : 50} />
        <GradientOrbs />
        {!isMobile && <CameraRig />}
      </Canvas>
    </div>
  );
}
