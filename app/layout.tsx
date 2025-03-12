import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Innovate & Elevate',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
