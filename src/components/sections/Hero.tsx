import React from "react";
import { Shield, Sigma, Lock } from "lucide-react";
import AnimatedBackground from "@/components/visuals/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { ParallaxLayer } from "@/components/visuals/Parallax";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <AnimatedBackground className="pointer-events-none absolute inset-0" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center">
        <ParallaxLayer strength={-30} className="w-full">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/80 backdrop-blur">
            <Shield className="h-4 w-4 text-sky-400" />
            Cryptography • Mathematics • Security
          </div>
        </ParallaxLayer>

        <ParallaxLayer strength={-60} className="w-full">
          <h1 className="bg-gradient-to-br from-sky-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-6xl lg:text-7xl">
            The Mathematics of Trust
          </h1>
        </ParallaxLayer>

        <ParallaxLayer strength={-40} className="w-full">
          <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-foreground/70 md:text-lg">
            Explore prime numbers, modular arithmetic, and the algorithms that
            secure our digital world — brought to life with immersive, smooth
            visuals.
          </p>
        </ParallaxLayer>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="gap-2">
            <a href="#math-preview">
              <Sigma className="h-5 w-5" />
              Explore the Math
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <a href="#algorithms">
              <Lock className="h-5 w-5" />
              Algorithms Gallery
            </a>
          </Button>
        </div>

        <div className="pointer-events-none absolute -right-24 top-16 hidden aspect-square w-[28rem] rounded-full bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-fuchsia-500/10 blur-3xl md:block" />
      </div>
    </section>
  );
};

export default Hero;