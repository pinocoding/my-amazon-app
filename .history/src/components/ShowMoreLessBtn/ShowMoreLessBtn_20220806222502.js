import { useState } from "react";
import "./ShowMoreLessBtn.css";
const ReadMoreLess = ({ children, limit }) => {
  const [isReadMore, setReadMore] = useState(false);
  const toggleBtn = () => {
    setReadMore((oldstate) => !oldstate);
  };
  return (
    <div className="read-more-less">
      {isReadMore ? children : children.substr(0, limit)}
      {children}
      <button className="read-more" onClick={toggleBtn}>
        {isReadMore ? "...Read less" : "...Read more"}
      </button>
    </div>
  );
};
export default ReadMoreLess;
