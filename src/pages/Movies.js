import { Box } from 'components/Box/Box';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../services/moviesApi';
import styled from 'styled-components';
// import TextField from '@mui/material/TextField';
import { BsSearch } from 'react-icons/bs';
import toast from 'react-hot-toast';

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
    <Box as="main" p={5}>
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

const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  display: inline-block;
  width: 200px;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  border: none;
  border-bottom: ${p => p.theme.borders.normal};
  padding: ${p => p.theme.space[2]};
  outline-color: ${p => p.theme.colors.secondary};

  ::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

const Button = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  /* outline: none; */

  :hover {
    opacity: 1;
  }
`;
