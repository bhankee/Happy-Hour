import React, { Component } from 'react';
import { auth, googleAuthProvider } from '../database/connection';

class SignIn extends Component {
  render() {
    return (
      <div>
        <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
          Sign In
        </button>
      </div>
    );
  }
}

export default SignIn;
