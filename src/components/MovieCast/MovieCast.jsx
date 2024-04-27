import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import Loader from '../../components/Loader/Loader';
import defaultImg from '../../img/default.jpg';
import api from '../../api/movies-api';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [src] = useState('https://image.tmdb.org/t/p/w500');
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    api
      .getMovieCredits(movieId)
      .then(response => {
        setCast([...response.data.cast]);
      })
      .catch(error => {
        console.log(error);
        return [];
      })
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <ul className="castList">
          {cast.map(({ id, profile_path, name, character }) => (
            <Link key={id} to={`/persons/${id}`} state={location}>
              <li key={id}>
                {profile_path ? (
                  <img src={`${src}${profile_path}`} alt="Movie poster" />
                ) : (
                  <img src={defaultImg} alt="Was not found" />
                )}
                <h3>{name}</h3>
                <p>{character}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {isLoading && <Loader isLoading={isLoading} />}

      {cast && <ScrollButton scrollStepInPx="50" delayInMs="16" />}
    </>
  );
};

export default MovieCast;
