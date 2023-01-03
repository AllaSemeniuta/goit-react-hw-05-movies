import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
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

export const MoviesList = ({ data, titleOfSection }) => {
  const location = useLocation();
  return (
    <Box as="main" px={5}>
      {titleOfSection && <Title>{titleOfSection}</Title>}
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

MovieTitle.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape),
  titleOfSection: PropTypes.string,
};
