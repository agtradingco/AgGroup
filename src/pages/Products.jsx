import Seo from '../components/Seo'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import ProductCard from '../components/ProductCard'
import PageHero from '../components/PageHero'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import { products, productBrand } from '../data/products'

export default function Products() {
  return (
    <>
      <Seo
        title="Shaheen Products — Rice, Atta & Tea"
        description="Explore the Shaheen product portfolio — Shaheen Silk Rice, Shaheen Sella Rice, Shaheen Premium Range Basmati Rice, Shaheen Premium Chakki Aata, Shaheen Namkeen Tea, and Shaheen CTC Royal Tea from A&G Group in Jammu & Kashmir."
        path="/products"
      />
      <PageHero
        eyebrow="Our Products"
        title="The Shaheen portfolio"
        description="A&G Group's own primary consumer product brand, built around rice, staple foods, and tea."
      />

      {/* Product grid */}
      <section className="border-b border-brand-100 bg-white">
        <Container className="section-padding">
          <SectionHeading
            eyebrow="Shaheen"
            title={`The ${productBrand.name} range`}
            description={productBrand.description}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* Product info note */}
      <section className="section-padding">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <PlaceholderImage
              src="/images/products/silk-rice.jpeg"
              alt="Shaheen product packaging"
              label="Shaheen Packaging"
              aspect="aspect-[4/3]"
            />
            <div>
              <SectionHeading
                eyebrow="Quality & Care"
                title="A portfolio built to grow"
                description="The Shaheen portfolio represents the group's own product development — from premium rice varieties to staple foods and tea."
              />
              <div className="mt-6 space-y-4">
                <p className="leading-relaxed text-ink-600">
                  The Shaheen range represents the group's commitment to
                  quality and consistency — from carefully selected premium rice
                  varieties to trusted staple foods and teas, every product is
                  built around the same standard of reliability.
                </p>
                <p className="leading-relaxed text-ink-600">
                  Distribution is supported across Jammu & Kashmir through
                  retail, wholesale, and dealer networks, bringing dependable
                  supply to businesses and communities across the region.
                </p>
              </div>
              <div className="mt-8">
                <Button to="/contact" variant="primary">
                  Product & Distribution Enquiry
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}