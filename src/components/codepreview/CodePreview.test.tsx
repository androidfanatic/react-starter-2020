import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Component from './CodePreview';

test('renders element preview', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Component elements={<span>Test Element</span>} />
    </BrowserRouter>
  );
  const linkElement = getByText(/test element/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders code block', () => {
  const codeText = 'sample code';
  const { getByText } = render(
    <BrowserRouter>
      <Component elements={<span>Hello World</span>} code={codeText} />
    </BrowserRouter>
  );
  const linkElement = getByText(/sample code/i);
  expect(linkElement).toBeInTheDocument();
});
