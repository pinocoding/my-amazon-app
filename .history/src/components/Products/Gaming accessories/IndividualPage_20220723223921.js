import React, { useEffect, useState } from "react";
import { useStateValue } from "../../DataLayer/Datalayer";

function IndividualPage() {
  const [{ itembox }, dispatch] = useStateValue();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

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
