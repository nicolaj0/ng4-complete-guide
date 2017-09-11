import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {FormGroup, NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  editedItem: Ingredient;
  editedItemIndex: number;
  subscription: Subscription;
  editMode = false;

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngrefien(index);
        this.slForm.setValue({
          name : this.editedItem.name,
          amount : this.editedItem.amount
        });
      }
    );
  }

  onAddItem(f: NgForm) {
    const value = f.value;
    const newIngredient =  new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngrefien(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
    this.slForm.reset();
    this.editMode = false;
  }
}
