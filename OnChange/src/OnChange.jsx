import React from 'react'
import { useState } from 'react'

const OnChange = () => {
    const [name, setName] = useState()
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const [payment, setPayment] = useState()
    const handlePaymentChange = (e) => {
        setPayment(e.target.value)
    }
  return (<div>
    <input type="text" value= {name} onChange={handleChange}/>
    <p>Name: {name}</p>
    <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
    </select>
    <p>Payment: {payment}</p>
    </div>
  )
}

export default OnChange
