import React from 'react';
import StudentInput from '../components/AssignmentInput';
import Students from '../components/Students';
import { fetchStudents } from '../actions/fetchStudents'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

class StudentsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchStudents()
  }

  render() {
    return(
      <div>

        <Students students={this.props.students} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students.students
  }
}

export default connect(mapStateToProps, {fetchStudents})(StudentsContainer);