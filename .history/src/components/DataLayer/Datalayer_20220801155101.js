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

const DataContext = createContext();

function  DataProvider({ children }) {


  const [headList, setHeadList] = useState([]);
  const [page, setPage] = useState(1);

  const [userCartProduct, setUserCartProduct] = useState([]);
  const [fullName, setFullName] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");
  const [SuccessMsg, setSuccessMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [inUsedEmailError, setInUsedEmailError] = useState("");
  const [invalidEmailError, setInvalidEmailError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password === rePassword) {
      const checkedPassword = password;

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
              setInUsedEmailError(err.message);
            // eslint-disable-next-line no-fallthrough
            case "auth/invalid-email":
              setInvalidEmailError(err.message);
            // eslint-disable-next-line no-fallthrough
            case "auth/user-not-found":
              setEmailError(err.message);
            // eslint-disable-next-line no-fallthrough
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
          }
        });
    } else {
      alert("password khong trung khop");
    }
    //
  };
  //useEffect (())

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
            setPasswordError(err.message);
          // eslint-disable-next-line no-fallthrough
          case "auth/user-disabled":
            setPasswordError(err.message);
          // eslint-disable-next-line no-fallthrough
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
        .then(() => {
          navigate("/checkout");
        });
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
  //
  //

  //
  //
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

  const value = {
    //

    headList,
    setHeadList,
    page,
    setPage,
    currentUserEmail,
    totalPrice,
    totalQty,
    removeCart,
    addToCart,
    buyNow,
    decreaseQty,
    increaseQty,
    userCartProduct,
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
    passwordError,
    GetcurrentUser,
    handleLogOut,
    handleSignin,
    handleSignup,
    setEmailError,
    setPasswordError,
    inUsedEmailError,
    invalidEmailError,
  };

  return < DataContext.Provider value={value}>{children}</>;
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
