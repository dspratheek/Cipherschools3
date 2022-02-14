import React, { Component } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeDisplay from "./RecipeDisplay";
const Register = () => {
  const navigate = useNavigate();
  const [info, setinfo] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErros] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (propName) => {
    let clone = { ...info };
    clone[propName.target.name] = propName.target.value;
    setinfo(clone);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let original = { ...errors };
    let fakeerror = { ...errors };
    //console.log(fakeerror.firstName)
    fakeerror.firstName = validate(info.firstName, "firstName");
    console.log(validate(info.firstName, "firstName"));

    fakeerror.email = validate(info.email, "email");
    fakeerror.password = validate(info.password, "password");
    fakeerror.confirmPassword = validate(
      info.confirmPassword,
      "confirm-password"
    );
    if (Object.keys(fakeerror).length > 0) {
      setErros(fakeerror);
    } else {
      setErros(original);
    }
  };
  const validate = (value, propName) => {
    if (value.trim().length === 0) {
      return `${propName} can't be empty`;
    } else if (value == "currentPassword") {
      if (value != info.password) {
        return "Password Not Matching";
      }
    } else if (
      info.firstName !== "" &&
      info.email != null &&
      info.password !== "" &&
      info.confirmPassword !== ""
    ) {
      navigate("/DisplayRecipies");
    } else {
      return "";
    }
  };
  return (
    <div style={{display:"flex", 
    justifyContent:"center",
    alignItems:"center"
}}className="backimg">
      <form className="form">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">First-Name</label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            value={info.name}
            type="text"
            name="firstName"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter-FirstName"
          />
          {errors.firstName && (
            <div className="alert alert-danger">{errors.firstName}</div>
          )}

          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Email</label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            value={info.email}
            type="email"
            name="email"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Email"
          />
          {errors.email && (
            <div className="alert alert-danger" role="alert">
              {errors.email}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            value={info.password}
            type="text"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="password"
          />
          {errors.confirmPassword && (
            <div className="alert alert-danger" role="alert">
              {errors.password}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="exampleInputPassword2">Confirm-Password</label>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              value={info.confirmPassword}
              type="text"
              name="confirmPassword"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Confirm-password"
            />
            {errors.confirmPassword && (
              <div className="alert alert-danger" role="alert">
                {errors.confirmPassword}
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="btn btn-success"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
