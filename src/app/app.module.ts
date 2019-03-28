import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,MatMenuModule, MatIconModule, MatCardModule, MatCardTitle, MatFormField, MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserCardComponent } from './user-card/user-card.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth.interceptor';
import { CategoriesComponent } from './categories/categories.component';
import { RecipesCategoryComponent } from './recipes-category/recipes-category.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeProcessComponent } from './recipe-process/recipe-process.component';
import { RecipesCategoryIngredientsComponent } from './recipes-category-ingredients/recipes-category-ingredients.component';





@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent,
    UserCardComponent,
    LoginComponent,
    CategoriesComponent,
    RecipesCategoryComponent,
    RecipeDetailsComponent,
    RecipeProcessComponent,
    RecipesCategoryIngredientsComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor, multi: true}
  ],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
