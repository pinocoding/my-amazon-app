import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getDatabase, ref, child, get } from "firebase/database";

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
