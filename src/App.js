import React, { Component } from 'react';
import { database } from './database/connection';
import './App.css';

class App extends Component {
  state = {
    data: ''
  };

  componentDidMount() {
    console.log('COMPONENT DID MOUNT FIRED!');

    database.ref().on('value', snapshot => {
      this.setState({
        data: 'snpshota'
      });
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Happy Hour</h1>
        <h3>{this.state.data}</h3>
      </div>
    );
  }
}

export default App;
