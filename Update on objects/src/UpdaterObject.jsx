import React, { useState } from 'react'

const UpdaterObject = () => {
    const [car, setCar] = useState({year: 2024,
                                    manufacturer: "Ford",
                                    model: "Mustang"});
    const handleYearChange = (e) => {
        setCar(prevCar => ({...prevCar, year: e.target.value}))
    }
    const handleManufacturerChange = (e) => {
        setCar(prevCar => ({...prevCar, manufacturer: e.target.value}))
    }
    const handleModelChange = (e) => {
        setCar(prevCar => ({...prevCar, model: e.target.value}))
    }
  return (
    <div>
      <p>Your Favourite car is {car.year} {car.manufacturer} {car.model}</p>
      <input type="number" value= {car.year} onChange={handleYearChange} />
      <input type="text" value= {car.manufacturer} onChange={handleManufacturerChange} />
      <input type="text" value= {car.model} onChange={handleModelChange} />
    </div>
  )
}

export default UpdaterObject
