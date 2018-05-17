import React from 'react';

const SearchResult = ({ article }) => {

  return (
    <article>
      <h2>{article.title}</h2>
      <p dangerouslySetInnerHTML={{__html: `${article.snippet}...`}}></p>
      <p>
        <a href={`https://en.wikipedia.org/wiki/${article.title}`} target="_blank">Continue Reading...</a>
      </p>
    </article>
  );
}

export default SearchResult;
