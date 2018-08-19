import React, { Component } from 'react';
import './Profile.css';
import { auth } from '../database/connection';

class Profile extends Component {
  state = {};

  render() {
    const { user } = this.props;
    return (
      <div className="profileContainer">
        <img
          className="profileImg"
          src={user.photoURL}
          alt={user.displayName}
        />

        <div className="userIntro">
          <h1>Welcome {this.props.user.displayName}</h1>
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      </div>
    );
  }
}

export default Profile;
