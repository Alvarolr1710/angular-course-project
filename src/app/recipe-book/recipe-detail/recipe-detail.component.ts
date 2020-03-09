import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../services/shopping-list/shopping-list.service';
import {RecipeService} from '../../services/recipe/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  addToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }

}
