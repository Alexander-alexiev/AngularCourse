import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, tap, Subscription } from 'rxjs';
import { User } from 'src/types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);

  user$ = this.user$$.asObservable();

  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
    // try {
    //   const lsUser = localStorage.getItem(this.USER_KEY) || '';
    //   this.user = JSON.parse(lsUser);
    // } catch (error) {
    //   this.user = undefined;
    // }
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }
  login(email: string, password: string) {
    // this.user = {
    //   email: 'john.doe@gmail.com',
    //   firstName: 'John'
    // }
    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    return this.http
      .post<User>('/api/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
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
    return this.http
      .post<User>('/api/register', {
        username,
        email,
        password,
        repassword,
        tel,
      })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    // this.user = undefined;
    // localStorage.removeItem(this.USER_KEY);
    return this.http
      .post<User>('/api/logout', {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }

  getProfile() {
    return this.http
      .get<User>('/api/users/profile')
      .pipe(tap((user) => this.user$$.next(user)));
  }

  updateProfile(username: string, email: string, tel?: string) {
    return this.http
      .put<User>('/api/users/profile', { username, email, tel })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
