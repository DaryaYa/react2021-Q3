import 'regenerator-runtime/runtime';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../services/api';

const Dashboard = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => setSearchValue(event.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(
        `v2/everything?q=${searchValue}&apiKey=f7acf84ad02f48d8a919484133df8493`,
      );
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
        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Search'}
        </button>
      </form>
      <Link to='/posts'>
        <button type='button'>Posts</button>
      </Link>
    </div>
  );
};

export default Dashboard;
