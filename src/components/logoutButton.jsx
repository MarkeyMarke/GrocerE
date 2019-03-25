import React, { Component } from "react";

const LogoutButton = props => {
  return (
    <button onClick={props.onClick} type="button" class="btn btn-primary">
      Logout
    </button>
  );
};

export default LogoutButton;
