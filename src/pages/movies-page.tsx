import { useState } from 'react'
import { Input } from '@/components/ui/input'
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
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
          All Movies
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Browse the catalog</h1>
            <p className="text-muted-foreground mt-1">
              {filtered.length} movie{filtered.length !== 1 ? 's' : ''} available
            </p>
          </div>
          <Input
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-xs"
          />
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 gap-2">
          <p className="text-4xl">🎬</p>
          <p className="text-muted-foreground text-lg">No movies found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </div>
  )
}
