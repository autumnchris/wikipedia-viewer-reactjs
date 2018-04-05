import React from 'react';

const SearchResult = ({ article }) => {

  return (
    <article>
      <div className="well center-block">
        <h2>{article.title}</h2>
        <p dangerouslySetInnerHTML={{__html: `${article.snippet}...`}}></p>
        <a href="`https://en.wikipedia.org/wiki/${article.title}`" target="_blank">Continue Reading...</a>
      </div>
    </article>
  );
}

export default SearchResult;
