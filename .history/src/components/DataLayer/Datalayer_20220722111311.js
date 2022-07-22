import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { auth, fs } from "../firebase";

// Prepares for dataLayer
const StateContext = createContext();

const AuthContext = createContext();
function AuthProvider({ children }) {
  const [fullName, setFullName] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");
  const [SuccessMsg, setSuccessMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
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
              setCurrentUser(snapshot.data().FullName);
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
  const value = {
    setSuccessMsg,
    setErrorMsg,
    fullName,
    setFullName,
    isActive,
    setIsActive,
    currentUser,
    // setUser,
    email,
    setEmail,
    emailError,
    password,
    setPassword,
    setEmailError,
    setPasswordError,
    passwordError,
    GetcurrentUser,
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
