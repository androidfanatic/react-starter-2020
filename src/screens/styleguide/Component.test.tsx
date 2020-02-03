import { render } from '@testing-library/react';
import React from 'react';
import Component from './Component';

test('renders component', () => {
  const { getByText } = render(<Component />);
  const linkElement = getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
