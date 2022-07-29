import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {};
// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const fs = firebase.firestore();
const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = getFirestore(app);
// const storage = firebase.storage();
export { db, auth, fs };
