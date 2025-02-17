import React from 'react'

const UserGreeting = (props) => {
    const welcomeText = <h2>Welcome {props.userName}</h2>;
    const loginText = <h2>Please logged in</h2>;
  return (
    props.isLoggedIn ? welcomeText : loginText
  )
}

export default UserGreeting
