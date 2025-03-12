"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Founder, EcoTech Solutions",
    quote:
      "The mentorship and resources I received from Young Innovators Foundation were instrumental in turning my environmental technology concept into a viable business that's now helping communities reduce waste.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Maya Patel",
    role: "Creator, AccessLearn App",
    quote:
      "Without the support of Young Innovators, my educational app for students with learning disabilities would have remained just an idea. Their incubator program gave me the technical guidance and confidence I needed.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Jamal Williams",
    role: "Inventor, MediConnect Device",
    quote:
      "The funding and expert mentorship I received helped me develop a medical device that's now being used in rural clinics. Young Innovators believed in my vision when no one else would.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Sofia Rodriguez",
    role: "Founder, Community Solar Project",
    quote:
      "From a school project to a community-wide solar initiative, Young Innovators provided the resources and connections that helped me scale my impact beyond what I ever thought possible.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const isMobile = useMobile()

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const visibleTestimonials = isMobile
    ? [testimonials[activeIndex]]
    : [
        testimonials[activeIndex],
        testimonials[(activeIndex + 1) % testimonials.length],
        testimonials[(activeIndex + 2) % testimonials.length],
      ]

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * (isMobile ? 100 : 33.33)}%)` }}
        >
          {visibleTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="min-w-full md:min-w-[33.33%] p-1">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <QuoteIcon className="h-8 w-8 text-primary/40" />
                <p className="italic">{testimonial.quote}</p>
                <div className="flex flex-col items-center pt-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={`w-2 h-2 rounded-full p-0 ${index === activeIndex ? "bg-primary" : "bg-muted-foreground/30"}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          >
            <span className="sr-only">Testimonial {index + 1}</span>
          </Button>
        ))}
        <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

