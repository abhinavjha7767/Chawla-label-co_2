import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Text, Environment, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Tag() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Main tag body */}
        <RoundedBox args={[2.4, 3.2, 0.08]} radius={0.1} smoothness={4}>
          <meshStandardMaterial
            color="#1a1a1a"
            roughness={0.3}
            metalness={0.1}
          />
        </RoundedBox>

        {/* Gold border accent */}
        <RoundedBox args={[2.5, 3.3, 0.02]} radius={0.12} smoothness={4} position={[0, 0, -0.04]}>
          <meshStandardMaterial
            color="#d4a843"
            roughness={0.2}
            metalness={0.8}
          />
        </RoundedBox>

        {/* Hole for string */}
        <mesh position={[0, 1.35, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.15, 32]} />
          <meshStandardMaterial color="#d4a843" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* String loop */}
        <mesh position={[0, 1.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.25, 0.03, 16, 32]} />
          <meshStandardMaterial color="#8b7355" roughness={0.8} />
        </mesh>

        {/* Brand name */}
        <Text
          position={[0, 0.5, 0.05]}
          fontSize={0.45}
          color="#d4a843"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter.woff"
        >
          AUREX
        </Text>

        {/* Tagline */}
        <Text
          position={[0, 0, 0.05]}
          fontSize={0.12}
          color="#888888"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.15}
        >
          PREMIUM LABELS
        </Text>

        {/* Decorative line */}
        <mesh position={[0, -0.3, 0.045]}>
          <boxGeometry args={[1.2, 0.01, 0.01]} />
          <meshStandardMaterial color="#d4a843" metalness={0.8} />
        </mesh>

        {/* Size indicator */}
        <Text
          position={[0, -0.6, 0.05]}
          fontSize={0.18}
          color="#666666"
          anchorX="center"
          anchorY="middle"
        >
          SIZE M
        </Text>

        {/* Care symbols placeholder */}
        <group position={[0, -1, 0.05]}>
          {[-0.4, -0.13, 0.13, 0.4].map((x, i) => (
            <mesh key={i} position={[x, 0, 0]}>
              <circleGeometry args={[0.1, 32]} />
              <meshStandardMaterial color="#444444" />
            </mesh>
          ))}
        </group>
      </group>
    </Float>
  );
}

export default function ClothingTag() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#fff8e7" />
        <directionalLight position={[-5, -5, 5]} intensity={0.3} color="#d4a843" />
        <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.3} penumbra={1} />
        <Tag />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
