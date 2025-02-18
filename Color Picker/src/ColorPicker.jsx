import React from 'react'
import { useState } from 'react'

const ColorPicker = () => {
    const [color, setColor] = useState();
    const handleColor = (e) => {
        setColor(e.target.value);
    }
  return (
    <div>
      <div style={{background:color}}>Color is {color}</div>
      <input type="color" value={color} onChange={handleColor}/>
    </div>
  )
}

export default ColorPicker
