import React from 'react'

const Button = () => {
  const onHandleClick = (e) => {
    console.log(e);
    e.target.innerHTML = "U clicked it!!!"
  }

  return (
    <button onClick={(e) => onHandleClick(e)}>Click me</button>
  )
}

export default Button
