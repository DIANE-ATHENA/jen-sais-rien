import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './modeles/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private _http: HttpClient) { }

  findRecipes(): Observable<Recipe[]> {
    return this._http.get<Recipe[]>('http://localhost:3000/recipes');
  }

  findRecipe(recipeId: number): any {
    return this._http.get<Recipe>('http://localhost:3000/recipes/' + recipeId);
  }

  findRecipesByCategory(category: string): Observable<Recipe[]> {
    return this._http.get<Recipe[]>('http://localhost:3000/recipes?type=' + category);
  }

  findRecipesByIngredientsType(foodType: string): Observable<Recipe[]> {
    return new Observable<Recipe[]>(observer => {
      this.findRecipes().subscribe(
        recipes => {
          const filteredRecipes: Recipe[] = []
          for (let recipe of recipes) {
            for (let ingredient of recipe.ingredients) {
              if (ingredient.foodType && ingredient.foodType.toLowerCase() === foodType.toLowerCase()) {
                filteredRecipes.push(recipe)
                break
              }
            }
          }
          console.log('Filtered recipes', filteredRecipes)
          observer.next(filteredRecipes)
          observer.complete()
        }
      )
    })
  }

}

findRecipesByDiabeteType(typeI: string, typeII: string, gesta: string, ado: string): Observable<Recipe[]> {
  return new Observable<Recipe[]>(observer => {
    this.findDiabeteType().subscribe(
      recipes => {
        const filteredRecipes: Recipe[] = []
        for (let recipe of recipes) {
          for (let typeI of recipe) {
            if (recipe.typeI && recipe.typeI.toLowerCase() === typeI.toLowerCase()) {
              filteredRecipes.push(recipe)
            }
          }
          for (let ty)
        }
        console.log('Filtered recipes', filteredRecipes)
        observer.next(filteredRecipes)
        observer.complete()
      }
    )
  })
}

}
