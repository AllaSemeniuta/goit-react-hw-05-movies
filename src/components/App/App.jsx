import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
// import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
// import { Movies } from 'pages/Movies/Movies';
// import { GlobalStyle } from '../GlobalStyle';
// import { Cast } from '../Cast/Cast';
// import { Reviews } from '../Reviews/Reviews';
// import SharedLayout from 'components/SharedLayout/SharedLayout';
// import { Home } from 'pages/Home/Home';

const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const GlobalStyle = lazy(() => import('../GlobalStyle'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));
const Home = lazy(() => import('pages/Home/Home'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Toaster />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
            <Route path="*" element={<div>NotFind </div>} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
