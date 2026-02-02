'use client'

import { Button } from '@/components/ui/button'
import { ShieldCheck, TrendingUp, Users } from 'lucide-react'

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden" style={{ backgroundColor: '#F7F5F2' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient blob - top right */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #2D6A6A 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite'
          }}
        />

        {/* Medium gradient blob - bottom left */}
        <div
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #D4C5B0 0%, transparent 70%)',
            animation: 'float 10s ease-in-out infinite 1s'
          }}
        />

        {/* Accent blob - right center */}
        <div
          className="absolute top-1/3 right-24 w-64 h-64 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #2D6A6A 0%, transparent 70%)',
            animation: 'float 12s ease-in-out infinite 2s'
          }}
        />
      </div>

      {/* Floating Cards Layer - Right Side */}
      <div className="absolute inset-0 hidden lg:block overflow-hidden">
        {/* Card 1 - HIPAA Compliant */}
        <div
          className="absolute top-[12%] right-[12%] w-72 rounded-2xl shadow-2xl backdrop-blur-sm"
          style={{
            background: 'rgba(255, 255, 255, 0.85)',
            border: '1px solid rgba(45, 106, 106, 0.2)',
            animation: 'float 6s ease-in-out infinite',
            transform: 'translateZ(0)'
          }}
        >
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'rgba(45, 106, 106, 0.1)' }}
              >
                <ShieldCheck className="w-5 h-5" style={{ color: '#2D6A6A' }} />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-1" style={{ color: '#2D6A6A' }}>
              HIPAA Compliant
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#2C2C2C', opacity: 0.7 }}>
              Your data protected by healthcare-grade security
            </p>
          </div>
        </div>

        {/* Card 2 - Performance-Based */}
        <div
          className="absolute top-[38%] right-[8%] w-72 rounded-2xl shadow-2xl backdrop-blur-sm"
          style={{
            background: 'rgba(212, 197, 176, 0.7)',
            border: '1px solid rgba(212, 197, 176, 0.5)',
            animation: 'float 7s ease-in-out infinite 1s',
            transform: 'translateZ(0)'
          }}
        >
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'rgba(45, 106, 106, 0.15)' }}
              >
                <TrendingUp className="w-5 h-5" style={{ color: '#2D6A6A' }} />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-1" style={{ color: '#1E4D4D' }}>
              Performance-Based
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#2C2C2C', opacity: 0.8 }}>
              Pay only when we recover; zero upfront cost
            </p>
          </div>
        </div>

        {/* Card 3 - PT Specialists */}
        <div
          className="absolute top-[64%] right-[15%] w-72 rounded-2xl shadow-2xl backdrop-blur-sm"
          style={{
            background: 'rgba(255, 255, 255, 0.75)',
            border: '1px solid rgba(45, 106, 106, 0.15)',
            animation: 'float 8s ease-in-out infinite 2s'
          }}
        >
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'rgba(90, 138, 114, 0.15)' }}
              >
                <Users className="w-5 h-5" style={{ color: '#5A8A72' }} />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-1" style={{ color: '#2D6A6A' }}>
              PT Specialists
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#2C2C2C', opacity: 0.7 }}>
              Built specifically for Physical Therapy practices
            </p>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-16 lg:py-0">
          {/* LEFT: Text Content */}
          <div className="space-y-6 max-w-xl">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              <span className="block text-primary/70">
                Stop Writing Off Denied Claims.
              </span>
              <span className="block text-primary mt-2">
                Start Recovering Your Revenue.
              </span>
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

          {/* RIGHT: Illustration area - floating cards visible on desktop */}
          <div className="hidden lg:block relative h-96" />
        </div>
      </div>

      {/* Mobile Cards - Shown below content on smaller screens */}
      <div className="lg:hidden px-4 pb-12">
        <div className="grid sm:grid-cols-3 gap-4">
          {/* Mobile Card 1 */}
          <div
            className="rounded-xl p-5 shadow-lg"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid rgba(45, 106, 106, 0.2)',
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-5 h-5" style={{ color: '#2D6A6A' }} />
            </div>
            <h3 className="text-base font-bold mb-1" style={{ color: '#2D6A6A' }}>
              HIPAA Compliant
            </h3>
            <p className="text-xs" style={{ color: '#2C2C2C', opacity: 0.7 }}>
              Healthcare-grade security
            </p>
          </div>

          {/* Mobile Card 2 */}
          <div
            className="rounded-xl p-5 shadow-lg"
            style={{
              background: 'rgba(212, 197, 176, 0.7)',
              border: '1px solid rgba(212, 197, 176, 0.5)',
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5" style={{ color: '#2D6A6A' }} />
            </div>
            <h3 className="text-base font-bold mb-1" style={{ color: '#1E4D4D' }}>
              Performance-Based
            </h3>
            <p className="text-xs" style={{ color: '#2C2C2C', opacity: 0.8 }}>
              Pay only when we recover
            </p>
          </div>

          {/* Mobile Card 3 */}
          <div
            className="rounded-xl p-5 shadow-lg"
            style={{
              background: 'rgba(255, 255, 255, 0.85)',
              border: '1px solid rgba(45, 106, 106, 0.15)',
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5" style={{ color: '#5A8A72' }} />
            </div>
            <h3 className="text-base font-bold mb-1" style={{ color: '#2D6A6A' }}>
              PT Specialists
            </h3>
            <p className="text-xs" style={{ color: '#2C2C2C', opacity: 0.7 }}>
              Built for PT practices
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  )
}
