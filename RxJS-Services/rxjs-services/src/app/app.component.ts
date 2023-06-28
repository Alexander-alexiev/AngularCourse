import { Component } from '@angular/core';
import { User } from './type/Users';
import { UserListItemComponent } from './user-list-item/user-list-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-services';

  usersa: User[] = [
    {name: 'Ivan', age: 12 },
    {name: 'Mitko', age: 2 },
    {name: 'Pesho', age: 32 },
    {name: 'Gergana', age: 82 },
  ];
  // constructor(){
  //   setInterval(() =>{
  //     this.usersa.push({
  //       name: 'DemoName',
  //       age: 0,
  //     })

  //     console.log('user has been added');

  //   }, 3000);
  // }
  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user = {
      name: inputName.value,
      age: Number(inputAge.value),
    };

    this.usersa = [...this.usersa, user]

    inputAge.value = '';
    inputName.value = '';
  }
}
