import { Component, OnInit } from '@angular/core';
import { divrigger } from './app.animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [divrigger]
})
export class AppComponent implements OnInit {
  isVisible = false;

  constructor() {}

  ngOnInit(): void {}





}
