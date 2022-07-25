import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import HeadSetsCard from "./HeadSetCard.js";
import StarIcon from "@mui/icons-material/Star";

// import HeadSetsCard from "./HeadSetCard";
// import "../Product.css";

function HeadSets() {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
    });
    // dispatch the item into the data source
  };
  return (
    <div className="headsets">
      <div className="headsets__toolbar"></div>
      <div className="headsets__container">
        <div className="headsets__containeroptions">
          <div className="headsets__optionsleft">
            <h4 className="">Climate Pledge Friendly</h4>
            <input type="checkbox" className="headsets__optionscheck" />
            <span>
              <a href="">Climate Pledge Friendly</a>
            </span>
            <h4 className="">Department</h4>
            <ul className="">
              <li>PC Accessories</li>
              <li>PC Game Headsets</li>
              <li>PlayStation 4 Headsets</li>
              <li>PlayStation Legacy Systems</li>
              <li>Xbox One Accessories</li>
              <li>PlayStation 5 Headsets</li>
              <li>Nintendo Legacy Systems</li>
              <li>Mac Game Headsets</li>
            </ul>
            <ul>
              <li>Video Games</li>
              <li>Electronics</li>
              <li>Cell Phones & Accessories</li>
              <li>Home & Kitchen</li>
              <li>Musical Instruments</li>
            </ul>
            <p>
              <KeyboardArrowUpIcon />
              <span>See Fewer Departments</span>
            </p>
            <h4 className="">Customer Review</h4>
            <p>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon /> & up
            </p>
            <p>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon /> & up
            </p>
            <p>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon /> & up
            </p>
            <p>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon /> & up
            </p>
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
            <p>
              <input type="checkbox" />
              Bose
            </p>
            <p>
              <input type="checkbox" />
              JBL
            </p>

            <div>
              <p>
                <input type="checkbox" />
                ASTRO Gaming
              </p>
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
                FEIYING
              </p>
              <p>
                <input type="checkbox" />
                EKSA
              </p>
              <p>
                <input type="checkbox" />
                ZIUMIER
              </p>
              <p>
                <input type="checkbox" />
                SOMIC
              </p>
              <p>
                <input type="checkbox" />
                EPOS Gaming
              </p>
              <p>
                <input type="checkbox" />
                Generic
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
        </div>
        <div className="headsets__containerright">
          <div className="headsets__row">
            <HeadSetsCard onClick={addToBasket} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadSets;