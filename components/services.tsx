'use client';

import { Search, FileText, MessageCircle, BarChart3 } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Search,
      title: 'Denial Investigation',
      description: 'In-depth analysis of each denial to identify root causes and recovery opportunities.',
    },
    {
      icon: FileText,
      title: 'Appeals & Resubmission',
      description: 'Strategic appeal preparation and resubmission of claims with supporting documentation.',
    },
    {
      icon: MessageCircle,
      title: 'Payer Follow-Up',
      description: 'Persistent, professional follow-up with insurance companies to track status and resolve issues.',
    },
    {
      icon: BarChart3,
      title: 'Root-Cause Reporting',
      description: 'Detailed reporting to help you fix systemic issues and prevent future denials.',
    },
  ]

  return (
    <section id="services" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Denial Resolution, Done Right
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-card border border-muted rounded-lg p-8 hover:shadow-lg transition-all duration-400 group hover:scale-103 hover:-translate-y-2 hover:border-primary"
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
                <div className="mb-6 inline-block p-3 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors">
                  <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
