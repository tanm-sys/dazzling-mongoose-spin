import React from "react";
import { Shield, Sigma, Lock } from "lucide-react";
import AnimatedBackground from "@/components/visuals/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { ParallaxLayer } from "@/components/visuals/Parallax";
import ScrollReveal from "@/components/visuals/ScrollReveal";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <AnimatedBackground className="pointer-events-none absolute inset-0" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center">
        <ScrollReveal delay={0}>
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/80 backdrop-blur">
            <Shield className="h-4 w-4 text-sky-400" />
            Cryptography • Mathematics • Security
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="bg-gradient-to-br from-sky-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-6xl lg:text-7xl">
            The Mathematics of Trust
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-foreground/70 md:text-lg">
            Explore prime numbers, modular arithmetic, and the algorithms that
            secure our digital world — brought to life with immersive, smooth
            visuals.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden rounded-full px-6 py-3 text-base font-medium shadow-lg transition-transform hover:scale-105"
            >
              <a href="#math-preview">
                <span className="absolute inset-0 animate-shimmer" />
                <Sigma className="mr-2 h-5 w-5" />
                Explore the Math
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="group rounded-full px-6 py-3 text-base font-medium transition-transform hover:scale-105"
            >
              <a href="#algorithms">
                <Lock className="mr-2 h-5 w-5" />
                Algorithms Gallery
              </a>
            </Button>
          </div>
        </ScrollReveal>

        <div className="pointer-events-none absolute -right-24 top-16 hidden aspect-square w-[28rem] rounded-full bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-fuchsia-500/10 blur-3xl md:block" />
      </div>
    </section>
  );
};

export default Hero;