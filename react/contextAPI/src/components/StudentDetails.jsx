import React, { useContext } from 'react'
import studentContext from './StudentContext'

function StudentDetails() {
    const student = useContext(studentContext)
  return (
    <div>
      <h2>Student Detials</h2>
      {student.map((s,index) => (
        <div key={index}>
            <p>Student name: {s.name}</p>
            <p>Student age: {s.age}</p>
            <p>Student gender: {s.gender}</p>
        <hr />
        </div>
      ))}
    </div>
  )
}

export default StudentDetails
