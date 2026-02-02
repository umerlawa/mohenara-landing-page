'use client';

import { Users, Lock, Shield, TrendingUp, FileCheck, ShieldX, Monitor, KeyRound, UserCheck } from 'lucide-react'

export function Differentiators() {
  const differentiators = [
    {
      icon: Users,
      title: 'PT Specialists',
      description: 'Our team understands physical therapy billing better than anyone. We speak your language.',
    },
    {
      icon: TrendingUp,
      title: 'No Risk Entry',
      description: 'Only pay when we recover denied claims. Your success is our success.',
    },
    {
      icon: Lock,
      title: 'Security-First',
      description: 'HIPAA-compliant processes and encrypted data handling protect patient information.',
    },
    {
      icon: Shield,
      title: 'Clear Reporting',
      description: 'Transparent, real-time dashboards show exactly what we\'re recovering for you.',
    },
  ]

  const securityItems = [
    {
      icon: FileCheck,
      title: 'BAA Available',
      description: 'Business Associate Agreement provided to every client.',
    },
    {
      icon: ShieldX,
      title: 'No PHI Through Our Forms',
      description: 'Contact forms collect practice info only; never patient data.',
    },
    {
      icon: Monitor,
      title: 'Work Inside Your Systems Only',
      description: 'We access only client-approved portals. Your data never leaves your environment.',
    },
    {
      icon: KeyRound,
      title: 'Multi-Factor Authentication',
      description: 'MFA required for all team access. No exceptions.',
    },
    {
      icon: UserCheck,
      title: 'Least-Privilege Access',
      description: 'Role-based permissions ensure staff see only what they need.',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Why PT Practices Trust Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-8 border border-primary/10 hover:border-primary transition-all duration-400 hover:scale-103 hover:-translate-y-2"
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
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Security & Compliance Subsection */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3
              className="text-2xl sm:text-3xl font-bold text-primary mb-3"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Your Data. Our Responsibility.
            </h3>
            <p className="text-foreground/70">
              Security isn't an afterthought; it's how we operate.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 border border-primary/10 hover:border-primary transition-all duration-400"
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
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" strokeWidth={2} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
