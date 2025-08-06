import React, { useEffect, useRef, useState } from "react";

type ParallaxProps = {
  strength?: number; // px offset at 100vh scroll
  className?: string;
  children: React.ReactNode;
};

export const ParallaxLayer: React.FC<ParallaxProps> = ({
  strength = 40,
  className,
  children,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    const el = ref.current!;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = (rect.top - vh) / (vh * 2); // negative entering from bottom
      setY(progress * strength);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform: `translate3d(0, ${y.toFixed(2)}px, 0)` }}
    >
      {children}
    </div>
  );
};