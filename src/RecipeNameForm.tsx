import React from "react";

type RecipeNameProps = {
  recipeName: string;
  recipeNameRef: any;
};

const RecipeNameForm = (props: RecipeNameProps) => {
  return (
    <div>
      <label htmlFor="recipe-name">レシピ名：</label>
      <input
        className="recipe-name-input"
        type="text"
        name="recipe-name"
        placeholder="レシピ名"
        ref={props.recipeNameRef}
      />
    </div>
  );
};

export default RecipeNameForm;
