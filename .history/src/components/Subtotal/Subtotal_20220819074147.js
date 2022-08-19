import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useTranslation } from "react-i18next";
import "./Subtotal.css";
import { DataContext } from "../DataLayer/Datalayer";
import AlSoLike from "../AlSoLike/AlSoLike";
function Subtotal() {
  const context = useContext(DataContext);
  const { t } = useTranslation(["common"]);
  const isDark = context.isDark;
  const currentUser = context.currentUser;
  const userCartProduct = context.userCartProduct;
  const totalPrice = context.totalPrice;
  const totalQty = context.totalQty;

  return (
    <>

      <div
        className={`subtotal ${isDark ? "subtotal-dark" : "subtotal-light"}`}
      >
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p className="subtotal__form">
                <span className="subtotal__count">
                  {t("Subtotal")}&nbsp; ({totalQty} {t("items")})
                </span>
                &nbsp;: <span className="subtotal__total">{value}</span>
              </p>
            </>
          )}
          decimalScale={2}
          value={totalPrice}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />

        {currentUser && userCartProduct.length > 0 && (
          <button>
            <Link to="/payment">{t("Proceed to Checkout")}</Link>
          </button>
        )}
      </div

    </>
  );
}

export default Subtotal;
