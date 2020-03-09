import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../../recipe-book/recipe.model';
import {IngredientModel} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Test recipe',
      'This is the test description',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new IngredientModel('Meat', 1),
        new IngredientModel('Fries', 2),
        new IngredientModel('Sauce', 4),
      ]),
    new Recipe('Test recipe 2 ', 'This is the test description 2',
      'https://live.staticflickr.com/3715/12299229374_aedacc5f25_b.jpg',
      [
        new IngredientModel('Fish', 2),
        new IngredientModel('Sauce', 1),
        new IngredientModel('lemon', 2),
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
