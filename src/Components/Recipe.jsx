import React, { Component } from "react";
import { useState } from "react";
import { getRecipies } from "./Details";
import { useNavigate } from "react-router-dom";

let id = 0;
var today = new Date();
const Recipe = () => {
  const [addRecipe, setaddRecipe] = useState({
    id: "",
    recipieName: "",
    body: "",
    postDate: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState({
    name: "",
    cost: "",
  });

  let handleChange = (e) => {
    let newobj = { ...addRecipe };
    newobj[e.target.name] = e.target.value;
    setaddRecipe(newobj);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let valueObj = {
      id: id++,
      name: "",
      body: "",
      currentDate:
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate(),
    };
    if (addRecipe.recipieName === "" || addRecipe.body === "") {
      alert("OPPS!!! ALL filed are mandatary");
      return;
    }
    valueObj.name = addRecipe.recipieName;
    valueObj.body = addRecipe.body;
    getRecipies().push(valueObj);
    console.log(getRecipies());
    navigate("/DisplayRecipies");
  };
  return (
    <form style={{display:"flex", 
    justifyContent:"center",
    alignItems:"center"
}}className="form">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Enter Title-of-Recipie</label>
        <input
          onChange={(e) => handleChange(e)}
          value={addRecipe.recipieName}
          type="text"
          className="form-control"
          name="recipieName"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Recipie-titile"
        />
        {error.name && <div className="alert alert-danger">{error.name}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Ingredents and Steps</label>

        <textarea
          onChange={(e) => handleChange(e)}
          value={addRecipe.body}
          type="text"
          className="form-control"
          name="body"
          id="exampleInputPassword1"
          placeholder="Ingredents"
        />
        {error.cost && <div className="alert alert-danger">{error.cost}</div>}
      </div>

      <button type="submit" onClick={handleSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Recipe;
