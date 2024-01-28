import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('should render "Hola"', () => {
  const { getByText } = render(<App />);
  const holaElement = getByText('Hola');
  expect(holaElement).toBeInTheDocument();
});
