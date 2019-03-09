import React from "react";

const LoginInput = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        value={props.value}
        onChange={props.onChange}
        type="text"
        className="form-control"
        id={props.name}
        name={props.name}
      />
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};

export default LoginInput;
