import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDDYC8BvvoG7LAOdXPIFcs36oWH5p-p2Yo",
  authDomain: "my--app-b8b3c.firebaseapp.com",
  projectId: "my--app-b8b3c",
  storageBucket: "my--app-b8b3c.appspot.com",
  messagingSenderId: "466833510815",
  appId: "1:466833510815:web:4afc5af81896ea7b4dedaa",
  measurementId: "G-99M4FMDLMS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
