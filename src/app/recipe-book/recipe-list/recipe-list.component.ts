import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Observer} from "rxjs/Observer";
import {Subscription} from "rxjs/Subscription";
import {UserService} from "../userv.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];


  constructor(private recipeService: RecipeService, private usersev: UserService) { }

  ngOnInit() {
    this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();

  }


  onActivate() {
    this.usersev.userActivated.next();
  }
}
