import { useState, useEffect } from 'react';
import * as API from '../services/moviesApi';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    async function getTrendMovies() {
      const data = await API.trendMoviesFetch();
      setTrendMovies(data.results);
    }
    getTrendMovies();
  }, []);

  if (!trendMovies) return;

  return <MoviesList data={trendMovies} title="Trending today" />;
};
