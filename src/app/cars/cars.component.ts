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
  cars = ['Ford', 'Audi', 'BMW'];

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
