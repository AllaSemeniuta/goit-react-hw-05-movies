import { useState, useEffect } from 'react';
import * as API from '../../services/moviesApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
// import BeatLoader from 'react-spinners/BeatLoader';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTrendMovies() {
      try {
        // setIsLoading(true);
        const data = await API.trendMoviesFetch();
        setTrendMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        // setIsLoading(false);
      }
    }
    getTrendMovies();
  }, []);
  // console.log('trendMovies', trendMovies);

  if (!trendMovies) return;

  return <MoviesList data={trendMovies} titleOfSection="Trending today" />;
};

export default Home;
