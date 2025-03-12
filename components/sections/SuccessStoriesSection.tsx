import React from "react";
import TestimonialCarousel from "@/components/testimonial-carousel";
import { ArrowRightIcon } from "lucide-react";

const SuccessStoriesSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

      <div className="container relative px-4 mx-auto">
        <div className="text-center mb-12 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/15 text-primary border border-primary/20">
            <span className="text-sm font-semibold">Success Stories</span>
            <ArrowRightIcon className="h-4 w-4" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Inspiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient">Innovation</span> Stories
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Meet the young innovators who have transformed their ideas into impactful solutions through our programs.
          </p>
        </div>

        <div className="animate-fade-up opacity-0 [animation-delay:200ms]">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
