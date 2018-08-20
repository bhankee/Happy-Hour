import React, { Component } from 'react';
import { database } from '../database/connection';
import HappyPlace from './HappyPlace';
import './HappyList.css';

class HappyList extends Component {
  state = {
    winner: ''
  };
  handleSelect = key => {
    const user = this.props.user;
    database
      .ref('/pubs')
      .child(key)
      .child('votes')
      .child(user.uid)
      .set(user.displayName);
  };

  handleDeSelect = key => {
    const user = this.props.user;
    database
      .ref('/pubs')
      .child(key)
      .child('votes')
      .child(user.uid)
      .remove();
  };

  render() {
    const { user, pubs } = this.props;
    // Cannot use .map over object so Object.keys will work
    const pubList = Object.keys(pubs).map(key => {
      const pub = pubs[key];
      return (
        <HappyPlace
          key={key}
          {...pub}
          user={user}
          handleSelect={() => this.handleSelect(key)}
          handleDeSelect={() => this.handleDeSelect(key)}
        />
      );
    });
    return <div className="pubContainer">{pubList}</div>;
  }
}

export default HappyList;
