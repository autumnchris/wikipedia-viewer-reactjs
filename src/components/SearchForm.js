import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ setLoadingStatus, setErrorMessage, setSearchResults }) => {
  const [searchInput, setSearchInput] = useState('');

  function handleChange(event) {
    setSearchInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearchResults([]);
    setLoadingStatus(true);
    const searchValue = searchInput.trim();

    if (!searchValue) {
      setLoadingStatus(false);
      setErrorMessage('A text input must be submitted to get search results.');
    }
    else {
      fetchSearchResults(searchValue);
    }
  }

  function fetchSearchResults(searchValue) {
    axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchValue}&origin=*&format=json`)
    .then(response => {
      setLoadingStatus(false);
      renderSearchResults(response.data.query.search, searchValue);
    }).catch(error => {
      setLoadingStatus(false);
      setErrorMessage('Unable to load Wikipedia search results at this time.');
    });
  }

  function renderSearchResults(results, searchValue) {

    if (results.length !== 0) {
      setSearchResults(results);
      setErrorMessage('');
    }
    else {
      setErrorMessage(`Unable to find results for \"${searchValue}\". Consider revising your search.`);
    }
  }

  return (
    <form role="search" className="search-form" onSubmit={(event) => handleSubmit(event)} noValidate>
      <div className="form-group">
        <span className="fas fa-search search-icon" aria-hidden="true"></span>
        <input type="text" className="search-input" aria-label="Search Wikipedia..." placeholder="Search Wikipedia..." onChange={(event) => handleChange(event)} value={searchInput} required autoFocus />
      </div>
      <div className="button-group">
        <button tyoe="submit" className="button">Search</button>
        <a href="https://en.wikipedia.org/wiki/Special:Random" className="button" target="_blank">Random Article</a>
      </div>
    </form>
  );
}

export default SearchForm;
