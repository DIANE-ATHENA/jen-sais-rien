import { Component, OnInit } from '@angular/core';
import { Recipe } from '../modeles/recipe';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-category-ingredients',
  templateUrl: './recipes-category-ingredients.component.html',
  styleUrls: ['./recipes-category-ingredients.component.css']
})
export class RecipesCategoryIngredientsComponent implements OnInit {

  foodTypeName: string
  recipes: Recipe[]

  constructor(private _activatedRoute: ActivatedRoute, private _recipesService: RecipesService) {
   
   }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.foodTypeName = params.foodType
      this._recipesService.findRecipesByIngredientsType(params.foodType).subscribe(
        (recipes: Recipe[]) => {
          console.log('Recipes:', recipes)
          this.recipes = recipes
        }
      )
    })
  }


}
