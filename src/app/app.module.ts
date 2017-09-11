import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { BetterHighlightDirective } from './better-highlight.directive';
import { DropDownDirective } from './shared/drop-down.directive';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRoutingModuleModule} from "./routing/app-routing-module.module";
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import {UserService} from "./recipe-book/userv.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RecipeService} from "./recipe-book/recipe.service";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipeBookComponent,
    RecipeItemComponent,
    BetterHighlightDirective,
    DropDownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModuleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, UserService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
