import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import AssignmentsContainer from './containers/AssignmentsContainer';
import StudentsContainer from './containers/StudentsContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <StudentsContainer />
        <AssignmentsContainer />
      </div>
    )
  }
}

//mapStateToProps: get value of store
//mapDispatchToProps: add something to store

export default connect()(App);

// the connect function calls store.dispatch with the action object