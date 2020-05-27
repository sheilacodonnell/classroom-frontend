import React from 'react'

const Assignment = (props) => {

  let assignment = props.assignments[props.match.params.id -1]

  return (
    <div>
      {assignment ? assignment.title : null} - 
      {assignment ? assignment.due_date : null}
    </div>
  )
}

export default Assignment;