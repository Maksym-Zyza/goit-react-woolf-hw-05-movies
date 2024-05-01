import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ScrollButton from '../components/ScrollButton/ScrollButton';
import MoviesList from '../components/TrendingList/MoviesList';
import ToolsMenu from '../components/ToolsMenu/ToolsMenu';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';
import api from '../api/movies-api';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [time, setTime] = useState(searchParams.get('time') ?? 'day');
  const [page, setPage] = useState(Number(searchParams.get('page') ?? 1));

  useEffect(() => {
    setIsLoading(true);
    api
      .getMoviesTrending('movie', time, page)
      .then(results => {
        setTrending(prev => [...prev, ...results]);
        setSearchParams({ page, time });
      })
      .catch(error => {
        console.log(error);
        return [];
      })
      .finally(() => setIsLoading(false));
  }, [time, page, setSearchParams]);

  const handlePeriod = e => {
    if (time === e.target.dataset.value) return;
    setTime(e.target.dataset.value);
    setPage(1);
    setTrending([]);
  };

  const handleBtn = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className="container">
      <MoviesList trending={trending} time={time} />

      <ToolsMenu changeSelect={handlePeriod} />

      {trending.length > 0 && (
        <ScrollButton scrollStepInPx="50" delayInMs="16" />
      )}

      {trending.length > 0 && <Button onClick={handleBtn} />}

      {isLoading && <Loader isLoading={isLoading} />}
    </div>
  );
};

export default HomePage;
