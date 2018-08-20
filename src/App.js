import React, { Component } from 'react';
import { auth, database } from './database/connection';
import './App.css';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import AddHappyPlace from './components/AddHappyPlace';
import HappyList from './components/HappyList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  state = {
    currentUser: null,
    pubs: {}
  };

  componentDidMount() {
    const pubRef = database.ref('/pubs');
    // Check if user logged in or out
    auth.onAuthStateChanged(currentUser => {
      console.log('USER: ', currentUser);
      this.setState({ currentUser });

      pubRef.on('value', snapshot => {
        console.log('SNAPSHOT: ', snapshot.val());
        this.setState({ pubs: snapshot.val() });
      });
    });
  }
  render() {
    const { currentUser, pubs } = this.state;

    return (
      <div className={currentUser ? 'App' : 'loginScreen'}>
        <div className="header">
          <h1 className="title">Happy Hour</h1>
          <span className="awesome">
            <FontAwesomeIcon icon={faBeer} />
          </span>
        </div>

        {!currentUser && <SignIn />}
        {currentUser && (
          <div>
            <AddHappyPlace />
            <hr />
            <Profile user={currentUser} />
            <HappyList pubs={pubs} user={currentUser} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
