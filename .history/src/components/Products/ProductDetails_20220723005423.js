import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";

function ProductDetails() {
  const context = useContext(AuthContext);
  const currentItem = context.currentItem;
  console.log(currentItem);
  return <div className="product-detail">

2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
<d class="container">

  <!-- Left Column / Headphones Image -->
  <div class="left-column">
    <img data-image="black" src="images/black.png" alt="">
    <img data-image="blue" src="images/blue.png" alt="">
    <img data-image="red" class="active" src="images/red.png" alt="">
  </div>


  <!-- Right Column -->
  <div class="right-column">

    <!-- Product Description -->
    <div class="product-description">
      <span>Headphones</span>
      <h1>Beats EP</h1>
      <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
    </div>

    <!-- Product Configuration -->
    <div class="product-configuration">

      <!-- Product Color -->
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

      <!-- Cable Configuration -->
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

    <!-- Product Pricing -->
    <div class="product-price">
      <span>148$</span>
      <a href="#" class="cart-btn">Add to cart</a>
    </div>
  </div>
</div>
  </div>;
}

export default ProductDetails;
