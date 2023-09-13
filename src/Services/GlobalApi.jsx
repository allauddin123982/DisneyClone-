import axios from "axios";
//https://api.themoviedb.org/3/movie/popular?api_key=5830a6d251b6dbf9c9723fa3c08ed2b5
const movieUrl = "https://api.themoviedb.org/3";
const apiKey = "5830a6d251b6dbf9c9723fa3c08ed2b5";

const movieByGenreBaseURL = "https://api.themoviedb.org/3/discover/movie";
const apiKey2 = "5830a6d251b6dbf9c9723fa3c08ed2b5";

const popular = axios.get(`${movieUrl}/movie/popular?api_key=${apiKey}`);

const getMovieByGenreId = (id) => axios.get(`${movieByGenreBaseURL}?api_key=${apiKey2}&with_genres=${id}`);

export default { popular, getMovieByGenreId };
