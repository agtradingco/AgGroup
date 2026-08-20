import Seo from '../components/Seo'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import PageHero from '../components/PageHero'
import { journey, eventPhotos } from '../data/events'

export default function Journey() {
  return (
    <>
      <Seo
        title="Our Journey"
        description="Follow A&G Group's journey from its establishment in 2023 to today — building trusted brands and dependable supply networks across Jammu & Kashmir."
        path="/journey"
      />
      <PageHero
        eyebrow="Our Journey"
        title="From 2023 to today"
        description="A visual timeline of A&G Group's development — from its establishment to the expanding business group it is today."
      />

      {/* Timeline */}
      <section className="border-b border-brand-100 bg-white">
        <Container className="section-padding">
          <SectionHeading
            eyebrow="Timeline"
            title="How A&G Group grew"
            description="Exact dates and event descriptions will be refined as company photographs and milestones are reviewed."
          />
          <ol className="relative mt-16 space-y-12 border-l-2 border-brand-200 pl-8 sm:pl-12">
            {journey.map((item) => (
              <li key={item.id} className="relative">
                <span
                  className="absolute -left-[41px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-brand-600 bg-white sm:-left-[57px]"
                  aria-hidden="true"
                >
                  <span className="h-2 w-2 rounded-full bg-brand-600" />
                </span>
                <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
                  <PlaceholderImage
                    src={item.image}
                    alt={item.alt}
                    label={item.title}
                    aspect="aspect-[16/9]"
                  />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                      {item.year}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-ink-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-ink-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Event gallery */}
      <section className="section-padding">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Company Photography"
              title="Moments from our journey"
              description="Photographs from company events, partnerships, and business activity. Captions and details will be added as photographs are reviewed."
            />
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
                Be part of the next chapter
              </h2>
              <p className="mt-4 text-lg text-cream-200/85">
                Whether you're a retailer, wholesaler, dealer, farmer, or brand
                partner — we'd love to hear from you.
              </p>
            </div>
            <Button to="/contact" variant="accent">
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}