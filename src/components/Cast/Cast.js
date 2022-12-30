import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/moviesApi';

export const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCast] = useState('');

  useEffect(() => {
    if (movieId === null) return;

    async function getCast(movieId) {
      const response = await API.getCastByID(movieId);
      console.log(response.data.cast);
      setCast(response.data.cast);
    }

    getCast(movieId);
  }, [movieId]);

  if (casts === '') return null;

  return (
    <ul>
      {casts.map(item => (
        <li key={item.name}>
          <p>{item.name}</p>
          <p>Character: {item.character}</p>
        </li>
      ))}
    </ul>
  );
};
