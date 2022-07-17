import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "my-e93ca.firebaseapp.com",
  projectId: "my-e93ca",
  storageBucket: "my-e93ca.appspot.com",
  messagingSenderId: "365322854797",
  appId: "1:365322854797:web:1b617d645947cf00cc9dc4",
  measurementId: "G-PB2VMC0VVE",
};

// Initialize Firebase
const database = getDatabase(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
