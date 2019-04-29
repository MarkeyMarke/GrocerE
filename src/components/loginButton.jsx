import React from "react";

const LoginButton = props => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className="btn btn-danger btn-lg"
    >
      Login
    </button>
  );
};

export default LoginButton;
