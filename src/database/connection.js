import firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyCSAoWnDvyTUnjPSrCVlvxQmFb8keLQWUU',
  authDomain: 'happyhour-d9b09.firebaseapp.com',
  databaseURL: 'https://happyhour-d9b09.firebaseio.com',
  projectId: 'happyhour-d9b09',
  storageBucket: 'happyhour-d9b09.appspot.com',
  messagingSenderId: '450346484733'
};
firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
