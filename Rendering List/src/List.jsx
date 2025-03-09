import React from 'react'

const List = (props) => {
  console.log(props.item);
  const itemLists = props.item;
  const category = props.category;
                    
    const listItem = itemLists.map(itemList => <li key= {itemList.id}>
                                                   {itemList.name}: &nbsp; 
                                                   {itemList.calories}
                                               </li>)

  return (<>
            <h3>{category}</h3>
            <ol>{listItem}</ol>
          </>)
}

export default List
