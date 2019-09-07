import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild('myForm') myForm: NgForm;

  answers = [{
    type: 'yes',
    text: 'так'
  },
  {
    type: 'no',
    text: 'ні'
  }];

  defoultcountry = 'ua';
  defoultanswer = 'yes';

  formData = {};
  isSubmited = false;

  submitForm() {
    console.log(this.myForm.value);
    this.formData = this.myForm.value;
    this.isSubmited = true;
    this.myForm.reset();
  }

  addRandomMail() {
    // this.myForm.setValue({
    //   email: 'ggg@ggg',
    //   pass: '123',
    //   country: 'pl',
    //   question: 'no'
    // });
    this.myForm.form.patchValue({
      email: 'sss@sss'
    });


  }
}
