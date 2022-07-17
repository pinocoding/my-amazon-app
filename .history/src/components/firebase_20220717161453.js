import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfCNVt9axZ20lL9EZuNMtgbg0SrMNdeqk",
  authDomain: "my-e93ca.firebaseapp.com",
  projectId: "my-e93ca",
  storageBucket: "my-e93ca.appspot.com",
  messagingSenderId: "365322854797",
  appId: "1:365322854797:web:1b617d645947cf00cc9dc4",
  measurementId: "G-PB2VMC0VVE",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
