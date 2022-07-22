import React, { useState, useEffect } from "react";
//i'm using react-bootstrap for UI elements
import { Table, Button, ButtonGroup } from "react-bootstrap";
//firebase config
import firebase from "./../../Firebase";

export default function App() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      await firebase
        .firestore()
        .collection("users")
        .orderBy("created", "desc")
        .limit(5)
        .onSnapshot(function (querySnapshot) {
          var items = [];
          querySnapshot.forEach(function (doc) {
            items.push({ key: doc.id, ...doc.data() });
          });
          console.log("first item ", items[0]);
          setList(items);
        });
    };
    fetchData();
  }, []);

  const showNext = ({ item }) => {
    if (list.length === 0) {
      alert("Thats all we have for now !");
    } else {
      const fetchNextData = async () => {
        await firebase
          .firestore()
          .collection("users")
          .orderBy("created", "desc")
          .limit(5)
          .startAfter(item.created)
          .onSnapshot(function (querySnapshot) {
            const items = [];
            querySnapshot.forEach(function (doc) {
              items.push({ key: doc.id, ...doc.data() });
            });
            setList(items);
            setPage(page + 1);
          });
      };
      fetchNextData();
    }
  };

  const showPrevious = ({ item }) => {
    const fetchPreviousData = async () => {
      await firebase
        .firestore()
        .collection("users")
        .orderBy("created", "desc")
        .endBefore(item.created)
        .limitToLast(5)
        .onSnapshot(function (querySnapshot) {
          const items = [];
          querySnapshot.forEach(function (doc) {
            items.push({ key: doc.id, ...doc.data() });
          });
          setList(items);
          setPage(page - 1);
        });
    };
    fetchPreviousData();
  };

  return (
    <>
      {
        //list doc's here
        list.map((doc) => (
          <tr key={doc.key}>
            <td>{doc.name}</td>
            <td>{doc.age}</td>
            <td>{doc.note}</td>
          </tr>
        ))
      }
      <ButtonGroup>
        {
          //show previous button only when we have items
          page === 1 ? (
            ""
          ) : (
            <Button onClick={() => showPrevious({ item: list[0] })}>
              Previous
            </Button>
          )
        }

        {
          //show next button only when we have items
          list.length < 5 ? (
            ""
          ) : (
            <Button onClick={() => showNext({ item: list[list.length - 1] })}>
              Next
            </Button>
          )
        }
      </ButtonGroup>
    </>
  );
}
