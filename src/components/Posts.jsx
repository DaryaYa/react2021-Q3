/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './posts.less';

// const Posts = () => (
//   <div>
//     <h1>Posts</h1>
//     <Link to='/'>
//       <button type='button'>Main Page</button>
//     </Link>
//     <div className='opts'>
//       <button type='button'>Get Posts</button>
//       <button type='button'>Clear Posts</button>
//     </div>
//   </div>
// );
const Posts = (props) => {
  const location = useLocation();
  const cust = location.state;
  console.log(cust);

  return (
    <div className='elem-wrapper'>
      <h1>props from article </h1>;
      <img src={cust.elem.urlToImage} alt='link to the article' />
      <ul>
        <li>Title: {cust.elem.title}</li>
        <li>Author: {cust.elem.author}</li>
        <li>Description: {cust.elem.description}</li>
        <li>PublishedAt: {cust.elem.publishedAt}</li>
        <li>Content: {cust.elem.content}</li>
        <li>LINK to the source of the article: {cust.elem.url}</li>
        <Link to='/'>MAIN PAGE</Link>{' '}
      </ul>
    </div>
  );
};

export default Posts;

//
