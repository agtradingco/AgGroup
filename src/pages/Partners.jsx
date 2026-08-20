import Seo from '../components/Seo'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import PartnerLogo from '../components/PartnerLogo'
import PageHero from '../components/PageHero'
import { partners } from '../data/partners'

const relationships = [
  {
    type: 'Superstockist',
    description:
      'A&G Group operates as a superstockist for SMC Foods Ltd., supporting FMCG distribution across the region.',
    partnerNames: ['SMC Foods Ltd.'],
  },
  {
    type: 'Channel Partner',
    description:
      'A&G Group operates as a channel partner for UltraTech Cement and UltraTech Building Solutions, supporting cement and building-material distribution.',
    partnerNames: ['UltraTech Cement', 'UltraTech Building Solutions'],
  },
  {
    type: 'Supplier',
    description:
      'A&G Group supplies products associated with these organizations as part of its agricultural and fertilizer business.',
    partnerNames: ['IFFCO', 'IPL', 'NFL', 'Chambal', 'TMW Fertilizers'],
  },
]

export default function Partners() {
  return (
    <>
      <Seo
        title="Partners & Brands"
        description="A&G Group works with established national brands across FMCG, cement, building solutions, and agricultural supply — as superstockist, channel partner, and supplier."
        path="/partners"
      />
      <PageHero
        eyebrow="Partners & Brands"
        title="Relationships with established national brands"
        description="Brand relationships are a significant part of A&G Group's identity. The group works with recognized organizations across FMCG, cement, building solutions, and agricultural supply."
      />

      {/* Relationship types */}
      <section className="border-b border-brand-100 bg-white">
        <Container className="section-padding">
          <SectionHeading
            eyebrow="How We Work Together"
            title="Clearly defined relationships"
            description="Each brand relationship is presented with its accurate commercial role."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {relationships.map((r) => (
              <article key={r.type} className="card p-6">
                <h3 className="text-lg font-semibold text-ink-900">{r.type}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {r.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {r.partnerNames.map((name) => (
                    <li
                      key={name}
                      className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Partner grid */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            eyebrow="Our Network"
            title="Brands we work with"
            description="A&G Group's partner network spans FMCG, cement, building solutions, and agriculture — connecting established brands with the Jammu & Kashmir market."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {partners.map((p) => (
              <PartnerLogo key={p.id} partner={p} />
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-ink-500">
            Exact commercial terminology for each relationship is verified
            before publishing. Partner logos are used with permission where
            applicable.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-900">
        <Container className="section-padding">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Looking for a regional distribution partner?
              </h2>
              <p className="mt-4 text-lg text-cream-200/85">
                We're interested in building strong relationships with
                manufacturers and brands looking to reach the Jammu & Kashmir
                market.
              </p>
            </div>
            <Button to="/contact" variant="accent">
              Partner With Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}