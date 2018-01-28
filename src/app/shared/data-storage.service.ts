import {Injectable} from "@angular/core";
import {RecipeService} from "../recipe-book/recipe.service";
import {Recipe} from "../recipe-book/recipe.model";
import {AuthService} from "../auth/auth.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeSerice: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    return this.httpClient.put('https://udemy-6e685.firebaseio.com/recipes.json',
      this.recipeSerice.getRecipes(),
      {
        observe: 'body',
      });
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.httpClient.get<Recipe[]>('https://udemy-6e685.firebaseio.com/recipes.json?auth=' + token,{
      observe : 'body',
      responseType: 'json'})
      .map(
        (recipes) => {
          console.log(recipes);
           for (const recipe of recipes) {
            if (!recipe['ingredients']) {
               console.log(recipe);
               recipe['ingredients'] = [];
             }
           }
           return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
        this.recipeSerice.setRecipes(recipes);

      }
    );
  }

}
