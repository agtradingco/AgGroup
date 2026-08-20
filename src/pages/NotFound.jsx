import Seo from '../components/Seo'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you're looking for could not be found."
      />
      <section className="section-padding">
        <Container>
          <div className="mx-auto max-w-xl py-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
              404
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-ink-900 sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              The page you're looking for doesn't exist or may have been moved.
            </p>
            <div className="mt-8">
              <Button to="/" variant="primary">
                Back to Home
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}