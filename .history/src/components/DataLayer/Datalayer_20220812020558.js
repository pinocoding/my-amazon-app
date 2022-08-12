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

const StateContext = createContext();

const DataContext = createContext();

function DataProvider({ children }) {
  const [checked, setChecked] = useState(localStorage.getItem("switch"));
  const [pageLoading, setPageLoading] = useState(false);
  const [userCartProduct, setUserCartProduct] = useState([]);
  const [fullName, setFullName] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [messsage, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setCurrentUser(currentUser);
    });
  }, []);

  const handleSignup = async (e) => {
    const checkedPassword = password;
    e.preventDefault();
    if (password !== rePassword) {
      return setErrorMsg("Passwords do not match");
    }
    try {
      setMessage("");
      setErrorMsg("");
      setPageLoading(true);
      await auth
        .createUserWithEmailAndPassword(email, password)

        .then((credentials) => {
          const user = firebase.auth().currentUser;
          return user.updateProfile({
            displayName: fullName,
          });
          // fs.collection("users").doc(credentials.user.uid).set({
          //   fullname: fullName,
          //   email: email,
          //   Password: checkedPassword,
          // });
        })
        // })
        .then(setMessage("Your account has been created successfully"));
      navigate("/");
    } catch {
      setErrorMsg("Failed to create an account");
    }
    setPageLoading(false);
  };
  console.log(currentUser);

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setPageLoading(true);
      await auth
        .signInWithEmailAndPassword(email, password)

        .then(() => {
          navigate("/");
        });
    } catch {
      setErrorMsg("Failed to log in");
    }
    setPageLoading(false);
  };
  // !------------
  const handleLogOut = async () => {
    setIsActive(false);
    setErrorMsg("");

    try {
      if (currentUser) {
        await auth.signOut().then(() => navigate("/"));
      }
    } catch {
      setErrorMsg("Failed to log out");
    }
  };
  //
  const forgotPassword = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
      setErrorMsg("");
      setPageLoading(true);
      await auth.sendPasswordResetEmail(email);
      setMessage("Please check your email");
    } catch {
      setErrorMsg("Failed to reset password");
    }
    setPageLoading(false);
  };
  const updatePassword = () => {
    currentUser.updateEmail(email);
  };
  const updateEmail = () => {
    currentUser.updatePassword(password);
  };

  // function GetcurrentUserName() {
  //   const [currentUserName, setCurrentUserName] = useState(null);

  //   useEffect((currentUser) => {
  //     auth.onAuthStateChanged((currentUser) => {
  //       if (currentUser) {
  //         fs.collection("users")
  //           .doc(currentUser.uid)
  //           .get()
  //           .then((snapshot) => {
  //             setCurrentUserName(snapshot.data().fullname);
  //           });
  //       } else {
  //         setCurrentUserName(null);
  //       }
  //     });
  //   }, []);
  //   return currentUserName;
  // }
  // const currentUserName = GetcurrentUserName();
  //
  function GetcurrentUserEmail() {
    const [currentUserEmail, setCurrentUserEmail] = useState(null);
    useEffect((currentUser) => {
      auth.onAuthStateChanged((currentUser) => {
        if (currentUser) {
          setCurrentUserEmail(currentUser.email);
        } else {
          setCurrentUserEmail(null);
        }
      });
    }, []);
    return currentUserEmail;
  }
  const currentUserEmail = GetcurrentUserEmail();
  //
  function GetUserUid() {
    const [currentUserId, setCurrentUserId] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((currentUser) => {
        if (currentUser) {
          setCurrentUserId(currentUser.uid);
        }
      });
    }, []);
    return currentUserId;
  }
  const currentUserId = GetUserUid();
  //
  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        fs.collection("CartOf>>" + currentUser.uid).onSnapshot((snapshot) => {
          const newUserProduct = snapshot.docs.map((doc) => ({
            ID: doc.id,
            ...doc.data(),
          }));
          setUserCartProduct(newUserProduct);
        });
      }
    });
  }, []);

  const addToCart = (item) => {
    if (currentUserId !== null) {
      const Product = item;

      Product["qty"] = 1;
      Product["TotalProductPrice"] = Product.qty * Product.price;
      fs.collection("CartOf>>" + currentUserId)
        .doc(item.ID)
        .set(Product)
        .then(() => {});
      console.log(Product);
    } else {
      navigate("/login");
    }
  };
  const buyNow = (item) => {
    if (currentUserId !== null) {
      const Product = item;

      Product["qty"] = 1;
      Product["TotalProductPrice"] = Product.qty * Product.price;
      fs.collection("CartOf>>" + currentUserId)
        .doc(item.ID)
        .set(Product)
        .then(() => {
          navigate("/payment");
        });
    } else {
      navigate("/login");
    }
  };

  const decreaseQty = (item) => {
    const newProduct = item;
    newProduct.qty = item.qty - 1;
    newProduct.TotalProductPrice = newProduct.qty * newProduct.price;
    if (item.qty >= 1) {
      auth.onAuthStateChanged((currentUser) => {
        if (currentUser) {
          fs.collection("CartOf>>" + currentUser.uid)
            .doc(item.ID)
            .update(newProduct);
        }
      });
    } else {
      removeCart(item);
    }
  };
  //
  const increaseQty = (item) => {
    const newProduct = item;
    newProduct.qty = item.qty + 1;
    newProduct.TotalProductPrice = newProduct.qty * newProduct.price;

    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        fs.collection("CartOf>>" + currentUser.uid)
          .doc(item.ID)
          .update(newProduct)
          .then(() => {});
      } else {
      }
    });
  };
  //
  const removeCart = (item) => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        fs.collection("CartOf>>" + currentUser.uid)
          .doc(item.ID)
          .delete()
          .then(() => {});
      }
    });
  };
  const totalPriceArray = userCartProduct.map((item) => {
    return item.TotalProductPrice;
  });

  //
  const qtyArray = userCartProduct.map((item) => {
    return item.qty;
  });
  // const itemQty = item.qty;
  const reducerOfQty = (accumulator, currentValue) => {
    return accumulator + currentValue;
  };

  const totalQty = qtyArray.reduce(reducerOfQty, 0);
  const totalPrice = totalPriceArray.reduce(reducerOfQty, 0);

  //
  const handleChange = (e) => {
    setChecked(e.target.checked);
    if (isDark) {
      localStorage.setItem("theme-color", "theme-light");
      localStorage.setItem("switch", "false");
      setChecked(false);
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "theme-dark");
      localStorage.setItem("switch", "true");
      setChecked(true);
      setIsDark(true);
    }
  };
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme-color");
    const currentCheckStatus = localStorage.getItem("switch");

    if (currentThemeColor === "theme-dark" && currentCheckStatus === "true") {
      setIsDark(true);
      setChecked(true);
    } else {
      setChecked(false);
      setIsDark(false);
    }
  }, []);
  const value = {
    currentUser,
    updateEmail,
    updatePassword,
    pageLoading,
    isDark,
    setIsDark,
    //
    handleChange,
    checked,
    messsage,
    currentUserEmail,
    totalPrice,
    totalQty,
    removeCart,
    addToCart,
    buyNow,
    forgotPassword,
    decreaseQty,
    increaseQty,
    userCartProduct,
    currentUserId,

    errorMsg,
    fullName,
    setFullName,
    isActive,
    setIsActive,
    email,
    setEmail,
    emailError,
    rePassword,
    password,
    setPassword,
    setRePassword,
    passwordError,
    // currentUserName,
    // GetcurrentUserName,
    handleLogOut,
    handleSignin,
    handleSignup,
    setEmailError,
    setPasswordError,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
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
  DataContext,
  DataProvider,
};
