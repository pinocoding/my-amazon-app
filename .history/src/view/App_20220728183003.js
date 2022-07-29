import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useContext } from "react";
import { AuthContext } from "../components/DataLayer/Datalayer";

// --layoutComponent--
//

import Admin from "../components/Admin/Admin";
//
import AuthForm from "../components/AuthForm/AuthForm";
import "./App.css";
import HealthPersonalCare from "../components/Products/HealthPersonalCare/HealthPersonalCare";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Checkout from "../components/CheckOut/Checkout";
import Login from "../components/AuthForm/Login";
import SignIn from "../components/AuthForm/SignIn";
import BookStores from "../components/BookStores/BookStores";
import HeadSets from "../components/Products/Gaming accessories/HeadSets";
import ComputersAccessories from "../components/Products/ShopByCategory/ComputersAccessories";
import Dresses from "../components/Products/Dresses/Dresses";
import Chairs from "../components/Products/Gaming accessories/Chairs";
import KeyBoards from "../components/Products/Gaming accessories/KeyBoards";
import Mouses from "../components/Products/Gaming accessories/Mouses";
import IndividualPage from "../components/Products/IndividualPage";
import GamingAccess from "../components/Products/Gaming accessories/GamingAccess";
import Payment from "../components/Payment/Payment";
import BeautyPicks from "../components/Products/BeautyPicks/BeautyPick";
import DealOfTheDay from "../components/Products/DealOfTheDay/DealOfTheDay";

// --layoutComponent--

function App() {
  const context = useContext(AuthContext);
  const currentUser = context.currentUser;
  return (
    <div className="App">
      <Routes>
        <Route
          // ---home---
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />

        {/* ------Login----- */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/SignIn"
          element={
            // <RequireAuth>
            <SignIn />
            // </RequireAuth>
          }
        />
        <Route path="/CreateAccount" element={<AuthForm />} />
        {/* ---//---- */}
        {/* ------Checkout---- */}
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        {/*  */}
        {/*  */}
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Payment />
            </>
          }
        />
        {/*  */}
        <Route
          path="/GamingAccess"
          element={
            <>
              <Header />
              <GamingAccess />
            </>
          }
        />
        <Route
          path="/headsets"
          element={
            <>
              <Header />
              <HeadSets />
            </>
          }
        />
        <Route
          path="/keyboards"
          element={
            <>
              <Header />
              <KeyBoards />
            </>
          }
        />
        <Route
          path="/Mouses"
          element={
            <>
              <Header />
              <Mouses />
            </>
          }
        />
        <Route
          path="/Chairs"
          element={
            <>
              <Header />
              <Chairs />
            </>
          }
        />

        <Route
          path="/IndividualPage"
          element={
            <>
              <Header />
              <IndividualPage />
            </>
          }
        />
        <Route
          path="/ComputersAccessories"
          element={
            <>
              <Header />
              <ComputersAccessories />
            </>
          }
        />
        <Route
          path="/ComputersAccessories"
          element={
            <>
              <Header />
              <ComputersAccessories />
            </>
          }
        />
        <Route
          path="/BeautyPicks"
          element={
            <>
              <Header />
              <BeautyPicks />
            </>
          }
        />

        <Route
          path="/Dresses"
          element={
            <>
              <Header />
              <Dresses />
            </>
          }
        />
        <Route
          path="/HealthPersonalCare"
          element={
            <>
              <Header />
              <HealthPersonalCare />
            </>
          }
        />
        <Route
          path="/DealOfTheDay"
          element={
            <>
              <Header />
              <DealOfTheDay />
            </>
          }
        />
        <Route
          path="/BookStore"
          element={
            <>
              <Header />
              <BookStores />
            </>
          }
        />
        <Route
          path="/Admin"
          element={
            <>
              <Admin />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
