import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { newsReducer } from './newsReducer';
import { searchReducer } from './searchReducer';

const rootReducer = combineReducers({ news: newsReducer, searchValue: searchReducer });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
