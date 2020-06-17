import React from 'react';
import { connect } from 'react-redux'
import SubmissionsContainer from '../containers/SubmissionsContainer'
import { fetchAssignment } from '../actions/fetchAssignment'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

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
      <Link to={`/teachers/${assignment.teacher_id}`}>Return to Teacher Portal</Link>
      <h2>
        { assignment.title } - 
        Due on <Moment format="MM/DD/YYYY">{assignment.due_date }</Moment>
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