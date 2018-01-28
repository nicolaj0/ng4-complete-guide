import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BetterHighlightDirective } from './better-highlight.directive';
import {AppRoutingModuleModule} from "./routing/app-routing-module.module";
import {SharedModule} from "./shared/shared.module";
import {AuthModule} from "./auth/auth.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {CoreModule} from "./core/core.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BetterHighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModuleModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    ShoppingListModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
