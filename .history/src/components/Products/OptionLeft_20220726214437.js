import React from "react";

function OptionLeft() {
  return (
    <div>
      <div className="Soft">
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
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
