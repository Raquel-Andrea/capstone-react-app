import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import Greetings from './Greetings';

// Test the Greetings component with the name "Mpho".
test('renders a personalised greeting for Mpho', () => {
  // Render the component with Mpho as the name prop.
  const { container } = render(<Greetings name="Mpho" />);

  // Compare the rendered component with its stored snapshot.
  expect(container).toMatchSnapshot();
});

// Test the Greetings component with the name "Lydia".
test('renders a personalised greeting for Lydia', () => {
  // Render the component with Lydia as the name prop.
  const { container } = render(<Greetings name="Lydia" />);

  // Compare the rendered component with its stored snapshot.
  expect(container).toMatchSnapshot();
});

// Test the default behaviour when no name prop is provided.
test('renders the default greeting when no name is provided', () => {
  // Render the component without providing a name.
  const { container } = render(<Greetings />);

  // The snapshot should contain the default "Hello, World!" greeting.
  expect(container).toMatchSnapshot();
});