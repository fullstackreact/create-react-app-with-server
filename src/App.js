import React, { Component } from 'react';
import logo from './logo.svg';
import fetch from 'isomorphic-fetch';
import './App.css';

function parseJSON(response) {
  return response.json();
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastResponse: 'No request made.',
    };
  }
  componentDidMount() {
    fetch('http://localhost:3001/api/forecast', {
      accept: 'application/json',
    }).then(parseJSON)
      .then((json) => (
        this.setState({ lastResponse: json.text })
      ));
  }
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          {this.state.lastResponse}
        </p>
      </div>
    );
  }
}

export default App;
