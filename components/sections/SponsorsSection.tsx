import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const sponsors = [
  { name: "Sponsor 1", logo: "/placeholder.svg?height=80&width=160&text=Sponsor+1" },
  { name: "Sponsor 2", logo: "/placeholder.svg?height=80&width=160&text=Sponsor+2" },
  { name: "Sponsor 3", logo: "/placeholder.svg?height=80&width=160&text=Sponsor+3" },
  { name: "Sponsor 4", logo: "/placeholder.svg?height=80&width=160&text=Sponsor+4" },
  { name: "Sponsor 5", logo: "/placeholder.svg?height=80&width=160&text=Sponsor+5" },
  { name: "Sponsor 6", logo: "/placeholder.svg?height=80&width=160&text=Sponsor+6" },
  { name: "Sponsor 7", logo: "/placeholder.svg?height=80&width=160&text=Sponsor+7" },
  { name: "Sponsor 8", logo: "/placeholder.svg?height=80&width=160&text=Sponsor+8" },
];

const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsors" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

      <div className="container relative px-4 mx-auto">
        <div className="text-center mb-12 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/15 text-primary border border-primary/20">
            <span className="text-sm font-semibold">Our Sponsors</span>
            <ArrowRightIcon className="h-4 w-4" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient">Innovation</span> Together
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            We're grateful to the organizations that make our work possible through their generous support.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto animate-fade-up opacity-0 [animation-delay:200ms]">
          {/* Infinite Slider */}
          <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:w-20 before:h-full before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:w-20 after:h-full after:bg-gradient-to-l after:from-background after:to-transparent">
            {/* First Row */}
            <div className="flex animate-slide">
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <div
                  key={`${sponsor.name}-${index}`}
                  className="flex-none w-[200px] mx-8 py-4 transition-transform hover:scale-110"
                >
                  <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-lg">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={160}
                      height={80}
                      className="w-auto h-12 object-contain filter saturate-0 hover:saturate-100 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second Row (Reverse) */}
            <div className="flex animate-slide-reverse mt-8">
              {[...sponsors.reverse(), ...sponsors].map((sponsor, index) => (
                <div
                  key={`${sponsor.name}-reverse-${index}`}
                  className="flex-none w-[200px] mx-8 py-4 transition-transform hover:scale-110"
                >
                  <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-lg">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={160}
                      height={80}
                      className="w-auto h-12 object-contain filter saturate-0 hover:saturate-100 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-up opacity-0 [animation-delay:400ms]">
          <Button className="group bg-primary hover:bg-primary/90">
            Become a Sponsor
            <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
