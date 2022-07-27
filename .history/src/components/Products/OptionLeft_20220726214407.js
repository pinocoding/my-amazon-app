import React from "react";

function OptionLeft() {
  return (
    <div>
      <div className="Soft">
      <form action="/action_page.php">
  <label for="cars">Choose a car:</label>
  <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  <br><br>
  <input type="submit" value="Submit">
</form>
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
