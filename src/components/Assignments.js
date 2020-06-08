import React from 'react';
import {  Link } from 'react-router-dom';

const Assignments = (props) => {
  return (
    <div>
     {props.assignments.map(assignment =>
     <li>
      <Link to={`/teachers/${assignment.teacher_id}/assignments/${assignment.id}`}>{assignment.title}</Link>
      </li>)}
    </div>
  )
}

export default Assignments;