import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Montserrat, Inter, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _montserrat = Montserrat({ subsets: ["latin"], weight: ['600'] });
const _inter = Inter({ subsets: ["latin"], weight: ['400', '600'] });
const _dmSans = DM_Sans({ subsets: ["latin"], weight: ['600'] });

export const metadata: Metadata = {
  title: 'Mohenara - Denial Management for Physical Therapy Practices',
  description: 'Stop writing off denied claims. Mohenara specializes in denial investigation and appeals for PT and rehabilitation practices.',
  icons: {
    icon: [
      {
        url: '/icon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
