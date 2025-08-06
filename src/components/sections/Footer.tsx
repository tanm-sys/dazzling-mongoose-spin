import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Footer: React.FC = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 md:flex-row">
        <p className="text-sm text-foreground/60">
          Cryptography Showcase • Built for immersive learning.
        </p>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;