import { Link } from 'react-router-dom'

export default function Button({
  to,
  href,
  variant = 'primary',
  children,
  className = '',
  ...props
}) {
  const variantClasses = {
    primary: 'btn-primary',
    accent: 'btn-accent',
    outline: 'btn-outline',
    'outline-light': 'btn-outline-light',
  }

  const classes = `${variantClasses[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}