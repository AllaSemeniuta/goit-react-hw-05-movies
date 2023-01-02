import { Box } from 'components/Box/Box';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/moviesApi';
import defaultCastAvatar from '../../images/defaultCastAvatar.png';
import { Image, Text } from './Cast.styled';
// import BeatLoader from 'react-spinners/BeatLoader';

export const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCast] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  const posterPath = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    try {
      if (movieId === null) return;

      async function getCast(movieId) {
        const response = await API.getCastByID(movieId);
        console.log('response.data.cast', response.data);
        setCast(response.data.cast);
      }
      // console.log(isLoading);
      // setIsLoading(true);
      getCast(movieId);
      // setIsLoading(false);
    } catch (error) {
      // setIsLoading(false);
    }
  }, [movieId]);

  if (casts === '')
    return (
      // <>{isLoading && <BeatLoader color="#36d7b7" />}</>
      <div>No casts information</div>
    );

  return (
    // {/* {isLoading && <BeatLoader color="#36d7b7" />} */}
    <Box as="section" px={5}>
      <ul>
        {casts.map(({ profile_path, name, character }) => {
          const image = profile_path
            ? `${posterPath}${profile_path}`
            : defaultCastAvatar;

          return (
            <li key={name}>
              <Image src={image} alt={name} />
              <Text>{name}</Text>
              <Text>
                <span>Character:</span> {character}
              </Text>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};
