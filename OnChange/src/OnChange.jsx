import React from 'react'
import { useState } from 'react'

const OnChange = () => {
    const [name, setName] = useState("")
    const handleChange = (e) => {
        setName(e.target.value)
    }
  return (<div>
    <input type="text" onChange={handleChange}/>
    <p>Name: {name}</p>
    </div>
  )
}

export default OnChange
