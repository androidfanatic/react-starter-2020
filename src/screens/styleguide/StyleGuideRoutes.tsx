import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ButtonStyleGuide from './guides/ButtonStyleGuide';

const StyleGuideRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/styleguide/buttons" component={ButtonStyleGuide} />
    </Switch>
  );
};

export default StyleGuideRoutes;
