import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Movies', to: '/movies' },
]

export function Navbar() {
  const { pathname } = useLocation()

  return (
    <header className="border-b border-border px-6 py-3 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 font-semibold text-foreground text-sm">
        CineSpoilerS
      </Link>
      <nav className="flex gap-6">
        {links.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className={cn(
              'text-sm transition-colors hover:text-foreground',
              pathname === to ? 'text-foreground font-medium' : 'text-muted-foreground'
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
