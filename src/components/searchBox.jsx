import React from "react";

/*
 * Creates a stateless SearchBox component, using Bootstrap
 * onChange grabs the value of the input field(what is put into the search box)
 */

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3"
      id="searchInput"
      placeholder="Search for products..."
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
