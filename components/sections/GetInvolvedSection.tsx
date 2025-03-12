import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartIcon, UsersIcon, RocketIcon, BriefcaseIcon, ArrowRightIcon } from "lucide-react";

const ways = [
  {
    title: "Donate",
    description: "Support our programs financially to help more young innovators access resources.",
    content: "Your contribution helps fund grants, workshops, and mentorship programs for aspiring entrepreneurs.",
    icon: HeartIcon,
    buttonText: "Make a Donation",
    variant: "default"
  },
  {
    title: "Volunteer",
    description: "Share your expertise and time to mentor and guide young innovators.",
    content: "Become a mentor, workshop facilitator, or event volunteer to directly impact future leaders.",
    icon: UsersIcon,
    buttonText: "Become a Volunteer",
    variant: "outline"
  },
  {
    title: "Partner",
    description: "Collaborate with us to create more opportunities for innovation.",
    content: "Organizations can partner with us to sponsor programs, provide resources, or host events.",
    icon: RocketIcon,
    buttonText: "Become a Partner",
    variant: "outline"
  },
  {
    title: "Sponsor",
    description: "Provide financial support for specific programs or initiatives.",
    content: "Companies and organizations can gain visibility while supporting innovation through targeted sponsorships.",
    icon: BriefcaseIcon,
    buttonText: "Sponsorship Opportunities",
    variant: "outline"
  }
];

const GetInvolvedSection: React.FC = () => {
  return (
    <section id="get-involved" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

      <div className="container relative px-4 mx-auto">
        <div className="text-center mb-12 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/15 text-primary border border-primary/20">
            <span className="text-sm font-semibold">Get Involved</span>
            <ArrowRightIcon className="h-4 w-4" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient">Mission</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Be part of our journey to empower the next generation of innovators and create lasting impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {ways.map((way, index) => (
            <div 
              key={way.title}
              className={`animate-fade-up opacity-0 [animation-delay:${index * 200}ms]`}
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <way.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{way.title}</CardTitle>
                  <CardDescription className="text-foreground/80">
                    {way.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 leading-relaxed">
                    {way.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full group" 
                    variant={way.variant as "default" | "outline"}
                  >
                    <span>{way.buttonText}</span>
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
