import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Better Physics Shell | Class 12 CBSE Physics Questions & Solutions',
  description: 'Master Class 12 CBSE Physics with comprehensive predicted questions, detailed solutions, and interactive learning. Find answers to all topics with expert explanations.',
  keywords: ['CBSE Physics', 'Class 12', 'Physics Questions', 'Exam Prep', 'Board Exam'],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} font-sans antialiased bg-gradient-to-br from-slate-50 to-blue-50`}>
        {children}
      </body>
    </html>
  )
}
