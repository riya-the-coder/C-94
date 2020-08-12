import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCVsPPdVgfQgGW24FmJ3yUGOBWvOsGVgiU",
    authDomain: "memory-bank-fd92e.firebaseapp.com",
    databaseURL: "https://memory-bank-fd92e.firebaseio.com",
    projectId: "memory-bank-fd92e",
    storageBucket: "memory-bank-fd92e.appspot.com",
    messagingSenderId: "663402094298",
    appId: "1:663402094298:web:21dbf97ad86df9d0f44fe3",
    measurementId: "G-6L2RHQ7YPP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
export default firebase.firestore();