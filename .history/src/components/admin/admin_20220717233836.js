import { useState, useEffect } from "react";
import "./admin.css";
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
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [product, setProduct] = useState("");

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const headSetProDuctsCollectionRef = collection(db, "products");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  };
  const createHeadSetsProduct = async () => {
    await addDoc(headSetProDuctsCollectionRef, {
      id: 1,
    title: "HeadPhones",
    price: 109.95,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iste a culpa magnam qui atque neque, quae animi dolore maxime corporis necessitatibus commodi hic consequatur non quibusdam pariatur ducimus dolor.",
    category: "men's clothing",
    image:
      "https://www.downloadclipart.net/large/sony-headphone-png-photos.png",
    rating: {
      rate: 3.9,
      count: 120,
    });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="admin">
      {users.map((user) => {
        return (
          <div>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              Increase Age
            </button>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              Delete User
            </button>
          </div>
        );
      })}
      <input
        placeholder="Name..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />
      <button onClick={createUser}> Create HeadSets</button>
    </div>
  );
}

export default Admin;
