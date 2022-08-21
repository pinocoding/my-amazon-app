import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  updateEmail,
  updatePassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, fs } from "../firebase";
import firebase from "firebase/compat/app";

const StateContext = createContext();

const DataContext = createContext();

function DataProvider({ children }) {
  const [authed, setAuthed] = React.useState(
    () => localStorage.getItem("authed") !== null
  );
  const [checked, setChecked] = useState(localStorage.getItem("switch"));
  const [pageLoading, setPageLoading] = useState(false);
  const [userCartProduct, setUserCartProduct] = useState([]);
  const [fullName, setFullName] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [messsage, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [signInErrorMsg, setSignInErrorMsg] = useState("");
  const [forgotErrorMsg, setForgotErrorMsg] = useState("");
  const [succedEmailSent, setSuccedEmailSent] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("authed", JSON.stringify(authed));
  }, [authed]);

  function GetCurrentUser() {
    const [currentUser, setCurrentUser] = useState("");

    useEffect(() => {
      auth.onAuthStateChanged((currentUser) => {
        setCurrentUser(currentUser);
      });
    }, []);
    return currentUser;
  }
  const currentUser = GetCurrentUser();

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
  function GetcurrentUserName() {
    const [currentUserName, setCurrentUserName] = useState(null);

    useEffect(() => {
      auth.onAuthStateChanged((currentUser) => {
        if (currentUser) {
          setCurrentUserName(currentUser.displayName);
        } else {
          setCurrentUserName(null);
        }
      });
    }, []);
    return currentUserName;
  }
  const currentUserName = GetcurrentUserName();

  const handleSignup = async (e) => {
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

        .then(async (credential) => {
          const user = credential.user;
          await user.updateProfile({
            displayName: fullName,
          });
        });
      setAuthed(true);
      navigate("/");
      window.location.reload();
    } catch (e) {
      setErrorMsg(e.message);
    }
    setPageLoading(false);
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setPageLoading(true);
      setAuthed(true);
      await auth.signInWithEmailAndPassword(email, password).then(() => {
        navigate("/");
      });
    } catch (e) {
      setSignInErrorMsg(e.message);
    }
    setPageLoading(false);
  };
  // !------------
  const handleLogOut = async () => {
    setIsActive(false);
    setAuthed(false);
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
      setSuccedEmailSent("");
      setForgotErrorMsg("");
      setPageLoading(true);
      await auth.sendPasswordResetEmail(email);
      setSuccedEmailSent("Please check your email");
    } catch (e) {
      setForgotErrorMsg(e.message);
    }
    setPageLoading(false);
  };
  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
      setPageLoading(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
    setPageLoading(false);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      return alert("Passwords do not match");
    }
    e.preventDefault();
    const promises = [];
    if (email !== currentUser.email) {
      promises.push(updateEmail(email));
      console.log("Email updated successfully");
    }
    if (password !== currentUser.password) {
      promises.push(updatePassword(password));
      console.log("Password updated successfully");
    }
    Promise.all(promises)
      .then(() => {
        // navigate("/");
        console.log("oke ");
      })
      .catch(() => {
        alert("Toang");
      })
      .finally(() => {
        setPageLoading(false);
      });
  };

  // if (fullName !== currentUser.displayName) {
  //   promises.push(updateFullName(fullName));
  // }

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        fs.collection("CartOf>>" + currentUser.displayName).onSnapshot(
          (snapshot) => {
            const newUserProduct = snapshot.docs.map((doc) => ({
              ID: doc.id,
              ...doc.data(),
            }));
            setUserCartProduct(newUserProduct);
          }
        );
      }
    });
  }, []);

  const addToCart = (item) => {
    if (currentUserId !== null) {
      const Product = item;

      Product["qty"] = 1;
      Product["TotalProductPrice"] = Product.qty * Product.price;
      fs.collection("CartOf>>" + currentUser.displayName)
        .doc(item.ID)
        .set(Product);
    } else {
      navigate("login");
    }
  };
  const buyNow = (item) => {
    if (currentUserId !== null) {
      const Product = item;

      Product["qty"] = 1;
      Product["TotalProductPrice"] = Product.qty * Product.price;
      fs.collection("CartOf>>" + currentUser.displayName)
        .doc(item.ID)
        .set(Product)
        .then(() => {
          navigate("payment");
        });
    } else {
      navigate("login");
    }
  };

  const decreaseQty = (item) => {
    const newProduct = item;
    newProduct.qty = item.qty - 1;
    newProduct.TotalProductPrice = newProduct.qty * newProduct.price;
    if (item.qty >= 1) {
      auth.onAuthStateChanged((currentUser) => {
        if (currentUser) {
          fs.collection("CartOf>>" + currentUser.displayName)
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
        fs.collection("CartOf>>" + currentUser.displayName)
          .doc(item.ID)
          .update(newProduct)
          .then(() => {});
      } else {
      }
    });
  };

  const removeCart = (item) => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        fs.collection("CartOf>>" + currentUser.displayName)
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
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    const fectSearchingData = async () => {
      firebase
        .firestore()
        .collection("search")
        .onSnapshot(function (querySnapshot) {
          const items = [];
          querySnapshot.forEach(function (doc) {
            items.push({ key: doc.id, ...doc.data() });
          });

          setSearchData(items);
        });
    };
    fectSearchingData();
  }, []);

  const value = {
    authed,
    currentUser,
    handleUpdateProfile,
    pageLoading,
    isDark,
    setIsDark,
    //
    searchData,
    currentUserName,
    handleChange,
    checked,
    messsage,
    currentUserId,
    totalPrice,
    totalQty,
    removeCart,
    addToCart,
    buyNow,
    forgotPassword,
    decreaseQty,
    increaseQty,
    userCartProduct,
    errorMsg,
    fullName,
    setFullName,
    isActive,
    setIsActive,
    email,
    setEmail,
    rePassword,
    password,
    setPassword,
    setRePassword,
    succedEmailSent,
    forgotErrorMsg,
    signInErrorMsg,
    handleLogOut,
    handleSignin,
    handleSignup,
    signInWithGoogle,
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
