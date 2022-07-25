import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsLWwQhAtY92i5eYXE-RHRoDlA0yTZTlQ",
  authDomain: "app-a665a.firebaseapp.com",
  projectId: "app-a665a",
  storageBucket: "app-a665a.appspot.com",
  messagingSenderId: "909399945394",
  appId: "1:909399945394:web:b4f52fce451638100fd9ab",
  measurementId: "G-MYCEC2PVDG",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };