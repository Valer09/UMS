import {EventEmitter, Injectable, Output} from '@angular/core';
import {User} from '../classes/User';
import {HttpClient, HttpErrorResponse, HttpHeaderResponse} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';

interface Jwt {
  access_token: string;
  token_type: string;
  expires_in: number;
  user_name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLogged = false;
  @Output() usersignedin = new EventEmitter <User> ();
  @Output() usersignedup = new EventEmitter <User> ();
  @Output() userlogout= new EventEmitter ();
  // Locale: private APIAUTHURL = 'http://localhost:8000/api/auth/';
  private APIAUTHURL = environment.APIAUTH;

  constructor(private http: HttpClient) {
  }

  isUserLoggedIn() {
    this.isUserLogged = !!localStorage.getItem('token');
    return this.isUserLogged;
  }

  signIn(email: string, password: string /*callback*/){

    this.http.post(this.APIAUTHURL + 'login',
      {
      email: email,
      password: password
    }).subscribe(
        (payload: Jwt) => {
          // store token in local storage
          localStorage.setItem('token', payload.access_token);
          localStorage.setItem('user', JSON.stringify(payload));
          this.isUserLogged = true;
          const user = new User();
          user.name = payload.user_name;
          user.email = payload.email;
          this.usersignedin.emit(user);
          // callback(true);
          return true;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
    );



  }
  signUp(username: string, email: string, password: string){

    const user = new User();
    user.name = username;
    user.email = email;

    this.http.post(this.APIAUTHURL + 'signup',
      {
        email: email,
        password: password,
        name: username
      }
      ).subscribe(
      (payload: Jwt) => {
        // store token in local storage
        localStorage.setItem('token', payload.access_token);
        localStorage.setItem('user', JSON.stringify(payload));
        this.isUserLogged = true;
        this.usersignedup.emit(user);
        // callback(true);
        return true;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userlogout.emit();
    this.isUserLogged = false;
  }
  getUser(){
    const data = JSON.parse(localStorage.getItem('user'));
    const user = new User();
    if(data){
      user.name = data['user_name'];
      user.email = data['email'];
    }
    return user;
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
