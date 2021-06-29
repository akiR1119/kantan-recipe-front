import { Ingredient } from "./Ingredient";

type IngredientsShowProps = {
  ingredientArray: Ingredient[];
};

const IngredientsShow = (props: IngredientsShowProps) => {
  const Ingredients = props.ingredientArray.map((ing) => {
    return (
      <div className="ingredient-row" key={ing.id}>
        {ing.name}
      </div>
    );
  });
  return <div>{Ingredients}</div>;
};

export default IngredientsShow;
