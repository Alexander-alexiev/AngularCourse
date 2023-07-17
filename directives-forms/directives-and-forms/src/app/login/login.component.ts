import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @ViewChild('loginForm') loginForm: NgForm | undefined;

  ngOnInit(): void {
    // will render only the static content
    this.loginForm?.valueChanges?.subscribe(console.log);
  }
  ngAfterViewInit(): void {
    // will render the final content with the dynamic components
  }
  // submitHandler(form: NgForm): void{
    submitHandler(): void{
      if (!this.loginForm) {
        return
      }
      const form = this.loginForm;
    if (form.invalid) {
      return;
    }
    form.setValue({
      email: '',
      password: '',
    });
    const value: { email: string; password: string } = form.value;
  }
}
