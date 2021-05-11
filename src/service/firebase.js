import firebase from 'firebase/app'; // <-- This must be first
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

try {
  firebase.initializeApp({
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID
    apiKey: "AIzaSyC8jS7QbLHYRKRphnm9MmLDJ3wODs3-S9E",
    authDomain: "carrental-750ec.firebaseapp.com",
    databaseURL:"https://carrental-750ec-default-rtdb.firebaseio.com/",
    projectId: "carrental-750ec",
    storageBucket: "carrental-750ec.appspot.com",
    messagingSenderId: "598029684680",
    appId: "1:598029684680:web:73f737e3abc635b76cbafd"
  });
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

// Passing off firebase.auth() instead of firebase.auth
// allows us to share the same instance of Firebase throughout
// the entire app whenever we import it from here.

export const fb = {
  auth: firebase.auth(),
  storage: firebase.storage(),
  firestore: firebase.firestore(),
};
