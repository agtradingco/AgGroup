export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-ink-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}