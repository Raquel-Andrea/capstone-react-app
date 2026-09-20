// Mock React's createRoot function so we can test the main entry file
// without actually starting the application.
const renderMock = vi.fn();

vi.mock("react-dom/client", () => ({
  createRoot: vi.fn(() => ({
    render: renderMock,
  })),
}));

// Mock the App component because we only need to test that main.jsx
// correctly starts the React application.
vi.mock("./App.jsx", () => ({
  default: () => null,
}));

// Mock the CSS file because it is not needed for this test.
vi.mock("./index.css", () => ({}));

import { createRoot } from "react-dom/client";

// Create the root element that main.jsx expects to find.
document.body.innerHTML = '<div id="root"></div>';

// Import main.jsx so that its code is executed.
await import("./main.jsx");

test("main.jsx creates the React root and renders the application", () => {
  // Check that React's createRoot function was called.
  expect(createRoot).toHaveBeenCalled();

  // Check that the application's render method was called.
  expect(renderMock).toHaveBeenCalled();
});