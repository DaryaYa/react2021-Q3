import React from 'react';

const Article = ({ elem, ind }) => (
  <div className='elem-wrapper'>
    <a href={elem.url} target='_blank' rel='noreferrer'>
      <img src={elem.urlToImage} alt='link to the article' />
    </a>
    <ul key={ind}>
      <li>Title: {elem.title}</li>
      <li>Author: {elem.author}</li>
      <li>Description: {elem.description}</li>
      <li>PublishedAt: {elem.publishedAt}</li>
    </ul>
  </div>
);

export default Article;
