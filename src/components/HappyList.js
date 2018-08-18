import React, { Component } from 'react';
import { database } from '../database/connection';
import HappyPlace from './HappyPlace';

class HappyList extends Component {
  handleSelect = key => {
    const currentUser = this.props.user;
    database
      .ref('/pubs')
      .child(key)
      .child('votes')
      .child(currentUser.uid)
      .set(currentUser.displayName);
  };
  handleDeSelect = key => {
    const currentUser = this.props.user;
    database
      .ref('/pubs')
      .child(key)
      .child('votes')
      .child(currentUser.uid)
      .remove();
  };

  render() {
    const { currentUser, pubs } = this.props;
    // Cannot use .map over object so Object.keys will work
    const pubList = Object.keys(pubs).map(key => {
      const pub = pubs[key];
      return (
        <HappyPlace
          key={key}
          {...pub}
          handleSelect={() => this.handleSelect(key)}
          handleDeSelect={() => this.handleDeSelect(key)}
        />
      );
    });
    return <div className="App">{pubList}</div>;
  }
}

export default HappyList;
