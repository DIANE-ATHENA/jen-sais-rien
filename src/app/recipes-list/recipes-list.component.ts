import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../modeles/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  public recipes: Recipe[];

  constructor (private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.findRecipes().subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes
      }
    )
  }

}
