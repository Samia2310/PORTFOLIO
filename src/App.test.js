import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero name', () => {
  render(<App />);

  expect(screen.getAllByText(/Kazi Omar Faruk/i).length).toBeGreaterThan(0);
});