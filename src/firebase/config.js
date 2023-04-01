import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0WaxaDWCnuU8HhHzVvJAK0CGTk52xO2w",
    authDomain: "olx-clone-869e7.firebaseapp.com",
    projectId: "olx-clone-869e7",
    storageBucket: "olx-clone-869e7.appspot.com",
    messagingSenderId: "328858662579",
    appId: "1:328858662579:web:b8b208acffcff4200022c6",
    measurementId: "G-YTP39CL1ZW"
  };
  export default firebase.initializeApp(firebaseConfig)