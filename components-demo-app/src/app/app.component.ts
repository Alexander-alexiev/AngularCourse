import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components-demo-app';

  users = [
    { name: 'Mitko', age: true },
    { name: 'Pesho', age: true },
    { name: 'Mariika', age: false },
    { name: 'Katya', age: false }
  ];
  outputChildHandler(){
    console.log('onOUtputFromChild');
  }
}
