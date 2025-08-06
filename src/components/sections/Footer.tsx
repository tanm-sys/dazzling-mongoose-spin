import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import ScrollReveal from "@/components/visuals/ScrollReveal";

const Footer: React.FC = () => {
  return (
    <footer className="border-t">
      <ScrollReveal>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 md:flex-row">
          <p className="text-sm text-foreground/60">
            Cryptography Showcase • Built for immersive learning.
          </p>
          <MadeWithDyad />
        </div>
      </ScrollReveal>
    </footer>
  );
};

export default Footer;