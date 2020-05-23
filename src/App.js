import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/teachers/1/assignments')
    .then(res => res.json())
    .then(data => console.log(data)) 
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    )
  }
}

export default App