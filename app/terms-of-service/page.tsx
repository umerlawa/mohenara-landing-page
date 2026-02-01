'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <article className="prose prose-slate max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
            Terms of Service
          </h1>
          <p className="text-foreground/70 mb-8">
            <strong>Last Updated: January 27, 2026</strong>
          </p>

          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the Mohenara RCM website (the &quot;Site&quot;). By using the Site, you agree to these Terms.
          </p>
          <p>
            If you are entering into denial management or revenue cycle services with us, those services are governed by a separate written agreement (e.g., Master Services Agreement and Statement of Work), not these website Terms.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Who We Are</h2>
          <p>
            &quot;Mohenara RCM&quot; is a brand name used by MOHENARA LLC, a Wyoming limited liability company (&quot;Mohenara,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;).
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Site Purpose</h2>
          <p>
            The Site provides information about our services and allows you to contact us. The Site is intended for business users (e.g., healthcare practices and billing partners). It is not intended for patients seeking medical advice or emergency assistance.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Do Not Submit PHI Through the Site</h2>
          <p>
            Do not submit protected health information (&quot;PHI&quot;) or patient identifiers through Site forms, chat, or email links on this Site. If PHI is required for services, we will provide a secure method under an appropriate agreement.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. No Medical, Billing, or Legal Advice</h2>
          <p>
            Content on this Site is provided for general informational purposes only and is not medical, billing, coding, compliance, or legal advice. You should consult qualified professionals for advice specific to your situation.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Site for unlawful purposes</li>
            <li>Attempt to access or interfere with the Site&apos;s systems or security</li>
            <li>Upload malware or conduct automated scraping without our permission</li>
            <li>Misrepresent your identity or authority</li>
          </ul>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Intellectual Property</h2>
          <p>
            The Site and its content (text, graphics, logos, design, and other materials) are owned by Mohenara or its licensors and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our written permission.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Third-Party Links & Tools</h2>
          <p>
            The Site may include links or embedded tools provided by third parties (e.g., scheduling tools). We are not responsible for third-party content, services, or privacy practices.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">8. Disclaimer of Warranties</h2>
          <p className="uppercase">
            THE SITE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">9. Limitation of Liability</h2>
          <p className="uppercase">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, MOHENARA WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING FROM OR RELATED TO YOUR USE OF (OR INABILITY TO USE) THE SITE.
          </p>
          <p className="uppercase">
            OUR TOTAL LIABILITY FOR ANY CLAIM RELATING TO THE SITE WILL NOT EXCEED USD $100.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">10. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Mohenara from claims arising out of your misuse of the Site or violation of these Terms.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">11. Governing Law; Venue</h2>
          <p>
            These Terms are governed by the laws of the State of Wyoming, without regard to conflict of laws rules. You agree that any dispute relating to these Terms or the Site will be brought exclusively in state or federal courts located in Wyoming, and you consent to personal jurisdiction there.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">12. Changes</h2>
          <p>
            We may update these Terms at any time by posting an updated version on the Site. Your continued use of the Site after changes become effective constitutes acceptance of the updated Terms.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">13. Contact</h2>
          <p>Questions about these Terms:</p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:hello@mohenara.com" className="text-primary hover:text-primary/80">
              hello@mohenara.com
            </a>
          </p>
          <p>
            <strong>Mailing Address:</strong><br />
            MOHENARA LLC<br />
            30 N Gould St #50941<br />
            Sheridan, WY 82801
          </p>
        </article>
      </div>
    </main>
  )
}
