import React from 'react';
import SubmissionInput from '../components/SubmissionInput'
import Submissions from '../components/Submissions'

class SubmissionsContainer extends React.Component {

  render() {
    return(
      <div>
        {/* <SubmissionInput assignment={this.props.assignment} students={this.props.students}/> */}
        <Submissions submissions={this.props.assignment && this.props.assignment.submissions} assignment={this.props.assignment} students={this.props.students && this.props.students}/>
      </div>
    )
  }
}

export default SubmissionsContainer;