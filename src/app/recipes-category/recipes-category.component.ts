import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../modeles/recipe';

@Component({
  selector: 'app-recipes-category',
  templateUrl: './recipes-category.component.html',
  styleUrls: ['./recipes-category.component.css']
})
export class RecipesCategoryComponent implements OnInit {

  categoryName: string
  recipes: Recipe[]
  
  constructor(private _activatedRoute: ActivatedRoute, private _recipesService: RecipesService) {
    this._activatedRoute.params.subscribe(params => {
      this.categoryName = params.category
      this._recipesService.findRecipesByCategory(params.category).subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes
        }
      )
    })

  }

  ngOnInit() {
  }

}
