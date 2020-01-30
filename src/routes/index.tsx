import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../screens/home/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Routes;
