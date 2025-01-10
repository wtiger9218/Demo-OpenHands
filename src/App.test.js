import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TODO List link', () => {
  render(<App />);
  const linkElement = screen.getByText(/TODO List/i);
  expect(linkElement).toBeInTheDocument();
});
