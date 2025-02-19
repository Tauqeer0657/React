import React from 'react'
import { useState } from 'react'

const UpdateArray = () => {
    const [fruits, setFruits] = useState(["Apple", "Banana", "Mango"]);
    const [newFruit, setNewFruit] = useState();

    const handleAddingFruit = (e) => {
        setNewFruit(e.target.value);
    }

    const addFruit = () => {
        setFruits(prevFruit => [...prevFruit, newFruit]);
        setNewFruit("");
    }

    const deleteFruit = (i) => {
        setFruits(prevFruit => prevFruit.filter((fruit, index) => index !== i));
    }

  return (
    <div>
        <h2>Our Fruits</h2>
        <ul>
        {fruits.map((fruit, index) => 
            <li key = {index} onClick={() => deleteFruit(index)}>{fruit}</li>)
        }
        </ul>
        <input type="text" value={newFruit} onChange={handleAddingFruit} placeholder='add ur fruit'/>
        <button onClick={addFruit}>Add Fruit</button>
       
    </div>
  )
}

export default UpdateArray
