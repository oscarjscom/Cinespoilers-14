import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Movies', to: '/movies' },
]

export function Navbar() {
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2.5">
        <span className="text-2xl leading-none">🎬</span>
        <span className="font-bold text-lg tracking-tight">
          <span className="text-primary">Cine</span>
          <span className="text-foreground">SpoilerS</span>
        </span>
      </Link>

      <nav className="flex items-center gap-1">
        {links.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              pathname === to
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
