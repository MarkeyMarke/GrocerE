import React, { Component } from "react";

const LoginInput = props => {
  return (
    <div class="form-group">
      <label for={props.name}>{props.label}</label>
      <input
        value={props.value}
        onChange={props.onChange}
        type="text"
        class="form-control"
        id={props.name}
        name={props.name}
      />
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};

export default LoginInput;
