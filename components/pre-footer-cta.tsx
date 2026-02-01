'use client'

import { Button } from '@/components/ui/button'

export function PreFooterCTA() {
  const handleCalendarClick = () => {
    // Open Google Calendar booking link
    window.open('https://calendar.app.google/SJhXM3dSKe11UBYs5', '_blank')
  }

  return (
    <section className="py-16 sm:py-20 bg-secondary text-secondary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          className="text-3xl sm:text-4xl font-bold mb-6 text-balance"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Running a PT clinic is hard. Billing shouldn't make it harder.
        </h2>
        
        <Button
          onClick={handleCalendarClick}
          size="lg"
          className="bg-muted hover:bg-primary text-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5"
          style={{
            boxShadow: '0 4px 6px rgba(45, 106, 106, 0.2)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(45, 106, 106, 0.35)'
            e.currentTarget.style.backgroundColor = '#2D6A6A'
            e.currentTarget.style.color = 'white'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(45, 106, 106, 0.2)'
            e.currentTarget.style.backgroundColor = '#D4C5B0'
            e.currentTarget.style.color = '#2C2C2C'
          }}
        >
          Schedule Free Consultation
        </Button>
      </div>
    </section>
  )
}
