import { useState, useEffect } from 'react';
import st from './Details.module.scss';
import api from '../../api/movies-api';
import { text } from '../../helpers/text';
import defaultImg from '../../img/default.jpg';
import Loader from '../../components/Loader/Loader';
import { ReactComponent as Play } from '../Icons/Play.svg';
import Modal from '../Modal/Modal';
import MovieVideo from './MovieVideo';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { IMG_SRC } from 'variables';

export default function MovieDetails() {
  const navigation = useNavigate();
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const [video, setVideo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    !showModal
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
    setShowModal(!showModal);
  };

  const handleShowCast = () => {
    navigation('cast');
  };
  const handleShowReviews = () => {
    navigation('reviews');
  };

  useEffect(() => {
    setIsLoading(true);
    api
      .getMovieDetails(movieId)
      .then(result => {
        setMovies({ ...result });
      })
      .catch(error => {
        console.log(error);
        return [];
      })
      .finally(() => setIsLoading(false));
  }, [movieId]);

  useEffect(() => {
    const getVideo = () => {
      api
        .getMovieVideo(movies.id)
        .then(result => {
          setVideo(result.results[0]);
        })
        .catch(error => {
          console.log(error);
          return [];
        })
        .finally(() => setIsLoading(false));
    };
    movies && getVideo();
  }, [movies]);

  return (
    <>
      {movies ? (
        <div className={st.details}>
          <h2>{movies.title}</h2>
          <div onClick={toggleModal} className={st.imgHover}>
            <img
              src={
                movies?.poster_path
                  ? `${IMG_SRC}${movies?.poster_path}`
                  : defaultImg
              }
              alt="Movies poster"
            />

            <div className={st.btnPlay}>
              <Play />
            </div>

            {showModal && (
              <Modal onClose={toggleModal}>
                {video ? (
                  <MovieVideo videoKey={video.key} />
                ) : (
                  <div className={st.noVideo}>{text.noVideo}</div>
                )}
              </Modal>
            )}
          </div>

          <div className={st.movieDetails}>
            <p>
              {text.Release}: <span>{movies.release_date}</span>
            </p>
            <h3>{text.Overview}: </h3>
            <span>{movies.overview}</span>
            <p>
              {text.Popularity}:
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
              : `We don't have any genres for this movie.`}
          </div>
        </div>
      ) : (
        <Loader isLoading={isLoading} />
      )}

      <button className={st.link} onClick={handleShowCast}>
        {text.Cast} <span className={st.linkSign}>&#9660;</span>
      </button>
      <button className={st.link} onClick={handleShowReviews}>
        {text.Reviews} <span className={st.linkSign}>&#9660;</span>
      </button>

      <Outlet />
    </>
  );
}
