import React, { Suspense, lazy } from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import MathPreview from "@/components/sections/MathPreview";
import Algorithms from "@/components/sections/Algorithms";
import RSAPlayground from "@/components/sections/RSAPlayground";
import PrimeSievePlayground from "@/components/sections/PrimeSievePlayground";
import PlaygroundCTA from "@/components/sections/PlaygroundCTA";
import Footer from "@/components/sections/Footer";
import Starfield from "@/components/visuals/Starfield";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Suspense fallback={null}>
        <Starfield />
      </Suspense>
      <Hero />
      <Overview />
      <MathPreview />
      <Algorithms />
      <RSAPlayground />
      <PrimeSievePlayground />
      <PlaygroundCTA />
      <Footer />
    </div>
  );
};

export default Index;