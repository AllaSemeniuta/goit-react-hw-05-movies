import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/moviesApi';

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

  if (reviews === '') return;

  return (
    <ul>
      {reviews.results.map(({ id, author, content }) => (
        <li key={id}>
          <p>{author}</p>
          <p>{content}</p>
          <br></br>
        </li>
      ))}
    </ul>
  );
};
