import React from 'react';
import { fetchTeachers } from '../actions/fetchTeachers'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TeachersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTeachers()
  }

  render() {
    return(
      <div>
      <h1>Current Teachers</h1>
        {this.props.teachers.map(teacher =>
          <li key={teacher.id}>
          <Link to={`/teachers/${teacher.id}`}>{teacher.name}</Link>
          </li>)}  
        <div>
      </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    teachers: state.teachers.teachers
  }
}

export default connect(mapStateToProps, { fetchTeachers })(TeachersContainer);