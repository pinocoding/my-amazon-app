import React from "react";
import "./LoadingPage.css";

function LoadingPage() {
  return (
    <div className="loader">
      <h1>
        loading <span className="bullets">.</span>
      </h1>
    </div>
  );
}

export default LoadingPage;
