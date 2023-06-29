import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { User } from '../type/JsonPlaceholderUser';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  @Input() usersl: User[] = [];

  constructor(private cd: ChangeDetectorRef){

  }
  refresh(){
    this.cd.detectChanges();
  }
}
