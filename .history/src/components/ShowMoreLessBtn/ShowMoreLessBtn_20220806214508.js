import { useState } from "react";

const ReadMoreLess = ({ children }) => {
  const [isReadMore, setReadMore] = useState(false);
  return (
    <div className="read-more-less">
      {children}
      <button>read more</button>
    </div>
  );
};
export default ReadMoreLess;
