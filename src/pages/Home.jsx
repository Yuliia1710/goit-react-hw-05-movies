import { getPopularMoviesFromApi } from '../servises/api';
import { useEffect, useState } from 'react';
import MoviesLayout from 'components/MoviesLayout/MoviesLayout';
import Title from 'components/Title/Title';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const [arrayOfMovies, setArrayOfMovies] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    getPopularMoviesFromApi()
      .then(data => {
        setArrayOfMovies(data.results);
      })
      .finally(() => {
        setShowLoader(false);
      });
  }, []);

  return (
    <>
      {showLoader && <Loader />}
      {!arrayOfMovies && <p>There is no results</p>}
      {arrayOfMovies && <Title text="Trending today" />}
      {arrayOfMovies && <MoviesLayout arrayOfMovies={arrayOfMovies} />}
    </>
  );
};

export default Home;
