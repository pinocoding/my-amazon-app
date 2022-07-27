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
  //
  const [newId, setNewId] = useState("");
  const [newTitle, setTitle] = useState("");
  const [newPrice, setPrice] = useState("");
  const [newDescription, setDescription] = useState("");
  const [newOnsales, setNewOnsales] = useState("");
  const [newCategory, setCategory] = useState("");
  const [newImage, setImage] = useState("");
  const [newRating, setRating] = useState("");
  //
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const [products, setProducts] = useState([]);
  const headSetProDuctsCollectionRef = collection(db, "mouses");

  //

  const createHeadSetsProduct = async (e) => {
    for (let i = 1; i <= 52; ++i) {
      const newId = i;
      e.preventDefault();

      await addDoc(headSetProDuctsCollectionRef, {
        id: Number(newId),
        title: newTitle,

        price: Number(newPrice),
        description: newDescription,
        category: newCategory,
        image: newImage,
        rating: Number(newRating),
        onsales: newOnsales,
      });
    }
  };

  //

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
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
      {products.map((product) => {
        return (
          <div>
            <button
              onClick={() => {
                createHeadSetsProduct(
                  product.id,
                  product.title,
                  product.price,
                  product.description,
                  product.category,
                  product.image,
                  product.rating,
                  product.onsales
                );
              }}
            >
              Increase Age
            </button>
          </div>
        );
      })}
      <input
        placeholder="id..."
        onChange={(event) => {
          setNewId(event.target.value);
        }}
      />
      <input
        placeholder="title..."
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        placeholder="price..."
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      />
      <input
        placeholder="description..."
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <input
        placeholder="category..."
        onChange={(event) => {
          setCategory(event.target.value);
        }}
      />
      <input
        placeholder="image..."
        onChange={(event) => {
          setImage(event.target.value);
        }}
      />

      <input
        type="number"
        placeholder="rating..."
        onChange={(event) => {
          setRating(event.target.value);
        }}
      />
      <button onClick={createHeadSetsProduct}> Create HeadSets</button>
    </div>
  );
}

export default Admin;
