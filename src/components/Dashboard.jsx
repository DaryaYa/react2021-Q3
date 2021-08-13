import 'regenerator-runtime/runtime';
import React, { useState } from 'react';
import { CircleToBlockLoading } from 'react-loadingg';
// import { Link } from 'react-router-dom';
import axiosInstance from '../services/api';
import Article from './Article';
import './dashboard.less';

// const sort = { relevancy: 'relevancy', popularity: 'popularity', publishedAt: 'published' };

const Dashboard = () => {
  const [searchValue, setSearchValue] = useState('news');
  const [isLoading, setIsLoading] = useState(false);
  const [art, setArt] = useState([]);
  const [sortBy, setSortBy] = useState('publishedAt');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalResults, setTotalResults] = useState(1);

  const handleChange = (event) => setSearchValue(event.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(
        `v2/everything?q=${searchValue}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}&apiKey=${process.env.API_KEY}`,
      );
      setArt(response.data.articles);
      setTotalResults(response.data.totalResults);
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
            value={searchValue || 'news'}
            onChange={handleChange}
            disabled={isLoading}
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
            checked={sortBy === 'relevancy'}
            onChange={(e) => setSortBy(e.target.value)}
          />
          relevancy
        </label>
        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Search'}
        </button>
        <div>
          {isLoading ? (
            <CircleToBlockLoading color='#00A300' size='large' />
          ) : (
            art.map((elem, ind) => <Article elem={elem} key={ind} />)
          )}
        </div>
        <div className='pagination'>
          <button type='submit' onClick={goToPrevPage}>
            prev page
          </button>
          <span> &lt;&lt; {page} &gt;&gt; </span>
          <button type='submit' onClick={goToNextPage}>
            next page
          </button>
          <label htmlFor='pageSize'>
            Page Size: (max 100)
            <input
              type='text'
              id='pageSize'
              value={pageSize}
              onChange={(e) => setPageSize(Math.round(e.target.value) || 10)}
              disabled={isLoading}
            />
          </label>
          <label htmlFor='pageNumber'>
            Current Page:
            <input
              type='text'
              id='pageNumber'
              value={page}
              onChange={(e) => setPage(Math.round(e.target.value) || 1)}
              disabled={isLoading}
            />{' '}
            (max {Math.round(totalResults / pageSize)} )
          </label>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;

//  <Link to='/posts'>
//         <button type='button'>Posts</button>
//       </Link>
