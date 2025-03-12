"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LightbulbIcon, MenuIcon, XIcon } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeSheet = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <LightbulbIcon className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg">Innovate & Elevate</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="#programs" className="text-sm font-medium transition-colors hover:text-primary">
            Programs
          </Link>
          <Link href="#get-involved" className="text-sm font-medium transition-colors hover:text-primary">
            Get Involved
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
          <Link href="/gallery" className="text-sm font-medium transition-colors hover:text-primary">
            Gallery
          </Link>
        </nav>

        <div className="hidden md:flex gap-4">
          <Button variant="outline" asChild>
            <Link href="#get-involved">Volunteer</Link>
          </Button>
          <Button asChild>
            <Link href="#get-involved">Donate</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b py-4">
                <Link href="/" className="flex items-center gap-2" onClick={closeSheet}>
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <LightbulbIcon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="font-bold text-lg">Innovate & Elevate</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={closeSheet}>
                  <XIcon className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <nav className="flex flex-col gap-4 py-6">
                <Link
                  href="/"
                  className="text-lg font-medium transition-colors hover:text-primary px-2 py-1"
                  onClick={closeSheet}
                >
                  Home
                </Link>
                <Link
                  href="#programs"
                  className="text-lg font-medium transition-colors hover:text-primary px-2 py-1"
                  onClick={closeSheet}
                >
                  Programs
                </Link>
                <Link
                  href="#get-involved"
                  className="text-lg font-medium transition-colors hover:text-primary px-2 py-1"
                  onClick={closeSheet}
                >
                  Get Involved
                </Link>
                <Link
                  href="#contact"
                  className="text-lg font-medium transition-colors hover:text-primary px-2 py-1"
                  onClick={closeSheet}
                >
                  Contact
                </Link>
                <Link
                  href="/gallery"
                  className="text-lg font-medium transition-colors hover:text-primary px-2 py-1"
                  onClick={closeSheet}
                >
                  Gallery
                </Link>
              </nav>
              <div className="mt-auto flex flex-col gap-2 py-6">
                <Button variant="outline" className="w-full" asChild onClick={closeSheet}>
                  <Link href="#get-involved">Volunteer</Link>
                </Button>
                <Button className="w-full" asChild onClick={closeSheet}>
                  <Link href="#get-involved">Donate</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

