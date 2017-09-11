import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'];
        this.initForm();
      });
  }
  onSubmit() {

      if (this.editMode) {
        this.recipeService.updateRecipe(this.id, this.recipeForm.value);
      } else {
        this.recipeService.addRecipe(this.recipeForm.value);
      }
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let recipeName = '';
    let recimeImgPath = '';
    let recimeDesc = '';
    let recipeInggredients = new FormArray([]);
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recimeImgPath = recipe.imagePath;
      recimeDesc = recipe.description;
      if (recipe['ingredients']) {
        for (const ingredient of recipe.ingredients) {
          recipeInggredients.push(new FormGroup({
            'name' : new FormControl(ingredient.name, Validators.required),
            'amount' : new FormControl(ingredient.amount, Validators.required)
          }));
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName, Validators.required),
      'imagePath' : new FormControl(recimeImgPath),
      'description' : new FormControl(recimeDesc, [
        Validators.required,
        ]),
      'ingredients' : recipeInggredients
    });
  }

  onAddIng() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, Validators.required)
    }));
  }

  onCancel() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
    // this.router.navigate();
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
