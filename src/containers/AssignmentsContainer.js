import React from 'react';
import AssignmentInput from '../components/AssignmentInput';
import Assignments from '../components/Assignments';
import Assignment from '../components/Assignment';
import {fetchAssignments} from '../actions/fetchAssignments'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

class AssignmentsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchAssignments(this.props.teacher.id)
  }

  render() {
    return(
      <div>
        <Switch>
          {/* // returns the first route that matches that path */}
          <Route path='/assignments/new' component={AssignmentInput}/>
          <Route path='/teachers/:teacher_id/assignments/:id' render={(routerProps) => <Assignment {...routerProps} assignments={this.props.assignments.assignments} students={this.props.students}/>} />
        </Switch>
        <Assignments assignments={this.props.assignments.assignments} students={this.props.students}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    assignments: state.assignments,
    students: state.students
  }
}

export default connect(mapStateToProps, {fetchAssignments})(AssignmentsContainer);