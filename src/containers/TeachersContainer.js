import React from 'react';
import { fetchTeachers } from '../actions/fetchTeachers'
import Teachers from '../components/Teachers'
import TeacherHome from '../components/TeacherHome'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

class TeachersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTeachers()
  }

  render() {
    return(
      <div>
        <Switch>
          {/* // returns the first route that matches that path */}
          <Route path='/teachers/:id' render={(routerProps) => <TeacherHome {...routerProps} teachers={this.props.teachers}/>} />
          <Route path='/' render={(routerProps) => <Teachers {...routerProps} teachers={this.props.teachers}/>} />
        </Switch>
    
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    teachers: state.teachers.teachers
  }
}

export default connect(mapStateToProps, {fetchTeachers})(TeachersContainer);