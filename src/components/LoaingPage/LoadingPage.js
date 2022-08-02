import React from "react";
import "./LoadingPage.css";

function LoadingPage() {
  return (
    <div className="loader">
      <h2>
        loading <span className="bullets">.</span>
      </h2>
    </div>
  );
}

export default LoadingPage;
