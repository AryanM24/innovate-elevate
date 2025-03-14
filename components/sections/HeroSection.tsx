import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, RocketIcon } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/5 to-primary/10">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="container relative z-10 px-4 py-24 md:py-32 lg:py-40 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient">
                Innovate & <br />
                <span className="text-secondary animate-pulse">Elevate</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] leading-relaxed">
                Empowering the next generation of <br />
                <span className="text-primary font-semibold">entrepreneurs</span> and
                <span className="text-secondary font-semibold"> innovators</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg group transition-all duration-300 transform hover:scale-105">
                <Link href="#get-involved" className="flex items-center gap-2">
                  Get Involved
                  <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group hover:border-secondary transition-all duration-300 transform hover:scale-105">
                <Link href="#programs" className="flex items-center gap-2">
                  Explore Programs
                  <RocketIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative w-full">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] animate-float">
              <Image
                src="https://assets.entrepreneur.com/content/3x2/2000/20171017194429-shutterstock-370390046-crop.jpeg"
                alt="Young innovators collaborating"
                fill
                className="object-cover rounded-2xl shadow-2xl hover:shadow-primary/20 transition-shadow duration-300"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
