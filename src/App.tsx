import React, { useState } from "react";
import "./App.css";
import SubmitRecipeModal from "./SubmitRecipeModal";
import { Recipe } from "./Recipe";

function App() {
  const [recipeList, setRecipeList] = useState([] as Recipe[]);

  const handleRecipeAdd = (newRecipe: Recipe) => {
    console.log("handleRecipeAdd");
    const newRecipeList = [...recipeList, newRecipe];
    console.log(newRecipeList);
    setRecipeList(newRecipeList);
  };

  return (
    <div className="App">
      <SubmitRecipeModal
        recipeList={recipeList}
        onRecipeAdd={handleRecipeAdd}
      />
      <div>
        {recipeList.map((r) => {
          if (r) {
            return <div key={r.id}>{r.recipeName}</div>;
          } else {
            return <div>none</div>;
          }
        })}
      </div>
    </div>
  );
}

export default App;
