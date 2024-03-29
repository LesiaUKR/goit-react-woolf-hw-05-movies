import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a661ef86e324b3ea2edd4f22cf9fb615';

export async function getTrendingMovies() {
  const response = await axios.get('trending/all/day', {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
}

export async function getMovieDetails(movieId) {
  const response = await axios.get(`movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
}

export async function getMovieSearch(query) {
  const response = await axios.get(`search/movie`, {
    params: {
      api_key: API_KEY,
      query: query,
    },
  });
  return response.data.results;
}
export async function getMovieCredits(movieId) {
  const response = await axios.get(`movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return response.data;
}

export async function getMovieReview(movieId) {
  const response = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
}
