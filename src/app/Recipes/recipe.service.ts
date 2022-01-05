import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Bolo de Cenoura c/ Chocolate',
      'Alguma coisa',
      'https://www.receiteria.com.br/wp-content/uploads/receitas-faceis-1.jpg',
      [
        new Ingredient('Farinha', 2),
        new Ingredient('Ovos', 2),
        new Ingredient('Leite', 2),
        new Ingredient('Açucar', 2),
        new Ingredient('Achocolatado Em Pó', 2),
      ]
    ),
    new Recipe(
      'Biscoito de Chocolate',
      'Alguma coisa',
      'https://www.receiteria.com.br/wp-content/uploads/receitas-faceis-22.jpg',
      [
        new Ingredient('Farinha', 2),
        new Ingredient('Ovos', 2),
        new Ingredient('Achocolatado Em Pó', 2),
      ]
    ),
    new Recipe(
      'Macarrão a Alho e Óleo',
      'Alguma coisa',
      'https://www.receiteria.com.br/wp-content/uploads/receitas-faceis-33.jpg',
      [
        new Ingredient('Macarrao', 2),
        new Ingredient('Alho', 2),
        new Ingredient('Oleo', 2),
      ]
    ),
    new Recipe(
      'Filé de Frango Empanado',
      'Alguma coisa',
      'https://www.receiteria.com.br/wp-content/uploads/receitas-faceis-44.jpg',
      [
        new Ingredient('Frango', 2),
        new Ingredient('Oleo', 2),
        new Ingredient('Farinha', 2),
      ]
    ),
    new Recipe(
      'Batata Rústica',
      'Alguma coisa',
      'https://www.receiteria.com.br/wp-content/uploads/receitas-faceis-5.jpg',
      [
        new Ingredient('Batata', 2),
        new Ingredient('Oleo', 2),
        new Ingredient('Sal', 2),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addingIngredeientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
