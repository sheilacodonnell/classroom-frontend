import React from 'react';
import AssignmentInput from '../components/AssignmentInput';
import Assignments from '../components/Assignments';
import Assignment from '../components/Assignment';
import {fetchAssignments} from '../actions/fetchAssignments'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

class AssignmentsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchAssignments()
  }

  render() {
    return(
      <div>
        <Switch>
          {/* // returns the first route that matches that path */}
          <Route path='/assignments/new' component={AssignmentInput}/>
          <Route path='/assignments/:id' render={(routerProps) => <Assignment {...routerProps} assignments={this.props.assignments.assignments} students={this.props.students}/>} />
          <Route path='/assignments' render={(routerProps) => <Assignments {...routerProps} assignments={this.props.assignments.assignments} students={this.props.students}/>} />
        </Switch>
        {/* <AssignmentInput /> */}
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