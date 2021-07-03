import React, { useState } from "react";
import "./App.css";
import SubmitRecipeModal from "./SubmitRecipeModal";
import { Recipe } from "./Recipe";
import IngredientsShow from "./IngredientsShow";
import ProcessShow from "./ProcessShow";

import "./RecipeView.css";

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
              <div className="recipe-view-area">
                <div className="recipe-name-area" key={r.id}>
                  レシピ名：{r.recipeName}
                </div>
                <div className="ingredient-area">
                  材料一覧：
                  <IngredientsShow ingredientArray={r.ingredient} />
                </div>
                <div className="process-area">
                  手順一覧：
                  <ProcessShow processArray={r.process} />
                </div>
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
