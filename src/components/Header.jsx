import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewsAction } from '../store1/newsReducer';
import { searchAction } from '../store1/searchReducer';
import fetchNews from '../store1/fetchAction';
import Article from './Article';
import './dashboard.less';

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState('');

  const news = useSelector((state) => state.news.news);
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchValue.searchValue);
  const search = (val) => {
    dispatch(searchAction(val));
  };

  const handleChange = (event) => {
    setSearchResult(event.target.value);
  };
  console.log(searchResult);
  // search(searchResult);

  const handleSubmit = (e) => {
    e.preventDefault();
    // search(searchResult);
    dispatch(searchAction(searchResult));

    // dispatch(addNewsAction(news));
    console.log(news);
    dispatch(fetchNews(searchValue));
  };

  return (
    <div className='header'>
      <h1>Dashboard</h1>
      <form className='form-main' onSubmit={handleSubmit}>
        <label htmlFor='search'>
          <input
            type='text'
            id='search'
            className='search-main'
            // value='news' // searchValue
            onChange={handleChange}
            disabled={isLoading}
          />
          <div>{searchValue}</div>
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
        {/* <button type='button' onClick={() => dispatch(fetchNews(searchValue))}>
          GET ALL
        </button> */}
        <button type='submit' disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Search'}
        </button>
        {news.map((elem, ind) => (
          <Article elem={elem} key={ind} />
        ))}
      </form>
    </div>
  );
};

export default Header;
