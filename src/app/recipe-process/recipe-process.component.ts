import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../modeles/recipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-process',
  templateUrl: './recipe-process.component.html',
  styleUrls: ['./recipe-process.component.css']
})
export class RecipeProcessComponent implements OnInit {
  recipeId: number
  recipe: Recipe
  constructor(private _recipeService: RecipesService, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(params =>
      this.recipeId = params.id)
  }

  ngOnInit() {
    this._recipeService.findRecipe(this.recipeId).subscribe(recipe => this.recipe = recipe)
  }

}
