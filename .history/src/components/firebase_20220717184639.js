import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {const firebaseConfig = {
  apiKey: "AIzaSyDDYC8BvvoG7LAOdXPIFcs36oWH5p-p2Yo",
  authDomain: "my--app-b8b3c.firebaseapp.com",
  projectId: "my--app-b8b3c",
  storageBucket: "my--app-b8b3c.appspot.com",
  messagingSenderId: "466833510815",
  appId: "1:466833510815:web:4afc5af81896ea7b4dedaa",
  measurementId: "G-99M4FMDLMS"
};
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth, database };
