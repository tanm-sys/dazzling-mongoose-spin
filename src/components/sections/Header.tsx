import React from "react";
import ThemeToggle from "@/components/ui/theme-toggle";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/60 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <span className="text-lg font-bold tracking-tight">Crypto Showcase</span>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;