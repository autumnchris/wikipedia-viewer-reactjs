import React from 'react';

const ResultItem = ({ resultItem }) => {

  return (
    <article className="result-item">
      <h2>{resultItem.title}</h2>
      <p dangerouslySetInnerHTML={{__html: `${resultItem.snippet}...`}}></p>
      <div className="button-group">
        <a href={`https://en.wikipedia.org/wiki/${resultItem.title}`} className="button" target="_blank">Continue Reading <span className="fa-solid fa-arrow-up-right-from-square"></span></a>
      </div>
    </article>
  );
}

export default ResultItem;
