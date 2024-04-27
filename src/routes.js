import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import NotFound from 'pages/NotFound';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const InTheatresPage = lazy(() => import('./pages/InTheatresPage'));
const PersonsPage = lazy(() => import('./pages/PersonsPage'));
const TvShowsPage = lazy(() => import('./pages/TvShowsPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const PersonDetailsPage = lazy(() => import('./pages/PersonDetailsPage'));
const TvShowsDetailsPage = lazy(() => import('./pages/TvShowsDetailsPage'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() =>
  import('./components/MovieReviews/MovieReviews')
);

export const LazyRoutes = () => {
  return (
    <div>
      <Suspense fallback={<Loader isLoading={true} />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="/theatres" element={<InTheatresPage />} />
          <Route path="/persons" element={<PersonsPage />} />
          <Route path="/persons/:personId" element={<PersonDetailsPage />} />
          <Route path="/tvShows" element={<TvShowsPage />} />
          <Route path="/tvShows/:tvShowId" element={<TvShowsDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
