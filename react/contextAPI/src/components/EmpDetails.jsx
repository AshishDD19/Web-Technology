import React, { useContext } from 'react'
import EmpContext from './EmpContext'

function EmpDetails() {
  const emp = useContext(EmpContext)

  return (
    <div>

      <h2>Employee Details</h2>

      {emp.map((e,index) => (
          <div key={index}>
          <p>ID: {e.id}</p>
          <p>Role: {e.Rrle}</p>
          <p>Salary: {e.salary}</p>
          <hr />
        </div>
      )
        
      )}
    </div>
  )
}

export default EmpDetails
