import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import EventsSection from "@/components/sections/EventsSection";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import GetInvolvedSection from "@/components/sections/GetInvolvedSection";
import { Socials } from "@/components/sections/Socials"

const sections = [
  { Component: HeroSection, delay: "0" },
  { Component: MissionSection, delay: "100" },
  { Component: ProgramsSection, delay: "200" },
  { Component: EventsSection, delay: "300" },
  { Component: SuccessStoriesSection, delay: "400" },
  { Component: SponsorsSection, delay: "500" },
  { Component: GetInvolvedSection, delay: "600" },
  { Component: Socials, delay: "700" }
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {sections.map(({ Component, delay }, index) => (
          <div 
            key={index}
            className="animate-fade-up opacity-0"
            style={{ animationDelay: `${delay}ms` }}
          >
            <Component />
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}