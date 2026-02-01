'use client'

import React, { useEffect } from "react"

import { Mail, Phone } from 'lucide-react'

export function Contact() {
  useEffect(() => {
    // Load HubSpot forms script
    const script = document.createElement('script')
    script.src = 'https://js-na2.hsforms.net/forms/embed/245032432.js'
    script.defer = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://js-na2.hsforms.net/forms/embed/245032432.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <section id="contact" className="py-20 sm:py-28 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Ready to Recover Your Revenue?
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Request your free denial audit today. No credit card required.
          </p>
        </div>

        <div className="bg-card border border-muted rounded-lg p-8 sm:p-12 shadow-sm">
          {/* HubSpot Form Embed */}
          <div
            className="hs-form-frame"
            data-region="na2"
            data-form-id="10b76293-7f46-400d-b6e1-90063edd3aff"
            data-portal-id="245032432"
          ></div>

          {/* Alternative Contact */}
          <div className="mt-12 pt-8 border-t border-muted">
            <p className="text-center text-foreground/70 mb-6">
              Or reach out directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:hello@mohenara.com"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <Mail className="w-5 h-5" />
                hello@mohenara.com
              </a>
              <a
                href="tel:+16469338860"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <Phone className="w-5 h-5" />
                (646) 933-8860
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
