import React, {useContext} from 'react';
import { UserContext } from './UseContext';

const UseContextC = () => {
    const user = useContext(UserContext);
  return (
    <div className='code'>
      <h2>{`Hi ${user}`}</h2>
    </div>
  )
}

export default UseContextC
