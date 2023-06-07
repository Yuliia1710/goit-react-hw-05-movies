import { getPopularMoviesFromApi } from '../servises/api';
import { useEffect, useState } from 'react';
import MoviesLayout from 'components/MoviesLayout/MoviesLayout';
import Title from 'components/Title/Title';

const Home = () => {
  const [arrayOfMovies, setArrayOfMovies] = useState(null);

  useEffect(() => {
    getPopularMoviesFromApi().then(data => {
      setArrayOfMovies(data.results);
    });
  }, []);

  return (
    <>
      {!arrayOfMovies && <p>There is no results</p>}
      {arrayOfMovies && <Title text="Trending today" />}
      {arrayOfMovies && <MoviesLayout arrayOfMovies={arrayOfMovies} />}
    </>
  );
};

export default Home;
