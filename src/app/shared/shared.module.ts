import {NgModule} from "@angular/core";
import {DropDownDirective} from "./drop-down.directive";
import {CommonModule} from "@angular/common";

@NgModule( {
  declarations:[
    DropDownDirective
  ],
  exports:[
    CommonModule,
    DropDownDirective
  ]
})
export class SharedModule {}



