import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IMG_SRC } from 'variables';

const MoviesGallery = ({ movies }) => {
  const location = useLocation();

  return (
    <div className="container">
      <ul className="moviesList">
        {movies.map(({ id, poster_path, title, vote_average }) => (
          <Link key={id} to={`/movies/${id}`} state={location}>
            <li>
              <img src={`${IMG_SRC}${poster_path}`} alt={title} />
              <h4> {title}</h4>
              <div>
                <span>
                  {vote_average > 0
                    ? parseFloat(Math.round(vote_average * 100) / 100).toFixed(
                        1
                      )
                    : 0}
                </span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MoviesGallery;
