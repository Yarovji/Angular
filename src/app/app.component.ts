import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';

interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cars: Cars[] = [];
  carName = '';

  colors = ['red', 'black', 'green', 'grey', 'blue', 'yellow', 'orange', 'pink'];

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {}

  loadCars() {
    this.carsService.getCars().subscribe((res: Cars[]) => (this.cars = res));
  }

  addCar() {
    this.carsService.addCar(this.carName).subscribe((res: Cars) => this.cars.push(res));
    this.carName = '';
  }

  getRendColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  setNewColor(car: Cars) {
    this.carsService.changeColor(car, this.getRendColor()).subscribe(res=>console.log(res));
  }

  delete(car: Cars) {
    this.carsService.deleteCar(car).subscribe(res => {
      this.cars =  this.cars.filter(a => a.id !== car.id);
    });
  }

}
