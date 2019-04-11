import React from "react";

const LoginButton = props => {
  return (
    <button onClick={props.onClick} type="button" className="btn btn-primary">
      Login
    </button>
  );
};

export default LoginButton;
