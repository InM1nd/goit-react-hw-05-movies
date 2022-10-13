import axios from "axios";

const API_KEY = '954f1b86b9dc3130076fbe6df39c08ca'; 
const BASE_URL = `https://api.themoviedb.org/3`;

// https://api.themoviedb.org/3/movie/550?api_key=954f1b86b9dc3130076fbe6df39c08ca

// /trending/get-trending  - https://api.themoviedb.org/3/trending/all/day?api_key=954f1b86b9dc3130076fbe6df39c08ca
// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

// /search/search-movies - https://api.themoviedb.org/3/search/movie?api_key=954f1b86b9dc3130076fbe6df39c08ca&language=en-US&page=1&include_adult=false
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

// /movies/get-movie-details - https://api.themoviedb.org/3/movie/{movie_id}?api_key=954f1b86b9dc3130076fbe6df39c08ca&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// /movies/get-movie-credits -  https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=954f1b86b9dc3130076fbe6df39c08ca&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

// /movies/get-movie-reviews - https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=954f1b86b9dc3130076fbe6df39c08ca&language=en-US&page=1
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1


export async function fetchMovieTrending(){
    return await axios(
        `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
 }

 export async function fetchSearchMovies(movieName){
    return await axios(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${movieName}&page=1`
        
    );
 }

 export async function fetchMovieDetails(movie_id){
    return await axios(
        `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
    );
 }

 export async function fetchMovieCredits(movie_id){
    return await axios(
        `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
    );
 }

 export async function fetchMovieReviews(movie_id){
    return await axios(
        `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
 }






