import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {fetchAssignments} from './actions/fetchAssignments'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchAssignments({type: 'FETCH_ASSIGNMENTS'})
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    )
  }
}

//mapStateToProps: get value of store
//mapDispatchToProps: add something to store

export default connect(null, {fetchAssignments})(App);

// the connect function calls store.dispatch with the action object