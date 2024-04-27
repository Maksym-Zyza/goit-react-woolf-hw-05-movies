import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import api from '../../api/movies-api';
import { text } from '../../helpers/text';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    api
      .getMoviesReviews(movieId)
      .then(response => {
        setReviews([...response.data.results]);
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
      <div>
        <ul>
          {reviews.length > 0
            ? reviews.map(({ id, author, content }) => (
                <li key={id}>
                  <h3 className="data">{author}</h3>
                  <p className="text">{content}</p>
                </li>
              ))
            : text.NoReviews}
        </ul>
      </div>

      {isLoading && <Loader isLoading={isLoading} />}
    </>
  );
};

export default MovieReviews;
