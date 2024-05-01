import React, { useEffect, useState } from 'react';
import { ReactComponent as SearchLogo } from '../Icons/Search.svg';
import { useSearchParams } from 'react-router-dom';
import st from './Search.module.scss';
import { text } from '../../helpers/text';

const Search = ({ formSubmitQuery }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('search') ?? '');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const search = searchParams.get('search');
    if (value === search || !value) return;
    formSubmitQuery(value);
    setSearchParams({ search: value });
  };

  useEffect(() => {
    const value = searchParams.get('search');
    value && setValue(value);
  }, [searchParams]);

  return (
    <header className={st.SearchBar}>
      <form onSubmit={handleSubmit} className={st.SearchForm}>
        <button type="submit" className={st.SearchForm_button}>
          <SearchLogo className={st.searchLogo} />
        </button>

        <input
          className={st.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder={text.SearchMovies}
          value={value}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Search;
