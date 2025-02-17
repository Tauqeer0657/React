import List from "./List";

function App() {
  const fruits = [{id: 1, name: "apple", calories: 90},
                  {id: 2, name: "orange", calories: 90},
                  {id: 3, name: "banana", calories: 90}, 
                  {id: 4, name: "grapes", calories: 45}, 
                  {id: 5, name: "dates", calories: 40}];

  const vegetables = [{id: 6, name: "potato", calories: 110},
                    {id: 7, name: "tomato", calories: 80},
                    {id: 8, name: "brinjal", calories: 90}, 
                    {id: 9, name: "papaya", calories: 45}, 
                    {id: 10, name: "cauliflower", calories: 40}];

  return (
    <>
    <List item= {fruits} category="Fruits"/>
    <List item= {vegetables} category="Vegetables"/>
    </>
  )
}

export default App
