import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../interfaces/auth.interface';

import { BaseSettings } from './baseSettings';



@Injectable()
export class AuthService {
    private _userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    user: Observable<User> = this._userSubject.asObservable();

    constructor(
        public http: HttpClient,
        public router: Router,
        public baseSettings: BaseSettings
    ) { }

    get userValue(): User {
        return this._userSubject.value;
    }

    login(email: string, password: string): Observable<User> {
        return this.http
            .post<User>(`${this.baseSettings.apiUrl}/users/authenticate`, { email, password })
            .pipe(map(user => {
                localStorage.setItem('user', JSON.stringify(user));
                this._userSubject.next(user);
                return user;
            }));
    }

    logout(): void {
        localStorage.removeItem('user');
        this._userSubject.next(null);
        this.router.navigate([`${this.baseSettings.apiUrl}`]);
    }

    register(user: User): Observable<any> {
        return this.http.post(`/users/register`, user);
    }

    delete(id: number): Observable<any> {
        return this.http
            .delete(`${this.baseSettings.apiUrl}/users/${id}`)
            .pipe(map(x => {
                if (id == this.userValue.id) {
                    this.logout();
                }
                return x;
            }));
    }
}