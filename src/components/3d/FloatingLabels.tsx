import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Float, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface LabelProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  color?: string;
  speed?: number;
}

function Label({ position, rotation = [0, 0, 0], scale = 1, color = "#1a1a1a", speed = 1 }: LabelProps) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2 * speed) * 0.1 + rotation[1];
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <RoundedBox args={[1.5, 2, 0.05]} radius={0.08} smoothness={4}>
          <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
        </RoundedBox>
        <RoundedBox args={[1.4, 1.9, 0.02]} radius={0.06} smoothness={4} position={[0, 0, 0.03]}>
          <meshStandardMaterial color="#d4a843" roughness={0.2} metalness={0.7} transparent opacity={0.3} />
        </RoundedBox>
      </group>
    </Float>
  );
}

function Sticker({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh position={position} scale={scale}>
        <circleGeometry args={[0.8, 64]} />
        <meshStandardMaterial 
          color="#d4a843" 
          roughness={0.3} 
          metalness={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingLabels() {
  return (
    <div className="w-full h-full min-h-[300px]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#fff8e7" />
        <pointLight position={[-5, 5, 5]} intensity={0.4} color="#d4a843" />
        
        <Label position={[-2.5, 0.5, 0]} rotation={[0.1, 0.3, 0.05]} speed={0.8} />
        <Label position={[2.5, -0.3, -1]} rotation={[-0.1, -0.2, -0.05]} scale={0.8} color="#2a2a2a" speed={1.2} />
        <Label position={[0, 1, -2]} rotation={[0, 0.1, 0]} scale={0.6} color="#1f1f1f" speed={0.6} />
        <Sticker position={[3.5, 1.5, 0.5]} scale={0.5} />
        <Sticker position={[-3, -1.5, 0]} scale={0.4} />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
