import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviewsByIdFromApi } from '../../servises/api';
// import PropTypes from 'prop-types'

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviewsByIdFromApi(movieId).then(data => {
      console.log(data);
      if (data.results.length === 0) {
        return;
      }

      setReviews(data.results);
    });
  }, [movieId]);

  return (
    <div>
      {!reviews && <p>There is no reviews</p>}
      {reviews && (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h5>{review.author}</h5>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Reviews;

// Reviews.propTypes = {};
