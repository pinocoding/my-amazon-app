import React from "react";

function pagination() {
  const pageSize = 3;
  const field = " username";
  const query = ref.orderBy(field).litmit(pageSize);
  function nextPage() {
    return ref.orderBy(field).startAfter(last[field]);
  }
  return <div>pagination</div>;
}

export default pagination;
