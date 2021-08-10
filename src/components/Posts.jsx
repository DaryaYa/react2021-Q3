import React from 'react';
import { Link } from 'react-router-dom';
import './posts.less';

const Posts = () => (
  <div>
    <h1>Posts</h1>
    <Link to='/'>
      <button type='button'>Main Page</button>
    </Link>
    <div className='opts'>
      <button type='button'>Get Posts</button>
      <button type='button'>Clear Posts</button>
    </div>
  </div>
);

export default Posts;
