import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  canAddCarStatus = false;
  // inputText = '';
  carName = '';
  cars = ['Ford', 'Audi', 'BMW', 'Renault', 'Skoda'];
  items = [
    new Date(2015, 3, 23),
    new Date(2017, 5, 30),
    new Date(2006, 1, 4),
    new Date(2016, 4, 4),
    new Date(2000, 11, 10)
  ];

  constructor() { }

  ngOnInit() {
  }

  addCar() {
    this.canAddCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  // onKeyUp(event: Event) {
  //   this.inputText = (event.target as HTMLInputElement).value;
  // }

}
