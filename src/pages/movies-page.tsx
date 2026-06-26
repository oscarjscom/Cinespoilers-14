import { useState } from 'react'
import { MovieCard } from '@/components/movies/movie-card'
import { PLACEHOLDER_MOVIES } from '@/data/movies'

export function MoviesPage() {
  const [search, setSearch] = useState('')

  const filtered = PLACEHOLDER_MOVIES.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="py-10 px-4">
      {/* Header */}
      <div className="mb-10">
        <p className="text-primary text-xs font-bold tracking-[0.25em] uppercase mb-2">All Movies</p>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Browse the catalog</h1>
            <p className="text-muted-foreground mt-1 text-sm">
              <span className="text-primary font-semibold">{filtered.length}</span>{' '}
              movie{filtered.length !== 1 ? 's' : ''} available
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-xs w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">🔍</span>
            <input
              type="text"
              placeholder="Search movies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-card border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 gap-3">
          <p className="text-5xl">🎬</p>
          <p className="text-foreground font-semibold text-xl">No results</p>
          <p className="text-muted-foreground text-sm">Try a different search term.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {filtered.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </div>
  )
}
