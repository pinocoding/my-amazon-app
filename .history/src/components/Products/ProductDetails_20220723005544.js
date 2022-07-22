import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";

function ProductDetails() {
  const context = useContext(AuthContext);
  const currentItem = context.currentItem;
  console.log(currentItem);
  return (<div className="product-detail">
    <div class="container">


 <div class="left-column">
   <img data-image="black" src="images/black.png" alt="">
   <img data-image="blue" src="images/blue.png" alt="">
   <img data-image="red" class="active" src="images/red.png" alt="">
 </div>



 <div class="right-column">


   <div class="product-description">
     <span>Headphones</span>
     <h1>Beats EP</h1>
     <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
   </div>


   <div class="product-configuration">


     <div class="product-color">
       <span>Color</span>

       <div class="color-choose">
         <div>
           <input data-image="red" type="radio" id="red" name="color" value="red" checked>
           <label for="red"><span></span></label>
         </div>
         <div>
           <input data-image="blue" type="radio" id="blue" name="color" value="blue">
           <label for="blue"><span></span></label>
         </div>
         <div>
           <input data-image="black" type="radio" id="black" name="color" value="black">
           <label for="black"><span></span></label>
         </div>
       </div>

     </div>


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


   <div class="product-price">
     <span>148$</span>
     <a href="#" class="cart-btn">Add to cart</a>
   </div>
 </div>
</div>
  </div>);
}

export default ProductDetails;
