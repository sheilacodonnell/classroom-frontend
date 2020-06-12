import React from 'react';
import { connect } from 'react-redux'
import SubmissionsContainer from '../containers/SubmissionsContainer'
import { fetchAssignment } from '../actions/fetchAssignment'

class Assignment extends React.Component {

  componentWillMount() {
    this.props.fetchAssignment(this.props.match.params.teacher_id, this.props.match.params.id)
  }
  render() {
  const assignment = this.props.assignment
  const students = this.props.students

  if (!assignment){
    return <div>Loading</div>
  }
  return (
    <div>
      <h2>
        { assignment.title } - 
        Due on {assignment.due_date }
      </h2>
      <SubmissionsContainer assignment={assignment} students={students}/>
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