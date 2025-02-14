import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import LoadingSpinner from './components/LoadingSpinner';
import ResultsContainer from './components/ResultsContainer';
import ErrorMessage from './components/ErrorMessage';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <React.Fragment>
      <Header />
      <main>
        <div className="fa-brands fa-wikipedia-w fa-4x" aria-hidden="true"></div>
        <SearchForm setLoadingStatus={setLoadingStatus} setErrorMessage={setErrorMessage} setSearchResults={setSearchResults} />
        {loadingStatus ? <LoadingSpinner /> : errorMessage ? <ErrorMessage errorMessage={errorMessage} /> : <ResultsContainer searchResults={searchResults} />}
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
