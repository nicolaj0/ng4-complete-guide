import {NgModule} from "@angular/core";
import {AuthGuardService} from "../auth/auth-guard.service";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RouterModule} from "@angular/router";
import {RecipeBookComponent} from "./recipe-book.component";

const recipeRoutes =[
  {path: 'recipes', component: RecipeBookComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] }
    ] }
]

@NgModule({
  imports:[
    RouterModule.forChild(recipeRoutes)

  ],
  exports: [RouterModule]
})

export class RecipeRoutingModule {}
