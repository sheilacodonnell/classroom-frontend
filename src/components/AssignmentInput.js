import React from 'react';
import { connect } from 'react-redux';
import { addAssignment } from '../actions/addAssignment'

class AssignmentInput extends React.Component {

  state = {
    title: '',
    due_date: '',
    description: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addAssignment(this.state, this.props.teacher.id)
    this.setState({
      title: '',
      due_date: '',
      description: '',
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Assignment Title</label>
          <input type="text" value={this.state.title} name="title" onChange={this.handleChange}/><br/>
          <label>Assignment Due Date</label>
          <input type="date" value={this.state.due_date} name="due_date" onChange={this.handleChange}/><br/>
          <label>Assignment Description</label>
          <input type="text" value={this.state.description} name="description" onChange={this.handleChange}/><br/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, {addAssignment})(AssignmentInput);