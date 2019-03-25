import React, { Component } from "react";

const LoginButton = props => {
  return (
    <button onClick={props.onClick} type="button" class="btn btn-primary">
      Login
    </button>
  );
};

export default LoginButton;
