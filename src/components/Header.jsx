import React, { useState } from 'react';

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className='header'>
      <h1>Dashboard</h1>
      <form className='form-main'>
        <label htmlFor='search'>
          <input type='text' id='search' className='search-main' />
        </label>
        <label htmlFor='radio'>
          SortBy:
          <input type='radio' id='publishedAt' value='publishedAt' name='sort' />
          publishedAt
          <input type='radio' id='popularity' value='popularity' name='sort' />
          popularity
          <input type='radio' id='relevancy' value='relevancy' name='sort' />
          relevancy
        </label>
        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Search'}
        </button>
      </form>
    </div>
  );
};

export default Header;
