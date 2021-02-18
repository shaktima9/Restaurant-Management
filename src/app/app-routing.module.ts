import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { Routes } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes=[
  {component:AddRestaurantComponent, path:'add'},
  {component:HomeComponent, path:''},
  {component:UpdateRestaurantComponent, path:'update'},
  {component:UpdateRestaurantComponent, path:'update/:id'},
  {component:ListRestaurantComponent, path:'list'},
  {component:LoginComponent, path:'login'},
  {component:RegisterComponent, path:'register'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
