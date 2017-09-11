import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from "rxjs/Subject";

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'test 1',
      'simpleTest',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-IwLofXc73w0I04dK0WzEQQVEYSSI2yIrOpdnjVcmvA9DrSMz',
      [
        new Ingredient('meat', 1),
        new Ingredient('fire', 20)
      ]),
    new Recipe(
      'test 2',
      'simpleTest', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-IwLofXc73w0I04dK0WzEQQVEYSSI2yIrOpdnjVcmvA9DrSMz',
      [
        new Ingredient('Buns', 1)
      ])
  ];
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.recipes.slice());

  }
}
