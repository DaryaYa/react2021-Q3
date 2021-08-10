import 'regenerator-runtime/runtime';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../services/api';
import Article from './Article';
import './dashboard.less';

// const sort = { relevancy: 'relevancy', popularity: 'popularity', publishedAt: 'published' };

const Dashboard = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [art, setArt] = useState([]);
  const [sortBy, setSortBy] = useState('publishedAt');

  const handleChange = (event) => setSearchValue(event.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(
        `v2/everything?q=${searchValue}&sortBy=${sortBy}&apiKey=${process.env.API_KEY}`,
      );
      setArt(response.data.articles);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
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
          />
        </label>
        <label htmlFor='radio'>
          SortBy:
          <input
            type='radio'
            id='publishedAt'
            value='publishedAt'
            name='sort'
            onChange={(e) => setSortBy(e.target.value)}
          />
          publishedAt
          <input
            type='radio'
            id='popularity'
            value='popularity'
            name='sort'
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
      </form>
      <div>
        {art.map((elem, ind) => (
          <Article elem={elem} key={ind} />
        ))}
      </div>
      <Link to='/posts'>
        <button type='button'>Posts</button>
      </Link>
    </div>
  );
};

export default Dashboard;
