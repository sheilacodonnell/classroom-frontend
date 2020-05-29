import React from 'react';
import { Redirect } from 'react-router-dom';

const Assignment = (props) => {

  let assignment = props.assignments[props.match.params.id -1]

  return (
    <div>
      {assignment ? null : <Redirect to='/assignments'/>}
      {assignment ? assignment.title : null} - 
      {assignment ? assignment.due_date : null}
    </div>
  )
}

export default Assignment;