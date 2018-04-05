import React from 'react';
import SearchResult from './search-result';

const ResultsList = ({ results }) => {

  const SearchResults = results.map((article, index) => {
    return <SearchResult key={index} article={article} />;
  });

  return (
    <div className="results">{SearchResults}</div>
  );
}

export default ResultsList;
