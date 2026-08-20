import { useState, useEffect } from 'react'

/**
 * PlaceholderImage renders an <img> to a stable image path.
 *
 * Real photographs can later replace placeholders by dropping files into
 * public/images/ without any code changes — as long as the filenames match.
 *
 * If the image fails to load (file not yet present), a labeled SVG
 * placeholder is shown instead so the layout keeps its intended structure.
 */
export default function PlaceholderImage({
  src,
  alt,
  label,
  className = '',
  aspect = 'aspect-[4/3]',
  priority = false,
}) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [src])

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex w-full ${aspect} items-center justify-center bg-gradient-to-br from-brand-100 to-brand-200`}
      >
        <div className="flex flex-col items-center gap-2 p-4 text-center">
          <svg
            className="h-12 w-12 text-brand-600/60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.5-3.5a2 2 0 0 0-2.8 0L6 20" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-800">
            {label}
          </span>
          <span className="text-[11px] text-brand-700/70">Image placeholder</span>
        </div>
      </div>
    )
  }

  return (
    <div className={`w-full ${aspect} overflow-hidden`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        className={`h-full w-full object-cover ${className}`}
        onError={() => setFailed(true)}
      />
    </div>
  )
}