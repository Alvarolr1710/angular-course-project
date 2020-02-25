import {Component, OnInit} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[] = [
    new IngredientModel('Apple', 5),
    new IngredientModel('Lemon', 8)
  ];

  constructor() {
  }

  ngOnInit() {
  }

  addNewIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
  }
}
