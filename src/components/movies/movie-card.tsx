import { Link } from 'react-router-dom'

interface MovieCardProps {
  id: number
  title: string
  genre: string
  image: string
  vote_average?: number
  release_date?: string
}

export function MovieCard({ id, title, genre, image, vote_average, release_date }: MovieCardProps) {
  return (
    <Link to={`/movies/${id}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card">
        <img
          src={image}
          alt={title}
          className="w-full h-96 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
        />

        {/* Top badge */}
        {vote_average && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs font-bold text-primary border border-primary/30">
            ★ {vote_average}
          </div>
        )}

        {/* Bottom overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary mb-2 border border-primary/40 rounded-full px-2.5 py-0.5 bg-primary/10">
            {genre}
          </span>
          <p className="text-white text-lg font-bold leading-tight line-clamp-2">{title}</p>
          {release_date && (
            <p className="text-white/50 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {release_date.slice(0, 4)}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}
