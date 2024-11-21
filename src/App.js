return (
  <div className="App">
    <h1 className="counter">{count}</h1>
    <div className="button-container">
      <button onClick={increment} className='inc'>+</button>
      <button onClick={decrement} className='dec'>-</button>
      <button onClick={reset} className='reset'>Reset</button>
    </div>
    {count === 0 && <p className="message">Counter cannot go below zero!</p>}
    <p className="instruction">Use the arrow up and down keys to manage the counter.</p>
  </div>
);