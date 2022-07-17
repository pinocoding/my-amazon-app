import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebaseApp.firestore(app);
const auth = firebase.auth();
export { db, auth };
