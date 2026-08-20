import { Link } from 'react-router-dom'

export default function Logo({ dark = false, className = '' }) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-3 ${className}`}
      aria-label="A&G Group — Home"
    >
      <span className="flex h-10 w-10 overflow-hidden rounded-md">
        <img
          src="/images/branding/logo.jpeg"
          alt="A&G Group logo"
          className="h-full w-full object-cover"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-semibold ${dark ? 'text-white' : 'text-ink-900'}`}>
          A&G Group
        </span>
        <span className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] ${dark ? 'text-cream-200/80' : 'text-ink-400'}`}>
          Trading · Distribution · Partners
        </span>
      </span>
    </Link>
  )
}