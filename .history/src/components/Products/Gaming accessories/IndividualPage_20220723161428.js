import React from "react";
import { useStateValue } from "../../DataLayer/Datalayer";

function IndividualPage({ item }) {
  const [{ Xbox }, dispatch] = useStateValue();
  console.log(Xbox);
  return (
    <div>
      {Xbox.map((item) => (
        <div>
          {item.id}
          <img src={item.image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default IndividualPage;
