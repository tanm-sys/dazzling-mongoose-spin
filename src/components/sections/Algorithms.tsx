import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LockKeyhole, Handshake, Hash } from "lucide-react";
import TiltCard from "@/components/visuals/TiltCard";
import ScrollReveal from "@/components/visuals/ScrollReveal";

const algos = [
  { icon: LockKeyhole, title: "RSA", desc: "Public-key encryption built from primes, modular exponentiation, and Euler’s totient.", tags: ["Primes", "ModPow", "φ(n)"] },
  { icon: Handshake, title: "Diffie–Hellman", desc: "Key exchange over insecure channels, leveraging discrete logarithm hardness.", tags: ["Discrete Log", "Groups", "g^ab"] },
  { icon: Hash, title: "Hash Functions", desc: "One-way compression: integrity, commitments, and proof-of-work foundations.", tags: ["SHA-2", "SHA-3", "Collision Resistance"] },
];

const Algorithms: React.FC = () => {
  return (
    <section id="algorithms" className="relative mx-auto max-w-6xl px-6 py-20">
      <ScrollReveal>
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Algorithms Gallery
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-foreground/70">
            From classic number theory to modern constructions — a visual guide to how crypto works.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {algos.map((a, i) => {
          const Icon = a.icon;
          return (
            <ScrollReveal key={a.title} delay={i * 100}>
              <TiltCard className="relative">
                <Card className="relative overflow-hidden elevate smooth-hover">
                  <div className="absolute inset-0 animate-shimmer" />
                  <CardHeader>
                    <div className="mb-2 inline-flex rounded-md bg-primary/10 p-2 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{a.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-foreground/70">{a.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {a.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-foreground/70 backdrop-blur"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

export default Algorithms;