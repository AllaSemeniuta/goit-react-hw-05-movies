import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/moviesApi';
import { AuthorInfo, Item } from './Reviews.styled';
import { Box } from 'components/Box/Box';

import BeatLoader from 'react-spinners/BeatLoader';

const Reviews = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (movieId === null) return;

    async function getReviews(movieId) {
      try {
        setIsLoading(true);
        const response = await API.getReviewsByID(movieId);
        setReviews(response.data.results);
        // console.log('response.data.results', response.data.results);
        // console.log('reviews', reviews);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getReviews(movieId);
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <BeatLoader color="#36d7b7" />
      ) : (
        <Box as="section" px={5}>
          {reviews.length > 0 ? (
            <ul>
              {reviews.map(({ id, author, content }) => (
                <Item key={id}>
                  <AuthorInfo>Author: {author}</AuthorInfo>
                  <p>{content}</p>
                  <br></br>
                </Item>
              ))}
            </ul>
          ) : (
            <div>We don`t have any reviews for this movie.</div>
          )}
        </Box>
      )}
    </>
  );
};

export default Reviews;
