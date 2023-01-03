import { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import * as API from '../../services/moviesApi';
import defaultPoster from '../../images/defaultPoster.png';
import { Box } from 'components/Box/Box';
import Title from 'components/Title/Title';
import {
  Image,
  BackLinkText,
  BackLink,
  Text,
  AdditionalInfoLink,
} from './MovieDetails.styled';

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
    <Box as="main" px={5} pb={5}>
      <BackLink to={location.state?.from ?? '/'}>
        <AiOutlineArrowLeft />
        <BackLinkText> Go Back</BackLinkText>
      </BackLink>
      <Box as="section" display="flex" flexWrap="wrap" gridGap={6} mb={5}>
        <Image src={image} alt={title} />
        <Box flexGrow="2" maxWidth="600px">
          <Title as="h1">
            {title} {''}({year}){' '}
          </Title>
          <Text>User Score: {score}%</Text>
          <Title as="h2">Overview</Title>
          <Text>{overview}</Text>
          <Title as="h2">Genres</Title>
          <Text>
            {' '}
            {genres.map(({ name }) => (
              <span key={name}> {name} </span>
            ))}
          </Text>{' '}
        </Box>
      </Box>
      <Box as="section">
        <Title as="h3" mb="20px">
          Additional information
        </Title>
        <Box mb={5} mt={3} p={3}>
          <AdditionalInfoLink
            to="cast"
            state={{ from: location.state?.from ?? '/' }}
          >
            Cast
          </AdditionalInfoLink>
          <AdditionalInfoLink
            to="reviews"
            state={{ from: location.state?.from ?? '/' }}
          >
            Reviews{' '}
          </AdditionalInfoLink>
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
};
