"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CarScene } from "./3d/CarScene";
import { motion } from "motion/react";

interface Hero3DProps {
  modelPath?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export function Hero3D({
  modelPath = "/models/car.glb",
  title = "The Future of Driving",
  subtitle = "Experience automotive excellence reimagined",
  ctaText = "Explore Now",
  onCtaClick,
}: Hero3DProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 500);
  const scale = Math.max(0.8, 1 - scrollY / 2000);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black" />

      {/* Ambient light effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* 3D Canvas */}
      <div
        className="absolute inset-0 z-10"
        style={{
          opacity,
          transform: `scale(${scale})`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <Canvas
          camera={{
            position: [4, 2, 6],
            fov: 50,
            near: 0.1,
            far: 1000,
          }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <CarScene modelPath={modelPath} onLoad={() => setIsLoaded(true)} />
          </Suspense>
        </Canvas>
      </div>

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin" />
            <p className="text-white/60 text-sm uppercase tracking-wider">
              Loading Experience
            </p>
          </div>
        </div>
      )}

      {/* Content overlay */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-end pb-20 px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center max-w-4xl"
        >
          <motion.h1
            className="text-6xl md:text-8xl text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-white/80 mb-10 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {subtitle}
          </motion.p>

          <motion.button
            onClick={onCtaClick}
            className="pointer-events-auto bg-white text-black px-10 py-4 text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {ctaText}
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
      >
        <span className="text-white/60 text-xs uppercase tracking-widest">
          Scroll to explore
        </span>
        <motion.div
          className="w-px h-12 bg-white/40"
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
}
