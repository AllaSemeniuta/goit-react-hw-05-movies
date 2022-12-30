import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import * as API from '../services/moviesApi';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  console.log(movieId);

  const [movieDetails, setMovieDetails] = useState('');

  useEffect(() => {
    if (movieId === null) return;

    async function getMovieDetails(movieId) {
      const response = await API.getMovieDetails(movieId);
      console.log(response);
      setMovieDetails(response.data);
    }

    getMovieDetails(movieId);
  }, [movieId]);

  if (movieDetails === '') return null;

  const { title, overview, genres } = movieDetails;
  console.log(genres);
  return (
    <main>
      <Link to={location.state?.from ?? '/'}>Go Back</Link>
      <h1>{title}</h1>
      <p>User Score: </p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>
        {' '}
        {genres.map(({ name }) => (
          <div key={name}>{name}</div>
        ))}
      </p>{' '}
      <p>Additional information</p>
      <Link to="cast" state={{ from: location.state?.from ?? '/' }}>
        Cast
      </Link>
      <Link to="reviews" state={{ from: location.state?.from ?? '/' }}>
        Reviews{' '}
      </Link>
      <Outlet />
    </main>
  );
};
