import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import LoadingSpinner from './LoadingSpinner';
import ResultsContainer from './ResultsContainer';
import ErrorMessage from './ErrorMessage';

const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
    <React.Fragment>
      <header>
        <h1>Wikipedia Viewer</h1>
      </header>
      <main>
        <div className="fab fa-wikipedia-w fa-4x"></div>
        <SearchForm searchInput={searchInput} handleChange={handleChange} handleSubmit={handleSubmit} />
        {loadingStatus && searchResults.length === 0 ? <LoadingSpinner /> : errorMessage && searchResults.length === 0 ? <ErrorMessage errorMessage={errorMessage} /> : <ResultsContainer searchResults={searchResults} />}
      </main>
      <footer>Created by <a href="https://autumnchris.github.io/portfolio" target="_blank">Autumn Bullard</a> &copy; {new Date().getFullYear()}</footer>
    </React.Fragment>
  );
}

export default App;
