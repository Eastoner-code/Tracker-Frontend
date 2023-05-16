import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { RegisterUser, UserApiModel } from '../../../api/models';
import { UserService } from '../../../api/services';
import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class AuthorizationAppService {
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public constructor(public http: HttpClient, public userService: UserService) {
    this.currentUserSubject = new BehaviorSubject<UserApiModel>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public currentUserSubject: BehaviorSubject<UserApiModel>;
  public currentUser: Observable<UserApiModel>;

  public isAuthenticated(): boolean {
    // Check whether the user is authenticated and return true or false
    return !this.currentUserValue ? false : true;
  }

  public login(body: any): Observable<UserApiModel> {
    return this.userService.apiUserLoginPost({ body }).pipe(
      map(user => {
        if (user) {
          // Store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      })
    );
  }

  public paswordGenerate() {
    const simbols = [];
    simbols[0] = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ];
    simbols[1] = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ];
    simbols[2] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    simbols[3] = [
      '!',
      '"',
      '"',
      '#',
      '$',
      '%',
      '&',
      "'",
      '(',
      ')',
      '*',
      '+',
      ',',
      '-',
      '.',
      '/',
      ':',
      ';',
      '<',
      '=',
      '>',
      '?',
      '@',
      '[',
      '\\',
      ']',
      '^',
      '_',
      '`',
      '{',
      '|',
      '}',
      '~'
    ];
    const passwordArray = [];
    simbols.forEach(x => {
      const start = Math.floor(Math.random() * (x.length - 3)) + 1;
      const end = start + (Math.floor(Math.random() * 3) + 2);
      passwordArray.push(...x.slice(start, end));
    });

    return passwordArray.join('');
  }

  public refreshLogin(): Observable<UserApiModel> {
    return this.userService
      .apiUserRefreshSignPost()
      .pipe(
        catchError((error: HttpErrorResponse) => {
          const msg = `${error.status} ${error.statusText} -  ${error.url}`;
          localStorage.removeItem('currentUser');
          return throwError(new Error(msg));
        })
      )
      .pipe(
        map(user => {
          // Login successful if there's a jwt token in the response'
          if (user) {
            // Store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
          }
          return user;
        })
      );
  }

  public register(newUser: RegisterUser): Observable<UserApiModel> {
    return this.userService.apiUserRegisterPost({ body: newUser }).pipe();
  }

  public logout() {
    // Remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
