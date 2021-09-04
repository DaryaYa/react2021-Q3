import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import './app.less';
import About from './About';

const App = () => (
  <div className='app'>
    <Router>
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path='/'>bla-bla-staff</Route>
        {/* <Route path='*' component={<div>404 page not found</div>} /> */}
      </Switch>
    </Router>
  </div>
);

export default App;
