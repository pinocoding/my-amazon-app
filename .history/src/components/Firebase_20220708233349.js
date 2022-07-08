// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestorage";
const firebaseConfig = {
  apiKey: "AIzaSyAnPNw42_HAyJA8SmOUjvMP2H-DVmm8exU",
  authDomain: "fir-b867e.firebaseapp.com",
  projectId: "fir-b867e",
  storageBucket: "fir-b867e.appspot.com",
  messagingSenderId: "507791789273",
  appId: "1:507791789273:web:b67bbc59baf4608dfb82c8",
  measurementId: "G-77TLY88GFG",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
