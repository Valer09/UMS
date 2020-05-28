import {Injectable} from '@angular/core';
import {User} from '../classes/User';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {environment} from '../../environments/environment';

@Injectable()
export class UserService{
  users: User[] = [] ;
  // LOCALE: private APIURL = 'http://localhost:8000/users';
  private APIURL = environment.APIURL;


  constructor(private http: HttpClient, private auth: AuthService) {
  }
  getAuthHeader(): HttpHeaders{
    const headers = new HttpHeaders(
      {
        Authorization: 'Bearer ' + this.auth.getToken()
      }
    );
    return headers;
  }

  getUsers(){
    return this.http.get(this.APIURL, {
      headers: this.getAuthHeader()});
  }

  getUser(id: number){
    return this.http.get(this.APIURL + '/' + id, {
      headers: this.getAuthHeader()});
  }
  deleteUser(user: User){
    return this.http.delete(this.APIURL + '/' + user.id, {
      headers: this.getAuthHeader()}  );
  }

  updateUser(user: User){
    user['_method'] = 'PUT';
    return this.http.post(this.APIURL + '/' + user.id, user, {
      headers: this.getAuthHeader()}   );
  }

  createUser(user: User){
    // @ts-ignore
    return this.http.post(this.APIURL , user, {} , {
      headers: this.getAuthHeader()}  );
  }
}

