import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import SubmissionsContainer from '../containers/SubmissionsContainer'
import { fetchAssignment } from '../actions/fetchAssignment'
import { fetchStudents } from '../actions/fetchStudents'
import { render } from '@testing-library/react';

class Assignment extends React.Component {

  componentWillMount() {
    this.props.fetchAssignment(this.props.match.params.teacher_id, this.props.match.params.id)
  }
  render() {

  const assignment = this.props.assignment

  if (!assignment){
    return <div>Loading</div>
  }
  return (
    <div>
      <h2>
        { assignment.title } - 
        Due on {assignment.due_date }
      </h2>
      <SubmissionsContainer assignment={assignment} students={this.props.students}/>
    </div>
  )
}}

const mapStateToProps = (state) => {
  return { 
    assignment: state.assignments.assignment,
    students: state.students.students
  }
}

export default connect(mapStateToProps, { fetchAssignment })(Assignment);