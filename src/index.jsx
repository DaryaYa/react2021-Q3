import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App2';
import './index.less';
import store from './store1/init';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root'),
);
