import React, {useEffect} from 'react'
import { useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(()=> {
        document.title = `Count : ${count}`;
    },[count]);
    function increaseCount() {
        setCount(c => c + 1);
    }
  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={increaseCount}>Increase</button>
    </div>
  )
}

export default UseEffect
