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
export class RecipeListComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.customSubr.unsubscribe();
  }
  customSubr: Subscription;

  recipes: Recipe[];
  constructor(private recipeService: RecipeService, private usersev: UserService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    const myObs = Observable.create((obs: Observer<string>) => {
        setTimeout(() => {
          obs.next('first packajs');
        },2000);
      setTimeout(() => {
        obs.next('second packajs');
      },4000);
      setTimeout(() => {
        obs.complete();
      },5000);

      }
    );
    this.customSubr = myObs.subscribe(
      (data: string ) => {console.log(data); },
      (err: string ) => {console.log(err); },
      () => {console.log('complete');}
    );
  }


  onActivate() {
    this.usersev.userActivated.next();
  }
}
