import React, { useEffect, useState } from 'react';
import api from '../api/movies-api';
import Loader from '../components/Loader/Loader';
import Button from '../components/Button/Button';
import MoviesGallery from '../components/MoviesGallery/MoviesGallery';
import ScrollButton from '../components/ScrollButton/ScrollButton';
import Nothing from '../components/Nothing';
import SearchBar from 'components/SearchBar';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (!searchValue) return;
    setIsLoading(true);
    api
      .getSearchMovies(searchValue, page)
      .then(response => {
        setMovies(prev => [...prev, ...response.data.results]);
      })
      .catch(error => {
        console.log(error);
        return [];
      })
      .finally(() => setIsLoading(false));
  }, [searchValue, page]);

  const formSubmitQuery = search => {
    setSearchValue(search);
    setError(null);
    setMovies([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div>
      <SearchBar formSubmitQuery={formSubmitQuery} />

      <MoviesGallery movies={movies} />

      {isLoading && <Loader isLoading={isLoading} />}

      {movies.length > 0 && <Button onClick={loadMore} />}

      {movies.length > 0 && <ScrollButton scrollStepInPx="50" delayInMs="16" />}

      {error && <h1>{error}</h1>}

      {movies.length === 0 && <Nothing />}
    </div>
  );
};

export default MoviesPage;
