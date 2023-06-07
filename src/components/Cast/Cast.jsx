import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCastByIdFromApi } from '../../servises/api';
import NoActorPhoto from '../../images/no-photo-available.png';
import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { Ul, Li, Img, Thumb } from './Cast.styled';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    getMovieCastByIdFromApi(movieId)
      .then(data => {
        if (data.cast.length === 0) {
          return;
        }

        setCast(data.cast);
      })
      .finally(() => {
        setShowLoader(false);
      });
  }, [movieId]);

  return (
    <div>
      {showLoader && <Loader />}
      {!cast && <p>There is no Cast</p>}
      {cast && (
        <Ul>
          {cast.map(actor => {
            let actorPhoto = NoActorPhoto;
            if (actor.profile_path) {
              actorPhoto = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
            }
            return (
              <Li key={actor.id}>
                <div>
                  <Thumb>
                    <Img srcSet={actorPhoto} alt={actor.name} />
                  </Thumb>
                  <div>
                    <p>{actor.name}</p>
                  </div>
                </div>
              </Li>
            );
          })}
        </Ul>
      )}
    </div>
  );
}

export default Cast;
