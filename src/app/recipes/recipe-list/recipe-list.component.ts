import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/300px-Wiener-Schnitzel02.jpg', []),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ]
  @Output() recipeSelected = new EventEmitter<Recipe>()

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }
}
