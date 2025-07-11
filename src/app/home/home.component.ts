import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myForm: FormGroup ;
  submittedData: any = null;
  constructor(private fb: FormBuilder){
    this.myForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern, Validators.minLength(6), Validators.maxLength(10)]],
    })

  }

  onSubmit() {
    if (this.myForm.valid) {
      this.submittedData = this.myForm.value;
      console.log('Form Submitted:', this.myForm.value);
    } else {
      console.log('Form Invalid');
    }
  }

  clearForm(){
    this.myForm.reset();
  this.submittedData = null;
  }
}
