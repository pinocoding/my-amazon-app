import React from "react";
import "./LoadingPage.css";

function LoadingPage() {
  return (
    <div className="loader">
      <h4>
        loading <span className="bullets">.</span>
      </h4>
    </div>
  );
}

export default LoadingPage;
