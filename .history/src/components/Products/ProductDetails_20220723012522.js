import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";

function ProductDetails() {
  const context = useContext(AuthContext);
  const currentItem = context.currentItem;

  return (
    <div className="headsets">
      <div class="card">
        <div class="product-imgs">
          <div class="img-display">
            <div class="img-showcase">
              <img src="" alt="/#" />
              <img src="" alt="/#" />
              <img src="" alt="/#" />
              <img src="" alt="/#" />
            </div>
          </div>
          <div class="img-select">
            <div class="img-item">
              <a href="/#" data-id="1">
                <img src="" alt="" />
              </a>
            </div>
            <div class="img-item">
              <a href="#" data-id="2">
                <img src="" alt="" />
              </a>
            </div>
            <div class="img-item">
              <a href="#" data-id="3">
                <img src="" alt="" />
              </a>
            </div>
            <div class="img-item">
              <a href="/#" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
