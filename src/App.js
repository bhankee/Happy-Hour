import React, { Component } from 'react';
import { auth, database } from './database/connection';
import './App.css';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import AddHappyPlace from './components/AddHappyPlace';
import HappyList from './components/HappyList';

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
      <div className="App">
        <h1>Happy Hour</h1>
        {!currentUser && <SignIn />}
        {currentUser && (
          <div>
            <AddHappyPlace />
            <Profile user={currentUser} />
            <HappyList pubs={pubs} currentUser={currentUser} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
