import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import ScrollReveal from "@/components/visuals/ScrollReveal";

const PrimeSievePlayground: React.FC = () => {
  const [limit, setLimit] = useState(100);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const DPR = devicePixelRatio || 1;
    const size = 320;
    canvas.width = size * DPR;
    canvas.height = size * DPR;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(DPR, DPR);

    const cols = Math.ceil(Math.sqrt(limit));
    const cell = size / cols;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      for (let n = 2; n <= limit; n++) {
        const x = (n - 1) % cols;
        const y = Math.floor((n - 1) / cols);
        const isPrime = (() => {
          for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
          return n > 1;
        })();
        ctx.fillStyle = isPrime ? "#a78bfa" : "#334155";
        ctx.beginPath();
        ctx.roundRect(x * cell + 2, y * cell + 2, cell - 4, cell - 4, 4);
        ctx.fill();
      }
    };
    draw();
  }, [limit]);

  return (
    <section id="prime-sieve" className="mx-auto max-w-4xl px-6 py-20">
      <ScrollReveal>
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 animate-shimmer" />
          <CardHeader>
            <CardTitle>Prime Sieve Visualizer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-foreground/70">
              Drag the slider to see primes light up in real time.
            </p>
            <div className="text-sm text-foreground/70">Limit: {limit}</div>
            <Slider
              value={[limit]}
              min={10}
              max={400}
              step={10}
              onValueChange={(v) => setLimit(v[0])}
            />
            <canvas ref={canvasRef} className="rounded-lg border border-white/10 shadow-inner" />
          </CardContent>
        </Card>
      </ScrollReveal>
    </section>
  );
};

export default PrimeSievePlayground;