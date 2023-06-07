import noPosterPhoto from '../../images/no-photo-available.png';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useRef } from 'react';
import {
  MovieCardContainer,
  ImageContainer,
  Img,
  StyledGoBack,
  StyledGoBackContainer,
  StyledNavLink,
} from './MovieCard.styled';

import PropTypes from 'prop-types';

const MovieCard = ({ movieInfo }) => {
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
    <>
      <StyledGoBackContainer>
        <StyledGoBack to={backLinkHref.current}>Go Back</StyledGoBack>
      </StyledGoBackContainer>
      <MovieCardContainer>
        <ImageContainer>
          <Img srcSet={poster} alt={nameOfMovie} />
        </ImageContainer>
        <div>
          <h1>{nameOfMovie}</h1>
          <p>User Score: {userScore} </p>
          <h2>Overview</h2>
          <p>{movieInfo.overview}</p>
          <h2>Genres</h2>
          <p>{genres}</p>
        </div>
      </MovieCardContainer>
      <h2>Additional Information</h2>
      <div>
        <StyledNavLink to={`/movies/${movieInfo.id}/cast`}>Casts</StyledNavLink>
        <StyledNavLink to={`/movies/${movieInfo.id}/reviews`}>
          Reviews
        </StyledNavLink>
      </div>

      <Outlet />
    </>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movieInfo: PropTypes.object.isRequired,
};
