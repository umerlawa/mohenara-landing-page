'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function HipaaNotice() {
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
            HIPAA Compliance Notice
          </h1>
          <p className="text-foreground/70 mb-8">
            <strong>Last Updated: January 27, 2026</strong>
          </p>

          <p>
            Mohenara RCM (&quot;Mohenara,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;) is committed to protecting the privacy and security of health information.
          </p>
          <p>
            This page describes our HIPAA posture as a service provider. It is not a Notice of Privacy Practices for patients. Under HIPAA, covered entities (such as healthcare providers and health plans) provide a Notice of Privacy Practices to individuals, and business associates are not required to create their own Notice of Privacy Practices. If you are a patient, please contact your healthcare provider for its Notice of Privacy Practices and for questions about your records.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Our Role Under HIPAA</h2>
          <p>
            When we perform denial management and related revenue cycle services for a HIPAA-covered healthcare provider or similar client, we may act as a &quot;business associate&quot; under HIPAA.
          </p>
          <p>
            Our handling of Protected Health Information (&quot;PHI&quot;) is governed by our contract with the covered entity, including a Business Associate Agreement (&quot;BAA&quot;) as required.
          </p>
          <p>
            <strong>BAA Availability:</strong> We can provide and sign a BAA with contracted covered entity clients.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. PHI and Our Website</h2>
          <p>
            We do not request PHI through the public website contact form.
          </p>
          <div className="bg-accent/10 border border-accent rounded-lg p-4 my-6">
            <p className="text-foreground font-semibold mb-0">
              DO NOT submit patient names, dates of birth, member IDs, medical record numbers, diagnoses, or any other PHI through this website, web forms, or non-secure email. If PHI is required to start services, we will provide a secure method and access controls.
            </p>
          </div>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Safeguards We Use</h2>
          <p>
            HIPAA requires regulated entities (covered entities and business associates) to implement administrative, physical, and technical safeguards for electronic PHI. We maintain safeguards designed to protect PHI, which may include:
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Administrative Safeguards</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Workforce training on handling sensitive information</li>
            <li>Access provisioning and least-privilege access management</li>
            <li>Written security policies and incident response procedures</li>
            <li>Vendor management, including appropriate agreements where PHI is involved</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Technical Safeguards</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Unique user access controls and authentication</li>
            <li>Audit logging/monitoring where available in client systems</li>
            <li>Encryption in transit and (where applicable) encryption at rest</li>
            <li>Secure password management and multi-factor authentication (MFA)</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Physical Safeguards</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Device security controls and secure work environment procedures (as applicable)</li>
          </ul>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Permitted Uses and Disclosures</h2>
          <p>We use and disclose PHI only as permitted by our BAA and applicable law, including to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Perform services for the covered entity client</li>
            <li>Support quality assurance, security, and operations as allowed by contract</li>
            <li>Comply with legal requirements</li>
          </ul>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Breach Notification</h2>
          <p>
            If a breach of unsecured PHI occurs at or by Mohenara, HIPAA requires business associates to notify the covered entity. We maintain an incident response process and will notify covered entity clients consistent with HIPAA requirements and our BAA.
          </p>

          <hr className="my-8 border-muted" />

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Questions or Complaints</h2>
          <p>
            <strong>If you are a patient:</strong> Contact your healthcare provider or health plan&apos;s HIPAA Privacy Official.
          </p>
          <p>
            <strong>If you are a covered entity client or prospective client</strong> and have questions about our HIPAA practices or need a BAA:
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:compliance@mohenara.com" className="text-primary hover:text-primary/80">
              compliance@mohenara.com
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
