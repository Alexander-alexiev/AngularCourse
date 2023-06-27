import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnChanges {
  @Input('title') titleFromApp: string = '';
  @Input('activeUsers') activeUsers: {name:string, age:boolean}[] = [];
  @Output() onChildOutput = new EventEmitter<boolean>();

  title = 'hide';
  toggle = false;
  isActive = false;
  inputValue = 'Hello!';

  ngOnInit() {
    console.log('navigation -> initialization');
  }

  ngOnAfterViewInit() {
    console.log('navigation -> after view init');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('navigation -> changes');
  }
  

  handleClick(event: Event): void {
    this.toggle = !this.toggle;
    this.isActive = !this.isActive;
    this.onChildOutput.emit(this.isActive);
  }
}

