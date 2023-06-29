import { Injectable } from '@angular/core';
import { User } from './type/JsonPlaceholderUser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()
export class UserService {
  usersa: User[] = [];

  constructor(private httpClient: HttpClient){
    // setInterval(() =>{
    //   this.usersa.push({
    //     name: 'DemoName',
    //     age: 0,
    //   })

    //   console.log('user has been added');

    // }, 3000);
  }
  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    // const user = {
    //   name: inputName.value,
    //   age: Number(inputAge.value),
    // };

    // this.usersa = [...this.usersa, user]

    inputAge.value = '';
    inputName.value = '';
  }

  getUsers(){
    // PROMISE
    // return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

    //OBSERVABLE
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
