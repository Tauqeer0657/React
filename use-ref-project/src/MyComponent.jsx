import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

const MyComponent = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        console.log("Component Re rendered");
    })

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }

  return (
    <>
    <button onClick={handleClick}>
        Click me!
    </button>
    <input ref = {inputRef} />
    </>
  )
}

export default MyComponent
