import React, { useState } from "react";
import "./App.css";
import SubmitRecipeModal from "./SubmitRecipeModal";
import { Recipe } from "./Recipe";
import IngredientsShow from "./IngredientsShow";
import ProcessShow from "./ProcessShow";

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
            return (
              <div>
                <div key={r.id}>{r.recipeName}</div>
                <IngredientsShow ingredientArray={r.ingredient} />
                <ProcessShow processArray={r.process} />
              </div>
            );
          } else {
            return <div>none</div>;
          }
        })}
      </div>
    </div>
  );
}

export default App;
