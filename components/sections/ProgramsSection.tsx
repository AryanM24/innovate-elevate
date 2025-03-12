import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRightIcon } from "lucide-react";

const programs = [
  {
    id: "mentorship",
    title: "Mentorship Program",
    description: "Connect with industry experts who provide guidance, feedback, and support throughout your innovation journey.",
    features: [
      "One-on-one mentoring sessions",
      "Expert feedback on your ideas",
      "Long-term relationship building"
    ],
    buttonText: "Apply Now",
    image: "/placeholder.svg"
  },
  {
    id: "funding",
    title: "Funding Opportunities",
    description: "Access grants, scholarships, and investment opportunities to bring your innovative ideas to life.",
    features: [
      "Micro-grants for early-stage ideas",
      "Pitch competitions with cash prizes",
      "Connections to angel investors"
    ],
    buttonText: "Explore Funding",
    image: "/placeholder.svg"
  },
  {
    id: "workshops",
    title: "Skill-Building Workshops",
    description: "Develop essential skills through our interactive workshops led by industry professionals.",
    features: [
      "Prototyping and design thinking",
      "Business model development",
      "Presentation and pitching skills"
    ],
    buttonText: "Register for Workshops",
    image: "/placeholder.svg"
  },
  {
    id: "incubator",
    title: "Innovation Incubator",
    description: "Join our intensive incubator program to accelerate your project from concept to reality.",
    features: [
      "Dedicated workspace and resources",
      "Technical and business support",
      "Demo day with industry leaders"
    ],
    buttonText: "Apply to Incubator",
    image: "/placeholder.svg"
  }
];

const ProgramsSection: React.FC = () => {
  return (
    <section id="programs" className="relative py-16 md:py-24">
      {/* Lighter, more subtle background */}
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

      <div className="container relative px-4 mx-auto">
        {/* Improved header contrast and spacing */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/15 text-primary border border-primary/20">
            <span className="text-sm font-semibold">Explore Our Programs</span>
            <ArrowRightIcon className="h-4 w-4" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Empowering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient">
              Innovation
            </span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Discover how we support young innovators through our comprehensive programs and resources.
          </p>
        </div>

        <Tabs defaultValue="mentorship" className="max-w-5xl mx-auto">
          {/* Improved tab visibility */}
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 bg-background border border-border/50 p-1.5 rounded-lg">
            {programs.map((program) => (
              <TabsTrigger 
                key={program.id}
                value={program.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-medium transition-all duration-300"
              >
                {program.title.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {programs.map((program) => (
            <TabsContent 
              key={program.id}
              value={program.id}
              className="rounded-xl bg-background border border-border/50 shadow-lg"
            >
              <div className="flex flex-col md:flex-row gap-12 p-8">
                {/* Content section with improved readability */}
                <div className="md:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-foreground">
                      {program.title}
                    </h3>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-4">
                    {program.features.map((feature, index) => (
                      <li 
                        key={index} 
                        className="flex items-center gap-4 group"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          <ArrowRightIcon className="h-4 w-4" />
                        </span>
                        <span className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    size="lg"
                    className="group bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {program.buttonText}
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Image section with softer overlay */}
                <div className="md:w-1/2 relative h-[350px] group rounded-xl overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent" />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProgramsSection;
