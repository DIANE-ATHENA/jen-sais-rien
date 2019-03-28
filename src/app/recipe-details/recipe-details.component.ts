import { Component, OnInit, Input } from '@angular/core';
import { Recipe, Process } from '../modeles/recipe';
import { RecipesService } from '../recipes.service';



@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

@Input()
  recipe: Recipe
  
  
  constructor(private _recipesService: RecipesService) { 
      
  }

  ngOnInit() {
  }

 

}
