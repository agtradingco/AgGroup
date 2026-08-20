import Seo from '../components/Seo'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import FounderCard from '../components/FounderCard'
import PageHero from '../components/PageHero'
import { company } from '../data/company'
import { founders } from '../data/founders'

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about A&G Group — established in 2023, operating through A&G Trading and Co. and A&G Channel Partners across food, FMCG, agriculture, fertilizers, cement, and building solutions in Jammu & Kashmir."
        path="/about"
      />
      <PageHero
        eyebrow="About A&G Group"
        title="A growing regional business group"
        description="Established in 2023, A&G Group is a Jammu & Kashmir-based trading, distribution, and channel-partner organization built on dependable supply, strong relationships, and quality products."
      />

      {/* Our story */}
      <section className="border-b border-brand-100 bg-white">
        <Container className="section-padding">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Built from a clear ambition in 2023"
                description="A&G Group's journey began in 2023 with the objective of building a strong, dependable business serving customers and partners across Jammu & Kashmir."
              />
              <div className="mt-6 space-y-4">
                <p className="leading-relaxed text-ink-600">
                  The business has developed around two complementary areas:
                  building and developing its own product portfolio, and
                  establishing strong relationships with recognized national
                  and industry brands.
                </p>
                <p className="leading-relaxed text-ink-600">
                  Today, A&G Group operates with a focus on distribution,
                  channel partnerships, product quality, reliability, and
                  long-term business relationships.
                </p>
              </div>
            </div>
            <PlaceholderImage
              src="/images/events/early-development.jpeg"
              alt="A&G Group early business development photograph"
              label="Our Story"
              aspect="aspect-[16/10]"
            />
          </div>
        </Container>
      </section>

      {/* Two businesses */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            eyebrow="Our Businesses"
            title="Two firms, one group identity"
            description="A&G Group is the umbrella identity representing two complementary businesses."
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            {company.businesses.map((b) => (
              <article key={b.name} className="card p-8">
                <h3 className="text-2xl font-semibold text-ink-900">{b.name}</h3>
                <p className="mt-4 leading-relaxed text-ink-600">
                  {b.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="border-y border-brand-100 bg-white">
        <Container className="section-padding">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="card bg-brand-900 p-8 text-white">
              <h3 className="text-2xl font-semibold">Our Vision</h3>
              <p className="mt-4 leading-relaxed text-cream-200/85">
                {company.vision}
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-semibold">What Drives Us</h3>
              <ul className="mt-4 space-y-3 text-ink-600">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                  <span>
                    <strong className="text-ink-900">Quality:</strong>{' '}
                    {company.mission.quality}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                  <span>
                    <strong className="text-ink-900">Relationships:</strong>{' '}
                    {company.mission.relationships}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                  <span>
                    <strong className="text-ink-900">Reliability:</strong>{' '}
                    {company.mission.reliability}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                  <span>
                    <strong className="text-ink-900">Integrity:</strong>{' '}
                    {company.mission.integrity}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                  <span>
                    <strong className="text-ink-900">Regional Growth:</strong>{' '}
                    {company.mission.regionalGrowth}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Founders */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="Our Co-Founders"
            description="The people behind the creation and growth of A&G Group."
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            {founders.map((f) => (
              <FounderCard key={f.id} founder={f} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-900">
        <Container className="section-padding">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Want to learn more about working with us?
              </h2>
              <p className="mt-4 text-lg text-cream-200/85">
                Reach out for business enquiries, distribution partnerships, or
                general questions.
              </p>
            </div>
            <Button to="/contact" variant="accent">
              Contact A&G Group
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}