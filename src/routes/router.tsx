import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '@/layouts/main-layout'
import { HomePage } from '@/pages/home-page'
import { MoviesPage } from '@/pages/movies-page'
import { MovieDetailPage } from '@/pages/movie-detail-page'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/movies', element: <MoviesPage /> },
      { path: '/movies/:id', element: <MovieDetailPage /> },
    ],
  },
])
