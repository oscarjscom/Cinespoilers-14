import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { PLACEHOLDER_MOVIES } from '@/data/movies'

export function MovieDetailPage() {
  const { id } = useParams()
  const movie = PLACEHOLDER_MOVIES.find((m) => m.id === Number(id))

  if (!movie) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-4">
        <p className="text-5xl">🎬</p>
        <p className="text-foreground font-semibold text-xl">Movie not found</p>
        <Button asChild variant="outline" className="rounded-full border-white/20 hover:bg-white/5">
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    )
  }

  return (
    <div>
      {/* Full-bleed backdrop */}
      <div className="relative h-80 md:h-[480px] w-full overflow-hidden mb-0">
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />

        {/* Back button overlay */}
        <div className="absolute top-4 left-4">
          <Link
            to="/movies"
            className="flex items-center gap-2 text-sm text-white/80 hover:text-white bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 transition-all hover:bg-black/60"
          >
            ← Back to Movies
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 px-4 -mt-24 relative z-10">
        {/* Poster */}
        <div className="shrink-0 hidden md:block">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-44 h-64 object-cover rounded-2xl shadow-2xl border-2 border-white/10"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4 flex-1 pt-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold tracking-wider uppercase text-primary border border-primary/40 rounded-full px-3 py-1 bg-primary/10">
              {movie.genre}
            </span>
            <span className="text-muted-foreground text-sm">·</span>
            <span className="text-muted-foreground text-sm">{movie.release_date.slice(0, 4)}</span>
            {movie.runtime && (
              <>
                <span className="text-muted-foreground text-sm">·</span>
                <span className="text-muted-foreground text-sm">{movie.runtime} min</span>
              </>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">{movie.title}</h1>

          <div className="flex items-center gap-2">
            <span className="text-primary text-2xl leading-none">★</span>
            <span className="font-bold text-foreground text-2xl">{movie.vote_average}</span>
            <span className="text-muted-foreground text-sm">/ 10</span>
          </div>

          <div className="w-16 h-0.5 bg-primary/40 rounded-full" />

          <p className="text-muted-foreground leading-relaxed max-w-2xl">{movie.overview}</p>

          <div className="flex gap-3 mt-2 flex-wrap">
            <Button size="lg" className="rounded-full px-8 font-semibold shadow-lg">
              🎟️ Buy Ticket
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 hover:bg-white/5">
              <Link to="/movies">← Back</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
