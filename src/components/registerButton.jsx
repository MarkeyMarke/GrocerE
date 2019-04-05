import React from "react";

const RegisterButton = props => {
  return (
    <button onClick={props.onClick} type="button" className="btn btn-primary">
      Register
    </button>
  );
};

export default RegisterButton;
