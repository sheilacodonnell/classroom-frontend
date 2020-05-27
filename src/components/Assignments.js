import React from 'react';
import Assignment from '../components/Assignment'

const Assignments = (props) => {

  return (
    <div>
     {props.assignments.map(assignment => 
      <li>
        {assignment.title},
        {assignment.due_date},
        {assignment.description},
      </li>) }
    </div>
  )
}

export default Assignments;