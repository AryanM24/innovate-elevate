'use client'

import Link from 'next/link'

const socialLinks = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/YIFoundation',
    color: '#1DA1F2',
    hoverColor: '#0d8bd9',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/young-innovators-foundation',
    color: '#0A66C2',
    hoverColor: '#084d94',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/younginnovatorsfoundation',
    color: '#E4405F',
    hoverColor: '#d02d4c',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/younginnovators',
    color: '#5865F2',
    hoverColor: '#4752c4',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path d="M9 6c-5.4 1-7.8 3.8-8.8 6.5-.5 1.3-.2 2.8.7 3.9 2.3 2.9 5.5 4.4 9.2 4.6 1.3-.2 2.6-.7 3.7-1.5.7-.5.9-1.4.6-2.2l-.8-2.3m-3.1-9c5.4 1 7.8 3.8 8.8 6.5.5 1.3.2 2.8-.7 3.9-2.3 2.9-5.5 4.4-9.2 4.6-1.3-.2-2.6-.7-3.7-1.5-.7-.5-.9-1.4-.6-2.2l.8-2.3" />
        <path d="M8.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
        <path d="M15.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@younginnovators',
    color: '#000000',
    hoverColor: '#333333',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path d="M19 10v6a7 7 0 1 1-7-7v4a3 3 0 1 0 3 3V2h4v4a6 6 0 0 1 6 6h-4" />
      </svg>
    ),
  }
]

export function Socials() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
          Let's Connect
        </h2>
        <div className="flex justify-center items-center gap-8">
          {socialLinks.map((social, index) => (
            <div
              key={social.name}
              className="group flex flex-col items-center animate-slide-up"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <Link
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block p-4"
              >
                <div className="relative z-10 p-4 bg-white rounded-full shadow-lg 
                              transform transition-all duration-300 
                              group-hover:scale-110 group-hover:rotate-12 
                              group-hover:shadow-xl">
                  <div className="transition-colors duration-300 group-hover:text-primary">
                    {social.icon}
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/10 rounded-full 
                              transform scale-0 transition-transform duration-300 
                              group-hover:scale-150" />
              </Link>
              <span className="mt-2 text-sm text-muted-foreground 
                             opacity-0 transform translate-y-2 transition-all 
                             duration-300 group-hover:opacity-100 
                             group-hover:translate-y-0">
                {social.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}