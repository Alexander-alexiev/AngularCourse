import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  title = 'hide';
  toggle = false;
  isActive = false;

  activeUsers = [
    {name: 'Mitko', age: 21}, 
    {name: 'Pesho', age: 22}, 
    {name: 'Mariika', age: 13}, 
    {name: 'Katya', age: 18}
  ];

  handleClick(): void {
    this.toggle = !this.toggle;
    this.isActive = !this.isActive;
  }
}

