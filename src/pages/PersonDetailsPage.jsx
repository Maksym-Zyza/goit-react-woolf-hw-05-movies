import { useLocation, useNavigate } from 'react-router-dom';
import PersonDetails from '../components/ItemDetails/PersonDetails';
import { text } from '../helpers/text';

export default function PersonDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="container position">
      <button
        className="movieBtn"
        type="button"
        onClick={() => navigate(location.state ?? '/persons')}
      >
        &#9668; {text.Back}
      </button>

      <PersonDetails />
    </div>
  );
}
