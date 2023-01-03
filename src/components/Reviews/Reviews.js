import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/moviesApi';
import { AuthorInfo, Item } from './Reviews.styled';
import { Box } from 'components/Box/Box';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState('');

  useEffect(() => {
    if (movieId === null) return;

    async function getReviews(movieId) {
      const response = await API.getReviewsByID(movieId);
      console.log('reviews', response);
      setReviews(response.data);
    }

    getReviews(movieId);
  }, [movieId]);

  if (!reviews) return <div>We don`t have any reviews for this movie.</div>;

  return (
    <Box as="section" px={5}>
      <ul>
        {reviews.results.map(({ id, author, content }) => (
          <Item key={id}>
            <AuthorInfo>Author: {author}</AuthorInfo>
            <p>{content}</p>
            <br></br>
          </Item>
        ))}
      </ul>
    </Box>
  );
};
