import React from "react";
import { useStateValue } from "../../DataLayer/Datalayer";

function IndividualPage({ item }) {
  const [{ individualPage }, dispatch] = useStateValue();
  return (
    <div>
      <div>{item.image}</div>
    </div>
  );
}

export default IndividualPage;
