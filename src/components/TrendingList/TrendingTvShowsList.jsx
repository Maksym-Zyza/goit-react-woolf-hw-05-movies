import { Link, useLocation } from 'react-router-dom';
import { text } from '../../helpers/text';
import defaultImg from '../../img/default.jpg';
import { IMG_SRC } from 'variables';

const TrendingTvShows = ({ trending, time }) => {
  const location = useLocation();
  const title = time === 'day' ? text.TitleTrending : text.WeekTrending;

  return (
    <div>
      <h2 className="pageTitle">{title}</h2>

      <ul className="moviesList">
        {trending.map(({ id, name, poster_path, vote_average }) => (
          <Link key={id} to={`/tvShows/${id}`} state={location}>
            <li>
              <img
                src={poster_path ? `${IMG_SRC}${poster_path}` : defaultImg}
                alt="TvShows poster"
              />
              <h4> {name}</h4>
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

export default TrendingTvShows;
