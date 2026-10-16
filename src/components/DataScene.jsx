import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line, OrbitControls } from '@react-three/drei';
import { useMemo, useRef } from 'react';

function ConnectedNodes() {
  const points = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 20; i += 1) {
      const theta = (i / 20) * Math.PI * 2;
      const radius = 1.6 + (i % 4) * 0.25;
      arr.push({
        position: [Math.cos(theta) * radius, Math.sin(theta) * radius * 0.8, (i % 2 === 0 ? 1 : -1) * 0.7],
        color: i % 2 === 0 ? '#00e5ff' : '#8b5cf6',
      });
    }
    return arr;
  }, []);

  const lines = useMemo(
    () =>
      points.map((point, index) => {
        const next = points[(index + 1) % points.length];
        return [point.position, next.position];
      }),
    [points],
  );

  return (
    <group>
      {points.map((point, index) => (
        <Float key={index} speed={2 + index * 0.14} rotationIntensity={0.9} floatIntensity={0.7}>
          <mesh position={point.position}>
            <sphereGeometry args={[0.08, 20, 20]} />
            <meshStandardMaterial color={point.color} emissive={point.color} emissiveIntensity={0.8} />
          </mesh>
        </Float>
      ))}

      {lines.map(([start, end], index) => (
        <Line key={index} points={[start, end]} color={index % 2 === 0 ? '#00e5ff' : '#8b5cf6'} lineWidth={0.7} transparent opacity={0.7} />
      ))}
    </group>
  );
}

function DataCore() {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.elapsedTime * 0.4;
    groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.8) * 0.35;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial color="#171b38" emissive="#00e5ff" emissiveIntensity={0.45} wireframe opacity={0.8} transparent />
      </mesh>
      <ConnectedNodes />
    </group>
  );
}

export default function DataScene() {
  return (
    <div className="hero-scene" aria-label="Interactive 3D data visualization">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 2, 2]} intensity={1.8} color="#00e5ff" />
        <directionalLight position={[-3, -2, 2]} intensity={1.2} color="#8b5cf6" />
        <pointLight position={[0, 0, 4]} intensity={20} color="#ffb547" />
        <DataCore />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}
