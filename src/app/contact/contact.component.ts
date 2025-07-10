import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private router: Router) { 
    console.log('inside contact');
  }

  name : string = 'Gowrinath';
  email: string = 'raggowrinath@gmail.com';
  phone: string = '+1 (647) 547-3738';
  location: string = 'Toronto, Canada';


  goToHome(){
    this.router.navigate(['home']);
  }
  
}
