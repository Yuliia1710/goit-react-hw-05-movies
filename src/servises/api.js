const BASE_URL = 'https://api.themoviedb.org/3/';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjQ4Y2ZiNzMzZTA2ZWI2N2Y0MWUxMWVmOGI0YTM0OSIsInN1YiI6IjY0N2JhZTcyY2Y0YjhiMDEwMzFlNjVlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h8JLVvBGFANshw9twf7FdsxjXcyLe5sPG_024DWVO5o',
  },
};

//1
// export function getPopularMoviesFromApi() {
//   const URL = `${BASE_URL}trending/all/day?language=en-US`;

//   return fetch(URL, options).then(response => response.json());
// }

export function getPopularMoviesFromApi() {
  const URL = `${BASE_URL}movie/popular`;

  return fetch(URL, options).then(response => response.json());
}
//api.themoviedb.org/3/movie/{movie_id}

//2

export function getMovieByIdFromApi(movie_id) {
  const URL = `${BASE_URL}movie/${movie_id}`;

  return fetch(URL, options).then(response => response.json());
}

//3

//api.themoviedb.org/3/search/movie?query=cat&include_adult=false&language=en-US&page=1

export function getMovieByQueryFromApi(query) {
  const URL = `${BASE_URL}search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

  return fetch(URL, options).then(response => response.json());
}

export function getMovieCastByIdFromApi(movie_id) {
  const URL = `${BASE_URL}movie/${movie_id}/credits`;

  return fetch(URL, options).then(response => response.json());
}

export function getMovieReviewsByIdFromApi(movie_id) {
  const URL = `${BASE_URL}movie/${movie_id}/reviews`;

  return fetch(URL, options).then(response => response.json());
}
