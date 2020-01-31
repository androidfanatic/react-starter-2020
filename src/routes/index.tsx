import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from 'src/screens/home/Home';
import Todos from 'src/screens/todos/Todos';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/todos" component={Todos} exact />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Routes;
