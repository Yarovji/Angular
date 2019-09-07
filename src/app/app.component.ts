import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { reject } from 'q';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  answers = [{
    type: 'yes',
    text: 'так'
  },
  {
    type: 'no',
    text: 'ні'
  }];

  myform: FormGroup;

  ngOnInit() {
    this.myform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email], this.checkForEmail),
      pass: new FormControl('', Validators.required),
      country: new FormControl('ua'),
      answer: new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.myform)
  }

  checkForEmail(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@i.ua') {
          resolve({
            emailIsUsed: true
          });
        } else {
          resolve(null);
        }
      }, 3000);
    });
  }

}
