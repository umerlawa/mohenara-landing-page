'use client'

import React from "react"

import { Button } from '@/components/ui/button'
import { Mail, Phone } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    practiceName: '',
    contactName: '',
    email: '',
    phone: '',
    denialVolume: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      // In a real application, you would send this to an API endpoint
      await new Promise(resolve => setTimeout(resolve, 500))
      setSubmitMessage('Thank you! We\'ll review your submission and contact you shortly.')
      setFormData({
        practiceName: '',
        contactName: '',
        email: '',
        phone: '',
        denialVolume: '',
        message: '',
      })
      setTimeout(() => setSubmitMessage(''), 5000)
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Practice Name and Contact Name */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Practice Name
                </label>
                <input
                  type="text"
                  name="practiceName"
                  value={formData.practiceName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-muted rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your practice name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Contact Name
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-muted rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-muted rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-muted rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            {/* Denial Volume Dropdown */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Estimated Monthly Denial Volume
              </label>
              <select
                name="denialVolume"
                value={formData.denialVolume}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-muted rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select a range</option>
                <option value="5-10">5-10 denials</option>
                <option value="10-25">10-25 denials</option>
                <option value="25-50">25-50 denials</option>
                <option value="50+">50+ denials</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Message (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-background border border-muted rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="Tell us about your specific challenges..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-secondary text-primary-foreground py-3 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5"
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
              {isSubmitting ? 'Submitting...' : 'Request Free Audit'}
            </Button>

            {/* Success Message */}
            {submitMessage && (
              <div className="p-4 bg-accent/10 border border-accent rounded-lg text-accent text-center">
                {submitMessage}
              </div>
            )}
          </form>

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
                href="tel:(646) 933-8860"
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
