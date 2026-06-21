import { useParams, Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { PLACEHOLDER_MOVIES } from '@/data/movies'

export function MovieDetailPage() {
  const { id } = useParams()
  const movie = PLACEHOLDER_MOVIES.find((m) => m.id === Number(id))

  if (!movie) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-4">
        <p className="text-muted-foreground text-lg">Movie not found.</p>
        <Button asChild variant="outline">
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    )
  }

  return (
    <div>
      {/* Backdrop */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden rounded-xl mb-8">
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="flex flex-col md:flex-row gap-8 px-2">
        {/* Poster */}
        <img
          src={movie.image}
          alt={movie.title}
          className="w-40 h-60 object-cover rounded-xl shadow-lg shrink-0 -mt-24 relative z-10 hidden md:block"
        />

        {/* Info */}
        <div className="flex flex-col gap-3 flex-1">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">{movie.genre}</Badge>
            <span className="text-muted-foreground text-sm">{movie.release_date.slice(0, 4)}</span>
            <span className="text-muted-foreground text-sm">{movie.runtime} min</span>
          </div>

          <h1 className="text-4xl font-bold text-foreground">{movie.title}</h1>

          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="font-semibold text-foreground">{movie.vote_average}</span>
            <span className="text-muted-foreground text-sm">/ 10</span>
          </div>

          <Separator className="my-2" />

          <p className="text-muted-foreground leading-relaxed">{movie.overview}</p>

          <div className="flex gap-3 mt-4">
            <Button size="lg" className="rounded-full px-8">
              🎟️ Buy Ticket
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/movies">← Back</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
