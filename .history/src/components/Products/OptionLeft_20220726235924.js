import React, { useState } from "react";

function OptionLeft() {
  const [selected, setSelected] = useState("");
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  console.log(selected);

  return ();
}

export default OptionLeft;
