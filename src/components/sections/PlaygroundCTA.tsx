import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PlaygroundCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-fuchsia-500/10 blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <h3 className="text-2xl font-semibold md:text-3xl">
          Ready to interact with cryptography?
        </h3>
        <p className="max-w-2xl text-foreground/70">
          Dive into prime sieves, modular arithmetic, and live RSA/DH visualizers. Learn by playing.
        </p>
        <div className="mt-4">
          <Button asChild size="lg" className="gap-2">
            <a href="#math-preview">
              Open Playground
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlaygroundCTA;