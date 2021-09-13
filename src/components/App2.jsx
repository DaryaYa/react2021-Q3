import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import './app.less';
import About from './About';
import Posts from './Posts';

const App = () => (
  <div className='app'>
    <Router>
      <button type='button'>
        <Link to='/'>Home</Link>
      </button>
      <button type='button'>
        <Link to='/about'>About</Link>
      </button>
      <section className='main'>
        <Switch>
          <Route exact path='/' component={Header} />
          <Route exact path='/about' component={About} />
          <Route path='/details/:id'>
            <Posts />
          </Route>
          <Route component={() => <div>404 Not found</div>} />
        </Switch>
      </section>
    </Router>
  </div>
);

export default App;
