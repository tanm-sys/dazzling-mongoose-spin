import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LockKeyhole, Handshake, Hash } from "lucide-react";

const algos = [
  {
    icon: LockKeyhole,
    title: "RSA",
    desc: "Public-key encryption built from primes, modular exponentiation, and Euler’s totient.",
    tags: ["Primes", "ModPow", "φ(n)"],
  },
  {
    icon: Handshake,
    title: "Diffie–Hellman",
    desc: "Key exchange over insecure channels, leveraging discrete logarithm hardness.",
    tags: ["Discrete Log", "Groups", "g^ab"],
  },
  {
    icon: Hash,
    title: "Hash Functions",
    desc: "One-way compression: integrity, commitments, and proof-of-work foundations.",
    tags: ["SHA-2", "SHA-3", "Collision Resistance"],
  },
];

const Algorithms: React.FC = () => {
  return (
    <section id="algorithms" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Algorithms Gallery
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-foreground/70">
          From classic number theory to modern constructions — a visual guide to how crypto works.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {algos.map((a, i) => {
          const Icon = a.icon;
          return (
            <Card
              key={a.title}
              className="relative translate-y-3 opacity-0 [animation-delay:calc(var(--i)*80ms)] animate-[fade-in-up_0.7s_ease_forwards] hover:shadow-lg"
              style={{ ["--i" as any]: i }}
            >
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
          );
        })}
      </div>
    </section>
  );
};

export default Algorithms;