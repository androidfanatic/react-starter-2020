import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Component from './Home';

test('renders learn react link', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  );
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
