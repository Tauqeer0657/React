import React from 'react'

const List = () => {
    const fruits = [{id: 1, name: "apple", calories: 90},
                    {id: 2, name: "orange", calories: 90},
                    {id: 3, name: "banana", calories: 90}, 
                    {id: 4, name: "grapes", calories: 45}, 
                    {id: 5, name: "dates", calories: 40}];

    // const lowCalFruit = fruits.filter(fruit => fruit.calories < 50);
    // const highCalFruit = fruits.filter(fruit => fruit.calories > 50);
                    
    const listItem = fruits.map(fruit => <li key= {fruit.id}>
                                         {fruit.name}: &nbsp; 
                                         {fruit.calories}</li>)

  return (<ol>{listItem}</ol>)
}

export default List
