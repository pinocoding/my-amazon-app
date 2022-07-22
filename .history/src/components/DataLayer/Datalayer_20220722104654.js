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
  const [user, setUser] = useState(null);
  const [fullName, setFullName] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");
  const [SuccessMsg, setSuccessMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  function GetcurrentUser() {
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          fs.collection("users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              setUser(snapshot.data().FullName);
            });
        } else {
        }
      });
    }, []);
  }

  const value = {
    setSuccessMsg,
    setErrorMsg,
    fullName,
    setFullName,
    isActive,
    setIsActive,
    user,
    setUser,
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
