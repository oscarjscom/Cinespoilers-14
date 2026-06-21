import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-4 flex items-center justify-between text-xs text-muted-foreground">
      <Link to="/" className="flex items-center gap-2 text-foreground font-medium text-sm">
        CineSpoilerS
      </Link>
      <span>© 2026</span>
    </footer>
  )
}
