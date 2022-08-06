import { useState } from "react";

const ReadMoreLess = ({ children, limit }) => {
  const [isReadMore, setReadMore] = useState(false);
  const toggleBtn = () => {
    setReadMore((oldstate) => !oldstate);
  };
  return (
    <div className="read-more-less">
      {isReadMore ? children : children.substr(0, 1)}
      {children}
      <button onClick={toggleBtn}>
        {isReadMore ? "...Read less" : "...Read more"}
      </button>
    </div>
  );
};
export default ReadMoreLess;
