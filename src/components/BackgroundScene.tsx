import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Stars as DreiStars } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";
import Stars from "./Stars";

const RotatingGlobe = () => {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const points: number[] = [];
    const radius = 3.5;

    // Base sphere
    for (let i = 0; i < 8000; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      points.push(x, y, z);
    }
    // Dense "continents"
    for (let i = 0; i < 1500; i++) {
      const phi = Math.random() * Math.PI;
      const theta = Math.random() * Math.PI * 2;
      if (Math.sin(phi) > 0.3 && Math.cos(theta) > 0.3) {
        const x = radius * Math.sin(phi) * Math.cos(theta) * 1.02;
        const y = radius * Math.sin(phi) * Math.sin(theta) * 1.02;
        const z = radius * Math.cos(phi) * 1.02;
        points.push(x, y, z);
      }
    }
    return new Float32Array(points);
  }, []);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y -= 0.0008;
  });

  return (
    <group>
        <Points ref={ref} positions={positions}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.02}
          sizeAttenuation
          depthWrite={false}
          opacity={0.9}
        />
      </Points>
    </group>
  );
};

const BackgroundScene = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Animated CSS Stars */}
      <Stars />
      
      {/* 3D Globe */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 7], fov: 60 }}
          style={{ width: "100%", height: "100%" }}
        >
          <fog attach="fog" args={["#050505", 5, 12]} />
          <color attach="background" args={["#050505"]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />

          {/* 3D Star field */}
          <DreiStars
            radius={60}
            depth={35}
            count={2500}
            factor={3}
            saturation={0}
            fade
            speed={0.5}
          />

          <RotatingGlobe />
        </Canvas>

        {/* Atmospheric layers */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
        
        {/* Subtle vignette */}
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_60%_at_50%_35%,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.015)_25%,transparent_55%)]" />
        
        {/* Film grain texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='1200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0 .2 .35 .2 0'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            backgroundSize: "cover",
          }}
        />
      </div>

      {/* Globe positioning */}
      <style>{`
        canvas {
          position: absolute !important;
          bottom: -25%;
          left: 50%;
          transform: translateX(-50%);
          width: 1800px;
          height: 1800px;
          opacity: 0.6;
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          canvas {
            width: 1400px;
            height: 1400px;
            opacity: 0.5;
          }
        }

        @media (max-width: 640px) {
          canvas {
            width: 1000px;
            height: 1000px;
            opacity: 0.45;
          }
        }
      `}</style>
    </div>
  );
};

export default BackgroundScene;
