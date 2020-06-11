import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

const Teachers = (props) => {
  return (
    <div>
      <h1>Current dfdTeachers</h1>
      {props.teachers.map(teacher =>
      <li>
        {<Link to={`/teachers/${teacher.id}`}>{teacher.name}</Link>}
        </li>)}  
    </div>
  )
}

export default Teachers;