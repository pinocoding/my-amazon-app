import React from "react";

function pagination() {
  const pageSize = 3;
  const field = " username";
  const query = ref.orderBy(field).litmit(pageSize);
  function nextPage(last) {
    return ref.orderBy(field).startAfter(last[field]).limit(pageSize);
  }
  function prevPage(first) {
    return ref.orderBy(field).endBefore(first[field]).limit(pageSize;
  }
  return <div>pagination</div>;
}

export default pagination;
