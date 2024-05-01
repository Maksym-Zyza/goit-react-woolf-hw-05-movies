import { Link, useLocation } from 'react-router-dom';
import { text } from '../../helpers/text';
import defaultImg from '../../img/default.jpg';
import { IMG_SRC } from 'variables';

const TrendingPersonsList = ({ trending, time }) => {
  const location = useLocation();
  const title = time === 'day' ? text.TitlePersons : text.WeekPersons;

  return (
    <div>
      <h2 className="pageTitle">{title}</h2>

      <ul className="moviesList">
        {trending.map(({ id, name, profile_path, popularity }) => (
          <Link key={id} to={`/persons/${id}`} state={location}>
            <li>
              <img
                src={profile_path ? `${IMG_SRC}${profile_path}` : defaultImg}
                alt="Movie poster"
              />
              <h4> {name}</h4>
              <div>{popularity && <span>{Math.round(popularity)}</span>}</div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPersonsList;
