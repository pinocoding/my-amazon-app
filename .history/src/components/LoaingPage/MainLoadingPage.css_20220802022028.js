import React from "react";
import "./MainLoadingPage.css";

function MainloadingPage() {
  return (
    <div>
      <div class="overlay">
        <div class="spinner"></div>
        <div class="label">Loading</div>
      </div>
      <button type="button">Toggle</button>
    </div>
  );
}

export default MainloadingPage;
