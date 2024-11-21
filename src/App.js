import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp') {
      increment();
    } else if (event.key === 'ArrowDown') {
      decrement();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [count]); // Dependency array includes count to ensure it updates correctly

  return (
    <div className="App">
      <h1 className="counter">{count}</h1>
      <div className="button-container">
        <button onClick={increment} className='inc'>+</button>
        <button onClick={decrement} className='dec'>-</button>
        <button onClick={reset} className='reset'>Reset</button>
      </div>
      {count === 0 && <p className="message">Counter cannot go below zero!</p>}
    </div>
  );
}

export default App;