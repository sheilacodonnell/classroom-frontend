import React from 'react';
import { fetchTeachers } from '../actions/fetchTeachers'
import Teachers from '../components/Teachers'
import TeacherHome from '../components/TeacherHome'
import AssignmentsContainer from './AssignmentsContainer';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

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
          {/* // returns the first route that matches that path */}
          {/* <Switch>
          <Route path='/teachers/:id' render={(routerProps) => <TeacherHome {...routerProps} teachers={this.props.teachers}/>} />
          </Switch> */}
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