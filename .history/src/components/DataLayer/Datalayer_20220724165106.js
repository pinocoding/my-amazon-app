import { Alert } from "@mui/material";
import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

import { auth, fs } from "../firebase";

// Prepares for dataLayer
const StateContext = createContext();

const AuthContext = createContext();

function AuthProvider({ children }) {
const [ cartProduct, setCartProduct]= useState([])
  const [fullName, setFullName] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");
  const [SuccessMsg, setSuccessMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
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
      Alert("Email không trùng khớp")

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
  const handleLogOut = () => {

    setIsActive(false);
    if (currentUser) {
      auth.signOut();
    }
  };
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
  function GetUserUid() {
    const [ currentUserId, setCurrentUserId]= useState(null)
    useEffect(() => {
      auth.onAuthStateChanged (currentUser => {
        if(currentUser) {
          setCurrentUserId (currentUser.uid);
        }
      })

    },[])
    return currentUserId;

  }
  const currentUserId = GetUserUid()
  //

  // !----Authentication
  useEffect(() => {
        auth.onAuthStateChanged(currentUser => {
            if(currentUser) {
                fs.collection("CartOf>>"+ currentUser.uid).onSnapshot(snapshot => {
const newCartProduct = snapshot


            })
          }
            })
            },[])

  const value = {

    currentUserId,
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
