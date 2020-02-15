import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from 'src/screens/home/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Routes;
