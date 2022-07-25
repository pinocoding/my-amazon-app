import React, { useEffect } from "react";
import { useStateValue } from "../../DataLayer/Datalayer";

function IndividualPage() {
  const [{ itembox }, dispatch] = useStateValue();

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(itembox));
  }, [itembox]);

  return (
    <div>
      <div className="container">
        <div className="left-column">
          <img src="" alt="" />
        </div>
        <div className="right-column">
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
                  <input type="text"  type="radio" />
                  <label for="red">
                    <span></span>
                  </label>
                </div>
                <div>
                  <input type="text" />
                  <label for="blue">
                    <span></span>
                  </label>
                </div>
                <div>
                  <input type="text" />
                  <label for="black">
                    <span></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualPage;
