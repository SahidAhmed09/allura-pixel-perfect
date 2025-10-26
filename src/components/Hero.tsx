"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

/* ---------------- 3D Globe ---------------- */
const RotatingGlobe = () => {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const points:number[] = [];
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
    // Dense “continents”
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
    if (ref.current) ref.current.rotation.y -= 0.0012; // left -> right
  });

  return (
    <group>
      <Points ref={ref} positions={positions}>
        <PointMaterial
          transparent
          color="#cfe9ff"
          size={0.02}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

/* ---------------- Hero ---------------- */
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0c0e] text-white"
    >
      {/* 3D Scene (globe + stars + fog) */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 7], fov: 60 }} style={{ width: "100%", height: "100%" }}>
          <fog attach="fog" args={["#0b0c0e", 5, 12]} />
          <color attach="background" args={["#0b0c0e"]} />
          <ambientLight intensity={0.35} />
          <pointLight position={[5, 5, 5]} intensity={1.2} color="#9fd3ff" />

          {/* Star field */}
          <Stars radius={60} depth={35} count={2500} factor={3} saturation={0} fade speed={0.3} />

          <RotatingGlobe />
        </Canvas>

        {/* Cinematic layers */}
        {/* Big vignette */}
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_60%_at_50%_35%,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_25%,transparent_55%)]"></div>
        {/* Top glow “badge halo” */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-20 h-28 w-28 rounded-full blur-2xl opacity-60" style={{background: "radial-gradient(closest-side, rgba(160,190,255,0.35), rgba(160,190,255,0.1), transparent 70%)"}} />
        {/* Low fog sweep */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />
        {/* Film grain / dust */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-soft-light"
             style={{
               backgroundImage:
                 "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='1200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0 0 0 .2 .35 .2 0'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
               backgroundSize: "cover",
             }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-32 max-w-6xl">
        <div className="max-w-4xl mx-auto text-center">
          {/* Slim pill nav badge like screenshot */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-8 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-white/70">
              New Gen AI Automation Partner
            </span>
          </div>

          {/* Main Heading (modern sans + italic serif) */}
          <h1 className="mb-6 leading-[1.05] tracking-tight">
            <span className="block text-[40px] md:text-[64px] lg:text-[86px] font-extrabold text-white/90">
              Automate Smarter, Grow
            </span>
            <span className="block text-[40px] md:text-[64px] lg:text-[86px] font-extrabold text-white/90">
              Faster.
              <span className="ml-3 font-serif italic font-normal text-white/70">
                With AI
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-[15px] md:text-[17px] text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            AI automation helps modern businesses save time, reduce errors, and
            improve productivity by handling repetitive tasks with ease.
          </p>

          {/* CTA */}
          <div className="flex items-center justify-center gap-3 mb-16">
            <Button variant="hero" size="lg" className="rounded-full px-6 py-5 text-[15px]">
              Book A Free Call
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-0.5" size={16} />
            </Button>
            <Button variant="glass" size="lg" className="rounded-full px-5 py-5 text-[15px]">
              <Play className="mr-2" size={14} />
              Watch Demo
            </Button>
          </div>

          {/* Tiny social strip (optional like ref) */}
          <div className="flex items-center justify-center gap-6 text-white/50 text-sm">
            <span className="opacity-70">✕</span>
            <span className="opacity-70">@</span>
            <span className="opacity-70">f</span>
          </div>
        </div>
      </div>

      {/* Canvas placement: huge, half-submerged behind text */}
      <style>{`
        canvas {
          position: absolute !important;
          bottom: -25%;
          left: 50%;
          transform: translateX(-50%);
          width: 1800px;
          height: 1800px;
          opacity: 0.5;
          pointer-events: none;
        }

        /* Font fallbacks: let serif look elegant even without external font config */
        .font-serif {
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        }
      `}</style>
    </section>
  );
};

export default Hero;
