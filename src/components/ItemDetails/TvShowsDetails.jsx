import { useState, useEffect } from 'react';
import st from './Details.module.scss';
import api from '../../api/movies-api';
import defaultImg from '../../img/default.jpg';
import Loader from '../Loader/Loader';
import { text } from '../../helpers/text';
import { useParams } from 'react-router-dom';
import { IMG_SRC } from 'variables';

export default function TvShowsDetails() {
  const { tvShowId } = useParams();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    api
      .getTvDetails(tvShowId)
      .then(result => {
        setMovies({ ...result });
      })
      .catch(error => {
        console.log(error);
        return [];
      })
      .finally(() => setIsLoading(false));
  }, [tvShowId]);

  return (
    <>
      {movies ? (
        <div className={st.details}>
          <h2>{movies.name}</h2>
          <img
            src={
              movies?.poster_path
                ? `${IMG_SRC}${movies?.poster_path}`
                : defaultImg
            }
            alt="Poster poster"
          />

          <div className={st.details}>
            <p>
              First air date: <span>{movies.first_air_date}</span>
            </p>
            <h3>{text.Overview}: </h3>
            <span>{movies.overview}</span>
            <p>
              {text.Popularity}:{' '}
              <span>{String(Math.round(movies.popularity))}</span>
            </p>
            <p>
              {text.Rating}: <span>{movies.vote_average}</span>
            </p>
            <p>
              {text.Count}: <span>{movies.vote_count}</span>
            </p>
            <h3>{text.Genres}:</h3>
            {movies.genres
              ? movies.genres.map(({ id, name }) => <p key={id}>{name}</p>)
              : `We don't have any ganres for this TV Shows.`}

            <h3>{text.Poster}</h3>
            <img src={`${IMG_SRC}${movies?.backdrop_path}`} alt="Poster" />
          </div>
        </div>
      ) : (
        <Loader isLoading={isLoading} />
      )}
    </>
  );
}
