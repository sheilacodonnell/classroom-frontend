import React from 'react';
import Submissions from '../components/Submissions'

class SubmissionsContainer extends React.Component {

  render() {

    const students = this.props.students

    if (!students){
      return <div>Loading</div>
    }
    return(
      <div>
        <Submissions submissions={this.props.assignment.submissions} assignment={this.props.assignment} students={this.props.students}/>
      </div>
    )
  }
}

export default SubmissionsContainer;