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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="animate-fade-up">
          <HeroSection />
        </div>

        <div className="animate-fade-up">
          <MissionSection />
        </div>

        <div className="animate-fade-up">
          <ProgramsSection />
        </div>

        <div className="animate-fade-up">
          <EventsSection />
        </div>

        <div className="animate-fade-up">
          <SuccessStoriesSection />
        </div>

        <div className="animate-fade-up">
          <SponsorsSection />
        </div>

        <div className="animate-fade-up">
          <GetInvolvedSection />
        </div>

        <div className="animate-fade-up">
          <Socials />
        </div>
      </main>
      <Footer />
    </div>
  );
}