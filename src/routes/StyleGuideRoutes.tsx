import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ButtonStyleGuide from 'src/screens/styleguide/guides/ButtonStyleGuide';
import TypographyStyleGuide from 'src/screens/styleguide/guides/TypographyStyleguide';

export const ComponentsCatalogue = [
  {
    id: 0,
    label: 'Foundation',
    links: [{ id: 0, label: 'Typography', to: '/styleguide/typography', component: TypographyStyleGuide }],
  },
  {
    id: 0,
    label: 'Components',
    links: [
      { id: 0, label: 'Button', to: '/styleguide/buttons', component: ButtonStyleGuide },
      { id: 1, label: 'Button', to: '/styleguide/buttons', component: ButtonStyleGuide },
    ],
  },
];

const StyleGuideRoutes: React.FC = () => {
  return (
    <Switch>
      {ComponentsCatalogue.map(catalog => catalog.links)
        .flat()
        .map(link => (
          <Route key={link.id} exact path={link.to} component={link.component} />
        ))}
      <Route render={() => <Redirect to="/styleguide" />} />
    </Switch>
  );
};

export default StyleGuideRoutes;
