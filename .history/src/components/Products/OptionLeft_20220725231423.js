import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import StarIcon from "@mui/icons-material/Star";

function OptionLeft() {
  return (
    <div>
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
      <p>
        <KeyboardArrowUpIcon />
        <span>See Less</span>
      </p>
      <h4>Video Game Price</h4>
    </div>
  );
}

export default OptionLeft;
