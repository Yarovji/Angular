import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  answers = [{
    type: 'yes',
    text: 'так'
  },
  {
    type: 'no',
    text: 'ні'
  }];
}
