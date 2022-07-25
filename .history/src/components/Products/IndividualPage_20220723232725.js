import React, { useEffect } from "react";
import { useStateValue } from "../DataLayer/Datalayer";
import "./Product.css";

function IndividualPage() {
  const [{ itembox }, dispatch] = useStateValue();

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(itembox));
  }, [itembox]);

  return (
    <div>
      <div className="individual__container">
        <div className="individualleft__column">
          <img src="" alt="" />
        </div>
        <div className="individualright__column">
          {/* <!-- Product Description --> */}
          <div class="product-description">
            <span>Headphones</span>
            <h1>Beats EP</h1>
            <p>
              The preferred choice of a vast range of acclaimed DJs. Punchy,
              bass-focused sound and high isolation. Sturdy headband and on-ear
              cushions suitable for live performance
            </p>
          </div>
          {/* <!-- Product Configuration --> */}
          <div class="product-configuration">
            <div class="product-color">
              <span>Color</span>

              <div class="color-choose">
                <div>
                  <input type="radio" />
                  <label for="red">
                    <span></span>
                  </label>
                </div>
                <div>
                  <input type="radio" />
                  <label for="blue">
                    <span></span>
                  </label>
                </div>
                <div>
                  <input type="radio" />
                  <label for="black">
                    <span></span>
                  </label>
                </div>
              </div>
            </div>
            {/* <!-- Cable Configuration --> */}
            <div class="cable-config">
              <span>Cable configuration</span>

              <div class="cable-choose">
                <button>Straight</button>
                <button>Coiled</button>
                <button>Long-coiled</button>
              </div>

              <a href="#">How to configurate your headphones</a>
            </div>
          </div>
        </div>
        <div class="product-price">
          <span>148$</span>
          <a href="#" class="cart-btn">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default IndividualPage;
