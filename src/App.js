import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import RecipeDisplay from "./Components/RecipeDisplay";
import Recipe from "./Components/Recipe";
import { Routes, Route } from "react-router-dom";
// import RecipeDisplay from "./Components/RecipeDisplay";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/DisplayRecipies" element={<RecipeDisplay />}></Route>
        <Route path="/AddRecipie" element={<Recipe />}></Route>
      </Routes>
    </>
  );
}

export default App;
