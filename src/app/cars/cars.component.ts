import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Array<{name: string, year: number}> = [
    {name: 'Ford', year: 2017},
    // {name: 'Audi', year: 2017},
    // {name: 'BMW', year: 2017},
    // {name: 'Renault', year: 2017},
    // {name: 'Skoda', year: 2017}
  ];

  constructor() { }

  ngOnInit() {
  }

  updateCarList(car: {name: string, year: number}) {
    this.cars.push(car);
  }

}
