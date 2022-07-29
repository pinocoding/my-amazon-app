import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyDSsSfTzfi4wwRJrzuBzJH7Gs42OIcsnD8",
  // authDomain: "my-b1f0c.firebaseapp.com",
  // projectId: "my-b1f0c",
  // storageBucket: "my-b1f0c.appspot.com",
  // messagingSenderId: "605762731094",
  // appId: "1:605762731094:web:ea10d7d9c8eb9a88c24ff7",
  // measurementId: "G-770JMZ0X86",
};
// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const fs = firebase.firestore();
const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = getFirestore(app);
// const storage = firebase.storage();
export { db, auth, fs };
