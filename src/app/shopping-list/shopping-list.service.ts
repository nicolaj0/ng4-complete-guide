import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
import {Subject} from "rxjs/Subject";

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  startedEditing = new Subject<number>()
  private ingredients: Ingredient [] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomates', 10)
  ];

  getIngrefien(index: number) {
    return this.ingredients[index];
  }

  updateIngrefien(index: number, newIngredint: Ingredient) {
    this.ingredients[index] = newIngredint;
    this.ingredientChanged.emit(this.ingredients.slice());
  }
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
