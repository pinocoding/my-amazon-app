import React from "react";

function OptionLeft() {
  return (
    <div>
      <div className="Soft">
        <label htmlFor=""></label>
        <select name="" id="">
          <option>Sort by:</option>
          <option value="up">Price: low to hight</option>
          <option value="down">Price: hight to low</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <h4 className="">Brand</h4>
      <p>
        <input type="checkbox" />
        Razer
      </p>
      <p>
        <input type="checkbox" />
        SteelSeries
      </p>
      <p>
        <input type="checkbox" />
        HyperX
      </p>
      <p>
        <input type="checkbox" />
        Corsair
      </p>
      <p>
        <input type="checkbox" />
        BENGOO
      </p>

      <div>
        <p>
          <input type="checkbox" />
          Logitech
        </p>
        <p>
          <input type="checkbox" />
          Turtle Beach
        </p>

        <p>
          <input type="checkbox" />
          Sony
        </p>
      </div>

      <h4>Video Game Price</h4>
    </div>
  );
}

export default OptionLeft;
