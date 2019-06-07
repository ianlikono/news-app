/* eslint-disable import/no-mutable-exports */
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAY-u-lowH3HuGkYqExsccGgKXB3qJUk7U',
  authDomain: 'calender-1a0d2.firebaseapp.com',
  databaseURL: 'https://calender-1a0d2.firebaseio.com',
  projectId: 'calender-1a0d2',
  storageBucket: '',
  messagingSenderId: '627601596107',
  appId: '1:627601596107:web:aac2928baa79d176',
};

let fire;

if (!firebase.apps.length) {
  fire = firebase.initializeApp(firebaseConfig);
}

const facebookProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();

export {
 fire, facebookProvider, googleProvider, twitterProvider 
};
