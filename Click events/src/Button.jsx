import React from 'react'

const Button = () => {
  let count = 0;
  const onHandleClick = (name) => {
    if(count < 3){
      count++;
    console.log(`Clicked by ${name} ${count} times`);
    }else{
    console.log(`${name} Stop clicking me`);
    }
  }
  return (
    <button onClick={() => onHandleClick("Bro")}>Click me</button>
  )
}

export default Button
