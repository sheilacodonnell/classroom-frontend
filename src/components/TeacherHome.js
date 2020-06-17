import React from 'react';
import { connect } from 'react-redux'
import { fetchTeacher } from '../actions/fetchTeacher'
import Assignments from '../components/Assignments';
import AssignmentInput from '../components/AssignmentInput';
import Students from './Students';

class TeacherHome extends React.Component {

  state = {
    showNewAssignment: false
  }

  componentWillMount() {
    this.props.fetchTeacher(this.props.match.params.id)
  }
  
  showForm() {
    console.log('this is:', this);
    this.setState({
      showNewAssignment: true,
    });
  }

  render() {
    const teacher = this.props.teacher
    const students = this.props.teacher.students
    const assignments = this.props.assignments

    if (!teacher && !assignments){
      return <div>Loading</div>
    }
    return (
    <div>
      <h1>{teacher.name}'s Teacher Portal</h1>
      <button onClick={() => this.showForm()}>
        Create Assignment
      </button>
        {this.state.showNewAssignment?
            <AssignmentInput assignments={assignments} teacher={teacher}/> :
            null
          }
          
      <h3>Current Assignments</h3>
       <Assignments assignments={assignments} teacher={teacher} students={students} />
      <h3>Current Students</h3>
        <Students students={students} />
      </div>
    )}      
  }

const mapStateToProps = (state) => {
  return { 
    teacher: state.teachers.teacher,
    assignments: state.assignments.assignments
  }
}

export default connect(mapStateToProps, { fetchTeacher })(TeacherHome);