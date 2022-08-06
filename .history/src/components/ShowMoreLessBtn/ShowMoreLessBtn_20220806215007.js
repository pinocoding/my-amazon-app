import { useState } from "react";

const ReadMoreLess = ({ children }) => {
  const [isReadMore, setReadMore] = useState(false);
  const toggleBtn = () => {
    setReadMore((oldstate) => !oldstate);
  };
  return (
    <div className="read-more-less">
      {isReadMore ? children : children.substr(0, 400)}
      {children}
      <button onClick={toggleBtn}>...read more</button>
    </div>
  );
};
export default ReadMoreLess;
