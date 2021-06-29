import { Ingredient } from "./Ingredient";
import { Process } from "./Process";

export type Recipe = {
  id: number;
  recipeName: string;
  ingredient: Ingredient[];
  process: Process[];
};