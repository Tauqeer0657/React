import React from 'react'
import { useState } from 'react'

const ArrayOfObject = () => {
    const [cars, setCars] = useState([]);
    const [year, setYear] = useState();
    const [manufacturer, setManufacturer] = useState();
    const [model, setModel] = useState();

    const handleYear = (e) => {
        setYear(prevYear => prevYear = e.target.value);
        console.log(year);
    }

    const handleManufacturer = (e) => {
        setManufacturer(prevManufacturer => prevManufacturer = e.target.value);
        console.log(manufacturer); 
    }

    const handleModel = (e) => {
        setModel(prevModel => prevModel = e.target.value);
        console.log(model);
    }

    const addCar = () => {
        const newCar = {year: year, manufacturer: manufacturer, model: model};
        setCars(prevCars => [...prevCars, newCar]);
        setYear("");
        setManufacturer("");
        setModel("");
    }

    const removeCar = (i) => {
        setCars(prevCars => prevCars.filter((_, index) => index !== i));
    }

  return (
    <div>
      <div><ul>
        {cars.map((car,index) => <li key={index} onClick={() => removeCar(index)}>{car.year} {car.manufacturer} {car.model}</li>)}
        </ul></div>
      <input type="number" value = {year} onChange={handleYear}/><br/>
      <input type="text" value = {manufacturer} onChange={handleManufacturer}/><br/>
      <input type="text" value = {model} onChange={handleModel}/><br/>
      <button onClick={addCar}>Add Car</button>
    </div>
  )
}

export default ArrayOfObject
