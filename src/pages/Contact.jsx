import { useState } from 'react'
import Seo from '../components/Seo'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import PageHero from '../components/PageHero'
import { company } from '../data/company'

const enquiryTypes = [
  {
    value: 'product',
    label: 'Product Enquiry (Shaheen)',
  },
  {
    value: 'dealer',
    label: 'Dealer / Retailer Enquiry',
  },
  {
    value: 'wholesale',
    label: 'Wholesale Enquiry',
  },
  {
    value: 'partnership',
    label: 'Business Partnership',
  },
  {
    value: 'fmcg',
    label: 'FMCG Enquiry',
  },
  {
    value: 'building',
    label: 'Building Materials Enquiry',
  },
  {
    value: 'agriculture',
    label: 'Agricultural / Fertilizer Enquiry',
  },
  {
    value: 'general',
    label: 'General Enquiry',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'product',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const enquiryLabel =
      enquiryTypes.find((t) => t.value === form.enquiryType)?.label ||
      form.enquiryType

    const subject = encodeURIComponent(
      `Website Enquiry: ${enquiryLabel} — ${form.name || 'New Enquiry'}`
    )

    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Phone: ${form.phone || 'Not provided'}`,
        `Email: ${form.email || 'Not provided'}`,
        `Enquiry Type: ${enquiryLabel}`,
        '',
        'Message:',
        form.message,
        '',
        '---',
        'Sent from the A&G Group website contact form.',
      ].join('\n')
    )

    // Open the visitor's email client with the enquiry pre-filled.
    // For production, you can replace this with EmailJS by adding your
    // service ID, template ID, and public key below and calling
    // emailjs.send() instead.
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`

    setSubmitted(true)
  }

  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact A&G Group — Sofi Buildings, Sheikhpora, Budgam 191111, Jammu & Kashmir. Call +91-84918-89167 or email info@aggroupco.in for product, distribution, and partnership enquiries."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Get in touch with A&G Group"
        description="For product enquiries, distribution opportunities, dealer partnerships, or general questions — our team is ready to help."
      />

      <section className="border-b border-brand-100 bg-white">
        <Container className="section-padding">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Contact details */}
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Contact Details"
                title="Reach us directly"
                description="Our team is available for business enquiries across products, distribution, and channel partnerships."
              />
              <address className="mt-8 space-y-6 not-italic">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink-900">Address</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-600">
                      {company.address.line1}
                      <br />
                      {company.address.line2}
                      <br />
                      {company.address.line3}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink-900">Phone</h3>
                    <p className="mt-1 text-sm text-ink-600">
                      <a
                        href={company.phoneHref}
                        className="transition-colors hover:text-brand-700"
                      >
                        {company.phone}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 6L2 7" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink-900">Email</h3>
                    <p className="mt-1 text-sm text-ink-600">
                      <a
                        href={company.emailHref}
                        className="transition-colors hover:text-brand-700"
                      >
                        {company.email}
                      </a>
                    </p>
                  </div>
                </div>
              </address>

              {/* Map */}
              <div className="mt-8">
                <h3 className="font-semibold text-ink-900">Location</h3>
                <div className="mt-3 overflow-hidden rounded-lg border border-ink-100">
                  <iframe
                    title="A&G Group location — Budgam, Jammu & Kashmir"
                    src="https://www.google.com/maps?q=Budgam,+Jammu+and+Kashmir+191111&output=embed"
                    className="h-64 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Enquiry form */}
            <div className="lg:col-span-7">
              <div className="card p-8">
                <SectionHeading
                  eyebrow="Enquiry"
                  title="Send us an enquiry"
                  description="Tell us what you're interested in and we'll get back to you."
                />
                {submitted ? (
                  <div className="mt-8 rounded-lg bg-brand-50 p-8 text-center">
                    <h3 className="text-xl font-semibold text-brand-900">
                      Thank you, {form.name || 'for your enquiry'}!
                    </h3>
                    <p className="mt-3 text-ink-600">
                      Your email client should have opened with your enquiry
                      pre-filled. Please press send to deliver it to our team.
                    </p>
                    <p className="mt-3 text-sm text-ink-500">
                      If your email client did not open, please email us directly
                      at{' '}
                      <a
                        href={company.emailHref}
                        className="font-semibold text-brand-700"
                      >
                        {company.email}
                      </a>
                    </p>
                    <p className="mt-3 text-sm text-ink-500">
                      For urgent enquiries, please call{' '}
                      <a
                        href={company.phoneHref}
                        className="font-semibold text-brand-700"
                      >
                        {company.phone}
                      </a>
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-ink-800"
                        >
                          Full Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="mt-2 w-full rounded-md border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 transition-colors placeholder:text-ink-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-ink-800"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91"
                          className="mt-2 w-full rounded-md border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 transition-colors placeholder:text-ink-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-ink-800"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="mt-2 w-full rounded-md border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 transition-colors placeholder:text-ink-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="enquiryType"
                        className="block text-sm font-medium text-ink-800"
                      >
                        Enquiry Type
                      </label>
                      <select
                        id="enquiryType"
                        name="enquiryType"
                        value={form.enquiryType}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-md border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 transition-colors focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
                      >
                        {enquiryTypes.map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-ink-800"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your enquiry..."
                        className="mt-2 w-full resize-y rounded-md border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 transition-colors placeholder:text-ink-400 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full sm:w-auto">
                      Submit Enquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}