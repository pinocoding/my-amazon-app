import React, { useContext } from "react";
import { DataContext } from "../components/DataLayer/Datalayer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import BookStores from "../components/Products/BookStores/BookStores";
import HeadSets from "../components/Products/Gaming accessories/HeadSets";
import Toys from "../components/Products/ShopByCategory/Toys";
import StripLights from "../components/Products/StripLights/StripLights";
import Baby from "../components/Products/ShopByCategory/Baby";
import ComputersAccessories from "../components/Products/ShopByCategory/ComputersAccessories";
import Dresses from "../components/Products/Dresses/Dresses";
import Chairs from "../components/Products/Gaming accessories/Chairs";
import KeyBoards from "../components/Products/Gaming accessories/KeyBoards";
import Mouses from "../components/Products/Gaming accessories/Mouses";
import IndividualPage from "../components/Products/IndividualPage";
import ForgotPassword from "../components/AuthForm/ForgotPassword";
import Footer from "../components/Footer/Footer";
import Payment from "../components/Payment/Payment";
import BeautyPicks from "../components/Products/BeautyPicks/BeautyPick";
import DealOfTheDay from "../components/Products/DealOfTheDay/DealOfTheDay";
import VideoGames from "../components/Products/ShopByCategory/VideoGames";
import SmartWatches from "../components/Products/SmartWatches/SmartWatches";

// --layoutComponent--

function App() {
  const context = useContext(DataContext);
  const isDark = context.isDark;

  return (
    <div className={`App ${isDark ? "app-dark" : "app-light"}`}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route
          path="/SignIn"
          element={
            // <RequireAuth>
            <>
            <Header />
            <SignIn />
            // </RequireAuth>
               </>
          }
        />
        <Route path="/CreateAccount" element={<AuthForm />} />

        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />

        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Payment />
              <Footer />
            </>
          }
        />

        <Route
          path="/headsets"
          element={
            <>
              <Header />
              <HeadSets />
              <Footer />
            </>
          }
        />
        <Route
          path="/keyboards"
          element={
            <>
              <Header />
              <KeyBoards />
              <Footer />
            </>
          }
        />
        <Route
          path="/Mouses"
          element={
            <>
              <Header />
              <Mouses />
              <Footer />
            </>
          }
        />
        <Route
          path="/Chairs"
          element={
            <>
              <Header />
              <Chairs />
              <Footer />
            </>
          }
        />

        <Route
          path="/IndividualPage"
          element={
            <>
              <Header />
              <IndividualPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/ComputersAccessories"
          element={
            <>
              <Header />
              <ComputersAccessories />
              <Footer />
            </>
          }
        />

        <Route
          path="/VideoGames"
          element={
            <>
              <Header />
              <VideoGames />
              <Footer />
            </>
          }
        />
        <Route
          path="/BeautyPicks"
          element={
            <>
              <Header />
              <BeautyPicks />
              <Footer />
            </>
          }
        />

        <Route
          path="/Dresses"
          element={
            <>
              <Header />
              <Dresses />
              <Footer />
            </>
          }
        />
        <Route
          path="/StripLights"
          element={
            <>
              <Header />
              <StripLights />
              <Footer />
            </>
          }
        />
        <Route
          path="/DealOfTheDay"
          element={
            <>
              <Header />
              <DealOfTheDay />
              <Footer />
            </>
          }
        />
        <Route
          path="/HealthPersonalCare"
          element={
            <>
              <Header />
              <HealthPersonalCare />
              <Footer />
            </>
          }
        />
        <Route
          path="/BookStores"
          element={
            <>
              <Header />
              <BookStores />
              <Footer />
            </>
          }
        />
        <Route
          path="/SmartWatches"
          element={
            <>
              <Header />
              <SmartWatches />
              <Footer />
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
        <Route
          path="/Baby"
          element={
            <>
              <Header />
              <Baby />
              <Footer />
            </>
          }
        />
        <Route
          path="/Toys"
          element={
            <>
              <Header />
              <Toys />
              <Footer />
            </>
          }
        />
        <Route
          path="/forgotpassword"
          element={
            <>
              <ForgotPassword />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;