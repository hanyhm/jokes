import React from 'react';
import { render } from '@testing-library/react';
import Button from './App'; // Import button Click me to get a new joke 

test('Button component renders correctly', () => {
  const { getByText } = render(<Button label="Click me to get a new joke" />);
  const button = getByText('Click me to get a new joke');
  expect(button).toBeInTheDocument();
});