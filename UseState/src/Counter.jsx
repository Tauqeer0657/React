import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }
    const resetCount = () => {
        setCount(0);
    }
    const decreaseCount = () => {
        setCount(count - 1);
    }
  return (
    <div>
      <p>{count}</p>
      <button onClick={increaseCount}>Increment</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={decreaseCount}>Decrement</button>
    </div>
  )
}

export default Counter
