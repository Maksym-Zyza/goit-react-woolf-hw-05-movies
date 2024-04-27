import { useLocation, useNavigate } from 'react-router-dom';
import MovieDetails from '../components/ItemDetails/MovieDetails';
import { text } from '../helpers/text';

export default function MovieDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location.state?.from ?? '/movies');
  };

  return (
    <div className="container position">
      <button className="movieBtn" type="button" onClick={handleGoBack}>
        &#9668; {text.Back}
      </button>

      <MovieDetails />
    </div>
  );
}
