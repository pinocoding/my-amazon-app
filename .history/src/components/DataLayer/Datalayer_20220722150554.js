import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import { auth, fs } from "../firebase";

// Prepares for dataLayer
const StateContext = createContext();

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [fullName, setFullName] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");
  const [SuccessMsg, setSuccessMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // !-----Fectdata-----
  useEffect(() => {
    const fetchData = async () => {
      await firebase
        .firestore()
        .collection("headsets")
        .orderBy("id", "desc")
        .limit(12)
        .onSnapshot(function (querySnapshot) {
          var items = [];
          querySnapshot.forEach(function (doc) {
            items.push({ key: doc.id, ...doc.data() });
          });

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
          .collection("headsets")
          .orderBy("id", "desc")
          .limit(12)
          .startAfter(item.id)
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
        .collection("headsets")
        .orderBy("id", "desc")
        .endBefore(item.id)
        .limitToLast(12)
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
  // !----Authentication
  const navigate = useNavigate();

  const handleSignup = (e) => {
    if (password === rePassword) {
      const checkedPassword = password;
      e.preventDefault();
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((credentials) => {
          fs.collection("users")
            .doc(credentials.user.uid)
            .set({
              fullname: fullName,
              email: email,
              Password: checkedPassword,
            })
            .then(() => {
              navigate("/");
            });
        })
        .catch((err) => {
          // eslint-disable-next-line default-case
          switch (err.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
            case "auth/user-not-found":
              setEmailError(err.message);
            // eslint-disable-next-line no-fallthrough
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
          }
        });
    } else {
      alert("nhap email như lol");
    }
    //
  };
  //

  const handleSignin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((err) => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
          // eslint-disable-next-line no-fallthrough
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  // !------------
  //
  function GetcurrentUser() {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect((currentUser) => {
      auth.onAuthStateChanged((currentUser) => {
        if (currentUser) {
          fs.collection("users")
            .doc(currentUser.uid)
            .get()
            .then((snapshot) => {
              setCurrentUser(snapshot.data().fullname);
            });
        } else {
          setCurrentUser(null);
        }
      });
    }, []);
    return currentUser;
  }
  const currentUser = GetcurrentUser();
  //
  //
  const handleLogOut = () => {
    setIsActive(false);
    if (currentUser) {
      auth.signOut();
    }
  };
  // !----Authentication

  const value = {
    showNext,
    showPrevious
    setSuccessMsg,
    setErrorMsg,
    fullName,
    setFullName,
    isActive,
    setIsActive,
    currentUser,
    email,
    setEmail,
    emailError,
    rePassword,
    password,
    setPassword,
    setRePassword,
    setEmailError,
    setPasswordError,
    passwordError,
    GetcurrentUser,
    handleLogOut,
    handleSignin,
    handleSignup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
const useStateValue = () => useContext(StateContext);
export {
  StateContext,
  StateProvider,
  useStateValue,
  AuthContext,
  AuthProvider,
};
