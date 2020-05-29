import React from 'react';
import { Route, Link } from 'react-router-dom';

const Assignments = (props) => {
console.log(props)
  return (
    <div>
     {props.assignments.map(assignment =>
     <li>
      <Link to={`/assignments/${assignment.id}`}>{assignment.title}</Link>
      </li>)}

    </div>
  )
}

export default Assignments;