import React, { useState } from 'react';
import SearchForm from './search-form';
import LoadingSpinner from './loading-spinner';
import ResultsContainer from './results-container';
import axios from 'axios';

const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(event) {
    setSearchInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearchResults([]);
    setLoadingStatus(true);

    if (!searchInput.trim()) {
      setLoadingStatus(false);
      setSearchError(true);
      setErrorMessage('A text input must be submitted to get search results.');
    }
    else {
      fetchSearchResults();
    }
  }

  function fetchSearchResults() {
    axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchInput}&origin=*&format=json`)
    .then(response => {
      setLoadingStatus(false);
      renderSearchResults(response.data.query.search);
    }).catch(error => {
      setLoadingStatus(false);
      setSearchError(true);
      setErrorMessage('Unable to load Wikipedia search results at this time.');
    });
  }

  function renderSearchResults(results) {

    if (results.length !== 0) {
      setSearchResults(results);
      setSearchError(false);
      setErrorMessage('');
    }
    else {
      setSearchError(true);
      setErrorMessage(`Unable to find results for \"${searchInput}\". Consider revising your search.`);
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
        {loadingStatus ? <LoadingSpinner /> : <ResultsContainer searchResults={searchResults} searchError={searchError} errorMessage={errorMessage} />}
      </main>
      <footer>Created by <a href="https://autumnchris.github.io/portfolio" target="_blank">Autumn Bullard</a> &copy; {new Date().getFullYear()}</footer>
    </React.Fragment>
  );
}

export default App;
