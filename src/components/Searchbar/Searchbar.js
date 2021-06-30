import React from 'react';
import S from './searchbar.module.css';

const Searchbar = ({ onSetQuery, searchQuery, onSubmit }) => (
  <header className={S.Searchbar}>
    <form onSubmit={onSubmit} className={S.SearchForm}>
      <button type="submit" className={S.SearchFormButton}>
        <span className={S.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={S.SearchFormInput}
        onInput={onSetQuery}
        name="searchQuery"
        value={searchQuery}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

export default Searchbar;
