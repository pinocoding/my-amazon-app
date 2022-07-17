import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth, database };
