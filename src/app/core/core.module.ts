import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModuleModule} from "../routing/app-routing-module.module";
import {RecipeService} from "../recipe-book/recipe.service";
import {AuthService} from "../auth/auth.service";
import {AuthGuardService} from "../auth/auth-guard.service";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {UserService} from "../recipe-book/userv.service";
import {DataStorageService} from "../shared/data-storage.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../shared/auth.interceptor";
import {LoggingInterceptor} from "../shared/logging.interceptor";

@NgModule({
  declarations : [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModuleModule
  ],
  exports: [
    AppRoutingModuleModule,
    HeaderComponent
  ],
  providers : [
    ShoppingListService,
    UserService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuardService,
    {provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor, multi : true},
    {provide : HTTP_INTERCEPTORS, useClass : LoggingInterceptor, multi : true}]
})
export class CoreModule {}
