import { useLocation } from 'react-router-dom';
import st from './Navigetion.module.scss';
import { routes } from '../../routes';

const NavPage = () => {
  const location = useLocation();

  // TODO: Add a function to get the current route name
  return (
    <nav className={st.nav}>
      <div className={st.NavLink}>{'route.name'}</div>
    </nav>
  );
};

const Navigation = {
  NavPage,
};

export default Navigation;
