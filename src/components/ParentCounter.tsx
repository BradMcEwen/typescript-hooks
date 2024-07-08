import React from 'react';
import Counter from './Counter';

const ParentCounter = () => {
  return (
    <div>
      <h1>Test Counter Component</h1>
      <Counter initialCount={0} />
      <Counter initialCount={10} />
      <Counter initialCount={20} />
    </div>
  );
};

export default ParentCounter;
