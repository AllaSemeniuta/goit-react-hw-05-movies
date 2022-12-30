import { useLocation } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import {
  Title,
  MovieTitle,
  NavItem,
  GalleryList,
  GalleryItem,
} from './MoviesList.styled';
import defaultPoster from '../../images/defaultPoster.png';

const posterPath = 'https://image.tmdb.org/t/p/w500';

export const MoviesList = ({ data, title }) => {
  const location = useLocation();
  return (
    <Box as="main" p={5}>
      {title && <Title>{title}</Title>}
      <GalleryList>
        {data.map(({ title, id, poster_path }) => {
          const image = poster_path
            ? `${posterPath}${poster_path}`
            : defaultPoster;

          return (
            <GalleryItem key={id}>
              <NavItem to={`/movies/${id}`} state={{ from: location }}>
                <img src={image} alt={title} />
                <MovieTitle>{title}</MovieTitle>
              </NavItem>
            </GalleryItem>
          );
        })}
      </GalleryList>
    </Box>
  );
};
