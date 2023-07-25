import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersSubj$$ = new BehaviorSubject<Object | null>(null);

  userObs$ = this.usersSubj$$.asObservable();

  constructor(private http: HttpClient) {}

  loadUsers(): void {
    this.usersSubj$$.next(null);

    this.http.get('/api/users').subscribe({
      next: (users) => this.usersSubj$$.next(users),
    });
  }
}
