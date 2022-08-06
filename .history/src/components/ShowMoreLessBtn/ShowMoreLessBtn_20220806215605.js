import { useState } from "react";

const ReadMoreLess = ({ children, limit }) => {
  const [isReadMore, setReadMore] = useState(false);
  const toggleBtn = () => {
    setReadMore((oldstate) => !oldstate);
  };
  return (
    <div className="read-more-less">
      {isReadMore ? children : children.substr(0, limit)}
      {children}
      < onClick={toggleBtn}>{isReadMore? "read less": "...read more"}</button>
    </div>
  );
};
export default ReadMoreLess;
