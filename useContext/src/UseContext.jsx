import React, {createContext} from 'react';
import UseContextB from './UseContextB';

export const UserContext = createContext();

const UseContext = () => {
  const user = "Bro";
  return (
    <div className='code'>
      <h2>{`Hi ${user}`}</h2>
      <UserContext.Provider value={user}>
      <UseContextB user = {user}/>
      </UserContext.Provider>
      </div>

  )
}

export default UseContext
