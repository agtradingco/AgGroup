import PlaceholderImage from './ui/PlaceholderImage'

export default function PartnerLogo({ partner }) {
  return (
    <div className="card card-hover group flex flex-col items-center justify-center gap-3 p-6 text-center">
      <div className="flex h-20 w-full items-center justify-center overflow-hidden">
        <PlaceholderImage
          src={partner.logo}
          alt={partner.alt}
          label={partner.name}
          aspect="aspect-[3/1]"
        />
      </div>
      <div>
        <h3 className="text-base font-semibold text-ink-900">{partner.name}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent-600">
          {partner.relationship}
        </p>
        <p className="mt-1 text-xs text-ink-500">{partner.category}</p>
      </div>
    </div>
  )
}