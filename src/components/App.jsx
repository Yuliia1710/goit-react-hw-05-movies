import { Route, Routes } from 'react-router-dom';
// import Home from '../pages/Home';
// import Movies from '../pages/Movies';
// import MovieDetails from '../pages/MovieDetails';
// import NotFound from '../pages/NotFound';
// import SharedLayout from './SharedLayout/SharedLayout';
// import Cast from '../components/Cast/Cast';
// import Reviews from '../components/Reviews/Reviews';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
