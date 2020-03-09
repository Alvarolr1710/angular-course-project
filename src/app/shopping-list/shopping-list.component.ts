import {Component, OnInit} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {

  ingredients: IngredientModel[];
  selectedIngredientIndex: number;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChange.subscribe((ingredients: IngredientModel[]) => {
      this.ingredients = ingredients;
    });
  }

  onSelected(index: number) {
    this.shoppingListService.selectedIngredient.emit(index);
  }

}
