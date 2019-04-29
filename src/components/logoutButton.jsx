import React from "react";

const LogoutButton = props => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className="btn btn-danger btn-lg"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
