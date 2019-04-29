import React from "react";

const RegisterButton = props => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className="btn btn-danger btn-lg"
    >
      Register
    </button>
  );
};

export default RegisterButton;
