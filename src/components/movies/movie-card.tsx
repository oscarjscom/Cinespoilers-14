import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

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
    <Link to={`/movies/${id}`}>
      <Card className="overflow-hidden group cursor-pointer border-0 p-0">
        <CardContent className="p-0 relative">
          <img
            src={image}
            alt={title}
            className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-5">
            <Badge variant="secondary" className="w-fit text-sm mb-2">
              {genre}
            </Badge>
            <p className="text-white text-xl font-bold leading-tight">{title}</p>
            {vote_average && release_date && (
              <p className="text-white/60 text-sm mt-1">
                ★ {vote_average} · {release_date.slice(0, 4)}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
