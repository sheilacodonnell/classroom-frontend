import React from 'react';
import AssignmentInput from '../components/AssignmentInput';
import Assignments from '../components/Assignments';
import Assignment from '../components/Assignment';
import {fetchAssignments} from '../actions/fetchAssignments'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

class AssignmentsContainer extends React.Component {

  // componentDidMount() {
  //   this.props.fetchAssignments(this.props.teacher.id)
  // }

  render() {
    return(
      <div>
          {/* // returns the first route that matches that path */}
          {/* <Route path='/teachers/:teacher_id/assignments/:id' render={(routerProps) => <Assignment {...routerProps} assignments={this.props.teacher.assignments} students={this.props.teacher.students}/>} /> */}
          <Route path='/teachers/:teacher_id/assignments/new' component={AssignmentInput}/>
        <Assignments assignments={this.props.teacher.assignments} students={this.props.teacher.students}/>
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     assignments: state.assignments,
//     students: state.students
//   }
// }

export default (AssignmentsContainer);