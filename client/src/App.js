import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Login from './components/login';

const App = () => {
  return (
    <>
      <Route path="/" exact component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/dash" component={Dashboard} />
    </>
  );
};

export default App;
