import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'ae73804bd189becf74915bbee0851e24';

const obj = {
  params: {
    api_key: API_KEY,
  },
};

export const trendMoviesFetch = async () => {
  const response = await axios.get('/trending/movie/week', obj);
  // console.log(response.data);
  return response.data;
};

export const getMovieDetails = async movie_id => {
  const response = await axios.get(`/movie/${movie_id}`, obj);
  // console.log(response);
  return response;
};

export const getCastByID = async movie_id => {
  const response = await axios.get(`/movie/${movie_id}/credits`, obj);
  return response;
};

export const getReviewsByID = async movie_id => {
  const response = await axios.get(`/movie/${movie_id}/reviews`, obj);
  return response;
};

export const getSearchQueryMovies = async query => {
  const paramsForQuery = { ...obj };
  paramsForQuery.params.query = query;
  const response = await axios.get(`/search/movie`, paramsForQuery);
  return response;
};

export * from './moviesApi';
