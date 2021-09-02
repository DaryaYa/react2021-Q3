import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cashReducer from './cashReducer';
import customerReducer from './customerReducer';

const rootReducer = combineReducers({ cash: cashReducer, customer: customerReducer });
const store = createStore(rootReducer, composeWithDevTools());

export default store;
