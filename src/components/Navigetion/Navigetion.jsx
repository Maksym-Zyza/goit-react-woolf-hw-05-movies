import { useLocation } from 'react-router-dom';
import st from './Navigation.module.scss';
import { routes } from 'routes';

const NavPage = () => {
  const location = useLocation();

  const name = routes.find(route => route.path === location.pathname).name;

  return (
    <nav className={st.nav}>
      <div className={st.NavLink}>{name}</div>
    </nav>
  );
};

const Navigation = {
  NavPage,
};

export default Navigation;
