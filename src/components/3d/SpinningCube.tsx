import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const SpinningCube = () => {
  const meshRef = React.useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color="#00a651"
        metalness={0.5}
        roughness={0.2}
        emissive="#004422"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

export default SpinningCube;