import {NgModule} from "@angular/core";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth-routing.module";

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ],
  exports: [
    SignupComponent,
    SigninComponent
  ]
})
export class AuthModule {}
