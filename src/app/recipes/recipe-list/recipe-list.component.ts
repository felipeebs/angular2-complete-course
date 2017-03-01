import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Dummy1', 'Dummy1 description', 'https://static.thenib.com/usq/1d97429f-4a64-4d52-bfdb-c36172c05228/this-is-not-fine-001-dae9d5.png', []),
    new Recipe('Dummy2', 'Dummy2 description', 'https://static.thenib.com/usq/1d97429f-4a64-4d52-bfdb-c36172c05228/this-is-not-fine-001-dae9d5.png', [])
  ]
  @Output() recipeSelected = new EventEmitter<Recipe>()

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }
}
