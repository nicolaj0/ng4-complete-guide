import {NgModule} from "@angular/core";
import {AuthGuardService} from "../auth/auth-guard.service";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeBookComponent} from "./recipe-book.component";
import {RouterModule, Routes} from "@angular/router";
const recipeRoutes: Routes = [

  {path: '', component: RecipeBookComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] }
  ] },
];
@NgModule({
  imports: [
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [RouterModule]

})
export class RecipesRoutingModule {}
