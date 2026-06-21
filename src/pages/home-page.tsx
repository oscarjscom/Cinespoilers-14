import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { MovieCard } from '@/components/movies/movie-card'
import { PLACEHOLDER_MOVIES } from '@/data/movies'

export function HomePage() {
  return (
    <div>
      <section className="flex flex-col items-center text-center py-28 px-4 gap-6">
        <span className="text-primary text-sm font-medium tracking-widest uppercase border-b border-primary pb-1">
          Cinema Experience
        </span>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-foreground max-w-3xl leading-tight">
          Discover your next movie.
        </h1>
        <p className="text-muted-foreground max-w-xl text-lg">
          Browse movies, explore details and prepare your next cinema experience with CineSpoilerS.
        </p>
        <Button asChild size="lg" className="mt-2 rounded-full px-8">
          <Link to="/movies">Explore Movies</Link>
        </Button>
      </section>

      <section className="px-4 pb-16">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground">Featured Movies</h2>
          <p className="text-muted-foreground text-sm mt-1">Most popular releases right now.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {PLACEHOLDER_MOVIES.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  )
}
