import React from 'react';
import AssignmentInput from '../components/AssignmentInput';
import Assignments from '../components/Assignments';
import { connect } from 'react-redux';
import {fetchAssignments} from '../actions/fetchAssignments'

class AssignmentsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchAssignments()
  }

  render() {
    return(
      <div>
        Assignments Container
        <AssignmentInput />
        <Assignments assignments={this.props.assignments}/>
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