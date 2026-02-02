'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { PainPoints } from '@/components/pain-points'
import { Services } from '@/components/services'
import { Differentiators } from '@/components/differentiators'
import { SecurityCompliance } from '@/components/security-compliance'
import { HowItWorksAnimated } from '@/components/how-it-works-animated'
import { Contact } from '@/components/contact'
import { PreFooterCTA } from '@/components/pre-footer-cta'
import { Footer } from '@/components/footer'
import { HowItWorks } from '@/components/how-it-works' // Added import for HowItWorks

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <PainPoints />
      <Services />
      <Differentiators />
      <SecurityCompliance />
      <HowItWorksAnimated />
      <Contact />
      <PreFooterCTA />
      <Footer />
    </main>
  )
}
