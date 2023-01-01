import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import * as API from '../services/moviesApi';
import defaultPoster from '../images/defaultPoster.png';
import { Box } from 'components/Box/Box';
import styled from 'styled-components';
import Title from 'components/Title/Title';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState('');

  console.log('location', location);
  console.log(movieId);
  const posterPath = 'https://image.tmdb.org/t/p/w500';

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

  const { title, overview, genres, vote_average, release_date, poster_path } =
    movieDetails;
  const score = ((vote_average * 100) / 10).toFixed();
  const year = release_date.slice(0, 4);
  console.log(genres);
  const image = poster_path ? `${posterPath}${poster_path}` : defaultPoster;

  return (
    <main>
      <Link to={location.state?.from ?? '/'}>Go Back</Link>
      <Box as="section" display="flex" flexWrap="wrap" gridGap={6}>
        <Image src={image} alt={title} />
        <Box flexGrow="2" maxWidth="600px">
          <Title as="h1">
            {title} {''}({year})
          </Title>
          <p>User Score: {score}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {' '}
            {genres.map(({ name }) => (
              <span key={name}>{name}</span>
            ))}
          </p>{' '}
        </Box>
      </Box>
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

const Image = styled.img`
  width: 280px;
  border-radius: ${p => p.theme.radii.normal};
  height: 400px;
  object-fit: cover;
  /* margin-bottom: ${p => p.theme.space[2]}; */
`;
