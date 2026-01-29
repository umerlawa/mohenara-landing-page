'use client'

import { Button } from '@/components/ui/button'
import { RevenueFlowVisual } from './revenue-flow-visual'

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-20 sm:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight text-balance"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Stop Writing Off Denied Claims. Start Recovering Your Revenue.
            </h1>
            
            <p className="text-lg text-foreground/80 leading-relaxed max-w-md">
              Mohenara specializes in denial investigation and appeals for Physical Therapy and Rehabilitation practices.
            </p>

            <Button
              onClick={() => scrollToSection('#contact')}
              size="lg"
              className="bg-primary hover:bg-secondary text-primary-foreground w-full sm:w-auto transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5"
              style={{
                boxShadow: '0 4px 6px rgba(45, 106, 106, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(45, 106, 106, 0.35)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(45, 106, 106, 0.2)'
              }}
            >
              Get Your Free Denial Audit
            </Button>
          </div>

          {/* Right Visual */}
          <RevenueFlowVisual />
        </div>
      </div>
    </section>
  )
}
