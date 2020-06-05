import React from 'react';
import { Redirect } from 'react-router-dom';
import SubmissionsContainer from '../containers/SubmissionsContainer'

const Assignment = (props) => {
  let assignment = props.assignments.find(assignment => assignment.id == props.match.params.id)

  return (
    <div>
      <h2>
        {assignment ? null : <Redirect to='/assignments'/>}
        {assignment ? assignment.title : null} - 
        {assignment ? assignment.teacher.name : null} - 
        {assignment ? assignment.due_date : null}
      </h2>
      <SubmissionsContainer assignment={assignment} students={props.students}/>
    </div>
  )
}

export default Assignment;