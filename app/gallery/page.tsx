import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import MasonryGrid from '@/components/MasonryGrid'
import { Container } from '@/components/container'

// Gallery image component
const GalleryImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative overflow-hidden rounded-lg group">
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
      />
      <div 
        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
          transition-opacity duration-300" 
      />
    </div>
  )
}

// Sample gallery images
const galleryImages = [
  { src: '/placeholder.svg', alt: 'Gallery Image 1' },
  { src: '/placeholder.svg', alt: 'Gallery Image 2' },
  { src: '/placeholder.svg', alt: 'Gallery Image 3' },
  { src: '/placeholder.svg', alt: 'Gallery Image 4' },
  { src: '/placeholder.svg', alt: 'Gallery Image 5' },
  { src: '/placeholder.svg', alt: 'Gallery Image 6' },
]

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
        <main>
          <section className="py-16 md:py-24">
            <Container>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Gallery
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Let's embody your beautiful ideas together, simplify the way you visualize
                your next big things.
              </p>
            </Container>
          </section>

          <section className="pb-16 md:pb-24">
            <Container>
              <MasonryGrid>
                {galleryImages.map((image, index) => (
                  <GalleryImage
                    key={index}
                    src={image.src}
                    alt={image.alt}
                  />
                ))}
              </MasonryGrid>
            </Container>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}