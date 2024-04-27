import { useLocation, useNavigate } from 'react-router-dom';
import TvShowsDetails from '../components/ItemDetails/TvShowsDetails';
import { text } from '../helpers/text';

export default function TvShowsDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location.state?.from ?? '/');
  };

  return (
    <div className="container position">
      <button className="movieBtn" type="button" onClick={handleGoBack}>
        &#9668; {text.Back}
      </button>

      <TvShowsDetails />
    </div>
  );
}
