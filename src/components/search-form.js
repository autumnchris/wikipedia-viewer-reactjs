import React from 'react';

const SearchForm = ({ searchInput, handleChange, handleSubmit }) => {

  return (
    <form role="search" className="search-form" onSubmit={(event) => handleSubmit(event)}>
      <div className="form-group">
        <span className="fas fa-search search-icon"></span>
        <input type="search" className="search-input" aria-label="Search Wikipedia..." placeholder="Search Wikipedia..." onChange={(event) => handleChange(event)} value={searchInput} autoFocus required />
      </div>
      <div className="button-group">
        <input type="submit" className="button" value="Search" />
        <a href="https://en.wikipedia.org/wiki/Special:Random" className="button" target="_blank">Random Article</a>
      </div>
    </form>
  );
}

export default SearchForm;
