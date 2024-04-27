import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviesGallery = ({ movies }) => {
  const location = useLocation();
  const src = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="container">
      <ul className="moviesList">
        {movies.map(({ id, poster_path, title, vote_average }) => (
          <Link key={id} to={`/movies/${id}`} state={location}>
            <li>
              <img src={`${src}${poster_path}`} alt={title} />
              <h4> {title}</h4>
              <div>
                <span>{vote_average}</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MoviesGallery;
