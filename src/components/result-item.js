import React from 'react';

const ResultItem = ({ resultItem }) => {

  return (
    <article className="result-item">
      <h2>{resultItem.title}</h2>
      <p dangerouslySetInnerHTML={{__html: `${resultItem.snippet}...`}}></p>
      <a href={`https://en.wikipedia.org/wiki/${resultItem.title}`} className="button" target="_blank">Continue Reading &raquo;</a>
    </article>
  );
}

export default ResultItem;
