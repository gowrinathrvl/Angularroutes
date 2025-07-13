import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  //using @input
  // user = { name: 'Alice' };


  private userSubject = new BehaviorSubject<{name: string}> ({name: 'Alice'});
  user$ = this.userSubject.asObservable()

  constructor(private router: Router) { }


  goToHome(){
    this.router.navigate(['home']);
  }
//using @input
  // changeName() {
  //   // this.user.name = 'Bob'; // ❌ Won’t trigger OnPush
  //   this.user = { ...this.user, name: 'Bob' }; //✅ This will
  // }

  changeName() {
    this.userSubject.next({ name: 'Bob' }); // Triggers change detection via async pipe
  }
}
