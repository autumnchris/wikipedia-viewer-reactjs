import React from 'react';

const ResultItem = ({ resultItem }) => {

  return (
    <article className="result-item">
      <h2 id={`article-title-${resultItem.pageid}`}>{resultItem.title}</h2>
      <p dangerouslySetInnerHTML={{__html: `${resultItem.snippet}...`}}></p>
      <div className="button-group">
        <a href={`https://en.wikipedia.org/wiki/${resultItem.title}`} className="button" target="_blank" id={`article-link-${resultItem.pageid}`} aria-labelledby={`article-link-${resultItem.pageid} article-title-${resultItem.pageid}`}>Continue Reading <span className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></span></a>
      </div>
    </article>
  );
}

export default ResultItem;
