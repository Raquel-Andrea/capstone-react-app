import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // Store the current count value. The counter starts at 2.
  const [count, setCount] = useState(2);

  // Decrease the count by 1 when the button is clicked.
  // The condition prevents the count from becoming negative.
  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Practical Task</h1>

      <div className="card">
        {/* Clicking this button runs the decrement function. */}
        <button onClick={decrement}>count is {count}</button>
      </div>
    </>
  );
}

export default App;