import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  selectedIngredient = new EventEmitter<number>();
  ingredientsChange = new EventEmitter<IngredientModel[]>();
  private ingredients: IngredientModel[] = [
    new IngredientModel('Apple', 5),
    new IngredientModel('Lemon', 8)
  ];

  constructor() {
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addNewIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChange.emit(this.ingredients.slice());
  }

  removeSelectedIngredient(ingredientIndex: number) {
    if (ingredientIndex) {
      this.ingredients.splice(ingredientIndex, 1);
      this.ingredientsChange.emit(this.ingredients.slice());
    }
  }

}
