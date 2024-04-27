import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import { text } from './helpers/text';

const HomePage = lazy(() => import('./pages/HomePage'));
const InTheatresPage = lazy(() => import('./pages/InTheatresPage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const PersonsPage = lazy(() => import('./pages/PersonsPage'));
const TvShowsPage = lazy(() => import('./pages/TvShowsPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const PersonDetailsPage = lazy(() => import('./pages/PersonDetailsPage'));
const TvShowsDetailsPage = lazy(() => import('./pages/TvShowsDetailsPage'));

export const routes = [
  {
    name: text.Home,
    path: '/',
    component: <HomePage />,
    disabled: false,
  },
  {
    name: text.InTheatres,
    path: '/inTheatres',
    component: <InTheatresPage />,
    disabled: false,
  },
  {
    name: text.SearchMovies,
    path: '/searchMovies',
    component: <MoviesPage />,
    disabled: false,
  },
  {
    name: text.Persons,
    path: '/persons',
    component: <PersonsPage />,
    disabled: false,
  },
  {
    name: text.TvShows,
    path: '/tvShows',
    component: <TvShowsPage />,
    disabled: false,
  },
  {
    name: text.MovieDetails,
    path: '/movies/:movieId',
    component: <MovieDetailsPage />,
    disabled: true,
  },
  {
    name: text.PersonDetails,
    path: '/persons/:personId',
    component: <PersonDetailsPage />,
    disabled: true,
  },
  {
    name: text.TvShowsDetails,
    path: '/tvShows/:tvShowsId',
    component: <TvShowsDetailsPage />,
    disabled: true,
  },
];

export const LazyRoutes = () => {
  return (
    <div>
      <Suspense fallback={<Loader isLoading={true} />}>
        <Routes>
          {routes.map(route => (
            <Route
              key={route.name}
              path={route.path}
              element={route.component}
            />
          ))}
          <Route component={HomePage} />
        </Routes>
      </Suspense>
    </div>
  );
};
