import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import * as API from '../services/moviesApi';
import defaultPoster from '../images/defaultPoster.png';
import { Box } from 'components/Box/Box';
import styled from 'styled-components';
import Title from 'components/Title/Title';
import { AiOutlineArrowLeft } from 'react-icons/ai';
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
              <span key={name}>{name}</span>
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

const Image = styled.img`
  width: 280px;
  border-radius: ${p => p.theme.radii.normal};
  height: 400px;
  object-fit: cover;
  /* margin-bottom: ${p => p.theme.space[2]}; */
`;

const BackLinkText = styled.span`
  margin-left: ${p => p.theme.space[3]};
`;

const BackLink = styled(NavLink)`
  margin-bottom: ${p => p.theme.space[3]};
  display: flex;
  text-decoration: none;
  cursor: pointer;
  /* justify-content: center; */
  align-items: center;
`;

const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  margin-bottom: ${p => p.theme.space[3]};
`;

const AdditionalInfoLink = styled(NavLink)`
  /* margin-top: ${p => p.theme.space[3]}; */
  text-decoration: none;
  border: ${p => p.theme.borders.normal};
  padding: ${p => p.theme.space[2]};
  border-radius: ${p => p.theme.radii.normal};

  :not(:last-child) {
    margin-right: ${p => p.theme.space[3]};
  }

  /* cursor: pointer; */
`;
