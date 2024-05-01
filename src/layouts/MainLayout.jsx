import { SideBar } from '../components/SideBar/SideBar';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import { text } from 'helpers/text';
import { Outlet } from 'react-router-dom';

const sideBarPages = [
  {
    name: text.Home,
    path: '/',
  },
  {
    name: text.SearchMovies,
    path: '/movies',
  },
  {
    name: text.InTheatres,
    path: '/theatres',
  },
  {
    name: text.Persons,
    path: '/persons',
  },
  {
    name: text.TvShows,
    path: '/tvShows',
  },
];

const MainLayout = () => {
  return (
    <>
      <header>
        <SideBar sideBarPages={sideBarPages} />
        <Navigation sideBarPages={sideBarPages} />
        <Logo />
      </header>
      <Outlet />
    </>
  );
};

export default MainLayout;
