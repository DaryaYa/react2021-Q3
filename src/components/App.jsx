import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Dashboard from './Dashboard';
import Posts from './Posts';
import About from './About';
import './app.less';

// const navData = [
//   {
//     Component: <Dashboard />,
//     path: '/',
//   },
//   {
//     Component: <Posts />,
//     path: '/posts',
//   },
// ];

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
          <Route exact path='/' component={Dashboard} />
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

// {navData.map(({ Component, path }) => (
//   <Route exact path={path} key={path.toString()}>
//     {Component}
//   </Route>
// ))}
//
//
