import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA0jHQ5ErHHmddE4l1waqSLPJhWSn0DD_4",
    authDomain: "govrspace.firebaseapp.com",
    databaseURL: "https://govrspace.firebaseio.com",
    projectId: "govrspace",
    storageBucket: "govrspace.appspot.com",
    messagingSenderId: "617018715245",
    appId: "1:617018715245:web:ce67fab13105d5ff6fe364",
    measurementId: "G-23BQMF0Z1Z"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;