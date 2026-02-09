import React from "react"
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'] })
const _spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Launch Fellow | Your Shadow Partner for Creator Revenue',
  description:
    'Stop renting your influence to sponsors. Partner with Launch Fellow to build systems that pay you every month.',

  openGraph: {
    title: 'Launch Fellow',
    description:
      'Stop renting your influence to sponsors. Partner with Launch Fellow to build systems that pay you every month.',
    url: 'https://launchfellow.vercel.app',
    siteName: 'Launch Fellow',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Launch Fellow homepage preview',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Launch Fellow',
    description:
      'Stop renting your influence to sponsors. Partner with Launch Fellow to build systems that pay you every month.',
    images: ['/og-image.png'],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
