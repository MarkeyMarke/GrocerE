import React, { Component } from "react";

const RegisterButton = props => {
  return (
    <button onClick={props.onClick} type="button" class="btn btn-primary">
      Register
    </button>
  );
};

export default RegisterButton;
