import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Register from "./Register";
const Login = () => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ Username: "", password: "" });
  const handleSubmit = (e) => {
    console.log("hello");
    e.preventDefault();
    let original = { ...errors };
    let fakeObject = { ...errors };
    fakeObject.Username = validate(Username, "Username");
    fakeObject.password = validate(password, "password");
    if (Object.keys(fakeObject).length > 0) {
      setErrors(fakeObject);
    } else {
      setErrors(original);
    }
  };
  const validate = (data, value) => {
    if (data.trim().length === 0) {
      return `${value} cannot be empty`;
    } else if (Username !== "" && password !== "") {
      navigate("/DisplayRecipies");
    } else {
      return "";
    }
  };
  return (
    <div style={{display:"flex", 
                 justifyContent:"center",
                 alignItems:"center"
    }} className="cont">
      <form className="form">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={Username}
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter-email"
          />
          {errors.Username && (
            <div className="alert alert-danger">{errors.Username}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
          {errors.password && (
            <div className="alert alert-danger" role="alert">
              {errors.password}
            </div>
          )}
        </div>

        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="btn btn-primary"
        >
          Login
        </button>
        <Link to="/Register">
          {" "}
          <button className="btn btn-secondary">Register</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
