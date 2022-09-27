import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type RecipeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Recipe {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly cookingTime?: number | null;
  readonly method?: string | null;
  readonly featuredImage?: string | null;
  readonly ingredients?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Recipe, RecipeMetaData>);
  static copyOf(source: Recipe, mutator: (draft: MutableModel<Recipe, RecipeMetaData>) => MutableModel<Recipe, RecipeMetaData> | void): Recipe;
}