import React from 'react'
import PropTypes from 'prop-types'
const Student = () => {    
  return (
    <div className='student'>
      <p>Student's Name : {props.name}</p>
      <p>Student's age : {props.age}</p>
      <p>isStudent : {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

// If we wanna use default props
//
// const Student = ({ name = "Guest", age = 0, isStudent = false }) => {    
//   return (
//     <div className='student'>
//       <p>Student's Name : {name}</p>
//       <p>Student's age : {age}</p>
//       <p>isStudent : {isStudent ? "Yes" : "No"}</p>
//     </div>
//   )
// }

export default Student
