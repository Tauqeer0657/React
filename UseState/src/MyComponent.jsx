import React, {useState} from 'react';

const MyComponent = () => {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployeed, SetIsEmployeed] = useState(false);

    const updateName = () => {
        setName("Tauqeer");
    }

    const updateAge = () => {
        setAge(22);
    }

    const toggleIsEmployeed = () => {
        SetIsEmployeed(!isEmployeed);
    }

  return (
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick={updateAge}>Set Age</button>
        <p>isEmployeed: {isEmployeed ? "Yes" : "No"}</p>
        <button onClick={toggleIsEmployeed}>Toggle Employee Status</button>
    </div>
  )
}

export default MyComponent
