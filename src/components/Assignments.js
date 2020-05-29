import React from 'react';
import { Route, Link } from 'react-router-dom';
import Assignment from './Assignment'

const Assignments = (props) => {

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