import React, { useEffect, useRef } from "react";

type Props = {
  className?: string;
  density?: number; // particles per 10,000px^2
  speed?: number; // base speed
  color?: string; // hsl/rgba color
  blur?: number; // css blur in px
  opacity?: number; // particle opacity
};

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

const AnimatedBackground: React.FC<Props> = ({
  className,
  density = 0.12,
  speed = 0.25,
  color = "rgba(99,102,241,0.8)", // indigo-500/80
  blur = 0.8,
  opacity = 0.8,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<
    { x: number; y: number; vx: number; vy: number; r: number }[]
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = canvas.offsetWidth * devicePixelRatio);
    let h = (canvas.height = canvas.offsetHeight * devicePixelRatio);
    ctx.scale(devicePixelRatio, devicePixelRatio);

    const makeParticles = () => {
      particlesRef.current = [];
      const area = (canvas.offsetWidth * canvas.offsetHeight) / 10000;
      const n = Math.max(18, Math.floor(area * density));
      for (let i = 0; i < n; i++) {
        particlesRef.current.push({
          x: rand(0, canvas.offsetWidth),
          y: rand(0, canvas.offsetHeight),
          vx: rand(-speed, speed),
          vy: rand(-speed, speed),
          r: rand(0.6, 2.4),
        });
      }
    };

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(devicePixelRatio, devicePixelRatio);
      makeParticles();
    };

    makeParticles();

    let t = 0;
    const loop = () => {
      t += 0.006;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // soft gradient glow
      const grd = ctx.createRadialGradient(
        canvas.offsetWidth * 0.7,
        canvas.offsetHeight * 0.3,
        40,
        canvas.offsetWidth * 0.5,
        canvas.offsetHeight * 0.6,
        Math.max(canvas.offsetWidth, canvas.offsetHeight)
      );
      grd.addColorStop(0, "rgba(14,165,233,0.10)"); // sky-500/10
      grd.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      ctx.save();
      ctx.globalAlpha = opacity;
      // light connection lines
      const pts = particlesRef.current;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx + Math.sin(t + i) * 0.03;
        p.y += p.vy + Math.cos(t + i * 0.5) * 0.03;

        if (p.x < -10) p.x = canvas.offsetWidth + 10;
        if (p.x > canvas.offsetWidth + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.offsetHeight + 10;
        if (p.y > canvas.offsetHeight + 10) p.y = -10;
      }

      // draw links
      ctx.lineWidth = 0.6;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 120) {
            ctx.strokeStyle = `rgba(125,211,252,${(1 - d / 120) * 0.15})`; // sky-300
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // draw particles
      ctx.filter = `blur(${blur}px)`;
      ctx.fillStyle = color;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    window.addEventListener("resize", onResize);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [density, speed, color, blur, opacity]);

  return (
    <div className={className ?? ""} aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ display: "block" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />
    </div>
  );
};

export default AnimatedBackground;