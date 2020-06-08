import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TeachersContainer from './containers/TeachersContainer';
import Teachers from './components/Teachers'


class App extends React.Component {
  render() {
    return (
      <div className="App">

        <TeachersContainer />
      </div>
    )
  }
}

//mapStateToProps: get value of store
//mapDispatchToProps: add something to store

export default connect()(App);

// the connect function calls store.dispatch with the action object