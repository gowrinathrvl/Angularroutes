import { Component , ChangeDetectionStrategy, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../user-service';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponentComponent implements OnInit {
  // apiUsers: User[] = [];

  apiUsers$!: Observable<User[]>;
 
  //using @input from parent component
  // @Input() user!: { name: string; };

  @Input() user$!: Observable<{ name: string }>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.userService.getUsers().subscribe((data) => {
    //   console.log(data);
    //   this.apiUsers = data;
    // });

    this.apiUsers$ = this.userService.getUsers();
  }

}
