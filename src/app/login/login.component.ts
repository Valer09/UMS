import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../classes/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {
    auth.usersignedin.subscribe(
      (user: User) => {
        router.navigate(['']);
      }
    );
  }

  ngOnInit(): void {
  }

  signIn(form: NgForm){
    if (!form.valid){
      return false;
    }
    const logged = this.auth.signIn(form.value.email, form.value.password
      /*,
      (r: any) => {
      if (r){
        this.router.navigate(['']);
      }}*/
      );
  }

}
