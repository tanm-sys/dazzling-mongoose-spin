import React, { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/visuals/ScrollReveal";

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
const modInv = (a: number, m: number): number | null => {
  for (let x = 1; x < m; x++) if ((a * x) % m === 1) return x;
  return null;
};

const RSAPlayground: React.FC = () => {
  const [p, setP] = useState(17);
  const [q, setQ] = useState(19);
  const [step, setStep] = useState(0);

  const n = useMemo(() => p * q, [p, q]);
  const phi = useMemo(() => (p - 1) * (q - 1), [p, q]);
  const e = 3;
  const d = useMemo(() => modInv(e, phi), [phi]);

  useEffect(() => {
    const timer = setInterval(() => setStep((s) => (s + 1) % 5), 2000);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    `Choose two primes: p = ${p}, q = ${q}`,
    `Compute n = p × q = ${n}`,
    `Compute φ(n) = (p-1)(q-1) = ${phi}`,
    `Pick public exponent e = ${e}`,
    `Compute private exponent d = ${d ?? "—"}`,
  ];

  return (
    <section id="rsa-playground" className="mx-auto max-w-4xl px-6 py-20">
      <ScrollReveal>
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 animate-shimmer" />
          <CardHeader>
            <CardTitle>RSA Key Generator (Live)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-foreground/70">
              Adjust primes below and watch the algorithm compute n, φ(n), and the private key d.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-foreground/70">Prime p: {p}</label>
                <Slider
                  value={[p]}
                  min={11}
                  max={97}
                  step={2}
                  onValueChange={(v) => setP(v[0])}
                />
              </div>
              <div>
                <label className="text-sm text-foreground/70">Prime q: {q}</label>
                <Slider
                  value={[q]}
                  min={11}
                  max={97}
                  step={2}
                  onValueChange={(v) => setQ(v[0])}
                />
              </div>
            </div>

            <div className="rounded-md bg-muted p-4 font-mono text-sm">
              {steps[step]}
            </div>

            <Button
              onClick={() => setStep(0)}
              variant="outline"
              className="w-full"
            >
              Restart Animation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </ScrollReveal>
    </section>
  );
};

export default RSAPlayground;