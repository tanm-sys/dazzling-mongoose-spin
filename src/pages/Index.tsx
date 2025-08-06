import React from "react";
import Hero from "@/components/sections/Hero";
import Overview from "@/components/sections/Overview";
import MathPreview from "@/components/sections/MathPreview";
import Algorithms from "@/components/sections/Algorithms";
import PlaygroundCTA from "@/components/sections/PlaygroundCTA";
import Footer from "@/components/sections/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Overview />
      <MathPreview />
      <Algorithms />
      <PlaygroundCTA />
      <Footer />
    </div>
  );
};

export default Index;