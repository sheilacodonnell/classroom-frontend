import React from 'react'
import { connect } from 'react-redux'
import addSubmission from '../actions/addSubmission'

class SubmissionInput extends React.Component {

  state = {
    grade: 0,
    student_id: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
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
          <label>Assignment Grade</label>
          <input type="text" value={this.state.grade} name="grade" onChange={this.handleChange}/><br/>
          <label>Student</label>
          <input type="text" value={this.state.student_id} name="student_id" onChange={this.handleChange}/><br/>

          {/* <select value={this.state.student_id} name="student_id" onChange={this.handleChange}>
            <option value="1">Harry</option>
            <option value="2">Ron</option>
          </select> */}
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null,  { addSubmission })(SubmissionInput);