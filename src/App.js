import React, { Component } from 'react';
import { auth, database } from './database/connection';
import './App.css';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import AddHappyPlace from './components/AddHappyPlace';
import HappyList from './components/HappyList';
import Header from './components/Header';

class App extends Component {
  state = {
    currentUser: null,
    pubs: {}
  };

  componentDidMount() {
    const pubRef = database.ref('/pubs');
    // Check if user logged in or out
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser });
      pubRef.on('value', snapshot => {
        this.setState({ pubs: snapshot.val() });
      });
    });
  }
  render() {
    const { currentUser, pubs } = this.state;

    return (
      <div>
        <Header />
        <div className={currentUser ? 'App' : 'loginScreen'}>
          {!currentUser && <SignIn />}
          {currentUser && (
            <div>
              <Profile user={currentUser} />
              <hr />
              <AddHappyPlace />
              <HappyList pubs={pubs} user={currentUser} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
