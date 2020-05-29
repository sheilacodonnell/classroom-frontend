import React from 'react';
import SubmissionInput from '../components/SubmissionInput'
import Submissions from '../components/Submissions'

class SubmissionsContainer extends React.Component {

  render() {
    return(
      <div>
        Submission Container
        <SubmissionInput assignment={this.props.assignment}/>
        <Submissions submissions={this.props.assignment && this.props.assignment.submissions}/>
      </div>
    )
  }
}

export default SubmissionsContainer;