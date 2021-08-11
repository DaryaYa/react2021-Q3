import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Posts from './Posts';
import './app.less';

const navData = [
  {
    Component: <Dashboard />,
    path: '/',
  },
  {
    Component: <Posts />,
    path: '/posts',
  },
];

const App = () => (
  <div className='app'>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {navData.map(({ Component, path }) => (
          <Route exact path={path} key={path.toString()}>
            {Component}
          </Route>
        ))}
        <Redirect to='/' />
      </Switch>
    </Suspense>
  </div>
);

export default App;
