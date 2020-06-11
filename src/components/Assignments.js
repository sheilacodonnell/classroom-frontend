import React from 'react';
import { Link } from 'react-router-dom';
import Assignment from '../components/Assignment';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

const Assignments = (props) => {
  if (!props.assignments){
    return <div>Loading</div>
  }
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