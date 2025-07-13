import { Component , ChangeDetectionStrategy, Input} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponentComponent {
  //using @input from parent component
  // @Input() user!: { name: string; };

  @Input() user$!: Observable<{ name: string }>;

}
