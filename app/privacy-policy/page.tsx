'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-foreground/70 mb-8">
            <strong>Last Updated: January 27, 2026</strong>
          </p>

          <p>
            This Privacy Policy explains how Mohenara RCM (&quot;Mohenara,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares information when you visit our website (the &quot;Site&quot;) or contact us.
          </p>
          <p>
            This Site is intended for healthcare providers, practice managers, billing partners, and other business users. It is not intended for patients seeking medical care.
          </p>
          <div className="bg-accent/10 border border-accent rounded-lg p-4 my-6">
            <p className="text-foreground font-semibold mb-0">
              IMPORTANT: Please do not submit Protected Health Information (&quot;PHI&quot;) or patient-specific data through this Site or our contact forms. If you need to discuss PHI, we will provide a secure method after engagement and (if applicable) a Business Associate Agreement (BAA).
            </p>
          </div>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Information We Collect</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">A. Information You Provide to Us</h3>
          <p>When you fill out a form, request information, or contact us, we may collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name</li>
            <li>Business/practice name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Practice information you choose to provide (e.g., specialty, denial volume, payer mix at a high level)</li>
          </ul>
          <p>We do not ask for patient identifiers or PHI through the Site.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">B. Information Collected Automatically (Cookies/Log Data)</h3>
          <p>When you use the Site, we may automatically collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address</li>
            <li>Browser/device type</li>
            <li>Pages viewed and time spent</li>
            <li>Referring/exit pages</li>
          </ul>
          <p>We may use cookies or similar technologies for basic site functionality and (if enabled) analytics.</p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">C. Information from Third Parties</h3>
          <p>
            If you interact with us on third-party platforms (e.g., LinkedIn) or book a meeting using a scheduling tool embedded on our Site, those providers may share information with us consistent with their own policies.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. How We Use Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to inquiries and schedule discussions</li>
            <li>Provide information about our services</li>
            <li>Improve our Site and communications</li>
            <li>Maintain security, prevent fraud/abuse, and enforce our policies</li>
            <li>Comply with legal obligations</li>
          </ul>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. How We Share Information</h2>
          <p>We may share information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>With service providers who help operate our Site and business (e.g., hosting, email, scheduling, analytics) under appropriate confidentiality/security terms</li>
            <li>If required by law, subpoena, or legal process</li>
            <li>In connection with a business transaction (e.g., merger, acquisition), subject to this Privacy Policy</li>
          </ul>
          <p>We do not sell your personal information.</p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Cookies & Analytics</h2>
          <p>
            We may use cookies for essential site operation. If analytics are enabled, we may use tools (e.g., website analytics providers) that collect usage information via cookies or similar technologies.
          </p>
          <p>
            You can control cookies through your browser settings. If we implement a cookie banner/consent tool, you may also manage preferences there.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Data Security</h2>
          <p>
            We use administrative, technical, and organizational measures designed to protect information from unauthorized access, use, or disclosure. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Data Retention</h2>
          <p>
            We retain personal information as long as necessary for legitimate business purposes (e.g., responding to requests, maintaining business records) and to comply with legal obligations.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Your Choices</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You may request access, correction, or deletion of your personal information by contacting us (see &quot;Contact Us&quot;).</li>
            <li>You may opt out of non-essential marketing emails by using the unsubscribe link in our emails.</li>
          </ul>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">8. California Privacy Rights (If Applicable)</h2>
          <p>
            If applicable, California residents may have rights to request access to, deletion of, or information about our collection and disclosure of personal information. We do not sell personal information.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">9. Children</h2>
          <p>
            The Site is not intended for children and we do not knowingly collect personal information from children.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The &quot;Last Updated&quot; date indicates when it was last revised.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">11. Contact Us</h2>
          <p>For privacy questions or requests:</p>
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
