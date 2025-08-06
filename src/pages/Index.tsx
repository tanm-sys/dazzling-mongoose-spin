import React, { Suspense, lazy } from "react";
import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import MathPreview from "@/components/sections/MathPreview";
import Algorithms from "@/components/sections/Algorithms";
import PlaygroundCTA from "@/components/sections/PlaygroundCTA";
import Footer from "@/components/sections/Footer";
import Starfield from "@/components/visuals/Starfield";
import RSAPlayground from "@/components/sections/RSAPlayground";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Suspense fallback={null}>
        <Starfield />
      </Suspense>
      <Hero />
      <Overview />
      <MathPreview />
      <Algorithms />
      <RSAPlayground />
      <PlaygroundCTA />
      <Footer />
    </div>
  );
};

export default Index;