'use client'

import Link from 'next/link'
import { Linkedin } from 'lucide-react'

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' },
  ]

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'HIPAA Notice', href: '/hipaa-notice' },
  ]

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-logo)' }}>
              Mohenara
            </h3>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Denial management and recovery solutions for physical therapy practices.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              Navigation
            </h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              Legal
            </h4>
            <nav className="space-y-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@mohenara.com"
                className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
              >
                hello@mohenara.com
              </a>
              <a
                href="tel:(646) 933-8860"
                className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
              >
                (646) 933-8860
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors mt-4"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <p className="text-center text-secondary-foreground/70 text-sm">
            © 2026 Mohenara LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
