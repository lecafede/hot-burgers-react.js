import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBdO2kwT31Jvu0jkD-VhYk17fVJaJrBrbA",
    authDomain: "very-hot-burgers-bd62e.firebaseapp.com",
    databaseURL: "https://very-hot-burgers-bd62e-default-rtdb.firebaseio.com",
    projectId: "very-hot-burgers-bd62e",
    storageBucket: "very-hot-burgers-bd62e.appspot.com",
    messagingSenderId: "186793979518",
    appId: "1:186793979518:web:4b6ef2aee94539ff4bb22f"
})

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;
