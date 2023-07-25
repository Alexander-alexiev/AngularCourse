import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined;
  USER_KEY = '[user]';
  get isLogged(): boolean {
    return !!this.user;
  }
  constructor(private http: HttpClient) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }
  login(email: string, password: string) {
    // this.user = {
    //   email: 'john.doe@gmail.com',
    //   firstName: 'John'
    // }
    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    return this.http.post('/api/login', { email, password });
  }

  register(
    username: string,
    email: string,
    password: string,
    repassword: string,
    tel: string
  ) {
    // this.user = {
    //   email: 'john.doe@gmail.com',
    //   firstName: 'John'
    // }
    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    return this.http.post('/api/register', {
      username,
      email,
      password,
      repassword,
      tel,
    });
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
