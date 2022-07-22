import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";

function ProductDetails() {
  const context = useContext(AuthContext);
  const currentItem = context.currentItem;

  return (
    <div className="headsets">
      <div class="card">

        <div class = "product-imgs">
          <div class = "img-display">
            <div class = "img-showcase">
              <img src = "shoes_images/shoe_1.jpg" alt = "shoe image">
              <img src = "shoes_images/shoe_2.jpg" alt = "shoe image">
              <img src = "shoes_images/shoe_3.jpg" alt = "shoe image">
              <img src = "shoes_images/shoe_4.jpg" alt = "shoe image">
            </div>
          </div>
          <div class = "img-select">
            <div class = "img-item">
              <a href = "#" data-id = "1">
             <img src="" alt="" />
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "2">
                <img src = "shoes_images/shoe_2.jpg" alt = "shoe image">
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "3">
                <img src = "shoes_images/shoe_3.jpg" alt = "shoe image">
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "4">
                <img src = "shoes_images/shoe_4.jpg" alt = "shoe image">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
