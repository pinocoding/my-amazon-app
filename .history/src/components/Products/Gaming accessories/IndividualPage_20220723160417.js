import React from "react";
import { useStateValue } from "../../DataLayer/Datalayer";

function IndividualPage({ item }) {
  const [{ Xbox }, dispatch] = useStateValue();
  return (
    <div>
      {Xbox.map(item =>())}
      <div>{item.image}</div>
    </div>
  );
}

export default IndividualPage;
