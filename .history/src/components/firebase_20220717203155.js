// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
