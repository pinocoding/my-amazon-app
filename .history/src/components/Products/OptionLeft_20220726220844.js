import React from "react";

function OptionLeft() {
  console.log();
  return (
    <div>
      <form action="">
        <select
          defaultValue={this.state.selectValue}
          onChange={this.handleChange}
        >
          <option value="1">Sort by: Featured </option>
          <option value="2">Price:Low to Hight</option>
          <option value="3">Price:High to Low</option>
          <option value="4">Customer Review</option>
          <br /> <br />
        </select>
      </form>
    </div>
  );
}

export default OptionLeft;
