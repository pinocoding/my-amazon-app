import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useTranslation } from "react-i18next";
import "./Subtotal.css";
import { DataContext } from "../DataLayer/Datalayer";

function Subtotal() {
  const context = useContext(DataContext);
  const { t } = useTranslation(["common"]);
  const isDark = context.isDark;
  const currentUser = context.currentUser;
  const userCartProduct = context.userCartProduct;
  const totalPrice = context.totalPrice;
  const totalQty = context.totalQty;

  return (
    {currentUser ?

    }

  );
}

export default Subtotal;
