"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";
import ExperienceList from "@/components/ExperienceList";
import CustomCursor from "@/components/ui/CustomCursor";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  // Initialize Smooth Scrolling (Lenis)
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-background text-foreground">
      <CustomCursor />
      
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      <Hero />
      <ProjectList />
      <ExperienceList />
      <ContactSection /> 

      {/* Minimal Footer */}
      <footer className="py-8 text-center text-zinc-800 font-mono text-[10px] uppercase tracking-widest mix-blend-difference">
        Gioele Spata © 2025 — All Rights Reserved
      </footer>
    </main>
  );
}