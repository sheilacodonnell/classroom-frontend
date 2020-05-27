import React from 'react';
import Assignment from './Assignment'

const Assignments = (props) => {

  return (
    <div>
     {props.assignments.map(assignment => 
      <li><Assignment assignment={assignment} /></li>)}
    </div>
  )
}

export default Assignments;