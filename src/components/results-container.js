import React from 'react';
import ErrorMessage from './error-message';
import ResultItem from './result-item';

const ResultsContainer = ({ searchResults, searchError, errorMessage }) => {

  if (searchError) {
    return <ErrorMessage errorMessage={errorMessage} />;
  }
  else {
    return <div className="search-results">{searchResults.map(resultItem => <ResultItem key={resultItem.pageid} resultItem={resultItem} />)}</div>;
  }
}

export default ResultsContainer;
