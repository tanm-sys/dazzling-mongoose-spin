import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import ScrollReveal from "@/components/visuals/ScrollReveal";

function generateWheel(n: number) {
  const points: { x: number; y: number; v: number }[] = [];
  const r = 120;
  for (let i = 0; i < n; i++) {
    const ang = (i / n) * Math.PI * 2 - Math.PI / 2;
    points.push({ x: r * Math.cos(ang), y: r * Math.sin(ang), v: i });
  }
  return points;
}

const isPrime = (x: number) => {
  if (x < 2) return false;
  for (let d = 2; d * d <= x; d++) if (x % d === 0) return false;
  return true;
};

const MathPreview: React.FC = () => {
  const [mod, setMod] = useState<number>(19);
  const [k, setK] = useState<number>(2);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const pts = useMemo(() => generateWheel(mod), [mod]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const DPR = devicePixelRatio || 1;
    const size = 320;

    let w = (canvas.width = size * DPR);
    let h = (canvas.height = size * DPR);
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(DPR, DPR);

    let t = 0;
    let raf = 0;

    const draw = () => {
      t += 0.015;
      ctx.clearRect(0, 0, size, size);
      ctx.save();
      ctx.translate(size / 2, size / 2);

      // ring
      ctx.globalAlpha = 0.08;
      ctx.beginPath();
      ctx.arc(0, 0, 122, 0, Math.PI * 2);
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 12;
      ctx.stroke();
      ctx.globalAlpha = 1;

      // dots
      pts.forEach((p, i) => {
        ctx.beginPath();
        const prime = isPrime(p.v);
        ctx.fillStyle = prime ? "#a78bfa" : "#60a5fa";
        const r = prime ? 4 : 3;
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();

        if (mod <= 24) {
          ctx.fillStyle = "rgba(255,255,255,0.7)";
          ctx.font = "10px ui-sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(String(p.v), p.x, p.y - 12);
        }
      });

      // multiplication chords
      for (let i = 0; i < mod; i++) {
        const a = pts[i];
        const j = (i * k) % mod;
        const b = pts[j];
        const hue = 200 + (i * 7) % 50;
        ctx.strokeStyle = `hsla(${hue}, 80%, 70%, 0.35)`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      ctx.restore();
      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [pts, mod, k]);

  return (
    <section id="math-preview" className="relative bg-gradient-to-b from-background to-background/40 py-20">
      <ScrollReveal>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
          <Card className="order-2 md:order-1">
            <CardHeader>
              <CardTitle>Modular Multiplication Wheel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-foreground/70">
                Visualize residues on a circle and connect i → k·i mod n. Patterns
                reveal structure — a peek into number theory behind cryptography.
              </p>

              <div className="space-y-3">
                <div className="text-sm text-foreground/70">Modulus n: {mod}</div>
                <Slider
                  value={[mod]}
                  min={6}
                  max={60}
                  step={1}
                  onValueChange={(v) => setMod(v[0])}
<dyad-write path="src/components/sections/MathPreview.tsx" description="Complete MathPreview with ScrollReveal and shimmer border.">
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import ScrollReveal from "@/components/visuals/ScrollReveal";

function generateWheel(n: number) {
  const points: { x: number; y: number; v: number }[] = [];
  const r = 120;
  for (let i = 0; i < n; i++) {
    const ang = (i / n) * Math.PI * 2 - Math.PI / 2;
    points.push({ x: r * Math.cos(ang), y: r * Math.sin(ang), v: i });
  }
  return points;
}

const isPrime = (x: number) => {
  if (x < 2) return false;
  for (let d = 2; d * d <= x; d++) if (x % d === 0) return false;
  return true;
};

const MathPreview: React.FC = () => {
  const [mod, setMod] = useState<number>(19);
  const [k, setK] = useState<number>(2);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const pts = useMemo(() => generateWheel(mod), [mod]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const DPR = devicePixelRatio || 1;
    const size = 320;

    let w = (canvas.width = size * DPR);
    let h = (canvas.height = size * DPR);
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(DPR, DPR);

    let t = 0;
    let raf = 0;

    const draw = () => {
      t += 0.015;
      ctx.clearRect(0, 0, size, size);
      ctx.save();
      ctx.translate(size / 2, size / 2);

      // ring
      ctx.globalAlpha = 0.08;
      ctx.beginPath();
      ctx.arc(0, 0, 122, 0, Math.PI * 2);
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 12;
      ctx.stroke();
      ctx.globalAlpha = 1;

      // dots
      pts.forEach((p, i) => {
        ctx.beginPath();
        const prime = isPrime(p.v);
        ctx.fillStyle = prime ? "#a78bfa" : "#60a5fa";
        const r = prime ? 4 : 3;
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();

        if (mod <= 24) {
          ctx.fillStyle = "rgba(255,255,255,0.7)";
          ctx.font = "10px ui-sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(String(p.v), p.x, p.y - 12);
        }
      });

      // multiplication chords
      for (let i = 0; i < mod; i++) {
        const a = pts[i];
        const j = (i * k) % mod;
        const b = pts[j];
        const hue = 200 + (i * 7) % 50;
        ctx.strokeStyle = `hsla(${hue}, 80%, 70%, 0.35)`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      ctx.restore();
      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [pts, mod, k]);

  return (
    <section id="math-preview" className="relative bg-gradient-to-b from-background to-background/40 py-20">
      <ScrollReveal>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
          <Card className="order-2 md:order-1">
            <CardHeader>
              <CardTitle>Modular Multiplication Wheel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-foreground/70">
                Visualize residues on a circle and connect i → k·i mod n. Patterns
                reveal structure — a peek into number theory behind cryptography.
              </p>

              <div className="space-y-3">
                <div className="text-sm text-foreground/70">Modulus n: {mod}</div>
                <Slider
                  value={[mod]}
                  min={6}
                  max={60}
                  step={1}
                  onValueChange={(v) => setMod(v[0])}
                />
              </div>

              <div className="space-y-3">
                <div className="text-sm text-foreground/70">Multiplier k: {k}</div>
                <Slider
                  value={[k]}
                  min={2}
                  max={12}
                  step={1}
                  onValueChange={(v) => setK(v[0])}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="order-1 flex items-center justify-center md:order-2">
            <CardContent className="flex w-full items-center justify-center p-6">
              <canvas
                ref={canvasRef}
                className="rounded-lg border border-white/10 shadow-inner"
              />
            </CardContent>
          </Card>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default MathPreview;