import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastByIdFromApi } from '../../servises/api';
import NoActorPhoto from '../../images/no-photo-available.png';
import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types'

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCastByIdFromApi(movieId).then(data => {
      console.log(data);
      if (data.cast.length === 0) {
        return;
      }

      setCast(data.cast);
    });
  }, [movieId]);

  return (
    <div>
      {!cast && <p>There is no Cast</p>}
      {cast && (
        <ul>
          {cast.map(actor => {
            let actorPhoto = NoActorPhoto;
            if (actor.profile_path) {
              actorPhoto = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
            }
            return (
              <li key={actor.id}>
                <div>
                  <div>
                    <img srcSet={actorPhoto} alt={actor.name} />
                  </div>
                  <div>
                    <p>{actor.name}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cast;

// Cast.propTypes = {};
