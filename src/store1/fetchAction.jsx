import { addNewsAction } from './newsReducer';

const API_KEY = 'f7acf84ad02f48d8a919484133df8493';

const fetchNews = (searchValue) => (dispatch) => {
  // const searchValue = 'star wars';
  const sortBy = 'publishedAt';
  const pageSize = 10;
  const page = 1;
  fetch(
    `https://newsapi.org/v2/everything?q=${searchValue}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`,
  )
    .then((response) => response.json())
    .then((news) => dispatch(addNewsAction(news.articles)));
};

export default fetchNews;
