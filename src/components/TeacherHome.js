import React from 'react';
import AssignmentsContainer from '../containers/AssignmentsContainer';
import StudentsContainer from '../containers/StudentsContainer';

import Students from './Students';
import { Route, Link } from 'react-router-dom';

const TeacherHome = (props) => {

  let teacher = props.teachers.find(teacher => teacher.id == props.match.params.id)

  return (
    <div>
      <h1>{teacher ? teacher.name : null}'s Teacher Portal</h1>
      <h3>Current Assignments</h3>
      { teacher ? <AssignmentsContainer teacher={teacher} /> : null }
      <h3>Current Students</h3>
      { teacher ? <Students students={teacher.students} teacher={teacher} /> : null }
    </div>
  )
}

export default TeacherHome;