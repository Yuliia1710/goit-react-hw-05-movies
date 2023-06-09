import { Link, useLocation } from 'react-router-dom';
import {
  UL,
  Li,
  ImageThumb,
  Img,
  StyledNavLink,
  TextBlock,
} from './MoviesLayout.styled';
import noPosterPhoto from '../../images/no-photo-available.png';
import PropTypes from 'prop-types';

const MoviesLayout = ({ arrayOfMovies }) => {
  const location = useLocation();
  // console.log('location', location);

  return (
    <UL>
      {arrayOfMovies.map(movie => {
        let nameOfMovie = null;
        if (movie.title) {
          nameOfMovie = movie.title;
        } else {
          nameOfMovie = movie.name;
        }

        let poster = noPosterPhoto;
        if (movie.poster_path) {
          poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        }

        return (
          <Li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <ImageThumb>
                <Img srcSet={poster} alt="" />
              </ImageThumb>
            </Link>
            <TextBlock>
              <StyledNavLink
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                {nameOfMovie}
              </StyledNavLink>
            </TextBlock>
          </Li>
        );
      })}
    </UL>
  );
};

export default MoviesLayout;

MoviesLayout.propTypes = {
  arrayOfMovies: PropTypes.array.isRequired,
};
