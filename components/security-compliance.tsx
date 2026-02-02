'use client'

import { FileCheck, ShieldX, Monitor, KeyRound, UserCheck } from 'lucide-react'

export function SecurityCompliance() {
  const securityItems = [
    {
      icon: FileCheck,
      title: 'BAA Available',
      description: 'Business Associate Agreement provided to every client.',
    },
    {
      icon: ShieldX,
      title: 'No PHI Through Our Forms',
      description: 'Contact forms collect practice info only—never patient data.',
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
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Your Data. Our Responsibility.
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Security isn't an afterthought—it's how we operate.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300"
                style={{
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
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
    </section>
  )
}
