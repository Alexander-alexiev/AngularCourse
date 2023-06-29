import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './type/JsonPlaceholderUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs-services';
  appUsers: User[] = [];
  isLoading = true;

  constructor(public userService: UserService){
    this.appUsers = this.userService.usersa;
  }

  ngOnInit(): void {
    // this.userService.getUsers().then((usersa)=>{
    //   this.appUsers = usersa;
    //   this.isLoading = false;
    // });

    this.userService.getUsers().subscribe((usersa)=>{
         this.appUsers = usersa;
         this.isLoading = false;
       });
  }

  setUser(inputName: HTMLInputElement, inputAge: HTMLInputElement){
    this.userService.addUser(inputName, inputAge);
    this.appUsers = this.userService.usersa;
  }
}


