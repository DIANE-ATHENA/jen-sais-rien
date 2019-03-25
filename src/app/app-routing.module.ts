import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"recipes",
    component: RecipesListComponent
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
