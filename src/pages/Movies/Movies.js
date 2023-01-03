import { Box } from 'components/Box/Box';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../../services/moviesApi';
// import TextField from '@mui/material/TextField';
import { BsSearch } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { SearchForm, Input, Button } from './Movies.styled';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [serchMovies, setSearchMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('query');

  useEffect(() => {
    if (searchValue === null) return;
    getSearchMovies(searchValue);
  }, [searchValue]);

  const getSearchMovies = async query => {
    try {
      if (query.length === 0) return;
      const response = await API.getSearchQueryMovies(query);

      if (response.data.total_results === 0) {
        toast.error(
          'We didn`t find movies by this query. Please, try another movie name.'
        );
        setSearchMovies(null);
        return;
      }
      setSearchMovies(response.data.results);
    } catch {
      throw new Error();
    }
  };

  const onChangeInput = e => {
    const value = e.target.form.elements.query.value.trim().toLowerCase();
    setQuery(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });

    getSearchMovies(query);
  };

  return (
    <Box as="main" px={5}>
      <SearchForm onSubmit={onSubmit}>
        <label>
          <Input
            name="query"
            value={query}
            onChange={onChangeInput}
            placeholder="Enter movie title"
            autoComplete="off"
          />
        </label>
        <Button type="submit">
          <BsSearch />
        </Button>
      </SearchForm>
      {serchMovies !== null && <MoviesList data={serchMovies} />}
    </Box>
  );
};
