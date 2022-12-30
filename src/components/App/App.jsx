import SharedLayout from 'components/SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { MovieDetails } from 'pages/MovieDetails';
import { Movies } from 'pages/Movies';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Toaster />
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
    </>
  );
};
