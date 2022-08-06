import { useState } from "react";

const ReadMoreLess = ({ children }) => {
  return (
    <div className="read-more-less">
      {children}
      <button>read more</button>
    </div>
  );
};
export default ReadMoreLess;
