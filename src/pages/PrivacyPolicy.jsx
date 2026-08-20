import Seo from '../components/Seo'
import Container from '../components/ui/Container'
import PageHero from '../components/PageHero'
import { company } from '../data/company'

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Learn how A&G Group collects, uses, and protects your personal information when you use our website or contact us."
        path="/privacy-policy"
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How A&G Group collects, uses, and protects your personal information."
      />

      <section className="border-b border-brand-100 bg-white">
        <Container className="section-padding">
          <div className="mx-auto max-w-3xl space-y-10">
            <div>
              <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
              <p className="mt-3 leading-relaxed text-ink-600">
                When you use the enquiry form on our website, we may collect the
                following information:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-ink-600">
                <li>Your full name</li>
                <li>Your phone number</li>
                <li>Your email address</li>
                <li>The type of enquiry you are making</li>
                <li>The content of your message</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
              <p className="mt-3 leading-relaxed text-ink-600">
                The information you provide is used solely to respond to your
                enquiry and to assist with product, distribution, and
                partnership-related questions. We do not sell, rent, or share
                your personal information with third parties, except where
                required to fulfil your request or comply with applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">3. Data Security</h2>
              <p className="mt-3 leading-relaxed text-ink-600">
                We take reasonable precautions to protect your personal
                information and maintain appropriate safeguards to secure any
                data shared with us. However, no method of transmission over the
                internet is completely secure, and we cannot guarantee absolute
                security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">4. Third-Party Links</h2>
              <p className="mt-3 leading-relaxed text-ink-600">
                Our website may contain links to external websites, including
                our social media profiles and partner websites. We are not
                responsible for the privacy practices or content of those
                external sites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">5. Cookies</h2>
              <p className="mt-3 leading-relaxed text-ink-600">
                Our website does not currently use tracking cookies. If we
                introduce analytics or other features that use cookies in the
                future, this policy will be updated accordingly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">6. Your Rights</h2>
              <p className="mt-3 leading-relaxed text-ink-600">
                You may request access to, correction of, or deletion of any
                personal information you have shared with us. To make such a
                request, please contact us using the details below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">7. Contact Us</h2>
              <p className="mt-3 leading-relaxed text-ink-600">
                If you have any questions about this Privacy Policy or how your
                data is handled, please contact us:
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