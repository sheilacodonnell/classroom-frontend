import React from 'react';
import { connect } from 'react-redux'
import { fetchTeacher } from '../actions/fetchTeacher'
import AssignmentsContainer from '../containers/AssignmentsContainer';
import StudentsContainer from '../containers/StudentsContainer';

import Students from './Students';
import { Route, Link } from 'react-router-dom';

class TeacherHome extends React.Component {

  componentWillMount() {
    this.props.fetchTeacher(this.props.match.params.id)
  }

  render() {
    const teacher = this.props.teacher
    const students = this.props.teacher.students

    if (!teacher){
      return <div>Loading</div>
    }

    return (
    <div>
        <h1>{teacher.name}'s Teacher Portal</h1>
      <h3>Current Assignments</h3>
       <AssignmentsContainer teacher={teacher} students={students} />
      <h3>Current Students</h3>
        <Students students={students} />
      </div>
    )}      
}

const mapStateToProps = (state) => {
  return { 
    teacher: state.teachers.teacher,
  }
}

export default connect(mapStateToProps, { fetchTeacher })(TeacherHome);