import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { MovieCard } from '@/components/movies/movie-card'
import { PLACEHOLDER_MOVIES } from '@/data/movies'

export function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex flex-col items-center text-center py-32 px-4 gap-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <span className="relative z-10 text-primary text-xs font-bold tracking-[0.25em] uppercase bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5">
          🎬 Cinema Experience
        </span>

        <h1 className="relative z-10 text-5xl md:text-7xl font-bold tracking-tight text-foreground max-w-3xl leading-[1.1]">
          Discover your{' '}
          <span className="text-primary">next</span>{' '}
          great movie.
        </h1>

        <p className="relative z-10 text-muted-foreground max-w-lg text-lg leading-relaxed">
          Browse the catalog, explore spoiler-free details and prepare your perfect cinema night.
        </p>

        <div className="relative z-10 flex items-center gap-3 mt-2">
          <Button asChild size="lg" className="rounded-full px-8 font-semibold shadow-lg">
            <Link to="/movies">Explore Movies</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-white/20 hover:bg-white/5">
            <Link to="/movies">View All →</Link>
          </Button>
        </div>
      </section>

      {/* Featured */}
      <section className="px-4 pb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-primary text-xs font-bold tracking-widest uppercase mb-1">Trending now</p>
            <h2 className="text-3xl font-bold text-foreground">Featured Movies</h2>
          </div>
          <Link
            to="/movies"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            See all →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {PLACEHOLDER_MOVIES.slice(0, 6).map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  )
}
