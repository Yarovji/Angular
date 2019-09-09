import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarPageComponent } from './car-page/car-page.component';

const routes: Routes = [
  {path: 'cars', component: CarsPageComponent},
  {path: 'cars/:id', component: CarPageComponent},
  {path: '', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
