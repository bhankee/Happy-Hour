import React, { Component } from 'react';
//import './HappyPlace.css';

import { auth, database } from '../database/connection';

class AddHappyPlace extends Component {
  state = { placeName: '' };

  handleClick = event => {
    event.preventDefault();
    const placeRef = database.ref('/pubs');
    console.log('state: ', this.state.placeName);
    placeRef.push({ name: this.state.placeName });
  };

  render() {
    const { placeName } = this.state;
    return (
      <div>
        <input
          type="text"
          value={placeName}
          onChange={event => this.setState({ placeName: event.target.value })}
        />
        <button onClick={this.handleClick}>Add Awesome Place</button>
        <div />
      </div>
    );
  }
}

export default AddHappyPlace;
