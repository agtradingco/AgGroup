import PlaceholderImage from './ui/PlaceholderImage'

export default function FounderCard({ founder }) {
  return (
    <article className="card card-hover flex flex-col items-center overflow-hidden p-8 text-center">
      <div className="w-40 overflow-hidden rounded-full">
        <PlaceholderImage
          src={founder.image}
          alt={founder.alt}
          label={founder.name}
          aspect="aspect-square"
        />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-ink-900">{founder.name}</h3>
      <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-accent-600">
        {founder.title}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-ink-600">
        {founder.description}
      </p>
    </article>
  )
}