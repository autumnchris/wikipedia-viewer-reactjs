import React from 'react';
import ResultItem from './result-item';

const ResultsContainer = ({ searchResults, searchError, errorMessage }) => {

  if (searchError) {
    return <p className="message error-message"><span className="fa fa-exclamation-circle fa-lg fa-fw"></span> {errorMessage}</p>;
  }
  else {
    return <div className="search-results">{searchResults.map(resultItem => <ResultItem key={resultItem.pageid} resultItem={resultItem} />)}</div>;
  }
}

export default ResultsContainer;
