import React, { useState, Component, useEffect } from "react";
import { getRecipies } from "./Details";
import { Link } from "react-router-dom";

const RecipeDisplay = () => {
  const [recipieData, setRecipieData] = useState(getRecipies());
  const [state, setState] = useState(true);
  useEffect(() => {
    let clone = [...getRecipies()];
    setRecipieData(clone);
  }, []);
  const handleDelete = (ele) => {
    let index = getRecipies().indexOf(ele);
    getRecipies().splice(index, 1);

    let clone = [...getRecipies()];
    setRecipieData(clone);
  };
  return (
    <>
      {recipieData.length === 0 ? (
        <div className="noPosts">
          <Link to="/AddRecipie">
            {" "}
            <button className="btn btn-success ">Add</button>
          </Link>
        </div>
      ) : (
        <>
          {" "}
          <div className="container">
            <div className="recipies">
              {recipieData.map((ele) => {
                return (
                  <div key={ele.id} className="recipie">
                    <h4 className="title">{ele.name}</h4>
                    <p className="info">{ele.body}</p>
                    <h6>{ele.currentDate}</h6>
                    <button
                      className="btn btn-color"
                      onClick={() => {
                        handleDelete(ele);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <Link to="/AddRecipie">
            {" "}
            <button
              onClick={() => setState(false)}
              className="btn btn-primary add"
            >
              Add
            </button>
          </Link>
        </>
      )}
    </>
  );
};

export default RecipeDisplay;
