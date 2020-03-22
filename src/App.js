import React, { Component } from "react";
import "./App.css";
//firebase module by Netflix developer guy
import withFirebaseAuth from "react-with-firebase-auth";
//firebase from google
import * as firebase from "firebase/app";
//firebase auth module
import "firebase/auth";
//firebase config
import firebaseConfig from "./firebaseConfig";
//initilizae the firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//auth variable
const firebaseAppAuth = firebaseApp.auth();
//provide google,facebook,twitter,github
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};
class App extends Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          {user ? <p>Hello, {user.displayName}</p> : <p>Please sign in.</p>}
          {user ? (
            <button onClick={signOut}>Sign out</button>
          ) : (
            <button onClick={signInWithGoogle}>Sign in with Google</button>
          )}
        </header>
      </div>
    );
  }
}
export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
