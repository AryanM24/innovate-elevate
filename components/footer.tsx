import Link from "next/link"
import { LightbulbIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <LightbulbIcon className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">Innovate & Elevate</span>
            </Link>
            <p className="text-muted-foreground">
              Empowering young innovators to turn their ideas into reality through resources, mentorship, and support.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <InstagramIcon className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-muted-foreground hover:text-primary">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#get-involved" className="text-muted-foreground hover:text-primary">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <p className="text-muted-foreground">
              <strong>Email:</strong> innovateandelevate.np@gmail.com
              <br />
              <strong>Phone:</strong> (555) 123-4567
            </p>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Innovate & Elevate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

