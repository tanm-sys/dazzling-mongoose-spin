import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KeyRound, ShieldCheck, Share2 } from "lucide-react";

const items = [
  {
    icon: KeyRound,
    title: "Confidentiality",
    desc: "Keep messages hidden using ciphers and keys.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Detect tampering with hashes and message authentication.",
  },
  {
    icon: Share2,
    title: "Authenticity",
    desc: "Verify identities with signatures and public-key crypto.",
  },
];

const Overview: React.FC = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          What is Cryptography?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-foreground/70">
          Cryptography blends mathematical hardness with clever protocols to
          enable private, authentic communication at global scale.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <Card
              key={it.title}
              className="group relative translate-y-2 opacity-0 [animation-delay:calc(var(--i)*60ms)] animate-[fade-in-up_0.7s_ease_forwards]"
              style={{ ["--i" as any]: i }}
            >
              <CardHeader>
                <div className="mb-2 inline-flex rounded-md bg-primary/10 p-2 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle>{it.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/70">{it.desc}</CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Overview;