import React from 'react'
import { connect } from 'react-redux'
import addSubmission from '../actions/addSubmission'

class SubmissionInput extends React.Component {

  state = {
    grade: 0,
    student_id: this.props.student.id,
  }

  handleChange = (event) => {
    this.setState({
      grade: event.target.value,
      student_id: this.props.student.id
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addSubmission(this.state, this.props.assignment.id, this.props.assignment.teacher_id)
    this.setState({
      grade: '',
      student_id: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <td>{this.props.student.name}</td>
          <td>
          <input type="text" value={this.state.grade} name="grade" onChange={this.handleChange}/><br/>
          </td>
          {/* <select value={this.state.student_id} name="student_id" onChange={this.handleChange}>
            <option value='' disabled></option>
              {this.props.students.students.map(student =>
                <option value={student.id}>{student.name}</option>
              )}

          </select> */}
          <td>
          <input type="submit" />
          </td>
        </form>
      </div>
    )
  }
}

export default connect(null,  { addSubmission })(SubmissionInput);