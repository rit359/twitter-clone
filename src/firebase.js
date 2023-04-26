import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCnwFSwarfYf460Y7CYm9XqnZ5EnUGbeCI",
    authDomain: "twitter-clone-f9d0f.firebaseapp.com",
    projectId: "twitter-clone-f9d0f",
    storageBucket: "twitter-clone-f9d0f.appspot.com",
    messagingSenderId: "753725629875",
    appId: "1:753725629875:web:d8502480b51fb82d9dd7c6",
    measurementId: "G-CCREH2NRX1"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export default db;