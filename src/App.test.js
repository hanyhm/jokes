import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Button from './App';



test('Button component renders correctly', () => {
  const { getByText } = render(<Button label="Click me to get a new joke" />);
  const button = getByText('Click me to get a new joke');
  expect(button).toBeInTheDocument();
});







