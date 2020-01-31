import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'src/store';
import Component from './Todos';

test('renders component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>
  );
  const elem = getByText(/get todos/i);
  expect(elem).toBeInTheDocument();
});
