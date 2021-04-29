import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCAbi8_NweJsyOmU0WzjvJRbwqz75uf6Os",
    authDomain: "tinder-clone-2870a.firebaseapp.com",
    projectId: "tinder-clone-2870a",
    storageBucket: "tinder-clone-2870a.appspot.com",
    messagingSenderId: "965952493292",
    appId: "1:965952493292:web:02df8be12d96c8da0b77c9",
    measurementId: "G-WKTHWKGGHV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;