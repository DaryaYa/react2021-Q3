import 'regenerator-runtime/runtime';
import React, { useEffect, useState, useCallback } from 'react';
// import { Link } from 'react-router-dom';
import axiosInstance from '../services/api';
import Article from './Article';
import './dashboard.less';

// const sort = { relevancy: 'relevancy', popularity: 'popularity', publishedAt: 'published' };

const Dashboard = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [art, setArt] = useState([]);
  const [sortBy, setSortBy] = useState('publishedAt');
  const [page, setPage] = useState(1);

  const handleChange = (event) => setSearchValue(event.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(
        `v2/everything?q=${searchValue}&sortBy=${sortBy}&pageSize=10&page=${page}&apiKey=${process.env.API_KEY}`,
      );
      setArt(response.data.articles);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const goToNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const goToPrevPage = () => {
    if (page > 2) {
      setPage((currentPage) => currentPage - 1);
    } else {
      setPage(1);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <form className='form-main' onSubmit={handleSubmit}>
        <label htmlFor='search'>
          <input
            type='text'
            id='search'
            className='search-main'
            value={searchValue}
            onChange={handleChange}
            disabled={isLoading}
            checked={sortBy === 'publishedAt'}
          />
        </label>
        <label htmlFor='radio'>
          SortBy:
          <input
            type='radio'
            id='publishedAt'
            value='publishedAt'
            name='sort'
            checked={sortBy === 'publishedAt'}
            onChange={(e) => setSortBy(e.target.value)}
          />
          publishedAt
          <input
            type='radio'
            id='popularity'
            value='popularity'
            name='sort'
            checked={sortBy === 'popularity'}
            onChange={(e) => setSortBy(e.target.value)}
          />
          popularity
          <input
            type='radio'
            id='relevancy'
            value='relevancy'
            name='sort'
            onChange={(e) => setSortBy(e.target.value)}
          />
          relevancy
        </label>
        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Search'}
        </button>
        <div>
          {art.map((elem, ind) => (
            <Article elem={elem} key={ind} />
          ))}
        </div>
        <div className='pagination'>
          <button type='submit' onClick={goToPrevPage}>
            prev page
          </button>
          <span> &lt;&lt; {page} &gt;&gt; </span>
          <button type='submit' onClick={goToNextPage}>
            next page
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;

//  <Link to='/posts'>
//         <button type='button'>Posts</button>
//       </Link>
