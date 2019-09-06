import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  @Output() onAddCar = new EventEmitter<{name: string, year: number}>();
  @ViewChild('carYearInput') carYearInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  addCar(carNameElem: HTMLInputElement) {
    console.log(this.carYearInput.nativeElement.value)
    this.onAddCar.emit({
      name: carNameElem.value,
      year: +this.carYearInput.nativeElement.value
    });
    carNameElem.value = '';
    this.carYearInput.nativeElement.value = '';
  }

}
