import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = []
  recipe = new Recipe('Dummy', 'Dummy description', 'https://static.thenib.com/usq/1d97429f-4a64-4d52-bfdb-c36172c05228/this-is-not-fine-001-dae9d5.png')

  constructor() { }

  ngOnInit() {
  }

}
