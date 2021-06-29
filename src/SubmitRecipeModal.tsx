import React, { useState, useRef } from "react";
import IngredientRow from "./IngredientRow";
import ProcessRow from "./ProcessRow";
import SubmitButton from "./SubmitButton";

import { Recipe } from "./Recipe";
import { Ingredient } from "./Ingredient";
import { Process } from "./Process";

import "./modal.css";

type SubmitRecipeModalProps = {
  recipeList: Recipe[];
  onRecipeAdd: (newRecipe: Recipe) => void;
};

const SubmitRecipeModal = (props: SubmitRecipeModalProps) => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredientArray, setIngredientArray] = useState([] as Ingredient[]);
  const [processArray, setProcessArray] = useState([] as Process[]);
  const recipeNameRef = useRef<HTMLInputElement>(null);

  const handleSubmitClick = () => {
    //submitが押されると、recipeの各要素を取得して整形し新しいrecipeを作る。新しいRecipeを渡してトップのhandleRecipeAddを起動する。そしてrecipeListに新しいrecipeを追加する処理を行う。
    const newRecipeName = recipeNameRef.current!.value;
    const newIngredient = ingredientArray.map((i) => {
      return i.name;
    });
    const newProcess = processArray.map((p) => {
      return p.name;
    });
    const newRecipe: Recipe = {
      id: Date.now(),
      recipeName: newRecipeName,
      ingredient: newIngredient,
      process: newProcess,
    };
    props.onRecipeAdd(newRecipe);
  };

  const handleIngredientAdd = (newIngredientName: string) => {
    console.log(ingredientArray);
    let newId = 0;
    if (ingredientArray.length !== 0) {
      newId =
        Math.max.apply(
          null,
          ingredientArray.map((i) => {
            return Number(i.id);
          })
        ) + 1;
    } else {
      newId = 1;
    }
    const newIngredientArray = [
      ...ingredientArray,
      { id: newId, name: newIngredientName },
    ];
    setIngredientArray(newIngredientArray);
  };

  const handleIngredientDelete = () => {};

  const handleProcessAdd = (newProcessName: string) => {
    let newId = 0;
    if (processArray.length !== 0) {
      newId =
        Math.max.apply(
          null,
          processArray.map((i) => {
            return Number(i.id);
          })
        ) + 1;
    } else {
      newId = 1;
    }
    const newProcessArray = [
      ...processArray,
      { id: newId, name: newProcessName },
    ];
    setProcessArray(newProcessArray);
  };

  const handleProcessDelete = () => {};

  return (
    <div className="modal-kari">
      <p>もーだるがめん（仮）</p>
      <div className="recipe-name">
        <label htmlFor="recipe-name">レシピ名：</label>
        <input
          className="recipe-name-input"
          type="text"
          name="recipe-name"
          placeholder="レシピ名"
          ref={recipeNameRef}
        />
      </div>
      <IngredientRow
        ingredientArray={ingredientArray}
        AddIngredient={handleIngredientAdd}
        DeleteIngredient={handleIngredientDelete}
      />
      <ProcessRow
        processArray={processArray}
        AddProcess={handleProcessAdd}
        DeleteProcess={handleProcessDelete}
      />
      <SubmitButton onSubmitClick={handleSubmitClick} />
    </div>
  );
};

export default SubmitRecipeModal;
