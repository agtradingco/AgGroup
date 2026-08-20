import Seo from '../components/Seo'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import ProductCard from '../components/ProductCard'
import BusinessCard from '../components/BusinessCard'
import FounderCard from '../components/FounderCard'
import PartnerLogo from '../components/PartnerLogo'
import { company } from '../data/company'
import { products } from '../data/products'
import { businesses } from '../data/businesses'
import { founders } from '../data/founders'
import { partners } from '../data/partners'
import { eventPhotos } from '../data/events'

export default function Home() {
  return (
    <>
      <Seo
        title="Trading, Distribution & Channel Partners in Jammu & Kashmir"
        description="A&G Group is a Jammu & Kashmir-based trading, distribution, and channel-partner group operating through A&G Trading and Co. and A&G Channel Partners across food, FMCG, agriculture, fertilizers, cement, and building solutions."
        path="/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-950">
        <Container className="section-padding pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
                Established {company.established} &middot; Jammu & Kashmir
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                A modern trading, distribution & channel-partner group
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-200/85">
                {company.tagline}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/products" variant="accent">
                  Explore Our Products
                </Button>
                <Button to="/about" variant="outline-light">
                  Learn About A&G Group
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-end">
                  <PlaceholderImage
                    src="/images/events/current-group.jpeg"
                    alt="A&G Group business photograph"
                    label="A&G Group"
                    aspect="aspect-[3/4]"
                  />
                </div>
                <div>
                  <PlaceholderImage
                    src="/images/events/event-1.jpeg"
                    alt="A&G Group company event photograph"
                    label="Company Events"
                    aspect="aspect-[3/4]"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-b border-brand-100 bg-white">
        <Container className="py-12 sm:py-14">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {company.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl font-semibold text-brand-700 sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-ink-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quick intro / two businesses */}
      <section className="border-b border-brand-100 bg-white">
        <Container className="section-padding">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="Two complementary businesses under one group"
                description="A&G Group operates through A&G Trading and Co. and A&G Channel Partners — two firms built around the same objective: dependable trading, distribution, and channel partnerships for Jammu & Kashmir."
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/about" variant="primary">
                  Our Story
                </Button>
                <Button to="/businesses" variant="outline">
                  Explore Our Businesses
                </Button>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {company.businesses.map((b) => (
                <article key={b.name} className="card p-6">
                  <h3 className="text-lg font-semibold text-ink-900">{b.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {b.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Businesses */}
      <section className="section-padding">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What We Do"
              title="Four business areas, one dependable group"
              description="From our own product portfolio to FMCG distribution, building materials, and agricultural supply — A&G Group connects products and brands with the regional market."
            />
            <Button to="/businesses" variant="outline" className="shrink-0">
              View All Businesses
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {businesses.map((b) => (
              <BusinessCard key={b.id} business={b} />
            ))}
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="border-y border-brand-100 bg-white">
        <Container className="section-padding">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Our Products"
              title="The Shaheen portfolio"
              description="A&G Group's own primary consumer product brand, built around quality rice and staple food products."
            />
            <Button to="/products" variant="outline" className="shrink-0">
              View All Products
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* Partners */}
      <section className="section-padding">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Our Partners"
              title="Relationships with established national brands"
              description="A&G Group works with recognized organizations across FMCG, cement, building solutions, and agricultural supply."
            />
            <Button to="/partners" variant="outline" className="shrink-0">
              View All Partners
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {partners.map((p) => (
              <PartnerLogo key={p.id} partner={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="border-y border-brand-100 bg-white">
        <Container className="section-padding">
          <SectionHeading
            eyebrow="What Partners Say"
            title="Trusted across Jammu & Kashmir"
            description="Retailers, wholesalers, dealers, and channel partners who work with A&G Group."
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
            {company.testimonials.map((t) => (
              <figure key={t.name} className="card flex flex-col p-8">
                <svg
                  className="h-8 w-8 text-brand-200"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="mt-4 flex-1 leading-relaxed text-ink-600">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-semibold text-ink-900">{t.name}</p>
                  <p className="text-sm text-accent-600">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="border-b border-brand-100 bg-white">
        <Container className="section-padding">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Built in 2023, growing across Jammu & Kashmir"
                description="A&G Group was established in 2023 with a clear ambition: to build a dependable trading and distribution business rooted in Jammu & Kashmir — developing its own products while building lasting relationships with national brands."
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/journey" variant="primary">
                  Our Journey
                </Button>
                <Button to="/about" variant="outline">
                  More About Us
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              <PlaceholderImage
                src="/images/events/company-established.jpeg"
                alt="A&G Group company milestone photograph"
                label="Company Milestones"
                aspect="aspect-[16/10]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Founders */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="The people behind A&G Group"
            description="A&G Group was created and continues to grow under the leadership of its two co-founders."
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            {founders.map((f) => (
              <FounderCard key={f.id} founder={f} />
            ))}
          </div>
        </Container>
      </section>

      {/* Events / Company photography */}
      <section className="border-t border-brand-100 bg-white">
        <Container className="section-padding">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Company & Events"
              title="Moments from our journey"
              description="Photographs from company events, partnerships, and business activity across our journey."
            />
            <Button to="/journey" variant="outline" className="shrink-0">
              View Journey
            </Button>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {eventPhotos.map((e) => (
              <figure key={e.id} className="card card-hover overflow-hidden">
                <PlaceholderImage
                  src={e.image}
                  alt={e.alt}
                  label={e.title}
                  aspect="aspect-[4/3]"
                />
                <figcaption className="p-4">
                  <h3 className="text-base font-semibold text-ink-900">{e.title}</h3>
                  <p className="mt-1 text-sm text-ink-600">{e.description}</p>
                </figcaption>
              </figure>
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
                Let's build a dependable business relationship
              </h2>
              <p className="mt-4 text-lg text-cream-200/85">
                Whether you're looking for products, distribution, or
                partnership opportunities, our team is ready to hear from you.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button to="/contact" variant="accent">
                Contact Us
              </Button>
              <Button href={company.emailHref} variant="outline-light">
                {company.email}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}