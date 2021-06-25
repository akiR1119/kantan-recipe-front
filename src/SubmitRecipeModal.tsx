import React, { useState, useRef } from "react";
import RecipeName from "./RecipeNameForm";
import SubmitButton from "./SubmitButton";

import { Recipe } from "./Recipe";

import "./modal.css";

type SubmitRecipeModalProps = {
  recipeList: Recipe[];
  onRecipeAdd: (newRecipe: Recipe, recipeList: Recipe[]) => void;
};

const SubmitRecipeModal = (props: SubmitRecipeModalProps) => {
  const [recipeName, setRecipeName] = useState("");
  const recipeNameRef = useRef<HTMLInputElement>(null);

  const handleSubmitClick = () => {
    //submitが押されると、recipeの各要素を取得して整形し新しいrecipeを作る。新しいRecipeを渡してトップのhandleRecipeAddを起動する。そしてrecipeListに新しいrecipeを追加する処理を行う。
    const newRecipeName = recipeNameRef.current!.value;
    const newRecipe: Recipe = {
      id: Date.now(),
      recipeName: newRecipeName,
      ingredient: ["kari"],
      process: ["kari"],
    };
    props.onRecipeAdd(newRecipe, props.recipeList);
  };

  return (
    <div className="modal-kari">
      <p>もーだるがめん（仮）</p>
      <RecipeName recipeName={recipeName} recipeNameRef={recipeNameRef} />
      <SubmitButton onSubmitClick={handleSubmitClick} />
    </div>
  );
};

export default SubmitRecipeModal;
