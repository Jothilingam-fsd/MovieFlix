const BASE_URL = 'https://www.omdbapi.com/';
const API_KEY = '4b9c65bc' // Replace with your actual OMDB API key

// Fetch movies by search term or filter
export const fetchMovies = async (query, page = 1, type = '') => {
  try {
    let url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}`;
    if (type) url += `&type=${type}`; // type: movie, series, episode
    const res = await fetch(url);
    const data = await res.json();
    if (data.Response === "False") throw new Error(data.Error);
    return data;
  } catch (err) {
    throw err;
  }
};

// Fetch detailed info by IMDb ID
export const fetchMovieDetails = async (imdbID) => {
  try {
    const url = `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.Response === "False") throw new Error(data.Error);
    return data;
  } catch (err) {
    throw err;
  }
};
