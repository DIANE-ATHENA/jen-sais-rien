import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecipesCategoryComponent } from './recipes-category/recipes-category.component';
import { RecipeProcessComponent } from './recipe-process/recipe-process.component';
import { RecipesCategoryIngredientsComponent } from './recipes-category-ingredients/recipes-category-ingredients.component';

const routes: Routes = [

  {
    path:"",
    component: CategoriesComponent
  },

  
  {
    path:"recipes",
    component: RecipesListComponent
  },

  {
    path:"recipes/:category",
    component: RecipesCategoryComponent
  },

  {
    path:"recipe-details/:id",
    component: RecipeProcessComponent
  },

  {
    path:"recipes-by-foodtype/:foodType",
    component: RecipesCategoryIngredientsComponent
  },

  {
    path:"login",
    component: LoginComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
