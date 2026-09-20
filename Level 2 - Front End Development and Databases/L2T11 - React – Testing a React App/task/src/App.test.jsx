import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import App from './App';

// Test that the count cannot decrease below zero,
// even when the button is clicked more times than necessary.
test('count does not go below zero after three button clicks', () => {
  // Render the App component so that we can interact with it in the test.
  render(<App />);

  // Find the button that displays the current count.
  const button = screen.getByRole('button');

  // Click the button three times to test the decrement functionality.
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);

  // The count starts at 2, so after three clicks it should remain at 0
  // instead of decreasing to -1.
  expect(button).toHaveTextContent('count is 0');
});