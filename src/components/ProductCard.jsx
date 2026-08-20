import PlaceholderImage from './ui/PlaceholderImage'
import Button from './ui/Button'

export default function ProductCard({ product }) {
  return (
    <article className="card card-hover group flex flex-col overflow-hidden">
      <div className="relative">
        <PlaceholderImage
          src={product.image}
          alt={product.alt}
          label={product.name}
          aspect="aspect-[4/3]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-800 shadow-sm">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-600">
          {product.brand}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-ink-900">
          {product.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
          {product.description}
        </p>
        <div className="mt-6">
          <Button to="/contact" variant="outline" className="w-full">
            Enquire About This Product
          </Button>
        </div>
      </div>
    </article>
  )
}