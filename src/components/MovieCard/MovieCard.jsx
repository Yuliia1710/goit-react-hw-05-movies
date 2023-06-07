import noPosterPhoto from '../../images/no-photo-available.png';
import { NavLink, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useRef } from 'react';

// import PropTypes from 'prop-types';

const MovieCard = ({ movieInfo }) => {
  console.log('movieInfo', movieInfo);
  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/');

  let nameOfMovie = null;
  if (movieInfo.title) {
    nameOfMovie = movieInfo.title;
  } else {
    nameOfMovie = movieInfo.name;
  }

  let userScore = (movieInfo.vote_average * 10).toFixed(2);
  let genres = movieInfo.genres.map(genre => genre.name).join(', ');

  let poster = noPosterPhoto;
  if (movieInfo.poster_path) {
    poster = `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`;
  }

  return (
    <div>
      <div>
        <NavLink to={backLinkHref.current}>Go Back</NavLink>
      </div>
      <div>
        <div>
          <img srcSet={poster} alt={nameOfMovie} />
        </div>
        <div>
          <h1>{nameOfMovie}</h1>
          <p>User Score:{userScore}</p>
          <h2>Overview</h2>
          <p>{movieInfo.overview}</p>
          <h2>Genres</h2>
          <p>{genres}</p>
        </div>
      </div>
      <div>
        <h2>Additional Information</h2>
        <NavLink to={`/movies/${movieInfo.id}/cast`}>Casts</NavLink>
        <NavLink to={`/movies/${movieInfo.id}/reviews`}>Reviews</NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default MovieCard;

// MovieCard.propTypes = {};
