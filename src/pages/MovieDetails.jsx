import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieByIdFromApi } from 'servises/api';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    getMovieByIdFromApi(movieId).then(data => {
      setMovieInfo(data);
    });
  }, [movieId]);

  return <>{movieInfo && <MovieCard movieInfo={movieInfo} />}</>;
};

export default MovieDetails;
