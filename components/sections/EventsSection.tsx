import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, ArrowRightIcon } from "lucide-react";

const events = [
  {
    title: "Annual Innovation Summit",
    date: "April 15-17, 2025",
    description: "A three-day event featuring keynote speakers, workshops, and networking opportunities.",
    content: "Join industry leaders and emerging innovators for our flagship event focused on future technologies and entrepreneurial success.",
    image: "/placeholder.svg?height=200&width=400",
    buttonText: "Register Now"
  },
  {
    title: "Monthly Pitch Night",
    date: "Last Thursday of each month",
    description: "Showcase your ideas and receive feedback from experts and peers.",
    content: "Present your innovative concept in a supportive environment and connect with potential mentors, partners, and investors.",
    image: "/placeholder.svg?height=200&width=400",
    buttonText: "Apply to Pitch"
  },
  {
    title: "Innovation Hackathon",
    date: "June 10-12, 2025",
    description: "48-hour collaborative event to solve real-world challenges.",
    content: "Form teams, tackle pressing issues, and develop prototype solutions with guidance from industry mentors and technical experts.",
    image: "/placeholder.svg?height=200&width=400",
    buttonText: "Join the Challenge"
  }
];

const EventsSection: React.FC = () => {
  return (
    <section id="events" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

      <div className="container relative px-4 mx-auto">
        <div className="text-center mb-12 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/15 text-primary border border-primary/20">
            <span className="text-sm font-semibold">Upcoming Events</span>
            <ArrowRightIcon className="h-4 w-4" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient">Innovation</span> Events
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Connect, learn, and grow with our community through exciting events designed to inspire and elevate innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className={`animate-fade-up opacity-0 [animation-delay:${index * 200}ms]`}
            >
              <Card className="group bg-background/50 backdrop-blur-sm border-border/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <CalendarIcon className="h-4 w-4" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
                  <CardDescription className="text-foreground/80">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed">{event.content}</p>
                </CardContent>
                
                <CardFooter>
                  <Button className="w-full group transition-all duration-300 hover:bg-primary/90">
                    <span>{event.buttonText}</span>
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-up [animation-delay:600ms]">
          <Button variant="outline" size="lg" className="group transition-all duration-300 hover:border-primary/50" asChild>
            <Link href="#all-events">
              View All Events
              <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;