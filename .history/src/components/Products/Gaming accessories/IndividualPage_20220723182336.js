import React from "react";
import { useStateValue } from "../../DataLayer/Datalayer";

function IndividualPage({ item }) {
  const [{ itembox }, dispatch] = useStateValue();
  console.log(itembox);

  return (
    <div>
      {itembox.map((item) => (
        <div>
          {/* {item.id} */}
          <img src={item.image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default IndividualPage;
