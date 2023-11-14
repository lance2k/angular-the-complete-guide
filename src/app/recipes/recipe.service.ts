import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) {}

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.cookipedia.co.uk/wiki/images/3/3d/Ready_steady_pasta_recipe_recipe.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://www.cookipedia.co.uk/wiki/images/3/3d/Ready_steady_pasta_recipe_recipe.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  getRecipe() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
