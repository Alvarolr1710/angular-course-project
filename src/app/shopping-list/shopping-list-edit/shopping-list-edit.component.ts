import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../services/shopping-list/shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  selectedIngredientIndex: number;
  private subscription: Subscription;

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
    this.subscription = this.shoppingListService.selectedIngredient.subscribe((ingredientIndex: number) => {
      this.selectedIngredientIndex = ingredientIndex;
    });
  }

  ngOnInit() {
  }

  addNewIngredient() {
    const ingredientModel = new IngredientModel(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.shoppingListService.addNewIngredient(ingredientModel);
  }

  deleteExistingIngredient() {
    this.shoppingListService.removeSelectedIngredient(this.selectedIngredientIndex);
    this.selectedIngredientIndex = null;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
