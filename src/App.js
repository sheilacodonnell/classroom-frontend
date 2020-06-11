import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import TeachersContainer from './containers/TeachersContainer';
import TeacherHome from './components/TeacherHome';
import Assignment from './components/Assignment';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      {/* <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Homes</Link>
          </li>
        </ul>
      </nav> */}
        <Switch>
          <Route path='/teachers/:teacher_id/assignments/:id' component={Assignment} />
          <Route path='/teachers/:id' component={TeacherHome} />
          <Route exact path="/teachers" component={TeachersContainer} />
        </Switch>
      </div>
      </BrowserRouter>

    )
  }
}

//mapStateToProps: get value of store
//mapDispatchToProps: add something to store

export default connect()(App);

// the connect function calls store.dispatch with the action object