import React, { useEffect, useState } from "react";
import { useStateValue } from "../../DataLayer/Datalayer";

function IndividualPage() {
  const [{ itembox }, dispatch] = useStateValue();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
  }, [itembox]);

  return (
    <div>
      {itembox.map((item) => (
        <div>
          {item.id}
          <img src={item.image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default IndividualPage;
