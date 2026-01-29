'use client';

import { AlertCircle, Clock, DollarSign, Phone } from 'lucide-react'

export function PainPoints() {
  const painPoints = [
    {
      icon: AlertCircle,
      title: 'Denials Piling Up',
      description: 'Denials accumulate faster than you can handle them manually.',
    },
    {
      icon: Clock,
      title: 'Missed Appeal Deadlines',
      description: 'Critical deadlines slip away, eliminating recovery opportunities.',
    },
    {
      icon: DollarSign,
      title: 'Written-Off Revenue',
      description: 'Thousands in recoverable revenue disappear without proper appeals.',
    },
    {
      icon: Phone,
      title: 'Hours on Hold with Payers',
      description: 'Administrative staff waste time on hold instead of treating patients.',
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-28 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Sound Familiar?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            If your practice is struggling with denied claims, you're not alone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <div
                key={index}
                className="bg-card border-2 border-primary/20 rounded-lg p-6 hover:border-primary transition-all duration-400 hover:scale-103 hover:-translate-y-2"
                style={{
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(45, 106, 106, 0.15)'
                  e.currentTarget.style.transform = 'scale(1.03) translateY(-8px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'
                  e.currentTarget.style.transform = 'scale(1) translateY(0)'
                }}
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
