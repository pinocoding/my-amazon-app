import React from "react";
import { Link } from "react-router-dom";
import { HeadPhonesDATA } from "../../FakeData/HeadPhonesDATA";

import "../Product.css";

function HeadSetsCard() {
  return (
    <div className="section-card">
      {/* <h4>RESUlT</h4> */}
      {HeadPhonesDATA.map((item) => {
        return (
          <Link to="/">
            <div class="card">
             <img src="" alt="Denim Jeans"
              style="width:100%">
              <h1>Tailored Jeans</h1>
              <p class="price">$19.99</p>
              <p>
                Some text about the jeans. Super slim and comfy lorem ipsum
                lorem jeansum. Lorem jeamsun denim lorem jeansum.
              </p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default HeadSetsCard;
