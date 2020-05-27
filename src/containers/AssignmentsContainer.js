import React from 'react';
import AssignmentInput from '../components/AssignmentInput';
import Assignments from '../components/Assignments';
import Assignment from '../components/Assignment';
import {fetchAssignments} from '../actions/fetchAssignments'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

class AssignmentsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchAssignments()
  }

  render() {
    return(
      <div>
        <Route path='/assignments/new' component={AssignmentInput}/>
        <Route exact path='/assignments/:id' render={(routerProps) => <Assignment {...routerProps} assignments={this.props.assignments} />} />
        <Route exact path='/assignments' render={(routerProps) => <Assignments {...routerProps} assignments={this.props.assignments} />} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    assignments: state.assignments
  }
}

export default connect(mapStateToProps, {fetchAssignments})(AssignmentsContainer);