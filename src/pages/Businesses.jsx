import Seo from '../components/Seo'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import BusinessCard from '../components/BusinessCard'
import PageHero from '../components/PageHero'
import { businesses } from '../data/businesses'

export default function Businesses() {
  return (
    <>
      <Seo
        title="Our Businesses"
        description="A&G Group operates across four business areas — Shaheen products, FMCG distribution, building materials & solutions, and agricultural & fertilizer supply in Jammu & Kashmir."
        path="/businesses"
      />
      <PageHero
        eyebrow="Our Businesses"
        title="Four business areas, one dependable group"
        description="From the group's own product portfolio to FMCG distribution, building materials, and agricultural supply — A&G Group connects products and brands with the regional market."
      />

      <section className="border-b border-brand-100 bg-white">
        <Container className="section-padding">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {businesses.map((b) => (
              <BusinessCard key={b.id} business={b} />
            ))}
          </div>
        </Container>
      </section>

      {/* Distribution philosophy */}
      <section className="section-padding">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="How We Work"
                title="A business that connects brands with the regional market"
                description="A&G Group is built around dependable distribution and long-term business relationships."
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Regional distribution',
                'B2B supply',
                'Retail distribution',
                'Wholesale distribution',
                'Dealer relationships',
                'Brand & channel partnerships',
                'Reliable fulfillment',
                'Long-term relationships',
              ].map((item) => (
                <div
                  key={item}
                  className="card flex items-center gap-3 p-4"
                >
                  <svg
                    className="h-5 w-5 shrink-0 text-brand-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span className="text-sm font-medium text-ink-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-900">
        <Container className="section-padding">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Have a business enquiry?
              </h2>
              <p className="mt-4 text-lg text-cream-200/85">
                From product distribution to channel partnerships, our team is
                ready to discuss how we can work together.
              </p>
            </div>
            <Button to="/contact" variant="accent">
              Business Enquiry
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}