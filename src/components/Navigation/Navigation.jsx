import { useLocation } from 'react-router-dom';
import st from './Navigation.module.scss';

const Navigation = ({ sideBarPages }) => {
  const location = useLocation();

  const name =
    sideBarPages.find(page => location.pathname === page.path)?.name ?? '';

  return (
    <nav className={st.nav}>
      <div className={st.NavLink}>{name}</div>
    </nav>
  );
};

export default Navigation;
