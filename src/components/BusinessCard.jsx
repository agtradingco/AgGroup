import PlaceholderImage from './ui/PlaceholderImage'
import Button from './ui/Button'

export default function BusinessCard({ business }) {
  return (
    <article className="card card-hover group flex flex-col overflow-hidden">
      <PlaceholderImage
        src={business.image}
        alt={business.alt}
        label={business.shortName}
        aspect="aspect-[3/2]"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-ink-900">{business.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
          {business.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {business.items.map((item) => (
            <li
              key={item}
              className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button to="/contact" variant="outline" className="w-full">
            Make an Enquiry
          </Button>
        </div>
      </div>
    </article>
  )
}