import Title from 'components/Title/Title';
import SearchForm from '../components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { getMovieByQueryFromApi } from '../servises/api';
import MoviesLayout from 'components/MoviesLayout/MoviesLayout';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  // const [query, setQuery] = useState(null);
  const [arrayOfMovies, setArrayOfMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showLoader, setShowLoader] = useState(false);
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      setShowLoader(true);
      getMovieByQueryFromApi(query)
        .then(data => {
          setArrayOfMovies(data.results);
        })
        .finally(() => {
          setShowLoader(false);
        });
    }
  }, [query]);

  const onSubmitForm = res => {
    setSearchParams({ query: res });
    // setQuery(res);
    // console.log(res);

    getMovieByQueryFromApi(res).then(data => {
      setArrayOfMovies(data.results);
    });
  };

  return (
    <div>
      {showLoader && <Loader />}
      <Title text="Searching movie" />
      <SearchForm onSubmit={onSubmitForm} />
      {arrayOfMovies && <MoviesLayout arrayOfMovies={arrayOfMovies} />}
    </div>
  );
};

export default Movies;
