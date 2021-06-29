import { useRef } from "react";
import { Ingredient } from "./Ingredient";
import IngredientsShow from "./IngredientsShow";

//材料追加ボタンを実装する。追加ボタンを押すと新しいフォームが出る。
//削除ボタンを実装する。削除ボタンを押すとその材料は削除される。
//追加ボタン、削除ボタンが押されるとingredientArrayが変更される。

type IngredientProps = {
  ingredientArray: Ingredient[];
  AddIngredient: (i: string) => void;
  DeleteIngredient: () => void;
};

const IngredientRow = (props: IngredientProps) => {
  const ingredientRef = useRef<HTMLInputElement>(null);

  // const ingredients = props.ingredientArray.map((ing) => {
  //   return (
  //     <div className="ingredient-row" key={ing.id}>
  //       {ing.name}
  //     </div>
  //   );
  // });

  const AddIngredient = () => {
    const newIngredientName = ingredientRef.current!.value;
    props.AddIngredient(newIngredientName);
  };

  return (
    <div className="ingredient-area">
      材料：
      <IngredientsShow ingredientArray={props.ingredientArray} />
      <input
        type="text"
        name="ingredient-input"
        className="ingredients-input"
        placeholder="材料"
        ref={ingredientRef}
      />
      <div className="ingredient-submit" onClick={AddIngredient}>
        追加
      </div>
    </div>
  );
};

export default IngredientRow;
