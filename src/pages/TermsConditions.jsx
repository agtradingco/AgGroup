import Seo from '../components/Seo'
import Container from '../components/ui/Container'
import PageHero from '../components/PageHero'
import { company } from '../data/company'

export default function TermsConditions() {
  return (
    <>
      <Seo
        title="Terms & Conditions"
        description="Read the terms and conditions governing the use of the A&G Group website and the services offered by our group."
        path="/terms-conditions"
      />
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The terms governing your use of the A&G Group website and services."
      />

      <section className="border-b border-brand-100 bg-white">
        <Container className="section-padding">
          <div className="mx-auto max-w-3xl space-y-10">
            <div>
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p className="mt-3 leading-relaxed text-ink-600">
                By accessing or using this website, you agree to be bound by
                these Terms & Conditions. If you do not agree with any part of
                these terms, please do not use this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">2. Use of the Website</h2>
              <p className="mt-3 leading-relaxed text-ink-600">
                This website is provided for informational purposes and to
                facilitate business enquiries. You agree to use this website
                lawfully and not to misuse, disrupt, or attempt to gain
                unauthorised access to any part of the site or its systems.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">3. Products & Services</h2>
              <p className="mt-3 leading-relaxed text-ink-600">
                Information about products, brands, and services displayed on
                this website is provided for general information. Availability,
                specifications, and pricing may change without notice. For
                accurate and current details, please contact us directly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">4. Brand & Partnership Information</h2>
              <p className="mt-3 leading-relaxed text-ink-600">
                References to partner brands, including SMC Foods Ltd.,
                UltraTech, IFFCO, IPL, NFL, Chambal, and TMW Fertilizers, are
                made to describe our business relationships. All partner brand
                names and logos remain the property of their respective owners.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
              <p className="mt-3 leading-relaxed text-ink-600">
                All content on this website — including text, graphics, logos,
                images, and the overall design — is the property of {company.name}{' '}
                unless otherwise stated. You may not reproduce, distribute, or
                use any content from this website without prior written
                permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
              <p className="mt-3 leading-relaxed text-ink-600">
                A&G Group shall not be liable for any direct, indirect,
                incidental, or consequential damages arising from your use of
                this website or reliance on any information provided herein.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">7. Governing Law</h2>
              <p className="mt-3 leading-relaxed text-ink-600">
                These terms are governed by the laws of India. Any disputes
                arising in connection with these terms shall be subject to the
                jurisdiction of the courts in Jammu & Kashmir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">8. Contact Us</h2>
              <p className="mt-3 leading-relaxed text-ink-600">
                If you have any questions about these Terms & Conditions, please
                contact us:
              </p>
              <address className="mt-3 space-y-1 not-italic text-ink-600">
                <p>{company.name}</p>
                <p>{company.address.full}</p>
                <p>
                  Phone:{' '}
                  <a href={company.phoneHref} className="text-brand-700 hover:underline">
                    {company.phone}
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a href={company.emailHref} className="text-brand-700 hover:underline">
                    {company.email}
                  </a>
                </p>
              </address>
            </div>

            <p className="border-t border-ink-100 pt-6 text-sm text-ink-400">
              Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}