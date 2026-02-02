'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

interface StepState {
  cardVisible: boolean
  lineVisible: boolean
  numberVisible: boolean
  celebrating: boolean
  card3Transformed: boolean
}

export function HowItWorksAnimated() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [stepStates, setStepStates] = useState<StepState[]>([
    { cardVisible: false, lineVisible: false, numberVisible: false, celebrating: false, card3Transformed: false },
    { cardVisible: false, lineVisible: false, numberVisible: false, celebrating: false, card3Transformed: false },
    { cardVisible: false, lineVisible: false, numberVisible: false, celebrating: false, card3Transformed: false },
  ])
  const [hasAnimated, setHasAnimated] = useState(false)

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

  // Confetti particles generator
  const generateConfetti = (container: HTMLElement) => {
    const colors = ['#2D6A6A', '#D4C5B0', '#5A8A72']
    const confettiCount = 30

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div')
      const color = colors[Math.floor(Math.random() * colors.length)]
      const size = Math.random() * 8 + 4
      const delay = Math.random() * 100

      const tx = (Math.random() - 0.5) * 200
      const ty = -(Math.random() * 200 + 100)

      confetti.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: ${Math.random() > 0.5 ? '50%' : '0%'};
        left: 50%;
        top: 50%;
        pointer-events: none;
        --tx: ${tx}px;
        --ty: ${ty}px;
        animation: confetti 1.5s ease-out forwards;
        animation-delay: ${delay}ms;
      `

      container.appendChild(confetti)

      setTimeout(() => confetti.remove(), 1600 + delay)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)

          // STEP 1: Card 1 appears at 0ms
          setTimeout(() => {
            setStepStates((prev) => [
              { ...prev[0], cardVisible: true, numberVisible: true },
              prev[1],
              prev[2],
            ])
          }, 0)

          // STEP 2: Line 1→2 fills at 800ms (after card 1 settles)
          setTimeout(() => {
            setStepStates((prev) => [
              { ...prev[0], lineVisible: true },
              prev[1],
              prev[2],
            ])
          }, 800)

          // STEP 3: Card 2 appears at 1600ms
          setTimeout(() => {
            setStepStates((prev) => [
              prev[0],
              { ...prev[1], cardVisible: true, numberVisible: true },
              prev[2],
            ])
          }, 1600)

          // STEP 4: Line 2→3 fills at 2400ms
          setTimeout(() => {
            setStepStates((prev) => [
              prev[0],
              { ...prev[1], lineVisible: true },
              prev[2],
            ])
          }, 2400)

          // STEP 5: Card 3 appears + transforms to teal at 3200ms
          setTimeout(() => {
            setStepStates((prev) => [
              prev[0],
              prev[1],
              { ...prev[2], cardVisible: true, numberVisible: true, card3Transformed: true, celebrating: true },
            ])

            // Trigger confetti explosion
            const step3Container = document.getElementById('step-3-card')
            if (step3Container) {
              generateConfetti(step3Container)
            }
          }, 3200)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [hasAnimated])

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

        <div className="grid md:grid-cols-3 gap-8 relative" ref={containerRef}>
          {/* Connecting lines - desktop only */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-1 z-0">
            {/* Line 1→2 */}
            <div
              className={`absolute top-0 left-0 w-1/2 h-full transition-all ${
                stepStates[0]?.lineVisible ? 'bg-primary' : 'bg-border'
              }`}
              style={{
                transition: stepStates[0]?.lineVisible ? 'background-color 800ms ease-in-out' : 'none',
                background: stepStates[0]?.lineVisible
                  ? 'linear-gradient(to right, rgb(45, 106, 106) 0%, rgb(45, 106, 106) 100%)'
                  : 'rgb(229, 221, 210)',
              }}
            />
            {/* Line 2→3 */}
            <div
              className={`absolute top-0 right-0 w-1/2 h-full transition-all ${
                stepStates[1]?.lineVisible ? 'bg-primary' : 'bg-border'
              }`}
              style={{
                transition: stepStates[1]?.lineVisible ? 'background-color 800ms ease-in-out' : 'none',
                background: stepStates[1]?.lineVisible
                  ? 'linear-gradient(to right, rgb(45, 106, 106) 0%, rgb(45, 106, 106) 100%)'
                  : 'rgb(229, 221, 210)',
              }}
            />
          </div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <div className="flex flex-col items-center">
                {/* Step number circle */}
                <div
                  className={`mb-8 flex items-center justify-center w-20 h-20 rounded-full text-white font-bold text-2xl border-4 border-background shadow-lg transition-all ${
                    stepStates[index]?.numberVisible
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-50'
                  } ${
                    index === 2
                      ? 'bg-primary'
                      : 'bg-primary'
                  }`}
                  style={{
                    animation: stepStates[index]?.numberVisible
                      ? `cardPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`
                      : 'none',
                  }}
                >
                  {step.number}
                </div>

                {/* Card content */}
                <div
                  id={index === 2 ? 'step-3-card' : undefined}
                  className={`relative rounded-lg p-8 text-center w-full transition-all ${
                    stepStates[index]?.cardVisible
                      ? 'opacity-100'
                      : 'opacity-0 scale-75'
                  } ${
                    stepStates[index]?.celebrating
                      ? 'animate-pulse-glow'
                      : ''
                  }
                  ${
                    index !== 2
                      ? 'bg-card border border-muted'
                      : ''
                  }`}
                  style={{
                    animation: stepStates[index]?.cardVisible
                      ? index === 2
                        ? `cardBounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`
                        : `cardPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`
                      : 'none',
                    // Card 3 color transformation
                    backgroundColor: index === 2 && stepStates[index]?.card3Transformed ? '#2D6A6A' : undefined,
                    color: index === 2 && stepStates[index]?.card3Transformed ? 'white' : undefined,
                    border: index === 2 && stepStates[index]?.card3Transformed ? '2px solid #1E4D4D' : undefined,
                    boxShadow: stepStates[index]?.card3Transformed
                      ? '0 8px 30px rgba(45, 106, 106, 0.3)'
                      : stepStates[index]?.celebrating
                        ? '0 0 30px rgba(90, 138, 114, 0.3)'
                        : '0 2px 8px rgba(0,0,0,0.06)',
                    transition: index === 2 && stepStates[index]?.card3Transformed
                      ? 'background-color 500ms ease-out, color 500ms ease-out, border 500ms ease-out, box-shadow 500ms ease-out'
                      : 'all 0.3s ease-out',
                  }}
                >
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{
                      color: index === 2 && stepStates[index]?.card3Transformed ? 'white' : undefined,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="leading-relaxed"
                    style={{
                      color: index === 2 && stepStates[index]?.card3Transformed ? 'rgba(255, 255, 255, 0.9)' : undefined,
                    }}
                  >
                    {step.description}
                  </p>

                  {/* Celebration content for step 3 */}
                  {index === 2 && stepStates[index]?.celebrating && (
                    <div className="mt-4 flex justify-center">
                      <div
                        className="animate-wiggle"
                        style={{
                          fontSize: '2rem',
                        }}
                      >
                        💰
                      </div>
                    </div>
                  )}
                </div>

                {/* Checkmark */}
                <div
                  className={`mt-6 transition-all duration-500 ${
                    stepStates[index]?.cardVisible
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-0'
                  }`}
                >
                  <CheckCircle2 
                    className="w-8 h-8"
                    strokeWidth={2}
                    style={{
                      color: index === 2 && stepStates[index]?.card3Transformed ? '#2D6A6A' : '#5A8A72',
                      transition: 'color 500ms ease-out',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key benefits */}
        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">65%</div>
              <p className="text-sm font-semibold text-foreground mb-1">Of Denials Go Unworked</p>
              <p className="text-foreground/70 text-sm">Don't let recoverable revenue slip away</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">Zero Risk</div>
              <p className="text-sm font-semibold text-foreground mb-1">Performance-Based Only</p>
              <p className="text-foreground/70 text-sm">Pay only from successfully recovered amounts</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">90 Days</div>
              <p className="text-sm font-semibold text-foreground mb-1">Industry Recovery Timeline</p>
              <p className="text-foreground/70 text-sm">When denials get proper attention, results follow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
