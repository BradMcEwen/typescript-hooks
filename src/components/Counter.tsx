import React, { useState } from 'react';

interface CounterProps {
  initialCount: number;
}

const Counter = ({ initialCount }: CounterProps) => {
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(initialCount);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;

