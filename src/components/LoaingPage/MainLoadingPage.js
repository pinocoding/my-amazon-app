import React from "react";
import "./MainLoadingPage.css";

function MainloadingPage() {
  return (
    <div>
      <div className="overlay">
        <div className="spinner"></div>
        <div className="label">Loading</div>
      </div>
      <button type="button">Toggle</button>
    </div>
  );
}

export default MainloadingPage;
