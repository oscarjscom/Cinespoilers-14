import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 mt-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl">🎬</span>
          <span className="font-bold text-base">
            <span className="text-primary">Cine</span>
            <span className="text-foreground">SpoilerS</span>
          </span>
        </Link>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/movies" className="hover:text-primary transition-colors">Movies</Link>
        </div>

        <p className="text-xs text-muted-foreground">© 2026 CineSpoilerS. All rights reserved.</p>
      </div>
    </footer>
  )
}
