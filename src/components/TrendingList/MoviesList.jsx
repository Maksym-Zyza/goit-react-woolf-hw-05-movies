import { Link, useLocation } from 'react-router-dom';
import { text } from '../../helpers/text';
import defaultImg from '../../img/default.jpg';
import { IMG_SRC } from 'variables';

const MoviesList = ({ trending, time }) => {
  const location = useLocation();
  let title = time === 'day' ? text.TitleMovies : text.WeekMovies;
  if (time === 'inTheatres') {
    title = text.TitleTheatres;
  }

  return (
    <div>
      <h2 className="pageTitle">{title}</h2>

      <ul className="moviesList">
        {trending.map(({ id, poster_path, title, vote_average }) => (
          <Link key={id} to={`/movies/${id}`} state={location}>
            <li>
              {poster_path ? (
                <img src={`${IMG_SRC}${poster_path}`} alt="Movie poster" />
              ) : (
                <img src={defaultImg} alt="Was not found" />
              )}
              <h4> {title}</h4>
              <div>
                <span>{vote_average.toFixed(1)}</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
