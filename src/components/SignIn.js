import React, { Component } from 'react';
import { auth, googleAuthProvider } from '../database/connection';
import './SignIn.css';

class SignIn extends Component {
  render() {
    return (
      <div className="loginWrapper">
        <button
          className="login"
          onClick={() => auth.signInWithPopup(googleAuthProvider)}>
          Google Login
        </button>
      </div>
    );
  }
}

export default SignIn;
