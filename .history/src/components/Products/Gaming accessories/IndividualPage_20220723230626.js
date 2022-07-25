import React, { useEffect } from "react";
import { useStateValue } from "../../DataLayer/Datalayer";

function IndividualPage() {
  const [{ itembox }, dispatch] = useStateValue();

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(itembox));
  }, [itembox]);

  return (
    <div>
      {itembox.map((item) => {

        return(
          <div className="container">
          <div className="left-column">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div className="right-column">
          {/* <!-- Product Description --> */}
    <div className="product-description">
      <span>Headphones</span>
      <h1>Beats EP</h1>
      <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
    </div>


    <div class="product-configuration">


      <div class="product-color">
        <span>Color</span>

        <div class="color-choose">
          <div>
            <input type="text" type="radio"/>
            <label for="red"><span></span></label>
          </div>
          <div>
          <input type="text"type="radio" />
            <label for="blue"><span></span></label>
          </div>
          <div>
          <input type="text"type="radio" />
            <label for="black"><span></span></label>
          </div>
        </div>

      </div>

      {/* <!-- Cable Configuration --> */}
      <div className="cable-config">
        <span>Cable configuration</span>

        <div className="cable-choose">
          <button>Straight</button>
          <button>Coiled</button>
          <button>Long-coiled</button>
        </div>

        <a href="#">How to configurate your headphones</a>
      </div>
          </div>
        </div>
        )


      }




      )}
    </div>
  );
}

export default IndividualPage;
