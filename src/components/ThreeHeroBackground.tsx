'use client';

import { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 600;
const COLORS = {
  blue: new THREE.Color('#2887CC'),
  cyan: new THREE.Color('#5DC4E8'),
};

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const { positions, colors, speeds } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const col = new Float32Array(PARTICLE_COUNT * 3);
    const spd = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 20;
      pos[i3 + 1] = (Math.random() - 0.5) * 12;
      pos[i3 + 2] = (Math.random() - 0.5) * 8 - 2;

      const color = Math.random() > 0.4 ? COLORS.blue : COLORS.cyan;
      col[i3] = color.r;
      col[i3 + 1] = color.g;
      col[i3 + 2] = color.b;

      spd[i] = 0.1 + Math.random() * 0.3;
    }

    return { positions: pos, colors: col, speeds: spd };
  }, []);

  const handlePointerMove = useCallback(
    (e: { clientX: number; clientY: number }) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    },
    []
  );

  // Attach mouse listener
  useFrame(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handlePointerMove, { passive: true });
    }
  });

  // Remove the per-frame listener addition — use effect instead
  useMemo(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handlePointerMove, { passive: true });
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handlePointerMove);
      }
    };
  }, [handlePointerMove]);

  useFrame((state) => {
    if (!ref.current) return;
    const geo = ref.current.geometry;
    const posAttr = geo.attributes.position as THREE.BufferAttribute;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const speed = speeds[i];

      // Gentle floating motion
      posAttr.array[i3 + 1] += Math.sin(time * speed + i) * 0.001;
      posAttr.array[i3] += Math.cos(time * speed * 0.5 + i * 0.5) * 0.0005;

      // Subtle mouse influence
      posAttr.array[i3] += mouseRef.current.x * 0.0003 * speed;
      posAttr.array[i3 + 1] += mouseRef.current.y * 0.0003 * speed;

      // Wrap around bounds
      if (posAttr.array[i3] > 10) posAttr.array[i3] = -10;
      if (posAttr.array[i3] < -10) posAttr.array[i3] = 10;
      if (posAttr.array[i3 + 1] > 6) posAttr.array[i3 + 1] = -6;
      if (posAttr.array[i3 + 1] < -6) posAttr.array[i3 + 1] = 6;
    }

    posAttr.needsUpdate = true;

    // Slow rotation of the entire particle system
    ref.current.rotation.y = time * 0.015;
    ref.current.rotation.x = Math.sin(time * 0.01) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={2.5}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function WireframeDiamond() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.08;
    ref.current.rotation.x = Math.sin(t * 0.05) * 0.2;
  });

  return (
    <mesh ref={ref} position={[0, 0, -2]}>
      <icosahedronGeometry args={[1.8, 1]} />
      <meshBasicMaterial
        color="#2887CC"
        wireframe
        transparent
        opacity={0.06}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <Particles />
      <WireframeDiamond />
    </>
  );
}

export function ThreeHeroBackground() {
  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, #06080C 0%, #0A1828 20%, #0C1420 40%, #12151E 60%, #0A1018 80%, #06080C 100%)',
        }}
      />
    );
  }

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{
          powerPreference: 'low-power',
          antialias: false,
          alpha: true,
        }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
