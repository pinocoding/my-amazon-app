import react, {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
  useNavigate,
} from "react";
// import { useNavigate } from "react-router-dom";
import fire from "../firebase";

// Prepares for dataLayer

const AuthContext = createContext();
const StateContext = createContext();
function AuthProvider({ children }) {
  const navigate = useNavigate;
  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleSignin = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
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

  const handleSignup = (e) => {
    clearErrors();
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((firebase.auth()) => {})
      .catch((err) => {
        // navigate("/");
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
  };
  const handleLogout = (e) => {
    clearErrors();
    e.preventDefault();
    fire.auth().signOut();
  };
  const authlistener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authlistener();
  }, []);

  const value = {
    isActive,
    setIsActive,
    user,
    email,
    setEmail,
    emailError,
    password,
    setPassword,
    handleSignin,
    handleSignup,
    hasAccount,
    setHasAccount,
    passwordError,
    handleLogout,
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
