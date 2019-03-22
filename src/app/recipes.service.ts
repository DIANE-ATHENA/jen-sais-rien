import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './modeles/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private _http: HttpClient) {}
    
  findRecipes(): Observable<Recipe[]> {
      return this._http.get<Recipe[]>('http://localhost:3000/recipes')
    }
   
}
