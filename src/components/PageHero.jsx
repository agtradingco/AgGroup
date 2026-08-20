import Container from './ui/Container'

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="border-b border-brand-100 bg-white">
      <Container className="section-padding pt-14 sm:pt-16 lg:pt-20">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}