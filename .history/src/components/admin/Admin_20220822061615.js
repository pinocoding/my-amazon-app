import { useState, useEffect } from "react";
import "./Admin.css";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Admin() {
  return <div>Dkm chào Admin nhớ </div>;
}

export default Admin;
