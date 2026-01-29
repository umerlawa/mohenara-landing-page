import { CheckCircle2 } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Free Audit',
      description: 'Submit your denied claims. We analyze and prioritize recovery opportunities.',
    },
    {
      number: '2',
      title: 'We Work Denials',
      description: 'Our team investigates, appeals, and follows up with payers professionally.',
    },
    {
      number: '3',
      title: 'You Get Paid',
      description: 'Recovered funds are transferred directly to your account. You only pay our fee from recovered amounts.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Simple Process, Real Results
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line - desktop only */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30 z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <div className="flex flex-col items-center">
                {/* Step number circle */}
                <div className="mb-8 flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white font-bold text-2xl border-4 border-background shadow-lg">
                  {step.number}
                </div>

                {/* Card content */}
                <div className="bg-card border border-muted rounded-lg p-8 text-center w-full">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Checkmark */}
                <div className="mt-6">
                  <CheckCircle2 className="w-8 h-8 text-accent" strokeWidth={2} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key benefits */}
        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <p className="text-foreground/70">Average revenue recovery increase</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Zero Risk</div>
              <p className="text-foreground/70">Only pay from recovered amounts</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">90 Days</div>
              <p className="text-foreground/70">Average time to first recovery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
